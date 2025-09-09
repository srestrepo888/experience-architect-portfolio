"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface MasterpieceHierarchyProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  emphasis?: "minimal" | "subtle" | "balanced" | "strong" | "dramatic"
  attention?: "primary" | "secondary" | "tertiary" | "supporting" | "ambient"
  flow?: "natural" | "guided" | "directed" | "forced"
  className?: string
}

interface MasterpieceAttentionProps {
  children: React.ReactNode
  trigger?: "hover" | "focus" | "scroll" | "immediate"
  intensity?: "whisper" | "gentle" | "clear" | "strong" | "commanding"
  direction?: "up" | "down" | "left" | "right" | "center" | "radial"
  timing?: "instant" | "swift" | "smooth" | "deliberate" | "theatrical"
  className?: string
}

// MASTERPIECE VISUAL HIERARCHY - SURGICAL PRECISION
// Based on cognitive science and perception psychology:
// - Z-Pattern for Western reading flow
// - F-Pattern for content scanning  
// - Gestalt Principles for grouping and proximity
// - Fitts's Law for interactive element sizing
// - Weber-Fechner Law for perceptual scaling

export const HIERARCHY_LEVELS = {
  // Z-index layers for perfect stacking order
  layers: {
    1: "z-50",   // Hero/Primary - Absolute priority
    2: "z-40",   // Secondary headers - High importance
    3: "z-30",   // Content sections - Standard importance
    4: "z-20",   // Supporting content - Low importance
    5: "z-10",   // Background elements - Minimal importance
    6: "z-0",    // Base layer - No hierarchy
  },

  // Opacity scales for attention control
  emphasis: {
    minimal: {
      primary: "opacity-95",
      secondary: "opacity-80", 
      tertiary: "opacity-65",
      ambient: "opacity-50",
    },
    subtle: {
      primary: "opacity-100",
      secondary: "opacity-85",
      tertiary: "opacity-70",
      ambient: "opacity-55",
    },
    balanced: {
      primary: "opacity-100",
      secondary: "opacity-90",
      tertiary: "opacity-75",
      ambient: "opacity-60",
    },
    strong: {
      primary: "opacity-100",
      secondary: "opacity-95",
      tertiary: "opacity-80",
      ambient: "opacity-65",
    },
    dramatic: {
      primary: "opacity-100",
      secondary: "opacity-100",
      tertiary: "opacity-85",
      ambient: "opacity-70",
    },
  },

  // Scale relationships based on Weber-Fechner Law
  scale: {
    1: "scale-100",    // Primary - Full presence
    2: "scale-98",     // Secondary - Subtle reduction
    3: "scale-96",     // Tertiary - Noticeable reduction
    4: "scale-94",     // Supporting - Clear reduction
    5: "scale-92",     // Background - Significant reduction
    6: "scale-90",     // Ambient - Maximum reduction
  },

  // Shadow depth for hierarchy indication
  elevation: {
    1: "drop-shadow-lg filter",      // Floating above
    2: "drop-shadow-md filter",      // Elevated
    3: "drop-shadow-sm filter",      // Raised
    4: "drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]", // Barely lifted
    5: "",                           // Flat
    6: "",                           // Recessed
  },

  // Transform effects for attention guidance
  attention: {
    primary: "transform-gpu will-change-transform",
    secondary: "transform-gpu will-change-transform",
    tertiary: "transform-gpu",
    supporting: "",
    ambient: "",
  }
} as const

