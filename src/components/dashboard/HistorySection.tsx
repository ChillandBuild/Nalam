import { useState, useEffect } from "react";
import { Calendar, Filter, History } from "lucide-react";
import { Button } from "@/components/ui/button";

const HistorySection = ({ onStartScan }) => {
  const [filterType, setFilterType] = useState<'all' | 'eco' | 'health'>('all');
  const [historyItems, setHistoryItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/history")
      .then(res => res.json())
      .then(data => {
        setHistoryItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load history");
        setLoading(false);
      });
  }, []);

  let filteredItems = historyItems;
  if (filterType === 'eco') {
    filteredItems = historyItems.filter(item => item.sustainabilityScore >= 70);
  } else if (filterType === 'health') {
    filteredItems = historyItems.filter(item => item.healthScore && item.healthScore >= 70);
  }

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-visible-dark">Scan History</h2>
        
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <select className="text-sm border border-gray-200 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20 text-gray-700 bg-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>All time</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-2 mb-6">
        <Button 
          variant="ghost" 
          size="sm"
          className={`${filterType === 'all' ? 'bg-gray-100 text-gray-800' : 'text-gray-600'} text-sm hover:bg-gray-100`}
          onClick={() => setFilterType('all')}
        >
          All
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className={`${filterType === 'eco' ? 'bg-gray-100 text-gray-800' : 'text-gray-600'} text-sm hover:bg-gray-100`}
          onClick={() => setFilterType('eco')}
        >
          High Eco Score
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className={`${filterType === 'health' ? 'bg-gray-100 text-gray-800' : 'text-gray-600'} text-sm hover:bg-gray-100`}
          onClick={() => setFilterType('health')}
        >
          High Health Score
        </Button>
      </div>
      
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center py-12 text-red-500">{error}</div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F97316]/10 to-[#ea384c]/10 flex items-center justify-center mb-4">
              <History className="w-8 h-8 text-[#F97316]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No Scan History Yet</h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              Start scanning or searching for food products to see your history here. Your previous scans will appear with their eco and health scores.
            </p>
            <Button 
              className="bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white hover:opacity-90 transition-all duration-300"
              onClick={onStartScan}
            >
              Start Your First Scan
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item, idx) => (
            <div key={item.timestamp || idx} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold text-lg text-nature-forest">{item.name}</div>
                <div className="text-sm text-gray-500">{item.category}</div>
              </div>
              <div className="flex gap-4 mt-2 md:mt-0">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Eco Score</span>
                  <span className="font-bold text-[#F97316]">{item.sustainabilityScore ?? '-'}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Health Score</span>
                  <span className="font-bold text-[#ea384c]">{item.healthScore ?? '-'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistorySection;
