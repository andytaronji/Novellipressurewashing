# Cloudinary Integration

This project uses Cloudinary for image storage, optimization, and delivery. This document provides an overview of how Cloudinary is integrated and how to use it in the application.

## Environment Variables

The following environment variables are required for Cloudinary integration:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=di4phdven
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

These variables are already set up in the `.env.local` file. 

> **IMPORTANT SECURITY NOTE**: Never commit your actual API key and secret to version control or include them in public documentation. The values above are placeholders. The real values should only be stored in your `.env.local` file, which should be excluded from version control.

## Core Files

The Cloudinary integration consists of the following core files:

1. **`src/lib/cloudinary.ts`**: Configures and exports the Cloudinary instance and helper functions.
2. **`src/components/ui/CloudinaryImage.tsx`**: A reusable component for displaying optimized images from Cloudinary.
3. **`src/hooks/useCloudinaryUpload.ts`**: A React hook for uploading images to Cloudinary from the client side.
4. **`app/api/cloudinary/upload/route.ts`**: An API route for uploading images to Cloudinary from the server side.

## Usage Examples

### Displaying Images

To display an image from Cloudinary, use the `CloudinaryImage` component:

```tsx
import CloudinaryImage from '@/components/ui/CloudinaryImage';

// In your component
<CloudinaryImage
  publicId="examples/sample"
  alt="Sample image"
  width={400}
  height={300}
  className="w-full h-auto"
  // Optional transformations
  transformations={{
    crop: 'fill',
    gravity: 'auto',
  }}
/>
```

### Uploading Images (Client-Side)

To upload an image from the client side, use the `useCloudinaryUpload` hook:

```tsx
import { useRef } from 'react';
import useCloudinaryUpload from '@/hooks/useCloudinaryUpload';

// In your component
const fileInputRef = useRef<HTMLInputElement>(null);
const { uploadState, uploadImage } = useCloudinaryUpload();

const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    // Upload the image to Cloudinary
    // Optionally specify a folder
    const result = await uploadImage(file, 'my-folder');
    
    // The result contains the Cloudinary response, including:
    // - public_id: The public ID of the uploaded image
    // - secure_url: The HTTPS URL of the uploaded image
    console.log(result);
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

// In your JSX
<input
  type="file"
  ref={fileInputRef}
  onChange={handleFileChange}
  accept="image/*"
/>
```

### Uploading Images (Server-Side)

To upload an image from the server side, use the Cloudinary API directly:

```tsx
import cloudinary from '@/lib/cloudinary';

// In your server-side code
const uploadImage = (base64Image: string, folder?: string) => {
  return new Promise((resolve, reject) => {
    const uploadOptions: any = {
      resource_type: 'auto',
    };
    
    if (folder) {
      uploadOptions.folder = folder;
    }
    
    cloudinary.uploader.upload(base64Image, uploadOptions, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
```

### Getting Cloudinary URLs

To get a Cloudinary URL for an image, use the helper functions in `src/lib/cloudinary.ts`:

```tsx
import { getCloudinaryImageUrl, getResponsiveImageUrl } from '@/lib/cloudinary';

// Get a basic Cloudinary URL
const imageUrl = getCloudinaryImageUrl('examples/sample');

// Get a responsive Cloudinary URL
const responsiveUrl = getResponsiveImageUrl('examples/sample', {
  crop: 'fill',
  gravity: 'auto',
});
```

## Example Page

An example page demonstrating Cloudinary integration is available at `/cloudinary-example`. This page shows how to upload and display images using Cloudinary.

## Cloudinary Dashboard

You can manage your Cloudinary resources through the Cloudinary dashboard:

[https://cloudinary.com/console](https://cloudinary.com/console)

## Additional Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Cloudinary React SDK](https://cloudinary.com/documentation/react_integration)
- [Cloudinary Node.js SDK](https://cloudinary.com/documentation/node_integration)