export const ATTENTION_SYSTEMS = {
  // Trigger mechanisms
  triggers: {
    hover: "hover:scale-[1.02] hover:opacity-100 transition-all duration-300 ease-out",
    focus: "focus-within:scale-[1.02] focus-within:opacity-100 transition-all duration-300 ease-out",
    scroll: "transition-all duration-500 ease-out",
    immediate: "",
  },

  // Intensity mappings
  intensities: {
    whisper: {
      scale: "hover:scale-[1.005]",
      opacity: "hover:opacity-95",
      shadow: "hover:drop-shadow-sm",
      blur: "",
    },
    gentle: {
      scale: "hover:scale-[1.01]",
      opacity: "hover:opacity-100",
      shadow: "hover:drop-shadow-md",
      blur: "",
    },
    clear: {
      scale: "hover:scale-[1.02]",
      opacity: "hover:opacity-100",
      shadow: "hover:drop-shadow-lg",
      blur: "hover:backdrop-blur-sm",
    },
    strong: {
      scale: "hover:scale-[1.03]",
      opacity: "hover:opacity-100",
      shadow: "hover:drop-shadow-xl",
      blur: "hover:backdrop-blur-md",
    },
    commanding: {
      scale: "hover:scale-[1.05]",
      opacity: "hover:opacity-100",
      shadow: "hover:drop-shadow-2xl",
      blur: "hover:backdrop-blur-lg",
    },
  },

  // Directional flow guides
  directions: {
    up: "hover:-translate-y-1",
    down: "hover:translate-y-1", 
    left: "hover:-translate-x-1",
    right: "hover:translate-x-1",
    center: "",
    radial: "hover:scale-[1.02]",
  },

  // Timing curves for different personalities
  timing: {
    instant: "duration-0",
    swift: "duration-150 ease-out",
    smooth: "duration-300 ease-out",
    deliberate: "duration-500 ease-in-out",
    theatrical: "duration-700 ease-&lsqb;cubic-bezier(0.16,1,0.3,1)&rsqb;",
  }
} as const

