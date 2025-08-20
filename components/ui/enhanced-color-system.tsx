"use client"

import { motion } from "framer-motion"
import { ReactNode, useRef, useEffect } from "react"

interface EnhancedColorSystemProps {
  children: ReactNode
  className?: string
  colorMode?: "luxury" | "minimal" | "vibrant" | "sophisticated"
}

export function EnhancedColorSystem({ 
  children, 
  className = "",
  colorMode = "sophisticated" 
}: EnhancedColorSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const colorModeClasses = {
    luxury: {
      background: "bg-gradient-to-br from-stone-50/90 via-amber-50/40 to-rose-50/30",
      overlay: "bg-gradient-to-t from-foreground/[0.02] via-transparent to-transparent",
      accent: "before:bg-gradient-to-r before:from-amber-400/10 before:via-rose-400/8 before:to-orange-400/10"
    },
    minimal: {
      background: "bg-stone-50/70",
      overlay: "bg-gradient-to-b from-transparent via-foreground/[0.01] to-transparent", 
      accent: "before:bg-gradient-to-r before:from-foreground/5 before:to-transparent"
    },
    vibrant: {
      background: "bg-gradient-to-br from-amber-50/80 via-rose-50/60 to-orange-50/40",
      overlay: "bg-gradient-to-tr from-amber-400/[0.03] via-transparent to-rose-400/[0.02]",
      accent: "before:bg-gradient-to-r before:from-amber-400/15 before:via-rose-400/12 before:to-orange-400/15"
    },
    sophisticated: {
      background: "bg-gradient-to-br from-stone-50/85 via-amber-50/35 to-rose-50/25",
      overlay: "bg-gradient-to-t from-foreground/[0.015] via-transparent to-foreground/[0.008]",
      accent: "before:bg-gradient-to-r before:from-amber-400/8 before:via-rose-400/6 before:to-orange-400/8"
    }
  }

  const currentMode = colorModeClasses[colorMode]

  useEffect(() => {
    // Enhanced color system CSS properties
    if (containerRef.current) {
      const container = containerRef.current
      container.style.setProperty('--enhanced-text-contrast', '0.92')
      container.style.setProperty('--enhanced-border-opacity', '0.12') 
      container.style.setProperty('--enhanced-background-opacity', '0.04')
      container.style.setProperty('--enhanced-shadow-intensity', '0.08')
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className={`
        relative min-h-screen
        ${currentMode.background}
        ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Enhanced color overlay for better contrast */}
      <div 
        className={`
          absolute inset-0 pointer-events-none
          ${currentMode.overlay}
        `}
      />

      {/* Sophisticated color accent system */}
      <motion.div
        className={`
          absolute inset-0 pointer-events-none
          ${currentMode.accent}
          before:absolute before:inset-0 before:opacity-30
          before:mix-blend-mode-soft-light
        `}
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content with enhanced readability */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Color harmony enhancement */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-foreground/[0.01]" />
    </motion.div>
  )
}

// Color-aware text enhancement component
export function EnhancedTextContrast({ 
  children,
  className = "",
  intensity = "medium"
}: {
  children: ReactNode
  className?: string
  intensity?: "subtle" | "medium" | "strong"
}) {
  const intensityMap = {
    subtle: "drop-shadow-sm contrast-[1.02] brightness-[1.01]",
    medium: "drop-shadow contrast-[1.05] brightness-[1.02]", 
    strong: "drop-shadow-md contrast-[1.08] brightness-[1.03]"
  }

  return (
    <div 
      className={`
        ${intensityMap[intensity]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Enhanced background pattern for sophisticated sections
export function SophisticatedPattern({ 
  intensity = "subtle",
  className = "" 
}: {
  intensity?: "subtle" | "medium" | "strong"
  className?: string
}) {
  const patterns = {
    subtle: {
      opacity: "opacity-[0.015]",
      size: "bg-[length:60px_60px]",
      pattern: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`
    },
    medium: {
      opacity: "opacity-[0.025]", 
      size: "bg-[length:40px_40px]",
      pattern: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0),
               linear-gradient(45deg, transparent 49%, currentColor 50%, transparent 51%)`
    },
    strong: {
      opacity: "opacity-[0.035]",
      size: "bg-[length:30px_30px]",
      pattern: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0),
               linear-gradient(45deg, transparent 48%, currentColor 50%, transparent 52%),
               linear-gradient(-45deg, transparent 48%, currentColor 50%, transparent 52%)`
    }
  }

  const config = patterns[intensity]

  return (
    <motion.div
      className={`
        absolute inset-0 pointer-events-none
        ${config.opacity}
        ${config.size}
        text-foreground
        ${className}
      `}
      style={{
        backgroundImage: config.pattern
      }}
      animate={{
        backgroundPosition: [
          '0% 0%',
          '100% 100%'
        ]
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}