
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center shadow-lg group-hover:shadow-[#F97316]/30 transition-all duration-300">
        <Heart className="w-5 h-5 text-white fill-white animate-pulse-orange-red" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-hugh text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#ea384c]">Nalam</h1>
        <p className="text-xs text-nalam-earth-dark/80">Making sustainable choices easier</p>
      </div>
    </Link>
  );
};

export default Logo;
