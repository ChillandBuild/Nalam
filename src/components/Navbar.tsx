import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, LayoutDashboard, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Search functionality would go here
  };

  return (
    <nav className="py-4 w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-['Hugh_is_Life'] text-2xl text-nalam-earth-dark tracking-wide">Nalam</h1>
              <p className="text-xs text-nalam-earth-dark">Making sustainable choices easier</p>
            </div>
          </Link>
        </div>
        
        {/* Navigation Links with curvy design */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dashboard link with icon */}
          <a 
            href="#dashboard" 
            className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-[#FFF7ED] border border-[#F97316]/20"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </a>
          
          {/* Search form with curvy design */}
          <div className="relative">
            <button
              onClick={() => setIsCommandOpen(true)}
              className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium flex items-center gap-1 px-4 py-2 rounded-full bg-[#FFF7ED] border border-[#F97316]/20"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
            
            <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
              <Command>
                <CommandInput placeholder="Search for food..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Apple</CommandItem>
                    <CommandItem>Banana</CommandItem>
                    <CommandItem>Orange</CommandItem>
                    <CommandItem>Coffee</CommandItem>
                    <CommandItem>Instant Noodles</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CommandDialog>
          </div>
          
          {/* Other navigation links */}
          <a 
            href="#features" 
            className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED] border border-transparent hover:border-[#F97316]/20"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED] border border-transparent hover:border-[#F97316]/20"
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED] border border-transparent hover:border-[#F97316]/20"
          >
            Benefits
          </a>
          <a 
            href="#faq" 
            className="text-[#F97316] hover:text-[#ea384c] transition-colors font-medium px-4 py-2 rounded-full hover:bg-[#FFF7ED] border border-transparent hover:border-[#F97316]/20"
          >
            FAQ
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white rounded-full"
          >
            Sign In
          </Button>
          <Button 
            className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white rounded-full"
          >
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#F97316]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu with updated styling */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-50 animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col gap-4">
            {/* Mobile Search */}
            <button
              onClick={() => {
                setIsCommandOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 font-medium flex items-center gap-1 px-4 rounded-full bg-[#FFF7ED]/50"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
            
            <a 
              href="#dashboard" 
              className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 font-medium flex items-center gap-1 px-4 rounded-full bg-[#FFF7ED]/50"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </a>
            <a href="#features" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/50">Features</a>
            <a href="#how-it-works" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/50">How It Works</a>
            <a href="#benefits" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/50">Benefits</a>
            <a href="#faq" className="text-[#F97316] hover:text-[#ea384c] transition-colors py-2 px-4 font-medium rounded-full hover:bg-[#FFF7ED]/50">FAQ</a>
            
            <div className="flex flex-col gap-2 pt-2">
              <Button 
                variant="outline" 
                className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white w-full rounded-full"
              >
                Sign In
              </Button>
              <Button 
                className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white w-full rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
