/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Security headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-analytics.com *.vercel-insights.com va.vercel-scripts.com *.googletagmanager.com *.google-analytics.com *.googleadservices.com *.doubleclick.net; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: blob: https:; media-src 'self' https: res.cloudinary.com; connect-src 'self' *.vercel-analytics.com *.vercel-insights.com res.cloudinary.com *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.google.com *.googleadservices.com *.doubleclick.net; frame-src 'self' *.googletagmanager.com *.doubleclick.net;",
          },
        ],
      },
    ];
  },
  // Enable compression
  compress: true,
  // Reduce bundle size
  swcMinify: true,
  webpack: (config) => {
    // Cloudinary package uses Node.js modules that are not available in the browser
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      http: false,
      https: false,
      zlib: false,
      url: false,
    };
    
    return config;
  },
};

module.exports = nextConfig;
