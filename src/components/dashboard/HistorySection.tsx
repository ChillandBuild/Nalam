
import { useState } from "react";
import { Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for history items
const mockHistoryItems = [
  { 
    id: 1, 
    date: "2025-05-20", 
    productName: "Organic Apples", 
    ecoScore: 85, 
    healthScore: 90
  },
  { 
    id: 2, 
    date: "2025-05-19", 
    productName: "Whole Grain Bread", 
    ecoScore: 75, 
    healthScore: 80
  },
  { 
    id: 3, 
    date: "2025-05-18", 
    productName: "Chocolate Bar", 
    ecoScore: 45, 
    healthScore: 30
  },
  { 
    id: 4, 
    date: "2025-05-17", 
    productName: "Plant-based Milk", 
    ecoScore: 90, 
    healthScore: 85
  }
];

const HistorySection = () => {
  const [filterType, setFilterType] = useState<'all' | 'eco' | 'health'>('all');
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const filteredItems = filterType === 'all' 
    ? mockHistoryItems 
    : mockHistoryItems.filter(item => 
        filterType === 'eco' 
          ? item.ecoScore >= 70 
          : item.healthScore >= 70
      );

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Scan History</h2>
        
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <select className="text-sm border border-gray-200 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-[#F97316]/20">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>All time</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-2 mb-4">
        <Button 
          variant="ghost" 
          size="sm"
          className={`${filterType === 'all' ? 'bg-gray-100' : ''} text-sm`}
          onClick={() => setFilterType('all')}
        >
          All
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className={`${filterType === 'eco' ? 'bg-gray-100' : ''} text-sm`}
          onClick={() => setFilterType('eco')}
        >
          High Eco Score
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          className={`${filterType === 'health' ? 'bg-gray-100' : ''} text-sm`}
          onClick={() => setFilterType('health')}
        >
          High Health Score
        </Button>
      </div>
      
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-medium">{item.productName}</h3>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-[#F97316] hover:bg-[#F97316]/90">
                  Eco: {item.ecoScore}
                </Badge>
                <Badge className="bg-[#ea384c] hover:bg-[#ea384c]/90">
                  Health: {item.healthScore}
                </Badge>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Filter className="mx-auto h-12 w-12 mb-2 text-gray-300" />
            <p>No items match your filter</p>
            <Button 
              variant="link" 
              size="sm" 
              onClick={() => setFilterType('all')}
              className="text-[#F97316] mt-1"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
      
      {filteredItems.length > 0 && (
        <div className="mt-4 text-center">
          <Button variant="outline" size="sm" className="text-sm">
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default HistorySection;
