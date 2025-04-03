"use client";

import { useState } from 'react';

interface UploadState {
  isUploading: boolean;
  progress: number;
  error: string | null;
  result: any | null;
}

interface UseCloudinaryUploadReturn {
  uploadState: UploadState;
  uploadImage: (file: File, folder?: string) => Promise<any>;
  resetUpload: () => void;
}

/**
 * A hook for uploading images to Cloudinary
 */
export default function useCloudinaryUpload(): UseCloudinaryUploadReturn {
  const [uploadState, setUploadState] = useState<UploadState>({
    isUploading: false,
    progress: 0,
    error: null,
    result: null,
  });

  /**
   * Upload an image to Cloudinary
   * @param file The file to upload
   * @param folder Optional folder to upload to
   * @returns The upload result
   */
  const uploadImage = async (file: File, folder?: string): Promise<any> => {
    try {
      setUploadState({
        isUploading: true,
        progress: 0,
        error: null,
        result: null,
      });

      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('file', file);
      
      if (folder) {
        formData.append('folder', folder);
      }

      // Upload to Cloudinary using our API route
      const response = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }

      const result = await response.json();

      setUploadState({
        isUploading: false,
        progress: 100,
        error: null,
        result,
      });

      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      setUploadState({
        isUploading: false,
        progress: 0,
        error: errorMessage,
        result: null,
      });

      throw error;
    }
  };

  /**
   * Reset the upload state
   */
  const resetUpload = () => {
    setUploadState({
      isUploading: false,
      progress: 0,
      error: null,
      result: null,
    });
  };

  return {
    uploadState,
    uploadImage,
    resetUpload,
  };
}
