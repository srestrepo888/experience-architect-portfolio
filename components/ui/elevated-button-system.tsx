"use client"

import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ButtonText } from "@/components/typography"
import { ArrowRight, ExternalLink, Download, ChevronRight, Loader2, Sparkles } from "lucide-react"
import { COLORS, ANIMATIONS, LUXURY_SPACING, BORDER_RADIUS } from "@/lib/design-constants"

// ELEVATED SOPHISTICATION BUTTON SYSTEM
// Incorporating 2024-2025 luxury design innovations:
// - Advanced micro-interactions with tactile feedback
// - Sophisticated glassmorphism and neumorphism effects
// - Luxury material aesthetics with depth
// - Mathematical precision with 8px grid system
// - Premium brand-inspired interactions

const elevatedButtonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all duration-500 ease-[0.16,1,0.3,1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none overflow-hidden group z-[10] pointer-events-auto cursor-pointer will-change-transform backface-hidden transform-gpu",
  {
    variants: {
      variant: {
        // Primary - Sophisticated luxury with advanced depth
        primary: [
          "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
          "text-white shadow-[0_8px_32px_rgba(15,23,42,0.3)]",
          "hover:shadow-[0_20px_60px_rgba(15,23,42,0.4)] hover:-translate-y-1",
          "border border-slate-700/50",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:via-white/10 before:to-white/5 before:opacity-0 before:transition-opacity before:duration-500",
          "hover:before:opacity-100",
          "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/10 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300",
          "active:after:opacity-100"
        ],
        
        // Secondary - Elegant glassmorphism with luxury interactions
        secondary: [
          "bg-white/80 backdrop-blur-xl border border-slate-200/50",
          "text-slate-900 shadow-[0_8px_32px_rgba(15,23,42,0.15)]",
          "hover:bg-white/90 hover:shadow-[0_20px_60px_rgba(15,23,42,0.25)] hover:-translate-y-1",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-slate-50/50 before:via-white/80 before:to-slate-50/50 before:opacity-0 before:transition-opacity before:duration-500",
          "hover:before:opacity-100",
          "after:absolute after:inset-[1px] after:rounded-[inherit] after:bg-gradient-to-b after:from-white/20 after:to-transparent after:pointer-events-none"
        ],
        
        // Ghost - Subtle neumorphism with sophisticated feedback
        ghost: [
          "bg-gradient-to-br from-slate-50 via-white to-slate-50/80",
          "text-slate-700 border border-slate-200/30",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.08)]",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_8px_32px_rgba(15,23,42,0.15)] hover:-translate-y-0.5",
          "active:shadow-[inset_0_2px_4px_rgba(15,23,42,0.1)] active:translate-y-0"
        ],
        
        // Outline - Premium border with dynamic interactions
        outline: [
          "bg-transparent border-2 border-slate-300",
          "text-slate-700 hover:text-slate-900",
          "hover:border-slate-400 hover:bg-slate-50/50",
          "hover:shadow-[0_15px_45px_rgba(15,23,42,0.2)] hover:-translate-y-0.5",
          "before:absolute before:inset-0 before:rounded-[inherit] before:p-[2px] before:bg-gradient-to-r before:from-slate-200 before:via-slate-300 before:to-slate-200 before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100",
          "after:absolute after:inset-[2px] after:rounded-[inherit] after:bg-white after:pointer-events-none"
        ],
        
        // Luxury - Ultra-premium with silk-like gradients
        luxury: [
          "bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50",
          "text-slate-800 border border-amber-200/50",
          "shadow-[0_8px_32px_rgba(251,191,36,0.2)]",
          "hover:shadow-[0_25px_75px_rgba(251,191,36,0.3)] hover:-translate-y-1",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-100/30 before:via-orange-100/50 before:to-rose-100/30 before:opacity-0 before:transition-opacity before:duration-500",
          "hover:before:opacity-100",
          "after:absolute after:inset-0 after:bg-gradient-radial after:from-white/20 after:via-transparent after:to-transparent after:opacity-0 after:transition-opacity after:duration-300",
          "hover:after:opacity-100"
        ],
        
        // Minimal - Pure sophistication with mathematical precision
        minimal: [
          "bg-white text-slate-600 border border-slate-100",
          "shadow-[0_2px_8px_rgba(15,23,42,0.05)]",
          "hover:text-slate-900 hover:border-slate-200",
          "hover:shadow-[0_8px_32px_rgba(15,23,42,0.12)] hover:-translate-y-0.5",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-50/50 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100"
        ],
        
        // Link - Elegant text with sophisticated underline
        link: [
          "bg-transparent text-slate-700 p-0 h-auto rounded-none",
          "hover:text-slate-900 underline-offset-4",
          "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-slate-700 after:to-slate-400 after:transition-all after:duration-300",
          "hover:after:w-full"
        ],
        
        // Destructive - Sophisticated error states with luxury feel
        destructive: [
          "bg-gradient-to-br from-red-600 via-red-500 to-red-600",
          "text-white border border-red-500/50",
          "shadow-[0_8px_32px_rgba(220,38,38,0.3)]",
          "hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)] hover:-translate-y-1",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-white/20 before:to-white/10 before:opacity-0 before:transition-opacity before:duration-500",
          "hover:before:opacity-100"
        ]
      },
      size: {
        xs: "px-4 py-2 text-xs gap-2 rounded-lg min-h-[32px]", // 32px = 4 * 8px
        sm: "px-6 py-3 text-sm gap-2 rounded-xl min-h-[40px]", // 40px = 5 * 8px
        md: "px-8 py-4 text-base gap-3 rounded-xl min-h-[48px]", // 48px = 6 * 8px
        lg: "px-10 py-5 text-lg gap-3 rounded-2xl min-h-[56px]", // 56px = 7 * 8px
        xl: "px-12 py-6 text-xl gap-4 rounded-2xl min-h-[64px]", // 64px = 8 * 8px
        icon: "p-3 rounded-xl min-h-[48px] min-w-[48px]", // Perfect square
      },
      width: {
        auto: "w-auto",
        full: "w-full",
        fit: "w-fit",
      },
      elevation: {
        none: "",
        subtle: "shadow-sm hover:shadow-md",
        moderate: "shadow-md hover:shadow-lg",
        pronounced: "shadow-lg hover:shadow-xl",
        dramatic: "shadow-xl hover:shadow-2xl",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      width: "auto",
      elevation: "moderate",
    },
  },
)

