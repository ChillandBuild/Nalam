
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import ImageUpload from "../components/ImageUpload";
import FoodResultDisplay from "../components/FoodResultDisplay";
import { FoodAnalysisResult } from "../types/food";
import { Leaf, Sparkles } from "lucide-react";

const Search = () => {
  const [searchResult, setSearchResult] = useState<FoodAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchResult = (result: FoodAnalysisResult) => {
    setSearchResult(result);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-nature-earth-cream to-nature-moss-light/50 opacity-70"></div>
        
        {/* Organic gradient blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-nature-sage/15 blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-nature-forest/15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-nature-water/20 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-80 h-80 rounded-full bg-nature-sage/15 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Nature geometric elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nature-moss-light/10 rounded-bl-[40%] blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-nature-water-light/10 rounded-tr-[50%] blur-xl"></div>
        
        {/* Organic patterns */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(47, 88, 72, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 70% 70%, rgba(167, 203, 191, 0.1) 1px, transparent 1px)`
        }}></div>
      </div>
      
      <Navbar />
      
      <main className="flex-1 container px-4 py-8 md:py-12 mx-auto pt-36 md:pt-32">
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-nature-sage/10 blur-xl"></div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 organic-text relative z-10">
            <Sparkles className="inline-block mr-2 text-nature-forest" size={24} />
            Food Analysis
          </h1>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-nature-earth-gray bg-nature-moss-light/30 px-4 py-1.5 rounded-full inline-block flex items-center justify-center gap-2 shadow-soft backdrop-blur-sm border border-nature-sage/20">
              Know Your Food, Nourish Your World <Leaf size={14} className="text-nature-forest animate-leaf-sway" />
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto nature-card p-6 md:p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-nature-sage/30 to-nature-forest/20 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-nature-water/20 to-nature-sage/30 rounded-tr-[100px] -z-0"></div>
          
          <Tabs defaultValue="search" className="w-full relative z-10">
            <TabsList className="w-full mb-6 bg-nature-moss-light/50 rounded-full overflow-hidden">
              <TabsTrigger value="search" className="flex-1 rounded-full data-[state=active]:bg-nature-forest data-[state=active]:text-white data-[state=active]:shadow-nature">Search Product</TabsTrigger>
              <TabsTrigger value="upload" className="flex-1 rounded-full data-[state=active]:bg-nature-sage data-[state=active]:text-white data-[state=active]:shadow-nature">Upload Image</TabsTrigger>
              <TabsTrigger value="more" className="flex-1 rounded-full data-[state=active]:bg-nature-forest data-[state=active]:text-white data-[state=active]:shadow-nature">View More Food Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="search" className="mt-0 pt-2">
              <SearchForm onSearchResult={handleSearchResult} setIsLoading={setIsLoading} />
            </TabsContent>
            
            <TabsContent value="upload" className="mt-0 pt-2">
              <ImageUpload onUploadResult={handleSearchResult} setIsLoading={setIsLoading} />
            </TabsContent>
            
            <TabsContent value="more" className="mt-0 pt-2">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4 organic-text">More Food Analysis Options</h3>
                <p className="mb-6 text-nature-earth-gray">Explore our comprehensive food database and learn more about your favorite products.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-nature-moss-light/30 p-4 rounded-xl border border-nature-sage/30 nature-hover">
                    <h4 className="font-medium mb-2 text-nature-forest">Trending Products</h4>
                    <p className="text-sm text-nature-earth-gray">Discover what foods others are analyzing right now.</p>
                  </div>
                  
                  <div className="bg-nature-moss-light/30 p-4 rounded-xl border border-nature-sage/30 nature-hover">
                    <h4 className="font-medium mb-2 text-nature-forest">Healthy Alternatives</h4>
                    <p className="text-sm text-nature-earth-gray">Find better options for your favorite foods.</p>
                  </div>
                  
                  <div className="bg-nature-moss-light/30 p-4 rounded-xl border border-nature-sage/30 nature-hover">
                    <h4 className="font-medium mb-2 text-nature-forest">Seasonal Recommendations</h4>
                    <p className="text-sm text-nature-earth-gray">Foods that are in season and sustainability scores.</p>
                  </div>
                  
                  <div className="bg-nature-moss-light/30 p-4 rounded-xl border border-nature-sage/30 nature-hover">
                    <h4 className="font-medium mb-2 text-nature-forest">Detailed Nutrition</h4>
                    <p className="text-sm text-nature-earth-gray">Deep dive into detailed nutrition information.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {isLoading && (
          <div className="max-w-3xl mx-auto text-center py-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full forest-gradient mb-4 animate-pulse"></div>
              <div className="h-4 bg-nature-sage/40 rounded-full w-3/4 mb-2"></div>
              <div className="h-3 bg-nature-sage/30 rounded-full w-1/2"></div>
            </div>
          </div>
        )}
        
        {!isLoading && searchResult && (
          <FoodResultDisplay result={searchResult} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Search;
