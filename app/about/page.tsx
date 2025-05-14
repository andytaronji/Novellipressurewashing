"use client";

import Image from 'next/image';
import Button from '@/components/ui/Button';
import CloudinaryImage from '@/components/ui/CloudinaryImage';
import siteConfig from '@/data/siteConfig.json';

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8">
              Learn about our company, our mission, and our commitment to excellence in pressure washing services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2019, {siteConfig.businessInfo.name} has been providing top-quality pressure washing services to {siteConfig.businessInfo.serviceAreas.join(', ')} and surrounding areas.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as a small family business has grown into one of the most trusted names in exterior cleaning services in the region. Our commitment to quality, attention to detail, and customer satisfaction has been the foundation of our success.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We take pride in transforming dirty, worn surfaces into clean, beautiful spaces that enhance the value and appearance of your property. Our team of professionals is trained to handle a wide range of cleaning challenges, using the latest equipment and techniques.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/di4phdven/image/upload/v1747262518/IMG_4031_sqpgzc.jpg"
                alt="Our professional team"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These core principles guide everything we do and help us deliver exceptional service to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-700">
                We never compromise on quality. From the equipment we use to the cleaning solutions we apply, everything is selected to deliver the best possible results for your property.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-700">
                When we make a commitment, we keep it. Our customers can count on us to show up on time, complete the work as promised, and stand behind our results with a satisfaction guarantee.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We continuously invest in the latest pressure washing technology and techniques to ensure we're providing the most effective and efficient cleaning services possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a systematic approach to ensure consistent, high-quality results for every project.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p className="text-gray-700">
                      We start by understanding your specific needs and concerns. Our team will assess your property and provide a detailed quote with no hidden fees.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                  <div className="flex-1 md:pl-12 pt-8 md:pt-0"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0 md:order-1 order-2"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                  <div className="flex-1 md:pl-12 pt-8 md:pt-0 md:order-2 order-1">
                    <h3 className="text-xl font-bold mb-2">Preparation</h3>
                    <p className="text-gray-700">
                      Before we begin, we'll prepare the area by removing obstacles, protecting delicate plants and fixtures, and ensuring everything is ready for cleaning.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0">
                    <h3 className="text-xl font-bold mb-2">Cleaning Process</h3>
                    <p className="text-gray-700">
                      Using our professional-grade equipment and eco-friendly cleaning solutions, we'll carefully clean your surfaces to remove dirt, grime, mold, and other contaminants.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                  <div className="flex-1 md:pl-12 pt-8 md:pt-0"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-12 pb-8 md:pb-0 md:order-1 order-2"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                  <div className="flex-1 md:pl-12 pt-8 md:pt-0 md:order-2 order-1">
                    <h3 className="text-xl font-bold mb-2">Final Inspection</h3>
                    <p className="text-gray-700">
                      After cleaning, we'll conduct a thorough inspection with you to ensure everything meets our high standards and your expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your free consultation and see why we're the preferred choice for pressure washing services.
          </p>
          <Button 
            href="/contact" 
            size="lg"
            className="bg-white !text-black hover:bg-light border-4 border-white px-8 py-4 text-xl font-bold shadow-xl"
          >
            Get a Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
