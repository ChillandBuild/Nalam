
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
    <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-xl shadow-lg z-50 animate-fade-in top-[72px]">
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
        
        <HashLink smooth to="/#features" className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>
          Features
        </HashLink>
        <HashLink smooth to="/#how-it-works" className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>
          How It Works
        </HashLink>
        <HashLink smooth to="/#benefits" className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>
          Benefits
        </HashLink>
        <HashLink smooth to="/#faq" className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20" onClick={closeMenu}>
          FAQ
        </HashLink>
        
        <div className="flex flex-col gap-3 pt-2">
          <AuthButtons isOnDashboard={currentPath === "/dashboard"} onClick={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
