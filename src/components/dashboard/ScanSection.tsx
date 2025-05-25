
import { useState } from "react";
import { Search, Camera, Barcode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ScanSection = () => {
  const { toast } = useToast();
  const [scanMode, setScanMode] = useState<'barcode' | 'image' | 'search'>('barcode');
  const [searchQuery, setSearchQuery] = useState("");

  const handleScan = () => {
    toast({
      title: "Scan initiated",
      description: `${scanMode === 'barcode' ? 'Barcode' : scanMode === 'image' ? 'Image' : 'Search'} scanning feature coming soon!`,
    });
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a food name",
        description: "Enter the name of the food product you want to analyze.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Food search initiated",
      description: `Searching for "${searchQuery}"...`,
    });
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-visible-dark">Scan & Search Products</h2>
      
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        <Button
          variant={scanMode === 'barcode' ? 'default' : 'outline'}
          className={scanMode === 'barcode' ? 'bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white' : 'border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white'}
          onClick={() => setScanMode('barcode')}
        >
          <Barcode className="mr-2 h-4 w-4" />
          Barcode
        </Button>
        
        <Button
          variant={scanMode === 'image' ? 'default' : 'outline'}
          className={scanMode === 'image' ? 'bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white' : 'border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white'}
          onClick={() => setScanMode('image')}
        >
          <Camera className="mr-2 h-4 w-4" />
          Image
        </Button>
        
        <Button
          variant={scanMode === 'search' ? 'default' : 'outline'}
          className={scanMode === 'search' ? 'bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white' : 'border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white'}
          onClick={() => setScanMode('search')}
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
      
      {scanMode === 'barcode' && (
        <div className="space-y-4">
          <div className="relative">
            <Barcode className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter barcode number"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 transition-all text-gray-900 bg-white"
            />
          </div>
          <Button 
            onClick={handleScan} 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
          >
            <Barcode className="mr-2 h-4 w-4" />
            Scan Barcode
          </Button>
        </div>
      )}

      {scanMode === 'search' && (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter food name (e.g., apple, chips, yogurt)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 transition-all text-gray-900 bg-white"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Button 
            onClick={handleSearch} 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
          >
            <Search className="mr-2 h-4 w-4" />
            Search Food
          </Button>
        </div>
      )}
      
      {scanMode === 'image' && (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#F97316]/50 transition-colors">
            <Camera className="mx-auto h-12 w-12 text-[#F97316] mb-4" />
            <p className="text-sm text-gray-700 mb-4 font-medium">Take a photo of your food product</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="food-image-upload"
            />
            <label htmlFor="food-image-upload">
              <Button variant="outline" className="cursor-pointer border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white">
                Choose Image
              </Button>
            </label>
          </div>
          <Button 
            onClick={handleScan} 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
          >
            <Camera className="mr-2 h-4 w-4" />
            Analyze Image
          </Button>
        </div>
      )}
      
      <div className="p-4 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20 mt-6">
        <p className="text-sm text-gray-700 font-medium">💡 Tip: For best results, ensure good lighting when scanning product images or use specific product names when searching.</p>
      </div>
    </div>
  );
};

export default ScanSection;
