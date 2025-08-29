"use client"

import React from "react"
import { cn } from "@/lib/utils"

// 🎭 SOPHISTICATED TYPOGRAPHY SYSTEM
// Inspired by luxury brands: Hermès, Chanel, Cartier, Apple

interface SophisticatedTypographyProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

// DISPLAY HERO - Maximum sophistication for hero sections
export function SophisticatedDisplayHero({ 
  children, 
  className, 
  as: Component = "h1" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-serif font-normal leading-[0.95] tracking-[-0.025em]",
        "text-primary bg-gradient-to-br from-primary via-primary/95 to-primary/90 bg-clip-text",
        "text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on, "calt" on',
        fontOpticalSizing: "auto"
      }}
    >
      {children}
    </Component>
  )
}

// HEADING LARGE - Sophisticated section headers
export function SophisticatedHeadingLarge({ 
  children, 
  className, 
  as: Component = "h2" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-serif font-medium leading-[1.1] tracking-[-0.015em]",
        "text-primary text-3xl md:text-4xl lg:text-5xl",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on',
        fontOpticalSizing: "auto"
      }}
    >
      {children}
    </Component>
  )
}

// BODY SOPHISTICATED - Elevated body text
export function SophisticatedBodyLarge({ 
  children, 
  className, 
  as: Component = "p" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-normal leading-[1.65] tracking-[0.005em]",
        "text-primary/90 text-lg md:text-xl",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on, "onum" on',
        fontOpticalSizing: "auto",
        textRendering: "optimizeLegibility"
      }}
    >
      {children}
    </Component>
  )
}

// BODY STANDARD - Refined body text  
export function SophisticatedBodyStandard({ 
  children, 
  className, 
  as: Component = "p" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-normal leading-[1.6] tracking-[0.002em]",
        "text-primary/85 text-base md:text-lg",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on',
        fontOpticalSizing: "auto",
        textRendering: "optimizeLegibility"
      }}
    >
      {children}
    </Component>
  )
}

// CAPTION SOPHISTICATED - Elevated captions
export function SophisticatedCaption({ 
  children, 
  className, 
  as: Component = "span" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-medium leading-[1.4] tracking-[0.05em]",
        "text-primary/70 text-sm uppercase",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on, "smcp" on',
        fontOpticalSizing: "auto"
      }}
    >
      {children}
    </Component>
  )
}

// QUOTE SOPHISTICATED - Elegant quotes
export function SophisticatedQuote({ 
  children, 
  className, 
  as: Component = "blockquote" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-serif font-normal italic leading-[1.5] tracking-[-0.01em]",
        "text-primary/90 text-xl md:text-2xl",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on, "calt" on',
        fontOpticalSizing: "auto"
      }}
    >
      {children}
    </Component>
  )
}

// HEADING MEDIUM - Sophisticated sub-headers
export function SophisticatedHeadingMedium({ 
  children, 
  className, 
  as: Component = "h3" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-serif font-medium leading-[1.2] tracking-[-0.01em]",
        "text-primary text-2xl md:text-3xl",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on',
        fontOpticalSizing: "auto"
      }}
    >
      {children}
    </Component>
  )
}

// BUTTON TEXT - Sophisticated button typography
export function SophisticatedButtonText({ 
  children, 
  className, 
  as: Component = "span" 
}: SophisticatedTypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-medium leading-[1.2] tracking-[0.025em]",
        "text-sm md:text-base",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" on, "kern" on',
        fontOpticalSizing: "auto"
      }}
    >
      {children}
    </Component>
  )
}

export {
  SophisticatedDisplayHero as DisplayHero,
  SophisticatedHeadingLarge as HeadingLarge,
  SophisticatedHeadingMedium as HeadingMedium,
  SophisticatedBodyLarge as BodyLarge,
  SophisticatedBodyStandard as BodyStandard,
  SophisticatedCaption as Caption,
  SophisticatedQuote as Quote,
  SophisticatedButtonText as ButtonText,
}