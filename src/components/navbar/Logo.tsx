
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nalam-green to-nalam-leaf flex items-center justify-center shadow-lg group-hover:shadow-nalam-green/30 transition-all duration-300">
        <Leaf className="w-5 h-5 text-white fill-[#fff] animate-pulse-orange-red" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-tangerine text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nalam-green to-nalam-leaf">Nalam</h1>
        <p className="text-xs text-nalam-earth-dark/80">Making sustainable choices easier</p>
      </div>
    </Link>
  );
};

export default Logo;
