
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
      {/* Enhanced background with orange/red inspired design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-50 to-red-50 opacity-80"></div>
        
        {/* Organic gradient blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-orange-300/20 blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-112 h-112 rounded-full bg-red-300/15 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-128 h-128 rounded-full bg-orange-200/20 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-120 h-120 rounded-full bg-red-200/15 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        
        {/* Nature-inspired geometric elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-100/10 rounded-bl-[40%] blur-xl nature-float"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-100/10 rounded-tr-[50%] blur-xl nature-float"></div>
        
        {/* Organic patterns */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.1) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, rgba(234, 56, 76, 0.1) 1px, transparent 1px)`
        }}></div>
        
        {/* Animated nature lines */}
        <div className="absolute left-10 top-1/3 w-48 h-[2px] bg-gradient-to-r from-orange-400/50 to-transparent rounded-full"></div>
        <div className="absolute right-10 top-2/3 w-48 h-[2px] bg-gradient-to-l from-red-400/50 to-transparent rounded-full"></div>
        
        {/* Floating organic particles */}
        <div className="particle absolute h-3 w-3 rounded-full bg-orange-400/40 top-1/4 left-1/4 animate-float" style={{animationDelay: '0s', animationDuration: '8s'}}></div>
        <div className="particle absolute h-2 w-2 rounded-full bg-red-400/30 top-1/3 left-2/3 animate-float" style={{animationDelay: '1s', animationDuration: '10s'}}></div>
        <div className="particle absolute h-4 w-4 rounded-full bg-orange-300/40 top-2/3 left-1/5 animate-float" style={{animationDelay: '2s', animationDuration: '9s'}}></div>
        <div className="particle absolute h-2 w-2 rounded-full bg-red-300/30 bottom-1/4 right-1/4 animate-float" style={{animationDelay: '3s', animationDuration: '11s'}}></div>
        <div className="particle absolute h-3 w-3 rounded-full bg-orange-200/20 bottom-1/3 right-1/5 animate-float" style={{animationDelay: '1.5s', animationDuration: '12s'}}></div>
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
