
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Sparkles, Loader2 } from "lucide-react";
import { fetchFoodData } from '../utils/fetchFoodData';
import { FoodDataCard } from '../components/FoodDataCard';

const Search = () => {
  const [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setFoodData(null);
    
    try {
      const data = await fetchFoodData(query);
      setFoodData(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch food data');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex items-center relative">
          <Input
            type="text"
            placeholder="Search for a food product (e.g., apple, chips, yogurt)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-10 border-[#F97316] focus-visible:ring-[#ea384c] shadow-sm transition-shadow hover:shadow-md"
          />
          <SearchIcon className="absolute right-3 text-[#F97316]" size={18} />
        </div>
        
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white shadow-md hover:shadow-lg transition-all duration-200"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <SearchIcon className="mr-2" size={18} />
              Search
            </>
          )}
        </Button>
      </form>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      {foodData && <FoodDataCard data={foodData} />}
    </div>
  );
};

export default Search;
