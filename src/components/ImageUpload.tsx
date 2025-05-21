
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileImage } from "lucide-react";
import { FoodAnalysisResult } from "../types/food";
import { mockFoodData } from "../data/mockFoodData";

interface ImageUploadProps {
  onUploadResult: (result: FoodAnalysisResult) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const ImageUpload = ({ onUploadResult, setIsLoading }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const processFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files.length) {
      processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      processFile(e.target.files[0]);
    }
  };
  
  const handleAnalyze = () => {
    if (!selectedImage) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // For demo, just return a random food from our mock data
      const randomIndex = Math.floor(Math.random() * mockFoodData.length);
      onUploadResult(mockFoodData[randomIndex]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging 
            ? "border-nalam-green bg-nalam-green/5" 
            : "border-gray-300 hover:border-nalam-green/50"
        } transition-colors duration-200`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedImage ? (
          <div className="space-y-4">
            <img 
              src={selectedImage} 
              alt="Food preview" 
              className="max-h-64 mx-auto rounded-lg"
            />
            <Button onClick={() => setSelectedImage(null)} variant="outline" className="mt-2">
              Remove Image
            </Button>
          </div>
        ) : (
          <>
            <FileImage className="mx-auto h-12 w-12 text-nalam-green mb-4" />
            <h3 className="text-lg font-medium mb-2">Drag & drop an image or click to browse</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload a clear image of your food for analysis
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button variant="outline" className="cursor-pointer" asChild>
                <span>
                  <Upload className="mr-2 h-4 w-4" /> Browse Files
                </span>
              </Button>
            </label>
          </>
        )}
      </div>
      
      {selectedImage && (
        <Button 
          onClick={handleAnalyze} 
          className="w-full bg-nalam-green hover:bg-nalam-green-dark"
        >
          Analyze Food
        </Button>
      )}
    </div>
  );
};

export default ImageUpload;
