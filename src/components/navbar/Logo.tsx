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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-pulse z-10">
          <defs>
            <linearGradient id="nalam-logo-heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F97316" />
              <stop offset="50%" stop-color="#ea384c" />
              <stop offset="100%" stop-color="#d946ef" />
            </linearGradient>
          </defs>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#nalam-logo-heart-gradient)"/>
        </svg>
        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-ping" />
      </div>
      <div className="flex flex-col">
        <h1 className="nalam-cursive-logo text-4xl tracking-wider relative">
          Nalam
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
