"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FlowerBouquetProps {
  onFlowerClick: (flowerId: number) => void
  clickedFlowers: number[]
}

const Sunflower = ({ isClicked, size = 100 }: { isClicked: boolean; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
    {/* Pétalos exteriores */}
    {[...Array(12)].map((_, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="50"
        rx="8"
        ry="20"
        fill={isClicked ? "#FFD700" : "#FFC107"}
        transform={`rotate(${i * 30} 50 50)`}
        className={cn("transition-all duration-500", isClicked && "animate-pulse")}
      />
    ))}
    {/* Pétalos interiores */}
    {[...Array(8)].map((_, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="50"
        rx="5"
        ry="12"
        fill={isClicked ? "#FFEB3B" : "#FFD54F"}
        transform={`rotate(${i * 45 + 22.5} 50 50)`}
        className="transition-all duration-500"
      />
    ))}
    {/* Centro */}
    <circle cx="50" cy="50" r="15" fill={isClicked ? "#8B4513" : "#654321"} className="transition-all duration-500" />
    {/* Patrón de semillas */}
    {[...Array(16)].map((_, i) => (
      <circle key={i} cx={40 + (i % 4) * 5} cy={40 + Math.floor(i / 4) * 5} r="1.2" fill="#2D1810" />
    ))}
  </svg>
)

const GrassBlade = ({ delay = 0, height = 40 }: { delay?: number; height?: number }) => (
  <div
    className="absolute bottom-0 bg-gradient-to-t from-green-600 to-green-400 rounded-t-full animate-sway"
    style={{
      width: "3px",
      height: `${height}px`,
      animationDelay: `${delay}s`,
      animationDuration: `${2 + Math.random()}s`,
    }}
  />
)

export function FlowerBouquet({ onFlowerClick, clickedFlowers }: FlowerBouquetProps) {
  const [hoveredFlower, setHoveredFlower] = useState<number | null>(null)

  const sunflowerPositions = [
    { x: 20, y: 40, size: 90, stemHeight: 120 },
    { x: 35, y: 30, size: 110, stemHeight: 140 },
    { x: 50, y: 25, size: 120, stemHeight: 160 },
    { x: 65, y: 30, size: 105, stemHeight: 135 },
    { x: 80, y: 40, size: 95, stemHeight: 125 },
  ]

  const generateGrass = () => {
    const grass = []
    for (let i = 0; i < 50; i++) {
      grass.push(
        <div key={i} className="absolute bottom-0" style={{ left: `${i * 2}%` }}>
          <GrassBlade delay={i * 0.1} height={20 + Math.random() * 30} />
        </div>,
      )
    }
    return grass
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[500px] bg-gradient-to-b from-blue-200 via-blue-100 to-green-200 rounded-2xl overflow-hidden shadow-lg">
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-green-500 to-green-300">
          {generateGrass()}
        </div>

        {sunflowerPositions.map((pos, i) => {
          const isClicked = clickedFlowers.includes(i)
          const isHovered = hoveredFlower === i

          return (
            <div
              key={i}
              className={cn(
                "absolute cursor-pointer transition-all duration-700 transform hover:scale-105 select-none animate-wind-sway",
                isClicked && "z-20",
                !isClicked && "hover:z-10",
                isHovered && "drop-shadow-2xl brightness-110",
              )}
              style={{
                left: `${pos.x}%`,
                bottom: "64px",
                transform: `translateX(-50%) ${isHovered ? "scale(1.1)" : "scale(1)"}`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
              onClick={() => onFlowerClick(i)}
              onMouseEnter={() => setHoveredFlower(i)}
              onMouseLeave={() => setHoveredFlower(null)}
              title="Girasol - Haz clic para que florezca"
            >
              <Sunflower isClicked={isClicked} size={pos.size} />

              {/* Tallo */}
              <div
                className="absolute top-full left-1/2 bg-gradient-to-b from-green-500 to-green-600 transform -translate-x-1/2 rounded-b-sm animate-stem-sway"
                style={{
                  height: `${pos.stemHeight}px`,
                  width: "6px",
                  animationDelay: `${i * 0.2}s`,
                }}
              />

              {/* Hojas en el tallo */}
              <div
                className="absolute left-1/2 bg-green-500 rounded-full animate-leaf-sway"
                style={{
                  top: `${pos.size * 0.6}px`,
                  left: "calc(50% + 8px)",
                  width: "20px",
                  height: "12px",
                  transform: "rotate(30deg)",
                  animationDelay: `${i * 0.15}s`,
                }}
              />
              <div
                className="absolute left-1/2 bg-green-500 rounded-full animate-leaf-sway"
                style={{
                  top: `${pos.size * 0.8}px`,
                  left: "calc(50% - 28px)",
                  width: "18px",
                  height: "10px",
                  transform: "rotate(-25deg)",
                  animationDelay: `${i * 0.2}s`,
                }}
              />

              {/* Efectos de brillo cuando se hace clic */}
              {isClicked && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, sparkleIndex) => (
                    <div
                      key={sparkleIndex}
                      className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
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

      {/* Contador */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-3 bg-yellow-50/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-yellow-200 shadow-lg">
          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-yellow-800">{clickedFlowers.length}</span>
          </div>
          <span className="text-lg font-medium text-yellow-800">de 5 girasoles florecidos</span>
        </div>
      </div>
    </div>
  )
}
