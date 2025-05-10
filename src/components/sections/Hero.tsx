"use client";

import Image from 'next/image';
import Button from '../ui/Button';
import CloudinaryImage from '../ui/CloudinaryImage';
import siteConfig from '@/data/siteConfig.json';
import { getResponsiveImageUrl } from '@/lib/cloudinary';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h20v20H0z" fill="%23ffffff" fill-opacity="0.1"/%3E%3Cpath d="M0 10h20M10 0v20" stroke="%23ffffff" stroke-opacity="0.2" stroke-width="0.5"/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
              Trusted Pressure Washing Professionals Serving the Greater Charlotte Area
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Restore the beauty of your property with our expert pressure washing services. We proudly serve the Greater Charlotte Area with a 25-mile service radius covering Charlotte, Matthews, Huntersville, Belmont, and all surrounding communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outline" size="lg" className="bg-white bg-opacity-20 hover:bg-opacity-30 border-white text-white hover:text-white hover:bg-transparent">
                Our Services
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/di4phdven/image/upload/v1743643610/home-power-washing-belmont-nc-1_rekw2r"
                alt="Pressure washing service in action"
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white text-dark rounded-lg shadow-lg p-4 flex items-center">
              <div className="bg-success rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
              <p className="font-bold font-heading">100% Satisfaction</p>
              <p className="text-sm">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
