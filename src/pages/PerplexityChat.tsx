import React from 'react';
import { PerplexityChat as PerplexityChatComponent } from '../components/PerplexityChat';

const PerplexityChat: React.FC = () => {
  const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;

  if (!apiKey) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="p-4 bg-yellow-50 text-yellow-700 rounded-md">
          Please set your Perplexity API key in the .env file
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Perplexity Chat</h1>
      <PerplexityChatComponent apiKey={apiKey} />
    </div>
  );
};

export default PerplexityChat; 