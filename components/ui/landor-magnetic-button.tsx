"use client"

import React from "react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { 
  useMagneticCursor, 
  useBreathingEffect, 
  createLuxuryRipple,
  LANDOR_EASING,
  LANDOR_TIMING,
  LANDOR_EFFECTS
} from "@/lib/landor-magnetic-system"

// 🎨 LANDOR BUTTON VARIANTS WITH MATHEMATICAL PRECISION
const landorButtonVariants = cva(
  [
    // Base styles with luxury foundation
    "relative inline-flex items-center justify-center",
    "font-medium tracking-[0.02em] transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "overflow-hidden cursor-pointer select-none",
    "transform-gpu will-change-transform" // Performance optimization
  ],
  {
    variants: {
      variant: {
        // Primary - Landor's signature luxury button
        primary: [
          "bg-foreground text-background",
          "hover:bg-foreground/90",
          "focus-visible:ring-foreground/50",
          "shadow-lg hover:shadow-xl",
          "border border-foreground/10"
        ],
        
        // Luxury - Premium gold accent (Golden ratio inspired)
        luxury: [
          "bg-gradient-to-r from-amber-600 to-amber-500",
          "text-white font-semibold",
          "hover:from-amber-500 hover:to-amber-400",
          "shadow-lg hover:shadow-amber-500/25",
          "border border-amber-400/20"
        ],
        
        // Sophisticated - Elegant outline with magnetic personality
        sophisticated: [
          "bg-transparent border-2 border-foreground/20",
          "text-foreground hover:bg-foreground/5",
          "hover:border-foreground/40",
          "focus-visible:ring-foreground/30"
        ],
        
        // Ghost - Minimal with maximum sophistication
        ghost: [
          "bg-transparent text-foreground/80",
          "hover:bg-foreground/5 hover:text-foreground",
          "focus-visible:ring-foreground/20"
        ],
        
        // Magnetic - Special interactive variant
        magnetic: [
          "bg-gradient-to-r from-slate-900 to-slate-800",
          "text-white border border-slate-700/50",
          "hover:from-slate-800 hover:to-slate-700",
          "shadow-lg hover:shadow-slate-900/30"
        ]
      },
      
      size: {
        // Mathematical progression based on Golden Ratio
        sm: "h-9 px-4 text-sm rounded-lg", // 36px height
        md: "h-11 px-6 text-base rounded-xl", // 44px height  
        lg: "h-14 px-8 text-lg rounded-xl", // 56px height
        xl: "h-16 px-10 text-xl rounded-2xl", // 64px height
        icon: "h-11 w-11 rounded-xl"
      },
      
      magnetism: {
        none: "",
        subtle: "hover:scale-[1.01]",
        moderate: "hover:scale-[1.02]", 
        strong: "hover:scale-[1.03]",
        magnetic: "hover:scale-[1.05]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md", 
      magnetism: "moderate"
    }
  }
)

// 🧲 LANDOR MAGNETIC BUTTON INTERFACE
interface LandorMagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof landorButtonVariants> {
  
  // Core functionality
  href?: string
  external?: boolean
  download?: string | boolean
  
  // Landor-specific enhancements
  magnetism?: "none" | "subtle" | "moderate" | "strong" | "magnetic"
  breathing?: boolean
  rippleEffect?: boolean
  glowOnHover?: boolean
  
  // Advanced interactions
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  loading?: boolean
  loadingText?: string
  
  // Animation orchestration
  entranceDelay?: number
  orchestrationIndex?: number
  
  children: React.ReactNode
}

// 🎭 LANDOR MAGNETIC BUTTON COMPONENT
export const LandorMagneticButton = React.forwardRef<
  HTMLButtonElement,
  LandorMagneticButtonProps
>(
  (
    {
      className,
      variant,
      size,
      magnetism = "moderate",
      breathing = false,
      rippleEffect = true,
      glowOnHover = false,
      href,
      external = false,
      download,
      icon,
      iconPosition = "right",
      loading = false,
      loadingText = "Loading...",
      entranceDelay = 0,
      orchestrationIndex = 0,
      disabled,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    
    // 🧲 Magnetic cursor interaction
    const magnetic = useMagneticCursor(magnetism === "none" ? "subtle" : magnetism)
    
    // ✨ Breathing effect for primary buttons
    const breathingAnimation = useBreathingEffect(
      breathing && !loading && variant === "primary"
    )
    
    // 🌊 Luxury ripple effect
    const rippleAnimation = rippleEffect ? createLuxuryRipple(
      variant === "primary" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)"
    ) : {}
    
    // 🎯 Entrance orchestration
    const entranceAnimation = {
      initial: { opacity: 0, y: 20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: {
        duration: LANDOR_TIMING.sophisticated,
        delay: entranceDelay + (orchestrationIndex * 0.1),
        ease: LANDOR_EASING.entrance
      }
    }
    
    // 🎪 Hover orchestration based on variant
    const hoverAnimation = {
      whileHover: {
        scale: magnetism === "none" ? 1 : 
               magnetism === "subtle" ? 1.01 :
               magnetism === "moderate" ? 1.02 :
               magnetism === "strong" ? 1.03 : 1.05,
        y: -2,
        transition: {
          duration: LANDOR_TIMING.standard,
          ease: LANDOR_EASING.signature
        }
      },
      whileTap: {
        scale: 0.98,
        y: 0,
        transition: {
          duration: LANDOR_TIMING.instant,
          ease: LANDOR_EASING.magnetic
        }
      }
    }
    
    // 🎨 Dynamic glow effect
    const glowStyle = glowOnHover ? {
      filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))"
    } : {}
    
    const isDisabled = disabled || loading
    
    // 📱 Button content with sophisticated loading state
    const buttonContent = (
      <>
        {/* Luxury loading spinner */}
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-inherit rounded-[inherit]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: LANDOR_TIMING.standard }}
          >
            <motion.div
              className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {loadingText && (
              <span className="ml-2 text-sm font-medium">
                {loadingText}
              </span>
            )}
          </motion.div>
        )}
        
        {/* Button content with icon orchestration */}
        <div className={cn(
          "flex items-center justify-center gap-2 transition-opacity",
          loading && "opacity-0"
        )}>
          {icon && iconPosition === "left" && (
            <motion.span
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: LANDOR_TIMING.standard,
                delay: entranceDelay + 0.1,
                ease: LANDOR_EASING.signature 
              }}
            >
              {icon}
            </motion.span>
          )}
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: LANDOR_TIMING.standard,
              delay: entranceDelay + 0.05,
              ease: LANDOR_EASING.entrance
            }}
          >
            {children}
          </motion.span>
          
          {icon && iconPosition === "right" && (
            <motion.span
              className="flex items-center"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: LANDOR_TIMING.standard,
                delay: entranceDelay + 0.1,
                ease: LANDOR_EASING.signature 
              }}
            >
              {icon}
            </motion.span>
          )}
        </div>
        
        {/* Sophisticated ripple overlay */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          {...rippleAnimation}
        />
        
        {/* Luxury shimmer effect for primary buttons */}
        {variant === "primary" && !loading && (
          <motion.div
            className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: LANDOR_EASING.silk
            }}
          />
        )}
      </>
    )
    
    // 🔗 Link vs Button rendering
    if (href) {
      const linkProps = {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
        download: download || undefined
      }
      
      return (
        <motion.a
          ref={magnetic.ref as any}
          className={cn(landorButtonVariants({ variant, size, magnetism }), className)}
          style={{ 
            x: magnetic.x, 
            y: magnetic.y,
            ...glowStyle 
          }}
          {...entranceAnimation}
          {...hoverAnimation}
          {...breathingAnimation}
          {...linkProps}
          {...(props as any)}
        >
          {buttonContent}
        </motion.a>
      )
    }
    
    return (
      <motion.button
        ref={magnetic.ref as any}
        className={cn(landorButtonVariants({ variant, size, magnetism }), className)}
        style={{ 
          x: magnetic.x, 
          y: magnetic.y,
          ...glowStyle 
        }}
        disabled={isDisabled}
        onClick={onClick}
        {...entranceAnimation}
        {...hoverAnimation}
        {...breathingAnimation}
        {...props}
      >
        {buttonContent}
      </motion.button>
    )
  }
)

