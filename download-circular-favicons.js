const https = require('https');
const fs = require('fs');
const path = require('path');

// Cloudinary URLs for circular favicons
const faviconUrls = {
  'favicon-16.png': 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_16,h_16,r_max/v1753980619/Devin_s_logo_chiqys.jpg',
  'favicon-32.png': 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_32,h_32,r_max/v1753980619/Devin_s_logo_chiqys.jpg',
  'android-chrome-192x192.png': 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_192,h_192,r_max/v1753980619/Devin_s_logo_chiqys.jpg',
  'android-chrome-512x512.png': 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_512,h_512,r_max/v1753980619/Devin_s_logo_chiqys.jpg',
  'apple-touch-icon.png': 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_180,h_180,r_max/v1753980619/Devin_s_logo_chiqys.jpg'
};

// Function to download a file
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join('public', filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all favicon files
async function downloadAllFavicons() {
  console.log('🔄 Downloading circular favicons from Cloudinary...\n');
  
  try {
    // Download all favicons
    for (const [filename, url] of Object.entries(faviconUrls)) {
      await downloadFile(url, filename);
    }
    
    // Copy 32x32 as favicon.png
    fs.copyFileSync('public/favicon-32.png', 'public/favicon.png');
    console.log('✅ Created: favicon.png (copy of 32x32)');
    
    console.log('\n🎉 All circular favicons downloaded successfully!');
    console.log('\nNext steps:');
    console.log('1. Convert favicon-32.png to favicon.ico manually or use online converter');
    console.log('2. Update site.webmanifest and browserconfig.xml if needed');
    
  } catch (error) {
    console.error('❌ Error downloading favicons:', error.message);
  }
}

// Run the download
downloadAllFavicons();
