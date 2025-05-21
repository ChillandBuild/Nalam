
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import ImageUpload from "../components/ImageUpload";
import FoodResultDisplay from "../components/FoodResultDisplay";
import { FoodAnalysisResult } from "../types/food";
import { Heart } from "lucide-react";

const Search = () => {
  const [searchResult, setSearchResult] = useState<FoodAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchResult = (result: FoodAnalysisResult) => {
    setSearchResult(result);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F97316]/10 via-[#ea384c]/5 to-background">
      <Navbar />
      <main className="flex-1 container px-4 py-8 md:py-12 mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 orange-red-text">
            Analyze Your Food Choices
          </h1>
          
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg md:text-xl italic font-medium text-nalam-earth-dark inline-block py-1.5 px-6 bg-gradient-to-r from-[#F97316]/30 to-[#ea384c]/30 rounded-full">
              "Eat This Way, Not That Way"
            </p>
            <p className="text-sm text-nalam-earth bg-[#F97316]/10 px-4 py-1.5 rounded-full inline-block flex items-center justify-center gap-2">
              Know Your Food, Nourish Your World <Heart size={14} className="text-[#ea384c] fill-[#ea384c]" />
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 border border-[#F97316]/30 relative overflow-hidden card-hover">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F97316]/30 to-[#ea384c]/20 rounded-bl-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#F97316]/20 to-[#ea384c]/30 rounded-tr-[100px] -z-0"></div>
          
          <Tabs defaultValue="search" className="w-full relative z-10">
            <TabsList className="w-full mb-6 orange-red-gradient-light">
              <TabsTrigger value="search" className="flex-1 data-[state=active]:bg-[#F97316] data-[state=active]:text-white">Search Product</TabsTrigger>
              <TabsTrigger value="upload" className="flex-1 data-[state=active]:bg-[#ea384c] data-[state=active]:text-white">Upload Image</TabsTrigger>
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
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] mb-4 animate-pulse-orange-red"></div>
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
