import Image from 'next/image';
import { getResponsiveImageUrl } from '@/lib/cloudinary';

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
  // Generate the Cloudinary URL with responsive sizing
  const imageUrl = getResponsiveImageUrl(publicId, transformations);

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
