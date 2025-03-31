"use client";

import { useState } from 'react';
import Image from 'next/image';
import testimonials from '@/data/testimonials.json';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-black">What Our Customers Say</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-light rounded-xl shadow-lg p-8 relative">
            {/* Quote icon */}
            <div className="absolute -top-5 left-10 bg-primary text-white rounded-full p-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.625 1.5c0 1.5-1.125 3-3.25 3s-3.25-1.5-3.25-3 1.125-3 3.25-3 3.25 1.5 3.25 3zm7 0c0 1.5-1.125 3-3.25 3s-3.25-1.5-3.25-3 1.125-3 3.25-3 3.25 1.5 3.25 3z" />
              </svg>
            </div>
            
            {/* Testimonial content */}
            <div className="mb-6">
              <div className="flex mb-4">
                {renderStars(testimonials[activeIndex].rating)}
              </div>
              <p className="text-lg italic mb-6 text-black">"{testimonials[activeIndex].text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 relative overflow-hidden">
                  <Image
                    src={`https://randomuser.me/api/portraits/${activeIndex % 2 === 0 ? 'men' : 'women'}/${activeIndex + 1}.jpg`}
                    alt={testimonials[activeIndex].name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-black">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-black">{testimonials[activeIndex].location}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="bg-white rounded-full p-2 shadow hover:shadow-md transition-shadow"
              >
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="bg-white rounded-full p-2 shadow hover:shadow-md transition-shadow"
              >
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
