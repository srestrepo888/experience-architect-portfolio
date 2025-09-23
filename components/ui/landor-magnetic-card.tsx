"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  useMagneticCursor,
  LANDOR_EASING,
  LANDOR_TIMING,
  createEntranceOrchestration,
  GOLDEN_RATIO,
  getFibonacciSpacing
} from "@/lib/landor-magnetic-system"

// 🎨 LANDOR CARD VARIANTS WITH MATHEMATICAL PRECISION
interface LandorMagneticCardProps {
  children: React.ReactNode
  className?: string
  
  // Magnetic personality options
  magnetism?: "none" | "subtle" | "moderate" | "strong" | "magnetic"
  tiltEffect?: boolean
  glowEffect?: boolean
  
  // Layout and spacing (Golden Ratio based)
  padding?: "compact" | "comfortable" | "spacious" | "luxurious"
  elevation?: "flat" | "subtle" | "moderate" | "dramatic"
  
  // Animation orchestration
  entranceDelay?: number
  orchestrationIndex?: number
  
  // Interaction callbacks
  onClick?: () => void
  onHover?: (isHovered: boolean) => void
  
  // Accessibility
  role?: string
  tabIndex?: number
  "aria-label"?: string
}

// 📐 MATHEMATICAL SPACING SYSTEM
const CARD_SPACING = {
  compact: getFibonacciSpacing(3),    // 8px
  comfortable: getFibonacciSpacing(4), // 12px  
  spacious: getFibonacciSpacing(5),   // 20px
  luxurious: getFibonacciSpacing(6)   // 32px
} as const

// 🌟 ELEVATION SYSTEM WITH LUXURY SHADOWS
const CARD_ELEVATION = {
  flat: "shadow-none",
  subtle: "shadow-sm hover:shadow-md",
  moderate: "shadow-lg hover:shadow-xl",
  dramatic: "shadow-xl hover:shadow-2xl"
} as const

// 🧲 LANDOR MAGNETIC CARD COMPONENT
export const LandorMagneticCard = React.forwardRef<
  HTMLDivElement,
  LandorMagneticCardProps
