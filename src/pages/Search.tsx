
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import ImageUpload from "../components/ImageUpload";
import FoodResultDisplay from "../components/FoodResultDisplay";
import { FoodAnalysisResult } from "../types/food";

const Search = () => {
  const [searchResult, setSearchResult] = useState<FoodAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearchResult = (result: FoodAnalysisResult) => {
    setSearchResult(result);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-nalam-green-light/10 via-nalam-sky/5 to-background">
      <Navbar />
      <main className="flex-1 container px-4 py-8 mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 bg-gradient-to-r from-nalam-green to-nalam-leaf bg-clip-text text-transparent">
            Analyze Your Food Choices
          </h1>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg md:text-xl italic font-medium text-nalam-earth-dark inline-block py-1 px-6 bg-gradient-to-r from-nalam-sun/30 to-nalam-green-light/30 rounded-full">
              "Eat This Way, Not That Way"
            </p>
            <p className="text-sm text-nalam-earth bg-nalam-green/10 px-4 py-1 rounded-full inline-block">
              Know Your Food, Nourish Your World.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8 border border-nalam-green-light/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-nalam-green-light/30 to-nalam-leaf/20 rounded-bl-[100px] -z-0"></div>
          
          <Tabs defaultValue="search" className="w-full relative z-10">
            <TabsList className="w-full mb-6 bg-gradient-to-r from-nalam-green-light/20 to-nalam-sky/20">
              <TabsTrigger value="search" className="flex-1 data-[state=active]:bg-nalam-green data-[state=active]:text-white">Search Product</TabsTrigger>
              <TabsTrigger value="upload" className="flex-1 data-[state=active]:bg-nalam-green data-[state=active]:text-white">Upload Image</TabsTrigger>
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
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-nalam-green to-nalam-leaf mb-4"></div>
              <div className="h-4 bg-gradient-to-r from-nalam-green/40 to-nalam-leaf/40 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gradient-to-r from-nalam-green/30 to-nalam-leaf/30 rounded w-1/2"></div>
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
