
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AuthButtonsProps {
  isOnDashboard: boolean;
  onClick?: () => void;
}

const AuthButtons = ({ isOnDashboard, onClick }: AuthButtonsProps) => {
  return (
    <div className="flex items-center gap-4">
      {isOnDashboard ? (
        <Link to="/" onClick={onClick}>
          <Button 
            variant="outline" 
            className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 hover:border-[#F97316] hover:text-[#ea384c] rounded-full transition-all duration-300 backdrop-blur-md"
          >
            Sign Out
          </Button>
        </Link>
      ) : (
        <>
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
              onClick={onClick}
            >
              Sign Up
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
