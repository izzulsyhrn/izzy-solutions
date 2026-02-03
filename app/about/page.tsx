import { Target, Heart, Zap, Users, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | IZZY Solutions",
  description: "Learn about IZZY Solutions - your trusted IT partner since 2020. Innovative IT solutions for tomorrow.",
}

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "IZZY Solutions was founded in Petaling Jaya with a mission to provide quality IT services at fair prices.",
  },
  {
    year: "2021",
    title: "Growing Strong",
    description: "Expanded our team and services. Completed our 500th repair and built our first 100 custom PCs.",
  },
  {
    year: "2022",
    title: "New Location",
    description: "Opened our second branch in Bangi to serve the growing demand in the area.",
  },
  {
    year: "2023",
    title: "Community Impact",
    description: "Launched our student discount program and partnered with local schools for tech education.",
  },
  {
    year: "2024",
    title: "Innovation Continues",
    description: "Introduced advanced diagnostic tools and expanded into enterprise networking solutions.",
  },
  {
    year: "2025",
    title: "Looking Forward",
    description: "Celebrating 5 years of excellence with over 2000 satisfied customers and counting.",
  },
]

const team = [
  {
    name: "Izzy Rahman",
    role: "Founder & Lead Technician",
    bio: "15+ years in IT. Passionate about helping people get the most from their tech.",
    initial: "IR",
  },
  {
    name: "Daniel Lee",
    role: "Custom Builds Specialist",
    bio: "Gaming enthusiast and certified system builder. Creator of 300+ custom rigs.",
    initial: "DL",
  },
  {
    name: "Aisha Tan",
    role: "Networking Expert",
    bio: "Network engineer with enterprise experience. Makes connectivity simple.",
    initial: "AT",
  },
  {
    name: "Hafiz Ahmad",
    role: "Customer Relations",
    bio: "Ensures every customer gets the best experience and support.",
    initial: "HA",
  },
]

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Quality First",
    description: "We never compromise on quality. Every repair and build meets our high standards.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer Focused",
    description: "Your satisfaction is our priority. We go the extra mile to exceed expectations.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "We stay ahead of tech trends to provide you with the best solutions.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    description: "We believe in giving back and supporting our local tech community.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-[#00FFFF] neon-text">IZZY Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
              Since 2020, we&apos;ve been on a mission to deliver innovative IT solutions that empower 
              individuals and businesses. We believe technology should work for you, not against you.
            </p>
            
            {/* Mission Statement */}
            <div className="relative bg-[#111111] rounded-2xl border border-[#00FFFF]/30 p-8 md:p-12 mt-12">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FFFF]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00FFFF]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]" />
              
              <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-[#00FFFF] mb-4">
                Our Mission
              </h2>
              <p className="text-foreground text-xl md:text-2xl font-light leading-relaxed">
                &ldquo;Innovative IT Solutions for Tomorrow&rdquo;
              </p>
              <p className="text-muted-foreground mt-4">
                We strive to make technology accessible, reliable, and exciting for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#111111]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-[#00FFFF]">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6 text-center hover:border-[#00FFFF]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-[#00FFFF]">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From a small shop in PJ to serving thousands of customers across Selangor.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-[#00FFFF] to-[#00FFFF]/20" />
                )}
                
                {/* Year Marker */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#111111] border-2 border-[#00FFFF] flex items-center justify-center">
                    <span className="font-[var(--font-orbitron)] text-[#00FFFF] text-xs font-bold">
                      {item.year.slice(2)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6 flex-1 hover:border-[#00FFFF]/40 transition-colors">
                  <div className="text-[#00FFFF] text-sm font-medium mb-1">{item.year}</div>
                  <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#111111]/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the <span className="text-[#00FFFF]">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate people behind IZZY Solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div 
                key={member.name}
                className="relative bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6 text-center group overflow-hidden hover:border-[#00FFFF]/50 transition-all"
              >
                {/* Neon Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00FFFF]/0 to-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00FFFF] to-[#00BFFF] flex items-center justify-center text-[#0A0A0A] font-bold text-2xl mx-auto mb-4">
                    {member.initial}
                  </div>
                  
                  <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-[#00FFFF] text-sm font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-[#00FFFF]">Locations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Petaling Jaya (HQ)", 
                address: "Seksyen 52, Petaling Jaya, Selangor",
                established: "Est. 2020"
              },
              { 
                name: "Bangi Branch", 
                address: "Bangi Gateway, Bangi, Selangor",
                established: "Est. 2022"
              }
            ].map((location) => (
              <div 
                key={location.name}
                className="bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-1">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{location.address}</p>
                  <span className="text-[#00FFFF] text-sm">{location.established}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#111111]/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "2K+", label: "Repairs Completed" },
              { value: "500+", label: "PCs Built" },
              { value: "4.9", label: "Star Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-[#00FFFF] mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-foreground mb-4">
              Recognized Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We&apos;re proud to be recognized as one of the top IT service providers in Selangor, 
              with consistent 5-star reviews across Google, Facebook, and industry platforms.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold"
            >
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
