"use client"

import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ButtonText } from "@/components/typography"
import { ArrowRight, ExternalLink, Download, ChevronRight, Loader2 } from "lucide-react"
import { ElevatedButton, type ElevatedButtonProps } from "./elevated-button-system"
import { COLOR_COMBINATIONS } from "@/lib/color-utils"

// SOPHISTICATED BUTTON SYSTEM - WORLD-CLASS LUXURY IMPLEMENTATION
// Inspired by luxury brands: Hermès, Cartier, Rolex, Chanel
const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-500 ease-[0.16,1,0.3,1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none relative overflow-hidden group z-[9999] pointer-events-auto cursor-pointer",
  {
    variants: {
      variant: {
        // Primary - Professional color system
        primary: "text-white hover:shadow-[0_20px_40px_rgba(60,60,60,0.3)] hover:-translate-y-1 border-2 border-white/10 hover:border-white/20 relative z-10",
        
        // Secondary - Elegant outline with sophisticated interactions
        secondary: "border border-slate-900 text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white hover:shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:-translate-y-1",
        
        // Ghost - Subtle with refined hover states
        ghost: "hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 hover:shadow-[0_10px_30px_rgba(15,23,42,0.1)]",
        
        // Outline - Refined border with luxury interactions
        outline: "border border-slate-300 bg-transparent hover:bg-slate-50 hover:border-slate-400 text-slate-700 hover:text-slate-900 hover:shadow-[0_15px_35px_rgba(15,23,42,0.15)]",
        
        // Destructive - Sophisticated error states
        destructive: "bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_20px_40px_rgba(220,38,38,0.3)] hover:-translate-y-1 border border-red-600",
        
        // Link - Elegant text links
        link: "bg-transparent text-slate-900 hover:text-slate-700 underline-offset-4 hover:underline p-0 h-auto rounded-none hover:translate-x-1",
        
        // Luxury - Premium variant with sophisticated styling
        luxury: "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 hover:shadow-[0_25px_50px_rgba(15,23,42,0.4)] hover:-translate-y-1 border border-slate-700/50",
        
        // Minimal - Clean and refined
        minimal: "bg-white text-slate-900 hover:bg-slate-50 hover:shadow-[0_15px_35px_rgba(15,23,42,0.1)] hover:-translate-y-1 border border-slate-200",
      },
      size: {
        xs: "px-4 py-2 text-xs gap-2 rounded-lg",
        sm: "px-5 py-2.5 text-sm gap-2.5 rounded-lg",
        md: "px-6 py-3 text-sm gap-3 rounded-xl",
        lg: "px-8 py-4 text-base gap-3 rounded-xl",
        xl: "px-10 py-5 text-lg gap-4 rounded-2xl",
        icon: "h-12 w-12 p-0 rounded-xl",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
        fit: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      width: "auto",
    },
  },
)

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  children: React.ReactNode
  href?: string
  external?: boolean
  download?: boolean | string
  icon?: "arrow" | "external" | "download" | "chevron" | React.ReactNode
  iconPosition?: "right" | "left"
  loading?: boolean
  loadingText?: string
}

const iconMap = {
  arrow: ArrowRight,
  external: ExternalLink,
  download: Download,
  chevron: ChevronRight,
}

export const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      width,
      href,
      external = false,
      download,
      icon,
      iconPosition = "right",
      loading = false,
      loadingText = "Loading...",
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    // Sophisticated icon rendering with luxury animations
    const renderIcon = () => {
      if (loading) {
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
            initial={{ x: iconPosition === "right" ? 5 : -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.div>
        )
      }

      return (
        <motion.div
          initial={{ x: iconPosition === "right" ? 5 : -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {icon}
        </motion.div>
      )
    }

    // Luxury button content with sophisticated text
    const buttonContent = (
      <>
        {icon && iconPosition === "left" && renderIcon()}
        <motion.div
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <ButtonText size={size === "xs" ? "small" : size === "xl" ? "large" : "medium"}>
            {loading ? loadingText : children}
          </ButtonText>
        </motion.div>
        {icon && iconPosition === "right" && renderIcon()}
      </>
    )

    // Sophisticated button base with luxury effects
    const buttonBase = (
      <motion.button
        ref={ref}
        className={cn(enhancedButtonVariants({ variant, size, width }), className)}
        style={variant === 'primary' ? {
          background: `linear-gradient(135deg, ${COLOR_COMBINATIONS.accents.primary} 0%, ${COLOR_COMBINATIONS.accents.secondary} 100%)`,
          color: COLOR_COMBINATIONS.text.inverse
        } : {}}
        disabled={isDisabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {/* Luxury background effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        
        {/* Content */}
        <div className="relative flex items-center justify-center">
          {buttonContent}
        </div>
      </motion.button>
    )

    // Handle different button types
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            {buttonBase}
          </a>
        )
      }

      if (download) {
        return (
          <a
            href={href}
            download={typeof download === "string" ? download : undefined}
            className="inline-block"
          >
            {buttonBase}
          </a>
        )
      }

      return (
        <Link href={href} className="inline-block">
          {buttonBase}
        </Link>
      )
    }

    return buttonBase
  },
)

EnhancedButton.displayName = "EnhancedButton"

// ENHANCED COMPATIBILITY LAYER
// Provides backward compatibility while leveraging the new elevated system
export const EnhancedButtonV2 = React.forwardRef<HTMLButtonElement, ElevatedButtonProps>(
  (props, ref) => {
    return (
      <ElevatedButton
        ref={ref}
        tactileFeedback={true}
        magneticEffect={props.variant === "luxury"}
        elevation="moderate"
        {...props}
      />
    )
  }
)

EnhancedButtonV2.displayName = "EnhancedButtonV2"

// Export the elevated system as the default for new implementations
export { ElevatedButton as SophisticatedButton, ElevatedButtonGroup as SophisticatedButtonGroup } from "./elevated-button-system"
