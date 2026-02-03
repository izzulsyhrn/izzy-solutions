"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizal",
    role: "Gamer & Content Creator",
    content: "IZZY Solutions built my dream gaming PC. The attention to detail and cable management is insane! Performance is beyond what I expected.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Lim",
    role: "Small Business Owner",
    content: "They fixed my office network issues in record time. Professional, affordable, and they explained everything clearly. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohd Farhan",
    role: "University Student",
    content: "Upgraded my old laptop and it runs like new! Great prices for students too. Will definitely come back for my next build.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jenny Tan",
    role: "Freelance Designer",
    content: "The trade-in deal I got for my old PC was fantastic. Used it towards a new workstation that handles all my design software perfectly.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)

  const next = () => {
    setIsGlitching(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
      setIsGlitching(false)
    }, 150)
  }

  const prev = () => {
    setIsGlitching(true)
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsGlitching(false)
    }, 150)
  }

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Card */}
      <div 
        className={cn(
          "bg-[#111111] rounded-2xl border border-[#00FFFF]/30 p-8 md:p-12 relative overflow-hidden transition-all duration-150",
          isGlitching && "animate-[glitch_0.15s_ease-in-out]"
        )}
      >
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-full h-px bg-[#00FFFF]/20 animate-[scanline_3s_linear_infinite]" />
        </div>

        {/* Quote Icon */}
        <Quote className="absolute top-6 left-6 w-12 h-12 text-[#00FFFF]/20" />

        {/* Content */}
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 pl-8">
            &ldquo;{testimonials[current].content}&rdquo;
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00FFFF] to-[#00BFFF] flex items-center justify-center text-[#0A0A0A] font-bold text-xl">
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-[var(--font-orbitron)] font-bold text-foreground">
                  {testimonials[current].name}
                </h4>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#00FFFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FFFF]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00FFFF]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]" />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-[#00FFFF]/30 flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                i === current 
                  ? "bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]" 
                  : "bg-[#00FFFF]/30 hover:bg-[#00FFFF]/50"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-[#00FFFF]/30 flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
