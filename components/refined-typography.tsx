import { cn } from "@/lib/utils"
import type React from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

// Display - Used for hero sections and major headlines
export function DisplayLarge({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-cormorant text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[-0.02em] leading-[1.05] text-black/90",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function DisplayMedium({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-cormorant text-5xl md:text-6xl lg:text-7xl font-extralight tracking-[-0.02em] leading-[1.05] text-black/90",
        className,
      )}
    >
      {children}
    </h1>
  )
}

// Headings - Used for section titles
export function HeadingLarge({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-cormorant text-3xl md:text-4xl lg:text-5xl font-extralight tracking-[-0.01em] leading-[1.1] text-black/90",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function HeadingMedium({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-cormorant text-2xl md:text-3xl font-extralight tracking-[-0.01em] leading-[1.1] text-black/90",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function HeadingSmall({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-cormorant text-xl md:text-2xl font-extralight tracking-[-0.01em] leading-[1.1] text-black/90",
        className,
      )}
    >
      {children}
    </h3>
  )
}

// Subheadings - Used for section descriptions and card titles
export function SubheadingLarge({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        "font-freight text-xl md:text-2xl font-light tracking-normal leading-[1.3] text-black/80",
        className,
      )}
    >
      {children}
    </h4>
  )
}

export function SubheadingMedium({ children, className }: TypographyProps) {
  return (
    <h5
      className={cn(
        "font-freight text-lg md:text-xl font-light tracking-normal leading-[1.3] text-black/80",
        className,
      )}
    >
      {children}
    </h5>
  )
}

// Body text - Used for paragraphs and longer content
export function BodyLarge({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-freight text-lg leading-[1.6] text-black/75 font-light tracking-[0.01em]", className)}>
      {children}
    </p>
  )
}

export function BodyMedium({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-freight text-base leading-[1.6] text-black/75 font-light tracking-[0.01em]", className)}>
      {children}
    </p>
  )
}

export function BodySmall({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-freight text-sm leading-[1.6] text-black/75 font-light tracking-[0.01em]", className)}>
      {children}
    </p>
  )
}

// Quote - Used for testimonials and highlighted quotes
export function Quote({ children, className }: TypographyProps) {
  return (
    <blockquote
      className={cn(
        "font-cormorant text-xl md:text-2xl italic font-extralight leading-[1.4] text-black/80 tracking-[-0.01em]",
        className,
      )}
    >
      {children}
    </blockquote>
  )
}

// Caption - Used for image captions, metadata, and small notes
export function Caption({ children, className }: TypographyProps) {
  return (
    <p className={cn("font-freight text-xs uppercase tracking-[0.15em] text-black/60 font-light", className)}>
      {children}
    </p>
  )
}

// Label - Used for form labels and small headings
export function Label({ children, className }: TypographyProps) {
  return (
    <label className={cn("font-freight text-sm uppercase tracking-[0.15em] text-black/60 font-light", className)}>
      {children}
    </label>
  )
}

// Button text - Used for buttons and interactive elements
export function ButtonText({ children, className }: TypographyProps) {
  return (
    <span className={cn("font-freight text-sm uppercase tracking-[0.15em] font-light", className)}>{children}</span>
  )
}

// Link text - Used for links and navigation
export function LinkText({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "font-freight text-sm tracking-[0.05em] text-black/80 hover:text-black transition-colors",
        className,
      )}
    >
      {children}
    </span>
  )
}

// Decorative text - Used for special accents and decorative elements
export function DecorativeText({ children, className }: TypographyProps) {
  return (
    <span className={cn("font-didot text-base italic tracking-[0.05em] text-black/70", className)}>{children}</span>
  )
}

// Overline - Used above headings or as category indicators
export function Overline({ children, className }: TypographyProps) {
  return (
    <span className={cn("font-freight text-xs uppercase tracking-[0.2em] text-black/50 font-light", className)}>
      {children}
    </span>
  )
}
