"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const deviceTypes = [
  "Desktop PC",
  "Laptop",
  "Gaming PC",
  "Server",
  "Networking Equipment",
  "Other"
]

const issueTypes = [
  "Hardware Repair",
  "Software Issue",
  "Upgrade Request",
  "Custom Build Inquiry",
  "Trade-in/Sell",
  "Networking Setup",
  "General Inquiry"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    deviceType: "",
    issueType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-[#00FFFF] neon-text">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Have a question or need our services? Reach out to us via the form below, 
              WhatsApp, or visit our shop. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#111111] rounded-2xl border border-[#00FFFF]/30 p-6 md:p-8 relative overflow-hidden">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FFFF]" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00FFFF]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]" />

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-[var(--font-orbitron)] text-2xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          deviceType: "",
                          issueType: "",
                          message: ""
                        })
                      }}
                      variant="outline"
                      className="border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF]/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 text-foreground placeholder:text-muted-foreground focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 text-foreground placeholder:text-muted-foreground focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number (WhatsApp preferred)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 text-foreground placeholder:text-muted-foreground focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                          placeholder="+60 12-345 6789"
                        />
                      </div>

                      {/* Device Type & Issue Type */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="deviceType" className="block text-sm font-medium text-foreground mb-2">
                            Device Type
                          </label>
                          <select
                            id="deviceType"
                            name="deviceType"
                            value={formData.deviceType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 text-foreground focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                          >
                            <option value="">Select device type</option>
                            {deviceTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="issueType" className="block text-sm font-medium text-foreground mb-2">
                            How can we help?
                          </label>
                          <select
                            id="issueType"
                            name="issueType"
                            value={formData.issueType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 text-foreground focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors"
                          >
                            <option value="">Select issue type</option>
                            {issueTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Describe Your Issue / Request *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 text-foreground placeholder:text-muted-foreground focus:border-[#00FFFF] focus:outline-none focus:ring-1 focus:ring-[#00FFFF] transition-colors resize-none"
                          placeholder="Please describe your issue or what you're looking for..."
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold py-6 text-lg",
                          isSubmitting && "opacity-70 cursor-not-allowed"
                        )}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6">
                <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/60113296870"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">WhatsApp Us</div>
                      <div className="text-muted-foreground text-sm">+60 11-3296 8705</div>
                    </div>
                  </a>

                  <a 
                    href="tel:+60113296870"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Call Us</div>
                      <div className="text-muted-foreground text-sm">+60 11-3296 8705</div>
                    </div>
                  </a>

                  <a 
                    href="https://instagram.com/izzy_solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] shrink-0">
                      <Instagram className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Instagram</div>
                      <div className="text-muted-foreground text-sm">@izzy_solutions</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@izzysolutions.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#0A0A0A] border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground text-sm">info@izzysolutions.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6">
                <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-4">
                  Our Location
                </h3>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">IZZY Solutions HQ</div>
                    <div className="text-muted-foreground text-sm">
                      Seksyen 52, Petaling Jaya,<br />
                      Selangor, Malaysia
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden border border-[#00FFFF]/20 aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7987168977397!2d101.78293897496559!3d2.9451462540654474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb3f0c0dd5bff%3A0x8e7e0e8c0b4c0c0c!2sSeksyen%2052%2C%2046200%20Petaling%20Jaya%2C%20Selangor!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="IZZY Solutions Location"
                  />
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-6">
                <h3 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground mb-4">
                  Business Hours
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground font-medium">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground font-medium">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat Bubble */}
      <a
        href="https://wa.me/60113296870"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 animate-pulse" />
      </a>
    </div>
  )
}
