"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, RotateCcw, Wrench, Cpu, HardDrive, Wifi, Monitor, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Question {
  id: number
  question: string
  options: {
    label: string
    value: string
    icon?: React.ReactNode
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of device are you having issues with?",
    options: [
      { label: "Desktop PC", value: "desktop", icon: <Monitor className="w-5 h-5" /> },
      { label: "Laptop", value: "laptop", icon: <Cpu className="w-5 h-5" /> },
      { label: "Both/Multiple", value: "multiple", icon: <HardDrive className="w-5 h-5" /> },
    ],
  },
  {
    id: 2,
    question: "What best describes your issue?",
    options: [
      { label: "Won't turn on / No power", value: "power" },
      { label: "Slow performance", value: "slow" },
      { label: "Overheating / Loud fans", value: "thermal" },
      { label: "Screen / Display issues", value: "display" },
      { label: "Network / WiFi problems", value: "network" },
      { label: "Storage / Data issues", value: "storage" },
    ],
  },
  {
    id: 3,
    question: "How long have you been experiencing this issue?",
    options: [
      { label: "Just started today", value: "new" },
      { label: "A few days", value: "days" },
      { label: "Weeks / Getting worse", value: "weeks" },
      { label: "Ongoing / Chronic issue", value: "ongoing" },
    ],
  },
]

interface Recommendation {
  title: string
  description: string
  services: string[]
  urgency: "low" | "medium" | "high"
  priceRange: string
}

const getRecommendation = (answers: Record<number, string>): Recommendation => {
  const issue = answers[2]
  const duration = answers[3]

  const recommendations: Record<string, Recommendation> = {
    power: {
      title: "Power Supply / Motherboard Diagnosis",
      description: "Your device may have a failing power supply, battery, or motherboard issue. Professional diagnosis is recommended.",
      services: ["Hardware Diagnostics", "Power Supply Replacement", "Motherboard Repair"],
      urgency: "high",
      priceRange: "RM50 - RM300",
    },
    slow: {
      title: "Performance Optimization",
      description: "Your system could benefit from upgrades or maintenance. This could be due to aging hardware, malware, or storage issues.",
      services: ["System Cleanup", "RAM Upgrade", "SSD Installation", "Malware Removal"],
      urgency: duration === "ongoing" ? "medium" : "low",
      priceRange: "RM50 - RM400",
    },
    thermal: {
      title: "Thermal Management Service",
      description: "Overheating can cause serious damage. We recommend cleaning and thermal paste replacement.",
      services: ["Thermal Paste Replacement", "Fan Cleaning", "Cooling System Upgrade"],
      urgency: "high",
      priceRange: "RM80 - RM200",
    },
    display: {
      title: "Display / GPU Diagnostics",
      description: "Display issues can range from simple cable problems to GPU failures. Professional testing is needed.",
      services: ["Display Cable Check", "GPU Testing", "Screen Replacement"],
      urgency: "medium",
      priceRange: "RM50 - RM500",
    },
    network: {
      title: "Network Troubleshooting",
      description: "WiFi and network issues can be hardware or software related. We'll identify and fix the root cause.",
      services: ["WiFi Card Replacement", "Driver Updates", "Network Configuration"],
      urgency: "low",
      priceRange: "RM50 - RM150",
    },
    storage: {
      title: "Storage & Data Recovery",
      description: "Storage issues require immediate attention to prevent data loss. Backup and repair services available.",
      services: ["Data Backup", "HDD/SSD Replacement", "Data Recovery", "RAID Repair"],
      urgency: "high",
      priceRange: "RM100 - RM600",
    },
  }

  return recommendations[issue] || recommendations.slow
}

export function DiagnosticQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const reset = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  const recommendation = showResult ? getRecommendation(answers) : null

  return (
    <div className="bg-[#111111] rounded-2xl border border-[#00FFFF]/30 p-8 relative overflow-hidden">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00FFFF]" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FFFF]" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00FFFF]" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00FFFF]" />

      {!showResult ? (
        <>
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {questions.map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1 flex-1 rounded-full transition-all",
                  i <= currentStep ? "bg-[#00FFFF]" : "bg-[#00FFFF]/20"
                )}
              />
            ))}
          </div>

          {/* Question */}
          <div className="mb-8">
            <span className="text-[#00FFFF] text-sm font-medium">Question {currentStep + 1} of {questions.length}</span>
            <h3 className="font-[var(--font-orbitron)] text-xl md:text-2xl font-bold text-foreground mt-2">
              {questions[currentStep].question}
            </h3>
          </div>

          {/* Options */}
          <div className="grid gap-3">
            {questions[currentStep].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                className="flex items-center gap-4 p-4 rounded-xl border border-[#00FFFF]/20 bg-[#0A0A0A] hover:border-[#00FFFF] hover:bg-[#00FFFF]/5 transition-all text-left group"
              >
                {option.icon && (
                  <div className="w-10 h-10 rounded-full bg-[#00FFFF]/10 flex items-center justify-center text-[#00FFFF] group-hover:bg-[#00FFFF]/20 transition-colors">
                    {option.icon}
                  </div>
                )}
                <span className="text-foreground font-medium flex-1">{option.label}</span>
                <ChevronRight className="w-5 h-5 text-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </>
      ) : recommendation && (
        <>
          {/* Result */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#00FFFF]/20 flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-8 h-8 text-[#00FFFF]" />
            </div>
            <h3 className="font-[var(--font-orbitron)] text-xl md:text-2xl font-bold text-foreground mb-2">
              {recommendation.title}
            </h3>
            <p className="text-muted-foreground">{recommendation.description}</p>
          </div>

          {/* Urgency */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6",
            recommendation.urgency === "high" && "bg-red-500/20 text-red-400",
            recommendation.urgency === "medium" && "bg-yellow-500/20 text-yellow-400",
            recommendation.urgency === "low" && "bg-green-500/20 text-green-400"
          )}>
            <Zap className="w-4 h-4" />
            {recommendation.urgency === "high" && "High Priority - Act Soon"}
            {recommendation.urgency === "medium" && "Medium Priority"}
            {recommendation.urgency === "low" && "Low Priority"}
          </div>

          {/* Recommended Services */}
          <div className="mb-6">
            <h4 className="text-[#00FFFF] font-semibold mb-3">Recommended Services:</h4>
            <div className="flex flex-wrap gap-2">
              {recommendation.services.map((service) => (
                <span key={service} className="px-3 py-1 rounded-full bg-[#00FFFF]/10 text-[#00FFFF] text-sm border border-[#00FFFF]/20">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-[#0A0A0A] rounded-xl p-4 mb-8">
            <div className="text-muted-foreground text-sm">Estimated Price Range</div>
            <div className="font-[var(--font-orbitron)] text-2xl font-bold text-[#00FFFF]">
              {recommendation.priceRange}
            </div>
            <div className="text-muted-foreground text-xs mt-1">*Final price depends on diagnosis</div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              asChild
              className="flex-1 bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold"
            >
              <Link href="/contact">Book Diagnosis</Link>
            </Button>
            <Button 
              variant="outline"
              onClick={reset}
              className="border-[#00FFFF]/50 text-[#00FFFF] hover:bg-[#00FFFF]/10 bg-transparent"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
