"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { UNIFIED_COLORS, COLOR_UTILITIES } from '@/lib/unified-color-system'
import { TYPOGRAPHY_VARIANTS, TYPOGRAPHY_UTILITIES } from '@/lib/unified-typography-system'

interface EnhancedButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'luxury' | 'minimal'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  download?: string
  icon?: 'arrow' | 'download' | 'external' | 'play' | 'plus' | 'check' | 'none'
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  'aria-label'?: string
}

export function EnhancedButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  icon = 'none',
  iconPosition = 'right',
  disabled = false,
  loading = false,
  fullWidth = false,
  rounded = 'lg',
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
  'aria-label': ariaLabel,
  ...props
}: EnhancedButtonProps) {
  
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  
  const buttonRef = useRef<HTMLButtonElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring animations for smooth interactions
  const springConfig = { damping: 25, stiffness: 300 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)
  
  // Transform mouse position to button-relative coordinates
  const rotateX = useTransform(smoothMouseY, [-50, 50], [15, -15])
  const rotateY = useTransform(smoothMouseX, [-50, 50], [-15, 15])

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current && variant === 'luxury') {
      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
    onMouseLeave?.()
  }

  // Get button styles based on variant
  const getButtonStyles = () => {
    const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const sizeStyles = {
      xs: 'px-3 py-1.5 text-xs',
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl'
    }
    
    const roundedStyles = {
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full'
    }
    
    const widthStyles = fullWidth ? 'w-full' : ''
    
    return `${baseStyles} ${sizeStyles[size]} ${roundedStyles[rounded]} ${widthStyles}`
  }

  // Get variant-specific styles using new color system
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#F6E4D6] text-[#281503] border-[#F6E4D6] hover:bg-[#F0D8C4] hover:border-[#F0D8C4] focus:ring-[#9B5F0E] focus:ring-offset-[#F6E4D6]'
      case 'secondary':
        return 'bg-transparent text-[#F6E4D6] border-[#F6E4D6] hover:bg-[#F6E4D6] hover:text-[#281503] focus:ring-[#9B5F0E] focus:ring-offset-[#281503]'
      case 'outline':
        return 'bg-transparent text-[#F6E4D6] border-[#F6E4D6] hover:bg-[#F6E4D6]/10 focus:ring-[#9B5F0E] focus:ring-offset-[#281503]'
      case 'ghost':
        return 'bg-transparent text-[#F6E4D6] hover:bg-[#F6E4D6]/10 focus:ring-[#9B5F0E] focus:ring-offset-[#281503]'
      case 'luxury':
        return 'bg-gradient-to-r from-[#F6E4D6] to-[#F0D8C4] text-[#281503] border-[#F6E4D6] hover:from-[#F0D8C4] hover:to-[#E8CCB1] hover:border-[#F0D8C4] focus:ring-[#9B5F0E] focus:ring-offset-[#281503] shadow-[0_8px_32px_rgba(40,21,3,0.15)]'
      case 'minimal':
        return 'bg-transparent text-[#F6E4D6] hover:text-[#F0D8C4] focus:ring-[#9B5F0E] focus:ring-offset-[#281503]'
      default:
        return 'bg-[#F6E4D6] text-[#281503] border-[#F6E4D6] hover:bg-[#F0D8C4] hover:border-[#F0D8C4] focus:ring-[#9B5F0E] focus:ring-offset-[#F6E4D6]'
    }
  }

  // Get icon component
  const getIcon = () => {
    if (icon === 'none') return null
    
    const iconClasses = 'transition-transform duration-300'
    const iconSize = size === 'xs' || size === 'sm' ? 'w-4 h-4' : size === 'lg' || size === 'xl' ? 'w-6 h-6' : 'w-5 h-5'
    
    switch (icon) {
      case 'arrow':
        return (
          <motion.svg
            className={`${iconClasses} ${iconSize} ml-2`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        )
      
      case 'download':
        return (
          <motion.svg
            className={`${iconClasses} ${iconSize} ml-2`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: isHovered ? 2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </motion.svg>
        )
      
      case 'external':
        return (
          <motion.svg
            className={`${iconClasses} ${iconSize} ml-2`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </motion.svg>
        )
      
      case 'play':
        return (
          <motion.svg
            className={`${iconClasses} ${iconSize} ml-2`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </motion.svg>
        )
      
      case 'plus':
        return (
          <motion.svg
            className={`${iconClasses} ${iconSize} ml-2`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isHovered ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </motion.svg>
        )
      
      case 'check':
        return (
          <motion.svg
            className={`${iconClasses} ${iconSize} ml-2`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </motion.svg>
        )
      
      default:
        return null
    }
  }

  // Handle button click
  const handleClick = () => {
    if (disabled || loading) return
    
    if (href) {
      if (download) {
        const link = document.createElement('a')
        link.href = href
        link.download = download
        link.click()
      } else {
        window.open(href, '_blank')
      }
    }
    
    onClick?.()
  }

  // Button content with icon positioning
  const buttonContent = (
    <>
      {icon !== 'none' && iconPosition === 'left' && getIcon()}
      <span className="relative z-10">
        {loading ? (
          <motion.div
            className="inline-flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span className="ml-2">Loading...</span>
          </motion.div>
        ) : (
          children
        )}
      </span>
      {icon !== 'none' && iconPosition === 'right' && getIcon()}
    </>
  )

  // Enhanced button with 3D effects
  if (variant === 'luxury') {
    return (
      <motion.button
        ref={buttonRef}
        className={`${getButtonStyles()} ${getVariantStyles()} ${className}`}
        disabled={disabled || loading}
        onClick={handleClick}
        onMouseEnter={() => {
          setIsHovered(true)
          onMouseEnter?.()
        }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? `perspective(1000px) rotateX(${rotateX.get()}deg) rotateY(${rotateY.get()}deg)` : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
        }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
        {...props}
      >
        {/* 3D depth effect */}
        <motion.div
          className="absolute inset-0 bg-black/10 rounded-lg"
          style={{
            transform: 'translateZ(-10px)',
            filter: 'blur(2px)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {buttonContent}
        </div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#9B5F0E]/20 to-[#7A4A0B]/20 rounded-lg opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    )
  }

  // Standard button variants
  return (
    <motion.button
      ref={buttonRef}
      className={`${getButtonStyles()} ${getVariantStyles()} ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseEnter={() => {
        setIsHovered(true)
        onMouseEnter?.()
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        onMouseLeave?.()
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: variant === 'minimal' ? 1.02 : 1.05 }}
      whileTap={{ scale: 0.98 }}
      aria-label={ariaLabel}
      {...props}
    >
      {/* Ripple effect for primary and secondary variants */}
      {(variant === 'primary' || variant === 'secondary') && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isPressed ? 1 : 0,
            opacity: isPressed ? 0 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Content */}
      {buttonContent}
    </motion.button>
  )
}
