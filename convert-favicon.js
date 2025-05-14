const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to the existing favicon.png
const pngPath = path.join(__dirname, 'public', 'favicon.png');
// Path for the apple-touch-icon
const appleTouchIconPath = path.join(__dirname, 'public', 'apple-touch-icon.png');
// Path for the android-chrome icon
const androidChromePath = path.join(__dirname, 'public', 'android-chrome-192x192.png');
// Path for the android-chrome large icon
const androidChromeLargePath = path.join(__dirname, 'public', 'android-chrome-512x512.png');

async function convertFavicon() {
  try {
    console.log('Reading existing favicon.png...');
    const imageBuffer = fs.readFileSync(pngPath);
    
    // Create apple-touch-icon.png (180x180)
    console.log('Creating apple-touch-icon.png...');
    await sharp(imageBuffer)
      .resize(180, 180)
      .toFile(appleTouchIconPath);
    
    // Create android-chrome-192x192.png
    console.log('Creating android-chrome-192x192.png...');
    await sharp(imageBuffer)
      .resize(192, 192)
      .toFile(androidChromePath);
    
    // Create android-chrome-512x512.png
    console.log('Creating android-chrome-512x512.png...');
    await sharp(imageBuffer)
      .resize(512, 512)
      .toFile(androidChromeLargePath);
    
    console.log('All favicon files created successfully!');
  } catch (error) {
    console.error('Error converting favicon:', error);
  }
}

// Run the conversion
convertFavicon();
