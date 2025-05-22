
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
      {/* Colorful background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFF7ED] to-[#FEE2E2]/50 opacity-70"></div>
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#F97316]/10 blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[#ea384c]/10 blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-[#FEC6A1]/20 blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-36 h-36 rounded-full bg-[#FFD54F]/10 blur-xl animate-float" style={{animationDelay: '2.2s'}}></div>
        
        {/* Subtle patterns */}
        <div className="absolute inset-0 bright-diagonal opacity-20"></div>
      </div>
      
      <Navbar />
      <main className="flex-1 container px-4 py-8 md:py-12 mx-auto">
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-12 bg-[#F97316]/10 blur-xl"></div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 orange-red-text relative z-10">
            Analyze Your Food Choices
            <Sparkles className="inline-block ml-2 text-[#F97316] animate-pulse" size={24} />
          </h1>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-nalam-earth bg-[#F97316]/10 px-4 py-1.5 rounded-full inline-block flex items-center justify-center gap-2 shadow-sm animate-pulse-orange-red">
              Know Your Food, Nourish Your World <Heart size={14} className="text-[#ea384c] fill-[#ea384c]" />
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-colorful p-6 md:p-8 mb-8 border border-[#F97316]/30 relative overflow-hidden card-hover">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F97316]/30 to-[#ea384c]/20 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#F97316]/20 to-[#ea384c]/30 rounded-tr-[100px] -z-0"></div>
          
          <Tabs defaultValue="search" className="w-full relative z-10">
            <TabsList className="w-full mb-6 orange-red-gradient-light">
              <TabsTrigger value="search" className="flex-1 data-[state=active]:bg-[#F97316] data-[state=active]:text-white data-[state=active]:shadow-md">Search Product</TabsTrigger>
              <TabsTrigger value="upload" className="flex-1 data-[state=active]:bg-[#ea384c] data-[state=active]:text-white data-[state=active]:shadow-md">Upload Image</TabsTrigger>
            </TabsList>
            
            <TabsContent value="search" className="mt-0 pt-2">
              <SearchForm onSearchResult={handleSearchResult} setIsLoading={setIsLoading} />
            </TabsContent>
            
            <TabsContent value="upload" className="mt-0 pt-2">
              <ImageUpload onUploadResult={handleSearchResult} setIsLoading={setIsLoading} />
            </TabsContent>
          </Tabs>
        </div>
        
        {isLoading && (
          <div className="max-w-3xl mx-auto text-center py-8">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] mb-4 animate-pulse-orange-red animate-bounce-soft"></div>
              <div className="h-4 bg-gradient-to-r from-[#F97316]/40 to-[#ea384c]/40 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gradient-to-r from-[#F97316]/30 to-[#ea384c]/30 rounded w-1/2"></div>
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