// MASTERPIECE HIERARCHY COMPONENT - PRECISE ATTENTION CONTROL
export function MasterpieceHierarchy({
  children,
  level,
  emphasis = "balanced",
  attention = "secondary",
  flow = "natural",
  className
}: MasterpieceHierarchyProps) {
  
  const layerClass = HIERARCHY_LEVELS.layers[level]
  const emphasisClass = HIERARCHY_LEVELS.emphasis[emphasis][attention] || HIERARCHY_LEVELS.emphasis[emphasis].primary
  const scaleClass = HIERARCHY_LEVELS.scale[level]
  const elevationClass = HIERARCHY_LEVELS.elevation[level]
  const attentionClass = HIERARCHY_LEVELS.attention[attention]

  // Flow-based positioning adjustments
  const flowAdjustments = {
    natural: "",
    guided: "relative",
    directed: "relative z-10",
    forced: "relative z-20 filter drop-shadow-lg",
  }

  return (
    <div 
      className={cn(
        layerClass,
        emphasisClass,
        scaleClass,
        elevationClass,
        attentionClass,
        flowAdjustments[flow],
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {children}
    </div>
  )
}

// MASTERPIECE ATTENTION GUIDE - SOPHISTICATED INTERACTION
export function MasterpieceAttention({
  children,
  trigger = "hover",
  intensity = "clear",
  direction = "center",
  timing = "smooth",
  className
}: MasterpieceAttentionProps) {
  
  const triggerClass = ATTENTION_SYSTEMS.triggers[trigger]
  const intensityConfig = ATTENTION_SYSTEMS.intensities[intensity]
  const directionClass = ATTENTION_SYSTEMS.directions[direction]
  const timingClass = ATTENTION_SYSTEMS.timing[timing]

  return (
    <div 
      className={cn(
        triggerClass,
        intensityConfig.scale,
        intensityConfig.opacity,
        intensityConfig.shadow,
        intensityConfig.blur,
        directionClass,
        timingClass,
        "transform-gpu will-change-transform",
        className
      )}
    >
      {children}
    </div>
  )
}

// MASTERPIECE SCROLL HIERARCHY - DYNAMIC ATTENTION
export function MasterpieceScrollHierarchy({
  children,
  level,
  intensity = "clear",
  className
}: {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5
  intensity?: "whisper" | "gentle" | "clear" | "strong" | "commanding"
  className?: string
}) {
  
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Dynamic hierarchy based on scroll position
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    level <= 2 ? [0.8, 1, 1, 0.8] : [0.6, 1, 1, 0.6]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    level <= 2 ? [0.98, 1, 1, 0.98] : [0.96, 1, 1, 0.96]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    level <= 2 ? [20, 0, -20] : [10, 0, -10]
  )

  const intensityMultiplier = {
    whisper: 0.3,
    gentle: 0.5,
    clear: 0.7,
    strong: 0.9,
    commanding: 1.0
  }[intensity]

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacity,
        scale: scale,
        y: useTransform(y, (value) => value * intensityMultiplier),
      }}
      className={cn(
        HIERARCHY_LEVELS.layers[level],
        "transform-gpu will-change-transform",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

// MASTERPIECE FOCAL POINT - ATTENTION MAGNETISM
export function MasterpieceFocalPoint({
  children,
  magnetism = "strong",
  pulse = false,
  glow = false,
  className
}: {
  children: React.ReactNode
  magnetism?: "gentle" | "moderate" | "strong" | "magnetic"
  pulse?: boolean
  glow?: boolean
  className?: string
}) {
  
  const magnetismEffects = {
    gentle: "hover:scale-[1.02] hover:opacity-100",
    moderate: "hover:scale-[1.03] hover:opacity-100 hover:drop-shadow-lg",
    strong: "hover:scale-[1.05] hover:opacity-100 hover:drop-shadow-xl",
    magnetic: "hover:scale-[1.08] hover:opacity-100 hover:drop-shadow-2xl",
  }

  const pulseEffect = pulse ? "animate-pulse" : ""
  const glowEffect = glow ? "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" : ""

  return (
    <div 
      className={cn(
        "relative z-50 transform-gpu will-change-transform transition-all duration-500 ease-out",
        magnetismEffects[magnetism],
        pulseEffect,
        glowEffect,
        "cursor-pointer",
        className
      )}
    >
      {/* Attention ring for maximum focus */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 scale-110 blur-xl" />
      
      {children}
    </div>
  )
}

// MASTERPIECE READING FLOW - GUIDED CONTENT CONSUMPTION
export function MasterpieceReadingFlow({
  children,
  pattern = "z",
  speed = "comfortable",
  className
}: {
  children: React.ReactNode
  pattern?: "z" | "f" | "gutenberg" | "custom"
  speed?: "slow" | "comfortable" | "fast" | "instant"
  className?: string
}) {
  
  const patternClasses = {
    z: "space-y-8 md:space-y-12 lg:space-y-16",      // Z-pattern spacing
    f: "space-y-6 md:space-y-8 lg:space-y-12",       // F-pattern spacing  
    gutenberg: "space-y-12 md:space-y-16 lg:space-y-20", // Gutenberg spacing
    custom: "space-y-4 md:space-y-6 lg:space-y-8",   // Custom spacing
  }

  const speedTiming = {
    slow: "transition-all duration-1000 ease-in-out",
    comfortable: "transition-all duration-700 ease-out",
    fast: "transition-all duration-400 ease-out",
    instant: "transition-all duration-150 ease-out",
  }

  return (
    <div 
      className={cn(
        patternClasses[pattern],
        speedTiming[speed],
        className
      )}
    >
      {children}
    </div>
  )
}

// MASTERPIECE EMPHASIS ZONE - CONTENT SPOTLIGHTING
export function MasterpieceEmphasisZone({
  children,
  style = "highlight",
  intensity = "moderate",
  animated = true,
  className
}: {
  children: React.ReactNode
  style?: "highlight" | "frame" | "glow" | "elevation" | "invisible"
  intensity?: "subtle" | "moderate" | "strong" | "dramatic"
  animated?: boolean
  className?: string
}) {
  
  const styleEffects = {
    highlight: {
      subtle: "bg-gradient-to-r from-amber-50/30 to-orange-50/30",
      moderate: "bg-gradient-to-r from-amber-50/50 to-orange-50/50",
      strong: "bg-gradient-to-r from-amber-100/60 to-orange-100/60",
      dramatic: "bg-gradient-to-r from-amber-200/70 to-orange-200/70",
    },
    frame: {
      subtle: "border border-sophisticated/10 rounded-lg",
      moderate: "border border-sophisticated/20 rounded-xl shadow-sm",
      strong: "border-2 border-sophisticated/30 rounded-2xl shadow-md",
      dramatic: "border-2 border-sophisticated/40 rounded-2xl shadow-lg",
    },
    glow: {
      subtle: "shadow-[0_0_10px_rgba(59,130,246,0.1)]",
      moderate: "shadow-[0_0_20px_rgba(59,130,246,0.2)]",
      strong: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      dramatic: "shadow-[0_0_40px_rgba(59,130,246,0.4)]",
    },
    elevation: {
      subtle: "transform translate-y-[-1px] shadow-sm",
      moderate: "transform translate-y-[-2px] shadow-md",
      strong: "transform translate-y-[-4px] shadow-lg",
      dramatic: "transform translate-y-[-8px] shadow-xl",
    },
    invisible: {
      subtle: "",
      moderate: "",
      strong: "",
      dramatic: "",
    }
  }

  const animationClass = animated ? "transition-all duration-500 ease-out hover:scale-[1.01]" : ""

  return (
    <div 
      className={cn(
        styleEffects[style][intensity],
        animationClass,
        "relative",
        className
      )}
    >
      {children}
    </div>
  )
}
