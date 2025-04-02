import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing Blog | Novelli Pressure Washing',
  description: 'Expert tips, guides, and insights about pressure washing in Charlotte, NC and surrounding areas. Learn about maintaining your property with professional pressure washing services.',
  keywords: 'pressure washing blog, pressure washing tips, Charlotte pressure washing, pressure washing near me, power washing guide',
};

// Blog post data
const blogPosts = [
  {
    id: 'pressure-washing-tips-charlotte-homes',
    title: 'Top 5 Pressure Washing Tips for Charlotte Homes',
    date: 'April 1, 2025',
    excerpt: 'Learn the best practices for maintaining your Charlotte home with professional pressure washing techniques that work for our local climate and building materials.',
    image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Tips & Tricks',
    author: 'Michael Novelli',
    readTime: '5 min read',
  },
  {
    id: 'best-time-pressure-wash-matthews-nc',
    title: 'When is the Best Time to Pressure Wash Your Home in Matthews, NC?',
    date: 'March 25, 2025',
    excerpt: 'Discover the optimal seasons and weather conditions for pressure washing your property in Matthews, NC to get the best results and longest-lasting clean.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Local Guide',
    author: 'Michael Novelli',
    readTime: '4 min read',
  },
  {
    id: 'commercial-pressure-washing-huntersville',
    title: 'Commercial Pressure Washing Services in Huntersville: What Businesses Need to Know',
    date: 'March 18, 2025',
    excerpt: 'A comprehensive guide for Huntersville business owners on the benefits of regular commercial pressure washing and how it can improve your property value and customer impressions.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Commercial',
    author: 'Michael Novelli',
    readTime: '6 min read',
  },
  {
    id: 'driveway-pressure-washing-concord',
    title: 'How to Restore Your Driveway with Pressure Washing in Concord, NC',
    date: 'March 10, 2025',
    excerpt: 'Learn how professional pressure washing can transform your driveway in Concord, NC, removing years of dirt, oil stains, and mildew to restore its original appearance.',
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Residential',
    author: 'Michael Novelli',
    readTime: '4 min read',
  },
  {
    id: 'soft-washing-vs-pressure-washing-gastonia',
    title: 'Soft Washing vs. Pressure Washing: What Gastonia Homeowners Should Choose',
    date: 'March 3, 2025',
    excerpt: 'Understand the differences between soft washing and pressure washing, and which method is best for different surfaces around your Gastonia home.',
    image: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Education',
    author: 'Michael Novelli',
    readTime: '5 min read',
  },
  {
    id: 'pressure-washing-near-me-indian-trail',
    title: 'Finding Quality Pressure Washing Near Me in Indian Trail: A Local Guide',
    date: 'February 25, 2025',
    excerpt: 'A comprehensive guide for Indian Trail residents on how to find and choose the best local pressure washing services for your specific needs.',
    image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=800&h=600&auto=format&fit=crop',
    category: 'Local Guide',
    author: 'Michael Novelli',
    readTime: '5 min read',
  }
];

const BlogPage = () => {
  return (
    <div className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary font-heading">
            Pressure Washing Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, guides, and insights about pressure washing in Charlotte and surrounding areas.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                    {blogPosts[0].category}
                  </span>
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <Link 
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-3 font-heading">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-secondary hover:text-primary font-semibold transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Need Professional Pressure Washing Services?</h2>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              Looking for "pressure washing near me" in Charlotte, Matthews, Huntersville, or surrounding areas? Contact us today for a free quote!
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
