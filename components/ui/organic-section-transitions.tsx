"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

interface OrganicSectionTransitionProps {
  fromSection: "hero" | "about" | "projects" | "experience" | "services" | "footer"
  toSection: "hero" | "about" | "projects" | "experience" | "services" | "footer"
  intensity?: "subtle" | "medium" | "strong"
  className?: string
}

// BRAND-COMPLIANT SECTION TRANSITIONS - PRIMARY COLOR SYSTEM ONLY
const getSectionColors = (section: string) => {
  const sectionPalettes = {
    hero: {
      primary: "from-slate-50 via-slate-100 to-slate-50",
      secondary: "from-primary/5 via-primary/3 to-primary/5",
      accent: "from-slate-100/30 via-slate-200/20 to-slate-300/30"
    },
    about: {
      primary: "from-slate-50 via-slate-100 to-slate-200",
      secondary: "from-slate-100/70 via-slate-50/50 to-slate-100/60",
      accent: "from-primary/5 via-slate-100/15 to-slate-200/20"
    },
    projects: {
      primary: "from-slate-50 via-slate-100 to-slate-200",
      secondary: "from-slate-100/70 via-slate-200/50 to-slate-100/60",
      accent: "from-slate-200/25 via-slate-100/20 to-slate-300/25"
    },
    experience: {
      primary: "from-slate-100 via-slate-200 to-slate-300",
      secondary: "from-slate-200/80 via-slate-100/60 to-slate-200/70",
      accent: "from-primary/8 via-slate-200/25 to-slate-300/30"
    },
    services: {
      primary: "from-slate-200 via-slate-300 to-slate-200",
      secondary: "from-slate-300/80 via-slate-200/60 to-slate-300/70", 
      accent: "from-slate-400/25 via-slate-300/20 to-slate-400/25"
    },
    footer: {
      primary: "from-slate-300 via-slate-400 to-primary/10",
      secondary: "from-slate-400/80 via-primary/20 to-slate-500/60",
      accent: "from-primary/30 via-slate-400/25 to-primary/20"
    }
  }
  
  return sectionPalettes[section as keyof typeof sectionPalettes] || sectionPalettes.hero
}

const getTransitionIntensity = (intensity: string) => {
  const intensityMap = {
    subtle: { opacity: [0.02, 0.05, 0.03], scale: [0.98, 1.01, 0.99] },
    medium: { opacity: [0.05, 0.12, 0.08], scale: [0.96, 1.03, 0.98] },
    strong: { opacity: [0.08, 0.20, 0.15], scale: [0.94, 1.05, 0.97] }
  }
  
  return intensityMap[intensity as keyof typeof intensityMap] || intensityMap.medium
}

export function OrganicSectionTransition({ 
  fromSection, 
  toSection, 
  intensity = "medium", 
  className 
}: OrganicSectionTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const fromColors = getSectionColors(fromSection)
  const toColors = getSectionColors(toSection)
  const intensityConfig = getTransitionIntensity(intensity)
  
  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const opacity1 = useTransform(smoothProgress, [0, 0.5, 1], intensityConfig.opacity)
  const opacity2 = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, ...intensityConfig.opacity])
  const scale = useTransform(smoothProgress, [0, 0.5, 1], intensityConfig.scale)
  
  return (
    <div 
      ref={containerRef}
      className={cn("relative h-32 w-full overflow-hidden", className)}
      style={{ zIndex: 1 }}
    >
      {/* Primary Gradient Layer */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-b opacity-60",
          fromColors.primary
        )}
        style={{ 
          opacity: opacity1,
          scale: scale
        }}
      />
      
      {/* Secondary Transition Layer */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          toColors.secondary
        )}
        style={{ 
          opacity: opacity2,
          scale: scale
        }}
      />
      
      {/* Accent Pattern Layer */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r",
          toColors.accent
        )}
        style={{ 
          opacity: useTransform(smoothProgress, [0, 1], [0, intensityConfig.opacity[1] * 0.3]),
          scale: useTransform(smoothProgress, [0, 1], [1.02, 0.98])
        }}
      />
      
      {/* Subtle Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          color: `rgb(15, 23, 42)` // Primary color
        }}
      />
    </div>
  )
}

export default OrganicSectionTransition