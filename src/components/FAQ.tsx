
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate is the sustainability scoring?",
      answer: "Nalam's sustainability scores are based on multiple verified data sources including lifecycle assessments, environmental certifications, and supply chain information. Each score includes a confidence percentage that indicates data reliability based on the number, quality, and recency of sources. We continuously update our databases to ensure the highest accuracy possible."
    },
    {
      question: "Does the app work offline?",
      answer: "Yes, Nalam has a limited offline mode that allows you to access recently scanned products and their information. However, for new scans, image analysis, and up-to-date contextual suggestions based on time and location, an internet connection is required."
    },
    {
      question: "How does the app use my location data?",
      answer: "Location data is only used (with your permission) to provide contextualized suggestions for locally available and seasonal alternatives. You can opt out of location services at any time and still use the core features of the app. All location data is processed with privacy in mind and not shared with third parties."
    },
    {
      question: "What types of food can I analyze with the image upload feature?",
      answer: "The food image analysis works with both packaged products and unpackaged foods like fresh produce, meals, snacks, and homemade dishes. The more clearly visible the food is in the image, the more accurate our analysis will be."
    },
    {
      question: "How do I earn and redeem EcoPoints?",
      answer: "You earn EcoPoints by scanning products, making eco-friendly swaps, playing EcoTrivia, maintaining daily streaks, and uploading food images for analysis. These points can be redeemed for discounts with our partner brands or donated to environmental and health causes that you care about."
    },
    {
      question: "Where does the nutritional and health data come from?",
      answer: "Our health and nutrition data comes from established sources including USDA FoodData Central, WHO nutritional guidelines, FDA databases, and peer-reviewed nutritional research. All health claims are linked to their original sources for transparency."
    },
    {
      question: "Can I customize the app for dietary restrictions?",
      answer: "Yes! During setup, you can indicate dietary preferences (vegan, vegetarian, gluten-free, etc.) and health goals. The app will then tailor alternative suggestions to match these preferences, ensuring all recommendations are suitable for your dietary needs."
    },
    {
      question: "Is my personal data secure?",
      answer: "Absolutely. Nalam is built with privacy by design. We only collect essential data needed to provide the service, and sensitive data like location is only accessed with explicit permission. All data is encrypted, and we comply with GDPR and CCPA regulations. You can delete your data at any time through the app settings."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-nalam-green/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about the Nalam app and how it can help you make more sustainable choices.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-nalam-green/10">
                <AccordionTrigger className="text-left font-medium py-5 hover:text-nalam-green">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 pt-6 border-t border-nalam-green/10 text-center">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center justify-center py-2 px-4 rounded-lg bg-nalam-green text-white hover:bg-nalam-green-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Contact Support
              </a>
              <a href="#" className="inline-flex items-center justify-center py-2 px-4 rounded-lg border border-nalam-green text-nalam-green hover:bg-nalam-green/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Community Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
