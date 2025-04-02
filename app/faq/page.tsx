import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import siteConfig from '@/data/siteConfig.json';

export const metadata: Metadata = {
  title: 'Pressure Washing FAQs | Novelli Pressure Washing',
  description: 'Find answers to frequently asked questions about pressure washing services near you in Charlotte, NC and surrounding areas. Learn about our process, pricing, and more.',
  keywords: 'pressure washing FAQ, pressure washing questions, pressure washing near me, Charlotte pressure washing, local pressure washing services',
};

// FAQ data
const faqItems = [
  {
    question: "What areas do you serve for pressure washing?",
    answer: `We provide pressure washing services throughout the Charlotte metropolitan area, including ${siteConfig.businessInfo.serviceAreas.join(', ')}, and surrounding communities. If you're searching for "pressure washing near me" in any of these areas, we've got you covered!`
  },
  {
    question: "How much does pressure washing cost?",
    answer: "Pressure washing costs vary depending on the size of the area, the type of surface, the level of dirt/grime, and the specific service needed. We provide free, detailed quotes for all our services. Generally, residential pressure washing services range from $150-$500, while commercial services may cost more depending on the scope of work."
  },
  {
    question: "What's the difference between pressure washing and soft washing?",
    answer: "Pressure washing uses high-pressure water to remove dirt, grime, and stains from hard surfaces like concrete, brick, and some types of siding. Soft washing uses lower pressure and specialized cleaning solutions to safely clean more delicate surfaces like roofs, vinyl siding, and stucco. We offer both services and will recommend the appropriate method for your specific surfaces."
  },
  {
    question: "How often should I have my property pressure washed?",
    answer: "For homes in the Charlotte area, we typically recommend pressure washing once a year to maintain your property's appearance and prevent damage from mold, mildew, and accumulated grime. However, factors like tree coverage, proximity to busy roads, and local climate conditions may necessitate more frequent cleaning for some properties."
  },
  {
    question: "Is pressure washing safe for all surfaces?",
    answer: "No, high-pressure washing isn't suitable for all surfaces. Delicate surfaces like roof shingles, some types of siding, and older masonry may be damaged by high pressure. That's why we offer soft washing services for these surfaces. Our technicians are trained to assess your property and use the appropriate cleaning method for each surface."
  },
  {
    question: "Do you use environmentally friendly cleaning solutions?",
    answer: "Yes, we use eco-friendly, biodegradable cleaning solutions that effectively remove dirt, mold, and mildew without harming your landscaping, pets, or the environment. Our cleaning agents are specifically formulated to be tough on grime but gentle on your property and the ecosystem."
  },
  {
    question: "How long does pressure washing take?",
    answer: "The time required for pressure washing depends on the size and condition of the area being cleaned. A typical residential driveway might take 1-2 hours, while a complete house exterior could take 3-5 hours. We'll provide you with a time estimate when we give you a quote."
  },
  {
    question: "Do I need to be home during the pressure washing service?",
    answer: "You don't necessarily need to be home during the service, as long as we have access to the areas that need cleaning and water sources. However, we do recommend being present for the initial consultation and at the end of the service to inspect the results."
  },
  {
    question: "Can pressure washing remove oil stains from my driveway?",
    answer: "Yes, pressure washing combined with appropriate cleaning agents can remove most oil stains from concrete driveways. For stubborn or older oil stains, we may use specialized degreasers and techniques to achieve the best results."
  },
  {
    question: "Will pressure washing damage my plants or landscaping?",
    answer: "We take precautions to protect your landscaping during the pressure washing process. This includes rinsing plants before and after applying any cleaning solutions, using plant-friendly detergents, and adjusting our techniques to minimize overspray. Our goal is to clean your property without harming your valuable landscaping."
  },
  {
    question: "How do I prepare for a pressure washing service?",
    answer: "Before we arrive, please remove any obstacles like patio furniture, potted plants, toys, and vehicles from the areas to be cleaned. Close all windows and doors to prevent water intrusion, and turn off any exterior electrical outlets in the work area. If you have any special concerns or areas that need attention, please let us know before we begin."
  },
  {
    question: "Do you offer any guarantees on your pressure washing services?",
    answer: "Yes, we stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with the results, we'll return and address any areas of concern at no additional cost. Our goal is to ensure every customer is delighted with our service."
  },
  {
    question: "How soon can you schedule my pressure washing service?",
    answer: "We typically can schedule pressure washing services within 1-2 weeks, though this may vary depending on the season and our current workload. For urgent needs, we do our best to accommodate rush requests when possible."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, checks, and all major credit cards. For commercial clients, we can also arrange invoicing with approved credit. Payment is typically due upon completion of the service."
  },
  {
    question: "Can pressure washing increase my property value?",
    answer: "Yes, regular pressure washing can significantly enhance your property's curb appeal and help maintain its value. A clean exterior makes a strong first impression on potential buyers and can help your property stand out in the real estate market. It's one of the most cost-effective ways to improve your home's appearance."
  },
  {
    question: "How can I find the best pressure washing service near me in Charlotte?",
    answer: "When looking for 'pressure washing near me' in Charlotte, consider factors like experience, reviews, insurance coverage, equipment quality, and guarantees. Look for a company that specializes in your specific needs (residential or commercial) and has experience in your local area. We're proud to be one of Charlotte's top-rated pressure washing companies, serving the community with professional, reliable service."
  }
];

const FAQPage = () => {
  return (
    <div className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our pressure washing services in Charlotte and surrounding areas.
          </p>
        </div>

        {/* Search for FAQ - This would need JavaScript implementation for actual functionality */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for questions..."
              className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                    <span className="text-lg font-bold text-primary font-heading">{item.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-700">
                    <p>{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary font-heading">Still Have Questions?</h2>
            <p className="text-lg mb-6 text-gray-600">
              If you couldn't find the answer to your question, please feel free to contact us directly. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
              <a 
                href={`tel:${siteConfig.businessInfo.phone}`} 
                className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Call {siteConfig.businessInfo.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Local Service Areas */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Looking for Pressure Washing Near Me?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              We provide professional pressure washing services throughout Charlotte and surrounding areas including:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {siteConfig.businessInfo.serviceAreas.map((area, index) => (
                <span key={index} className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-white">
                  {area}, NC
                </span>
              ))}
            </div>
            <Link 
              href="/service-areas" 
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              View Our Service Areas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
