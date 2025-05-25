
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, ArrowRight, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";
import * as z from "zod";
import { cleanupAuthState } from "@/lib/auth-utils";
import { useAuth } from "@/contexts/AuthContext";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  // If user is already logged in, redirect to dashboard
  if (user) {
    navigate("/dashboard");
    return null;
  }

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    setIsLoading(true);
    
    try {
      console.log("Signing up with data:", { name: data.name, email: data.email });
      
      // Clean up existing auth state to prevent conflicts
      cleanupAuthState();
      
      // Try to sign out any previous session globally
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        console.error("Error during pre-signup signout:", err);
        // Continue even if this fails
      }
      
      // Register the user with Supabase
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.name, // Store the name in user metadata
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      console.log("Signup successful, auth data:", authData);
      
      toast({
        title: "Account created successfully!",
        description: "You are now signed in.",
      });
      
      // Redirect to dashboard after successful sign up
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Signup error:", error);
      
      toast({
        title: "Failed to create account",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen organic-container flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Back to Home Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-nature-forest hover:text-[#F97316]"
      >
        <Home className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      {/* Nature-inspired background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-nature-earth-cream to-nature-moss-light opacity-90"></div>
        
        {/* Organic gradient blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-nature-sage/15 blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-nature-forest/15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-nature-water/20 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-80 h-80 rounded-full bg-nature-sage/15 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center shadow-nature">
              <Leaf className="w-5 h-5 text-white animate-leaf-sway" />
            </div>
            <div className="flex flex-col">
              <h1 className="nalam-cursive-logo text-4xl tracking-wide">Nalam</h1>
              <p className="text-xs text-nature-earth-gray">Growing sustainable choices</p>
            </div>
          </Link>
          <h2 className="text-3xl font-semibold text-center organic-text">Join Nalam Today</h2>
          <p className="text-nature-forest text-center">Create your account to start your sustainable journey</p>
        </div>
        
        {/* Form */}
        <div className="nature-card p-8 relative overflow-hidden">
          {/* Decorative elements inside the form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-nature-sage/10 to-nature-forest/5 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-nature-water/10 to-nature-sage/5 rounded-tr-[100px] -z-0"></div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 relative z-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="nature-label">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        className="nature-input" 
                        placeholder="John Doe" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="nature-label">Email</FormLabel>
                    <FormControl>
                      <Input 
                        className="nature-input" 
                        placeholder="you@example.com" 
                        type="email" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="nature-label">Password</FormLabel>
                      <FormControl>
                        <Input 
                          className="nature-input" 
                          placeholder="••••••••" 
                          type="password" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="nature-label">Confirm Password</FormLabel>
                      <FormControl>
                        <Input 
                          className="nature-input" 
                          placeholder="••••••••" 
                          type="password" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="agreeTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                    <FormControl>
                      <Checkbox 
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-nature-forest data-[state=checked]:bg-nature-forest data-[state=checked]:border-nature-forest" 
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-nature-earth-gray">
                        I agree to the <Link to="/terms" className="text-nature-forest hover:text-nature-sage underline transition-colors">Terms of Service</Link> and <Link to="/privacy" className="text-nature-forest hover:text-nature-sage underline transition-colors">Privacy Policy</Link>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full nature-button flex items-center justify-center gap-2 mt-6 group"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-nature-earth-gray">
              Already have an account?{" "}
              <Link to="/signin" className="text-nature-forest hover:text-nature-sage font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
