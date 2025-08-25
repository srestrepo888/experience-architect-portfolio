import React from "react"
import type { ReactNode, ElementType } from "react"
import { cn } from "@/lib/utils"
import { TYPOGRAPHY_UTILITIES } from "@/lib/unified-design-system"

interface UnifiedTypographyProps {
  children: ReactNode
  className?: string
  as?: ElementType
  noMargin?: boolean
  maxWidth?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "reading"
  balance?: boolean
}

// 🎯 UNIFIED TYPOGRAPHY SYSTEM - SINGLE SOURCE OF TRUTH
// Based on UNIFIED_DESIGN_SYSTEM with strict compliance

// Perfect responsive text containers with optimal reading widths
function getMaxWidthClass(maxWidth?: string) {
  const widths = {
    none: "",
    xs: "max-w-xs",    // 20rem - 320px
    sm: "max-w-sm",    // 24rem - 384px  
    md: "max-w-md",    // 28rem - 448px
    lg: "max-w-lg",    // 32rem - 512px
    xl: "max-w-xl",    // 36rem - 576px
    "2xl": "max-w-2xl", // 42rem - 672px
    "3xl": "max-w-3xl", // 48rem - 768px
    "4xl": "max-w-4xl", // 56rem - 896px
    reading: "max-w-[65ch]", // Optimal reading width from UNIFIED_DESIGN_SYSTEM
  }
  return maxWidth ? widths[maxWidth as keyof typeof widths] || "" : ""
}

// 🏛️ DISPLAY TYPOGRAPHY - HERO SECTIONS
export function DisplayHero({
  children,
  className,
  as: Component = "h1",
  noMargin,
  maxWidth = "4xl",
  balance = true,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.displayHero,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-8 md:mb-12",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function DisplayLarge({
  children,
  className,
  as: Component = "h1",
  noMargin,
  maxWidth = "4xl",
  balance = true,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.displayLarge,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-6 md:mb-8",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function DisplayMedium({
  children,
  className,
  as: Component = "h2",
  noMargin,
  maxWidth = "3xl",
  balance = true,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.displayMedium,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-6 md:mb-8",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// 📰 HEADING TYPOGRAPHY
export function HeadingLarge({
  children,
  className,
  as: Component = "h2",
  noMargin,
  maxWidth = "3xl",
  balance = true,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.headingLarge,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-4 md:mb-6",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function HeadingMedium({
  children,
  className,
  as: Component = "h3",
  noMargin,
  maxWidth = "3xl",
  balance = true,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.headingMedium,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-4 md:mb-6",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function HeadingSmall({
  children,
  className,
  as: Component = "h4",
  noMargin,
  maxWidth = "2xl",
  balance = true,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.headingSmall,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-3 md:mb-4",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// 📖 BODY TYPOGRAPHY
export function BodyLarge({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "reading",
  balance = false,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.bodyLarge,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-4 md:mb-6",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function BodyMedium({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "reading",
  balance = false,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.bodyMedium,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-4 md:mb-6",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function BodySmall({
  children,
  className,
  as: Component = "p",
  noMargin,
  maxWidth = "reading",
  balance = false,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.bodySmall,
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-3 md:mb-4",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// 🏷️ LABEL TYPOGRAPHY
export function Caption({
  children,
  className,
  as: Component = "span",
  noMargin,
  maxWidth = "lg",
  balance = false,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.caption,
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-2",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function Overline({
  children,
  className,
  as: Component = "span",
  noMargin,
  maxWidth = "lg",
  balance = false,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.overline,
        "text-muted-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-2",
        className,
      )}
    >
      {children}
    </Component>
  )
}

// 💬 SPECIAL TYPOGRAPHY
export function Quote({
  children,
  className,
  as: Component = "blockquote",
  noMargin,
  maxWidth = "3xl",
  balance = true,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.quote,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        !noMargin && "mb-6 md:mb-8",
        className,
      )}
    >
      {children}
    </Component>
  )
}

export function ButtonText({
  children,
  className,
  as: Component = "span",
  noMargin,
  maxWidth = "none",
  balance = false,
}: UnifiedTypographyProps) {
  return (
    <Component
      className={cn(
        TYPOGRAPHY_UTILITIES.button,
        "text-foreground",
        balance && "text-balance",
        getMaxWidthClass(maxWidth),
        className,
      )}
    >
      {children}
    </Component>
  )
}
