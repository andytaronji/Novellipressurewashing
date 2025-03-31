"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
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
