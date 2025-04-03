"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import CloudinaryImage from '@/components/ui/CloudinaryImage';
import services from '@/data/services.json';
import siteConfig from '@/data/siteConfig.json';

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id as string;
  
  // Find the service with the matching ID
  const service = services.find(s => s.id === serviceId);
  
  // If service not found, show error message
  if (!service) {
    return (
      <div className="pt-16 min-h-screen">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you are looking for does not exist.</p>
          <Button href="/services">View All Services</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl mb-8">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg mb-8">
                {service.image.includes('res.cloudinary.com') ? (
                  // Already a full Cloudinary URL
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                ) : service.image.startsWith('http') ? (
                  // Regular image URL
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                ) : (
                  // Cloudinary public ID - convert to full URL with version
                  <Image
                    src={`https://res.cloudinary.com/di4phdven/image/upload/v1743643610/${service.image}`}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                )}
              </div>
              
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-6">About This Service</h2>
                <p className="text-lg text-gray-700 mb-6">{service.fullDescription}</p>
                
                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
                <p className="text-gray-700 mb-6">
                  Interested in our {service.title.toLowerCase()} service? Contact us today for a free, no-obligation quote.
                </p>
                
                <Button href="/contact" className="w-full mb-4">
                  Get a Free Quote
                </Button>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-bold mb-2">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{siteConfig.businessInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{siteConfig.businessInfo.email}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-bold mb-4">Other Services</h4>
                  <ul className="space-y-2">
                    {services
                      .filter(s => s.id !== serviceId)
                      .map(s => (
                        <li key={s.id}>
                          <Link 
                            href={`/services/${s.id}`}
                            className="flex items-center text-primary hover:text-secondary transition-colors"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {s.title}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
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
              <Button href="/services" variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
