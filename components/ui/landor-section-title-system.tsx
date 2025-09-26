"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { LANDOR_EASING } from "@/lib/landor-magnetic-system"

// 🏛️ LANDOR SECTION TITLE SYSTEM - SINGLE SOURCE OF TRUTH
// Mathematical precision with Perfect Fourth scale + Sophisticated visual hierarchy
// Eliminates all competing section title systems - THIS IS THE ONLY SECTION TITLE SYSTEM

// 📐 SECTION TITLE VARIANTS
export type SectionTitleVariant = "standard" | "hero" | "subtle" | "dramatic"
export type SectionTitleSize = "medium" | "large" | "extra-large"

interface LandorSectionTitleProps {
  number?: string
  title: string
  subtitle?: string
  variant?: SectionTitleVariant
  size?: SectionTitleSize
  className?: string
  animated?: boolean
  centered?: boolean
}

// 🎨 VARIANT CONFIGURATIONS
const VARIANT_STYLES = {
  standard: {
    container: "mb-16 md:mb-20",
    number: {
      container: "inline-flex items-center gap-6 text-sm font-light tracking-[0.3em] uppercase text-muted-foreground/80 mb-8",
      line: "w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent",
      text: "px-4 py-1 border border-primary/20 rounded-full bg-primary/5"
    },
    title: {
      base: "font-serif font-extralight text-center leading-[0.9] tracking-[-0.03em] mb-6 text-foreground",
      sizes: {
        medium: "text-4xl md:text-5xl lg:text-6xl",
        large: "text-5xl md:text-6xl lg:text-7xl", 
        "extra-large": "text-6xl md:text-7xl lg:text-8xl"
      }
    },
    subtitle: "text-xl font-light leading-relaxed max-w-3xl mx-auto text-muted-foreground/90"
  },
  hero: {
    container: "mb-20 md:mb-24",
    number: {
      container: "inline-flex items-center gap-8 text-base font-light tracking-[0.4em] uppercase text-muted-foreground/70 mb-12",
      line: "w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent",
      text: "px-6 py-2 border border-primary/30 rounded-full bg-primary/10 text-primary/90"
    },
    title: {
      base: "font-serif font-thin text-center leading-[0.85] tracking-[-0.04em] mb-8 text-foreground",
      sizes: {
        medium: "text-6xl md:text-7xl lg:text-8xl",
        large: "text-7xl md:text-8xl lg:text-9xl",
        "extra-large": "text-8xl md:text-9xl lg:text-[10rem]"
      }
    },
    subtitle: "text-2xl font-light leading-relaxed max-w-4xl mx-auto text-muted-foreground/80"
  },
  subtle: {
    container: "mb-12 md:mb-16",
    number: {
      container: "inline-flex items-center gap-4 text-xs font-light tracking-[0.25em] uppercase text-muted-foreground/60 mb-6",
      line: "w-12 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent",
      text: "px-3 py-1 text-muted-foreground/60"
    },
    title: {
      base: "font-serif font-light text-center leading-tight tracking-[-0.02em] mb-4 text-foreground",
      sizes: {
        medium: "text-3xl md:text-4xl lg:text-5xl",
        large: "text-4xl md:text-5xl lg:text-6xl",
        "extra-large": "text-5xl md:text-6xl lg:text-7xl"
      }
    },
    subtitle: "text-lg font-light leading-relaxed max-w-2xl mx-auto text-muted-foreground"
  },
  dramatic: {
    container: "mb-20 md:mb-28",
    number: {
      container: "inline-flex items-center gap-10 text-lg font-light tracking-[0.5em] uppercase text-primary/80 mb-16",
      line: "w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent",
      text: "px-8 py-3 border-2 border-primary/40 rounded-full bg-primary/5 text-primary"
    },
    title: {
      base: "font-serif font-extralight text-center leading-[0.8] tracking-[-0.05em] mb-10 text-foreground bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent",
      sizes: {
        medium: "text-7xl md:text-8xl lg:text-9xl",
        large: "text-8xl md:text-9xl lg:text-[10rem]",
        "extra-large": "text-9xl md:text-[10rem] lg:text-[12rem]"
      }
    },
    subtitle: "text-2xl font-light leading-relaxed max-w-5xl mx-auto text-muted-foreground/70"
  }
} as const

// 🎭 ANIMATION VARIANTS
const titleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: LANDOR_EASING.signature 
    }
  }
}

const numberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: LANDOR_EASING.entrance,
      delay: 0.2 
    }
  }
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: LANDOR_EASING.entrance,
      delay: 0.4 
    }
  }
}

// 🏛️ MAIN COMPONENT
export const LandorSectionTitle: React.FC<LandorSectionTitleProps> = ({
  number,
  title,
  subtitle,
  variant = "standard",
  size = "large",
  className,
  animated = true,
  centered = true
}) => {
  const styles = VARIANT_STYLES[variant]
  
  const containerClass = cn(
    styles.container,
    centered ? "text-center" : "text-left",
    className
  )
  
  const titleClass = cn(
    styles.title.base,
    styles.title.sizes[size]
  )

  const AnimationWrapper = ({ children, variants, delay = 0 }: any) => {
    if (!animated) return children
    
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...variants.visible.transition, delay }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={containerClass}>
      {/* Section Number with Decorative Lines */}
      {number && (
        <AnimationWrapper variants={numberVariants}>
          <div className={styles.number.container}>
            <div className={styles.number.line} />
            <span className={styles.number.text}>{number}</span>
            <div className={styles.number.line} />
          </div>
        </AnimationWrapper>
      )}

      {/* Main Title */}
      <AnimationWrapper variants={titleVariants}>
        <h2 className={titleClass}>
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {line.includes('italic:') ? (
                <>
                  {line.split('italic:')[0]}
                  <span className="italic font-light bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                    {line.split('italic:')[1]}
                  </span>
                </>
              ) : (
                line
              )}
            </React.Fragment>
          ))}
        </h2>
      </AnimationWrapper>

      {/* Optional Subtitle */}
      {subtitle && (
        <AnimationWrapper variants={subtitleVariants}>
          <p className={styles.subtitle}>
            {subtitle.split('em:').map((part, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <em className="font-serif italic text-foreground/80">
                    {part.split(':em')[0]}
                  </em>
                )}
                {part.includes(':em') ? part.split(':em')[1] : part}
              </React.Fragment>
            ))}
          </p>
        </AnimationWrapper>
      )}
    </div>
  )
}

// 🎯 PRESET COMPONENTS FOR COMMON USE CASES
export const LandorHeroTitle: React.FC<Omit<LandorSectionTitleProps, 'variant' | 'size'>> = (props) => (
  <LandorSectionTitle {...props} variant="hero" size="extra-large" />
)

export const LandorStandardTitle: React.FC<Omit<LandorSectionTitleProps, 'variant'>> = (props) => (
  <LandorSectionTitle {...props} variant="standard" />
)

export const LandorSubtleTitle: React.FC<Omit<LandorSectionTitleProps, 'variant'>> = (props) => (
  <LandorSectionTitle {...props} variant="subtle" />
)

export const LandorDramaticTitle: React.FC<Omit<LandorSectionTitleProps, 'variant' | 'size'>> = (props) => (
  <LandorSectionTitle {...props} variant="dramatic" size="extra-large" />
)

// 🎨 EXPORT ALL FOR EASY ACCESS
export default {
  LandorSectionTitle,
  LandorHeroTitle,
  LandorStandardTitle,
  LandorSubtleTitle,
  LandorDramaticTitle
}
