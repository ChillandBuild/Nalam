
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, LogOut, Info, Star, Target, Trophy } from "lucide-react";
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
import ProfileSection from "@/components/dashboard/ProfileSection";
import ScanSection from "@/components/dashboard/ScanSection";
import HistorySection from "@/components/dashboard/HistorySection";

const Dashboard = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [focusMode, setFocusMode] = useState<"eco" | "health">("eco");
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState<"dashboard" | "scan" | "history" | "profile">("dashboard");

  // Simulate progress loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(0); // Start from 0 for new users
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (action: string) => {
    toast({
      title: "Coming Soon",
      description: `${action} feature will be available soon!`,
    });
  };

  // Get user name from auth context - start with zero points for new users
  const userName = user?.user_metadata?.full_name || "User";
  const ecoPoints = 0; // Start from zero
  const ecoLevel = "New Explorer"; // Starting level
  const streak = 0; // Start from zero

  const pointsEarningMethods = [
    { icon: <Target className="w-5 h-5" />, action: "Scan a product", points: 5 },
    { icon: <Star className="w-5 h-5" />, action: "Complete daily check-in", points: 10 },
    { icon: <Trophy className="w-5 h-5" />, action: "Try EcoTrivia", points: 15 },
    { icon: <Heart className="w-5 h-5" />, action: "Make sustainable swap", points: 20 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "scan":
        return <ScanSection />;
      case "history":
        return <HistorySection />;
      case "profile":
        return <ProfileSection />;
      default:
        return (
          // Original dashboard content
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
                
                {/* How to Earn Points Section */}
                <div className="mt-6 p-4 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-[#F97316]" />
                    <h3 className="text-sm font-medium text-[#F97316]">How to Earn Points</h3>
                  </div>
                  <div className="space-y-2">
                    {pointsEarningMethods.map((method, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[#F97316]">{method.icon}</span>
                          <span className="text-gray-600">{method.action}</span>
                        </div>
                        <span className="font-medium text-[#F97316]">+{method.points}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Area */}
            <div className="lg:col-span-1 order-2">
              <div className="glass-card p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <h2 className="text-2xl font-semibold mb-6">Start Your Journey</h2>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setActiveTab("scan")} 
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
                  >
                    Scan Your First Product (+5 points)
                  </Button>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by product name"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                    />
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={() => setActiveTab("scan")} 
                    className="w-full border-[#F97316] text-[#F97316] hover:bg-[#F97316]/5"
                  >
                    Upload Food Image
                  </Button>
                  
                  <div className="p-4 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20 mt-4">
                    <p className="text-sm text-gray-600">💡 Tip: Start by scanning a product to earn your first 5 EcoPoints!</p>
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
                      <span className="text-gray-600">EcoPoints to Next Level</span>
                      <span className="font-medium">{ecoPoints}/50</span>
                    </div>
                    <Progress value={0} className="h-2 bg-gray-100" />
                    <p className="text-xs text-gray-500 mt-1">Earn 50 points to reach "Eco Starter"</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
                        🌱
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
                      <span>Start Your Streak</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleButtonClick("Check In")} 
                      className="bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90"
                    >
                      Check In (+10)
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button 
                      onClick={() => handleButtonClick("Play EcoTrivia")} 
                      variant="outline"
                      className="w-full border-[#F97316] text-[#F97316] hover:bg-[#F97316]/5 text-xs"
                    >
                      EcoTrivia (+15)
                    </Button>
                    <Button 
                      onClick={() => handleButtonClick("Try a Swap")} 
                      className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 text-xs"
                    >
                      Eco Swap (+20)
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

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
              <h1 className="font-tangerine text-4xl font-bold text-nalam-earth-dark tracking-wide">Nalam</h1>
              <p className="text-xs text-nalam-earth-dark">Making sustainable choices easier</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setActiveTab("dashboard")} 
              className={`${activeTab === "dashboard" ? "text-[#F97316] font-medium" : "text-gray-600 hover:text-[#F97316]"} transition-colors`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab("scan")} 
              className={`${activeTab === "scan" ? "text-[#F97316] font-medium" : "text-gray-600 hover:text-[#F97316]"} transition-colors`}
            >
              Scan
            </button>
            <button 
              onClick={() => setActiveTab("history")} 
              className={`${activeTab === "history" ? "text-[#F97316] font-medium" : "text-gray-600 hover:text-[#F97316]"} transition-colors`}
            >
              History
            </button>
            <button 
              onClick={() => setActiveTab("profile")} 
              className={`${activeTab === "profile" ? "text-[#F97316] font-medium" : "text-gray-600 hover:text-[#F97316]"} transition-colors`}
            >
              Profile
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setActiveTab("profile")}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white font-medium shadow-md"
            >
              {userName.charAt(0)}
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          {/* Mobile navigation */}
          <div className="md:hidden mb-6 flex items-center justify-between overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveTab("dashboard")} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "dashboard" ? "text-[#F97316] border-b-2 border-[#F97316]" : "text-gray-600"}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab("scan")} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "scan" ? "text-[#F97316] border-b-2 border-[#F97316]" : "text-gray-600"}`}
            >
              Scan
            </button>
            <button 
              onClick={() => setActiveTab("history")} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "history" ? "text-[#F97316] border-b-2 border-[#F97316]" : "text-gray-600"}`}
            >
              History
            </button>
            <button 
              onClick={() => setActiveTab("profile")} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === "profile" ? "text-[#F97316] border-b-2 border-[#F97316]" : "text-gray-600"}`}
            >
              Profile
            </button>
          </div>
          
          {/* Tab content */}
          {renderTabContent()}
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
