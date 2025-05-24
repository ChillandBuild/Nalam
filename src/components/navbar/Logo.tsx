
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 transition-all duration-300 hover:scale-105 group"
    >
      <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center shadow-nature group-hover:shadow-organic transition-all duration-300">
        <Leaf className="w-5 h-5 text-white animate-leaf-sway" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-heading text-4xl font-bold organic-text tracking-wide">Nalam</h1>
        <p className="text-xs text-nature-earth-gray/80">Growing sustainable choices</p>
      </div>
    </Link>
  );
};

export default Logo;
