"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { SunflowerSticker } from "./sunflower-sticker"

interface SunflowerFieldProps {
  onFlowerClick: (flowerId: number) => void
  clickedFlowers: number[]
}

export function SunflowerField({ onFlowerClick, clickedFlowers }: SunflowerFieldProps) {
  const [hoveredFlower, setHoveredFlower] = useState<number | null>(null)

  // Posiciones organizadas de los girasoles como stickers
  const sunflowerPositions = [
    // Fila frontal - más grandes
    { x: 15, y: 80, size: "xl" as const, rotation: -8 },
    { x: 35, y: 82, size: "xl" as const, rotation: 5 },
    { x: 55, y: 80, size: "xl" as const, rotation: -3 },
    { x: 75, y: 82, size: "lg" as const, rotation: 10 },
    
    // Segunda fila
    { x: 10, y: 65, size: "lg" as const, rotation: -12 },
    { x: 25, y: 67, size: "lg" as const, rotation: 8 },
    { x: 45, y: 65, size: "lg" as const, rotation: -5 },
    { x: 65, y: 67, size: "lg" as const, rotation: 15 },
    { x: 85, y: 65, size: "md" as const, rotation: -10 },
    
    // Tercera fila
    { x: 18, y: 50, size: "md" as const, rotation: -18 },
    { x: 38, y: 52, size: "md" as const, rotation: 12 },
    { x: 58, y: 50, size: "md" as const, rotation: -7 },
    { x: 78, y: 52, size: "md" as const, rotation: 20 },
    
    // Fila trasera - más pequeños
    { x: 12, y: 35, size: "sm" as const, rotation: -25 },
    { x: 28, y: 37, size: "sm" as const, rotation: 18 },
    { x: 48, y: 35, size: "sm" as const, rotation: -12 },
    { x: 68, y: 37, size: "sm" as const, rotation: 25 },
    { x: 88, y: 35, size: "sm" as const, rotation: -15 },
    
    // Algunos girasoles extras dispersos
    { x: 5, y: 72, size: "md" as const, rotation: -30 },
    { x: 95, y: 75, size: "md" as const, rotation: 30 },
    { x: 22, y: 42, size: "sm" as const, rotation: -20 },
    { x: 82, y: 44, size: "sm" as const, rotation: 22 },
  ]

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Campo con fondo hermoso */}
      <div className="relative h-[600px] bg-gradient-to-b from-sky-300 via-sky-200 to-green-300 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-200">
        
        {/* Cielo hermoso con nubes */}
        <div className="absolute top-0 w-full h-2/5 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200">
          
          {/* Nubes bonitas */}
          {[
            { x: 15, y: 10, size: 80 },
            { x: 40, y: 5, size: 100 },
            { x: 70, y: 12, size: 90 },
            { x: 85, y: 8, size: 70 }
          ].map((cloud, i) => (
            <div
              key={i}
              className="absolute opacity-90 animate-float"
              style={{
                left: `${cloud.x}%`,
                top: `${cloud.y}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + i}s`,
              }}
            >
              <svg width={cloud.size} height={cloud.size * 0.6} viewBox="0 0 100 60" className="drop-shadow-sm">
                <circle cx="25" cy="35" r="18" fill="white" opacity="0.9"/>
                <circle cx="50" cy="25" r="22" fill="white" opacity="0.95"/>
                <circle cx="75" cy="35" r="18" fill="white" opacity="0.9"/>
              </svg>
            </div>
          ))}
          
          {/* Sol brillante */}
          <div className="absolute top-8 right-12 w-20 h-20 bg-yellow-300 rounded-full opacity-80 animate-pulse shadow-lg shadow-yellow-300/50" />
          
          {/* Rayos del sol */}
          <div className="absolute top-8 right-12 w-20 h-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 origin-left bg-yellow-200 opacity-60"
                style={{
                  width: '30px',
                  height: '2px',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  animation: `pulse ${2 + i * 0.1}s ease-in-out infinite`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Horizonte */}
        <div className="absolute w-full h-px bg-yellow-300 opacity-60" style={{ top: "40%" }} />
        
        {/* Campo verde hermoso */}
        <div className="absolute bottom-0 w-full h-3/5 bg-gradient-to-b from-green-300 via-green-400 to-green-600">
          
          {/* Césped alto visible por todo el campo */}
          {[...Array(100)].map((_, i) => (
            <div
              key={`grass-${i}`}
              className="absolute bottom-0 bg-green-700 rounded-t-full animate-sway opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                width: '3px',
                height: `${15 + Math.random() * 30}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
          
          {/* Césped base más denso */}
          <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-green-800 to-green-600">
            {[...Array(150)].map((_, i) => (
              <div
                key={`base-grass-${i}`}
                className="absolute bottom-0 bg-green-900 rounded-t-full animate-sway"
                style={{
                  left: `${(i * 0.67) % 100}%`,
                  width: '2px',
                  height: `${8 + Math.random() * 15}px`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2.5 + Math.random() * 1.5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Mariposas bonitas */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`butterfly-${i}`}
              className="absolute animate-float z-20"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${10 + Math.random() * 30}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: "8s",
              }}
            >
              <div className="text-2xl">🦋</div>
            </div>
          ))}
        </div>

        {/* Girasoles stickers */}
        {sunflowerPositions.map((pos, i) => {
          const isClicked = clickedFlowers.includes(i)
          const isHovered = hoveredFlower === i

          return (
            <div
              key={i}
              className={cn(
                "absolute transition-all duration-300",
                isHovered && "z-30 scale-110"
              )}
              style={{
                left: `${pos.x}%`,
                bottom: `${100 - pos.y}%`,
                transform: `translateX(-50%)`,
                zIndex: Math.floor(pos.y / 10) + (isClicked ? 20 : 0),
              }}
              onMouseEnter={() => setHoveredFlower(i)}
              onMouseLeave={() => setHoveredFlower(null)}
            >
              <SunflowerSticker
                size={pos.size}
                isClicked={isClicked}
                rotation={pos.rotation}
                onClick={() => onFlowerClick(i)}
                className={cn(
                  isHovered && "brightness-110 drop-shadow-2xl"
                )}
              />
              
              {/* Efectos extra cuando están clickeados */}
              {isClicked && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, sparkleIndex) => (
                    <div
                      key={sparkleIndex}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"
                      style={{
                        left: `${25 + Math.random() * 50}%`,
                        top: `${25 + Math.random() * 50}%`,
                        animationDelay: `${sparkleIndex * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Contador bonito */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-100 to-orange-100 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-yellow-300 shadow-lg">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-md">
            <span className="text-lg font-bold text-yellow-900">{clickedFlowers.length}</span>
          </div>
          <span className="text-xl font-semibold text-yellow-800">
            de {sunflowerPositions.length} girasoles florecidos
          </span>
          <div className="text-2xl animate-bounce">🌻</div>
        </div>
        
        {/* Barra de progreso */}
        <div className="mt-4 w-72 mx-auto bg-yellow-200 rounded-full h-3 overflow-hidden shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${(clickedFlowers.length / sunflowerPositions.length) * 100}%` 
            }}
          />
        </div>
        
        <p className="text-lg text-yellow-700 mt-3 font-medium">
          {clickedFlowers.length === 0 && "¡Haz clic en los girasoles para verlos brillar!"}
          {clickedFlowers.length > 0 && clickedFlowers.length < sunflowerPositions.length && 
            `¡Excelente! Sigue haciendo brillar más girasoles ✨`}
          {clickedFlowers.length === sunflowerPositions.length && 
            "🎉 ¡Increíble! Has hecho brillar todo el campo de girasoles 🎉"}
        </p>
      </div>
    </div>
  )
}