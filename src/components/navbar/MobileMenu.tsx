
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import AuthButtons from "./AuthButtons";

interface MobileMenuProps {
  isOpen: boolean;
  currentPath: string;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, currentPath, closeMenu }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute w-full bg-gradient-to-b from-white/70 to-transparent backdrop-blur-xl shadow-lg z-50 animate-fade-in">
      <div className="container px-4 mx-auto py-4 flex flex-col gap-3">
        <Link 
          to="/" 
          className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 border ${
            currentPath === "/" 
            ? "bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white border-transparent" 
            : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/10 hover:border-[#F97316]/20"
          }`}
          onClick={closeMenu}
        >
          Home
        </Link>
        
        <Link
          to="/search"
          className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 border ${
            currentPath === "/search" 
            ? "bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white border-transparent" 
            : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/10 hover:border-[#F97316]/20"
          }`}
          onClick={closeMenu}
        >
          Search
        </Link>
        
        <Link
          to="/dashboard"
          className={`transition-colors py-2.5 font-medium flex items-center gap-1.5 px-4 border ${
            currentPath === "/dashboard" 
            ? "bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white border-transparent" 
            : "text-gray-600 border-transparent hover:text-[#F97316] hover:bg-[#FFF7ED]/10 hover:border-[#F97316]/20"
          }`}
          onClick={closeMenu}
        >
          Dashboard
        </Link>
        
        <NavLink href="#features" onClick={closeMenu}>Features</NavLink>
        <NavLink href="#how-it-works" onClick={closeMenu}>How It Works</NavLink>
        <NavLink href="#benefits" onClick={closeMenu}>Benefits</NavLink>
        <NavLink href="#faq" onClick={closeMenu}>FAQ</NavLink>
        
        <div className="flex flex-col gap-3 pt-2">
          <AuthButtons isOnDashboard={currentPath === "/dashboard"} onClick={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
