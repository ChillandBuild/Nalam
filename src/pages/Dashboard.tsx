
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Search, Calendar, User, Settings, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [focusMode, setFocusMode] = useState<"eco" | "health">("eco");
  const [progress, setProgress] = useState(0);

  // Simulate progress loading animation
  useState(() => {
    const timer = setTimeout(() => {
      setProgress(70);
    }, 500);
    return () => clearTimeout(timer);
  });

  const handleButtonClick = (action: string) => {
    toast({
      title: "Coming Soon",
      description: `${action} feature will be available soon!`,
    });
  };

  // Get user name from auth context
  const userName = user?.user_metadata?.full_name || "User";
  const ecoPoints = 150;
  const ecoLevel = "Eco Explorer";
  const streak = 7;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-[#F97316]/10">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-['Hugh_is_Life'] text-2xl text-nalam-earth-dark tracking-wide">Nalam</h1>
              <p className="text-xs text-nalam-earth-dark">Making sustainable choices easier</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-[#F97316] font-medium">Dashboard</Link>
            <button onClick={() => handleButtonClick("Scan")} className="text-gray-600 hover:text-[#F97316] transition-colors">Scan</button>
            <button onClick={() => handleButtonClick("History")} className="text-gray-600 hover:text-[#F97316] transition-colors">History</button>
            <button onClick={() => handleButtonClick("Profile")} className="text-gray-600 hover:text-[#F97316] transition-colors">Profile</button>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white font-medium shadow-md">
              {userName.charAt(0)}
            </div>
            <Link to="/" className="hidden md:block">
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2 border-[#F97316] text-[#F97316]"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Welcome Section */}
            <div className="lg:col-span-1 order-1">
              <div className="glass-card p-6 animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Welcome, {userName}!</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Your EcoPoints</span>
                    <span className="text-lg font-medium text-[#F97316]">{ecoPoints}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Your Level</span>
                    <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#ea384c]">{ecoLevel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Daily Streak</span>
                    <span className="text-lg font-medium text-[#F97316]">{streak} days</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Area */}
            <div className="lg:col-span-1 order-2">
              <div className="glass-card p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <h2 className="text-2xl font-semibold mb-6">Actions</h2>
                <div className="space-y-4">
                  <Button 
                    onClick={() => handleButtonClick("Scan Product")} 
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
                  >
                    Scan Product
                  </Button>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by product name"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                    />
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={() => handleButtonClick("Upload Food Image")} 
                    className="w-full border-[#F97316] text-[#F97316] hover:bg-[#F97316]/5"
                  >
                    Upload Food Image
                  </Button>
                  
                  <div className="p-4 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20 mt-4">
                    <p className="text-sm text-gray-600">💡 Tip: Swap chips for popcorn to cut sodium!</p>
                    <button 
                      onClick={() => handleButtonClick("See More Tips")} 
                      className="text-sm text-[#F97316] mt-2 hover:underline"
                    >
                      See More Tips
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gamification Sidebar */}
            <div className="lg:col-span-1 order-3">
              <div className="glass-card p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <h2 className="text-2xl font-semibold mb-6">Your Progress</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">EcoPoints</span>
                      <span className="font-medium">{ecoPoints}/200</span>
                    </div>
                    <Progress value={75} className="h-2 bg-gray-100" />
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
                        🌿
                      </div>
                      <span>{ecoLevel}</span>
                    </div>
                    <button 
                      onClick={() => handleButtonClick("View Levels")} 
                      className="text-sm text-[#F97316] hover:underline"
                    >
                      Details
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
                        🔥
                      </div>
                      <span>{streak} Day Streak</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleButtonClick("Check In")} 
                      className="bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90"
                    >
                      Check In
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button 
                      onClick={() => handleButtonClick("Play EcoTrivia")} 
                      variant="outline"
                      className="w-full border-[#F97316] text-[#F97316] hover:bg-[#F97316]/5"
                    >
                      Play EcoTrivia
                    </Button>
                    <Button 
                      onClick={() => handleButtonClick("Try a Swap")} 
                      className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90"
                    >
                      Try a Swap
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* New Interactive Zone */}
          <div className="mt-8 glass-card p-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h2 className="text-2xl font-semibold mb-6">Insights & Recommendations</h2>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${focusMode === 'eco' ? 'font-medium text-[#F97316]' : 'text-gray-500'}`}>
                Eco Focus
              </span>
              <Switch 
                checked={focusMode === 'health'} 
                onCheckedChange={(checked) => setFocusMode(checked ? 'health' : 'eco')} 
                className="data-[state=checked]:bg-[#ea384c] data-[state=unchecked]:bg-[#F97316]" 
              />
              <span className={`text-sm ${focusMode === 'health' ? 'font-medium text-[#ea384c]' : 'text-gray-500'}`}>
                Health Focus
              </span>
            </div>
            
            {/* Carousel */}
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#F97316]/10 to-[#ea384c]/10 p-6 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white mb-4">
                        🌍
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Your Carbon Savings</h3>
                      <p className="text-gray-600 text-sm flex-grow">You've saved 12kg of CO2 emissions this month with your eco-friendly choices!</p>
                      <button 
                        onClick={() => handleButtonClick("Carbon Details")} 
                        className="text-sm text-[#F97316] mt-4 hover:underline self-start"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#F97316]/10 to-[#ea384c]/10 p-6 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white mb-4">
                        🔍
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Recent Scans</h3>
                      <p className="text-gray-600 text-sm flex-grow">You've scanned 5 products this week. Most sustainable: Organic Apples.</p>
                      <button 
                        onClick={() => handleButtonClick("Scan History")} 
                        className="text-sm text-[#F97316] mt-4 hover:underline self-start"
                      >
                        View All
                      </button>
                    </div>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div className="rounded-lg overflow-hidden bg-gradient-to-br from-[#F97316]/10 to-[#ea384c]/10 p-6 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white mb-4">
                        🔄
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Top Healthy Swaps</h3>
                      <p className="text-gray-600 text-sm flex-grow">Try swapping regular pasta for whole grain to increase your fiber intake.</p>
                      <button 
                        onClick={() => handleButtonClick("Healthy Swaps")} 
                        className="text-sm text-[#F97316] mt-4 hover:underline self-start"
                      >
                        Get More Swaps
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static left-0 translate-y-0 mr-4" />
                <CarouselNext className="relative static right-0 translate-y-0" />
              </div>
            </Carousel>
            
            {/* Quick Stats Widget */}
            <div className="mt-10 flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Your Green Choices</h3>
              <div className="relative w-36 h-36">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-[#F97316]"
                    strokeWidth="10"
                    strokeDasharray={`${2.5 * Math.PI * 40}`}
                    strokeDashoffset={`${((100 - progress) / 100) * 2.5 * Math.PI * 40}`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#F97316]">{progress}%</span>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-600 max-w-xs">
                {progress}% of your choices are sustainable. Keep it up!
              </p>
              <Button 
                variant="link" 
                onClick={() => handleButtonClick("Green Details")} 
                className="mt-2 text-[#F97316]"
              >
                See Details
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-[#F97316]/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2025 Nalam. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#F97316]">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#F97316]">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-[#F97316]">
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
