
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

export interface PlasticInfo {
  isPlastic: boolean;
  decompositionTime: string;
  impact: string;
}

export interface BannedInfo {
  countries: string[];
  reasons: string[];
}

export interface FoodAnalysisResult {
  name: string;
  category: string;
  imageUrl?: string; // Thumbnail of the analyzed image
  isJunkFood: boolean;
  sustainabilityScore: number;
  confidencePercentage: number;
  consumptionFrequency: string;
  optimalTiming: string;
  healthRisks: string[];
  nutritionalHighlights?: string[]; // For normal food
  sustainability: SustainabilityMetrics;
  plasticInfo?: PlasticInfo; // Only for items with plastic packaging
  contextualSuggestion?: string;
  alternatives: FoodAlternative[];
  bannedInfo?: BannedInfo; // Information about where this food is banned
}
