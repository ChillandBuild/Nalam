import { useState, useEffect } from "react";
import { Search, Camera, Barcode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { fetchFoodData } from "../../utils/fetchFoodData";
import { FoodDataCard } from "@/components/FoodDataCard";

const ScanSection = ({ onHistoryUpdate }) => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("scanHistory");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("scanHistory", JSON.stringify(history));
    if (onHistoryUpdate) onHistoryUpdate(history);
  }, [history]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter a food name");
      return;
    }
    setIsLoading(true);
    setError(null);
    setSearchResult(null);
    try {
      const data = await fetchFoodData(searchQuery);
      setSearchResult(data);
      // Save to backend
      await fetch("/api/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, timestamp: Date.now() }),
      });
      setHistory(prev => [{...data, timestamp: Date.now()}, ...prev]);
    } catch (err) {
      setError(err.message || 'Failed to fetch food data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6 text-visible-dark">Scan & Search Products</h2>
      <div className="mb-6">
        <div className="flex w-full max-w-2xl gap-4 mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Ask Nalam to find food data for..."
            className="flex-1 px-6 py-5 text-lg nature-input"
          />
          <Button
            onClick={handleSearch}
            disabled={isLoading}
            className="px-8 py-4 text-lg nature-button font-semibold"
          >
            Search
          </Button>
        </div>
        {isLoading && <div className="text-center text-sm text-gray-500 mt-2">Loading...</div>}
        {error && <div className="text-center text-red-500 text-sm mt-2">{error}</div>}
        {searchResult && <div className="mt-4"><FoodDataCard data={searchResult} /></div>}
      </div>
      <div className="p-4 bg-[#FFF7ED] rounded-lg border border-[#F97316]/20 mt-6">
        <p className="text-sm text-gray-700 font-medium">💡 Tip: For best results, ensure good lighting when scanning product images or use specific product names when searching.</p>
      </div>
    </div>
  );
};

export default ScanSection;
