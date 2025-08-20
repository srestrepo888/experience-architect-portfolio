"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

interface MasterpieceBackgroundProps {
  section: "hero" | "about" | "projects" | "experience" | "services" | "contact"
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
          opacity: [0.15, 0.25, 0.15],
          overlayOpacity: [0.8, 0.6, 0.8],
          overlayColor: "from-background/40 via-background/20 to-background/60",
          textOverlay: "from-background/15 via-transparent to-background/15",
          scale: [1, 1.1, 1],
          blur: [0, 2, 0],
          className: "object-cover object-center"
        }
      
      case "about":
        return {
          asset: "/elegant-brand-identity.png", 
          opacity: [0.04, 0.06, 0.04],
          overlayOpacity: [0.95, 0.92, 0.95],
          overlayColor: "from-background/70 via-background/50 to-background/70",
          textOverlay: "from-background/25 via-background/10 to-background/25",
          scale: [1.05, 1, 1.05],
          blur: [8, 4, 8],
          className: "object-cover object-top"
        }

      case "projects":
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.08, 0.12, 0.08],
          overlayOpacity: [0.85, 0.75, 0.85],
          overlayColor: "from-background/50 via-background/30 to-background/50",
          textOverlay: "from-background/20 via-transparent to-background/20",
          scale: [1, 1.08, 1],
          blur: [4, 1, 4],
          className: "object-cover object-center"
        }

      case "experience":
        return {
          asset: "/minimal-luxury-interior.png",
          opacity: [0.03, 0.05, 0.03],
          overlayOpacity: [0.98, 0.95, 0.98],
          overlayColor: "from-background/80 via-background/60 to-background/80",
          textOverlay: "from-background/30 via-background/15 to-background/30",
          scale: [1.1, 1.05, 1.1],
          blur: [12, 8, 12],
          className: "object-cover object-bottom"
        }

      case "services":
        return {
          asset: "/elegant-brand-identity.png",
          opacity: [0.06, 0.09, 0.06],
          overlayOpacity: [0.9, 0.8, 0.9],
          overlayColor: "from-background/60 via-background/40 to-background/60",
          textOverlay: "from-background/25 via-background/8 to-background/25",
          scale: [1.03, 1.06, 1.03],
          blur: [6, 3, 6],
          className: "object-cover object-center"
        }

      case "contact":
        return {
          asset: "/luxury-geometric-background.png",
          opacity: [0.07, 0.1, 0.07],
          overlayOpacity: [0.88, 0.82, 0.88],
          overlayColor: "from-background/55 via-background/35 to-background/55",
          textOverlay: "from-background/22 via-transparent to-background/22",
          scale: [1, 1.04, 1],
          blur: [3, 1, 3],
          className: "object-cover object-top"
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

      {/* Primary Overlay - Content Protection */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b ${config.overlayColor}`}
        style={{ opacity: overlayOpacity }}
      />

      {/* Secondary Overlay - Text Readability Enhancement */}
      <div className={`absolute inset-0 bg-gradient-to-t ${config.textOverlay}`} />

      {/* Sophisticated Texture Layer */}
      <motion.div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.8) 1px, transparent 0),
            linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.3) 50%, transparent 51%)
          `,
          backgroundSize: '60px 60px, 120px 120px'
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 0% 0%',
            '60px 60px, 120px 120px'
          ]
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Breathing Light Enhancement */}
      {section === "hero" && (
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-amber-400/5 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Content with Perfect Contrast */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Final Refinement Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/5 pointer-events-none" />
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