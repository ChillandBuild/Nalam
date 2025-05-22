
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Timer, Meditation, Apple } from "lucide-react";

const HealthCards = () => {
  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-hugh text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#ea384c] mb-4">Health & Wellness</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover how simple lifestyle changes can significantly impact your health and the environment around you.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Intermittent Fasting Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">Intermittent Fasting</CardTitle>
                <Timer className="h-6 w-6 text-[#F97316]" />
              </div>
              <CardDescription>Time-restricted eating for better health</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Intermittent fasting involves cycling between periods of eating and fasting. The most popular method is the 16/8 approach: eating during an 8-hour window and fasting for 16 hours.</p>
              <h4 className="font-semibold mt-4 mb-2">Benefits:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>May improve insulin sensitivity and blood sugar control</li>
                <li>Can boost cellular repair processes</li>
                <li>Supports weight management</li>
                <li>May enhance heart health</li>
                <li>Potentially increases longevity</li>
              </ul>
              <div className="mt-4 p-2 bg-[#FFF7ED]/60 rounded-lg text-sm">
                <p className="font-medium text-[#F97316]">Pro Tip:</p>
                <p>Start with a 12-hour fasting window and gradually increase to 16 hours to allow your body to adjust comfortably.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Learn More</Button>
            </CardFooter>
          </Card>
          
          {/* Meditation Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">Mindful Meditation</CardTitle>
                <Meditation className="h-6 w-6 text-[#F97316]" />
              </div>
              <CardDescription>Cultivate peace of mind and reduce stress</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness.</p>
              <h4 className="font-semibold mt-4 mb-2">Benefits:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Reduces stress and anxiety</li>
                <li>Improves emotional health and well-being</li>
                <li>Enhances self-awareness and concentration</li>
                <li>May help manage symptoms of certain health conditions</li>
                <li>Can promote better sleep quality</li>
              </ul>
              <div className="mt-4 p-2 bg-[#FFF7ED]/60 rounded-lg text-sm">
                <p className="font-medium text-[#F97316]">Beginner's Guide:</p>
                <p>Start with just 5 minutes daily of focused breathing. Find a quiet space, sit comfortably, and focus on your breath, gently bringing your attention back whenever your mind wanders.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Explore Techniques</Button>
            </CardFooter>
          </Card>
          
          {/* Environmental Impact Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">Eco-Friendly Eating</CardTitle>
                <Leaf className="h-6 w-6 text-[#F97316]" />
              </div>
              <CardDescription>Sustainable food choices for our planet</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">The food choices we make impact not only our health but also the environment. Adopting eco-friendly eating habits can significantly reduce your carbon footprint.</p>
              <h4 className="font-semibold mt-4 mb-2">Environmental Benefits:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Reduced greenhouse gas emissions</li>
                <li>Lower water consumption</li>
                <li>Decreased land use and deforestation</li>
                <li>Reduced pollution from packaging</li>
                <li>Support for biodiversity</li>
              </ul>
              <div className="mt-4 p-2 bg-[#FFF7ED]/60 rounded-lg text-sm">
                <p className="font-medium text-[#F97316]">Simple Swaps:</p>
                <p>Choose locally grown produce, reduce meat consumption, opt for sustainably sourced seafood, and minimize food waste by planning meals and storing food properly.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Get Started</Button>
            </CardFooter>
          </Card>
          
          {/* 8-Hour Eating Window Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">The 8-Hour Eating Window</CardTitle>
                <Timer className="h-6 w-6 text-[#F97316]" />
              </div>
              <CardDescription>Optimizing your daily eating schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Restricting your daily eating to an 8-hour window is a popular form of intermittent fasting that can help regulate your body's natural rhythms and improve metabolism.</p>
              <h4 className="font-semibold mt-4 mb-2">How It Works:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Choose your 8-hour window (e.g., 10am to 6pm)</li>
                <li>Consume all your daily calories within this timeframe</li>
                <li>Only drink water, black coffee, or unsweetened tea during fasting hours</li>
                <li>Maintain consistent timing to help your body adapt</li>
                <li>Ensure proper nutrition during eating hours</li>
              </ul>
              <div className="mt-4 p-2 bg-[#FFF7ED]/60 rounded-lg text-sm">
                <p className="font-medium text-[#F97316]">Science Behind It:</p>
                <p>This eating pattern helps align with your circadian rhythm, giving your digestive system time to rest and allowing your body to initiate cellular repair processes during fasting periods.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Create Your Schedule</Button>
            </CardFooter>
          </Card>
          
          {/* Healthy Diet Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">Plant-Based Power</CardTitle>
                <Apple className="h-6 w-6 text-[#F97316]" />
              </div>
              <CardDescription>Harness the benefits of plant-focused eating</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Incorporating more plant-based foods into your diet can boost your health and reduce environmental impact. You don't need to go fully vegetarian to reap the benefits.</p>
              <h4 className="font-semibold mt-4 mb-2">Key Benefits:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Higher intake of fiber, vitamins, and antioxidants</li>
                <li>Lower risk of heart disease and certain cancers</li>
                <li>Better weight management</li>
                <li>Reduced carbon footprint</li>
                <li>Support for sustainable agriculture</li>
              </ul>
              <div className="mt-4 p-2 bg-[#FFF7ED]/60 rounded-lg text-sm">
                <p className="font-medium text-[#F97316]">Getting Started:</p>
                <p>Try implementing "Meatless Mondays" or making vegetables the star of your plate while treating meat as a side dish. Explore global cuisines that traditionally use less animal products.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Discover Recipes</Button>
            </CardFooter>
          </Card>
          
          {/* Sustainable Living Card */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-[#F97316]/10 bg-white/80 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-[#F97316] to-[#ea384c]"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold">Eco-Conscious Living</CardTitle>
                <Leaf className="h-6 w-6 text-[#F97316]" />
              </div>
              <CardDescription>Small changes, big environmental impact</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Making environmentally conscious choices in your daily life can collectively lead to significant positive impacts on our planet's health.</p>
              <h4 className="font-semibold mt-4 mb-2">Impactful Actions:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Reduce single-use plastics and packaging</li>
                <li>Choose products with minimal environmental footprints</li>
                <li>Support local farmers and sustainable businesses</li>
                <li>Conserve water and energy</li>
                <li>Properly sort and recycle waste</li>
              </ul>
              <div className="mt-4 p-2 bg-[#FFF7ED]/60 rounded-lg text-sm">
                <p className="font-medium text-[#F97316]">Did You Know?</p>
                <p>If everyone made just one eco-friendly swap in their daily routine, the collective impact would be enormous. For example, using a reusable water bottle instead of buying bottled water can save hundreds of plastic bottles per person annually.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-[#F97316] to-[#ea384c] text-white">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HealthCards;
