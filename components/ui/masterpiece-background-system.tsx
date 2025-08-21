"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

const ASSET_VERSION = "v2025-08-21-4-definitive"

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

  // DEFINITIVE VISUAL JOURNEY: Each section creates a distinct, powerful visual experience
  const getSectionConfig = () => {
    switch (section) {
      case "hero":
        // MAXIMUM IMPACT: Full luxury geometric power
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.95, 1.0, 0.95],
          overlayOpacity: [0.15, 0.05, 0.15],
          overlayColor: "from-background/15 via-transparent to-background/20",
          textOverlay: "from-transparent via-transparent to-transparent",
          scale: [1, 1.08, 1],
          blur: [0, 0, 0],
          className: "object-cover object-center",
          animation: "luxury",
          sophisticatedBlend: "normal",
        }

      case "about":
        // PORTRAIT HARMONY: Elegant brand identity that frames your portrait
        return {
          asset: "/elegant-brand-identity.png",
          opacity: [0.70, 0.80, 0.70],
          overlayOpacity: [0.40, 0.25, 0.40],
          overlayColor: "from-background/40 via-background/15 to-background/45",
          textOverlay: "from-background/8 via-transparent to-background/12",
          scale: [1.03, 1.06, 1.03],
          blur: [1, 0, 1],
          className: "object-cover object-center",
          animation: "elegant",
          sophisticatedBlend: "normal",
        }

      case "projects":
        // CREATIVE ENERGY: Dynamic fashion ecommerce aesthetic for project showcase
        return {
          asset: "/elegant-fashion-ecommerce.png",
          opacity: [0.75, 0.85, 0.75],
          overlayOpacity: [0.25, 0.10, 0.25],
          overlayColor: "from-background/25 via-transparent to-background/30",
          textOverlay: "from-background/5 via-transparent to-background/8",
          scale: [1, 1.10, 1],
          blur: [0, 0, 0],
          className: "object-cover object-center",
          animation: "dynamic",
          sophisticatedBlend: "normal",
        }

      case "experience":
        // PROFESSIONAL POWER: Executive portrait energy for career timeline
        return {
          asset: "/elegant-professional-woman.png",
          opacity: [0.65, 0.75, 0.65],
          overlayOpacity: [0.45, 0.30, 0.45],
          overlayColor: "from-background/45 via-background/20 to-background/50",
          textOverlay: "from-background/10 via-background/3 to-background/15",
          scale: [1.02, 1.05, 1.02],
          blur: [2, 1, 2],
          className: "object-cover object-center",
          animation: "sophisticated",
          sophisticatedBlend: "normal",
        }

      case "services":
        // LUXURY TEXTURE: Minimal luxury interior for service sophistication
        return {
          asset: "/minimal-luxury-interior.png",
          opacity: [0.80, 0.90, 0.80],
          overlayOpacity: [0.30, 0.15, 0.30],
          overlayColor: "from-background/30 via-background/8 to-background/35",
          textOverlay: "from-background/6 via-transparent to-background/10",
          scale: [1.01, 1.07, 1.01],
          blur: [0, 0, 0],
          className: "object-cover object-center",
          animation: "refined",
          sophisticatedBlend: "normal",
        }

      case "contact":
        // SOPHISTICATED CLOSE: Luxury detail for final engagement
        return {
          asset: "/luxury-detail-1.png",
          opacity: [0.60, 0.70, 0.60],
          overlayOpacity: [0.50, 0.35, 0.50],
          overlayColor: "from-background/50 via-background/25 to-background/55",
          textOverlay: "from-background/12 via-background/5 to-background/18",
          scale: [1, 1.04, 1],
          blur: [1, 0, 1],
          className: "object-cover object-center",
          animation: "elegant",
          sophisticatedBlend: "normal",
        }

      case "footer":
        // MASTERPIECE FINALE: Secondary luxury detail for sophisticated closure
        return {
          asset: "/luxury-detail-2.png",
          opacity: [0.55, 0.65, 0.55],
          overlayOpacity: [0.55, 0.40, 0.55],
          overlayColor: "from-background/55 via-background/30 to-background/60",
          textOverlay: "from-background/15 via-background/8 to-background/20",
          scale: [1.01, 1.03, 1.01],
          blur: [2, 1, 2],
          className: "object-cover object-center",
          animation: "minimal",
          sophisticatedBlend: "normal",
        }

      default:
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.50, 0.60, 0.50],
          overlayOpacity: [0.45, 0.30, 0.45],
          overlayColor: "from-background/45 via-background/25 to-background/45",
          textOverlay: "from-background/15 via-background/5 to-background/15",
          scale: [1, 1.05, 1],
          blur: [2, 1, 2],
          className: "object-cover object-center",
          animation: "default",
          sophisticatedBlend: "normal",
        }
    }
  }

  const config = getSectionConfig()
  
  // Debug logging
  console.log(`Background system for ${section}:`, {
    asset: config.asset,
    opacity: config.opacity,
    assetPath: `${config.asset}?${ASSET_VERSION}`
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.opacity)
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], config.scale)
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.5, 1], config.blur)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.overlayOpacity)

  const animationVariants = {
    luxury: { initial: { opacity: 0, scale: 1.12, filter: "blur(8px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
    elegant: { initial: { opacity: 0, scale: 1.06, filter: "blur(6px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
    dynamic: { initial: { opacity: 0, scale: 1.08, filter: "blur(4px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
    sophisticated: { initial: { opacity: 0, scale: 1.04, filter: "blur(6px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
    refined: { initial: { opacity: 0, scale: 1.06, filter: "blur(5px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
    minimal: { initial: { opacity: 0, scale: 1.03, filter: "blur(4px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    default: { initial: { opacity: 0, scale: 1.05, filter: "blur(5px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
  }

  const assetWithVersion = `${config.asset}?${ASSET_VERSION}`

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{ 
          opacity: backgroundOpacity, 
          scale: backgroundScale, 
          filter: `blur(${backgroundBlur}px)`,
          mixBlendMode: config.sophisticatedBlend as any || "normal"
        }}
        {...animationVariants[config.animation as keyof typeof animationVariants]}
      >
        <Image
          src={assetWithVersion}
          alt={`${section} background`}
          fill
          className={config.className}
          priority={section === "hero"}
          quality={95}
          onError={(e) => {
            console.log(`Failed to load background image: ${assetWithVersion}`)
            // Fallback to a solid color
            e.currentTarget.style.display = 'none'
            const parent = e.currentTarget.parentElement
            if (parent) {
              parent.style.backgroundColor = '#f5f2ef'
            }
          }}
        />
      </motion.div>

      <motion.div 
        className="absolute inset-0" 
        style={{ opacity: overlayOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${config.overlayColor}`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${config.textOverlay}`} />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/5 to-background/10" />
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