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
          {/* Map Section */}
          <div className="mb-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4 font-heading">Our Service Area</h2>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                We proudly serve the Greater Charlotte Area within a 25-mile radius, covering all major communities in the region.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-lg">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center mb-2">
                      <span className="text-primary font-bold text-lg">{area.charAt(0)}</span>
                    </div>
                    <span className="text-white text-center font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-lg">
                Don't see your area? Contact us anyway! We may still be able to serve you.
              </p>
            </div>
          </div>

          {/* Service Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-3 font-heading">
                    {area}, NC
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Professional pressure washing services in {area}, NC. We provide residential and commercial pressure washing, soft washing, and gutter cleaning services.
                  </p>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Our Services in {area}:</h3>
                  <ul className="list-disc list-inside mb-4 text-gray-600">
                    <li>Residential Pressure Washing</li>
                    <li>Commercial Pressure Washing</li>
                    <li>Soft Washing</li>
                    <li>Gutter Cleaning</li>
                    <li>Driveway & Sidewalk Cleaning</li>
                    <li>Deck & Fence Washing</li>
                  </ul>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Get a Quote in {area}
                  </Link>
                </div>
              </div>
            ))}
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
