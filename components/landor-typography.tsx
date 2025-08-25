"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { LANDOR_TOKENS } from "@/lib/landor-design-system"

// 🏛️ LANDOR TYPOGRAPHY COMPONENTS - Single Source of Truth
// Mathematical progression with Perfect Fourth scale (1.250)

interface LandorTypographyProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// 1. DISPLAY HERO - Largest text for hero sections
export function DisplayHero({ 
  children, 
  className, 
  as: Component = "h1" 
}: LandorTypographyProps) {
  return (
    <Component
      className={cn("font-serif font-light leading-tight tracking-tight", className)}
      style={{
        fontSize: LANDOR_TOKENS.typography["display-hero"].fontSize,
        fontWeight: LANDOR_TOKENS.typography["display-hero"].fontWeight,
        lineHeight: LANDOR_TOKENS.typography["display-hero"].lineHeight,
        letterSpacing: LANDOR_TOKENS.typography["display-hero"].letterSpacing
      }}
    >
      {children}
    </Component>
  )
}

// 2. HEADING LARGE - Major section headings
export function HeadingLarge({ 
  children, 
  className, 
  as: Component = "h2" 
}: LandorTypographyProps) {
  return (
    <Component
      className={cn("font-serif font-light leading-tight tracking-tight", className)}
      style={{
        fontSize: LANDOR_TOKENS.typography["heading-large"].fontSize,
        fontWeight: LANDOR_TOKENS.typography["heading-large"].fontWeight,
        lineHeight: LANDOR_TOKENS.typography["heading-large"].lineHeight,
        letterSpacing: LANDOR_TOKENS.typography["heading-large"].letterSpacing
      }}
    >
      {children}
    </Component>
  )
}

// 3. HEADING MEDIUM - Section headings
export function HeadingMedium({ 
  children, 
  className, 
  as: Component = "h3" 
}: LandorTypographyProps) {
  return (
    <Component
      className={cn("font-serif font-normal leading-tight", className)}
      style={{
        fontSize: LANDOR_TOKENS.typography["heading-medium"].fontSize,
        fontWeight: LANDOR_TOKENS.typography["heading-medium"].fontWeight,
        lineHeight: LANDOR_TOKENS.typography["heading-medium"].lineHeight,
        letterSpacing: LANDOR_TOKENS.typography["heading-medium"].letterSpacing
      }}
    >
      {children}
    </Component>
  )
}

// 4. BODY LARGE - Prominent body text
export function BodyLarge({ 
  children, 
  className, 
  as: Component = "p" 
}: LandorTypographyProps) {
  return (
    <Component
      className={cn("font-sans font-normal leading-normal text-muted-foreground", className)}
      style={{
        fontSize: LANDOR_TOKENS.typography["body-large"].fontSize,
        fontWeight: LANDOR_TOKENS.typography["body-large"].fontWeight,
        lineHeight: LANDOR_TOKENS.typography["body-large"].lineHeight,
        letterSpacing: LANDOR_TOKENS.typography["body-large"].letterSpacing
      }}
    >
      {children}
    </Component>
  )
}

// 5. BODY STANDARD - Standard body text
export function BodyStandard({ 
  children, 
  className, 
  as: Component = "p" 
}: LandorTypographyProps) {
  return (
    <Component
      className={cn("font-sans font-normal leading-normal text-muted-foreground", className)}
      style={{
        fontSize: LANDOR_TOKENS.typography["body-standard"].fontSize,
        fontWeight: LANDOR_TOKENS.typography["body-standard"].fontWeight,
        lineHeight: LANDOR_TOKENS.typography["body-standard"].lineHeight,
        letterSpacing: LANDOR_TOKENS.typography["body-standard"].letterSpacing
      }}
    >
      {children}
    </Component>
  )
}

// 6. CAPTION - Small text and metadata
export function Caption({ 
  children, 
  className, 
  as: Component = "span" 
}: LandorTypographyProps) {
  return (
    <Component
      className={cn("font-sans font-medium text-muted-foreground uppercase", className)}
      style={{
        fontSize: LANDOR_TOKENS.typography.caption.fontSize,
        fontWeight: LANDOR_TOKENS.typography.caption.fontWeight,
        lineHeight: LANDOR_TOKENS.typography.caption.lineHeight,
        letterSpacing: LANDOR_TOKENS.typography.caption.letterSpacing
      }}
    >
      {children}
    </Component>
  )
}

// Legacy compatibility exports
export const DisplayLarge = DisplayHero
export const SubheadingLarge = BodyLarge
export const BodyMedium = BodyStandard
export const Overline = Caption
export const Quote = BodyLarge