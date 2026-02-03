import Link from "next/link"
import { Instagram, Phone, MapPin, Mail, Cpu } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
]

const services = [
  "Computer Repairs",
  "Laptop/PC Upgrades",
  "Custom Gaming PCs",
  "Buy/Sell/Trade-in",
  "Networking Solutions",
]

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#00FFFF]/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Cpu className="w-8 h-8 text-[#00FFFF]" />
              <span className="font-[var(--font-orbitron)] text-2xl font-bold">
                <span className="text-[#00FFFF]">IZZY</span>
                <span className="text-foreground"> Solutions</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Innovative IT Solutions for Tomorrow. Your trusted partner for all computer and networking needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-orbitron)] text-lg font-bold text-[#00FFFF] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-[#00FFFF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[var(--font-orbitron)] text-lg font-bold text-[#00FFFF] mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-orbitron)] text-lg font-bold text-[#00FFFF] mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00FFFF] mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Seksyen 52, Petaling Jaya,<br />Selangor, Malaysia
                </span>
              </li>
              <li>
                <a 
                  href="https://wa.me/60113296870" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#00FFFF] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#00FFFF]" />
                  +60 11-3296 8705
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/izzy_solutions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#00FFFF] transition-colors"
                >
                  <Instagram className="w-5 h-5 text-[#00FFFF]" />
                  @izzy_solutions
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@izzysolutions.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-[#00FFFF] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#00FFFF]" />
                  info@izzysolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00FFFF]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} IZZY Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/60113296870" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#00FFFF]/30 flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] transition-all"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/izzy_solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#00FFFF]/30 flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
