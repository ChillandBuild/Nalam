
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button 
      className="md:hidden text-[#F97316] p-1.5 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md"
      onClick={onClick}
    >
      {isOpen ? (
        <X className="w-6 h-6 animate-scale" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
    </button>
  );
};

export default MobileMenuButton;
