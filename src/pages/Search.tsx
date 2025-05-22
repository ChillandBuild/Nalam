
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import ImageUpload from "../components/ImageUpload";
import FoodResultDisplay from "../components/FoodResultDisplay";
import { FoodAnalysisResult } from "../types/food";
import { Heart, Sparkles } from "lucide-react";

const Search = () => {
  const [searchResult, setSearchResult] = useState<FoodAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchResult = (result: FoodAnalysisResult) => {
    setSearchResult(result);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced modern background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFF7ED] to-[#FEE2E2]/50 opacity-70"></div>
        
        {/* Larger, more vibrant gradient blobs with animations */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F97316]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-[#F97316]/20 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-60 right-1/4 w-80 h-80 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        
        {/* Modern geometric elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FEC6A1]/10 rounded-bl-[30%] blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#FEC6A1]/10 rounded-tr-[40%] blur-xl"></div>
        
        {/* Subtle patterns */}
        <div className="absolute inset-0 bright-diagonal opacity-[0.02]"></div>
        <div className="absolute inset-0 modern-grid"></div>
        
        {/* Decorative lines */}
        <div className="absolute left-10 top-1/3 w-24 h-[1px] bg-gradient-to-r from-[#F97316]/50 to-transparent"></div>
        <div className="absolute right-10 top-2/3 w-24 h-[1px] bg-gradient-to-l from-[#ea384c]/50 to-transparent"></div>
      </div>
      
      <Navbar />
      <main className="flex-1 container px-4 py-8 md:py-12 mx-auto">
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-[#F97316]/10 blur-xl"></div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 orange-red-text relative z-10">
            <Sparkles className="inline-block mr-2 text-[#F97316]" size={24} />
            Food Analysis
          </h1>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-nalam-earth bg-gradient-to-r from-[#F97316]/10 to-[#ea384c]/10 px-4 py-1.5 rounded-full inline-block flex items-center justify-center gap-2 shadow-sm backdrop-blur-sm">
              Know Your Food, Nourish Your World <Heart size={14} className="text-[#ea384c] fill-[#ea384c] animate-bounce-soft" />
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-colorful p-6 md:p-8 mb-8 border border-[#F97316]/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F97316]/30 to-[#ea384c]/20 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#F97316]/20 to-[#ea384c]/30 rounded-tr-[100px] -z-0"></div>
          
          <Tabs defaultValue="search" className="w-full relative z-10">
            <TabsList className="w-full mb-6 orange-red-gradient-light rounded-full overflow-hidden">
              <TabsTrigger value="search" className="flex-1 rounded-full data-[state=active]:bg-[#F97316] data-[state=active]:text-white data-[state=active]:shadow-md">Search Product</TabsTrigger>
              <TabsTrigger value="upload" className="flex-1 rounded-full data-[state=active]:bg-[#ea384c] data-[state=active]:text-white data-[state=active]:shadow-md">Upload Image</TabsTrigger>
              <TabsTrigger value="more" className="flex-1 rounded-full data-[state=active]:bg-[#F97316] data-[state=active]:text-white data-[state=active]:shadow-md">View More Food Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="search" className="mt-0 pt-2">
              <SearchForm onSearchResult={handleSearchResult} setIsLoading={setIsLoading} />
            </TabsContent>
            
            <TabsContent value="upload" className="mt-0 pt-2">
              <ImageUpload onUploadResult={handleSearchResult} setIsLoading={setIsLoading} />
            </TabsContent>
            
            <TabsContent value="more" className="mt-0 pt-2">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4 orange-red-text">More Food Analysis Options</h3>
                <p className="mb-6">Explore our comprehensive food database and learn more about your favorite products.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#FFF7ED]/80 p-4 rounded-lg border border-[#F97316]/20 hover:shadow-md transition-shadow card-hover">
                    <h4 className="font-medium mb-2">Trending Products</h4>
                    <p className="text-sm text-muted-foreground">Discover what foods others are analyzing right now.</p>
                  </div>
                  
                  <div className="bg-[#FFF7ED]/80 p-4 rounded-lg border border-[#F97316]/20 hover:shadow-md transition-shadow card-hover">
                    <h4 className="font-medium mb-2">Healthy Alternatives</h4>
                    <p className="text-sm text-muted-foreground">Find better options for your favorite foods.</p>
                  </div>
                  
                  <div className="bg-[#FFF7ED]/80 p-4 rounded-lg border border-[#F97316]/20 hover:shadow-md transition-shadow card-hover">
                    <h4 className="font-medium mb-2">Seasonal Recommendations</h4>
                    <p className="text-sm text-muted-foreground">Foods that are in season and sustainability scores.</p>
                  </div>
                  
                  <div className="bg-[#FFF7ED]/80 p-4 rounded-lg border border-[#F97316]/20 hover:shadow-md transition-shadow card-hover">
                    <h4 className="font-medium mb-2">Detailed Nutrition</h4>
                    <p className="text-sm text-muted-foreground">Deep dive into detailed nutrition information.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {isLoading && (
          <div className="max-w-3xl mx-auto text-center py-8">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] mb-4 animate-pulse"></div>
              <div className="h-4 bg-gradient-to-r from-[#F97316]/40 to-[#ea384c]/40 rounded-full w-3/4 mb-2 animate-shimmer"></div>
              <div className="h-3 bg-gradient-to-r from-[#F97316]/30 to-[#ea384c]/30 rounded-full w-1/2 animate-shimmer"></div>
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
