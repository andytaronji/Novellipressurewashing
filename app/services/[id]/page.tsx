import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import CloudinaryImage from '@/components/ui/CloudinaryImage';
import CloudinaryVideo from '@/components/ui/CloudinaryVideo';
import services from '@/data/services.json';
import siteConfig from '@/data/siteConfig.json';
import type { Metadata } from 'next';

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = services.find(s => s.id === params.id);
  
  if (!service) {
    return {
      title: 'Service Not Found | Novelli Pressure Washing',
      description: 'The requested service page could not be found.',
    };
  }

  const serviceKeyMap: { [key: string]: string } = {
    'residential-pressure-washing': 'residential',
    'commercial-pressure-washing': 'commercial', 
    'soft-washing': 'softWashing',
    'gutter-cleaning': 'gutterCleaning'
  };

  const configKey = serviceKeyMap[params.id];
  const seoData = configKey ? (siteConfig.seo.pages as any)[configKey] : null;

  return {
    title: seoData?.title || `${service.title} | Novelli Pressure Washing`,
    description: seoData?.description || service.shortDescription,
    keywords: siteConfig.seo.keywords.join(", ") + `, ${service.title.toLowerCase()}, ${params.id.replace('-', ' ')}`,
    alternates: {
      canonical: `https://novellipressurewashing.com/services/${params.id}`,
    },
    openGraph: {
      title: seoData?.title || `${service.title} | Novelli Pressure Washing`,
      description: seoData?.description || service.shortDescription,
      url: `https://novellipressurewashing.com/services/${params.id}`,
      siteName: siteConfig.businessInfo.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: service.image.includes('res.cloudinary.com') ? service.image : `https://res.cloudinary.com/di4phdven/image/upload/v1743643610/${service.image}`,
          width: 1200,
          height: 630,
          alt: `${service.title} - Novelli Pressure Washing`,
        },
      ],
    },
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const serviceId = params.id;
  
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
  
  // Generate service-specific JSON-LD structured data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.businessInfo.name,
      "telephone": siteConfig.businessInfo.phone,
      "email": siteConfig.businessInfo.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Charlotte",
        "addressRegion": "NC",
        "addressCountry": "US"
      },
      "areaServed": siteConfig.businessInfo.serviceAreas.map((area: string) => ({
        "@type": "City",
        "name": area + ", NC"
      })),
      "url": "https://novellipressurewashing.com"
    },
    "serviceType": service.title,
    "category": "Pressure Washing",
    "offers": {
      "@type": "Offer",
      "description": `Professional ${service.title.toLowerCase()} services`,
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "image": service.image.includes('res.cloudinary.com') ? service.image : `https://res.cloudinary.com/di4phdven/image/upload/v1743643610/${service.image}`,
    "url": `https://novellipressurewashing.com/services/${serviceId}`
  };

  return (
    <div className="pt-16">
      {/* Service-specific JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      
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
                {service.image.includes('.mp4') || service.image.includes('/video/') ? (
                  // Video URL
                  <CloudinaryVideo
                    publicId={service.image.includes('res.cloudinary.com') ? service.image : `https://res.cloudinary.com/di4phdven/video/upload/${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    controls={true}
                  />
                ) : service.image.includes('res.cloudinary.com') ? (
                  // Already a full Cloudinary URL
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                ) : service.image.startsWith('http') ? (
                  // Regular image URL
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                ) : (
                  // Cloudinary public ID - convert to full URL with version
                  <Image
                    src={`https://res.cloudinary.com/di4phdven/image/upload/v1743643610/${service.image}`}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'contain' }}
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
                
                {/* Before/After Section */}
                {service.beforeAfterImages && service.beforeAfterImages.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6">Before & After</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {service.beforeAfterImages.map((item, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                              {/* Before Image/Video */}
                              {item.before.includes('.mp4') || item.before.includes('/video/') ? (
                                <CloudinaryVideo
                                  publicId={item.before.includes('res.cloudinary.com') ? item.before : `https://res.cloudinary.com/di4phdven/video/upload/${item.before}`}
                                  alt={`Before - ${item.caption}`}
                                  className="w-full h-full object-cover"
                                  autoPlay={true}
                                  loop={true}
                                  muted={true}
                                  controls={true}
                                />
                              ) : (
                                <Image
                                  src={item.before}
                                  alt={`Before - ${item.caption}`}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                />
                              )}
                              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                                Before
                              </div>
                            </div>
                            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                              {/* After Image/Video */}
                              {item.after.includes('.mp4') || item.after.includes('/video/') ? (
                                <CloudinaryVideo
                                  publicId={item.after.includes('res.cloudinary.com') ? item.after : `https://res.cloudinary.com/di4phdven/video/upload/${item.after}`}
                                  alt={`After - ${item.caption}`}
                                  className="w-full h-full object-cover"
                                  autoPlay={true}
                                  loop={true}
                                  muted={true}
                                  controls={true}
                                />
                              ) : (
                                <Image
                                  src={item.after}
                                  alt={`After - ${item.caption}`}
                                  fill
                                  style={{ objectFit: 'cover' }}
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                />
                              )}
                              <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                                After
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-gray-700">{item.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
