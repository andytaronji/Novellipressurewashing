import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Get the folder from the form data (optional)
    const folder = formData.get('folder') as string | undefined;
    
    // Get Cloudinary configuration from environment variables
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    
    if (!cloudName || !uploadPreset) {
      return NextResponse.json(
        { error: 'Cloudinary configuration is missing' },
        { status: 500 }
      );
    }
    
    // Create a new FormData to send to Cloudinary
    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append('file', file);
    cloudinaryFormData.append('upload_preset', uploadPreset);
    
    if (folder) {
      cloudinaryFormData.append('folder', folder);
    }

    // Upload directly to Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: cloudinaryFormData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Cloudinary API error:', errorData);
      return NextResponse.json(
        { error: errorData.error?.message || 'Failed to upload to Cloudinary' },
        { status: response.status }
      );
    }

    const result = await response.json();

    // Return the Cloudinary response
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
