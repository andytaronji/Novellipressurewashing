const fs = require('fs');
const path = require('path');
const https = require('https');

// URL of the logo
const logoUrl = 'https://res.cloudinary.com/di4phdven/image/upload/v1747259383/Novellinator_kdm2vi.webp';
const outputPath = path.join(__dirname, 'public', 'favicon.png');

// Function to download the image
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Image downloaded successfully to: ${outputPath}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(outputPath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
}

// Main function
async function downloadFavicon() {
  try {
    console.log('Downloading logo...');
    await downloadImage(logoUrl, outputPath);
    console.log('Done!');
  } catch (error) {
    console.error('Error downloading favicon:', error);
  }
}

// Run the script
downloadFavicon();
