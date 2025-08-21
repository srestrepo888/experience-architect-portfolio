"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

interface MasterpieceBackgroundProps {
  section: "hero" | "about" | "projects" | "experience" | "services" | "contact" | "footer"
  children: ReactNode
  className?: string
}

export function MasterpieceBackgroundSystem({ 
  section, 
  children, 
  className = "" 
}: MasterpieceBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Section-specific background configurations with COMPLEMENTARY backgrounds
  const getSectionConfig = () => {
    switch (section) {
      case "hero":
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.35, 0.45, 0.35],
          overlayOpacity: [0.55, 0.35, 0.55],
          overlayColor: "from-background/35 via-background/15 to-background/55",
          textOverlay: "from-background/10 via-transparent to-background/10",
          scale: [1, 1.1, 1],
          blur: [0, 2, 0],
          className: "object-cover object-center",
          animation: "luxury"
        }
      
      case "about":
        return {
          asset: "/elegant-brand-identity.png", // Complementary background
          opacity: [0.25, 0.32, 0.25],
          overlayOpacity: [0.50, 0.40, 0.50],
          overlayColor: "from-background/50 via-background/30 to-background/50",
          textOverlay: "from-background/20 via-background/10 to-background/20",
          scale: [1.05, 1, 1.05],
          blur: [8, 4, 8],
          className: "object-cover object-center",
          animation: "elegant"
        }

      case "projects":
        return {
          asset: "/elegant-fashion-ecommerce.png", // Complementary background
          opacity: [0.28, 0.36, 0.28],
          overlayOpacity: [0.45, 0.35, 0.45],
          overlayColor: "from-background/45 via-background/25 to-background/45",
          textOverlay: "from-background/15 via-background/5 to-background/15",
          scale: [1, 1.08, 1],
          blur: [6, 3, 6],
          className: "object-cover object-center",
          animation: "dynamic"
        }

      case "experience":
        return {
          asset: "/elegant-professional-woman.png", // Complementary background
          opacity: [0.30, 0.38, 0.30],
          overlayOpacity: [0.42, 0.30, 0.42],
          overlayColor: "from-background/42 via-background/22 to-background/42",
          textOverlay: "from-background/14 via-background/6 to-background/14",
          scale: [1.03, 1.06, 1.03],
          blur: [5, 2, 5],
          className: "object-cover object-center",
          animation: "sophisticated"
        }

      case "services":
        return {
          asset: "/minimal-luxury-interior.png", // Complementary background
          opacity: [0.32, 0.40, 0.32],
          overlayOpacity: [0.40, 0.25, 0.40],
          overlayColor: "from-background/40 via-background/20 to-background/40",
          textOverlay: "from-background/12 via-transparent to-background/12",
          scale: [1, 1.04, 1],
          blur: [4, 2, 4],
          className: "object-cover object-center",
          animation: "refined"
        }

      case "contact":
        return {
          asset: "/luxury-detail-1.png", // Complementary background
          opacity: [0.34, 0.40, 0.34],
          overlayOpacity: [0.38, 0.28, 0.38],
          overlayColor: "from-background/38 via-background/18 to-background/38",
          textOverlay: "from-background/12 via-transparent to-background/12",
          scale: [1, 1.04, 1],
          blur: [3, 1, 3],
          className: "object-cover object-top",
          animation: "elegant"
        }

      case "footer":
        return {
          asset: "/luxury-detail-2.png", // Complementary background
          opacity: [0.25, 0.32, 0.25],
          overlayOpacity: [0.50, 0.40, 0.50],
          overlayColor: "from-background/50 via-background/30 to-background/50",
          textOverlay: "from-background/20 via-background/10 to-background/20",
          scale: [1.02, 1.05, 1.02],
          blur: [8, 4, 8],
          className: "object-cover object-center",
          animation: "minimal"
        }

      default:
        return {
          asset: "/background-texture.png",
          opacity: [0.30, 0.40, 0.30],
          overlayOpacity: [0.45, 0.30, 0.45],
          overlayColor: "from-background/45 via-background/25 to-background/45",
          textOverlay: "from-background/15 via-background/5 to-background/15",
          scale: [1, 1.05, 1],
          blur: [4, 2, 4],
          className: "object-cover object-center",
          animation: "default"
        }
    }
  }

  const config = getSectionConfig()

  // Sophisticated scroll-based transformations
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.opacity)
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], config.scale)
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.5, 1], config.blur)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.overlayOpacity)

  // Luxury animation variants
  const animationVariants = {
    luxury: {
      initial: { opacity: 0, scale: 1.1 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
    elegant: {
      initial: { opacity: 0, scale: 1.05 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
    dynamic: {
      initial: { opacity: 0, scale: 1.08 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    sophisticated: {
      initial: { opacity: 0, scale: 1.03 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
    },
    refined: {
      initial: { opacity: 0, scale: 1.06 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    },
    minimal: {
      initial: { opacity: 0, scale: 1.02 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    },
    default: {
      initial: { opacity: 0, scale: 1.05 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Luxury Background Image with Sophisticated Effects */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
          filter: `blur(${backgroundBlur}px)`,
        }}
        {...animationVariants[config.animation as keyof typeof animationVariants]}
      >
        <Image
          src={config.asset}
          alt={`${section} background`}
          fill
          className={config.className}
          priority={section === "hero"}
          quality={95}
        />
      </motion.div>

      {/* Sophisticated Overlay System */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        {/* Primary overlay for text readability */}
        <div className={`absolute inset-0 bg-gradient-to-b ${config.overlayColor}`} />
        
        {/* Secondary overlay for enhanced contrast */}
        <div className={`absolute inset-0 bg-gradient-to-b ${config.textOverlay}`} />
        
        {/* Luxury texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_2px_2px,rgba(15,23,42,0.6)_1px,transparent_0)] bg-[length:24px_24px]" />
        
        {/* Sophisticated noise pattern */}
        <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(45deg,transparent_25%,rgba(15,23,42,0.1)_25%,rgba(15,23,42,0.1)_50%,transparent_50%,transparent_75%,rgba(15,23,42,0.1)_75%)] bg-[length:8px_8px]" />
      </motion.div>

      {/* Content with Luxury Positioning - NO SECTION DIVIDERS */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Specialized background components for each section
export function HeroBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="hero">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function AboutBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="about">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ProjectsBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="projects">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ExperienceBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="experience">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ServicesBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="services">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ContactBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="contact">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function FooterBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="footer">
      {children}
    </MasterpieceBackgroundSystem>
  )
}