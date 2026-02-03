import Link from "next/link"
import { Wrench, Cpu, Gamepad2, RefreshCw, Network, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "@/components/particle-background"
import { RotatingPC } from "@/components/rotating-pc"
import { ServiceCard } from "@/components/service-card"
import { Testimonials } from "@/components/testimonials"

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Repair",
    description: "Fast and reliable computer repairs for all brands and models.",
    backContent: "From hardware failures to software issues, our expert technicians diagnose and fix problems quickly. Starting from RM50.",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Upgrade",
    description: "Boost your system performance with cutting-edge upgrades.",
    backContent: "RAM, SSD, GPU upgrades and more. We'll recommend the best components for your budget and needs.",
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Custom Builds",
    description: "Dream gaming PCs built to your exact specifications.",
    backContent: "From budget builds to high-end rigs, we create custom PCs with premium cable management and RGB aesthetics.",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Buy/Sell/Trade",
    description: "Trade in your old devices for cash or store credit.",
    backContent: "Get fair prices for your used laptops, PCs, and components. Upgrade smart with our trade-in program.",
  },
]

const features = [
  { icon: <Zap className="w-6 h-6" />, title: "Fast Turnaround", desc: "Most repairs completed same day" },
  { icon: <Network className="w-6 h-6" />, title: "Expert Team", desc: "Certified technicians you can trust" },
  { icon: <Cpu className="w-6 h-6" />, title: "Quality Parts", desc: "Only genuine components used" },
]

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
                <span className="text-[#00FFFF] text-sm font-medium">Now serving PJ & Bangi</span>
              </div>
              
              <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Empower Your</span>
                <br />
                <span className="text-[#00FFFF] neon-text text-glitch">Tech World</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Professional IT solutions from expert repairs to custom gaming rigs. 
                Experience the future of tech services with IZZY Solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold text-lg px-8 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 group"
                >
                  <Link href="/contact">
                    Book Repair Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] font-bold text-lg px-8 bg-transparent"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#00FFFF]/20">
                <div>
                  <div className="font-[var(--font-orbitron)] text-3xl font-bold text-[#00FFFF]">500+</div>
                  <div className="text-muted-foreground text-sm">PCs Built</div>
                </div>
                <div>
                  <div className="font-[var(--font-orbitron)] text-3xl font-bold text-[#00FFFF]">2K+</div>
                  <div className="text-muted-foreground text-sm">Repairs Done</div>
                </div>
                <div>
                  <div className="font-[var(--font-orbitron)] text-3xl font-bold text-[#00FFFF]">4.9</div>
                  <div className="text-muted-foreground text-sm">Star Rating</div>
                </div>
              </div>
            </div>

            {/* 3D PC */}
            <div className="relative hidden lg:block">
              <RotatingPC />
              
              {/* Floating badges */}
              <div className="absolute top-10 right-0 bg-[#111111] border border-[#00FFFF]/30 rounded-lg px-4 py-2 animate-bounce">
                <span className="text-[#00FFFF] font-medium">RTX Ready</span>
              </div>
              <div className="absolute bottom-20 left-0 bg-[#111111] border border-[#00FFFF]/30 rounded-lg px-4 py-2 animate-bounce delay-150">
                <span className="text-[#00FFFF] font-medium">Custom RGB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00BFFF]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Features Bar */}
      <section className="relative py-8 border-y border-[#00FFFF]/20 bg-[#111111]/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="text-[#00FFFF]">{feature.icon}</div>
                <div>
                  <div className="font-semibold text-foreground">{feature.title}</div>
                  <div className="text-muted-foreground text-sm">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-[#00FFFF]">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your needs. From quick fixes to complete system builds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] bg-transparent"
            >
              <Link href="/services">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-32 bg-[#111111]/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-[#00FFFF]">IZZY</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Since 2020, we&apos;ve been delivering exceptional IT services across Selangor. 
                Our commitment to quality, fair pricing, and customer satisfaction sets us apart.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Transparent pricing with no hidden fees",
                  "90-day warranty on all repairs",
                  "Free diagnostics for all devices",
                  "Same-day service available",
                  "Genuine parts and components only"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00FFFF]/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#00FFFF]" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                size="lg"
                className="mt-8 bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/20 to-[#00BFFF]/20 rounded-2xl" />
                <div className="absolute inset-4 bg-[#111111] rounded-xl border border-[#00FFFF]/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="font-[var(--font-orbitron)] text-6xl font-bold text-[#00FFFF] mb-4">5+</div>
                    <div className="text-foreground text-xl font-semibold mb-2">Years of Excellence</div>
                    <div className="text-muted-foreground">Serving the tech community</div>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#00FFFF]" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#00FFFF]" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-[#00FFFF]">Clients Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-[#00FFFF]/10 to-[#00BFFF]/10 rounded-3xl border border-[#00FFFF]/30 p-8 md:p-16 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #00FFFF 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative z-10">
              <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to <span className="text-[#00FFFF]">Level Up</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Whether you need a quick repair or a complete custom build, we&apos;re here to help. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold text-lg px-8 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
                >
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] font-bold text-lg px-8 bg-transparent"
                >
                  <a href="https://wa.me/60113296870" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
