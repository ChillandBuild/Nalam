
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./navbar/Logo";
import DesktopNavLinks from "./navbar/DesktopNavLinks";
import AuthButtons from "./navbar/AuthButtons";
import MobileMenuButton from "./navbar/MobileMenuButton";
import MobileMenu from "./navbar/MobileMenu";

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
      className={`py-4 w-full fixed top-0 left-0 bg-transparent backdrop-blur-sm transition-all duration-300 z-50 ${
        scrolled ? "bg-white/80 shadow-sm" : ""
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between drop-shadow-sm">
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Navigation Links with modern design */}
        <DesktopNavLinks 
          currentPath={location.pathname} 
          currentHash={location.hash}
          hoveredItem={hoveredItem} 
          setHoveredItem={setHoveredItem} 
        />
        
        <div className="hidden md:flex items-center gap-4">
          <AuthButtons isOnDashboard={location.pathname === "/dashboard"} />
        </div>
        
        {/* Mobile Menu Button with animation */}
        <MobileMenuButton 
          isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        />
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        currentPath={location.pathname} 
        closeMenu={closeMenu} 
      />
    </nav>
  );
};

export default Navbar;
