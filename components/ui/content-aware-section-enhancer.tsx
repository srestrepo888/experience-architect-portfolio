"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Background } from "./background"

interface ContentAwareSectionEnhancerProps {
  sectionId: string
  section: "hero" | "about" | "projects" | "experience" | "services" | "contact"
  contentType: "hero" | "text-primary" | "text-secondary" | "gallery" | "contact"
  intensity?: "minimal" | "subtle" | "medium" | "strong" | "maximum"
  children: React.ReactNode
}

export function ContentAwareSectionEnhancer({
  sectionId,
  section,
  contentType,
  intensity = "medium",
  children
}: ContentAwareSectionEnhancerProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { margin: "-10%", amount: 0.3 })
  const [isActive, setIsActive] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Content-type specific transition configurations
  const getTransitionConfig = () => {
    const configs = {
      hero: {
        duration: 1.5,
        stagger: 0.15,
        backgroundTransition: 2.0,
        easing: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      },
      "text-primary": {
        duration: 0.8,
        stagger: 0.1,
        backgroundTransition: 1.2,
        easing: [0.4, 0, 0.2, 1] as [number, number, number, number]
      },
      "text-secondary": {
        duration: 1.0,
        stagger: 0.12,
        backgroundTransition: 1.5,
        easing: [0.4, 0, 0.2, 1] as [number, number, number, number]
      },
      gallery: {
        duration: 1.2,
        stagger: 0.1,
        backgroundTransition: 1.8,
        easing: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      },
      contact: {
        duration: 1.1,
        stagger: 0.13,
        backgroundTransition: 1.6,
        easing: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
    return configs[contentType]
  }

  const config = getTransitionConfig()

  // Advanced scroll-based opacity with content awareness
  const sectionOpacity = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.9, 1], 
    contentType.includes('text') ? [0.95, 1, 1, 0.95] : [0.9, 1, 1, 0.9]
  )

  // Content-specific background overlay
  const backgroundOverlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    contentType === 'hero' ? [0.1, 0.2, 0.2, 0.1] : 
    contentType.includes('text') ? [0.02, 0.03, 0.03, 0.02] : [0.05, 0.08, 0.08, 0.05]
  )

  useEffect(() => {
    setIsActive(isInView)
  }, [isInView])

  return (
    <motion.section
      ref={sectionRef}
      id={sectionId}
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0.96
      }}
      transition={{ 
        duration: config.duration, 
        ease: config.easing 
      }}
    >
      {/* Adaptive Background System Integration */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{
          duration: config.backgroundTransition,
          ease: config.easing
        }}
      >
        <Background>{children}</Background>
      </motion.div>

      {/* Content-Aware Transition Zones */}
      {contentType !== 'text-primary' && (
        <>
          {/* Top transition zone */}
          <motion.div
            className="absolute -top-20 left-0 right-0 h-40 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.02) 100%)`,
              opacity: backgroundOverlayOpacity,
              filter: contentType === 'hero' ? 'blur(20px)' : 'blur(40px)'
            }}
          />
          
          {/* Bottom transition zone */}
          <motion.div
            className="absolute -bottom-20 left-0 right-0 h-40 pointer-events-none"
            style={{
              background: `linear-gradient(to top, transparent 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.02) 100%)`,
              opacity: backgroundOverlayOpacity,
              filter: contentType === 'hero' ? 'blur(20px)' : 'blur(40px)'
            }}
          />
        </>
      )}

      {/* Subtle Reading Enhancement Overlay for Text Sections */}
      {contentType.includes('text') && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 60%)`,
            opacity: isActive ? 1 : 0
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Enhanced Content Stagger Animation */}
      <motion.div
        className="relative z-10"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: config.stagger,
              delayChildren: contentType === 'hero' ? 0.2 : 0.1
            }
          }
        }}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        {children}
      </motion.div>

      {/* Content-Specific Subtle Accent Elements */}
      {contentType === 'hero' && isActive && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.015 }}
          transition={{ duration: 3, delay: 1 }}
        >
          {/* Floating accent dots for hero only */}
          <motion.div
            className="absolute left-[8%] top-[25%] w-1 h-1 bg-amber-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute right-[12%] bottom-[35%] w-1.5 h-1.5 bg-rose-400 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      )}
    </motion.section>
  )
}