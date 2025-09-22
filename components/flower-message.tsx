"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FlowerMessageProps {
  clickedFlowersCount: number
  clickedFlowers: number[]
}

export function FlowerMessage({ clickedFlowersCount, clickedFlowers }: FlowerMessageProps) {
  // Generar un mensaje único basado en las flores específicas clickeadas
  const getUniqueMessage = () => {
    const messages = [
      {
        title: "🌻 Primera flor dorada �",
        message: "Has despertado la primera flor de este campo mágico. Su luz dorada simboliza el comienzo de algo hermoso y eterno.",
        emoji: "🌻"
      },
      {
        title: "✨ Dos rayos de sol ✨", 
        message: "Dos girasoles brillan ahora con tu toque. Como dos corazones que se encuentran, crean una melodía de luz y alegría.",
        emoji: "☀️"
      },
      {
        title: "🌟 Triángulo de felicidad �",
        message: "Tres flores forman un triángulo perfecto de felicidad. En este campo, cada toque tuyo crea geometría del amor.",
        emoji: "🔺"
      },
      {
        title: "🎭 Cuatro estaciones del amor 🎭",
        message: "Como las cuatro estaciones, estas flores representan los momentos que compartimos: primavera de esperanza, verano de pasión, otoño de gratitud, invierno de compañía.",
        emoji: "🗓️"
      },
      {
        title: "⭐ Constelación personal ⭐",
        message: "Cinco flores brillantes forman tu constelación personal en este cielo verde. Cada una guarda un deseo especial para ti.",
        emoji: "🌠"
      },
      {
        title: "🎨 Paleta de emociones �",
        message: "Seis girasoles crean una paleta completa de emociones doradas: alegría, esperanza, cariño, admiración, gratitud y amor infinito.",
        emoji: "🎨"
      },
      {
        title: "🌈 Arco iris de promesas 🌈",
        message: "Siete flores como los colores del arco iris, cada una guarda una promesa: estar siempre ahí, cuidarte, hacerte sonreír, apoyarte, valorarte, respetarte y amarte.",
        emoji: "�"
      },
      {
        title: "♾️ Infinito en flores ♾️",
        message: "Ocho flores forman el símbolo del infinito acostado. Así de eterno es lo que representas en este campo de girasoles del corazón.",
        emoji: "♾️"
      },
      {
        title: "🏰 Reino dorado 🏰",
        message: "Nueve flores han creado un reino dorado donde tú eres la persona más especial. Cada girasol es un súbdito que te rinde honor y cariño.",
        emoji: "👑"
      },
      {
        title: "✨ Decena perfecta ✨",
        message: "Diez es el número de la perfección, y tú has alcanzado la perfección en este campo. Cada flor cantará por siempre tu nombre.",
        emoji: "🔟"
      },
      {
        title: "🎼 Sinfonía completa 🎼",
        message: "¡Has creado una sinfonía completa de girasoles! Cada flor es una nota musical que juntas forman la melodía más hermosa del universo.",
        emoji: "🎵"
      }
    ];

    // Seleccionar mensaje basado en la cantidad, pero con variación
    const baseIndex = Math.min(clickedFlowersCount - 1, messages.length - 1);
    
    // Agregar variación basada en qué flores específicas se clickearon
    const flowerSum = clickedFlowers.reduce((sum, id) => sum + id, 0);
    const variation = flowerSum % 3; // 0, 1, o 2
    
    let selectedMessage = messages[baseIndex];
    
    // Agregar variaciones especiales para hacer mensajes más únicos
    if (variation === 1 && clickedFlowersCount > 1) {
      selectedMessage = {
        ...selectedMessage,
        message: selectedMessage.message + " El viento susurra secretos entre sus pétalos dorados."
      };
    } else if (variation === 2 && clickedFlowersCount > 2) {
      selectedMessage = {
        ...selectedMessage,
        message: selectedMessage.message + " Las mariposas danzan alrededor celebrando tu presencia en este jardín mágico."
      };
    }

    return selectedMessage;
  };

  const messageData = getUniqueMessage();

  return (
    <div className="mt-12 flex justify-center">
      <Card
        className={cn(
          "max-w-2xl w-full transform transition-all duration-700 animate-in slide-in-from-bottom-4",
          "bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border-yellow-400/30 shadow-2xl shadow-yellow-400/10",
        )}
      >
        <CardContent className="p-8 text-center">
          <div className="text-6xl mb-4 animate-bounce">{messageData.emoji}</div>

          <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-balance">{messageData.title}</h2>

          <p className="text-lg text-slate-300 leading-relaxed text-pretty">{messageData.message}</p>

          {clickedFlowersCount >= 10 && (
            <div className="mt-6 flex justify-center gap-2">
              {["🎉", "✨", "🌟", "💫", "🌻"].map((emoji, index) => (
                <span key={index} className="text-3xl sparkle-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
