
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FoodAnalysisResult } from "../types/food";
import { mockFoodData } from "../data/mockFoodData";
import { Carrot, Apple, Candy } from "lucide-react";

interface SearchFormProps {
  onSearchResult: (result: FoodAnalysisResult) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const SearchForm = ({ onSearchResult, setIsLoading }: SearchFormProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Find matching food in our mock data or return a default
      const result = mockFoodData.find(
        food => food.name.toLowerCase().includes(query.toLowerCase())
      ) || mockFoodData[0];
      
      onSearchResult(result);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="flex items-center relative">
        <Input
          type="text"
          placeholder="Search for a food product (e.g., apple, chips, yogurt)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10 border-nalam-green-light focus:border-nalam-green"
        />
        <Search className="absolute right-3 text-nalam-green" size={18} />
      </div>
      
      <Button type="submit" className="w-full bg-gradient-to-r from-nalam-green to-nalam-leaf hover:opacity-90 text-white">
        Search
      </Button>
      
      <div className="bg-gradient-to-r from-nalam-sky/20 to-nalam-sun/20 p-3 rounded-lg mt-4">
        <p className="text-sm text-center text-nalam-earth-dark font-medium mb-2">
          Try searching for these healthy options:
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs shadow-sm">
            <Apple size={14} className="text-nalam-red" /> 
            <span>apple</span>
          </div>
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs shadow-sm">
            <Carrot size={14} className="text-nalam-leaf" /> 
            <span>yogurt</span>
          </div>
          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs shadow-sm">
            <Candy size={14} className="text-nalam-sun" /> 
            <span>chips</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
