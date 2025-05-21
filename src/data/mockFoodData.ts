
import { FoodAnalysisResult } from "../types/food";

export const mockFoodData: FoodAnalysisResult[] = [
  {
    name: "Apple",
    category: "Fresh Fruit",
    sustainabilityScore: 88,
    confidencePercentage: 95,
    consumptionFrequency: "Daily consumption is beneficial",
    optimalTiming: "Morning or as a midday snack",
    healthRisks: [],
    sustainability: {
      packaging: 95,
      carbonFootprint: 85,
      supplyChain: 80,
      ingredients: 100
    },
    contextualSuggestion: "Local and in-season apples are currently available in your area, reducing carbon footprint by 60% compared to imported varieties.",
    alternatives: [
      {
        name: "Local Pears",
        score: 90,
        benefit: "In season and locally sourced"
      },
      {
        name: "Oranges",
        score: 82,
        benefit: "Higher Vitamin C content"
      },
      {
        name: "Berries",
        score: 85,
        benefit: "Higher antioxidant properties"
      }
    ]
  },
  {
    name: "Potato Chips",
    category: "Processed Snacks",
    sustainabilityScore: 32,
    confidencePercentage: 92,
    consumptionFrequency: "Limit to 1-2 times per month",
    optimalTiming: "Occasional midday snack, not before bedtime",
    healthRisks: [
      "High sodium content linked to hypertension",
      "Acrylamide formation during processing may increase cancer risk",
      "Excessive consumption linked to weight gain and obesity"
    ],
    sustainability: {
      packaging: 20,
      carbonFootprint: 35,
      supplyChain: 40,
      ingredients: 45
    },
    contextualSuggestion: "Evening snacking? Try air-popped popcorn or roasted chickpeas instead for better sleep and digestion.",
    alternatives: [
      {
        name: "Air-popped Popcorn",
        score: 75,
        benefit: "Lower sodium and calories"
      },
      {
        name: "Baked Vegetable Chips",
        score: 60,
        benefit: "Less oil and processing"
      },
      {
        name: "Roasted Nuts",
        score: 80,
        benefit: "Higher protein and healthy fats"
      }
    ]
  },
  {
    name: "Greek Yogurt",
    category: "Dairy",
    sustainabilityScore: 65,
    confidencePercentage: 88,
    consumptionFrequency: "3-5 times per week is optimal",
    optimalTiming: "Breakfast or post-workout recovery",
    healthRisks: [
      "High consumption may contribute to calcium imbalance for some individuals"
    ],
    sustainability: {
      packaging: 50,
      carbonFootprint: 60,
      supplyChain: 65,
      ingredients: 75
    },
    contextualSuggestion: "Morning protein boost! Add locally sourced berries for additional antioxidants.",
    alternatives: [
      {
        name: "Coconut Yogurt",
        score: 70,
        benefit: "Plant-based alternative"
      },
      {
        name: "Kefir",
        score: 75,
        benefit: "Higher probiotic content"
      },
      {
        name: "Cottage Cheese",
        score: 68,
        benefit: "Higher protein content"
      }
    ]
  },
  {
    name: "Hamburger",
    category: "Fast Food",
    sustainabilityScore: 25,
    confidencePercentage: 90,
    consumptionFrequency: "Limit to once per month",
    optimalTiming: "Occasional midday meal, not evening",
    healthRisks: [
      "High saturated fat linked to cardiovascular disease",
      "Processed meat associated with increased cancer risk",
      "High sodium content contributes to hypertension"
    ],
    sustainability: {
      packaging: 30,
      carbonFootprint: 15,
      supplyChain: 20,
      ingredients: 25
    },
    contextualSuggestion: "Consider local plant-based burgers which use 95% less water and 75% less land than beef burgers.",
    alternatives: [
      {
        name: "Veggie Burger",
        score: 70,
        benefit: "Lower environmental impact"
      },
      {
        name: "Grilled Chicken Sandwich",
        score: 55,
        benefit: "Leaner protein option"
      },
      {
        name: "Portobello Mushroom Burger",
        score: 85,
        benefit: "Plant-based whole food option"
      }
    ]
  },
  {
    name: "Cola Soda",
    category: "Sugar-Sweetened Beverages",
    sustainabilityScore: 20,
    confidencePercentage: 98,
    consumptionFrequency: "Avoid or limit to once per month",
    optimalTiming: "No optimal time - best replaced with water",
    healthRisks: [
      "High sugar content linked to obesity and diabetes",
      "Phosphoric acid may contribute to calcium loss",
      "Caffeine may disrupt sleep patterns",
      "Regular consumption linked to dental erosion"
    ],
    sustainability: {
      packaging: 15,
      carbonFootprint: 25,
      supplyChain: 30,
      ingredients: 10
    },
    contextualSuggestion: "Afternoon energy slump? Try infused water with local mint and cucumber instead of caffeine and sugar.",
    alternatives: [
      {
        name: "Sparkling Water",
        score: 80,
        benefit: "Zero calories and sugar"
      },
      {
        name: "Herbal Tea",
        score: 90,
        benefit: "Potential health benefits"
      },
      {
        name: "Infused Water",
        score: 95,
        benefit: "Natural flavoring from fruits"
      }
    ]
  }
];
