"use client"

import { useEffect, useRef } from "react"

export function RotatingPC() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rotation = 0
    let animationId: number

    const animate = () => {
      rotation += 0.5
      container.style.transform = `rotateY(${rotation}deg)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="perspective-[1000px] w-full max-w-md mx-auto">
      <div
        ref={containerRef}
        className="relative w-64 h-80 mx-auto"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* PC Case - Front */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-lg border border-[#00FFFF]/30"
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Power Button */}
          <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-[#00FFFF] shadow-[0_0_15px_#00FFFF] animate-pulse" />
          
          {/* Front Panel */}
          <div className="absolute top-8 left-4 right-4 bottom-8 bg-[#0A0A0A] rounded border border-[#00FFFF]/20">
            {/* RGB Strip */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#00FFFF] animate-pulse" />
            
            {/* Fan Grill */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24">
              <div className="w-full h-full rounded-full border-4 border-[#00FFFF]/40 relative">
                <div className="absolute inset-2 rounded-full border-2 border-[#00FFFF]/30" />
                <div className="absolute inset-4 rounded-full border border-[#00FFFF]/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]" />
                </div>
              </div>
            </div>

            {/* USB Ports */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-6 h-2 bg-[#1a1a2e] rounded-sm border border-[#00FFFF]/20" />
              <div className="w-6 h-2 bg-[#1a1a2e] rounded-sm border border-[#00FFFF]/20" />
            </div>
          </div>

          {/* IZZY Logo */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-[var(--font-orbitron)] text-[#00FFFF] text-sm font-bold tracking-widest">
            IZZY
          </div>
        </div>

        {/* PC Case - Back */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-lg border border-[#00FFFF]/20"
          style={{ transform: "rotateY(180deg) translateZ(40px)" }}
        >
          <div className="absolute top-4 left-4 right-4 grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-6 bg-[#0A0A0A] rounded-sm border border-[#00FFFF]/10" />
            ))}
          </div>
        </div>

        {/* PC Case - Left Side */}
        <div 
          className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-[#0f0f1a] to-[#1a1a2e] rounded-lg border border-[#00FFFF]/20"
          style={{ transform: "rotateY(-90deg) translateZ(120px)" }}
        />

        {/* PC Case - Right Side (Glass Panel) */}
        <div 
          className="absolute top-0 bottom-0 w-20 bg-[#0A0A0A]/50 rounded-lg border border-[#00FFFF]/40 backdrop-blur-sm"
          style={{ transform: "rotateY(90deg) translateZ(120px)" }}
        >
          {/* RGB Glow Inside */}
          <div className="absolute inset-2 bg-gradient-to-b from-[#00FFFF]/10 via-[#FF00FF]/10 to-[#00BFFF]/10 rounded animate-pulse" />
        </div>

        {/* PC Case - Top */}
        <div 
          className="absolute left-0 right-0 h-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-lg border border-[#00FFFF]/20"
          style={{ transform: "rotateX(90deg) translateZ(0px)" }}
        />

        {/* PC Case - Bottom */}
        <div 
          className="absolute left-0 right-0 h-20 bg-[#0f0f1a] rounded-lg border border-[#00FFFF]/10"
          style={{ transform: "rotateX(-90deg) translateZ(280px)" }}
        />
      </div>

      {/* Reflection/Glow Effect */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-4 bg-[#00FFFF] blur-xl opacity-30" />
    </div>
  )
}
