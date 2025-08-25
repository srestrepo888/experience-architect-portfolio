"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// 🏛️ ULTRA-SOPHISTICATED SECTION TRANSITIONS
// Architectural precision spacing with luxury brand standards

interface ArchitecturalDividerProps {
  variant?: "elegant" | "sophisticated" | "monumental" | "luxury" | "minimal"
  spacing?: "intimate" | "sophisticated" | "spacious" | "monumental" 
  width?: "narrow" | "standard" | "wide" | "full"
  animate?: boolean
  className?: string
}

export function ArchitecturalDivider({
  variant = "sophisticated",
  spacing = "sophisticated",
  width = "standard",
  animate = true,
  className
}: ArchitecturalDividerProps) {
  
  // ARCHITECTURAL SPACING - Golden Ratio Progression
  const spacingClasses = {
    "intimate": "py-12 md:py-16 lg:py-20",          // 48px-80px - Intimate transitions
    "sophisticated": "py-16 md:py-24 lg:py-32",     // 64px-128px - Sophisticated balance
    "spacious": "py-24 md:py-36 lg:py-48",          // 96px-192px - Spacious luxury
    "monumental": "py-32 md:py-48 lg:py-64"         // 128px-256px - Monumental presence
  }

  // LUXURY DIVIDER VARIANTS
  const variantClasses = {
    "elegant": {
      line: "h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-60",
      accent: "w-2 h-2 rounded-full bg-border/40"
    },
    "sophisticated": {
      line: "h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent",
      accent: "w-3 h-3 rounded-full bg-primary/30"
    },
    "monumental": {
      line: "h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent",
      accent: "w-4 h-4 rounded-full bg-primary/25"
    },
    "luxury": {
      line: "h-px bg-gradient-to-r from-primary/10 via-accent/30 to-primary/10",
      accent: "w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/30"
    },
    "minimal": {
      line: "h-px bg-border/30",
      accent: "w-1.5 h-1.5 rounded-full bg-border/20"
    }
  }

  // SOPHISTICATED WIDTHS
  const widthClasses = {
    "narrow": "w-16 md:w-20 lg:w-24",      // 64px-96px
    "standard": "w-24 md:w-32 lg:w-40",    // 96px-160px  
    "wide": "w-32 md:w-48 lg:w-56",        // 128px-224px
    "full": "w-full"                       // Full width
  }

  const dividerElement = (
    <div className={cn(
      "flex items-center justify-center",
      spacingClasses[spacing],
      className
    )}>
      <div className={cn(
        "relative flex items-center justify-center",
        widthClasses[width]
      )}>
        {/* Sophisticated divider line */}
        <div className={cn(
          "w-full",
          variantClasses[variant].line
        )} />
        
        {/* Central accent point */}
        <div className={cn(
          "absolute",
          variantClasses[variant].accent
        )} />
      </div>
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          scaleX: { duration: 0.8, delay: 0.2 }
        }}
      >
        {dividerElement}
      </motion.div>
    )
  }

  return dividerElement
}

// ARCHITECTURAL BREATHING SPACE - Ultra-sophisticated spacing management
interface ArchitecturalBreakProps {
  scale?: "minor" | "content" | "section" | "major" | "monumental"
  className?: string
}

export function ArchitecturalBreak({
  scale = "section",
  className
}: ArchitecturalBreakProps) {
  
  // ARCHITECTURAL BREAKS - Golden Ratio Progression
  const breakClasses = {
    "minor": "h-8 md:h-12 lg:h-16 xl:h-20",              // 32px-80px - Minor divisions
    "content": "h-12 md:h-18 lg:h-24 xl:h-30",           // 48px-120px - Content divisions
    "section": "h-16 md:h-24 lg:h-32 xl:h-40",           // 64px-160px - Section divisions
    "major": "h-20 md:h-28 lg:h-36 xl:h-44",             // 80px-176px - Major divisions  
    "monumental": "h-24 md:h-36 lg:h-48 xl:h-60"         // 96px-240px - Grand divisions
  }

  return <div className={cn(breakClasses[scale], className)} />
}

// LUXURY SECTION SEPARATOR - For premium visual separation
interface LuxurySectionSeparatorProps {
  variant?: "gradient" | "geometric" | "organic" | "minimal"
  intensity?: "subtle" | "medium" | "strong"
  spacing?: "intimate" | "sophisticated" | "spacious"
  className?: string
}

export function LuxurySectionSeparator({
  variant = "gradient",
  intensity = "medium", 
  spacing = "sophisticated",
  className
}: LuxurySectionSeparatorProps) {

  const spacingClasses = {
    "intimate": "py-8 md:py-12 lg:py-16",        // 32px-64px
    "sophisticated": "py-12 md:py-18 lg:py-24",  // 48px-96px
    "spacious": "py-16 md:py-24 lg:py-32"        // 64px-128px
  }

  const intensityMap = {
    "subtle": { opacity: "opacity-30", blur: "blur-sm" },
    "medium": { opacity: "opacity-40", blur: "blur-md" },
    "strong": { opacity: "opacity-50", blur: "blur-lg" }
  }

  const variantElements = {
    "gradient": (
      <div className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent",
        intensityMap[intensity].opacity
      )} />
    ),
    "geometric": (
      <div className="flex items-center justify-center gap-2">
        <div className={cn(
          "w-1 h-1 rounded-full bg-primary",
          intensityMap[intensity].opacity
        )} />
        <div className={cn(
          "w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent",
          intensityMap[intensity].opacity
        )} />
        <div className={cn(
          "w-1 h-1 rounded-full bg-primary",
          intensityMap[intensity].opacity
        )} />
      </div>
    ),
    "organic": (
      <div className={cn(
        "h-0.5 w-32 mx-auto rounded-full bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20",
        intensityMap[intensity].blur
      )} />
    ),
    "minimal": (
      <div className={cn(
        "h-px w-16 mx-auto bg-border",
        intensityMap[intensity].opacity
      )} />
    )
  }

  return (
    <div className={cn(
      "flex items-center justify-center",
      spacingClasses[spacing],
      className
    )}>
      {variantElements[variant]}
    </div>
  )
}

// Legacy support for existing components
export { ArchitecturalDivider as SectionTransition }