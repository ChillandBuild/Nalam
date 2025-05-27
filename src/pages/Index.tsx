import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HealthCards from "../components/HealthCards";
import Search from "./Search";
import { fetchFoodData } from '../utils/fetchFoodData';
import Hero from "../components/Hero";

interface SectionProps {
  id?: string;
}

const Index = () => {
  const [foodData, setFoodData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    setIsLoading(true);
    setError(null);
    setFoodData(null);
    try {
      const data = await fetchFoodData(searchTerm);
      setFoodData(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch food data');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Clean background for clear logo visibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-red-50"></div>
      <Navbar />
      <Hero>
        <div className="w-full max-w-2xl mx-auto">
          <Search 
            onSearch={handleSearch}
            isLoading={isLoading}
            error={error}
            foodData={foodData}
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
