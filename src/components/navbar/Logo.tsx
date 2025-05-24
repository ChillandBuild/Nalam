
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 transition-all duration-300 hover:scale-105 group"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
        <Leaf className="w-5 h-5 text-white animate-leaf-sway" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-serif text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#ea384c] bg-clip-text text-transparent tracking-wide" style={{fontFamily: "'Playfair Display', serif"}}>Nalam</h1>
        <p className="text-xs text-gray-600 font-light" style={{fontFamily: "'Lato', sans-serif"}}>Growing sustainable choices</p>
      </div>
    </Link>
  );
};

export default Logo;
