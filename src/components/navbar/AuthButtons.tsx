
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface AuthButtonsProps {
  isOnDashboard: boolean;
  onClick?: () => void;
}

const AuthButtons = ({ isOnDashboard, onClick }: AuthButtonsProps) => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: "There was an error signing out. Please try again.",
        variant: "destructive",
      });
    }
    if (onClick) onClick();
  };

  if (user) {
    const userName = user.user_metadata?.full_name || "User";
    
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">
          Welcome, {userName}
        </span>
        <Button 
          variant="outline" 
          className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:border-[#F97316] hover:text-[#ea384c] rounded-full transition-all duration-300 backdrop-blur-md"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link to="/signin" onClick={onClick}>
        <Button 
          variant="outline" 
          className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:border-[#F97316] hover:text-[#ea384c] rounded-full transition-all duration-300 backdrop-blur-md"
        >
          Sign In
        </Button>
      </Link>
      <Link to="/signup" onClick={onClick}>
        <Button 
          className="bg-gradient-to-r from-[#F97316] to-[#ea384c] hover:opacity-90 text-white rounded-full shadow-md hover:shadow-lg hover:shadow-[#F97316]/20 transition-all duration-300"
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
