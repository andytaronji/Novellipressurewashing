/**
 * Helper function to get the Cloudinary URL for an image
 * @param publicId The public ID of the image
 * @param options Optional transformation options
 * @returns The Cloudinary URL
 */
export function getCloudinaryImageUrl(publicId: string, options: Record<string, any> = {}) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'di4phdven';
  
  // Build the transformation string
  let transformations = '';
  if (Object.keys(options).length > 0) {
    const transformationParams = Object.entries(options)
      .map(([key, value]) => `${key}_${value}`)
      .join('/');
    transformations = `${transformationParams}/`;
  }
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;
}

/**
 * Helper function to get the Cloudinary URL with responsive sizing
 * @param publicId The public ID of the image
 * @param options Optional transformation options
 * @returns The Cloudinary URL with responsive sizing
 */
export function getResponsiveImageUrl(publicId: string, options: Record<string, any> = {}) {
  const defaultOptions = {
    width: 'auto',
    crop: 'scale',
    quality: 'auto',
    fetch_format: 'auto',
  };
  
  return getCloudinaryImageUrl(publicId, { ...defaultOptions, ...options });
}

/**
 * Helper function to upload an image to Cloudinary
 * @param file The file to upload
 * @param folder Optional folder to upload to
 * @returns The upload result
 */
export async function uploadImage(file: File, folder?: string) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'di4phdven';
  
  // Create a FormData object to send the file
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ml_default'); // You can create custom upload presets in Cloudinary dashboard
  
  if (folder) {
    formData.append('folder', folder);
  }

  // Upload to Cloudinary using their upload API
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  return response.json();
}
