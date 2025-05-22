
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
      className={`py-4 w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-transparent/40 backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Navigation Links with modern design */}
        <DesktopNavLinks 
          currentPath={location.pathname} 
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
