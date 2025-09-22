"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import CampoStickers from "@/components/campo-stickers-fixed"
import { FlowerMessage } from "@/components/flower-message"

export default function FloresAmarillasPage() {
  const [showMessage, setShowMessage] = useState(false)
  const [clickedFlowers, setClickedFlowers] = useState<number[]>([])

  const handleFlowerClick = (flowerId: number) => {
    if (!clickedFlowers.includes(flowerId)) {
      setClickedFlowers((prev) => [...prev, flowerId])
    }
  }

  const handleShowMessage = () => {
    setShowMessage(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-yellow-100 to-green-200 overflow-hidden">
      {/* Partículas flotantes en el fondo */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-50 sparkle-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
        {/* Pétalos flotantes */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute text-2xl opacity-20 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          >
            🌻
          </div>
        ))}
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent mb-4 text-balance drop-shadow-lg">
            🌻 Campo de Girasoles Mágico 🌻
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-700 mb-8 text-pretty font-semibold">
            Un jardín lleno de luz y alegría ☀️✨
          </p>
          
          {/* Mensaje principal con la moraleja */}
          <div className="max-w-4xl mx-auto mb-8 bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6">
              🌻 El Campo de los Girasoles 🌻
            </h2>
            <div className="text-lg md:text-xl text-slate-700 space-y-4 text-pretty leading-relaxed">
              <p>
                <strong>Elegí un campo de girasoles porque simboliza lo que enseña esta moraleja:</strong>
              </p>
              <p className="italic text-yellow-800 font-medium text-xl md:text-2xl">
                "Quien arranca la flor solo la disfruta un instante,<br/>
                pero quien la siembra y la riega puede verla florecer siempre."
              </p>
              <p>
                Así también es en la vida: <strong>lo valioso se cultiva con paciencia, dedicación y cuidado.</strong>
              </p>
              <p className="text-yellow-700 font-semibold">
                Este campo de girasoles es un regalo que no se marchita,<br/>
                para recordarte que lo bonito de verdad se hace eterno cuando se cuida.
              </p>
              <div className="mt-6 pt-4 border-t border-yellow-200">
                <p className="italic text-yellow-800 font-medium text-lg">
                  "Quien arranca la flor la disfruta un instante;<br/>
                  quien la siembra y la riega, la disfruta por siempre.<br/>
                  Lo valioso nace de la paciencia y el cuidado."
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto text-pretty">
            Donde cada girasol guarda una sonrisa y cada clic despierta la magia
          </p>
        </div>

        {/* Campo de stickers en un cuadro EXTRA grande */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-yellow-200 shadow-2xl">
            <div className="relative h-[700px] md:h-[800px] overflow-hidden rounded-2xl">
              <CampoStickers onFlowerClick={handleFlowerClick} clickedFlowers={clickedFlowers} />
            </div>
            <p className="text-center mt-4 text-yellow-700 font-semibold">
              Haz clic en los girasoles stickers para verlos brillar ✨
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button
            onClick={handleShowMessage}
            size="lg"
            className="text-lg px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/30 rounded-xl"
          >
            ✨ Ver Mensaje Especial ✨
          </Button>

          <Button
            onClick={() => {
              setClickedFlowers([])
              setShowMessage(false)
            }}
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold transition-all duration-300 shadow-lg rounded-xl"
          >
            🔄 Nuevo Campo
          </Button>
        </div>

        {/* Message Card */}
        {showMessage && <FlowerMessage clickedFlowersCount={clickedFlowers.length} clickedFlowers={clickedFlowers} />}

        <footer className="text-center mt-16">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-yellow-200 shadow-lg">
            <p className="text-xl font-medium text-yellow-700 mb-2">
              🌻 "Los girasoles siempre buscan la luz" 🌻
            </p>
            <p className="text-base text-slate-600 mb-4 italic">
              "Que este campo de girasoles te recuerde que siempre hay razones<br/>
              para sonreír y buscar el lado brillante de la vida."
            </p>
            <p className="text-sm text-yellow-600 font-semibold">
              ✨ Hecho con cariño para alegrar tu día ✨
            </p>
            <div className="flex justify-center gap-2 text-2xl mt-3">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌻</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>☀️</span>
              <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🌻</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
