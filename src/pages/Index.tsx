
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HealthCards from "../components/HealthCards";
import SearchForm from "../components/SearchForm";
import { FoodAnalysisResult } from "../types/food";
import Hero from "../components/Hero";

interface SectionProps {
  id?: string;
}

const Index = () => {
  const [searchResult, setSearchResult] = useState<FoodAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchResult = (result: FoodAnalysisResult) => {
    setSearchResult(result);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Clean background for clear logo visibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-red-50"></div>
      <Navbar />
      <Hero>
        <div className="w-full max-w-2xl mx-auto">
          <SearchForm 
            onSearchResult={handleSearchResult}
            setIsLoading={setIsLoading}
          />
        </div>
      </Hero>
      <Features />
      <HowItWorks />
      <HealthCards />
      <Benefits />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
