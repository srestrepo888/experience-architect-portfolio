"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

const ASSET_VERSION = "v2025-08-22-safeguard-compliant"

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

  // DISTINCT CONNECTED BACKGROUNDS: Each section has unique character while maintaining cohesion
  const getSectionConfig = () => {
    const APPROVED_GEOMETRIC = "/luxury-geometric-background.png"
    const APPROVED_TEXTURE = "/background-texture.png"

    switch (section) {
      case "hero":
        // LUXURY PRESENCE: Content-focused with sophisticated backdrop
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.55, 0.65, 0.55],
          overlayOpacity: [0.20, 0.12, 0.20],
          overlayColor: "from-slate-900/10 via-slate-800/8 to-slate-900/12",
          textOverlay: "from-background/5 via-transparent to-background/8",
          scale: [1, 1.03, 1],
          blur: [0, 0, 0],
          className: "object-cover object-center",
          animation: "luxury",
          sophisticatedBlend: "normal",
        }

      case "about":
        // CONTENT-FOCUSED: Subtle warm backdrop that enhances readability
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.32, 0.42, 0.32],
          overlayOpacity: [0.68, 0.52, 0.68],
          overlayColor: "from-rose-50/75 via-amber-50/65 to-orange-50/70",
          textOverlay: "from-background/25 via-background/15 to-background/20",
          scale: [1.02, 1.05, 1.02],
          blur: [6, 3, 6],
          className: "object-cover object-right",
          animation: "elegant",
          sophisticatedBlend: "soft-light",
        }

      case "projects":
        // GALLERY EXCELLENCE: Projects are the stars with minimal distraction
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.20, 0.30, 0.20],
          overlayOpacity: [0.85, 0.75, 0.85],
          overlayColor: "from-slate-50/90 via-stone-25/80 to-slate-50/88",
          textOverlay: "from-transparent via-transparent to-transparent",
          scale: [1, 1.02, 1],
          blur: [12, 8, 12],
          className: "object-cover object-center",
          animation: "minimal",
          sophisticatedBlend: "multiply",
        }

      case "experience":
        // PROFESSIONAL BALANCE: Subtle texture that supports content hierarchy
        return {
          asset: APPROVED_TEXTURE,
          opacity: [0.25, 0.35, 0.25],
          overlayOpacity: [0.70, 0.55, 0.70],
          overlayColor: "from-slate-100/75 via-blue-50/60 to-slate-100/70",
          textOverlay: "from-white/15 via-white/8 to-white/12",
          scale: [1.02, 1.04, 1.02],
          blur: [8, 4, 8],
          className: "object-cover object-left",
          animation: "sophisticated",
          sophisticatedBlend: "multiply",
          customGradient: true,
        }

      case "services":
        // SOPHISTICATED TEXTURE: Balanced texture that enhances without competing
        return {
          asset: APPROVED_TEXTURE,
          opacity: [0.40, 0.50, 0.40],
          overlayOpacity: [0.55, 0.45, 0.55],
          overlayColor: "from-emerald-50/70 via-teal-25/60 to-cyan-50/65",
          textOverlay: "from-white/18 via-white/10 to-white/15",
          scale: [1.01, 1.03, 1.01],
          blur: [4, 2, 4],
          className: "object-cover object-center",
          animation: "refined",
          sophisticatedBlend: "overlay",
        }

      case "contact":
        // ELEGANT CLARITY: Minimal distraction for engagement focus
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.30, 0.40, 0.30],
          overlayOpacity: [0.60, 0.45, 0.60],
          overlayColor: "from-background/65 via-background/45 to-background/60",
          textOverlay: "from-background/15 via-background/8 to-background/12",
          scale: [1, 1.03, 1],
          blur: [6, 3, 6],
          className: "object-cover object-center",
          animation: "elegant",
          sophisticatedBlend: "normal",
        }

      case "footer":
        // MEMORABLE CONCLUSION: Sophisticated backdrop with content focus
        return {
          asset: APPROVED_GEOMETRIC,
          opacity: [0.45, 0.55, 0.45],
          overlayOpacity: [0.60, 0.45, 0.60],
          overlayColor: "from-slate-200/75 via-stone-100/65 to-slate-200/70",
          textOverlay: "from-white/15 via-white/8 to-white/12",
          scale: [1.02, 1.04, 1.02],
          blur: [6, 3, 6],
          className: "object-cover object-bottom",
          animation: "elegant",
          sophisticatedBlend: "multiply",
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
    luxury: { initial: { opacity: 0, scale: 1.12, filter: "blur(8px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any } },
    elegant: { initial: { opacity: 0, scale: 1.06, filter: "blur(6px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as any } },
    dynamic: { initial: { opacity: 0, scale: 1.08, filter: "blur(4px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as any } },
    sophisticated: { initial: { opacity: 0, scale: 1.04, filter: "blur(6px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as any } },
    refined: { initial: { opacity: 0, scale: 1.06, filter: "blur(5px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as any } },
    minimal: { initial: { opacity: 0, scale: 1.03, filter: "blur(4px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
    default: { initial: { opacity: 0, scale: 1.05, filter: "blur(5px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as any } },
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