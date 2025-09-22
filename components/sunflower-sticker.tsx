"use client"

import { cn } from "@/lib/utils"

interface SunflowerStickerProps {
  isClicked: boolean
  size?: "sm" | "md" | "lg" | "xl"
  rotation?: number
  onClick?: () => void
  className?: string
}

const sizeMap = {
  sm: 60,
  md: 80,
  lg: 100,
  xl: 120
}

export function SunflowerSticker({ 
  isClicked, 
  size = "md", 
  rotation = 0, 
  onClick,
  className 
}: SunflowerStickerProps) {
  const sizeValue = sizeMap[size]
  
  return (
    <div
      className={cn(
        "cursor-pointer transition-all duration-300 hover:scale-110 select-none",
        isClicked && "animate-bounce",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
      onClick={onClick}
    >
      {/* Girasol sticker bonito */}
      <svg width={sizeValue} height={sizeValue} viewBox="0 0 100 100" className="drop-shadow-lg">
        {/* Pétalos externos - amarillo brillante */}
        {[...Array(16)].map((_, i) => (
          <ellipse
            key={`petal-${i}`}
            cx="50"
            cy="50"
            rx="6"
            ry="18"
            fill={isClicked ? "#FFD700" : "#FFAD00"}
            transform={`rotate(${i * 22.5} 50 50)`}
            className="transition-all duration-500"
            style={{
              filter: isClicked ? "brightness(1.3) drop-shadow(0 0 5px #FFD700)" : "brightness(1.1)"
            }}
          />
        ))}
        
        {/* Pétalos internos - amarillo más claro */}
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={`inner-petal-${i}`}
            cx="50"
            cy="50"
            rx="4"
            ry="12"
            fill={isClicked ? "#FFF200" : "#FFD700"}
            transform={`rotate(${i * 30 + 15} 50 50)`}
            className="transition-all duration-500"
          />
        ))}

        {/* Centro marrón */}
        <circle 
          cx="50" 
          cy="50" 
          r="12" 
          fill={isClicked ? "#8B4513" : "#654321"}
          className="transition-all duration-300"
        />
        
        {/* Centro interno más oscuro */}
        <circle 
          cx="50" 
          cy="50" 
          r="8" 
          fill={isClicked ? "#5D2F02" : "#4A2C17"}
          className="transition-all duration-300"
        />

        {/* Patrón de semillas simple */}
        {[...Array(20)].map((_, i) => {
          const angle = (i * 18) * Math.PI / 180
          const radius = 4 + (i % 3)
          const x = 50 + Math.cos(angle) * radius
          const y = 50 + Math.sin(angle) * radius
          
          return (
            <circle 
              key={`seed-${i}`}
              cx={x} 
              cy={y} 
              r="0.8" 
              fill="#2D1810"
              opacity="0.8"
            />
          )
        })}
        
        {/* Brillo cuando está clickeado */}
        {isClicked && (
          <circle 
            cx="50" 
            cy="50" 
            r="15" 
            fill="none"
            stroke="#FFD700"
            strokeWidth="2"
            opacity="0.7"
            className="animate-ping"
          />
        )}
      </svg>
      
      {/* Tallo simple */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 bg-green-500 rounded-b-full animate-sway"
        style={{
          width: "4px",
          height: `${sizeValue * 0.6}px`,
          top: `${sizeValue - 5}px`,
          zIndex: -1,
          animationDuration: "3s",
          animationDelay: `${Math.random() * 2}s`
        }}
      />
      
      {/* Hojitas */}
      <div
        className="absolute bg-green-500 rounded-full animate-leaf-sway"
        style={{
          width: `${sizeValue * 0.15}px`,
          height: `${sizeValue * 0.08}px`,
          left: `${sizeValue * 0.6}px`,
          top: `${sizeValue * 1.2}px`,
          transform: "rotate(-30deg)",
          zIndex: -1,
          animationDuration: "2.5s"
        }}
      />
      <div
        className="absolute bg-green-500 rounded-full animate-leaf-sway"
        style={{
          width: `${sizeValue * 0.12}px`,
          height: `${sizeValue * 0.06}px`,
          left: `${sizeValue * 0.25}px`,
          top: `${sizeValue * 1.4}px`,
          transform: "rotate(30deg)",
          zIndex: -1,
          animationDuration: "2.8s",
          animationDelay: "0.5s"
        }}
      />
    </div>
  )
}