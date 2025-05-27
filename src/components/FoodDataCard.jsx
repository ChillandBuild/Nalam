import React from 'react';

export const FoodDataCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      {/* Quote */}
      <div className="text-center mb-6">
        <p className="text-xl italic text-gray-600">"{data.quote}"</p>
      </div>

      {/* Sustainability Score */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Sustainability Score</h3>
          <span className="text-2xl font-bold text-indigo-600">{data.sustainabilityScore}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full"
            style={{ width: `${data.sustainabilityScore}%` }}
          ></div>
        </div>
      </div>

      {/* Nutritional Benefits */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Nutritional Benefits</h3>
        <ul className="list-disc list-inside space-y-2">
          {data.nutritionalBenefits.highlights.map((highlight, index) => (
            <li key={index} className="text-gray-700">{highlight}</li>
          ))}
        </ul>
        <div className="mt-3 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Recommended Frequency</p>
            <p className="font-medium">{data.nutritionalBenefits.recommendedFrequency}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Best Time to Consume</p>
            <p className="font-medium">{data.nutritionalBenefits.bestTimeToConsume}</p>
          </div>
        </div>
      </div>

      {/* Sustainability Metrics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Sustainability Metrics</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(data.sustainabilityMetrics).map(([key, value]) => (
            <div key={key} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              <p className="font-medium">{value}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Healthier Alternatives */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Healthier Alternatives</h3>
        <div className="space-y-3">
          {data.healthierAlternatives.map((alt, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium">{alt.name}</h4>
                <span className="text-sm text-indigo-600">Score: {alt.score}</span>
              </div>
              <p className="text-sm text-gray-600">{alt.reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Confidence Level */}
      <div className="mt-6 text-right">
        <p className="text-sm text-gray-500">
          Confidence Level: {data.confidence}%
        </p>
      </div>
    </div>
  );
}; 