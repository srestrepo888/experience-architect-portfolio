import React from "react"
import type { ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface EnhancedTypographyProps {
  children: ReactNode
  className?: string
  as?: ElementType
  noMargin?: boolean
  maxWidth?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
  balance?: boolean
  sophisticated?: boolean
  animate?: boolean
  gradient?: boolean
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"
}

// Enhanced responsive text containers with optimal reading widths
function getMaxWidthClass(maxWidth?: string) {
  const widths = {
    none: "",
    xs: "max-w-xs",     // 20rem - 320px
    sm: "max-w-sm",     // 24rem - 384px  
    md: "max-w-md",     // 28rem - 448px
    lg: "max-w-lg",     // 32rem - 512px
    xl: "max-w-xl",     // 36rem - 576px
    "2xl": "max-w-2xl", // 42rem - 672px - Perfect for body text
    "3xl": "max-w-3xl", // 48rem - 768px - Perfect for headings
    "4xl": "max-w-4xl", // 56rem - 896px - Perfect for displays
    "5xl": "max-w-5xl", // 64rem - 1024px
    "6xl": "max-w-6xl", // 72rem - 1152px
    "7xl": "max-w-7xl", // 80rem - 1280px
  }
  return maxWidth ? widths[maxWidth as keyof typeof widths] || "" : ""
}

function getWeightClass(weight?: string) {
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight", 
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  }
  return weight ? weights[weight as keyof typeof weights] || "font-normal" : "font-normal"
}

// Enhanced animation variants for typography
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// ENHANCED DISPLAY TYPOGRAPHY
export function EnhancedDisplayLarge({
  children,
  className,
  as: Component = "h1",
  noMargin,
  maxWidth = "4xl", 
  balance = true,
  sophisticated = true,
  animate = false,
  gradient = false,
  weight = "extralight"
}: EnhancedTypographyProps) {
  const baseClasses = cn(
    "font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    getWeightClass(weight),
    "leading-[0.9] tracking-tight",
    !noMargin && "mb-6 md:mb-8",
    getMaxWidthClass(maxWidth),
    balance && "text-balance",
    sophisticated && "text-foreground/95",
    gradient && "bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 bg-clip-text text-transparent",
    className
  )

  const content = <Component className={baseClasses}>{children}</Component>

  return animate ? (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  ) : content
}

export function EnhancedHeadingLarge({
  children,
  className,
  as: Component = "h2",
  noMargin,
  maxWidth = "3xl",
  balance = true,
  sophisticated = true,
  animate = false,
  gradient = false,
  weight = "light"
}: EnhancedTypographyProps) {
  const baseClasses = cn(
    "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    getWeightClass(weight),
    "leading-[1.1] tracking-tight",
    !noMargin && "mb-4 md:mb-6",
    getMaxWidthClass(maxWidth),
    balance && "text-balance", 
    sophisticated && "text-foreground",
    gradient && "bg-gradient-to-br from-foreground via-foreground/95 to-foreground/85 bg-clip-text text-transparent",
    className
  )

  const content = <Component className={baseClasses}>{children}</Component>

  return animate ? (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  ) : content
}

export function EnhancedHeadingMedium({
  children,
  className,
  as: Component = "h3",
  noMargin,
  maxWidth = "2xl",
  balance = true,
  sophisticated = true,
  animate = false,
  gradient = false,
  weight = "normal"
}: EnhancedTypographyProps) {
  const baseClasses = cn(
    "font-serif text-2xl sm:text-3xl md:text-4xl",
    getWeightClass(weight),
    "leading-[1.2] tracking-tight",
    !noMargin && "mb-3 md:mb-4",
    getMaxWidthClass(maxWidth),
    balance && "text-balance",
    sophisticated && "text-foreground",
    gradient && "bg-gradient-to-br from-foreground to-foreground/90 bg-clip-text text-transparent",
    className
  )

  const content = <Component className={baseClasses}>{children}</Component>

  return animate ? (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  ) : content
}

// ENHANCED BODY TYPOGRAPHY
export function EnhancedBodyLarge({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "2xl",
  balance = false,
  sophisticated = true,
  animate = false,
  weight = "normal"
}: EnhancedTypographyProps) {
  const baseClasses = cn(
    "font-sans text-lg sm:text-xl md:text-xl",
    getWeightClass(weight),
    "leading-relaxed tracking-wide",
    !noMargin && "mb-4",
    getMaxWidthClass(maxWidth),
    balance && "text-balance",
    sophisticated && "text-muted-foreground",
    className
  )

  const content = <Component className={baseClasses}>{children}</Component>

  return animate ? (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  ) : content
}

export function EnhancedBodyMedium({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "2xl",
  balance = false,
  sophisticated = true,
  animate = false,
  weight = "normal"
}: EnhancedTypographyProps) {
  const baseClasses = cn(
    "font-sans text-base sm:text-lg",
    getWeightClass(weight),
    "leading-relaxed",
    !noMargin && "mb-3",
    getMaxWidthClass(maxWidth),
    balance && "text-balance",
    sophisticated && "text-muted-foreground",
    className
  )

  const content = <Component className={baseClasses}>{children}</Component>

  return animate ? (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  ) : content
}

// ENHANCED QUOTE TYPOGRAPHY
export function EnhancedQuote({
  children,
  className,
  attribution,
  variant = "default",
  animate = false,
  maxWidth = "xl"
}: {
  children: ReactNode
  className?: string
  attribution?: string
  variant?: "default" | "large" | "minimal"
  animate?: boolean
  maxWidth?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl"
}) {
  const quoteVariants = {
    default: "text-lg sm:text-xl font-serif italic leading-relaxed",
    large: "text-xl sm:text-2xl md:text-3xl font-serif italic leading-relaxed",
    minimal: "text-base sm:text-lg font-serif italic leading-relaxed"
  }

  const baseClasses = cn(
    quoteVariants[variant],
    "text-foreground/90 relative",
    getMaxWidthClass(maxWidth),
    className
  )

  const content = (
    <blockquote className={baseClasses}>
      <span className="relative z-10">{children}</span>
      {attribution && (
        <cite className="block text-sm font-sans not-italic text-muted-foreground mt-2 font-medium">
          — {attribution}
        </cite>
      )}
      {/* Elegant quotation mark */}
      <span className="absolute -top-2 -left-1 text-4xl font-serif text-foreground/20 leading-none">
        "
      </span>
    </blockquote>
  )

  return animate ? (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  ) : content
}

// ENHANCED OVERLINE TYPOGRAPHY
export function EnhancedOverline({
  children,
  className,
  animate = false,
  sophisticated = true
}: {
  children: ReactNode
  className?: string
  animate?: boolean
  sophisticated?: boolean
}) {
  const baseClasses = cn(
    "font-sans text-xs sm:text-sm font-medium uppercase tracking-widest",
    sophisticated && "text-muted-foreground/60",
    className
  )

  const content = <p className={baseClasses}>{children}</p>

  return animate ? (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  ) : content
}