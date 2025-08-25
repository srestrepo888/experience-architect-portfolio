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
        // MINIMAL ELEGANCE: Pure content focus with geometric sophistication
        return {
          background: "hsl(0 0% 100%)",
          backgroundImage: "url('/luxury-geometric-background.png')",
          opacity: 0.15,
          overlay: "linear-gradient(135deg, hsl(240 5% 98% / 0.8) 0%, hsl(240 5% 96% / 0.9) 100%)",
          blur: "0px"
        }

      case "elevated":
        // SOPHISTICATED DEPTH: Professional backdrop with geometric elegance
        return {
          background: "linear-gradient(135deg, hsl(240 5% 98%) 0%, hsl(240 5% 96%) 100%)",
          backgroundImage: "url('/luxury-geometric-background.png')",
          opacity: 0.25,
          overlay: "linear-gradient(135deg, hsl(33 15% 96% / 0.4) 0%, hsl(15 12% 95% / 0.5) 50%, hsl(33 15% 96% / 0.4) 100%)",
          blur: "1px"
        }

      case "dramatic":
        // LUXURY PRESENCE: Premium backdrop for hero sections
        return {
          background: "linear-gradient(135deg, hsl(240 5% 98%) 0%, hsl(240 5% 96%) 50%, hsl(240 5% 98%) 100%)",
          backgroundImage: "url('/luxury-geometric-background.png')",
          opacity: 0.4,
          overlay: "linear-gradient(135deg, hsl(33 15% 96% / 0.6) 0%, hsl(15 12% 95% / 0.7) 30%, hsl(33 15% 95% / 0.6) 70%, hsl(15 12% 95% / 0.7) 100%)",
          blur: "2px"
        }
    }
  }

  const config = getBackgroundConfig()

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* LANDOR BACKGROUND IMAGE LAYER */}
      {config.backgroundImage && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: config.backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: config.opacity,
            filter: `blur(${config.blur})`
          }}
        />
      )}

      {/* LANDOR BASE LAYER */}
      <div 
        className="absolute inset-0"
        style={{
          background: config.background
        }}
      />

      {/* LANDOR OVERLAY LAYER */}
      <div 
        className="absolute inset-0"
        style={{
          background: config.overlay
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