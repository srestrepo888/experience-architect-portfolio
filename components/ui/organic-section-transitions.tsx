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

// LUXURY SECTION TRANSITION CONFIGURATIONS
const getSectionColors = (section: string) => {
  const sectionPalettes = {
    hero: {
      primary: "from-slate-50 via-slate-100 to-slate-50",
      secondary: "from-slate-900/5 via-slate-900/3 to-slate-900/5",
      accent: "from-blue-50/30 via-indigo-50/20 to-purple-50/30"
    },
    about: {
      primary: "from-rose-50/60 via-amber-50/40 to-orange-50/50",
      secondary: "from-warm-gray-50 via-stone-50 to-amber-50",
      accent: "from-rose-100/20 via-amber-100/15 to-orange-100/20"
    },
    projects: {
      primary: "from-slate-50 via-gray-50 to-stone-50",
      secondary: "from-slate-100/70 via-gray-100/50 to-stone-100/60",
      accent: "from-blue-50/25 via-slate-50/20 to-gray-50/25"
    },
    experience: {
      primary: "from-emerald-50/40 via-teal-50/30 to-cyan-50/40",
      secondary: "from-slate-50 via-stone-50 to-slate-50",
      accent: "from-emerald-100/15 via-teal-100/10 to-cyan-100/15"
    },
    services: {
      primary: "from-violet-50/30 via-purple-50/25 to-indigo-50/30",
      secondary: "from-slate-50 via-gray-50 to-slate-50",
      accent: "from-violet-100/10 via-purple-100/8 to-indigo-100/10"
    },
    footer: {
      primary: "from-slate-100/80 via-stone-100/60 to-slate-100/70",
      secondary: "from-slate-200/40 via-gray-200/30 to-slate-200/35",
      accent: "from-slate-300/15 via-gray-300/10 to-slate-300/12"
    }
  }
  return sectionPalettes[section] || sectionPalettes.hero
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

  // Smooth spring animation for organic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const fromColors = getSectionColors(fromSection)
  const toColors = getSectionColors(toSection)

  // Dynamic height based on intensity
  const heightMap = {
    subtle: "h-32",
    medium: "h-48", 
    strong: "h-64"
  }

  // Organic transition values
  const fadeProgress = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0])
  const emergeProgress = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 1])
  const scaleFrom = useTransform(smoothProgress, [0, 1], [1, 1.1])
  const scaleTo = useTransform(smoothProgress, [0, 1], [0.9, 1])
  const rotateFrom = useTransform(smoothProgress, [0, 1], [0, 2])
  const rotateTo = useTransform(smoothProgress, [0, 1], [-2, 0])

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden",
        heightMap[intensity],
        className
      )}
    >
      {/* FROM SECTION - Organic Fade Out */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          opacity: fadeProgress,
          scale: scaleFrom,
          rotate: rotateFrom
        }}
      >
        {/* Primary Layer */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b opacity-80",
          fromColors.primary
        )} />
        
        {/* Secondary Layer */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-60",
          fromColors.secondary
        )} />
        
        {/* Accent Layer */}
        <div className={cn(
          "absolute inset-0 bg-gradient-radial from-center opacity-40",
          fromColors.accent
        )} />

        {/* Organic Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 50%), 
                        radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 40%),
                        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)`
          }}
        />
      </motion.div>

      {/* TO SECTION - Organic Emerge */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          opacity: emergeProgress,
          scale: scaleTo,
          rotate: rotateTo
        }}
      >
        {/* Primary Layer */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b opacity-80",
          toColors.primary
        )} />
        
        {/* Secondary Layer */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-tl opacity-60",
          toColors.secondary
        )} />
        
        {/* Accent Layer */}
        <div className={cn(
          "absolute inset-0 bg-gradient-radial from-center opacity-40",
          toColors.accent
        )} />

        {/* Organic Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(circle at 60% 40%, rgba(255,255,255,0.25) 0%, transparent 45%), 
                        radial-gradient(circle at 40% 80%, rgba(255,255,255,0.15) 0%, transparent 35%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />
      </motion.div>

      {/* LUXURY TRANSITION EFFECT - Flowing Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 1, 0]) }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 2) * 40}%`,
              x: useTransform(smoothProgress, [0, 1], [0, 100 + i * 20]),
              y: useTransform(smoothProgress, [0, 1], [0, -50 + i * 15]),
              scale: useTransform(smoothProgress, [0, 0.5, 1], [0, 1, 0])
            }}
          />
        ))}
      </motion.div>

      {/* EDGE BLUR EFFECTS for Organic Blending */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-transparent via-white/5 to-transparent" />
    </div>
  )
}

// LUXURY SECTION WRAPPER with Organic Transitions
interface LuxurySectionWrapperProps {
  sectionId: "hero" | "about" | "projects" | "experience" | "services" | "footer"
  children: React.ReactNode
  className?: string
}

export function LuxurySectionWrapper({ 
  sectionId, 
  children, 
  className 
}: LuxurySectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Organic section scaling and opacity
  const sectionScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.section
      ref={sectionRef}
      id={sectionId}
      className={cn("relative", className)}
      style={{
        scale: sectionScale,
        opacity: sectionOpacity
      }}
    >
      {children}
    </motion.section>
  )
}
