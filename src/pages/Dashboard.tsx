import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, LogOut, Info, Star, Target, Trophy, Leaf } from "lucide-react";
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
  const userName = user?.user_metadata?.full_name || "Nature Explorer";
  const ecoPoints = 0; // Start from zero
  const ecoLevel = "Seedling"; // Starting level
  const streak = 0; // Start from zero

  const pointsEarningMethods = [
    { icon: <Target className="w-5 h-5" />, action: "Scan a product", points: 5 },
    { icon: <Star className="w-5 h-5" />, action: "Complete daily check-in", points: 10 },
    { icon: <Trophy className="w-5 h-5" />, action: "Try EcoTrivia", points: 15 },
    { icon: <Leaf className="w-5 h-5" />, action: "Make sustainable swap", points: 20 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "scan":
        return <ScanSection />;
      case "history":
        return <HistorySection onStartScan={() => setActiveTab("scan")} />;
      case "profile":
        return <ProfileSection />;
      default:
        return (
          // Original dashboard content with nature theme
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Welcome Section */}
            <div className="lg:col-span-1 order-1">
              <div className="nature-card p-6 animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6 text-nature-forest">Welcome, {userName}! 🌱</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-nature-earth-gray">Your EcoPoints</span>
                    <span className="text-lg font-medium text-nature-forest">{ecoPoints}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-nature-earth-gray">Your Level</span>
                    <span className="text-lg font-medium organic-text">{ecoLevel}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-nature-earth-gray">Daily Streak</span>
                    <span className="text-lg font-medium text-nature-forest">{streak} days</span>
                  </div>
                </div>
                
                {/* How to Earn Points Section */}
                <div className="mt-6 p-4 bg-nature-moss-light rounded-xl border border-nature-sage/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-nature-forest" />
                    <h3 className="text-sm font-medium text-nature-forest">How to Earn Points 🌿</h3>
                  </div>
                  <div className="space-y-2">
                    {pointsEarningMethods.map((method, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-nature-forest">{method.icon}</span>
                          <span className="text-nature-earth-gray">{method.action}</span>
                        </div>
                        <span className="font-medium text-nature-forest">+{method.points}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Area */}
            <div className="lg:col-span-1 order-2">
              <div className="nature-card p-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
                <h2 className="text-2xl font-semibold mb-6 text-nature-forest">Start Your Journey 🚀</h2>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setActiveTab("scan")} 
                    className="w-full nature-button"
                  >
                    Scan Your First Product (+5 points)
                  </Button>
                  <div className="p-4 bg-nature-water-light/30 rounded-xl border border-nature-sage/30 mt-4">
                    <p className="text-sm text-nature-earth-gray">🌱 Tip: Start by scanning a product to earn your first 5 EcoPoints!</p>
                    <button 
                      onClick={() => handleButtonClick("See More Tips")} 
                      className="text-sm text-nature-forest mt-2 hover:underline transition-colors"
                    >
                      See More Tips
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gamification Sidebar */}
            <div className="lg:col-span-1 order-3">
              <div className="nature-card p-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
                <h2 className="text-2xl font-semibold mb-6 text-nature-forest">Your Progress 📈</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-nature-earth-gray">EcoPoints to Next Level</span>
                      <span className="font-medium text-nature-forest">{ecoPoints}/50</span>
                    </div>
                    <div className="nature-progress h-3">
                      <div className="nature-progress-bar" style={{width: '0%'}}></div>
                    </div>
                    <p className="text-xs text-nature-earth-gray mt-1">Earn 50 points to reach "Young Sprout"</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-nature-moss-light/50 rounded-xl border border-nature-sage/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center text-white shadow-nature">
                        🌱
                      </div>
                      <span className="text-nature-forest font-medium">{ecoLevel}</span>
                    </div>
                    <button 
                      onClick={() => handleButtonClick("View Levels")} 
                      className="text-sm text-nature-forest hover:text-nature-sage transition-colors"
                    >
                      Details
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-nature-moss-light/50 rounded-xl border border-nature-sage/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full earth-gradient flex items-center justify-center text-white shadow-nature">
                        🔥
                      </div>
                      <span className="text-nature-forest font-medium">Start Your Streak</span>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleButtonClick("Check In")} 
                      className="nature-button text-xs"
                    >
                      Check In (+10)
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button 
                      onClick={() => handleButtonClick("Play EcoTrivia")} 
                      variant="outline"
                      className="w-full nature-button-secondary text-xs"
                    >
                      EcoTrivia (+15)
                    </Button>
                    <Button 
                      onClick={() => handleButtonClick("Try a Swap")} 
                      className="w-full nature-button text-xs"
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
      <header className="py-4 px-6 nature-nav sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] via-[#ea384c] to-[#d946ef] flex items-center justify-center shadow-nature">
              <Heart className="w-5 h-5 text-white" style={{ fill: 'url(#nalam-heart-gradient)' }} />
              <svg width="0" height="0">
                <linearGradient id="nalam-heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="50%" stopColor="#ea384c" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="nalam-cursive-logo text-4xl tracking-wider relative">Nalam</h1>
              <p className="text-xs text-nature-earth-gray">Making sustainable choices easier</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setActiveTab("dashboard")} 
              className={`nature-nav-link ${activeTab === "dashboard" ? "active" : ""}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab("scan")} 
              className={`nature-nav-link ${activeTab === "scan" ? "active" : ""}`}
            >
              Scan
            </button>
            <button 
              onClick={() => setActiveTab("history")} 
              className={`nature-nav-link ${activeTab === "history" ? "active" : ""}`}
            >
              History
            </button>
            <button 
              onClick={() => setActiveTab("profile")} 
              className={`nature-nav-link ${activeTab === "profile" ? "active" : ""}`}
            >
              Profile
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setActiveTab("profile")}
              className="w-10 h-10 rounded-full forest-gradient flex items-center justify-center text-white font-medium shadow-nature nature-hover"
            >
              {userName.charAt(0)}
            </button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow py-8 px-4 organic-container">
        <div className="container mx-auto relative z-10">
          {/* Mobile navigation */}
          <div className="md:hidden mb-6 flex items-center justify-between overflow-x-auto pb-2">
            <button 
              onClick={() => setActiveTab("dashboard")} 
              className={`px-4 py-2 whitespace-nowrap nature-nav-link ${activeTab === "dashboard" ? "active" : ""}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab("scan")} 
              className={`px-4 py-2 whitespace-nowrap nature-nav-link ${activeTab === "scan" ? "active" : ""}`}
            >
              Scan
            </button>
            <button 
              onClick={() => setActiveTab("history")} 
              className={`px-4 py-2 whitespace-nowrap nature-nav-link ${activeTab === "history" ? "active" : ""}`}
            >
              History
            </button>
            <button 
              onClick={() => setActiveTab("profile")} 
              className={`px-4 py-2 whitespace-nowrap nature-nav-link ${activeTab === "profile" ? "active" : ""}`}
            >
              Profile
            </button>
          </div>
          
          {/* Tab content */}
          {renderTabContent()}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="nature-nav border-t border-nature-sage/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-nature-earth-gray">© 2025 Nalam. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-nature-earth-gray hover:text-nature-forest transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-nature-earth-gray hover:text-nature-forest transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-nature-earth-gray hover:text-nature-forest transition-colors">
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
