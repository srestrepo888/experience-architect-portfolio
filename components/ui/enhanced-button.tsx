"use client"

import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ButtonText } from "@/components/typography"
import { ArrowRight, ExternalLink, Download, ChevronRight } from "lucide-react"

const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none relative overflow-hidden group z-[9999] pointer-events-auto cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-gray-900 text-white hover:bg-gray-700",
        secondary: "border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white",
        ghost: "hover:bg-gray-100 hover:text-gray-900 border border-transparent",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        link: "bg-transparent text-gray-900 hover:text-gray-700 underline-offset-4 hover:underline p-0 h-auto rounded-none",
      },
      size: {
        xs: "px-3 py-1.5 text-xs gap-1.5",
        sm: "px-4 py-2 text-sm gap-2",
        md: "px-6 py-3 text-sm gap-2.5",
        lg: "px-6 py-3 text-base gap-3",
        xl: "px-8 py-4 text-lg gap-4",
        icon: "h-11 w-11 p-0",
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

    // Icon rendering logic
    const renderIcon = () => {
      if (loading) {
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          />
        )
      }

      if (!icon) return null

      if (typeof icon === "string" && icon in iconMap) {
        const IconComponent = iconMap[icon as keyof typeof iconMap]
        return (
          <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
        )
      }

      return icon
    }

    const buttonContent = (
      <>
        {icon && iconPosition === "left" && renderIcon()}
        <ButtonText className="relative z-10 group-hover:scale-105 transition-transform duration-300">
          {loading ? loadingText : children}
        </ButtonText>
        {icon && iconPosition === "right" && renderIcon()}
      </>
    )

    const buttonClasses = cn(
      enhancedButtonVariants({ variant, size, width }),
      className,
    )

    const motionProps = {
      whileHover: { scale: 1.05, y: -2 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2, ease: "easeInOut" },
      style: { 
        zIndex: 9999, 
        pointerEvents: 'auto',
        position: 'relative'
      },
    }

    // External link
    if (href && external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          {...motionProps}
          {...(download && { download: typeof download === "string" ? download : "" })}
        >
          {buttonContent}
        </motion.a>
      )
    }

    // Internal link
    if (href) {
      return (
        <Link href={href} passHref legacyBehavior>
          <motion.a 
            className={buttonClasses} 
            {...motionProps}
            onClick={(e) => {
              console.log('EnhancedButton clicked:', href);
              console.log('Event target:', e.target);
              console.log('Event currentTarget:', e.currentTarget);
            }}
            onMouseEnter={() => console.log('Button hovered')}
            style={{ 
              zIndex: 9999, 
              pointerEvents: 'auto',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            {buttonContent}
          </motion.a>
        </Link>
      )
    }

    // Button
    return (
      <motion.button
        ref={ref}
        className={buttonClasses}
        disabled={isDisabled}
        {...motionProps}
        {...props}
      >
        {buttonContent}
      </motion.button>
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"

export { enhancedButtonVariants }
