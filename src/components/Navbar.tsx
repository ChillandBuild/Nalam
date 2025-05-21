
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <span className="text-2xl font-['Hugh_is_Life'] font-bold orange-red-text">Nalam</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/search" className="text-foreground hover:text-[#F97316] transition-colors">Search</Link>
          <a href="#features" className="text-foreground hover:text-[#F97316] transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground hover:text-[#F97316] transition-colors">How It Works</a>
          <a href="#benefits" className="text-foreground hover:text-[#F97316] transition-colors">Benefits</a>
          <a href="#faq" className="text-foreground hover:text-[#F97316] transition-colors">FAQ</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-background shadow-lg z-50 animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col gap-4">
            <Link to="/search" className="text-foreground hover:text-[#F97316] transition-colors py-2">Search</Link>
            <a href="#features" className="text-foreground hover:text-[#F97316] transition-colors py-2">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-[#F97316] transition-colors py-2">How It Works</a>
            <a href="#benefits" className="text-foreground hover:text-[#F97316] transition-colors py-2">Benefits</a>
            <a href="#faq" className="text-foreground hover:text-[#F97316] transition-colors py-2">FAQ</a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white w-full">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
