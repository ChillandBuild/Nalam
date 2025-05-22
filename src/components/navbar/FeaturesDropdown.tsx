
import { ChevronDown } from "lucide-react";

const FeaturesDropdown = () => {
  return (
    <div className="relative group">
      <a 
        href="#features" 
        className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md flex items-center gap-1.5 rounded-full"
      >
        Features
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
      </a>
      <div className="absolute top-full left-0 mt-1 w-48 bg-transparent backdrop-blur-lg shadow-lg border border-[#F97316]/10 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50 rounded-xl">
        <a href="#scanner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F97316]/10 hover:text-[#F97316] transition-colors">Product Scanner</a>
        <a href="#food-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F97316]/10 hover:text-[#F97316] transition-colors">Food Analyzer</a>
        <a href="#eco-score" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F97316]/10 hover:text-[#F97316] transition-colors">Eco Score</a>
      </div>
    </div>
  );
};

export default FeaturesDropdown;
