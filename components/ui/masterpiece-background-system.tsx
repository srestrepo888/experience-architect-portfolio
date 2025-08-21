"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

const ASSET_VERSION = "v2025-08-21-1"

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

  // Unified, fluent background system
  const getSectionConfig = () => {
    const HERO_ASSET = "/luxury-geometric-background.png"
    const SERVICES_ASSET = "/background-texture.png"

    switch (section) {
      case "hero":
        return {
          asset: HERO_ASSET,
          opacity: [0.36, 0.44, 0.36],
          overlayOpacity: [0.55, 0.36, 0.55],
          overlayColor: "from-background/40 via-background/20 to-background/55",
          textOverlay: "from-background/10 via-transparent to-background/10",
          scale: [1, 1.08, 1],
          blur: [0, 1, 0],
          className: "object-cover object-center",
          animation: "luxury",
        }

      case "about":
        // Muted variant—same palette, higher blur and overlay for calm reading
        return {
          asset: HERO_ASSET,
          opacity: [0.24, 0.30, 0.24],
          overlayOpacity: [0.58, 0.44, 0.58],
          overlayColor: "from-background/55 via-background/35 to-background/55",
          textOverlay: "from-background/18 via-background/8 to-background/18",
          scale: [1.02, 1.04, 1.02],
          blur: [5, 3, 5],
          className: "object-cover object-center",
          animation: "elegant",
        }

      case "projects":
        return {
          asset: HERO_ASSET,
          opacity: [0.30, 0.38, 0.30],
          overlayOpacity: [0.48, 0.34, 0.48],
          overlayColor: "from-background/48 via-background/28 to-background/48",
          textOverlay: "from-background/12 via-transparent to-background/12",
          scale: [1, 1.06, 1],
          blur: [2, 1, 2],
          className: "object-cover object-center",
          animation: "dynamic",
        }

      case "experience":
        return {
          asset: HERO_ASSET,
          opacity: [0.28, 0.36, 0.28],
          overlayOpacity: [0.50, 0.36, 0.50],
          overlayColor: "from-background/50 via-background/30 to-background/50",
          textOverlay: "from-background/14 via-background/6 to-background/14",
          scale: [1.01, 1.04, 1.01],
          blur: [3, 2, 3],
          className: "object-cover object-center",
          animation: "sophisticated",
        }

      case "services":
        // Enhanced but subtle texture; harmonized overlays with hero
        return {
          asset: SERVICES_ASSET,
          opacity: [0.28, 0.34, 0.28],
          overlayOpacity: [0.50, 0.36, 0.50],
          overlayColor: "from-background/50 via-background/28 to-background/50",
          textOverlay: "from-background/14 via-background/6 to-background/14",
          scale: [1.01, 1.05, 1.01],
          blur: [4, 2, 4],
          className: "object-cover object-center",
          animation: "refined",
        }

      case "contact":
        return {
          asset: HERO_ASSET,
          opacity: [0.30, 0.36, 0.30],
          overlayOpacity: [0.46, 0.32, 0.46],
          overlayColor: "from-background/46 via-background/26 to-background/46",
          textOverlay: "from-background/12 via-transparent to-background/12",
          scale: [1, 1.04, 1],
          blur: [2, 1, 2],
          className: "object-cover object-center",
          animation: "elegant",
        }

      case "footer":
        return {
          asset: HERO_ASSET,
          opacity: [0.26, 0.32, 0.26],
          overlayOpacity: [0.50, 0.38, 0.50],
          overlayColor: "from-background/52 via-background/30 to-background/52",
          textOverlay: "from-background/16 via-background/8 to-background/16",
          scale: [1.01, 1.03, 1.01],
          blur: [4, 3, 4],
          className: "object-cover object-center",
          animation: "minimal",
        }

      default:
        return {
          asset: HERO_ASSET,
          opacity: [0.30, 0.40, 0.30],
          overlayOpacity: [0.45, 0.30, 0.45],
          overlayColor: "from-background/45 via-background/25 to-background/45",
          textOverlay: "from-background/15 via-background/5 to-background/15",
          scale: [1, 1.05, 1],
          blur: [4, 2, 4],
          className: "object-cover object-center",
          animation: "default",
        }
    }
  }

  const config = getSectionConfig()

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.opacity)
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], config.scale)
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.5, 1], config.blur)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.overlayOpacity)

  const animationVariants = {
    luxury: { initial: { opacity: 0, scale: 1.08 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
    elegant: { initial: { opacity: 0, scale: 1.04 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
    dynamic: { initial: { opacity: 0, scale: 1.06 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    sophisticated: { initial: { opacity: 0, scale: 1.02 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
    refined: { initial: { opacity: 0, scale: 1.04 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    minimal: { initial: { opacity: 0, scale: 1.02 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
    default: { initial: { opacity: 0, scale: 1.04 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  }

  const assetWithVersion = `${config.asset}?${ASSET_VERSION}`

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{ opacity: backgroundOpacity, scale: backgroundScale, filter: `blur(${backgroundBlur}px)` }}
        {...animationVariants[config.animation as keyof typeof animationVariants]}
      >
        <Image
          src={assetWithVersion}
          alt={`${section} background`}
          fill
          className={config.className}
          priority={section === "hero"}
          quality={95}
        />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
        <div className={`absolute inset-0 bg-gradient-to-b ${config.overlayColor}`} />
        <div className={`absolute inset-0 bg-gradient-to-b ${config.textOverlay}`} />
      </motion.div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export function HeroBackground({ children }: { children: ReactNode }) {
  return <MasterpieceBackgroundSystem section="hero">{children}</MasterpieceBackgroundSystem>
}
export function AboutBackground({ children }: { children: ReactNode }) {
  return <MasterpieceBackgroundSystem section="about">{children}</MasterpieceBackgroundSystem>
}
export function ProjectsBackground({ children }: { children: ReactNode }) {
  return <MasterpieceBackgroundSystem section="projects">{children}</MasterpieceBackgroundSystem>
}
export function ExperienceBackground({ children }: { children: ReactNode }) {
  return <MasterpieceBackgroundSystem section="experience">{children}</MasterpieceBackgroundSystem>
}
export function ServicesBackground({ children }: { children: ReactNode }) {
  return <MasterpieceBackgroundSystem section="services">{children}</MasterpieceBackgroundSystem>
}
export function ContactBackground({ children }: { children: ReactNode }) {
  return <MasterpieceBackgroundSystem section="contact">{children}</MasterpieceBackgroundSystem>
}
export function FooterBackground({ children }: { children: ReactNode }) {
  return <MasterpieceBackgroundSystem section="footer">{children}</MasterpieceBackgroundSystem>
}