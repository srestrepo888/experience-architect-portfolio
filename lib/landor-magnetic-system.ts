/**
 * 🧲 LANDOR MAGNETIC INTERACTION SYSTEM
 * 
 * Sophisticated micro-interactions with magnetic personality and luxury timing.
 * Based on Landor's design principles of mathematical precision and elegant restraint.
 * 
 * Core Principles:
 * - Magnetic Attraction: Elements subtly respond to cursor proximity
 * - Luxury Timing: Signature easing curves that feel expensive
 * - Intelligent Feedback: Context-aware responses with perfect timing
 * - Mathematical Precision: Golden ratio and fibonacci-based values
 */

import { useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// 🎯 LANDOR SIGNATURE EASING CURVES
export const LANDOR_EASING = {
  // Primary signature curve - luxury feel
  signature: [0.16, 1, 0.3, 1] as const,
  
  // Silk-like smoothness for premium interactions  
  silk: [0.25, 0.46, 0.45, 0.94] as const,
  
  // Magnetic attraction with subtle bounce
  magnetic: [0.68, -0.55, 0.265, 1.55] as const,
  
  // Sophisticated entrance - confident yet elegant
  entrance: [0.215, 0.61, 0.355, 1] as const,
  
  // Luxury exit - graceful departure
  exit: [0.55, 0.055, 0.675, 0.19] as const,
  
  // Breathing rhythm - organic life
  breathe: [0.37, 0, 0.63, 1] as const
} as const

// ⏱️ LUXURY TIMING SYSTEM
export const LANDOR_TIMING = {
  // Micro-interactions - instant feedback
  instant: 0.15,
  
  // Standard interactions - luxury feel
  standard: 0.4,
  
  // Sophisticated transitions - considered movement
  sophisticated: 0.6,
  
  // Dramatic reveals - commanding presence
  dramatic: 0.8,
  
  // Breathing cycles - organic rhythm
  breathe: 3.0,
  
  // Magnetic attraction - responsive feel
  magnetic: 0.25
} as const

// 🧲 MAGNETIC INTERACTION STRENGTHS
export const MAGNETIC_STRENGTH = {
  subtle: {
    distance: 100,    // Activation distance in pixels
    attraction: 0.15, // Movement intensity (0-1)
    scale: 1.01,      // Scale on proximity
    glow: 0.05        // Glow intensity
  },
  
  moderate: {
    distance: 120,
    attraction: 0.25,
    scale: 1.02,
    glow: 0.08
  },
  
  strong: {
    distance: 150,
    attraction: 0.35,
    scale: 1.03,
    glow: 0.12
  },
  
  magnetic: {
    distance: 200,
    attraction: 0.5,
    scale: 1.05,
    glow: 0.15
  }
} as const

// 🎨 SOPHISTICATED INTERACTION TYPES
export const INTERACTION_TYPES = {
  // Magnetic hover with luxury timing
  magneticHover: {
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: LANDOR_TIMING.standard,
        ease: LANDOR_EASING.signature
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: LANDOR_TIMING.instant,
        ease: LANDOR_EASING.magnetic
      }
    }
  },

  // Luxury button with breathing effect
  luxuryButton: {
    hover: {
      scale: 1.02,
      y: -3,
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: LANDOR_TIMING.standard,
        ease: LANDOR_EASING.signature
      }
    },
    tap: {
      scale: 0.97,
      y: -1,
      transition: {
        duration: LANDOR_TIMING.instant,
        ease: LANDOR_EASING.magnetic
      }
    }
  },

  // Sophisticated card with magnetic personality
  magneticCard: {
    hover: {
      scale: 1.01,
      y: -4,
      rotateX: 2,
      rotateY: 2,
      transition: {
        duration: LANDOR_TIMING.sophisticated,
        ease: LANDOR_EASING.silk
      }
    }
  },

  // Elegant navigation with cursor attraction
  magneticNavigation: {
    hover: {
      scale: 1.05,
      x: 2,
      transition: {
        duration: LANDOR_TIMING.magnetic,
        ease: LANDOR_EASING.signature
      }
    }
  }
} as const

// 🧲 MAGNETIC CURSOR HOOK
export function useMagneticCursor(strength: keyof typeof MAGNETIC_STRENGTH = 'moderate') {
  const ref = useRef<HTMLElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Motion values for smooth magnetic movement
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring configuration for luxury feel
  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.5
  }
  
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  const config = MAGNETIC_STRENGTH[strength]

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      )

      if (distance < config.distance) {
        const attraction = 1 - (distance / config.distance)
        const moveX = (e.clientX - centerX) * config.attraction * attraction
        const moveY = (e.clientY - centerY) * config.attraction * attraction
        
        x.set(moveX)
        y.set(moveY)
        setIsHovered(true)
      } else {
        x.set(0)
        y.set(0)
        setIsHovered(false)
      }
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
      setIsHovered(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [x, y, config])

  return {
    ref,
    x: springX,
    y: springY,
    isHovered,
    scale: isHovered ? config.scale : 1
  }
}

