/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos', 
      'images.unsplash.com', 
      'randomuser.me', 
      'maps.googleapis.com'
    ],
  },
};

module.exports = nextConfig;
