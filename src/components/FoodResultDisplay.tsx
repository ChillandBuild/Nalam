
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FoodAnalysisResult } from "../types/food";
import { Leaf, Carrot, Check, AlertTriangle, Clock, ArrowDown, Package, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FoodResultDisplayProps {
  result: FoodAnalysisResult;
}

const FoodResultDisplay = ({ result }: FoodResultDisplayProps) => {
  const getSustainabilityColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-green-400";
    if (score >= 40) return "bg-yellow-400";
    if (score >= 20) return "bg-orange-400";
    return "bg-red-500";
  };
  
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Card className="overflow-hidden border-nalam-green/20">
        <CardHeader className={cn(
          "bg-gradient-to-r",
          result.isJunkFood 
            ? "from-nalam-sun/30 to-nalam-red/20" 
            : "from-nalam-green/10 to-nalam-leaf/20"
        )}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {result.imageUrl && (
                <div className="w-16 h-16 rounded-md overflow-hidden border border-nalam-green/20">
                  <img 
                    src={result.imageUrl} 
                    alt={result.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  {result.name} 
                  <span className="text-base bg-nalam-green-light/20 px-2 py-0.5 rounded text-nalam-green italic">
                    {result.isJunkFood ? "Not That Way" : "Eat This Way"}
                  </span>
                </CardTitle>
                <CardDescription>{result.category}</CardDescription>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-1">
                <span className="mr-2 text-sm">Sustainability Score:</span>
                <Badge className={`${getSustainabilityColor(result.sustainabilityScore)} text-white`}>
                  {result.sustainabilityScore}/100
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">
                Confidence: {result.confidencePercentage}%
              </div>
            </div>
          </div>
        </CardHeader>

        <div className="bg-nalam-sky/10 py-2 px-6 text-center border-b border-nalam-green/10">
          <p className="text-nalam-earth-dark font-medium italic">
            "Know Your Food, Nourish Your World."
          </p>
        </div>
        
        <CardContent className="pt-6 pb-2">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="bg-gradient-to-br from-white to-nalam-sky/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-nalam-green flex items-center gap-2">
                {result.isJunkFood ? (
                  <>
                    <AlertTriangle size={20} className="text-nalam-red" />
                    Consumption Guidelines
                  </>
                ) : (
                  <>
                    <Leaf size={20} className="text-nalam-green" />
                    Nutritional Benefits
                  </>
                )}
              </h3>
              
              <div className="space-y-4">
                {!result.isJunkFood && result.nutritionalHighlights && (
                  <div>
                    <h4 className="font-medium mb-1 flex items-center">
                      <span className="w-3 h-3 rounded-full bg-gradient-to-br from-nalam-green to-nalam-leaf mr-2"></span>
                      Nutritional Highlights
                    </h4>
                    <ul className="ml-5 space-y-1">
                      {result.nutritionalHighlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check size={16} className="text-nalam-green shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium mb-1 flex items-center">
                    <span className={cn(
                      "w-3 h-3 rounded-full mr-2",
                      result.isJunkFood 
                        ? "bg-gradient-to-br from-nalam-sun to-nalam-red" 
                        : "bg-gradient-to-br from-nalam-green to-nalam-leaf"
                    )}></span>
                    <ArrowDown size={16} className="mr-1" />
                    Recommended Frequency
                  </h4>
                  <p className="text-sm ml-5">{result.consumptionFrequency}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 flex items-center">
                    <span className={cn(
                      "w-3 h-3 rounded-full mr-2",
                      result.isJunkFood 
                        ? "bg-gradient-to-br from-nalam-sun to-nalam-red" 
                        : "bg-gradient-to-br from-nalam-green to-nalam-leaf"
                    )}></span>
                    <Clock size={16} className="mr-1" />
                    Optimal Timing
                  </h4>
                  <p className="text-sm ml-5">{result.optimalTiming}</p>
                </div>
                
                {result.healthRisks.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-1 flex items-center">
                      <span className="w-3 h-3 rounded-full bg-gradient-to-r from-nalam-red to-red-400 mr-2"></span>
                      Health Risks
                    </h4>
                    <ul className="list-disc text-sm ml-8 space-y-1">
                      {result.healthRisks.map((risk, index) => (
                        <li key={index}>{risk}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right column */}
            <div className="bg-gradient-to-br from-white to-nalam-sun/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-nalam-green flex items-center gap-2">
                <Carrot size={20} className="text-nalam-leaf" />
                Sustainability Metrics
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-36 text-sm">Packaging</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-nalam-green to-nalam-leaf" 
                        style={{ width: `${result.sustainability.packaging}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-sm">{result.sustainability.packaging}%</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-36 text-sm flex items-center">
                    <TrendingDown size={14} className="mr-1" />
                    Carbon Footprint
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-nalam-green to-nalam-leaf" 
                        style={{ width: `${result.sustainability.carbonFootprint}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-sm">{result.sustainability.carbonFootprint}%</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-36 text-sm">Supply Chain</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-nalam-green to-nalam-leaf" 
                        style={{ width: `${result.sustainability.supplyChain}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-sm">{result.sustainability.supplyChain}%</div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-36 text-sm">Ingredients</div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-nalam-green to-nalam-leaf" 
                        style={{ width: `${result.sustainability.ingredients}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-8 text-right text-sm">{result.sustainability.ingredients}%</div>
                </div>
              </div>

              {/* Plastic packaging section */}
              {result.plasticInfo && result.plasticInfo.isPlastic && (
                <div className="mt-5 border-t border-nalam-green/20 pt-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-nalam-earth-dark">
                    <Package size={18} />
                    Plastic Packaging Impact
                  </h4>
                  <div className="bg-nalam-red/10 p-3 rounded-lg text-sm space-y-2">
                    <p><span className="font-medium">Decomposition Time:</span> {result.plasticInfo.decompositionTime}</p>
                    <p><span className="font-medium">Environmental Impact:</span> {result.plasticInfo.impact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {result.contextualSuggestion && (
            <div className="mt-6 bg-gradient-to-r from-nalam-earth-light/30 to-nalam-sun/10 p-4 rounded-lg border border-nalam-earth-light/30">
              <h4 className="font-medium mb-2 text-nalam-earth-dark">Contextual Suggestion</h4>
              <p className="text-sm">{result.contextualSuggestion}</p>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex-col items-start border-t pt-6 bg-gradient-to-br from-white to-nalam-green-light/10">
          <h3 className="text-lg font-semibold mb-3 text-nalam-green flex items-center gap-2">
            {result.isJunkFood ? (
              <span className="text-red-500 line-through text-sm">Not That Way</span>
            ) : (
              <Leaf size={18} className="text-nalam-green" />
            )}
            Healthier Alternatives
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {result.alternatives.map((alt, index) => (
              <div key={index} className="bg-gradient-to-br from-nalam-green-light/10 to-nalam-sun/10 p-3 rounded-lg hover:shadow-md transition-shadow duration-200 border border-nalam-green-light/20">
                <h4 className="font-medium">{alt.name}</h4>
                <div className="flex items-center text-xs mt-1">
                  <span className="mr-1">Score:</span>
                  <Badge className="bg-gradient-to-r from-nalam-green to-nalam-leaf text-white">{alt.score}/100</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{alt.benefit}</p>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FoodResultDisplay;
