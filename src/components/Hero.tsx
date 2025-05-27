import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Apple, Heart, Coffee, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { mockFoodData } from "../data/mockFoodData";
import { FoodAnalysisResult } from "../types/food";
import { Toggle } from "@/components/ui/toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = ({ children }: { children?: React.ReactNode }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showFactOfDay, setShowFactOfDay] = useState(false);
  const [searchResult, setSearchResult] = useState<FoodAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResult = (result: FoodAnalysisResult) => {
    setSearchResult(result);
  };

  const foodFacts = [
    "Did you know? Eating a rainbow of fruits and vegetables helps ensure you get a variety of nutrients.",
    "Fact: Dark chocolate with at least 70% cocoa has numerous health benefits including antioxidants.",
    "Eating slowly helps you recognize when you're full, which can prevent overeating.",
    "The average person consumes about 4-5 pounds of food per day.",
    "Honey is the only food that doesn't spoil. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat."
  ];
  
  const randomFact = foodFacts[Math.floor(Math.random() * foodFacts.length)];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative flex flex-col items-center justify-center min-h-[80vh]">
      {/* Clean gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      <div className="container px-4 mx-auto flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Main heading with prominent Nalam branding */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
            <span className="nalam-brand text-6xl md:text-8xl">Nalam</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Make better choices for your health and the planet
          </p>
        </div>

        {/* Search container */}
        <div className="w-full max-w-2xl mx-auto mb-8">
          {children}
        </div>

        {/* Additional tagline */}
        <p className="text-lg text-gray-500 mb-8 max-w-2xl">
          Discover the health and environmental impact of your food choices with AI-powered insights
        </p>

        {/* Action buttons */}
        {/* ... removed button section ... */}
      </div>
    </section>
  );
};

export default Hero;
