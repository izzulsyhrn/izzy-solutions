"use client"

import { type ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  backContent: string
}

export function ServiceCard({ icon, title, description, backContent }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="h-72 cursor-pointer group"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500",
          isFlipped && "rotate-y-180"
        )}
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-[#111111] rounded-xl border border-[#00FFFF]/30 p-6 flex flex-col items-center justify-center text-center hover:border-[#00FFFF] hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00FFFF]/20 to-[#00BFFF]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <div className="text-[#00FFFF]">
              {icon}
            </div>
          </div>
          <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00FFFF] rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00FFFF] rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00FFFF] rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00FFFF] rounded-br-xl" />
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/20 to-[#00BFFF]/20 rounded-xl border border-[#00FFFF] p-6 flex flex-col items-center justify-center text-center"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p className="text-foreground leading-relaxed">{backContent}</p>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] rounded-full" />
        </div>
      </div>
    </div>
  )
}
