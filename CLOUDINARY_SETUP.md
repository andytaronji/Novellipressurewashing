# Cloudinary Setup Guide

This document provides instructions for setting up and using Cloudinary in this project.

## Environment Variables

Add the following environment variables to your `.env.local` file:

```
# Cloudinary configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=di4phdven
CLOUDINARY_API_KEY=665261946922738
CLOUDINARY_API_SECRET=ckL7kctCjN5858_CmCVDBrv55Jw
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=novelli_uploads
```

## Creating an Upload Preset

1. Log in to your Cloudinary Dashboard at https://cloudinary.com/console
2. Navigate to Settings > Upload
3. Scroll down to the "Upload presets" section
4. Click "Add upload preset"
5. Configure the preset:
   - Name: `novelli_uploads` (or match the name in your environment variables)
   - Signing Mode: Choose "Unsigned" (for client-side uploads)
   - Folder: Optionally specify a default folder
   - Allowed Formats: Restrict to image formats if needed
   - Set any other options as needed
6. Click "Save"

## Using Cloudinary in the Project

### Displaying Images

Use the `CloudinaryImage` component to display images:

```jsx
import CloudinaryImage from '@/components/ui/CloudinaryImage';

// Basic usage
<CloudinaryImage
  publicId="example_image_id"
  alt="Description of the image"
  width={800}
  height={600}
/>

// With transformations
<CloudinaryImage
  publicId="example_image_id"
  alt="Description of the image"
  width={800}
  height={600}
  transformations={{ 
    quality: 90, 
    dpr: '2.0'
  }}
/>

// Using fill mode (for responsive layouts)
<div className="relative h-48">
  <CloudinaryImage
    publicId="example_image_id"
    alt="Description of the image"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
```

### Uploading Images

Use the `useCloudinaryUpload` hook to upload images:

```jsx
import { useState } from 'react';
import useCloudinaryUpload from '@/hooks/useCloudinaryUpload';

function ImageUploader() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const { uploadState, uploadImage } = useCloudinaryUpload();

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // Upload the image to Cloudinary
      const result = await uploadImage(file, 'optional_folder_name');
      
      // Store the uploaded image public ID
      setUploadedImage(result.public_id);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      
      {uploadState.isUploading && (
        <div>Uploading: {uploadState.progress}%</div>
      )}
      
      {uploadedImage && (
        <div>
          <p>Uploaded Image:</p>
          <CloudinaryImage
            publicId={uploadedImage}
            alt="Uploaded image"
            width={400}
            height={300}
          />
        </div>
      )}
    </div>
  );
}
```

## Troubleshooting

If you encounter issues with Cloudinary uploads:

1. Check that your upload preset is configured correctly in the Cloudinary dashboard
2. Verify that all environment variables are set correctly
3. Ensure the upload preset is set to "unsigned" for client-side uploads
4. Check browser console for any error messages
5. Verify network requests in the browser's developer tools

For more information, refer to the [Cloudinary documentation](https://cloudinary.com/documentation).
