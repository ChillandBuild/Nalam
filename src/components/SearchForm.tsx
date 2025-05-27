
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Loader2 } from "lucide-react";
import { FoodAnalysisResult } from "../types/food";
import { mockFoodData } from "../data/mockFoodData";
import { Carrot, Apple, Candy, Coffee } from "lucide-react";

interface SearchFormProps {
  onSearchResult: (result: FoodAnalysisResult) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const SearchForm = ({ onSearchResult, setIsLoading }: SearchFormProps) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsLoading(true);
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Find matching food in our mock data or return a default
      const result = mockFoodData.find(
        food => food.name.toLowerCase().includes(query.toLowerCase())
      ) || mockFoodData[0];
      
      onSearchResult(result);
      setIsLoading(false);
      setIsSearching(false);
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
    setIsSearching(true);
    setTimeout(() => {
      // Find matching food in our mock data or return a default
      const result = mockFoodData.find(
        food => food.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || mockFoodData[0];
      
      onSearchResult(result);
      setIsLoading(false);
      setIsSearching(false);
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
          className="pr-10 h-14 text-lg border-2 border-[#F97316] focus-visible:ring-[#ea384c] focus-visible:ring-2 focus-visible:border-[#ea384c] shadow-lg transition-all hover:shadow-xl bg-white rounded-xl"
          disabled={isSearching}
        />
        <Search className="absolute right-3 text-[#F97316]" size={20} />
      </div>
      
      <Button 
        type="submit" 
        className="w-full h-14 text-lg bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:from-[#ea384c] hover:to-[#d946ef] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold"
        disabled={isSearching}
      >
        {isSearching ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={20} />
            Searching...
          </>
        ) : (
          <>
            <Search className="mr-2" size={20} />
            Search
          </>
        )}
      </Button>
      
      <div className="bg-gradient-to-br from-[#FFF7ED] to-[#FEE2E2] p-4 rounded-xl mt-4 border-2 border-[#F97316]/20 shadow-lg">
        <p className="text-sm text-center text-gray-700 font-medium mb-3 flex items-center justify-center">
          <Sparkles size={16} className="text-[#F97316] mr-1" />
          Try searching for these items:
          <Sparkles size={16} className="text-[#ea384c] ml-1" />
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {quickSearchItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleQuickSearch(item.name)}
              className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-all hover:scale-105 border-2 border-[#F97316]/30 hover:border-[#F97316] disabled:opacity-50"
              style={{animationDelay: `${index * 0.2}s`}}
              disabled={isSearching}
            >
              <item.icon size={16} style={{ color: item.color }} /> 
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mock Data Preview */}
      <div className="bg-white p-6 rounded-xl border-2 border-[#F97316]/30 mt-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="font-semibold text-base text-[#ea384c] mb-4 flex items-center">
          <Sparkles size={18} className="mr-2 text-[#F97316]" />
          Popular Searches
        </h3>
        
        <div className="space-y-4">
          <div className="p-4 hover:bg-[#F97316]/5 rounded-lg transition-colors cursor-pointer group border border-[#F97316]/20 hover:border-[#F97316]/40" onClick={() => !isSearching && handleQuickSearch("Cold Coffee")}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F97316]/10 group-hover:bg-[#F97316]/20 transition-colors">
                  <Coffee size={20} className="text-[#F97316]" />
                </div>
                <div>
                  <p className="text-base font-semibold group-hover:text-[#F97316] transition-colors">Cold Coffee</p>
                  <p className="text-sm text-muted-foreground">Junk Beverage, 180 cal</p>
                </div>
              </div>
              <div className="text-sm px-3 py-1.5 bg-gradient-to-r from-[#F97316]/10 to-[#ea384c]/10 text-[#ea384c] rounded-full font-medium">
                High Sugar
              </div>
            </div>
          </div>
          
          <div className="p-4 hover:bg-[#F97316]/5 rounded-lg transition-colors cursor-pointer group border border-[#F97316]/20 hover:border-[#F97316]/40" onClick={() => !isSearching && handleQuickSearch("Instant Noodles")}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ea384c]/10 group-hover:bg-[#ea384c]/20 transition-colors">
                  <Carrot size={20} className="text-[#ea384c]" />
                </div>
                <div>
                  <p className="text-base font-semibold group-hover:text-[#ea384c] transition-colors">Instant Noodles</p>
                  <p className="text-sm text-muted-foreground">Junk Food, 340 cal</p>
                </div>
              </div>
              <div className="text-sm px-3 py-1.5 bg-gradient-to-r from-[#ea384c]/10 to-[#F97316]/10 text-[#ea384c] rounded-full font-medium">
                High Sodium
              </div>
            </div>
          </div>
          
          <div className="p-4 hover:bg-[#F97316]/5 rounded-lg transition-colors cursor-pointer group border border-[#F97316]/20 hover:border-[#F97316]/40" onClick={() => !isSearching && handleQuickSearch("Potato Chips")}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F97316]/10 group-hover:bg-[#F97316]/20 transition-colors">
                  <Candy size={20} className="text-[#F97316]" />
                </div>
                <div>
                  <p className="text-base font-semibold group-hover:text-[#F97316] transition-colors">Potato Chips</p>
                  <p className="text-sm text-muted-foreground">Junk Snack, 270 cal</p>
                </div>
              </div>
              <div className="text-sm px-3 py-1.5 bg-gradient-to-r from-[#F97316]/10 to-[#ea384c]/10 text-[#ea384c] rounded-full font-medium">
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
