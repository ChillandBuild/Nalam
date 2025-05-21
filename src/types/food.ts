
export interface FoodAlternative {
  name: string;
  score: number;
  benefit: string;
}

export interface SustainabilityMetrics {
  packaging: number;
  carbonFootprint: number;
  supplyChain: number;
  ingredients: number;
}

export interface FoodAnalysisResult {
  name: string;
  category: string;
  sustainabilityScore: number;
  confidencePercentage: number;
  consumptionFrequency: string;
  optimalTiming: string;
  healthRisks: string[];
  sustainability: SustainabilityMetrics;
  contextualSuggestion?: string;
  alternatives: FoodAlternative[];
}
