"use client";

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'rounded-md font-medium transition-colors focus:outline-none font-heading';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary hover:bg-secondary text-white hover:shadow-lg hover:scale-105 transform transition-transform',
    secondary: 'bg-secondary hover:bg-primary text-white hover:shadow-lg hover:scale-105 transform transition-transform',
    accent: 'bg-accent hover:bg-accent/90 text-black hover:shadow-lg hover:scale-105 transform transition-transform',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg hover:scale-105 transform transition-transform'
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      className={`${combinedStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
