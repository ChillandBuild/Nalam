import { Link } from "react-router-dom";
import { Leaf, Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 transition-all duration-300 hover:scale-105 group mt-4"
    >
      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F97316] via-[#ea384c] to-[#d946ef] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 rotate-3 group-hover:rotate-6">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent"></div>
        <Leaf className="w-6 h-6 text-white animate-pulse z-10" />
        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-ping" />
      </div>
      <div className="flex flex-col">
        <h1 className="nalam-cursive-logo text-4xl tracking-wider relative">
          Nalam
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
