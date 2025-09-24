// 🏛️ LANDOR EXPERIENCE ICON - Layered Perspective Lines
// Sophisticated kinetic icon representing multi-dimensional understanding
// Architectural sophistication meets luxury animation

"use client"

import React from "react"
import { motion } from "framer-motion"
import { LANDOR_EASING, LANDOR_TIMING } from "@/lib/landor-magnetic-system"

// 📐 MATHEMATICAL FOUNDATION
const GOLDEN_RATIO = 1.618
const PERSPECTIVE_ANGLES = {
  shallow: 15,    // Degrees for subtle depth
  medium: 25,     // Degrees for comfortable depth  
  deep: 35        // Degrees for dramatic depth
}

// 🎨 PERSPECTIVE LAYER SYSTEM
interface PerspectiveLayer {
  id: string
  depth: number          // Z-index simulation
  opacity: number        // Depth through transparency
  scale: number          // Perspective scaling
  offsetX: number        // Horizontal perspective offset
  strokeWidth: number    // Line weight for depth
}

const PERSPECTIVE_LAYERS: PerspectiveLayer[] = [
  {
    id: "foreground",
    depth: 3,
    opacity: 1.0,
    scale: 1.0,
    offsetX: 0,
    strokeWidth: 1.0
  },
  {
    id: "middle",
    depth: 2, 
    opacity: 0.7,
    scale: 0.85,
    offsetX: -4,
    strokeWidth: 0.7
  },
  {
    id: "background",
    depth: 1,
    opacity: 0.4,
    scale: 0.7,
    offsetX: -8,
    strokeWidth: 0.4
  },
  {
    id: "distant",
    depth: 0,
    opacity: 0.2,
    scale: 0.55,
    offsetX: -12,
    strokeWidth: 0.2
  }
]

// 🎭 ANIMATION VARIANTS
const perspectiveVariants = {
  idle: {
    rotateX: 0,
    rotateY: 0,
    scale: 1
  },
  breathing: {
    rotateX: [0, 2, 0],
    rotateY: [0, -1, 0],
    scale: [1, 1.02, 1]
  },
  hover: {
    rotateX: 5,
    rotateY: -3,
    scale: 1.08
  },
  magnetic: {
    rotateX: 8,
    rotateY: -5,
    scale: 1.12
  }
}

const layerVariants = {
  idle: (layer: PerspectiveLayer) => ({
    x: layer.offsetX,
    opacity: layer.opacity,
    scale: layer.scale
  }),
  breathing: (layer: PerspectiveLayer) => ({
    x: [layer.offsetX, layer.offsetX - 1, layer.offsetX],
    opacity: [layer.opacity, layer.opacity * 1.2, layer.opacity],
    scale: [layer.scale, layer.scale * 1.01, layer.scale]
  }),
  shift: (layer: PerspectiveLayer) => ({
    x: [layer.offsetX, layer.offsetX - 2, layer.offsetX + 1, layer.offsetX],
    opacity: [layer.opacity, layer.opacity * 1.3, layer.opacity * 0.8, layer.opacity]
  })
}

// 🧲 LANDOR EXPERIENCE ICON COMPONENT
interface LandorExperienceIconProps {
  size?: number
  breathing?: boolean
  interactive?: boolean
  magneticStrength?: "subtle" | "moderate" | "strong"
  className?: string
  style?: React.CSSProperties
}

