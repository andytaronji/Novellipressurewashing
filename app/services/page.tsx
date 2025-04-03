"use client";

import Image from 'next/image';
import Link from 'next/link';
import services from '@/data/services.json';
import Button from '@/components/ui/Button';
import CloudinaryImage from '@/components/ui/CloudinaryImage';

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8">
              Professional pressure washing solutions for residential and commercial properties.
              We use state-of-the-art equipment and eco-friendly cleaning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/2 relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                  {service.image.includes('res.cloudinary.com') ? (
                    // Extract the public ID from the Cloudinary URL
                    <CloudinaryImage
                      publicId={service.image.split('/upload/')[1]}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : service.image.startsWith('http') ? (
                    // Regular image URL
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    // Cloudinary public ID
                    <CloudinaryImage
                      publicId={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      transformations={{ width: 800, height: 600, crop: 'fill' }}
                    />
                  )}
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.fullDescription}</p>
                  
                  <h3 className="text-xl font-semibold mb-3">What We Offer:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 mr-2 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button href={`/services/${service.id}`}>
                      Learn More
                    </Button>
                    <Button href="/contact" variant="outline">
                      Get a Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-light py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our team of professionals is ready to help you restore the beauty of your property.
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" size="lg">
                Contact Us
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Learn About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
