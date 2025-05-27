import { useState, useEffect } from "react";
import { User, Edit, Save, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const ProfileSection = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Profile data - remove mock data
  const userName = user?.user_metadata?.full_name || "Nature Explorer";
  const [editName, setEditName] = useState(userName);
  const [gender, setGender] = useState(user?.user_metadata?.gender || "");
  const [height, setHeight] = useState(user?.user_metadata?.height || "");
  const [weight, setWeight] = useState(user?.user_metadata?.weight || "");
  const bmi = height && weight ? (Number(weight) / ((Number(height) / 100) ** 2)).toFixed(1) : "-";
  
  useEffect(() => {
    setLoading(true);
    fetch("/api/profile")
      .then(res => res.json())
      .then(data => {
        setEditName(data.name || "");
        setGender(data.gender || "");
        setHeight(data.height || "");
        setWeight(data.weight || "");
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load profile");
        setLoading(false);
      });
  }, []);
  
  const handleEdit = async () => {
    if (editing) {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/profile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: editName,
            gender,
            height,
            weight,
          }),
        });
        if (!res.ok) throw new Error("Failed to save profile");
        toast({
          title: "Profile updated",
          description: "Your profile information has been saved.",
        });
      } catch (e) {
        setError("Failed to save profile");
      } finally {
        setLoading(false);
      }
    }
    setEditing(!editing);
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
      <h2 className="text-2xl font-semibold mb-6 text-visible-dark">Your Profile</h2>
      
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#F97316] via-[#ea384c] to-[#d946ef] flex items-center justify-center text-white text-3xl font-medium shadow-lg mb-4">
          {editName.charAt(0)}
        </div>
        
        {editing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="text-xl font-medium text-center border-b border-gray-300 focus:outline-none focus:border-[#F97316] px-2 py-1 text-gray-800 bg-transparent"
          />
        ) : (
          <h3 className="text-xl font-medium text-gray-800">{editName}</h3>
        )}
        
        <p className="text-sm text-gray-600 mt-1 font-medium">{user?.email}</p>
        <div className="w-full max-w-xs mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            {editing ? (
              <select value={gender} onChange={e => setGender(e.target.value)} className="w-full border rounded px-2 py-1">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <div className="text-gray-800">{gender || '-'}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
            {editing ? (
              <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full border rounded px-2 py-1" />
            ) : (
              <div className="text-gray-800">{height || '-'}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
            {editing ? (
              <input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="w-full border rounded px-2 py-1" />
            ) : (
              <div className="text-gray-800">{weight || '-'}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">BMI</label>
            <div className="text-gray-800">{bmi}</div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 items-center">
        <Button 
          variant="outline" 
          className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white flex gap-2 font-medium"
          onClick={handleEdit}
        >
          {editing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
          {editing ? "Save Profile" : "Edit Profile"}
        </Button>
        
        <Button 
          variant="outline" 
          className="border-red-500 text-red-500 hover:bg-red-50 flex gap-2 font-medium"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
      {loading && <div className="text-center text-sm text-gray-500">Loading...</div>}
      {error && <div className="text-center text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default ProfileSection;
