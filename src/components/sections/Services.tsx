"use client";

import { useState } from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import Button from '../ui/Button';
import services from '@/data/services.json';

const Services = () => {
  const [visibleServices, setVisibleServices] = useState(4);
  const hasMoreServices = visibleServices < services.length;
  
  const handleLoadMore = () => {
    setVisibleServices(prev => Math.min(prev + 4, services.length));
  };
  
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-black">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional pressure washing services for both residential and commercial properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, visibleServices).map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.shortDescription}
              image={service.image}
              href={`/services/${service.id}`}
            >
              <ul className="mb-4 space-y-1 text-center">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center justify-center text-sm text-black">
                    <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <span className="text-black hover:text-accent font-medium inline-flex items-center font-heading">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Card>
          ))}
        </div>
        
        {hasMoreServices && (
          <div className="text-center mt-12">
            <Button onClick={handleLoadMore} variant="outline">
              Load More Services
            </Button>
          </div>
        )}
        
        <div className="mt-16 bg-accent rounded-lg p-8 text-center text-black">
          <h3 className="text-2xl font-bold mb-4 font-heading">Not sure which service you need?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team of experts can help you determine the best cleaning solution for your property. Contact us for a free consultation and quote.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
