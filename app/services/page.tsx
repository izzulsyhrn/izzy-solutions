import { Wrench, Cpu, Gamepad2, RefreshCw, Network, Shield, HardDrive, MonitorSmartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DiagnosticQuiz } from "@/components/diagnostic-quiz"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | IZZY Solutions",
  description: "Professional IT services including computer repairs, upgrades, custom gaming PC builds, and networking solutions.",
}

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Computer Repairs",
    description: "Expert diagnosis and repair for all computer brands. From hardware failures to software issues, we fix it all.",
    features: ["Hardware diagnosis", "Component replacement", "Data recovery", "Virus removal"],
    priceStart: "RM50",
    popular: false,
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "PC & Laptop Upgrades",
    description: "Boost your system performance with strategic upgrades. We recommend the best components for your budget.",
    features: ["RAM upgrades", "SSD installation", "GPU upgrades", "CPU replacement"],
    priceStart: "RM80",
    popular: true,
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Custom Gaming PCs",
    description: "Dream machines built to your exact specifications. Premium cable management and RGB aesthetics included.",
    features: ["Component selection", "Custom builds", "Cable management", "RGB setup"],
    priceStart: "RM2,500",
    popular: true,
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Buy / Sell / Trade-in",
    description: "Get fair value for your old devices. Trade in towards upgrades or sell for cash.",
    features: ["Device evaluation", "Fair market prices", "Trade-in credits", "Instant quotes"],
    priceStart: "Varies",
    popular: false,
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Networking Solutions",
    description: "Complete networking services for homes and businesses. WiFi setup, cabling, and troubleshooting.",
    features: ["WiFi optimization", "Network setup", "Cable installation", "Security config"],
    priceStart: "RM100",
    popular: false,
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Maintenance",
    description: "Keep your systems secure and running smoothly with our maintenance packages.",
    features: ["Antivirus setup", "System cleanup", "Driver updates", "Backup solutions"],
    priceStart: "RM60",
    popular: false,
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "Data Services",
    description: "Professional data recovery and backup solutions. Don&apos;t lose your precious files.",
    features: ["Data recovery", "Cloud backup", "Migration", "RAID repair"],
    priceStart: "RM150",
    popular: false,
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: "Peripheral Setup",
    description: "Complete setup and configuration for monitors, printers, and other peripherals.",
    features: ["Multi-monitor setup", "Printer config", "Driver installation", "Calibration"],
    priceStart: "RM40",
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-[#00FFFF] neon-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Comprehensive IT solutions tailored to your needs. From quick repairs to complete custom builds, 
              we deliver excellence with every service.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="relative bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6 hover:border-[#00FFFF]/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-300 group"
              >
                {service.popular && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}
                
                <div className="w-14 h-14 rounded-xl bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] mb-4 group-hover:bg-[#00FFFF]/20 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF]" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#00FFFF]/10">
                  <div>
                    <div className="text-muted-foreground text-xs">Starting from</div>
                    <div className="font-[var(--font-orbitron)] text-[#00FFFF] font-bold">
                      {service.priceStart}
                    </div>
                  </div>
                  <Button 
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF]/10 text-xs bg-transparent"
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Quiz Section */}
      <section className="py-16 md:py-24 bg-[#111111]/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-6">
                Diagnose Your <span className="text-[#00FFFF]">Issue</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Not sure what service you need? Take our quick diagnostic quiz to get personalized 
                recommendations based on your device issues.
              </p>
              <ul className="space-y-3">
                {[
                  "Answer 3 simple questions",
                  "Get instant recommendations",
                  "See estimated pricing",
                  "No obligation quote"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00FFFF]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#00FFFF]" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <DiagnosticQuiz />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-[#00FFFF]">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple, transparent, and efficient. Here&apos;s how we work.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Contact", desc: "Reach out via WhatsApp, form, or visit our shop" },
              { step: "02", title: "Diagnose", desc: "Free diagnosis to identify the exact issue" },
              { step: "03", title: "Quote", desc: "Transparent pricing with no hidden fees" },
              { step: "04", title: "Deliver", desc: "Fast turnaround with quality guarantee" },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {/* Connector Line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#00FFFF] to-[#00FFFF]/20" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#111111] border-2 border-[#00FFFF] flex items-center justify-center mx-auto mb-4">
                    <span className="font-[var(--font-orbitron)] text-[#00FFFF] font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#00FFFF]/10 to-[#00BFFF]/10 rounded-2xl border border-[#00FFFF]/30 p-8 md:p-12 text-center">
            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and quote. No obligation, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF]/10 bg-transparent"
              >
                <a href="https://wa.me/60113296870" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
