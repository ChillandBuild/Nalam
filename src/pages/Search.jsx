import React, { useState, useEffect } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { FoodDataCard } from '../components/FoodDataCard';

const Search = ({ onSearch, isLoading, error, foodData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  // Reset search input after a successful search
  useEffect(() => {
    if (!isLoading && foodData) {
      setSearchTerm('');
    }
  }, [isLoading, foodData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mb-8">
        <div className="flex w-full max-w-2xl gap-4">
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Ask Nalam to find food data for..."
            className="flex-1 px-6 py-5 text-lg nature-input"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 text-lg nature-button font-semibold"
          >
            Search
          </button>
        </div>
      </form>

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="max-w-2xl mx-auto p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {foodData && <FoodDataCard data={foodData} />}
    </div>
  );
};

export default Search; 