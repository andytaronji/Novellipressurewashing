"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CloudinaryImage from './CloudinaryImage';
import CloudinaryVideo from './CloudinaryVideo';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
  children?: ReactNode;
  className?: string;
}

const Card = ({
  title,
  description,
  image,
  href,
  children,
  className = ''
}: CardProps) => {
  const cardContent = (
    <>
      {image && (
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
          {image.includes('.mp4') || image.includes('/video/') ? (
            // Video URL
            <CloudinaryVideo
              publicId={image.includes('res.cloudinary.com') ? image : `https://res.cloudinary.com/di4phdven/video/upload/${image}`}
              alt={title}
              className="w-full h-full object-cover"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
            />
          ) : image.includes('res.cloudinary.com') ? (
            // Already a full Cloudinary URL
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : image.startsWith('http') ? (
            // Regular image URL
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // Cloudinary public ID - convert to full URL with version
            <Image
              src={`https://res.cloudinary.com/di4phdven/image/upload/v1743643610/${image}`}
              alt={title}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 font-heading text-black text-center">{title}</h3>
        <p className="text-black mb-4 text-center">{description}</p>
        {children}
      </div>
    </>
  );

  return href ? (
    <Link href={href} className="block">
      <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-accent/50 hover:shadow-lg border-t-2 border-transparent hover:border-accent ${className}`}>
        {cardContent}
      </div>
    </Link>
  ) : (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-accent/50 hover:shadow-lg border-t-2 border-transparent hover:border-accent ${className}`}>
      {cardContent}
    </div>
  );
};

export default Card;