LandorMagneticButton.displayName = "LandorMagneticButton"

// 🎯 SPECIALIZED BUTTON VARIANTS

// Primary CTA with breathing effect
export const LandorPrimaryCTA = React.forwardRef<
  HTMLButtonElement,
  Omit<LandorMagneticButtonProps, 'variant' | 'breathing'>
>((props, ref) => (
  <LandorMagneticButton
    ref={ref}
    variant="primary"
    breathing={true}
    magnetism="moderate"
    glowOnHover={true}
    {...props}
  />
))

// Luxury button with maximum magnetism
export const LandorLuxuryButton = React.forwardRef<
  HTMLButtonElement,
  Omit<LandorMagneticButtonProps, 'variant' | 'magnetism'>
>((props, ref) => (
  <LandorMagneticButton
    ref={ref}
    variant="luxury"
    magnetism="magnetic"
    glowOnHover={true}
    {...props}
  />
))

// Sophisticated outline button
export const LandorSophisticatedButton = React.forwardRef<
  HTMLButtonElement,
  Omit<LandorMagneticButtonProps, 'variant'>
>((props, ref) => (
  <LandorMagneticButton
    ref={ref}
    variant="sophisticated"
    magnetism="subtle"
    {...props}
  />
))

// Ghost button for navigation
export const LandorGhostButton = React.forwardRef<
  HTMLButtonElement,
  Omit<LandorMagneticButtonProps, 'variant' | 'rippleEffect'>
>((props, ref) => (
  <LandorMagneticButton
    ref={ref}
    variant="ghost"
    magnetism="subtle"
    rippleEffect={false}
    {...props}
  />
))

LandorPrimaryCTA.displayName = "LandorPrimaryCTA"
LandorLuxuryButton.displayName = "LandorLuxuryButton"  
LandorSophisticatedButton.displayName = "LandorSophisticatedButton"
LandorGhostButton.displayName = "LandorGhostButton"

export default LandorMagneticButton
