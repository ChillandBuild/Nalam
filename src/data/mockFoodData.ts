
import { FoodAnalysisResult } from "../types/food";

export const mockFoodData: FoodAnalysisResult[] = [
  {
    name: "Organic Apple",
    category: "Fresh Fruit",
    imageUrl: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=200",
    isJunkFood: false,
    sustainabilityScore: 85,
    confidencePercentage: 95,
    consumptionFrequency: "Daily consumption is beneficial for overall health",
    optimalTiming: "Best consumed as a mid-morning or afternoon snack",
    healthRisks: [],
    nutritionalHighlights: [
      "Rich in dietary fiber",
      "Good source of vitamin C",
      "Contains antioxidants that may reduce risk of chronic diseases",
      "Low glycemic index helps regulate blood sugar"
    ],
    sustainability: {
      packaging: 90,
      carbonFootprint: 80,
      supplyChain: 85,
      ingredients: 100
    },
    contextualSuggestion: "Season for local apples! Consider visiting a nearby orchard for fresher options with lower transportation emissions.",
    alternatives: [
      {
        name: "Pear",
        score: 82,
        benefit: "Similar nutritional profile with more potassium"
      },
      {
        name: "Seasonal Berries",
        score: 87,
        benefit: "Higher antioxidant content"
      },
      {
        name: "Orange",
        score: 80,
        benefit: "Higher vitamin C content"
      }
    ]
  },
  {
    name: "Potato Chips",
    category: "Processed Snacks",
    imageUrl: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=200",
    isJunkFood: true,
    sustainabilityScore: 30,
    confidencePercentage: 98,
    consumptionFrequency: "Limit to 1-2 servings per month",
    optimalTiming: "Best consumed as an occasional treat, not as a regular snack",
    healthRisks: [
      "High in sodium which may increase blood pressure",
      "Contains trans fats linked to heart disease",
      "High in calories and low in nutrients",
      "Acrylamide (formed during cooking) is potentially harmful"
    ],
    sustainability: {
      packaging: 20,
      carbonFootprint: 35,
      supplyChain: 40,
      ingredients: 25
    },
    plasticInfo: {
      isPlastic: true,
      decompositionTime: "Up to 500 years for complete decomposition",
      impact: "Contributes to microplastic pollution in oceans and soil"
    },
    contextualSuggestion: "Try air-popped popcorn as a healthier alternative with significantly less packaging waste.",
    alternatives: [
      {
        name: "Air-popped Popcorn",
        score: 75,
        benefit: "Lower in fat and sodium, higher in fiber"
      },
      {
        name: "Baked Vegetable Chips",
        score: 65,
        benefit: "Less oil and preservatives"
      },
      {
        name: "Rice Cakes",
        score: 70,
        benefit: "Low calorie, zero fat option"
      }
    ]
  },
  {
    name: "Greek Yogurt",
    category: "Dairy Products",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=200",
    isJunkFood: false,
    sustainabilityScore: 65,
    confidencePercentage: 90,
    consumptionFrequency: "Safe to consume 3-5 times per week",
    optimalTiming: "Excellent as a breakfast option or post-workout recovery food",
    healthRisks: [
      "High in saturated fat if full-fat varieties are chosen"
    ],
    nutritionalHighlights: [
      "High in protein and calcium",
      "Contains probiotics for gut health",
      "Lower in lactose than regular yogurt",
      "Good source of B vitamins"
    ],
    sustainability: {
      packaging: 45,
      carbonFootprint: 60,
      supplyChain: 65,
      ingredients: 70
    },
    plasticInfo: {
      isPlastic: true,
      decompositionTime: "Up to 450 years for plastic containers",
      impact: "Single-use plastic containers contribute significantly to landfill waste"
    },
    contextualSuggestion: "Consider buying larger containers to reduce plastic waste or looking for brands with recyclable paper packaging.",
    alternatives: [
      {
        name: "Coconut Yogurt",
        score: 75,
        benefit: "Plant-based alternative with less environmental impact"
      },
      {
        name: "Kefir",
        score: 70,
        benefit: "More diverse probiotic content"
      },
      {
        name: "Skyr",
        score: 68,
        benefit: "Higher protein content"
      }
    ]
  },
  {
    name: "Chocolate Bar",
    category: "Confectionery",
    imageUrl: "https://images.unsplash.com/photo-1548907040-4b7d8a91f0e9?q=80&w=200",
    isJunkFood: true,
    sustainabilityScore: 25,
    confidencePercentage: 95,
    consumptionFrequency: "Limit to 1-2 small servings per week",
    optimalTiming: "Best consumed as an afternoon treat, not near bedtime",
    healthRisks: [
      "High sugar content linked to obesity and diabetes",
      "May contribute to dental issues",
      "Contains caffeine which can affect sleep quality"
    ],
    sustainability: {
      packaging: 20,
      carbonFootprint: 25,
      supplyChain: 15,
      ingredients: 25
    },
    plasticInfo: {
      isPlastic: true,
      decompositionTime: "Up to 200 years for wrappers with mixed materials",
      impact: "Non-recyclable wrappers contribute to landfill waste and pollution"
    },
    contextualSuggestion: "Look for fair trade chocolate with minimal packaging, or try making homemade treats with raw cacao.",
    alternatives: [
      {
        name: "Dark Chocolate (70%+)",
        score: 60,
        benefit: "Higher in antioxidants, lower in sugar"
      },
      {
        name: "Fruit & Nut Mix",
        score: 85,
        benefit: "Natural sugars with added protein and healthy fats"
      },
      {
        name: "Cacao Nibs",
        score: 80,
        benefit: "Unprocessed form with no added sugar"
      }
    ]
  },
  {
    name: "Spinach",
    category: "Leafy Greens",
    imageUrl: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=200",
    isJunkFood: false,
    sustainabilityScore: 90,
    confidencePercentage: 97,
    consumptionFrequency: "Can be consumed daily for optimal health benefits",
    optimalTiming: "Versatile for any meal; particularly good for lunch or dinner",
    healthRisks: [],
    nutritionalHighlights: [
      "Excellent source of iron and calcium",
      "High in vitamins A, C, K, and folate",
      "Contains antioxidants that support eye health",
      "Low in calories but nutrient-dense"
    ],
    sustainability: {
      packaging: 85,
      carbonFootprint: 95,
      supplyChain: 90,
      ingredients: 100
    },
    contextualSuggestion: "Try growing your own spinach in a small container garden for the freshest and most sustainable option.",
    alternatives: [
      {
        name: "Kale",
        score: 88,
        benefit: "Higher in vitamin K and antioxidants"
      },
      {
        name: "Swiss Chard",
        score: 85,
        benefit: "More diverse mineral content"
      },
      {
        name: "Arugula",
        score: 82,
        benefit: "Distinctive peppery flavor with similar benefits"
      }
    ]
  }
];
