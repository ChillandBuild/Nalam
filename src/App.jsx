import React, { useState } from 'react';
import { fetchFoodData } from './utils/fetchFoodData';
import { LoadingSpinner } from './components/LoadingSpinner';
import { FoodDataCard } from './components/FoodDataCard';

// ... existing imports ...

const App = () => {
  // ... existing state ...
  const [foodData, setFoodData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setError(null);
    setFoodData(null);

    console.log('Searching for:', searchTerm); // Debug log

    try {
      const data = await fetchFoodData(searchTerm);
      setFoodData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch food data');
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/perplexity-chat" element={
                <ProtectedRoute>
                  <PerplexityChat />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App; 