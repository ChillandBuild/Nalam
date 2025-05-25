
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Timer, Heart, Apple, Droplets, TreePine, Recycle, Utensils, Sun, Zap } from "lucide-react";

const HealthCards = () => {
  const healthHabits = [
    { icon: Droplets, title: "Stay Hydrated", description: "Drink plenty of water throughout the day" },
    { icon: Apple, title: "Eat 5+ Fruits & Veggies", description: "Ensure balanced diet and reduce disease risk" },
    { icon: Heart, title: "30 Min Exercise Daily", description: "Brisk walking improves cardiovascular health" },
    { icon: Timer, title: "Stand Every 30 Minutes", description: "Break up sitting to lower chronic disease risk" },
    { icon: Sun, title: "7+ Hours Sleep", description: "Quality sleep boosts immune function and mood" },
    { icon: Heart, title: "Daily Mindfulness", description: "Practice meditation to reduce stress" },
    { icon: Droplets, title: "Wash Hands Regularly", description: "Prevent illness, especially before eating" },
    { icon: Utensils, title: "Walk After Meals", description: "5-minute walks help control blood sugar" },
    { icon: Sun, title: "10 Min Outdoor Light", description: "Natural light boosts mood and sleep cycles" },
    { icon: Apple, title: "Limit Added Sugars", description: "Keep under 10% of daily calories" }
  ];

  const greenHabits = [
    { icon: Droplets, title: "Reusable Water Bottle", description: "Replace disposable plastic bottles" },
    { icon: Recycle, title: "Reusable Shopping Bags", description: "Choose minimally packaged products" },
    { icon: Zap, title: "Turn Off Lights", description: "Unplug devices when leaving rooms" },
    { icon: TreePine, title: "Eco-Friendly Transport", description: "Use public transit, bike, or carpool" },
    { icon: Droplets, title: "Conserve Water", description: "Turn off tap while brushing teeth" },
    { icon: Timer, title: "Shorter Showers", description: "Reduce water usage vs long baths" },
    { icon: Recycle, title: "Full Wash Loads", description: "Use cold water to save energy" },
    { icon: Leaf, title: "Plant-Based Meals", description: "One meat-free meal daily lowers carbon footprint" },
    { icon: Recycle, title: "Compost Food Scraps", description: "Reduce landfill waste from fruits & vegetables" },
    { icon: TreePine, title: "Reduce, Reuse, Recycle", description: "Practice the three R's to protect environment" }
  ];

  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-hugh text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#ea384c] mb-4">Daily Habits for Health & Sustainability</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Simple daily habits that boost your health and protect our planet. Small changes, big impact!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Health Habits Section */}
          <Card className="overflow-hidden border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-[#F97316] mr-3" />
                <CardTitle className="text-2xl font-semibold">10 Daily Habits for a Healthier You</CardTitle>
              </div>
              <CardDescription>Evidence-based habits to improve your physical and mental well-being</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {healthHabits.map((habit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#FFF7ED]/60 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#F97316]/10 rounded-full flex items-center justify-center">
                      <habit.icon className="h-4 w-4 text-[#F97316]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm text-gray-800">{habit.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{habit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Start Your Health Journey</Button>
            </CardFooter>
          </Card>

          {/* Green Habits Section */}
          <Card className="overflow-hidden border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-[#F97316] mr-3" />
                <CardTitle className="text-2xl font-semibold">10 Daily Habits for a Greener Planet</CardTitle>
              </div>
              <CardDescription>Simple eco-friendly actions to reduce your environmental footprint</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {greenHabits.map((habit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#FFF7ED]/60 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#F97316]/10 rounded-full flex items-center justify-center">
                      <habit.icon className="h-4 w-4 text-[#F97316]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm text-gray-800">{habit.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{habit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Start Going Green</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white rounded-full font-semibold shadow-lg">
            <Heart className="h-5 w-5" />
            <span>Small Changes, Big Impact</span>
            <Leaf className="h-5 w-5" />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Start with just one habit today. Every small step towards better health and sustainability makes a difference for you and our planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthCards;
