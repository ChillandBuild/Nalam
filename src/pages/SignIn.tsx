
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useAuth } from "@/contexts/AuthContext";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, user } = useAuth();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsLoading(true);
    
    try {
      console.log("Sign in data:", data);
      
      const { error } = await signIn(data.email, data.password);
      
      if (error) {
        toast({
          title: "Sign in failed",
          description: error.message || "Please check your credentials and try again.",
          variant: "destructive",
        });
        console.error("Sign in error:", error);
      } else {
        toast({
          title: "Sign in successful!",
          description: "Welcome back to Nalam",
        });
        
        // Navigate happens automatically via the useEffect above
      }
    } catch (error: any) {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen organic-container flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Nature-inspired background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-nature-earth-cream to-nature-moss-light opacity-90"></div>
        
        {/* Organic gradient blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-nature-sage/15 blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-nature-forest/15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-nature-water/20 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-80 h-80 rounded-full bg-nature-sage/15 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Nature geometric elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nature-moss-light/10 rounded-bl-[40%] blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-nature-water-light/10 rounded-tr-[50%] blur-xl"></div>
      </div>
      
      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Logo and Heading */}
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center shadow-nature">
              <Leaf className="w-5 h-5 text-white animate-leaf-sway" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-heading text-4xl font-bold organic-text tracking-wide">Nalam</h1>
              <p className="text-xs text-nature-earth-gray">Growing sustainable choices</p>
            </div>
          </Link>
          <h2 className="text-3xl font-semibold text-center organic-text">Welcome Back</h2>
          <p className="text-nature-forest text-center">Sign in to your Nalam account</p>
        </div>
        
        {/* Form */}
        <div className="nature-card p-8 relative overflow-hidden">
          {/* Decorative elements inside the form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-nature-sage/10 to-nature-forest/5 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-nature-water/10 to-nature-sage/5 rounded-tr-[100px] -z-0"></div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
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
              
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-nature-forest data-[state=checked]:bg-nature-forest data-[state=checked]:border-nature-forest" 
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-nature-earth-gray">Remember me</FormLabel>
                    </FormItem>
                  )}
                />
                
                <Link to="/forgot-password" className="text-sm text-nature-forest hover:text-nature-sage transition-colors">
                  Forgot password?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                className="w-full nature-button flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-nature-earth-gray">
              Don't have an account?{" "}
              <Link to="/signup" className="text-nature-forest hover:text-nature-sage font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
