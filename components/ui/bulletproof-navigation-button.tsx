"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BulletproofNavigationButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  icon?: "left" | "right" | "external" | "home" | React.ReactNode
  external?: boolean
  disabled?: boolean
  className?: string
}

export const BulletproofNavigationButton = React.forwardRef<
  HTMLButtonElement,
  BulletproofNavigationButtonProps
>(({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  size = "md", 
  icon, 
  external = false,
  disabled = false,
  className,
  ...props 
}, ref) => {
  const router = useRouter()

  const baseClasses = cn(
    // BULLETPROOF FOUNDATION - Maximum clickability
    "inline-flex items-center justify-center gap-3 rounded-lg font-medium transition-all duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "relative overflow-hidden group cursor-pointer",
    // CRITICAL: Maximum z-index and pointer events
    "z-[9999] pointer-events-auto",
    // BULLETPROOF: Force interaction layer above everything
    "before:absolute before:inset-0 before:z-[10000] before:pointer-events-auto",
    className
  )

  const variantClasses = {
    primary: "bg-gray-900 text-white hover:bg-gray-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200",
    ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700"
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const iconMap = {
    left: <ArrowLeft className="w-4 h-4" />,
    right: <ArrowRight className="w-4 h-4" />,
    external: <ExternalLink className="w-4 h-4" />,
    home: <Home className="w-4 h-4" />
  }

  const renderIcon = () => {
    if (typeof icon === "string" && icon in iconMap) {
      return iconMap[icon as keyof typeof iconMap]
    }
    return icon
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    console.log('🔧 BulletproofNavigationButton clicked:', { href, external })
    
    if (onClick) {
      onClick()
      return
    }

    if (href) {
      if (external) {
        window.open(href, '_blank', 'noopener,noreferrer')
      } else {
        router.push(href)
      }
    }
  }

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size]
  )

  return (
    <motion.button
      ref={ref}
      className={combinedClasses}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.02, 
        y: -2,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      style={{ 
        zIndex: 9999, 
        pointerEvents: 'auto',
        position: 'relative'
      }}
      {...props}
    >
      {icon === "left" && renderIcon()}
      <span className="relative z-10 font-medium tracking-wide">
        {children}
      </span>
      {(icon === "right" || icon === "external" || icon === "home") && renderIcon()}
      {(typeof icon !== "string" && icon) && renderIcon()}
      
      {/* BULLETPROOF: Additional click layer */}
      <div 
        className="absolute inset-0 z-[10000] cursor-pointer"
        onClick={handleClick}
        style={{ pointerEvents: 'auto' }}
      />
    </motion.button>
  )
})

BulletproofNavigationButton.displayName = "BulletproofNavigationButton"