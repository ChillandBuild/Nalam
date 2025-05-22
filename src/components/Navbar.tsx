import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Home, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="py-4 w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-[#F97316]/10">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-['Hugh_is_Life'] text-2xl text-nalam-earth-dark tracking-wide">Nalam</h1>
              <p className="text-xs text-nalam-earth-dark">Making sustainable choices easier</p>
            </div>
          </Link>
        </div>
        
        {/* Navigation Links with modern design */}
        <div className="hidden md:flex items-center gap-4">
          {/* Home link with icon */}
          <Link 
            to="/" 
            className={`transition-colors font-medium flex items-center gap-1.5 px-4 py-2 rounded-full border ${
              location.pathname === "/" 
              ? "text-[#F97316] bg-[#FFF7ED] border-[#F97316]/20 shadow-sm" 
              : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/60 hover:border-[#F97316]/20 hover:shadow-sm"
            }`}
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          
          {/* Search link with icon */}
          <Link
            to="/search"
            className={`transition-colors font-medium flex items-center gap-1.5 px-4 py-2 rounded-full border ${
              location.pathname === "/search" 
              ? "text-[#F97316] bg-[#FFF7ED] border-[#F97316]/20 shadow-sm" 
              : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/60 hover:border-[#F97316]/20 hover:shadow-sm"
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </Link>
          
          {/* Other navigation links */}
          <a 
            href="#features" 
            className="text-gray-600 hover:text-[#F97316] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20 hover:shadow-sm"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-[#F97316] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20 hover:shadow-sm"
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-gray-600 hover:text-[#F97316] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20 hover:shadow-sm"
          >
            Benefits
          </a>
          <a 
            href="#faq" 
            className="text-gray-600 hover:text-[#F97316] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20 hover:shadow-sm"
          >
            FAQ
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          {location.pathname === "/dashboard" ? (
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:border-[#F97316] hover:text-[#ea384c] rounded-full"
              >
                Sign Out
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <Button 
                  variant="outline" 
                  className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:border-[#F97316] hover:text-[#ea384c] rounded-full"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white rounded-full shadow-md"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#F97316] p-1.5 rounded-full hover:bg-[#FFF7ED] border border-transparent hover:border-[#F97316]/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu with updated modern styling */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg z-50 animate-fade-in border-b border-[#F97316]/10">
          <div className="container px-4 mx-auto py-4 flex flex-col gap-3">
            {/* Mobile Home */}
            <Link 
              to="/" 
              className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 rounded-full border ${
                location.pathname === "/" 
                ? "text-[#F97316] bg-[#FFF7ED]/80 border-[#F97316]/20 shadow-sm" 
                : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/60 hover:border-[#F97316]/20"
              }`}
              onClick={closeMenu}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            
            {/* Mobile Search */}
            <Link
              to="/search"
              className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 rounded-full border ${
                location.pathname === "/search" 
                ? "text-[#F97316] bg-[#FFF7ED]/80 border-[#F97316]/20 shadow-sm" 
                : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/60 hover:border-[#F97316]/20"
              }`}
              onClick={closeMenu}
            >
              <Search className="w-4 h-4" />
              Search
            </Link>
            
            {/* Dashboard link for mobile */}
            <Link
              to="/dashboard"
              className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 rounded-full border ${
                location.pathname === "/dashboard" 
                ? "text-[#F97316] bg-[#FFF7ED]/80 border-[#F97316]/20 shadow-sm" 
                : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/60 hover:border-[#F97316]/20"
              }`}
              onClick={closeMenu}
            >
              Dashboard
            </Link>
            
            <a href="#features" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>How It Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>Benefits</a>
            <a href="#faq" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/60 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>FAQ</a>
            
            <div className="flex flex-col gap-3 pt-2">
              {location.pathname === "/dashboard" ? (
                <Link to="/" onClick={closeMenu}>
                  <Button 
                    variant="outline" 
                    className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:text-[#ea384c] w-full rounded-full"
                  >
                    Sign Out
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/signin" onClick={closeMenu}>
                    <Button 
                      variant="outline" 
                      className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:text-[#ea384c] w-full rounded-full"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={closeMenu}>
                    <Button 
                      className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white w-full rounded-full shadow-md"
                      onClick={closeMenu}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
