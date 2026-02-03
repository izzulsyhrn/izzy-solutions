"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#00FFFF]/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Cpu className="w-8 h-8 text-[#00FFFF] group-hover:text-[#00BFFF] transition-colors" />
              <div className="absolute inset-0 bg-[#00FFFF] blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="font-[var(--font-orbitron)] text-2xl font-bold tracking-wider">
              <span className="text-[#00FFFF] neon-text">IZZY</span>
              <span className="text-foreground"> Solutions</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-foreground hover:text-[#00FFFF] transition-colors font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 neon-glow"
            >
              <Link href="/contact">Book Repair Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00FFFF] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#00FFFF]/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-[#00FFFF] transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold mt-2"
              >
                <Link href="/contact">Book Repair Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
