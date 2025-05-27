const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

export async function fetchFoodData(foodName) {
  const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;
  
  if (!apiKey) {
    throw new Error('Perplexity API key not found');
  }

  const prompt = `Provide structured nutritional and sustainability data in JSON for the food item: "${foodName}". Include:
- nutritional benefits (bullet points)
- recommended frequency
- best time to consume
- sustainability metrics (packaging, carbon footprint, supply chain, ingredients as percentage)
- sustainability score out of 100
- confidence
- a one-line quote
- 3 healthier alternatives (with scores and one-line reason)

Format the response as a valid JSON object with the following structure:
{
  "nutritionalBenefits": {
    "highlights": string[],
    "recommendedFrequency": string,
    "bestTimeToConsume": string
  },
  "sustainabilityMetrics": {
    "packaging": number,
    "carbonFootprint": number,
    "supplyChain": number,
    "ingredients": number
  },
  "sustainabilityScore": number,
  "confidence": number,
  "quote": string,
  "healthierAlternatives": Array<{
    "name": string,
    "score": number,
    "reason": string
  }>
}
Respond ONLY with valid JSON. Do not include any explanation or extra text. Do not use markdown formatting.`;

  try {
    const response = await fetch(PERPLEXITY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'sonar',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch (jsonErr) {
      console.error('Failed to parse JSON from API:', jsonErr);
      throw new Error('Failed to parse JSON from API');
    }

    if (!response.ok) {
      console.error('API error response:', data);
      throw new Error(`API request failed with status ${response.status}: ${data.error?.message || JSON.stringify(data)}`);
    }

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      console.error('No content in API response:', data);
      throw new Error('No content in API response');
    }
    
    // Parse the JSON response from the AI, handling markdown code blocks
    try {
      let jsonString = content.trim();
      if (jsonString.startsWith('```json')) {
        jsonString = jsonString.replace(/^```json/, '').replace(/```$/, '').trim();
      } else if (jsonString.startsWith('```')) {
        jsonString = jsonString.replace(/^```/, '').replace(/```$/, '').trim();
      }
      return JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError, content);
      throw new Error('Invalid response format from AI');
    }
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
} 