>(
  (
    {
      children,
      className,
      magnetism = "moderate",
      tiltEffect = true,
      glowEffect = false,
      padding = "comfortable",
      elevation = "moderate",
      entranceDelay = 0,
      orchestrationIndex = 0,
      onClick,
      onHover,
      role,
      tabIndex,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    
    // 🧲 Magnetic cursor interaction with 3D tilt
    const magnetic = useMagneticCursor(magnetism === "none" ? "subtle" : magnetism)
    
    // 🎯 Entrance orchestration with mathematical delay
    const entranceAnimation = createEntranceOrchestration(orchestrationIndex, 6)
    
    // 🎪 Sophisticated hover animation with 3D personality
    const hoverAnimation = {
      whileHover: tiltEffect ? {
        scale: magnetism === "none" ? 1 : 
               magnetism === "subtle" ? 1.005 :
               magnetism === "moderate" ? 1.01 :
               magnetism === "strong" ? 1.02 : 1.03,
        y: -getFibonacciSpacing(2), // -8px lift
        rotateX: 2,
        rotateY: magnetic.isHovered ? 3 : 0,
        transition: {
          duration: LANDOR_TIMING.sophisticated,
          ease: LANDOR_EASING.silk
        }
      } : {
        scale: magnetism === "none" ? 1 : 
               magnetism === "subtle" ? 1.005 :
               magnetism === "moderate" ? 1.01 : 1.02,
        y: -4,
        transition: {
          duration: LANDOR_TIMING.standard,
          ease: LANDOR_EASING.signature
        }
      },
      
      whileTap: onClick ? {
        scale: 0.995,
        y: -2,
        transition: {
          duration: LANDOR_TIMING.instant,
          ease: LANDOR_EASING.magnetic
        }
      } : undefined
    }
    
    // 🌊 Handle hover state changes
    React.useEffect(() => {
      if (onHover) {
        onHover(magnetic.isHovered)
      }
    }, [magnetic.isHovered, onHover])
    
    // 🎨 Dynamic styling based on props
    const cardStyle = {
      x: magnetic.x,
      y: magnetic.y,
      padding: `${CARD_SPACING[padding]}px`,
      transformStyle: "preserve-3d" as const,
      perspective: "1000px",
      
      // Luxury glow effect
      ...(glowEffect && magnetic.isHovered && {
        boxShadow: "0 0 30px rgba(0, 0, 0, 0.1), 0 0 60px rgba(0, 0, 0, 0.05)"
      })
    }
    
    const isInteractive = Boolean(onClick)
    
    return (
      <motion.div
        ref={magnetic.ref}
        className={cn(
          // Base card styles with luxury foundation
          "relative bg-background/80 backdrop-blur-sm",
          "border border-border/50 rounded-2xl",
          "transition-all duration-300",
          CARD_ELEVATION[elevation],
          
          // Interactive states
          isInteractive && [
            "cursor-pointer select-none",
            "hover:border-border/80",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-foreground/20 focus-visible:ring-offset-2"
          ],
          
          // Performance optimizations
          "transform-gpu will-change-transform",
          
          className
        )}
        style={cardStyle}
        onClick={onClick}
        onKeyDown={(e) => {
          if (onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault()
            onClick()
          }
        }}
        role={role || (isInteractive ? "button" : undefined)}
        tabIndex={tabIndex ?? (isInteractive ? 0 : undefined)}
        aria-label={ariaLabel}
        {...entranceAnimation}
        {...hoverAnimation}
        {...props}
      >
        {/* Luxury shimmer effect on hover */}
        {magnetism !== "none" && (
          <motion.div
            className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none"
            initial={{ opacity: 0, x: "-100%" }}
            animate={magnetic.isHovered ? {
              opacity: [0, 1, 0],
              x: ["100%", "200%"]
            } : {}}
            transition={{
              duration: 1.5,
              ease: LANDOR_EASING.silk
            }}
          />
        )}
        
        {/* Card content with proper spacing */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Sophisticated border glow on hover */}
        {glowEffect && (
          <motion.div
            className="absolute inset-0 rounded-[inherit] border border-foreground/20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: magnetic.isHovered ? 1 : 0 }}
            transition={{
              duration: LANDOR_TIMING.standard,
              ease: LANDOR_EASING.signature
            }}
          />
        )}
      </motion.div>
    )
  }
)

LandorMagneticCard.displayName = "LandorMagneticCard"

// 🎯 SPECIALIZED CARD VARIANTS

// Project showcase card with maximum sophistication
export const LandorProjectCard = React.forwardRef<
  HTMLDivElement,
  Omit<LandorMagneticCardProps, 'magnetism' | 'tiltEffect' | 'glowEffect'>
>((props, ref) => (
  <LandorMagneticCard
    ref={ref}
    magnetism="strong"
    tiltEffect={true}
    glowEffect={true}
    elevation="dramatic"
    padding="spacious"
    {...props}
  />
))

// Service card with moderate magnetism
export const LandorServiceCard = React.forwardRef<
  HTMLDivElement,
  Omit<LandorMagneticCardProps, 'magnetism' | 'elevation'>
>((props, ref) => (
  <LandorMagneticCard
    ref={ref}
    magnetism="moderate"
    elevation="moderate"
    padding="comfortable"
    {...props}
  />
))

// Experience timeline card with subtle effects
export const LandorTimelineCard = React.forwardRef<
  HTMLDivElement,
  Omit<LandorMagneticCardProps, 'magnetism' | 'tiltEffect'>
>((props, ref) => (
  <LandorMagneticCard
    ref={ref}
    magnetism="subtle"
    tiltEffect={false}
    elevation="subtle"
    padding="comfortable"
    {...props}
  />
))

// Luxury feature card with maximum magnetism
export const LandorLuxuryCard = React.forwardRef<
  HTMLDivElement,
  Omit<LandorMagneticCardProps, 'magnetism' | 'padding' | 'elevation'>
>((props, ref) => (
  <LandorMagneticCard
    ref={ref}
    magnetism="magnetic"
    padding="luxurious"
    elevation="dramatic"
    glowEffect={true}
    {...props}
  />
))

LandorProjectCard.displayName = "LandorProjectCard"
LandorServiceCard.displayName = "LandorServiceCard"
LandorTimelineCard.displayName = "LandorTimelineCard"
LandorLuxuryCard.displayName = "LandorLuxuryCard"

export default LandorMagneticCard
