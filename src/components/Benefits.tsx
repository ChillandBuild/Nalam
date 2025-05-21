
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits For You and The Planet</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nalam helps you make a positive impact on both your health and the environment.
          </p>
        </div>
        
        <Tabs defaultValue="personal" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="personal" className="text-base px-6 py-3">
                Your Benefits
              </TabsTrigger>
              <TabsTrigger value="environment" className="text-base px-6 py-3">
                Environmental Impact
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="personal" className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-nalam-green">Health & Wellness</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Smarter Food Choices</span>
                        <span className="text-sm text-muted-foreground">Learn optimal consumption timing and frequency for better nutrition.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Discover Healthier Alternatives</span>
                        <span className="text-sm text-muted-foreground">Find products with fewer additives, less sugar, and more nutrition.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Context-Aware Recommendations</span>
                        <span className="text-sm text-muted-foreground">Get meal suggestions aligned with your body's circadian rhythms.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Knowledge Is Power</span>
                        <span className="text-sm text-muted-foreground">Access clear information about health risks from certain products.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 bg-nalam-green/5 space-y-6">
                  <h3 className="text-2xl font-semibold text-nalam-green">Lifestyle Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Save Money</span>
                        <span className="text-sm text-muted-foreground">Compare prices and find affordable eco-friendly alternatives.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Earn Rewards</span>
                        <span className="text-sm text-muted-foreground">Get discounts and special offers from eco-friendly brands.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Make Shopping Easier</span>
                        <span className="text-sm text-muted-foreground">Quick decisions with clear information at your fingertips.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Discover Local Options</span>
                        <span className="text-sm text-muted-foreground">Find seasonal, local alternatives that are fresher and more affordable.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="environment" className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-nalam-green">Waste Reduction</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Less Packaging Waste</span>
                        <span className="text-sm text-muted-foreground">Choose products with more sustainable packaging options.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Reduce Food Waste</span>
                        <span className="text-sm text-muted-foreground">Learn about better storage and optimal consumption of perishables.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Promote Recycling</span>
                        <span className="text-sm text-muted-foreground">Identify and choose products with recyclable materials.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Support Reusability</span>
                        <span className="text-sm text-muted-foreground">Find products with refillable or reusable packaging systems.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 bg-nalam-green/5 space-y-6">
                  <h3 className="text-2xl font-semibold text-nalam-green">Climate & Communities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Reduced Carbon Footprint</span>
                        <span className="text-sm text-muted-foreground">Choose products with lower emissions in production and transport.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Support Local Economies</span>
                        <span className="text-sm text-muted-foreground">Discover nearby products, reducing transport emissions.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Better Labor Practices</span>
                        <span className="text-sm text-muted-foreground">Select products from companies with fair supply chain practices.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-nalam-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6666 3.5L5.25 9.91667L2.33331 7" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block mb-1">Protect Biodiversity</span>
                        <span className="text-sm text-muted-foreground">Support sustainable farming and resource management.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Benefits;
