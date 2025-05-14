import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from '@/data/siteConfig.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing Service Areas in the Greater Charlotte Area | Novelli Pressure Washing',
  description: 'Novelli Pressure Washing provides professional pressure washing services throughout the Greater Charlotte Area including Charlotte, Matthews, Huntersville, Belmont, Concord, Gastonia, Mint Hill, Indian Trail, and Pineville.',
  keywords: 'Greater Charlotte Area pressure washing, Charlotte pressure washing, Matthews pressure washing, Huntersville pressure washing, Belmont pressure washing, Concord pressure washing, Gastonia pressure washing, Mint Hill pressure washing, Indian Trail pressure washing, Pineville pressure washing, local pressure washing services',
};

const ServiceAreasPage = () => {
  const { serviceAreas } = siteConfig.businessInfo;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pressure Washing in the Greater Charlotte Area</h1>
            <p className="text-xl mb-8">
              Novelli Pressure Washing proudly serves the Greater Charlotte Area with top-quality pressure washing services. Find your location below to learn more about our services in your community.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">

          {/* Consolidated Service Areas Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6 font-heading text-center">
                Our Services Throughout the Greater Charlotte Area
              </h2>
              
              <div className="mb-8">
                <p className="text-gray-700 text-lg mb-4">
                  Novelli Pressure Washing provides professional services throughout the Greater Charlotte Area. 
                  We offer the same high-quality services in all locations we serve:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-light p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">Our Professional Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Residential Pressure Washing</li>
                      <li>Commercial Pressure Washing</li>
                      <li>Soft Washing</li>
                      <li>Gutter Cleaning</li>
                      <li>Driveway & Sidewalk Cleaning</li>
                      <li>Deck & Fence Washing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-light p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">Communities We Serve</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-2">
                            <span className="text-white font-bold text-sm">{area.charAt(0)}</span>
                          </span>
                          <span className="text-gray-700">{area}, NC</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 font-heading">Professional Pressure Washing in Your Community</h2>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                You've found the Greater Charlotte Area's trusted pressure washing professionals. Serving Belmont, Charlotte, Matthews, Huntersville, and all surrounding communities. Contact us today for a free quote!
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreasPage;
