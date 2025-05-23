import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import HealthCards from "../components/HealthCards";

interface SectionProps {
  id?: string;
}

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced background elements with modern design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-[#f8f8f8] opacity-80"></div>
        
        {/* Dynamic animated gradient blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#F97316]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute top-40 right-20 w-112 h-112 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-40 left-1/4 w-128 h-128 rounded-full bg-[#F97316]/20 blur-3xl animate-pulse-orange-red"></div>
        <div className="absolute bottom-60 right-1/4 w-120 h-120 rounded-full bg-[#ea384c]/15 blur-3xl animate-pulse-orange-red"></div>
        
        {/* Modern geometric elements with animation */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FEC6A1]/10 rounded-bl-[30%] blur-xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#FEC6A1]/10 rounded-tr-[40%] blur-xl animate-float"></div>
        
        {/* Animated subtle patterns */}
        <div className="absolute inset-0 bright-dots opacity-[0.03]"></div>
        <div className="absolute inset-0 bright-diagonal opacity-[0.02]"></div>
        
        {/* Animated decorative lines */}
        <div className="absolute left-10 top-1/3 w-48 h-[1px] bg-gradient-to-r from-[#F97316]/50 to-transparent animate-shimmer"></div>
        <div className="absolute right-10 top-2/3 w-48 h-[1px] bg-gradient-to-l from-[#ea384c]/50 to-transparent animate-shimmer"></div>
        
        {/* Floating particles effect */}
        <div className="particle absolute h-2 w-2 rounded-full bg-[#F97316]/40 top-1/4 left-1/4 animate-float" style={{animationDelay: '0s', animationDuration: '7s'}}></div>
        <div className="particle absolute h-3 w-3 rounded-full bg-[#ea384c]/30 top-1/3 left-2/3 animate-float" style={{animationDelay: '1s', animationDuration: '9s'}}></div>
        <div className="particle absolute h-2 w-2 rounded-full bg-[#FEC6A1]/40 top-2/3 left-1/5 animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="particle absolute h-1.5 w-1.5 rounded-full bg-[#F97316]/30 bottom-1/4 right-1/4 animate-float" style={{animationDelay: '3s', animationDuration: '10s'}}></div>
        <div className="particle absolute h-2.5 w-2.5 rounded-full bg-[#ea384c]/20 bottom-1/3 right-1/5 animate-float" style={{animationDelay: '1.5s', animationDuration: '12s'}}></div>
      </div>
      
      <Navbar />
      <Hero />
      <section id="search" className="pt-24">{/* Search section content here if any */}</section>
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
