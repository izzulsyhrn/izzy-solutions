import React from "react"
import type { Metadata } from 'next'
import { Orbitron, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron',
  display: 'swap',
});

const roboto = Roboto({ 
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IZZY Solutions | Innovative IT Solutions for Tomorrow',
  description: 'IZZY Solutions specializes in computer repairs, laptop/PC upgrades, custom gaming PC builds, buy/sell/trade-in devices, and networking solutions in Petaling Jaya, Selangor.',
  keywords: 'IT services, computer repair, PC upgrade, gaming PC, laptop repair, networking, Malaysia, Petaling Jaya',
  generator: 'v0.app',
  openGraph: {
    title: 'IZZY Solutions | Innovative IT Solutions for Tomorrow',
    description: 'Professional IT services including computer repairs, custom gaming PC builds, and networking solutions.',
    type: 'website',
    locale: 'en_MY',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-foreground min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
