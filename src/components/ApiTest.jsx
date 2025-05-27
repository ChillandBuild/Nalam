import React, { useState } from 'react';
import { fetchFoodData } from '../utils/fetchFoodData';
import { LoadingSpinner } from './LoadingSpinner';

export const ApiTest = () => {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const testApi = async () => {
    setIsLoading(true);
    setError(null);
    setTestResult(null);

    try {
      // Test with a simple food item
      const data = await fetchFoodData('apple');
      setTestResult({
        success: true,
        data: data,
        apiKey: import.meta.env.VITE_PERPLEXITY_API_KEY ? 'Present' : 'Missing'
      });
    } catch (err) {
      setError(err.message);
      setTestResult({
        success: false,
        error: err.message,
        apiKey: import.meta.env.VITE_PERPLEXITY_API_KEY ? 'Present' : 'Missing'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">API Integration Test</h2>
      
      <button
        onClick={testApi}
        disabled={isLoading}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {isLoading ? 'Testing...' : 'Test API Integration'}
      </button>

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
          <h3 className="font-bold">Error:</h3>
          <p>{error}</p>
        </div>
      )}

      {testResult && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-bold mb-2">Test Results:</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">API Key Status:</span> {testResult.apiKey}</p>
            <p><span className="font-semibold">Test Status:</span> {testResult.success ? '✅ Success' : '❌ Failed'}</p>
            {testResult.success && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Sample Response:</h4>
                <pre className="bg-white p-4 rounded-lg overflow-auto">
                  {JSON.stringify(testResult.data, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}; 