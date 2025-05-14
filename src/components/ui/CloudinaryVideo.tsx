"use client";

import { getCloudinaryVideoUrl } from '@/lib/cloudinary';

interface CloudinaryVideoProps {
  publicId: string;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  poster?: string;
  style?: React.CSSProperties;
  transformations?: Record<string, any>;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

/**
 * A component for displaying videos from Cloudinary
 */
export default function CloudinaryVideo({
  publicId,
  alt,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  playsInline = true,
  preload = 'auto',
  poster,
  style,
  transformations = {},
  objectFit = 'cover',
}: CloudinaryVideoProps) {
  // Generate the Cloudinary URL or use the provided URL if it's already a full URL
  const videoUrl = publicId.startsWith('http') 
    ? publicId 
    : getCloudinaryVideoUrl(publicId, transformations);

  // Generate poster URL if provided
  const posterUrl = poster 
    ? poster
    : publicId.startsWith('http')
      ? undefined // Don't auto-generate poster for full URLs
      : getCloudinaryVideoUrl(publicId, { ...transformations, so_0: '' }) + '.jpg';

  return (
    <video
      src={videoUrl}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline={playsInline}
      preload={preload}
      poster={posterUrl}
      className={className}
      style={{ objectFit, ...style }}
      aria-label={alt}
    />
  );
}
