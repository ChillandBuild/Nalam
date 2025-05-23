import { Home, Search } from "lucide-react";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import FeaturesDropdown from "./FeaturesDropdown";

interface DesktopNavLinksProps {
  currentPath: string;
  currentHash: string;
  hoveredItem: string | null;
  setHoveredItem: (item: string | null) => void;
}

const DesktopNavLinks = ({ currentPath, currentHash, hoveredItem, setHoveredItem }: DesktopNavLinksProps) => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavItem 
        to="#hero"
        isActive={currentPath === "/" && (currentHash === "#hero" || currentHash === "" )} 
        icon={<Home className={`w-4 h-4 ${(currentPath === "/" && (currentHash === "#hero" || currentHash === "")) ? "text-white" : ""}`} />}
        onMouseEnter={() => setHoveredItem("home")}
        onMouseLeave={() => setHoveredItem(null)}
        hoveredItem={hoveredItem}
        itemName="home"
      >
        Home
      </NavItem>
      
      <NavItem
        to="#search"
        isActive={currentPath === "/" && currentHash === "#search"}
        icon={<Search className={`w-4 h-4 ${(currentPath === "/" && currentHash === "#search") ? "text-white" : ""}`} />}
        onMouseEnter={() => setHoveredItem("search")}
        onMouseLeave={() => setHoveredItem(null)}
        hoveredItem={hoveredItem}
        itemName="search"
      >
        <span>Search</span>
      </NavItem>
      
      <FeaturesDropdown />
      
      <NavLink href="#how-it-works">How It Works</NavLink>
      <NavLink href="#benefits">Benefits</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
    </div>
  );
};

export default DesktopNavLinks;
