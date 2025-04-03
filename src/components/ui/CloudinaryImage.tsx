import Image from 'next/image';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  transformations?: Record<string, any>;
  fill?: boolean;
  style?: React.CSSProperties;
}

/**
 * A component for displaying optimized images from Cloudinary
 */
export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  className = '',
  priority = false,
  transformations = {},
  fill = false,
  style,
}: CloudinaryImageProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'di4phdven';
  
  // Build the transformation string
  let transformationStr = '';
  if (Object.keys(transformations).length > 0) {
    const transformationParams = Object.entries(transformations)
      .map(([key, value]) => `${key}_${value}`)
      .join('/');
    transformationStr = `${transformationParams}/`;
  }
  
  // Generate the Cloudinary URL with version number
  const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v1743643610/${transformationStr}${publicId}`;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      fill={fill}
      style={style}
    />
  );
}
