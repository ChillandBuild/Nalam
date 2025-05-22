
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
      {/* Enhanced background elements with modern design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#f8f8f8] opacity-80"></div>
        
        {/* Larger, more vibrant gradient blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F97316]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 rounded-full bg-[#F97316]/20 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-60 right-1/4 w-80 h-80 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        
        {/* Modern geometric elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FEC6A1]/10 rounded-bl-[30%] blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#FEC6A1]/10 rounded-tr-[40%] blur-xl"></div>
        
        {/* Subtle patterns */}
        <div className="absolute inset-0 bright-dots opacity-[0.03]"></div>
        <div className="absolute inset-0 bright-diagonal opacity-[0.02]"></div>
        
        {/* Decorative lines */}
        <div className="absolute left-10 top-1/3 w-24 h-[1px] bg-gradient-to-r from-[#F97316]/50 to-transparent"></div>
        <div className="absolute right-10 top-2/3 w-24 h-[1px] bg-gradient-to-l from-[#ea384c]/50 to-transparent"></div>
      </div>
      
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
