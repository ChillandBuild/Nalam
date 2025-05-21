
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Home, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <span className="text-2xl font-['Hugh_is_Life'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#ea384c]">Nalam</span>
          </Link>
        </div>
        
        {/* Navigation Links with Home and Search prominently displayed */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 mr-4">
            <Link to="/" className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white rounded-full hover:opacity-90 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/search" className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white rounded-full hover:opacity-90 transition-colors">
              <Search size={18} />
              <span>Search</span>
            </Link>
          </div>
          
          <a href="#features" className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium">Features</a>
          <a href="#how-it-works" className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium">How It Works</a>
          <a href="#benefits" className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium">Benefits</a>
          <a href="#faq" className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium">FAQ</a>
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
          className="md:hidden text-[#F97316]"
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
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50 animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col gap-4">
            <div className="flex gap-3 mb-2">
              <Link to="/" className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white rounded-full hover:opacity-90 transition-colors flex-1 justify-center">
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link to="/search" className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white rounded-full hover:opacity-90 transition-colors flex-1 justify-center">
                <Search size={18} />
                <span>Search</span>
              </Link>
            </div>
            <a href="#features" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 font-medium">Features</a>
            <a href="#how-it-works" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 font-medium">How It Works</a>
            <a href="#benefits" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 font-medium">Benefits</a>
            <a href="#faq" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 font-medium">FAQ</a>
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
