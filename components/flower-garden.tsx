"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FlowerGardenProps {
  onFlowerClick: (flowerId: number) => void
  clickedFlowers: number[]
}

const yellowFlowerTypes = [
  { emoji: "🌻", name: "Girasol", size: "text-6xl" },
  { emoji: "🌼", name: "Margarita Amarilla", size: "text-5xl" },
  { emoji: "🌕", name: "Narciso", size: "text-4xl" }, // Usando luna llena como narciso
  { emoji: "🟡", name: "Botón de Oro", size: "text-3xl" },
  { emoji: "⭐", name: "Estrella Amarilla", size: "text-4xl" },
  { emoji: "🌟", name: "Flor Brillante", size: "text-5xl" },
]

export function FlowerGarden({ onFlowerClick, clickedFlowers }: FlowerGardenProps) {
  const [hoveredFlower, setHoveredFlower] = useState<number | null>(null)

  const generateFlowers = () => {
    const flowers = []
    for (let i = 0; i < 24; i++) {
      const flowerType = yellowFlowerTypes[Math.floor(Math.random() * yellowFlowerTypes.length)]
      const isClicked = clickedFlowers.includes(i)
      const isHovered = hoveredFlower === i

      flowers.push(
        <div
          key={i}
          className={cn(
            "cursor-pointer transition-all duration-500 transform hover:scale-110 select-none relative",
            isClicked && "bloom-animation",
            !isClicked && "float-animation sway-animation",
            isHovered && "z-10 drop-shadow-2xl",
          )}
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
          onClick={() => onFlowerClick(i)}
          onMouseEnter={() => setHoveredFlower(i)}
          onMouseLeave={() => setHoveredFlower(null)}
          title={`${flowerType.name} - Haz clic para que florezca`}
        >
          <span className={cn(flowerType.size, isClicked && "animate-pulse filter brightness-125")}>
            {flowerType.emoji}
          </span>

          {isClicked && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, sparkleIndex) => (
                <div
                  key={sparkleIndex}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full sparkle-animation shadow-lg shadow-yellow-400/50"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${sparkleIndex * 0.15}s`,
                  }}
                />
              ))}
              {/* Círculo de luz amarilla */}
              <div className="absolute inset-0 rounded-full bg-yellow-300/20 animate-ping" />
            </div>
          )}

          {isHovered && !isClicked && <div className="absolute inset-0 rounded-full bg-yellow-200/30 animate-pulse" />}
        </div>,
      )
    }
    return flowers
  }

  return (
    <div className="relative">
      {/* Garden Grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-8 place-items-center max-w-6xl mx-auto">
        {generateFlowers()}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-50/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-yellow-200 shadow-lg">
          <span className="text-2xl">🌻</span>
          <span className="text-lg font-medium text-yellow-800">
            {clickedFlowers.length} de 24 flores amarillas florecidas
          </span>
        </div>
      </div>
    </div>
  )
}
