const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// URL of the logo
const logoUrl = 'https://res.cloudinary.com/di4phdven/image/upload/v1747258604/Screenshot_2025-05-14_165924_hrj8hd.png';
const outputPath = path.join(__dirname, 'app', 'favicon.ico');

// Function to download the image
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Main function
async function generateFavicon() {
  try {
    console.log('Downloading logo...');
    const imageBuffer = await downloadImage(logoUrl);

    console.log('Processing image...');
    // Get image metadata
    const metadata = await sharp(imageBuffer).metadata();
    
    // Determine the size for the circular crop (use the smaller dimension)
    const size = Math.min(metadata.width, metadata.height);
    
    // Calculate crop position to center the image
    const left = Math.floor((metadata.width - size) / 2);
    const top = Math.floor((metadata.height - size) / 2);
    
    // Create a circular mask
    const circleBuffer = await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{
        input: Buffer.from(`<svg><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white"/></svg>`),
        blend: 'dest-in'
      }])
      .toBuffer();
    
    // Crop the image to a square and apply the circular mask
    await sharp(imageBuffer)
      .extract({ left, top, width: size, height: size })
      .resize(256, 256) // Standard favicon size
      .composite([{ input: circleBuffer, blend: 'dest-in' }])
      .png()
      .toFile(outputPath.replace('.ico', '.png'));
    
    console.log(`Favicon created successfully at: ${outputPath.replace('.ico', '.png')}`);
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

// Run the script
generateFavicon();
