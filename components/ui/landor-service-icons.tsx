// 🏛️ LANDOR SERVICE ICONS - Complete Sophisticated Icon System
// Architectural masterpieces that breathe with magnetic personality
// Each icon is a kinetic art installation

"use client"

import React from "react"
import { motion } from "framer-motion"
import { LANDOR_EASING, LANDOR_TIMING } from "@/lib/landor-magnetic-system"

// 📐 SHARED MATHEMATICAL FOUNDATION
const GOLDEN_RATIO = 1.618
const FIBONACCI_SEQUENCE = [1, 1, 2, 3, 5, 8, 13, 21]

// 🎭 SHARED ANIMATION SYSTEM
interface BaseIconProps {
  size?: number
  breathing?: boolean
  interactive?: boolean
  magneticStrength?: "subtle" | "moderate" | "strong"
  className?: string
  style?: React.CSSProperties
}

const baseIconVariants = {
  idle: { scale: 1, rotate: 0 },
  breathing: {
    scale: [1, 1.05, 1],
    rotate: [0, 1, 0]
  },
  hover: {
    scale: 1.08,
    rotate: 2
  }
}

// 🌟 1. STRATEGY ICON - Crystalline Constellation
export const LandorStrategyIcon: React.FC<BaseIconProps> = ({
  size = 48,
  breathing = true,
  interactive = true,
  magneticStrength = "moderate",
  className = "",
  style = {}
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="idle"
      animate={isHovered ? "hover" : breathing ? "breathing" : "idle"}
      variants={baseIconVariants}
      transition={{
        duration: LANDOR_TIMING.luxury,
        repeat: breathing ? Infinity : 0,
        ease: LANDOR_EASING.breathing
      }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        className="text-primary"
        style={{
          filter: isHovered 
            ? "drop-shadow(0 0 16px hsla(var(--primary), 0.4))"
            : "drop-shadow(0 0 8px hsla(var(--primary), 0.2))"
        }}
      >
        {/* Central Strategic Node */}
        <motion.circle
          cx="24"
          cy="24"
          r="2.5"
          fill="currentColor"
          animate={breathing ? {
            r: [2.5, 3, 2.5],
            opacity: [0.9, 1, 0.9]
          } : {}}
          transition={{
            duration: 3,
            repeat: breathing ? Infinity : 0,
            ease: LANDOR_EASING.breathing
          }}
        />
        
        {/* Constellation Nodes - Positioned using Golden Ratio */}
        {[
          { x: 12, y: 12, delay: 0 },
          { x: 36, y: 12, delay: 0.2 },
          { x: 12, y: 36, delay: 0.4 },
          { x: 36, y: 36, delay: 0.6 },
          { x: 24, y: 8, delay: 0.8 },
          { x: 8, y: 24, delay: 1.0 },
          { x: 40, y: 24, delay: 1.2 }
        ].map((node, index) => (
          <motion.circle
            key={index}
            cx={node.x}
            cy={node.y}
            r="1.5"
            fill="currentColor"
            opacity="0.7"
            animate={breathing ? {
              r: [1.5, 2, 1.5],
              opacity: [0.5, 0.9, 0.5]
            } : {}}
            transition={{
              duration: 3.5,
              repeat: breathing ? Infinity : 0,
              ease: LANDOR_EASING.breathing,
              delay: node.delay
            }}
          />
        ))}
        
        {/* Strategic Connection Paths */}
        <motion.g
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: isHovered ? 0.8 : 0.5 
          }}
          transition={{
            duration: 2,
            ease: LANDOR_EASING.signature
          }}
        >
          <motion.path
            d="M24,24 L12,12 M24,24 L36,12 M24,24 L12,36 M24,24 L36,36 M24,24 L24,8 M24,24 L8,24 M24,24 L40,24"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            animate={breathing ? {
              pathLength: [0.8, 1, 0.8],
              opacity: [0.3, 0.7, 0.3]
            } : {}}
            transition={{
              duration: 4,
              repeat: breathing ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </motion.g>
        
        {/* Pulsing Energy Waves */}
        <motion.circle
          cx="24"
          cy="24"
          r="0"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0"
          animate={breathing ? {
            r: [0, 20, 30],
            opacity: [0.8, 0.3, 0],
            strokeWidth: [1, 0.3, 0]
          } : {}}
          transition={{
            duration: 4,
            repeat: breathing ? Infinity : 0,
            ease: LANDOR_EASING.signature
          }}
        />
      </motion.svg>
    </motion.div>
  )
}

// 🎨 2. DESIGN ICON - Architectural Blueprint Fragment
export const LandorDesignIcon: React.FC<BaseIconProps> = ({
  size = 48,
  breathing = true,
  interactive = true,
  magneticStrength = "moderate",
  className = "",
  style = {}
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="idle"
      animate={isHovered ? "hover" : breathing ? "breathing" : "idle"}
      variants={baseIconVariants}
      transition={{
        duration: LANDOR_TIMING.luxury + 0.2,
        repeat: breathing ? Infinity : 0,
        ease: LANDOR_EASING.breathing,
        delay: 0.5
      }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        className="text-primary"
        style={{
          filter: isHovered 
            ? "drop-shadow(0 0 16px hsla(var(--primary), 0.4))"
            : "drop-shadow(0 0 8px hsla(var(--primary), 0.2))"
        }}
      >
        {/* Main Golden Ratio Rectangle */}
        <motion.rect
          x="8"
          y="15"
          width="32"
          height={32 / GOLDEN_RATIO}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          rx="2"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            strokeWidth: isHovered ? 1.2 : 0.8
          }}
          transition={{
            duration: 1.5,
            ease: LANDOR_EASING.signature
          }}
        />
        
        {/* Interior Blueprint Grid */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          transition={{ duration: 0.5 }}
        >
          {/* Primary divisions */}
          <motion.path
            d="M8,24 L40,24 M20,15 L20,33 M28,15 L28,33"
            stroke="currentColor"
            strokeWidth="0.4"
            animate={breathing ? {
              pathLength: [0.7, 1, 0.7],
              opacity: [0.4, 0.8, 0.4]
            } : {}}
            transition={{
              duration: 6,
              repeat: breathing ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary grid */}
          <motion.path
            d="M14,15 L14,33 M34,15 L34,33 M8,19.5 L40,19.5 M8,28.5 L40,28.5"
            stroke="currentColor"
            strokeWidth="0.2"
            opacity="0.5"
            animate={breathing ? {
              pathLength: [0.5, 1, 0.5],
              opacity: [0.3, 0.7, 0.3]
            } : {}}
            transition={{
              duration: 8,
              repeat: breathing ? Infinity : 0,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.g>
        
        {/* Architectural Dimension Lines */}
        <motion.g
          opacity="0.6"
          animate={breathing ? {
            opacity: [0.4, 0.8, 0.4]
          } : {}}
          transition={{
            duration: 5,
            repeat: breathing ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          {/* Horizontal dimensions */}
          <line x1="6" y1="15" x2="10" y2="15" stroke="currentColor" strokeWidth="0.3" />
          <line x1="6" y1="33" x2="10" y2="33" stroke="currentColor" strokeWidth="0.3" />
          <line x1="8" y1="13" x2="8" y2="17" stroke="currentColor" strokeWidth="0.3" />
          
          {/* Vertical dimensions */}
          <line x1="40" y1="13" x2="40" y2="17" stroke="currentColor" strokeWidth="0.3" />
          <line x1="38" y1="15" x2="42" y2="15" stroke="currentColor" strokeWidth="0.3" />
          <line x1="38" y1="33" x2="42" y2="33" stroke="currentColor" strokeWidth="0.3" />
        </motion.g>
        
        {/* Blueprint Drawing Animation */}
        <motion.path
          d="M12,19 L16,19 L16,23 M32,25 L36,25 L36,29"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isHovered ? 1 : 0.7 }}
          transition={{
            duration: 2,
            ease: LANDOR_EASING.signature,
            delay: 0.5
          }}
        />
      </motion.svg>
    </motion.div>
  )
}

// 🔄 3. INNOVATION ICON - Morphing Geometric Form
export const LandorInnovationIcon: React.FC<BaseIconProps> = ({
  size = 48,
  breathing = true,
  interactive = true,
  magneticStrength = "moderate",
  className = "",
  style = {}
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [morphState, setMorphState] = React.useState(0)
  
  React.useEffect(() => {
    if (!breathing) return
    
    const interval = setInterval(() => {
      setMorphState(prev => (prev + 1) % 3)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [breathing])
  
  const morphPaths = [
    // Hexagon
    "M24,8 L34,14 L34,26 L24,32 L14,26 L14,14 Z",
    // Octagon
    "M24,10 L30,10 L34,14 L34,20 L30,24 L24,24 L18,24 L14,20 L14,14 L18,10 Z",
    // Circle (approximated with many sides)
    "M24,8 A16,16 0 1,1 23.9,8 Z"
  ]
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="idle"
      animate={isHovered ? "hover" : breathing ? "breathing" : "idle"}
      variants={baseIconVariants}
      transition={{
        duration: LANDOR_TIMING.luxury - 0.2,
        repeat: breathing ? Infinity : 0,
        ease: LANDOR_EASING.breathing,
        delay: 1.0
      }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        className="text-primary"
        style={{
          filter: isHovered 
            ? "drop-shadow(0 0 16px hsla(var(--primary), 0.4))"
            : "drop-shadow(0 0 8px hsla(var(--primary), 0.2))"
        }}
      >
        {/* Morphing Shape */}
        <motion.path
          d={morphPaths[morphState]}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          animate={{
            d: morphPaths[morphState],
            strokeWidth: isHovered ? 1.5 : 1
          }}
          transition={{
            duration: 2,
            ease: LANDOR_EASING.signature
          }}
        />
        
        {/* Inner Transformation Indicator */}
        <motion.circle
          cx="24"
          cy="20"
          r="2"
          fill="currentColor"
          opacity="0.7"
          animate={breathing ? {
            r: [1.5, 2.5, 1.5],
            cy: [20, 24, 20],
            opacity: [0.5, 0.9, 0.5]
          } : {}}
          transition={{
            duration: 3,
            repeat: breathing ? Infinity : 0,
            ease: LANDOR_EASING.breathing
          }}
        />
        
        {/* Transformation Particles */}
        {[0, 1, 2].map((index) => (
          <motion.circle
            key={index}
            cx={20 + index * 4}
            cy={28}
            r="0.5"
            fill="currentColor"
            opacity="0"
            animate={breathing ? {
              opacity: [0, 0.8, 0],
              cy: [28, 24, 20],
              r: [0.5, 1, 0.5]
            } : {}}
            transition={{
              duration: 2,
              repeat: breathing ? Infinity : 0,
              ease: LANDOR_EASING.signature,
              delay: index * 0.3
            }}
          />
        ))}
      </motion.svg>
    </motion.div>
  )
}

// 🏛️ 4. EXPERIENCE ICON - Import from dedicated component
import { LandorExperienceIcon } from "./landor-experience-icon"

// 📋 COMPLETE ICON SYSTEM EXPORT
export const LandorServiceIcons = {
  Strategy: LandorStrategyIcon,
  Design: LandorDesignIcon,
  Innovation: LandorInnovationIcon,
  Experience: LandorExperienceIcon
} as const

// 🎯 BREATHING ORCHESTRATION SYSTEM
export const createIconOrchestration = (icons: string[]) => {
  return icons.map((icon, index) => ({
    icon,
    delay: index * 0.5, // 500ms stagger
    duration: 3 + (index * 0.2), // Varied breathing duration
    intensity: 1.04 + (index * 0.01) // Slightly different intensities
  }))
}

// 🎨 PRESET CONFIGURATIONS
export const ServiceIconPresets = {
  // For service cards
  serviceCard: {
    size: 48,
    breathing: true,
    interactive: true,
    magneticStrength: "moderate" as const
  },
  
  // For hero sections
  hero: {
    size: 64,
    breathing: true,
    interactive: true,
    magneticStrength: "strong" as const
  },
  
  // For subtle decoration
  ambient: {
    size: 32,
    breathing: true,
    interactive: false,
    magneticStrength: "subtle" as const
  }
} as const

// 🎯 DEFAULT EXPORT
export default LandorServiceIcons
