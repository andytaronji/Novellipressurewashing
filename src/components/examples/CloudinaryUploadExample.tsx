import { useState, useRef } from 'react';
import useCloudinaryUpload from '@/hooks/useCloudinaryUpload';
import CloudinaryImage from '@/components/ui/CloudinaryImage';
import Button from '@/components/ui/Button';

export default function CloudinaryUploadExample() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { uploadState, uploadImage } = useCloudinaryUpload();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      // Upload the image to Cloudinary
      const result = await uploadImage(file, 'examples');
      
      // Set the uploaded image public ID
      setUploadedImage(result.public_id);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleButtonClick = () => {
    // Trigger the file input click
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cloudinary Upload Example</h2>
      
      <div className="mb-6">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        
        <Button onClick={handleButtonClick} disabled={uploadState.isUploading}>
          {uploadState.isUploading ? 'Uploading...' : 'Select Image to Upload'}
        </Button>
        
        {uploadState.error && (
          <p className="mt-2 text-red-500">{uploadState.error}</p>
        )}
      </div>
      
      {uploadState.isUploading && (
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${uploadState.progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Uploading: {uploadState.progress}%
          </p>
        </div>
      )}
      
      {uploadedImage && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Uploaded Image:</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <CloudinaryImage
              publicId={uploadedImage}
              alt="Uploaded image"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Public ID: {uploadedImage}
          </p>
        </div>
      )}
    </div>
  );
}