export const LandorExperienceIcon: React.FC<LandorExperienceIconProps> = ({
  size = 48,
  breathing = true,
  interactive = true,
  magneticStrength = "moderate",
  className = "",
  style = {}
}) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 })
  
  // 🎯 Cursor tracking for magnetic personality
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!interactive) return
    
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    setCursorPosition({
      x: (event.clientX - centerX) / 10, // Dampened movement
      y: (event.clientY - centerY) / 10
    })
  }
  
  // 🎨 Dynamic magnetic rotation based on cursor
  const getMagneticRotation = () => {
    if (!interactive || !isHovered) return { rotateX: 0, rotateY: 0 }
    
    const intensity = magneticStrength === "subtle" ? 0.3 : 
                     magneticStrength === "moderate" ? 0.5 : 0.8
    
    return {
      rotateX: -cursorPosition.y * intensity,
      rotateY: cursorPosition.x * intensity
    }
  }
  
  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{
        perspective: "200px",
        transformStyle: "preserve-3d",
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial="idle"
      animate={isHovered ? "hover" : breathing ? "breathing" : "idle"}
      variants={perspectiveVariants}
      transition={{
        duration: breathing ? LANDOR_TIMING.luxury : LANDOR_TIMING.standard,
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
          filter: "drop-shadow(0 2px 8px hsla(var(--primary), 0.15))",
          transformStyle: "preserve-3d"
        }}
        animate={getMagneticRotation()}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        {/* 🏗️ PERSPECTIVE LAYERS - From distant to foreground */}
        {PERSPECTIVE_LAYERS.map((layer, index) => (
          <motion.g
            key={layer.id}
            initial="idle"
            animate={breathing ? "breathing" : "idle"}
            variants={layerVariants}
            custom={layer}
            transition={{
              duration: LANDOR_TIMING.luxury + (index * 0.2), // Staggered timing
              repeat: breathing ? Infinity : 0,
              ease: LANDOR_EASING.breathing,
              delay: index * 0.3 // Cascade effect
            }}
            style={{
              transformOrigin: "center center"
            }}
          >
            {/* Architectural Perspective Rectangle */}
            <motion.path
              d={`M${12 + layer.offsetX},${16} 
                  L${36 + layer.offsetX},${12} 
                  L${36 + layer.offsetX},${36} 
                  L${12 + layer.offsetX},${32} Z`}
              fill="none"
              stroke="currentColor"
              strokeWidth={layer.strokeWidth}
              opacity={layer.opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2 + (index * 0.5),
                ease: LANDOR_EASING.signature,
                delay: index * 0.2
              }}
            />
            
            {/* Interior Perspective Lines */}
            <motion.g
              opacity={layer.opacity * 0.7}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5 + (index * 0.3),
                ease: LANDOR_EASING.entrance,
                delay: 0.5 + (index * 0.15)
              }}
            >
              {/* Horizontal division */}
              <motion.path
                d={`M${12 + layer.offsetX},${24} L${36 + layer.offsetX},${22}`}
                stroke="currentColor"
                strokeWidth={layer.strokeWidth * 0.6}
                fill="none"
                animate={breathing ? {
                  pathLength: [0.8, 1, 0.8],
                  opacity: [layer.opacity * 0.5, layer.opacity * 0.9, layer.opacity * 0.5]
                } : {}}
                transition={{
                  duration: 4 + (index * 0.5),
                  repeat: breathing ? Infinity : 0,
                  ease: "easeInOut"
                }}
              />
              
              {/* Vertical divisions */}
              <motion.path
                d={`M${20 + layer.offsetX},${16} L${20 + layer.offsetX},${32}`}
                stroke="currentColor"
                strokeWidth={layer.strokeWidth * 0.4}
                fill="none"
                animate={breathing ? {
                  pathLength: [0.7, 1, 0.7],
                  opacity: [layer.opacity * 0.3, layer.opacity * 0.7, layer.opacity * 0.3]
                } : {}}
                transition={{
                  duration: 5 + (index * 0.3),
                  repeat: breathing ? Infinity : 0,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              <motion.path
                d={`M${28 + layer.offsetX},${14} L${28 + layer.offsetX},${34}`}
                stroke="currentColor"
                strokeWidth={layer.strokeWidth * 0.4}
                fill="none"
                animate={breathing ? {
                  pathLength: [0.6, 1, 0.6],
                  opacity: [layer.opacity * 0.2, layer.opacity * 0.6, layer.opacity * 0.2]
                } : {}}
                transition={{
                  duration: 6 + (index * 0.4),
                  repeat: breathing ? Infinity : 0,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.g>
            
            {/* Depth Indicator Points */}
            <motion.g opacity={layer.opacity * 0.8}>
              <motion.circle
                cx={24 + layer.offsetX}
                cy={24}
                r={layer.strokeWidth * 1.5}
                fill="currentColor"
                animate={breathing ? {
                  scale: [0.8, 1.2, 0.8],
                  opacity: [layer.opacity * 0.6, layer.opacity, layer.opacity * 0.6]
                } : {}}
                transition={{
                  duration: 3 + (index * 0.2),
                  repeat: breathing ? Infinity : 0,
                  ease: LANDOR_EASING.breathing,
                  delay: index * 0.4
                }}
              />
            </motion.g>
          </motion.g>
        ))}
        
        {/* 🌟 Luxury Glow Effect on Hover */}
        <motion.defs>
          <motion.filter id="experienceGlow">
            <motion.feGaussianBlur 
              stdDeviation="2" 
              result="coloredBlur"
              animate={isHovered ? {
                stdDeviation: [2, 4, 2]
              } : {}}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </motion.filter>
        </motion.defs>
        
        {/* Apply glow filter when hovered */}
        <motion.g
          filter={isHovered ? "url(#experienceGlow)" : "none"}
          animate={isHovered ? {
            opacity: [1, 0.8, 1]
          } : {}}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          {/* This group applies the glow to all elements */}
        </motion.g>
      </motion.svg>
      
      {/* 🎯 Magnetic Proximity Indicator */}
      {interactive && isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: LANDOR_EASING.breathing
          }}
          style={{
            background: `radial-gradient(circle, hsla(var(--primary), 0.1) 0%, transparent 70%)`,
            transform: `translate(${cursorPosition.x * 0.1}px, ${cursorPosition.y * 0.1}px)`
          }}
        />
      )}
    </motion.div>
  )
}

// 🎯 EXPORT VARIANTS
export default LandorExperienceIcon

// 📋 PRESET CONFIGURATIONS
export const ExperienceIconPresets = {
  // Subtle breathing for ambient use
  ambient: {
    size: 32,
    breathing: true,
    interactive: false,
    magneticStrength: "subtle" as const
  },
  
  // Interactive for service cards
  service: {
    size: 48,
    breathing: true,
    interactive: true,
    magneticStrength: "moderate" as const
  },
  
  // Hero size for section headers
  hero: {
    size: 64,
    breathing: true,
    interactive: true,
    magneticStrength: "strong" as const
  },
  
  // Static for print/export
  static: {
    size: 48,
    breathing: false,
    interactive: false,
    magneticStrength: "subtle" as const
  }
} as const

// 🎨 USAGE EXAMPLES
export const ExperienceIconExamples = {
  // Service card usage
  ServiceCard: () => (
    <LandorExperienceIcon {...ExperienceIconPresets.service} />
  ),
  
  // Hero section usage  
  HeroSection: () => (
    <LandorExperienceIcon 
      {...ExperienceIconPresets.hero}
      className="mx-auto mb-6"
    />
  ),
  
  // Ambient decoration
  Ambient: () => (
    <LandorExperienceIcon 
      {...ExperienceIconPresets.ambient}
      className="opacity-60"
    />
  )
}
