// Script to check if images exist in Cloudinary
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with the user's credentials
cloudinary.config({
  cloud_name: 'di4phdven',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// List of image names to check
const imageNames = [
  'pressure-washing-hot-lead-generation-upwork',
  'house-pressure-washing-pressur',
  'Concrete_Cleaning_eztsjm'
];

// Function to check if an image exists
async function checkImageExists(publicId) {
  try {
    const result = await cloudinary.api.resource(publicId);
    console.log(`✅ Image "${publicId}" exists`);
    return true;
  } catch (error) {
    console.log(`❌ Image "${publicId}" does not exist: ${error.message}`);
    return false;
  }
}

// Check all images
async function checkAllImages() {
  console.log('Checking if images exist in Cloudinary...');
  
  for (const imageName of imageNames) {
    await checkImageExists(imageName);
  }
}

// Run the check
checkAllImages().catch(error => {
  console.error('Error checking images:', error);
});
