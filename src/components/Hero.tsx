
import { Button } from "@/components/ui/button";
import { Apple, Egg } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient pt-10 pb-20 md:pt-20 md:pb-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nalam-sun to-nalam-sky/40 rounded-full py-2 px-4 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-nalam-green animate-pulse"></span>
              <span className="text-sm font-medium text-nalam-green-dark">Launching Soon</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Make <span className="text-nalam-green">eco-friendly</span> and <span className="text-nalam-green">healthy</span> choices
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Nalam empowers you to scan products, analyze meals, and discover sustainable alternatives with real-time contextual suggestions.
            </p>
            
            <div className="py-2 px-4 bg-gradient-to-r from-nalam-red/20 to-nalam-sun/30 rounded-lg border border-nalam-earth/20 my-4">
              <p className="text-lg md:text-2xl font-display font-semibold italic text-nalam-green-dark">
                "Eat This Way, Not That Way"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-nalam-sun hover:bg-nalam-sun/80 text-nalam-earth-dark">
                Get Early Access
              </Button>
              <Button size="lg" variant="outline" className="border-nalam-green text-nalam-green hover:bg-nalam-green/10">
                Learn More
              </Button>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-3">Available on</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <div className="bg-gradient-to-r from-nalam-green-dark to-nalam-green text-white rounded-lg px-4 py-2 flex items-center gap-2">
                  <Apple size={24} />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-nalam-earth-dark to-nalam-earth text-white rounded-lg px-4 py-2 flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5V3.5C3 2.4 3.9 1.5 5 1.5H19C20.1 1.5 21 2.4 21 3.5V20.5C21 21.6 20.1 22.5 19 22.5H5C3.9 22.5 3 21.6 3 20.5ZM12 17L18 12L12 7V17Z" fill="white"/>
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square w-full max-w-md mx-auto relative">
              {/* Phone mockup with app preview */}
              <div className="absolute inset-0 bg-gradient-to-br from-nalam-leaf/50 to-nalam-sky/50 rounded-3xl transform rotate-6 scale-90"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform -rotate-3 scale-95"></div>
              
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                <div className="bg-gradient-to-br from-nalam-green-light/20 to-nalam-sky/20 h-full w-full p-4">
                  {/* App mockup content */}
                  <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-nalam-sun to-nalam-leaf flex items-center justify-center">
                        <Egg className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">Organic Eggs</div>
                        <div className="text-xs text-muted-foreground">Scanned 2 minutes ago</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="eco-badge bg-gradient-to-r from-nalam-green to-nalam-leaf">Score: 85</div>
                      <div className="text-sm text-nalam-green">Local & Sustainable</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-white to-nalam-earth-light/30 rounded-lg p-4 shadow-sm mb-4">
                    <div className="text-sm font-medium mb-2">Contextual Suggestion</div>
                    <div className="text-xs text-muted-foreground">Morning is the perfect time for this protein-rich breakfast!</div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm font-medium mb-1">Healthier Alternatives</div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <div className="min-w-[100px] p-2 border rounded-lg text-center bg-nalam-sky/10">
                        <div className="w-6 h-6 bg-nalam-leaf rounded-full mx-auto mb-1"></div>
                        <div className="text-xs">Local Farm Eggs</div>
                      </div>
                      <div className="min-w-[100px] p-2 border rounded-lg text-center bg-nalam-sun/10">
                        <div className="w-6 h-6 bg-nalam-sky rounded-full mx-auto mb-1"></div>
                        <div className="text-xs">Tofu Scramble</div>
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

export default Hero;
