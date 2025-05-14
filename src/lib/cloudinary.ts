/**
 * Helper function to get the Cloudinary URL for an image or video
 * @param publicId The public ID of the asset
 * @param resourceType The type of resource ('image' or 'video')
 * @param options Optional transformation options
 * @returns The Cloudinary URL
 */
export function getCloudinaryUrl(
  publicId: string, 
  resourceType: 'image' | 'video' = 'image', 
  options: Record<string, any> = {}
) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'di4phdven';
  
  // Build the transformation string
  let transformations = '';
  if (Object.keys(options).length > 0) {
    const transformationParams = Object.entries(options)
      .map(([key, value]) => `${key}_${value}`)
      .join('/');
    transformations = `${transformationParams}/`;
  }
  
  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${transformations}${publicId}`;
}

/**
 * Helper function to get the Cloudinary URL for an image
 * @param publicId The public ID of the image
 * @param options Optional transformation options
 * @returns The Cloudinary URL
 */
export function getCloudinaryImageUrl(publicId: string, options: Record<string, any> = {}) {
  return getCloudinaryUrl(publicId, 'image', options);
}

/**
 * Helper function to get the Cloudinary URL for a video
 * @param publicId The public ID of the video
 * @param options Optional transformation options
 * @returns The Cloudinary URL
 */
export function getCloudinaryVideoUrl(publicId: string, options: Record<string, any> = {}) {
  return getCloudinaryUrl(publicId, 'video', options);
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
 * Helper function to upload an image to Cloudinary via our API route
 * This is for client-side use only
 * @param file The file to upload
 * @param folder Optional folder to upload to
 * @returns The upload result
 */
export async function uploadImage(file: File, folder?: string) {
  // Create a FormData object to send the file to our API route
  const formData = new FormData();
  formData.append('file', file);
  
  if (folder) {
    formData.append('folder', folder);
  }

  // Upload to Cloudinary via our API route
  const response = await fetch('/api/cloudinary/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to upload image');
  }

  return response.json();
}
