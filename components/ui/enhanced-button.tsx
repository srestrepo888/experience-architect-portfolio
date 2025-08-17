"use client"

import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ButtonText } from "@/components/typography"
import { ArrowRight, ExternalLink, Download, ChevronRight } from "lucide-react"

const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-medium tracking-wide transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none relative overflow-hidden group magnetic",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-[0_8px_32px_rgba(147,51,234,0.3)] hover:shadow-[0_12px_40px_rgba(147,51,234,0.4)] border border-purple-500/20",
        secondary:
          "bg-white/10 backdrop-blur-xl border border-white/20 text-foreground hover:bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:bg-black/10 dark:border-white/10 dark:hover:bg-black/20",
        ghost: "hover:bg-white/10 dark:hover:bg-black/10 backdrop-blur-sm hover:text-accent-foreground border border-transparent hover:border-white/20 dark:hover:border-white/10",
        outline:
          "border-2 border-purple-500/30 bg-transparent hover:bg-purple-500/10 hover:border-purple-500/50 text-foreground shadow-[0_4px_20px_rgba(147,51,234,0.1)] hover:shadow-[0_8px_30px_rgba(147,51,234,0.2)]",
        destructive:
          "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:shadow-[0_12px_40px_rgba(239,68,68,0.4)]",
        link: "bg-transparent text-foreground hover:text-primary underline-offset-4 hover:underline p-0 h-auto rounded-none",
        gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white animate-gradient hover:shadow-[0_12px_40px_rgba(147,51,234,0.4)]",
      },
      size: {
        xs: "h-8 px-4 text-xs gap-1.5",
        sm: "h-10 px-5 text-sm gap-2",
        md: "h-11 px-6 text-sm gap-2.5",
        lg: "h-12 px-8 text-base gap-3",
        xl: "h-14 px-10 text-lg gap-4",
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
      "hover:scale-[1.02] active:scale-[0.98]",
      className,
    )

    const motionProps = {
      whileHover: { scale: 1.05, y: -4 },
      whileTap: { scale: 0.95, y: 0 },
      transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
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
          data-magnetic
        >
          {buttonContent}
          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.a>
      )
    }

    // Internal link
    if (href) {
      return (
        <Link href={href} passHref legacyBehavior>
          <motion.a className={buttonClasses} {...motionProps} data-magnetic>
            {buttonContent}
            {/* Ripple Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileTap={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
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
        data-magnetic
      >
        {buttonContent}
        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        {/* Success/Error State Overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"

export { enhancedButtonVariants }
