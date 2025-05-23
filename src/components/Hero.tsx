import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Apple, Heart, Coffee, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { mockFoodData } from "../data/mockFoodData";
import { FoodAnalysisResult } from "../types/food";
import { Toggle } from "@/components/ui/toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showFactOfDay, setShowFactOfDay] = useState(false);
  const [searchResult, setSearchResult] = useState<FoodAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResult = (result: FoodAnalysisResult) => {
    setSearchResult(result);
  };

  const foodFacts = [
    "Did you know? Eating a rainbow of fruits and vegetables helps ensure you get a variety of nutrients.",
    "Fact: Dark chocolate with at least 70% cocoa has numerous health benefits including antioxidants.",
    "Eating slowly helps you recognize when you're full, which can prevent overeating.",
    "The average person consumes about 4-5 pounds of food per day.",
    "Honey is the only food that doesn't spoil. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat."
  ];
  
  const randomFact = foodFacts[Math.floor(Math.random() * foodFacts.length)];

  return (
    <section className="hero-gradient pt-24 pb-20 md:pt-32 md:pb-32 relative overflow-hidden" id="hero">
      {/* Background elements - removed animations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#f8f8f8] opacity-80"></div>
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#F97316]/10 blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[#ea384c]/10 blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-[#F97316]/20 blur-xl"></div>
        <div className="absolute bottom-60 right-1/4 w-36 h-36 rounded-full bg-[#ea384c]/10 blur-xl"></div>
        
        {/* Subtle patterns */}
        <div className="absolute inset-0 bright-dots"></div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent">
              Make better choices for your health and the planet
            </h2>
            
            <div className="flex flex-col gap-4 w-full">
              {/* Main card - removed animation classes */}
              <Card className="bg-white overflow-hidden border-none shadow-xl mt-4 group rounded-[2rem]">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#F97316]/20 to-[#ea384c]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#F97316]/20 to-[#ea384c]/20 rounded-full blur-xl"></div>
                
                <CardHeader className="rounded-t-[2rem] bg-gradient-to-r from-[#F97316] to-[#ea384c] p-6">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="h-6 w-6" />
                    <span>Healthy Food Choices</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 relative z-10">
                  <div className="space-y-4">
                    {/* Example content - removed animation classes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-white to-[#F97316]/5 p-4 rounded-xl shadow-sm border border-[#F97316]/20 hover:shadow-md transition-all duration-300">
                        <h4 className="font-semibold text-[#F97316] mb-1">Sustainable Diet Tips</h4>
                        <p className="text-sm text-nalam-earth-dark">Choose locally sourced, seasonal foods to reduce your carbon footprint.</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-white to-[#ea384c]/5 p-4 rounded-xl shadow-sm border border-[#ea384c]/20 hover:shadow-md transition-all duration-300">
                        <h4 className="font-semibold text-[#ea384c] mb-1">Eco-Friendly Packaging</h4>
                        <p className="text-sm text-nalam-earth-dark">Look for products with minimal or recyclable packaging to reduce waste.</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-white to-[#ea384c]/5 p-4 rounded-xl shadow-sm border border-[#ea384c]/20 hover:shadow-md transition-all duration-300">
                        <h4 className="font-semibold text-[#ea384c] mb-1">Monthly Health Goals</h4>
                        <ul className="text-sm text-nalam-earth-dark space-y-1 list-disc pl-4">
                          <li>Reduce processed food intake</li>
                          <li>Increase vegetable consumption</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-br from-white to-[#F97316]/5 p-4 rounded-xl shadow-sm border border-[#F97316]/20 hover:shadow-md transition-all duration-300">
                        <h4 className="font-semibold text-[#F97316] mb-1">Weekly Meal Planning</h4>
                        <p className="text-sm text-nalam-earth-dark">Plan your meals to avoid waste and make healthier choices.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {!searchResult && !showSearch && (
                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3">Available on</p>
                  <div className="flex gap-3 justify-center md:justify-start">
                    <div className="bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white rounded-[1rem] px-4 py-2 flex items-center gap-2">
                      <Apple size={24} />
                      <div>
                        <div className="text-xs">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#ea384c] to-[#F97316] text-white rounded-[1rem] px-4 py-2 flex items-center gap-2">
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
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            {/* Mock Data Display - removed animation classes */}
            <div className="mt-6 md:mt-0">
              <Card className="overflow-hidden border-none shadow-xl rounded-[2rem] bg-gradient-to-br from-white to-[#FFF7ED] group">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#F97316]/30 to-[#ea384c]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-[#F97316]/20 to-[#ea384c]/30 rounded-full blur-xl"></div>
                
                <CardHeader className="rounded-t-[2rem] bg-gradient-to-r from-[#F97316] to-[#ea384c] p-6">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Sparkles className="h-6 w-6" />
                    <span>Popular Food Analysis</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 relative z-10">
                  <div className="space-y-5">
                    {/* Cold Coffee - removed animation classes */}
                    <div className="bg-gradient-to-br from-white to-[#F97316]/10 p-4 rounded-[1.5rem] shadow-sm border border-[#F97316]/20 hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[#F97316]">Cold Coffee</h4>
                          <p className="text-xs text-muted-foreground">Junk Beverage</p>
                        </div>
                        <span className="bg-[#ea384c]/10 text-[#ea384c] text-xs px-2 py-1 rounded-full">
                          180 cal
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="text-xs">
                          <p><span className="font-medium">Best Time:</span> Morning</p>
                          <p><span className="font-medium">Sugar:</span> 22g</p>
                        </div>
                        <div className="text-xs">
                          <p><span className="font-medium">Monthly Limit:</span> 6-8 servings</p>
                          <p><span className="font-medium">Impact:</span> High</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Instant Noodles - removed animation classes */}
                    <div className="bg-gradient-to-br from-white to-[#ea384c]/10 p-4 rounded-[1.5rem] shadow-sm border border-[#ea384c]/20 hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[#ea384c]">Instant Noodles</h4>
                          <p className="text-xs text-muted-foreground">Junk Food</p>
                        </div>
                        <span className="bg-[#F97316]/10 text-[#F97316] text-xs px-2 py-1 rounded-full">
                          340 cal
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="text-xs">
                          <p><span className="font-medium">Sodium:</span> 950mg</p>
                          <p><span className="font-medium">Monthly Limit:</span> 2-3 packs</p>
                        </div>
                        <div className="text-xs">
                          <p><span className="font-medium">Alternative:</span> Whole wheat noodles</p>
                          <p><span className="font-medium">Impact:</span> Moderate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Search and Fact of the Day - removed animation classes */}
                  <div className="space-y-4 mt-6 border-t border-[#F97316]/10 pt-4">
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white rounded-[1rem]"
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <Search size={18} className="mr-2" />
                        {showSearch ? "Hide Search" : "Quick Search"}
                      </Button>
                      
                      <Button 
                        className="flex-1 bg-gradient-to-r from-[#ea384c] to-[#F97316] hover:opacity-90 text-white rounded-[1rem]"
                        onClick={() => setShowFactOfDay(!showFactOfDay)}
                      >
                        <Coffee size={18} className="mr-2" />
                        Food Fact
                      </Button>
                    </div>
                    
                    {showFactOfDay && (
                      <div className="bg-gradient-to-r from-[#F97316]/10 to-[#ea384c]/10 rounded-[1.5rem] p-4 border border-[#F97316]/30">
                        <h3 className="font-display font-semibold text-[#ea384c] mb-2 flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          Food Fact of the Day
                        </h3>
                        <p className="text-nalam-earth-dark text-sm">{randomFact}</p>
                      </div>
                    )}
                    
                    {showSearch && (
                      <div className="bg-white rounded-[1.5rem] shadow-md p-4 border border-[#F97316]/30">
                        <SearchForm onSearchResult={handleSearchResult} setIsLoading={setIsLoading} />
                      </div>
                    )}
                    
                    {isLoading && (
                      <div className="text-center py-4">
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] mb-4"></div>
                          <div className="h-4 bg-gradient-to-r from-[#F97316]/40 to-[#ea384c]/40 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-gradient-to-r from-[#F97316]/30 to-[#ea384c]/30 rounded w-1/2"></div>
                        </div>
                      </div>
                    )}
                    
                    {!isLoading && searchResult && (
                      <div className="bg-gradient-to-r from-[#F97316]/5 to-[#ea384c]/5 rounded-[1.5rem] shadow-md p-4 border border-[#F97316]/30">
                        <h3 className="text-xl font-display font-bold text-[#ea384c] mb-4">{searchResult.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-nalam-earth-dark mb-1"><span className="font-semibold">Category:</span> {searchResult.category}</p>
                            <p className="text-sm text-nalam-earth-dark mb-1"><span className="font-semibold">Consumption:</span> {searchResult.consumptionFrequency}</p>
                            <div className="mt-2">
                              <span className={`px-3 py-1 rounded-full text-white text-xs ${searchResult.isJunkFood ? "bg-[#ea384c]" : "bg-[#F97316]"}`}>
                                {searchResult.isJunkFood ? "Junk Food" : "Healthy Choice"}
                              </span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#F97316] mb-1">Health Risks:</h4>
                            <ul className="list-disc pl-5 text-xs">
                              {searchResult.healthRisks.slice(0, 2).map((risk, i) => (
                                <li key={i} className="text-nalam-earth-dark">{risk}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* View More Button */}
                  <div className="text-center mt-4">
                    <Link to="/search">
                      <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 w-full rounded-[1rem]">
                        View More Food Analysis
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
