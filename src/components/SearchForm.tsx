
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FoodAnalysisResult } from "../types/food";
import { mockFoodData } from "../data/mockFoodData";

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
          className="pr-10"
        />
        <Search className="absolute right-3 text-gray-400" size={18} />
      </div>
      
      <Button type="submit" className="w-full bg-nalam-green hover:bg-nalam-green-dark">
        Search
      </Button>
      
      <p className="text-sm text-center text-muted-foreground mt-2">
        Try searching for: apple, chips, yogurt, burger, soda
      </p>
    </form>
  );
};

export default SearchForm;
