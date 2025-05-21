
import { Apple, Sandwich, Carrot } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-nalam-green/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Nalam Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making sustainable and healthy choices has never been easier. Nalam guides you every step of the way.
          </p>
        </div>
        
        <div className="relative">
          {/* Connect dots line for desktop */}
          <div className="hidden md:block absolute top-24 left-1/2 h-[calc(100%-130px)] w-1 bg-nalam-green/20 -translate-x-1/2 rounded-full z-0"></div>
          
          {/* Steps */}
          <div className="space-y-16 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2 flex justify-end order-1 md:order-none">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
                  <div className="w-12 h-12 bg-nalam-green rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-3">Scan Products or Upload Food Images</h3>
                  <p className="text-muted-foreground mb-4">
                    Use your phone camera to scan product barcodes or upload images of your meals. Nalam instantly recognizes what you're looking at.
                  </p>
                  <div className="bg-nalam-green/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nalam-green">
                        <path d="M8 1V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                      </svg>
                      <span className="font-medium text-foreground">Pro Tip:</span>
                    </div>
                    <p className="text-sm mt-1">
                      Make sure the barcode is clear and centered or that food images are well-lit for best results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                <div className="w-24 h-24 rounded-full bg-nalam-green flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M7 7h.01"></path>
                    <path d="M17 7h.01"></path>
                    <path d="M7 17h.01"></path>
                    <path d="M17 17h.01"></path>
                    <path d="M7 12h10"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2 md:pr-12 flex justify-center md:justify-end order-1 md:order-1">
                <div className="w-24 h-24 rounded-full bg-nalam-green flex items-center justify-center shadow-lg">
                  <Apple size={40} className="text-white" />
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start order-2">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
                  <div className="w-12 h-12 bg-nalam-green rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-3">Get Detailed Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    Receive comprehensive sustainability scores and health insights, including optimal consumption frequency and timing suggestions.
                  </p>
                  <div className="bg-nalam-green/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nalam-green">
                        <path d="M8 1V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                      </svg>
                      <span className="font-medium text-foreground">Pro Tip:</span>
                    </div>
                    <p className="text-sm mt-1">
                      Enable location services for even more personalized recommendations based on local availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2 flex justify-end order-1 md:order-none">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
                  <div className="w-12 h-12 bg-nalam-green rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                  <h3 className="text-xl font-semibold mb-3">Explore Alternatives</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover greener, healthier alternatives tailored to your preferences, time of day, and location, with price comparisons and availability.
                  </p>
                  <div className="bg-nalam-green/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nalam-green">
                        <path d="M8 1V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                      </svg>
                      <span className="font-medium text-foreground">Pro Tip:</span>
                    </div>
                    <p className="text-sm mt-1">
                      Save your favorite alternatives for quick access when shopping next time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                <div className="w-24 h-24 rounded-full bg-nalam-green flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7.9 20 6.2-16h2l-6.2 16Z"></path>
                    <path d="M5 4h14"></path>
                    <path d="M5 20h14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2 md:pr-12 flex justify-center md:justify-end order-1 md:order-1">
                <div className="w-24 h-24 rounded-full bg-nalam-green flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.95 1 4.8a3.92 3.92 0 0 0 1.67 1.899c.458.256 1.003.442 1.594.529.603.086 1.185.093 1.666.041"></path>
                    <path d="M4.8 16a19.5 19.5 0 0 0 0 6"></path>
                    <circle cx="15" cy="5" r="2"></circle>
                    <path d="m14 8 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start order-2">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
                  <div className="w-12 h-12 bg-nalam-green rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
                  <h3 className="text-xl font-semibold mb-3">Track Progress & Earn Rewards</h3>
                  <p className="text-muted-foreground mb-4">
                    Level up your eco-friendly journey, earn EcoPoints, and unlock badges as you make more sustainable and healthy choices.
                  </p>
                  <div className="bg-nalam-green/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-nalam-green">
                        <path d="M8 1V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                      </svg>
                      <span className="font-medium text-foreground">Pro Tip:</span>
                    </div>
                    <p className="text-sm mt-1">
                      Check in daily to maintain your streak and participate in EcoTrivia for bonus points.
                    </p>
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

export default HowItWorks;
