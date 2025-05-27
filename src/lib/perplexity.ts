import axios from 'axios';

interface PerplexityResponse {
  answer: string;
  sources?: Array<{
    title: string;
    url: string;
  }>;
}

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

export class PerplexityService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async querySonar(prompt: string): Promise<PerplexityResponse> {
    try {
      const response = await axios.post(
        PERPLEXITY_API_URL,
        {
          model: 'sonar-medium-online',
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return {
        answer: response.data.choices[0].message.content,
        sources: response.data.sources,
      };
    } catch (error) {
      console.error('Error querying Perplexity API:', error);
      throw error;
    }
  }
} 