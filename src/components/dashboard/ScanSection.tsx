
import { useState } from "react";
import { Search, Camera, Barcode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ScanSection = () => {
  const { toast } = useToast();
  const [scanMode, setScanMode] = useState<'barcode' | 'image'>('barcode');

  const handleScan = () => {
    toast({
      title: "Scan initiated",
      description: `${scanMode === 'barcode' ? 'Barcode' : 'Image'} scanning feature coming soon!`,
    });
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Scan Products</h2>
      
      <div className="flex justify-center gap-4 mb-6">
        <Button
          variant={scanMode === 'barcode' ? 'default' : 'outline'}
          className={scanMode === 'barcode' ? 'bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white' : 'border-[#F97316] text-[#F97316]'}
          onClick={() => setScanMode('barcode')}
        >
          <Barcode className="mr-2 h-5 w-5" />
          Barcode Scan
        </Button>
        
        <Button
          variant={scanMode === 'image' ? 'default' : 'outline'}
          className={scanMode === 'image' ? 'bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white' : 'border-[#F97316] text-[#F97316]'}
          onClick={() => setScanMode('image')}
        >
          <Camera className="mr-2 h-5 w-5" />
          Image Scan
        </Button>
      </div>
      
      {scanMode === 'barcode' ? (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Enter barcode number"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 transition-all"
            />
          </div>
          <Button 
            onClick={handleScan} 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
          >
            Scan Barcode
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#F97316]/50 transition-colors">
            <Camera className="mx-auto h-12 w-12 text-[#F97316] mb-4" />
            <p className="text-sm text-gray-600 mb-4">Take a photo of your food product</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="food-image-upload"
            />
            <label htmlFor="food-image-upload">
              <Button variant="outline" className="cursor-pointer border-[#F97316] text-[#F97316]">
                Choose Image
              </Button>
            </label>
          </div>
          <Button 
            onClick={handleScan} 
            className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
          >
            Analyze Image
          </Button>
        </div>
      )}
      
      <div className="p-4 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20 mt-6">
        <p className="text-sm text-gray-600">💡 Tip: For best results, ensure good lighting when scanning product images.</p>
      </div>
    </div>
  );
};

export default ScanSection;