export interface ElevatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof elevatedButtonVariants> {
  children: React.ReactNode
  href?: string
  external?: boolean
  download?: boolean | string
  icon?: "arrow" | "external" | "download" | "chevron" | "sparkles" | React.ReactNode
  iconPosition?: "right" | "left"
  loading?: boolean
  loadingText?: string
  tactileFeedback?: boolean
  magneticEffect?: boolean
}

const iconMap = {
  arrow: ArrowRight,
  external: ExternalLink,
  download: Download,
  chevron: ChevronRight,
  sparkles: Sparkles,
}

export const ElevatedButton = React.forwardRef<HTMLButtonElement, ElevatedButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      width,
      elevation,
      href,
      external = false,
      download,
      icon,
      iconPosition = "right",
      loading = false,
      loadingText = "Loading...",
      tactileFeedback = true,
      magneticEffect = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading
    
    // Advanced micro-interactions with spring physics
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 200, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 200, damping: 20 })

    // Magnetic effect for luxury interaction
    const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
      if (!magneticEffect || isDisabled) return
      
      const rect = e.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * 0.1
      const deltaY = (e.clientY - centerY) * 0.1
      
      mouseX.set(deltaX)
      mouseY.set(deltaY)
    }, [magneticEffect, isDisabled, mouseX, mouseY])

    const handleMouseLeave = React.useCallback(() => {
      mouseX.set(0)
      mouseY.set(0)
    }, [mouseX, mouseY])

    // Sophisticated icon rendering with luxury animations
    const renderIcon = () => {
      if (loading) {
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-4 h-4"
          >
            <Loader2 className="w-4 h-4" />
          </motion.div>
        )
      }

      if (!icon) return null

      if (typeof icon === "string" && icon in iconMap) {
        const IconComponent = iconMap[icon as keyof typeof iconMap]
        return (
          <motion.div
            initial={{ x: iconPosition === "right" ? 8 : -8, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: ANIMATIONS.easing.luxury }}
            className="relative"
          >
            <IconComponent className="w-4 h-4 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-1 group-hover:scale-110" />
            
            {/* Luxury shimmer effect on icon */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: ANIMATIONS.easing.luxury }}
            />
          </motion.div>
        )
      }

      return (
        <motion.div
          initial={{ x: iconPosition === "right" ? 8 : -8, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: ANIMATIONS.easing.luxury }}
        >
          {icon}
        </motion.div>
      )
    }

    // Luxury button content with sophisticated typography
    const buttonContent = (
      <>
        {icon && iconPosition === "left" && renderIcon()}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: ANIMATIONS.easing.luxury }}
          className="relative"
        >
          <ButtonText 
            size={size === "xs" ? "small" : size === "xl" ? "large" : "medium"}
            className="relative z-10"
          >
            {loading ? loadingText : children}
          </ButtonText>
          
          {/* Text shimmer effect for luxury variant */}
          {variant === "luxury" && !loading && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 2, 
                repeat: Number.POSITIVE_INFINITY, 
                repeatDelay: 3,
                ease: "easeInOut" 
              }}
            />
          )}
        </motion.div>
        {icon && iconPosition === "right" && renderIcon()}
      </>
    )

    // Advanced button with luxury effects and micro-interactions
    const buttonBase = (
      <motion.button
        ref={ref}
        className={cn(elevatedButtonVariants({ variant, size, width, elevation }), className)}
        disabled={isDisabled}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={magneticEffect ? { x: springX, y: springY } : undefined}
        whileHover={tactileFeedback ? { 
          scale: variant === "link" ? 1 : 1.02,
          transition: { duration: 0.2, ease: ANIMATIONS.easing.luxury }
        } : undefined}
        whileTap={tactileFeedback ? { 
          scale: variant === "link" ? 1 : 0.98,
          transition: { duration: 0.1, ease: ANIMATIONS.easing.luxury }
        } : undefined}
        {...props}
      >
        {/* Luxury ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] opacity-0"
          whileTap={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 1.4],
            transition: { duration: 0.6, ease: "easeOut" }
          }}
          style={{
            background: variant === "primary" || variant === "destructive" 
              ? "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(15,23,42,0.1) 0%, transparent 70%)"
          }}
        />
        
        {/* Breathing effect for primary buttons */}
        {(variant === "primary" || variant === "luxury") && !loading && (
          <motion.div
            className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              opacity: [0, 0.3, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
        
        {/* Content container */}
        <div className="relative flex items-center justify-center z-10">
          {buttonContent}
        </div>
        
        {/* Focus ring for accessibility */}
        <motion.div
          className="absolute inset-0 rounded-[inherit] ring-2 ring-slate-900/20 ring-offset-2 ring-offset-white opacity-0"
          whileFocus={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.button>
    )

    // Handle different button types with enhanced functionality
    if (href) {
      if (external) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: ANIMATIONS.easing.luxury }}
          >
            {buttonBase}
          </motion.a>
        )
      }

      if (download) {
        return (
          <motion.a
            href={href}
            download={typeof download === "string" ? download : undefined}
            className="inline-block"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: ANIMATIONS.easing.luxury }}
          >
            {buttonBase}
          </motion.a>
        )
      }

      return (
        <Link href={href} className="inline-block">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: ANIMATIONS.easing.luxury }}
          >
            {buttonBase}
          </motion.div>
        </Link>
      )
    }

    return buttonBase
  },
)

ElevatedButton.displayName = "ElevatedButton"

// Luxury Button Group Component for related actions
interface ElevatedButtonGroupProps {
  children: React.ReactNode
  orientation?: "horizontal" | "vertical"
  spacing?: "tight" | "normal" | "spacious"
  className?: string
}

export function ElevatedButtonGroup({
  children,
  orientation = "horizontal",
  spacing = "normal",
  className
}: ElevatedButtonGroupProps) {
  const spacingClasses = {
    tight: orientation === "horizontal" ? "gap-2" : "gap-2",
    normal: orientation === "horizontal" ? "gap-4" : "gap-4", 
    spacious: orientation === "horizontal" ? "gap-6" : "gap-6",
  }

  return (
    <div 
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-row items-center" : "flex-col items-stretch",
        spacingClasses[spacing],
        className
      )}
    >
      {children}
    </div>
  )
}
