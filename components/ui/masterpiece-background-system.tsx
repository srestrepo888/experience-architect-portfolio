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

  // Section-specific background configurations
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
          className: "object-cover object-center"
        }
      
      case "about":
        return {
          asset: "/luxury-geometric-background.png", 
          opacity: [0.28, 0.36, 0.28],
          overlayOpacity: [0.45, 0.35, 0.45],
          overlayColor: "from-background/45 via-background/25 to-background/45",
          textOverlay: "from-background/15 via-background/5 to-background/15",
          scale: [1.05, 1, 1.05],
          blur: [6, 3, 6],
          className: "object-cover object-center"
        }

      case "projects":
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.32, 0.42, 0.32],
          overlayOpacity: [0.40, 0.25, 0.40],
          overlayColor: "from-background/40 via-background/20 to-background/40",
          textOverlay: "from-background/12 via-transparent to-background/12",
          scale: [1, 1.08, 1],
          blur: [3, 1, 3],
          className: "object-cover object-center"
        }

      case "experience":
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.28, 0.36, 0.28],
          overlayOpacity: [0.45, 0.35, 0.45],
          overlayColor: "from-background/45 via-background/25 to-background/45",
          textOverlay: "from-background/15 via-background/5 to-background/15",
          scale: [1.05, 1, 1.05],
          blur: [6, 3, 6],
          className: "object-cover object-center"
        }

      case "services":
        return {
          asset: "/background-texture.png",
          opacity: [0.30, 0.38, 0.30],
          overlayOpacity: [0.42, 0.30, 0.42],
          overlayColor: "from-background/42 via-background/22 to-background/42",
          textOverlay: "from-background/14 via-background/6 to-background/14",
          scale: [1.03, 1.06, 1.03],
          blur: [5, 2, 5],
          className: "object-cover object-center"
        }

      case "contact":
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.34, 0.40, 0.34],
          overlayOpacity: [0.38, 0.28, 0.38],
          overlayColor: "from-background/38 via-background/18 to-background/38",
          textOverlay: "from-background/12 via-transparent to-background/12",
          scale: [1, 1.04, 1],
          blur: [2, 1, 2],
          className: "object-cover object-top"
        }

      case "footer":
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.25, 0.30, 0.25],
          overlayOpacity: [0.50, 0.40, 0.50],
          overlayColor: "from-background/50 via-background/30 to-background/50",
          textOverlay: "from-background/20 via-background/10 to-background/20",
          scale: [1.02, 1, 1.02],
          blur: [4, 2, 4],
          className: "object-cover object-center"
        }
    }
  }

  const config = getSectionConfig()
  
  // Animated transforms
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.opacity)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], config.overlayOpacity)
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], config.scale)
  const backgroundBlur = useTransform(scrollYProgress, [0, 0.5, 1], config.blur)

  return (
    <motion.section
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Main Background Asset */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
          filter: `blur(${backgroundBlur}px)`
        }}
      >
        <Image
          src={config.asset}
          alt=""
          fill
          className={`${config.className} will-change-transform`}
          style={{
            objectFit: 'cover',
            objectPosition: config.className.includes('object-top') ? 'top' : 
                            config.className.includes('object-bottom') ? 'bottom' : 'center'
          }}
          priority={section === "hero"}
          quality={section === "hero" ? 95 : 85}
          sizes="100vw"
        />
      </motion.div>

      {/* Primary Overlay - Balanced Content Protection */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b ${config.overlayColor}`}
        style={{ opacity: overlayOpacity }}
      />

      {/* Secondary Overlay - Subtle Text Readability Enhancement */}
      <div className={`absolute inset-0 bg-gradient-to-t ${config.textOverlay}`} />

      {/* Sophisticated Texture Layer - Reduced for visibility */}
      <motion.div
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.6) 1px, transparent 0),
            linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.2) 50%, transparent 51%)
          `,
          backgroundSize: '80px 80px, 160px 160px'
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 0% 0%',
            '80px 80px, 160px 160px'
          ]
        }}
        transition={{
          duration: 180,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Hero-specific Breathing Light Enhancement */}
      {section === "hero" && (
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-amber-400/8 via-transparent to-transparent"
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Content with Perfect Contrast */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  )
}

// Individual section backgrounds for perfect control
export function HeroBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="hero" className="min-h-screen">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function AboutBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="about" className="py-24 md:py-32">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ProjectsBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="projects" className="py-24 md:py-32">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ExperienceBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="experience" className="py-24 md:py-32">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ServicesBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="services" className="py-24 md:py-32">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function ContactBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="contact" className="py-24 md:py-32">
      {children}
    </MasterpieceBackgroundSystem>
  )
}

export function FooterBackground({ children }: { children: ReactNode }) {
  return (
    <MasterpieceBackgroundSystem section="footer" className="py-16 md:py-20">
      {children}
    </MasterpieceBackgroundSystem>
  )
}