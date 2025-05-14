import React from 'react';
import Link from 'next/link';
import siteConfig from '@/data/siteConfig.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Novelli Pressure Washing',
  description: 'Learn about how Novelli Pressure Washing collects, uses, and protects your personal information.',
  keywords: 'privacy policy, data protection, personal information, Novelli Pressure Washing, Charlotte pressure washing',
};

const PrivacyPolicyPage = () => {
  const { name, email, phone, address } = siteConfig.businessInfo;
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Introduction</h2>
              <p>
                {name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or contact us.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Personal Information</h3>
              <p>
                When you request a quote, contact us, or use our services, we may collect personal information such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Home or business address</li>
                <li>Service details and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary mt-6 mb-3">Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time and date of your visit</li>
                <li>Referring website</li>
              </ul>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and fulfill your service requests</li>
                <li>Communicate with you about our services, promotions, and events</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against, identify, and prevent fraud and other illegal activity</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>The right to access the personal information we have about you</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p><strong>{name}</strong></p>
                <p>{address}</p>
                <p>Phone: <a href={`tel:${phone}`} className="text-secondary hover:underline">{phone}</a></p>
                <p>Email: <a href={`mailto:${email}`} className="text-secondary hover:underline">{email}</a></p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/" 
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
