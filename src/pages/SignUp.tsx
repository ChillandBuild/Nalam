
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";
import * as z from "zod";
import { cleanupAuthState } from "@/lib/auth-utils";

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
      // Clean up existing auth state to prevent conflicts
      cleanupAuthState();
      
      // Try to sign out any previous session globally
      try {
        await supabase.auth.signOut({ scope: 'global' });
      } catch (err) {
        // Continue even if this fails
      }
      
      // Register the user with Supabase
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.name,
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Account created successfully!",
        description: "Please check your email for the confirmation link.",
      });
      
      // Redirect to dashboard after successful sign up
      navigate("/dashboard");
    } catch (error: any) {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Modern animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#f8f8f8] opacity-90"></div>
        
        {/* Larger, more vibrant gradient blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F97316]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-[#F97316]/20 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-60 right-1/4 w-80 h-80 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        
        {/* Modern geometric elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FEC6A1]/10 rounded-bl-[30%] blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#FEC6A1]/10 rounded-tr-[40%] blur-xl"></div>
        
        {/* Subtle patterns */}
        <div className="absolute inset-0 bright-dots opacity-[0.03]"></div>
        <div className="absolute inset-0 bright-diagonal opacity-[0.02]"></div>
        
        {/* Decorative lines */}
        <div className="absolute left-10 top-1/3 w-24 h-[1px] bg-gradient-to-r from-[#F97316]/50 to-transparent"></div>
        <div className="absolute right-10 top-2/3 w-24 h-[1px] bg-gradient-to-l from-[#ea384c]/50 to-transparent"></div>
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-['Hugh_is_Life'] text-2xl text-nalam-earth-dark tracking-wide">Nalam</h1>
              <p className="text-xs text-nalam-earth-dark">Making sustainable choices easier</p>
            </div>
          </Link>
          <h2 className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#ea384c]">Join Nalam Today</h2>
          <p className="text-[#F97316] text-center">Create your account to start your sustainable journey</p>
        </div>
        
        {/* Form */}
        <div className="glass-card p-8 rounded-xl shadow-colorful border border-[#F97316]/10 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative elements inside the form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F97316]/10 to-[#ea384c]/5 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#F97316]/10 to-[#ea384c]/5 rounded-tr-[100px] -z-0"></div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 relative z-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        className="colorful-input" 
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
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input 
                        className="colorful-input" 
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
                      <FormLabel className="text-gray-700">Password</FormLabel>
                      <FormControl>
                        <Input 
                          className="colorful-input" 
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
                      <FormLabel className="text-gray-700">Confirm Password</FormLabel>
                      <FormControl>
                        <Input 
                          className="colorful-input" 
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
                        className="border-[#F97316] data-[state=checked]:bg-[#F97316] data-[state=checked]:border-[#F97316]" 
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-700">
                        I agree to the <Link to="/terms" className="text-[#F97316] hover:text-[#ea384c] underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#F97316] hover:text-[#ea384c] underline">Privacy Policy</Link>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2 mt-6 overflow-hidden group"
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
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#F97316] hover:text-[#ea384c] font-medium">
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
