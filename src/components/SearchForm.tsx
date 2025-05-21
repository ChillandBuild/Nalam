
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FoodAnalysisResult } from "../types/food";
import { mockFoodData } from "../data/mockFoodData";
import { Carrot, Apple, Candy, Coffee } from "lucide-react";

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

  // Quick search items for popular mock data
  const quickSearchItems = [
    { name: "Cold Coffee", icon: Coffee, color: "#F97316" },
    { name: "Instant Noodles", icon: Carrot, color: "#ea384c" },
    { name: "Potato Chips", icon: Candy, color: "#F97316" },
    { name: "Breakfast Cereal", icon: Apple, color: "#ea384c" },
  ];

  const handleQuickSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    
    // Optional: auto-submit the form if desired
    setIsLoading(true);
    setTimeout(() => {
      // Find matching food in our mock data or return a default
      const result = mockFoodData.find(
        food => food.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || mockFoodData[0];
      
      onSearchResult(result);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-5">
      <div className="flex items-center relative">
        <Input
          type="text"
          placeholder="Search for a food product (e.g., apple, chips, yogurt)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10 border-[#F97316] focus-visible:ring-[#ea384c]"
        />
        <Search className="absolute right-3 text-[#F97316]" size={18} />
      </div>
      
      <Button type="submit" className="w-full orange-red-gradient hover:opacity-90 text-white">
        Search
      </Button>
      
      <div className="orange-red-gradient-light p-4 rounded-lg mt-4">
        <p className="text-sm text-center text-nalam-earth-dark font-medium mb-3">
          Try searching for these items:
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {quickSearchItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleQuickSearch(item.name)}
              className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs shadow-sm hover:shadow-md transition-shadow border border-[#F97316]/20"
            >
              <item.icon size={14} style={{ color: item.color }} /> 
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mock Data Preview */}
      <div className="bg-white p-5 rounded-lg border border-[#F97316]/30 mt-6 card-hover">
        <h3 className="font-medium text-sm text-[#ea384c] mb-4">Popular Searches</h3>
        
        <div className="space-y-3.5">
          <div className="p-3 hover:bg-[#F97316]/5 rounded-md transition-colors cursor-pointer" onClick={() => handleQuickSearch("Cold Coffee")}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Coffee size={18} className="text-[#F97316]" />
                <div>
                  <p className="text-sm font-medium">Cold Coffee</p>
                  <p className="text-xs text-muted-foreground">Junk Beverage, 180 cal</p>
                </div>
              </div>
              <div className="text-xs px-2.5 py-1 bg-[#ea384c]/10 text-[#ea384c] rounded-full">
                High Sugar
              </div>
            </div>
          </div>
          
          <div className="p-3 hover:bg-[#F97316]/5 rounded-md transition-colors cursor-pointer" onClick={() => handleQuickSearch("Instant Noodles")}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Carrot size={18} className="text-[#ea384c]" />
                <div>
                  <p className="text-sm font-medium">Instant Noodles</p>
                  <p className="text-xs text-muted-foreground">Junk Food, 340 cal</p>
                </div>
              </div>
              <div className="text-xs px-2.5 py-1 bg-[#ea384c]/10 text-[#ea384c] rounded-full">
                High Sodium
              </div>
            </div>
          </div>
          
          <div className="p-3 hover:bg-[#F97316]/5 rounded-md transition-colors cursor-pointer" onClick={() => handleQuickSearch("Potato Chips")}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Candy size={18} className="text-[#F97316]" />
                <div>
                  <p className="text-sm font-medium">Potato Chips</p>
                  <p className="text-xs text-muted-foreground">Junk Snack, 270 cal</p>
                </div>
              </div>
              <div className="text-xs px-2.5 py-1 bg-[#ea384c]/10 text-[#ea384c] rounded-full">
                Trans Fats
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
