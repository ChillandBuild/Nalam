import { Link } from "react-router-dom";
import { Leaf, Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 transition-all duration-300 hover:scale-105 group mt-4"
    >
      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] via-[#ea384c] to-[#d946ef] flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#ea384c" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
          <path d="M16 28l-1.93-1.76C6.72 19.36 2 15.12 2 10.13 2 6.36 5.13 3.5 8.87 3.5c2.03 0 3.98 0.94 5.13 2.43C15.15 4.44 17.1 3.5 19.13 3.5 22.87 3.5 26 6.36 26 10.13c0 4.99-4.72 9.23-12.07 16.11L16 28z" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
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
