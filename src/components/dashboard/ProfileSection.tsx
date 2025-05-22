
import { useState } from "react";
import { User, Edit, Save, Award, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const ProfileSection = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  
  // Profile data
  const userName = user?.user_metadata?.full_name || "User";
  const [editName, setEditName] = useState(userName);
  
  const handleEdit = () => {
    setEditing(!editing);
    if (editing) {
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved.",
      });
    }
  };
  
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
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white text-3xl font-medium shadow-lg mb-4">
          {userName.charAt(0)}
        </div>
        
        {editing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="text-xl font-medium text-center border-b border-gray-300 focus:outline-none focus:border-[#F97316] px-2 py-1"
          />
        ) : (
          <h3 className="text-xl font-medium">{userName}</h3>
        )}
        
        <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-sm font-medium">Eco Explorer</span>
              <span className="text-xs text-gray-500">Level 3</span>
            </div>
          </div>
          <Button 
            variant="link" 
            size="sm" 
            onClick={() => toast({
              title: "Coming Soon",
              description: "Details about your achievements will be available soon!",
            })} 
            className="text-[#F97316]"
          >
            View Details
          </Button>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#ea384c] flex items-center justify-center text-white">
              🔥
            </div>
            <div>
              <span className="block text-sm font-medium">7 Day Streak</span>
              <span className="text-xs text-gray-500">Keep it up!</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
        <Button 
          variant="outline" 
          className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/5 flex gap-2"
          onClick={handleEdit}
        >
          {editing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
          {editing ? "Save Profile" : "Edit Profile"}
        </Button>
        
        <Button 
          variant="outline" 
          className="border-red-500 text-red-500 hover:bg-red-50 flex gap-2"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
