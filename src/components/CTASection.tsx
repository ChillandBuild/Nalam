
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      // In a real app, you'd send this to your backend
    }
  };

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#F97316] to-[#ea384c] rounded-3xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
                <p className="text-white/90 mb-6">
                  Join thousands of eco-conscious consumers who are making healthier choices for themselves and the planet.
                </p>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="max-w-sm">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Get early access to Nalam
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="bg-white text-[#F97316] hover:bg-white/90 font-medium"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                ) : (
                  <div className="bg-white/10 p-4 rounded-lg border border-white/20 max-w-sm">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                      <span className="font-medium">Thank you for joining!</span>
                    </div>
                    <p className="text-sm text-white/90">
                      We'll notify you when Nalam launches in your area.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-white/10 rounded-full absolute -top-8 -right-8"></div>
                  <div className="w-32 h-32 bg-white/10 rounded-full absolute -bottom-4 -left-4"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 rotate-3 shadow-lg">
                    <div className="bg-white rounded-xl p-4 -rotate-3 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] flex items-center justify-center text-white font-bold">N</div>
                          <span className="font-medium text-[#F97316]">Nalam</span>
                        </div>
                        <span className="text-xs px-2 py-1 bg-[#F97316]/10 text-[#F97316] rounded-full">Beta</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-medium">Your Impact This Month</div>
                        <div className="bg-[#F97316]/5 p-3 rounded-lg grid grid-cols-2 gap-2 text-center">
                          <div>
                            <div className="text-sm font-medium text-[#F97316]">12</div>
                            <div className="text-xs text-muted-foreground">Eco Swaps</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#F97316]">32 kg</div>
                            <div className="text-xs text-muted-foreground">CO₂ Saved</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#F97316]">8</div>
                            <div className="text-xs text-muted-foreground">Healthier Meals</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#F97316]">360</div>
                            <div className="text-xs text-muted-foreground">EcoPoints</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-full h-2 bg-[#F97316]/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#F97316] to-[#ea384c] w-3/4 rounded-full"></div>
                          </div>
                          <span className="text-xs font-medium">Next Level: 75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
