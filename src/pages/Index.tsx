
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background elements with improved contrast - removed animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#f8f8f8] opacity-80"></div>
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#F97316]/10 blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-[#ea384c]/10 blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-[#F97316]/20 blur-xl"></div>
        <div className="absolute bottom-60 right-1/4 w-36 h-36 rounded-full bg-[#ea384c]/10 blur-xl"></div>
        
        {/* Subtle patterns */}
        <div className="absolute inset-0 bright-dots"></div>
      </div>
      
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <CTASection />
      <Footer />
      
      {/* Decorative elements - removed animation */}
      <div className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] flex items-center justify-center text-white cursor-pointer shadow-lg">
        <span className="font-hugh text-xl">N</span>
      </div>
    </div>
  );
};

export default Index;
