"use client"

import { useState, useEffect } from 'react';
import GirasolSticker from './girasol-stickers';

interface CampoStickersProps {
           {/* Flores adicionales más pequeñas y dispersas */}
          <div className="absolute inset-0">
            <span className="absolute top-1/4 left-1/6 text-2xl animate-float text-yellow-400">*</span>
            <span className="absolute top-1/2 right-1/6 text-xl animate-float-delayed text-pink-400">*</span>
            <span className="absolute bottom-1/4 left-1/4 text-2xl animate-float text-red-400">*</span>
            <span className="absolute top-3/4 right-1/3 text-lg animate-float text-purple-400">*</span>
          </div>

          {/* Algunos insectos volando */}
          <div className="absolute inset-0">
            <span className="absolute top-1/4 left-2/5 text-2xl animate-float text-blue-400">~</span>
            <span className="absolute top-1/2 right-1/3 text-xl animate-float-delayed text-blue-400">~</span>
            <span className="absolute top-2/3 left-3/5 text-lg animate-float text-yellow-600">•</span>
          </div>?: (id: number) => void;
  clickedFlowers?: number[];
}

const CampoStickers = ({ onFlowerClick, clickedFlowers = [] }: CampoStickersProps) => {
  // Posiciones de los girasoles - MUCHOS MÁS para llenar el campo
  const sunflowerPositions = [
    // Fila muy trasera (horizonte)
    { id: 1, x: 5, y: 33, size: 'sm' as const },
    { id: 2, x: 15, y: 35, size: 'md' as const },
    { id: 3, x: 25, y: 34, size: 'sm' as const },
    { id: 4, x: 35, y: 37, size: 'md' as const },
    { id: 5, x: 45, y: 33, size: 'sm' as const },
    { id: 6, x: 55, y: 36, size: 'md' as const },
    { id: 7, x: 65, y: 34, size: 'sm' as const },
    { id: 8, x: 75, y: 38, size: 'md' as const },
    { id: 9, x: 85, y: 35, size: 'sm' as const },
    { id: 10, x: 95, y: 37, size: 'md' as const },

    // Segunda fila
    { id: 11, x: 8, y: 45, size: 'md' as const },
    { id: 12, x: 20, y: 47, size: 'lg' as const },
    { id: 13, x: 32, y: 44, size: 'md' as const },
    { id: 14, x: 48, y: 46, size: 'lg' as const },
    { id: 15, x: 62, y: 43, size: 'md' as const },
    { id: 16, x: 78, y: 48, size: 'lg' as const },
    { id: 17, x: 92, y: 45, size: 'md' as const },

    // Tercera fila (media)
    { id: 18, x: 12, y: 58, size: 'lg' as const },
    { id: 19, x: 28, y: 60, size: 'xl' as const },
    { id: 20, x: 42, y: 56, size: 'lg' as const },
    { id: 21, x: 58, y: 62, size: 'xl' as const },
    { id: 22, x: 74, y: 57, size: 'lg' as const },
    { id: 23, x: 88, y: 61, size: 'xl' as const },

    // Cuarta fila
    { id: 24, x: 6, y: 72, size: 'xl' as const },
    { id: 25, x: 22, y: 75, size: 'xl' as const },
    { id: 26, x: 38, y: 71, size: 'lg' as const },
    { id: 27, x: 54, y: 77, size: 'xl' as const },
    { id: 28, x: 70, y: 73, size: 'xl' as const },
    { id: 29, x: 86, y: 76, size: 'lg' as const },

    // Fila frontal (más grandes)
    { id: 30, x: 15, y: 88, size: 'xl' as const },
    { id: 31, x: 35, y: 92, size: 'xl' as const },
    { id: 32, x: 55, y: 89, size: 'xl' as const },
    { id: 33, x: 75, y: 94, size: 'xl' as const },

    // Fila MUY frontal (aprovechando el espacio extra)
    { id: 41, x: 25, y: 96, size: 'xl' as const },
    { id: 42, x: 50, y: 98, size: 'xl' as const },
    { id: 43, x: 75, y: 97, size: 'xl' as const },

    // Girasoles adicionales para llenar espacios
    { id: 34, x: 4, y: 65, size: 'md' as const },
    { id: 35, x: 96, y: 68, size: 'md' as const },
    { id: 36, x: 50, y: 40, size: 'lg' as const },
    { id: 37, x: 18, y: 52, size: 'md' as const },
    { id: 38, x: 82, y: 54, size: 'md' as const },
    { id: 39, x: 65, y: 49, size: 'lg' as const },
    { id: 40, x: 33, y: 83, size: 'lg' as const },
  ];

  const handleFlowerClick = (id: number) => {
    onFlowerClick?.(id);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Cielo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-200 to-yellow-100" />
      
      {/* Sol más grande */}
      <div className="absolute top-8 right-8 text-8xl md:text-9xl animate-pulse">☀️</div>
      
      {/* Nubes más grandes */}
      <div className="absolute top-12 left-16 text-5xl md:text-6xl animate-float">☁️</div>
      <div className="absolute top-20 left-1/3 text-6xl md:text-7xl animate-float-delayed">☁️</div>
      <div className="absolute top-16 right-1/4 text-5xl md:text-6xl animate-float">☁️</div>

      {/* Campo base con césped stickers mejorado */}
      <div className="absolute inset-0 top-1/3">
        {/* Césped de fondo más natural */}
        <div className="w-full h-full bg-gradient-to-t from-green-500 via-green-400 to-green-300 relative">
          
          {/* Horizonte más definido */}
          <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-green-300 to-green-400"></div>
          
          {/* Césped distribuido de forma más natural */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Césped frontal (más denso y grande) */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 flex flex-wrap items-end justify-around">
              {Array.from({length: 25}).map((_, i) => (
                <span 
                  key={`grass-front-${i}`}
                  className="text-4xl md:text-5xl opacity-90 animate-sway"
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    transform: `translateY(${Math.random() * 10}px) rotate(${Math.random() * 20 - 10}deg)`
                  }}
                >
                  |
                </span>
              ))}
            </div>

            {/* Césped medio */}
            <div className="absolute top-1/3 left-0 w-full h-1/3 flex flex-wrap justify-around items-center">
              {Array.from({length: 20}).map((_, i) => (
                <span 
                  key={`grass-mid-${i}`}
                  className="text-2xl md:text-3xl opacity-80 animate-sway"
                  style={{ 
                    animationDelay: `${i * 0.15}s`,
                    transform: `rotate(${Math.random() * 15 - 7.5}deg)`
                  }}
                >
                  |
                </span>
              ))}
            </div>

            {/* Césped lejano */}
            <div className="absolute top-0 left-0 w-full h-1/3 flex flex-wrap justify-around items-start pt-4">
              {Array.from({length: 12}).map((_, i) => (
                <span 
                  key={`grass-back-${i}`}
                  className="text-lg opacity-60 animate-sway"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    transform: `rotate(${Math.random() * 10 - 5}deg)`
                  }}
                >
                  |
                </span>
              ))}
            </div>
          </div>

          {/* Flores adicionales más pequeñas y dispersas */}
          <div className="absolute inset-0">
            <span className="absolute top-1/4 left-1/6 text-2xl animate-float">🌼</span>
            <span className="absolute top-1/2 right-1/6 text-xl animate-float-delayed">🌸</span>
            <span className="absolute bottom-1/4 left-1/4 text-2xl animate-float">🌷</span>
            <span className="absolute top-3/4 right-1/3 text-lg animate-float">🌺</span>
          </div>

          {/* Algunos insectos volando */}
          <div className="absolute inset-0">
            <span className="absolute top-1/4 left-2/5 text-2xl animate-float">🦋</span>
            <span className="absolute top-1/2 right-1/3 text-xl animate-float-delayed">🦋</span>
            <span className="absolute top-2/3 left-3/5 text-lg animate-float">�</span>
          </div>
        </div>
      </div>

      {/* Girasoles stickers en el campo */}
      <div className="absolute inset-0">
        {sunflowerPositions.map((pos) => (
          <div
            key={pos.id}
            className="absolute transition-all duration-300"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <GirasolSticker
              size={pos.size}
              onClick={() => handleFlowerClick(pos.id)}
              className={clickedFlowers.includes(pos.id) ? 'animate-bounce' : ''}
            />
          </div>
        ))}
      </div>

      {/* Efectos de chispitas cuando se hace clic */}
      {clickedFlowers.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {clickedFlowers.map((flowerId, index) => (
            <div
              key={`sparkle-${flowerId}-${index}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {/* Chispitas doradas */}
              <div className="flex space-x-2">
                <span className="text-yellow-400 text-2xl sparkle-animation">✨</span>
                <span className="text-yellow-300 text-xl sparkle-animation" style={{ animationDelay: '0.2s' }}>⭐</span>
                <span className="text-yellow-500 text-lg sparkle-animation" style={{ animationDelay: '0.4s' }}>✨</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CampoStickers;