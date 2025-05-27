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
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative bg-gradient-to-b from-orange-50 via-white to-red-50 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="container px-4 mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent text-center drop-shadow-lg mb-8">
              Make better choices for your health and the planet
            </h2>
        {children}
      </div>
    </section>
  );
};

export default Hero;
