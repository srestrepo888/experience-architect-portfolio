"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

const ASSET_VERSION = "v2025-08-21-6-masterpiece"

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

  // CORRECTED: Using only your approved design assets with enhanced visual impact
  const getSectionConfig = () => {
    const APPROVED_GEOMETRIC = "/luxury-geometric-background.png"
    const APPROVED_TEXTURE = "/background-texture.png"

    switch (section) {
      case "hero":
        // MAXIMUM IMPACT: Your luxury geometric background at full power
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.85, 0.95, 0.85],
          overlayOpacity: [0.25, 0.10, 0.25],
          overlayColor: "from-background/25 via-background/5 to-background/30",
          textOverlay: "from-background/5 via-transparent to-background/8",
          scale: [1, 1.08, 1],
          blur: [0, 0, 0],
          className: "object-cover object-center",
          animation: "luxury",
          sophisticatedBlend: "normal",
        }

      case "about":
        // PORTRAIT FOCUSED: Muted geometric that doesn't compete with your portrait
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.25, 0.35, 0.25],
          overlayOpacity: [0.75, 0.60, 0.75],
          overlayColor: "from-background/75 via-background/50 to-background/80",
          textOverlay: "from-background/20 via-background/10 to-background/25",
          scale: [1.02, 1.05, 1.02],
          blur: [8, 4, 8],
          className: "object-cover object-center",
          animation: "elegant",
          sophisticatedBlend: "normal",
        }

      case "projects":
        // CLEAN GALLERY: Pure gradient background for project showcase
        return {
          asset: null, // No image asset - pure gradient
          opacity: [1, 1, 1],
          overlayOpacity: [1, 1, 1],
          overlayColor: "from-[hsl(33,15%,96%)] via-[hsl(15,12%,95%)] to-[hsl(33,15%,97%)]",
          textOverlay: "from-transparent via-transparent to-transparent",
          scale: [1, 1, 1],
          blur: [0, 0, 0],
          className: "object-cover object-center",
          animation: "elegant",
          sophisticatedBlend: "normal",
        }

      case "experience":
        // ELEGANT ANIMATED GRADIENT: Professional timeline with subtle movement
        return {
          asset: null, // No image asset - pure animated gradient
          opacity: [1, 1, 1],
          overlayOpacity: [1, 1, 1],
          overlayColor: "from-[hsl(33,15%,95%)] via-[hsl(15,12%,95%)] to-[hsl(33,15%,95%)]",
          textOverlay: "from-transparent via-transparent to-transparent",
          scale: [1, 1, 1],
          blur: [0, 0, 0],
          className: "object-cover object-center",
          animation: "sophisticated",
          sophisticatedBlend: "normal",
          customGradient: true,
        }

      case "services":
        // TEXTURE DISTINCTION: Your approved texture background for services
        return {
          asset: APPROVED_TEXTURE,
          opacity: [0.70, 0.80, 0.70],
          overlayOpacity: [0.35, 0.20, 0.35],
          overlayColor: "from-background/35 via-background/15 to-background/40",
          textOverlay: "from-background/8 via-background/3 to-background/12",
          scale: [1.01, 1.05, 1.01],
          blur: [1, 0, 1],
          className: "object-cover object-center",
          animation: "refined",
          sophisticatedBlend: "normal",
        }

      case "contact":
        // ENGAGEMENT FOCUS: Reduced geometric for contact clarity
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.35, 0.45, 0.35],
          overlayOpacity: [0.60, 0.45, 0.60],
          overlayColor: "from-background/60 via-background/40 to-background/65",
          textOverlay: "from-background/15 via-background/8 to-background/20",
          scale: [1, 1.03, 1],
          blur: [3, 2, 3],
          className: "object-cover object-center",
          animation: "elegant",
          sophisticatedBlend: "normal",
        }

      case "footer":
        // SOPHISTICATED CLOSURE: Subtle geometric for footer
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.30, 0.40, 0.30],
          overlayOpacity: [0.65, 0.50, 0.65],
          overlayColor: "from-background/65 via-background/45 to-background/70",
          textOverlay: "from-background/18 via-background/10 to-background/22",
          scale: [1.01, 1.03, 1.01],
          blur: [5, 3, 5],
          className: "object-cover object-center",
          animation: "minimal",
          sophisticatedBlend: "normal",
        }

      default:
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.40, 0.50, 0.40],
          overlayOpacity: [0.50, 0.35, 0.50],
          overlayColor: "from-background/50 via-background/30 to-background/55",
          textOverlay: "from-background/15 via-background/8 to-background/18",
          scale: [1, 1.04, 1],
          blur: [3, 2, 3],
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
      {/* Background Layer - Image or Pure Gradient */}
      {config.asset && (
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
      )}

      <motion.div 
        className="absolute inset-0" 
        style={{ opacity: overlayOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${config.overlayColor} ${
          section === "experience" ? 'animate-[subtleVerticalFlow_45s_ease-in-out_infinite]' : ''
        }`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${config.textOverlay}`} />
        {config.asset && <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/5 to-background/10" />}
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