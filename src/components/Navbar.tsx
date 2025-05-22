import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Home, Search, Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`py-4 w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-transparent/40 backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center shadow-lg group-hover:shadow-[#F97316]/30 transition-all duration-300">
              <Heart className="w-5 h-5 text-white fill-white animate-pulse-orange-red" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-hugh text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#ea384c] tracking-wide">Nalam</h1>
              <p className="text-xs text-nalam-earth-dark/80">Making sustainable choices easier</p>
            </div>
          </Link>
        </div>
        
        {/* Navigation Links with modern design */}
        <div className="hidden md:flex items-center gap-4">
          {/* Home link with icon and hover animation - removed rounded-full */}
          <Link 
            to="/" 
            className={`transition-all duration-300 font-medium flex items-center gap-1.5 px-4 py-2 border relative overflow-hidden backdrop-blur-md ${
              location.pathname === "/" 
              ? "text-white border-transparent shadow-md" 
              : "text-gray-600 border-transparent hover:text-[#F97316] hover:border-[#F97316]/20"
            }`}
            onMouseEnter={() => setHoveredItem("home")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {location.pathname === "/" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#ea384c] -z-10"></span>
            )}
            {hoveredItem === "home" && location.pathname !== "/" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 to-[#ea384c]/10 -z-10 animate-scale"></span>
            )}
            <Home className={`w-4 h-4 ${location.pathname === "/" ? "text-white" : ""}`} />
            Home
          </Link>
          
          {/* Search link with icon and animation - removed rounded-full */}
          <Link
            to="/search"
            className={`transition-all duration-300 font-medium flex items-center gap-1.5 px-4 py-2 border relative overflow-hidden backdrop-blur-md ${
              location.pathname === "/search" 
              ? "text-white border-transparent shadow-md" 
              : "text-gray-600 border-transparent hover:text-[#F97316] hover:border-[#F97316]/20"
            }`}
            onMouseEnter={() => setHoveredItem("search")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {location.pathname === "/search" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#ea384c] -z-10"></span>
            )}
            {hoveredItem === "search" && location.pathname !== "/search" && (
              <span className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 to-[#ea384c]/10 -z-10 animate-scale"></span>
            )}
            <Search className={`w-4 h-4 ${location.pathname === "/search" ? "text-white" : ""}`} />
            <span>Search</span>
          </Link>
          
          {/* Features dropdown with animation - removed rounded-full */}
          <div className="relative group">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md flex items-center gap-1.5"
            >
              Features
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </a>
            <div className="absolute top-full left-0 mt-1 w-48 bg-transparent backdrop-blur-lg shadow-lg border border-[#F97316]/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
              <a href="#scanner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F97316]/10 hover:text-[#F97316] transition-colors">Product Scanner</a>
              <a href="#food-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F97316]/10 hover:text-[#F97316] transition-colors">Food Analyzer</a>
              <a href="#eco-score" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F97316]/10 hover:text-[#F97316] transition-colors">Eco Score</a>
            </div>
          </div>
          
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md hover:shadow-sm"
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md hover:shadow-sm"
          >
            Benefits
          </a>
          <a 
            href="#faq" 
            className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md hover:shadow-sm"
          >
            FAQ
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          {location.pathname === "/dashboard" ? (
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:border-[#F97316] hover:text-[#ea384c] rounded-full transition-all duration-300 backdrop-blur-md"
              >
                Sign Out
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <Button 
                  variant="outline" 
                  className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:border-[#F97316] hover:text-[#ea384c] rounded-full transition-all duration-300 backdrop-blur-md"
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white rounded-full shadow-md hover:shadow-lg hover:shadow-[#F97316]/20 transition-all duration-300"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button with animation */}
        <button 
          className="md:hidden text-[#F97316] p-1.5 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 animate-scale" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu with updated styling - removed rounded-full from mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-gradient-to-b from-white/70 to-transparent backdrop-blur-xl shadow-lg z-50 animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col gap-3">
            {/* Mobile nav items */}
            <Link 
              to="/" 
              className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 border ${
                location.pathname === "/" 
                ? "bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white border-transparent" 
                : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/10 hover:border-[#F97316]/20"
              }`}
              onClick={closeMenu}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            
            {/* Mobile Search */}
            <Link
              to="/search"
              className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 border ${
                location.pathname === "/search" 
                ? "bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white border-transparent" 
                : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/10 hover:border-[#F97316]/20"
              }`}
              onClick={closeMenu}
            >
              <Search className="w-4 h-4" />
              Search
            </Link>
            
            {/* Dashboard link for mobile */}
            <Link
              to="/dashboard"
              className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 border ${
                location.pathname === "/dashboard" 
                ? "bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white border-transparent" 
                : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/10 hover:border-[#F97316]/20"
              }`}
              onClick={closeMenu}
            >
              Dashboard
            </Link>
            
            <a href="#features" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>How It Works</a>
            <a href="#benefits" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>Benefits</a>
            <a href="#faq" className="text-gray-600 hover:text-[#F97316] transition-colors py-2.5 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>FAQ</a>
            
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
