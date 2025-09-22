"use client"

import { useState } from 'react';

interface GirasolStickerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  className?: string;
}

const GirasolSticker = ({ size = 'md', onClick, className = '' }: GirasolStickerProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-5xl md:text-6xl', 
    lg: 'text-7xl md:text-8xl',
    xl: 'text-8xl md:text-9xl'
  };

  const handleClick = () => {
    setIsClicked(true);
    onClick?.();
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        transition-all duration-300 
        hover:scale-125 
        hover:rotate-12 
        active:scale-110
        cursor-pointer
        ${isClicked ? 'animate-bounce scale-125 brightness-125' : ''}
        ${className}
      `}
    >
      🌻
    </button>
  );
};

export default GirasolSticker;