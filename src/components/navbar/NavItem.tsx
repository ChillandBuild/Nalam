import { HashLink } from 'react-router-hash-link';
import { ReactNode } from "react";

interface NavItemProps {
  to: string;
  children: ReactNode;
  isActive: boolean;
  icon?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  hoveredItem?: string | null;
  itemName?: string;
}

const NavItem = ({
  to,
  children,
  isActive,
  icon,
  onMouseEnter,
  onMouseLeave,
  hoveredItem,
  itemName
}: NavItemProps) => {
  return (
    <HashLink 
      smooth
      to={to} 
      className={`transition-all duration-300 font-medium flex items-center gap-1.5 px-4 py-2 border rounded-full relative overflow-hidden backdrop-blur-md ${
        isActive 
        ? "text-white border-transparent" 
        : "text-gray-600 border-transparent hover:text-[#F97316] hover:border-[#F97316]/20"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isActive && (
        <span className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#ea384c] -z-10"></span>
      )}
      {hoveredItem === itemName && !isActive && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent border border-[#F97316]/20 -z-10 animate-scale"></span>
      )}
      {icon}
      {children}
    </HashLink>
  );
};

export default NavItem;