// ✨ LUXURY BREATHING EFFECT HOOK
export function useBreathingEffect(enabled: boolean = true) {
  return enabled ? {
    animate: {
      scale: [1, 1.01, 1],
      opacity: [0.95, 1, 0.95]
    },
    transition: {
      duration: LANDOR_TIMING.breathe,
      repeat: Infinity,
      ease: LANDOR_EASING.breathe
    }
  } : {}
}

// 🎭 SOPHISTICATED RIPPLE EFFECT
export function createLuxuryRipple(color: string = "rgba(255, 255, 255, 0.3)") {
  return {
    whileTap: {
      background: [
        `radial-gradient(circle, ${color} 0%, transparent 0%)`,
        `radial-gradient(circle, ${color} 40%, transparent 70%)`
      ],
      transition: {
        duration: 0.6,
        ease: LANDOR_EASING.signature
      }
    }
  }
}

// 🌟 MAGNETIC GLOW EFFECT
export function useMagneticGlow(strength: keyof typeof MAGNETIC_STRENGTH = 'moderate') {
  const { isHovered } = useMagneticCursor(strength)
  const glowIntensity = MAGNETIC_STRENGTH[strength].glow
  
  return {
    boxShadow: isHovered 
      ? `0 0 30px rgba(255, 255, 255, ${glowIntensity}), 0 0 60px rgba(255, 255, 255, ${glowIntensity * 0.5})`
      : "none",
    transition: `box-shadow ${LANDOR_TIMING.standard}s ${LANDOR_EASING.signature.join(', ')}`
  }
}

// 🎯 ORCHESTRATED ENTRANCE ANIMATION
export function createEntranceOrchestration(index: number, total: number) {
  const delay = (index / total) * 0.1 // Staggered by 100ms
  
  return {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    transition: {
      duration: LANDOR_TIMING.sophisticated,
      delay,
      ease: LANDOR_EASING.entrance
    }
  }
}

// 🎪 SMART HOVER ORCHESTRATION
export function createHoverOrchestration(type: 'button' | 'card' | 'navigation' | 'custom' = 'button') {
  const baseConfig = {
    button: INTERACTION_TYPES.luxuryButton,
    card: INTERACTION_TYPES.magneticCard,
    navigation: INTERACTION_TYPES.magneticNavigation,
    custom: INTERACTION_TYPES.magneticHover
  }
  
  return baseConfig[type]
}

// 🧮 MATHEMATICAL PRECISION HELPERS
export const GOLDEN_RATIO = 1.618
export const FIBONACCI_SEQUENCE = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Mathematical spacing based on Fibonacci
export function getFibonacciSpacing(index: number): number {
  return FIBONACCI_SEQUENCE[Math.min(index, FIBONACCI_SEQUENCE.length - 1)] * 4 // 4px base unit
}

// Golden ratio proportions for luxury layouts
export function getGoldenRatioSize(baseSize: number, level: number = 1): number {
  return baseSize * Math.pow(GOLDEN_RATIO, level)
}

// 🎨 LANDOR SIGNATURE EFFECTS COLLECTION
export const LANDOR_EFFECTS = {
  // Magnetic button with breathing - NOTE: Use these in components, not as direct function calls
  magneticButton: (strength: keyof typeof MAGNETIC_STRENGTH = 'moderate') => ({
    ...createHoverOrchestration('button'),
    ...createLuxuryRipple()
    // Note: useBreathingEffect must be called in component, not here
  }),
  
  // Sophisticated card with 3D tilt
  sophisticatedCard: {
    whileHover: {
      scale: 1.01,
      y: -6,
      rotateX: 3,
      rotateY: 3,
      transition: {
        duration: LANDOR_TIMING.sophisticated,
        ease: LANDOR_EASING.silk
      }
    }
  },
  
  // Elegant navigation item
  elegantNavigation: {
    whileHover: {
      scale: 1.05,
      x: 3,
      transition: {
        duration: LANDOR_TIMING.magnetic,
        ease: LANDOR_EASING.signature
      }
    }
  },
  
  // Luxury text reveal
  luxuryTextReveal: (delay: number = 0) => ({
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)"
    },
    transition: {
      duration: LANDOR_TIMING.sophisticated,
      delay,
      ease: LANDOR_EASING.entrance
    }
  })
} as const

export default {
  LANDOR_EASING,
  LANDOR_TIMING,
  MAGNETIC_STRENGTH,
  INTERACTION_TYPES,
  useMagneticCursor,
  useBreathingEffect,
  createLuxuryRipple,
  useMagneticGlow,
  createEntranceOrchestration,
  createHoverOrchestration,
  LANDOR_EFFECTS,
  GOLDEN_RATIO,
  getFibonacciSpacing,
  getGoldenRatioSize
}
