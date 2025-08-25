"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

// 🏛️ LANDOR BACKGROUND SYSTEM - 3 States Maximum
// Simplified from 7+ chaotic variants to mathematical precision

interface LandorBackgroundProps {
  state: "subtle" | "elevated" | "dramatic"
  children: ReactNode
  className?: string
}

export function LandorBackgroundSystem({ 
  state, 
  children, 
  className = "" 
}: LandorBackgroundProps) {

  // 🎨 LANDOR BACKGROUND STATES - Mathematical Foundation
  const getBackgroundConfig = () => {
    switch (state) {
      case "subtle":
        // MINIMAL ELEGANCE: Pure content focus
        return {
          background: "hsl(0 0% 100%)",           // Pure white
          texture: "none",
          overlay: "transparent",
          blur: "0px"
        }

      case "elevated":
        // SOPHISTICATED DEPTH: Professional backdrop
        return {
          background: "linear-gradient(135deg, hsl(240 5% 98%) 0%, hsl(240 5% 96%) 100%)",
          texture: `radial-gradient(circle at 25% 25%, hsl(240 6% 10% / 0.02) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, hsl(240 6% 10% / 0.02) 0%, transparent 50%)`,
          overlay: "transparent",
          blur: "0px"
        }

      case "dramatic":
        // LUXURY PRESENCE: Premium backdrop for hero sections
        return {
          background: "linear-gradient(135deg, hsl(240 5% 98%) 0%, hsl(240 5% 96%) 50%, hsl(240 5% 98%) 100%)",
          texture: `radial-gradient(ellipse at 30% 30%, hsl(240 6% 10% / 0.03) 0%, transparent 70%),
                   radial-gradient(ellipse at 70% 70%, hsl(240 6% 10% / 0.03) 0%, transparent 70%),
                   linear-gradient(45deg, transparent 48%, hsl(240 6% 10% / 0.01) 50%, transparent 52%)`,
          overlay: "hsl(240 5% 98% / 0.5)",
          blur: "0.5px"
        }
    }
  }

  const config = getBackgroundConfig()

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* LANDOR BACKGROUND LAYER */}
      <div 
        className="absolute inset-0"
        style={{
          background: config.background,
          backgroundImage: config.texture,
          backdropFilter: `blur(${config.blur})`,
          WebkitBackdropFilter: `blur(${config.blur})`
        }}
      />

      {/* LANDOR OVERLAY LAYER */}
      <div 
        className="absolute inset-0"
        style={{
          background: config.overlay,
          backdropFilter: `blur(${config.blur})`,
          WebkitBackdropFilter: `blur(${config.blur})`
        }}
      />

      {/* CONTENT LAYER */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1] // Landor luxury timing
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Legacy compatibility wrapper
export function MasterpieceBackgroundSystem({ 
  section, 
  children, 
  className = "" 
}: {
  section: "hero" | "about" | "projects" | "experience" | "services" | "contact" | "footer"
  children: ReactNode
  className?: string
}) {
  // Map legacy sections to Landor states
  const stateMap = {
    "hero": "dramatic",
    "about": "elevated", 
    "projects": "elevated",
    "experience": "subtle",
    "services": "elevated",
    "contact": "dramatic",
    "footer": "subtle"
  } as const

  return (
    <LandorBackgroundSystem 
      state={stateMap[section]} 
      className={className}
    >
      {children}
    </LandorBackgroundSystem>
  )
}