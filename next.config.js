/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos', 
      'images.unsplash.com', 
      'randomuser.me', 
      'maps.googleapis.com',
      'res.cloudinary.com'
    ],
  },
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
