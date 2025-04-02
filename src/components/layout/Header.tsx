"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteConfig from '@/data/siteConfig.json';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${
        isScrolled 
          ? 'py-2' 
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48">
            <Image 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNDAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTQwIDEwIEM0MCAxMCwgMzAgMjUsIDMwIDM1IEMzMCA0MiwgNDAgNDcsIDUwIDM1IEM1NSAzMCwgNTAgMTUsIDQwIDEwIFoiIGZpbGw9IiMwMDU2YjMiIC8+PHBhdGggZD0iTTU1IDIwIEw2NSAxNSBNNTUgMjUgTDY4IDIyIE01NSAzMCBMNzAgMzAgTTU1IDM1IEw2OCAzOCBNNTUgNDAgTDY1IDQ1IiBzdHJva2U9IiMwMGE4ZTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iODAiIHk9IjMwIiBmb250LWZhbWlseT0iTW9udHNlcnJhdCwgQXJpYWwiIGZvbnQtc2l6ZT0iMjIiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwMDU2YjMiPk5PVkVMTEk8L3RleHQ+PHRleHQgeD0iODAiIHk9IjQ4IiBmb250LWZhbWlseT0iTW9udHNlcnJhdCwgQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMzNDNhNDAiPlBSRVNTVVJFIFdBU0hJTkc8L3RleHQ+PC9zdmc+" 
              alt={siteConfig.businessInfo.name} 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-dark hover:text-accent transition-colors font-heading font-medium border-b-2 border-transparent hover:border-accent"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="text-dark hover:text-accent transition-colors font-heading font-medium border-b-2 border-transparent hover:border-accent"
          >
            Services
          </Link>
          <Link 
            href="/service-areas" 
            className="text-dark hover:text-accent transition-colors font-heading font-medium border-b-2 border-transparent hover:border-accent"
          >
            Service Areas
          </Link>
          <Link 
            href="/blog" 
            className="text-dark hover:text-accent transition-colors font-heading font-medium border-b-2 border-transparent hover:border-accent"
          >
            Blog
          </Link>
          <Link 
            href="/faq" 
            className="text-dark hover:text-accent transition-colors font-heading font-medium border-b-2 border-transparent hover:border-accent"
          >
            FAQ
          </Link>
          <Link 
            href="/about" 
            className="text-dark hover:text-accent transition-colors font-heading font-medium border-b-2 border-transparent hover:border-accent"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition-colors font-heading font-semibold"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-dark hover:text-accent transition-colors py-2 font-heading font-medium border-l-2 border-transparent hover:border-accent pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-dark hover:text-accent transition-colors py-2 font-heading font-medium border-l-2 border-transparent hover:border-accent pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/service-areas" 
              className="text-dark hover:text-accent transition-colors py-2 font-heading font-medium border-l-2 border-transparent hover:border-accent pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link 
              href="/blog" 
              className="text-dark hover:text-accent transition-colors py-2 font-heading font-medium border-l-2 border-transparent hover:border-accent pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/faq" 
              className="text-dark hover:text-accent transition-colors py-2 font-heading font-medium border-l-2 border-transparent hover:border-accent pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/about" 
              className="text-dark hover:text-accent transition-colors py-2 font-heading font-medium border-l-2 border-transparent hover:border-accent pl-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md transition-colors inline-block font-heading font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
