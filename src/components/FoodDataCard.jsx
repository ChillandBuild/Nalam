
import React from 'react';
import { Check, TrendingDown } from 'lucide-react';

export const FoodDataCard = ({ data }) => {
  if (!data) return null;

  // Determine if it's healthy food based on sustainability score
  const isHealthyFood = data.sustainabilityScore >= 70;
  const categoryLabel = isHealthyFood ? "Eat This Way" : "Not That Way";

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🍎</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {data.name || "Food Item"} 
                <span className="ml-2 text-sm italic text-[#ea384c] bg-[#ea384c]/10 px-2 py-1 rounded">
                  {categoryLabel}
                </span>
              </h2>
              <p className="text-gray-600">Fresh Fruit</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-gray-600">Sustainability Score:</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {data.sustainabilityScore}/100
              </span>
            </div>
            <p className="text-xs text-gray-500">Confidence: {data.confidence}%</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gray-50 py-3 px-6 text-center border-b border-gray-100">
        <p className="text-gray-700 italic font-medium">
          "{data.quote || 'Know Your Food, Nourish Your World.'}"
        </p>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Nutritional Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <span className="text-green-600">🌱</span>
              Nutritional Benefits
            </h3>

            <div className="space-y-4">
              {/* Nutritional Highlights */}
              <div>
                <h4 className="font-medium mb-2 text-gray-800">Nutritional Highlights</h4>
                <ul className="space-y-2">
                  {data.nutritionalBenefits?.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Frequency */}
              <div>
                <h4 className="font-medium mb-1 text-gray-800 flex items-center gap-1">
                  <span className="w-1 h-4 bg-green-500 rounded"></span>
                  Recommended Frequency
                </h4>
                <p className="text-sm text-gray-700 ml-3">
                  {data.nutritionalBenefits?.recommendedFrequency || "Daily consumption is beneficial for overall health"}
                </p>
              </div>

              {/* Optimal Timing */}
              <div>
                <h4 className="font-medium mb-1 text-gray-800 flex items-center gap-1">
                  <span className="w-1 h-4 bg-green-500 rounded"></span>
                  Optimal Timing
                </h4>
                <p className="text-sm text-gray-700 ml-3">
                  {data.nutritionalBenefits?.bestTimeToConsume || "Best consumed as a mid-morning or afternoon"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sustainability Metrics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
              <span className="text-blue-600">📊</span>
              Sustainability Metrics
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Packaging</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${data.sustainabilityMetrics?.packaging || 90}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-800 w-8">
                    {data.sustainabilityMetrics?.packaging || 90}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700 flex items-center gap-1">
                  <TrendingDown size={14} />
                  Carbon Footprint
                </span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${data.sustainabilityMetrics?.carbonFootprint || 80}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-800 w-8">
                    {data.sustainabilityMetrics?.carbonFootprint || 80}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Supply Chain</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${data.sustainabilityMetrics?.supplyChain || 85}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-800 w-8">
                    {data.sustainabilityMetrics?.supplyChain || 85}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Ingredients</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ width: `${data.sustainabilityMetrics?.ingredients || 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-800 w-8">
                    {data.sustainabilityMetrics?.ingredients || 100}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contextual Suggestion */}
      <div className="bg-blue-50 p-4 border-t border-gray-100">
        <h4 className="font-medium text-gray-800 mb-2">Contextual Suggestion</h4>
        <p className="text-sm text-gray-700">
          Season for local apples! Consider visiting a nearby orchard for fresher options with lower transportation emissions.
        </p>
      </div>

      {/* Healthier Alternatives */}
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
          <span className="text-green-600">🔄</span>
          Healthier Alternatives
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.healthierAlternatives?.map((alt, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-900 mb-1">{alt.name}</h4>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-600">Score:</span>
                <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                  {alt.score}/100
                </span>
              </div>
              <p className="text-xs text-gray-600">{alt.reason}</p>
            </div>
          )) || (
            <>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-1">Pear</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-600">Score:</span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-medium">92/100</span>
                </div>
                <p className="text-xs text-gray-600">Similar nutritional profile with more potassium</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-1">Seasonal Berries</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-600">Score:</span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-medium">97/100</span>
                </div>
                <p className="text-xs text-gray-600">Higher antioxidant content</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-1">Orange</h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-600">Score:</span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-medium">89/100</span>
                </div>
                <p className="text-xs text-gray-600">Higher vitamin C content</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
