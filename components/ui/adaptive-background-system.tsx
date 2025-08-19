"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BACKGROUND_DNA, getColorTheme } from "@/lib/background-dna"

interface AdaptiveBackgroundSystemProps {
  className?: string
  contentType?: "hero" | "text-primary" | "text-secondary" | "gallery" | "contact"
  intensity?: "minimal" | "subtle" | "medium" | "strong" | "maximum"
  section?: keyof typeof BACKGROUND_DNA.colorRiver
}

export function AdaptiveBackgroundSystem({ 
  className = "", 
  contentType = "hero",
  intensity = "medium",
  section = "hero"
}: AdaptiveBackgroundSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring animations for organic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Content-aware intensity mapping
  const getIntensityConfig = () => {
    const configs = {
      hero: {
        backgroundOpacity: [0.4, 0.7, 0.9, 0.7, 0.5],
        textureOpacity: [0.04, 0.06, 0.05, 0.03, 0.02],
        animationSpeed: 1.0,
        cursorFollowing: true,
        organicElements: true
      },
      "text-primary": {
        backgroundOpacity: [0.1, 0.15, 0.2, 0.15, 0.1],
        textureOpacity: [0.005, 0.01, 0.008, 0.005, 0.003],
        animationSpeed: 0.3,
        cursorFollowing: false,
        organicElements: false
      },
      "text-secondary": {
        backgroundOpacity: [0.2, 0.3, 0.4, 0.3, 0.2],
        textureOpacity: [0.01, 0.02, 0.015, 0.01, 0.008],
        animationSpeed: 0.5,
        cursorFollowing: true,
        organicElements: false
      },
      gallery: {
        backgroundOpacity: [0.3, 0.5, 0.6, 0.5, 0.4],
        textureOpacity: [0.02, 0.03, 0.025, 0.02, 0.015],
        animationSpeed: 0.7,
        cursorFollowing: true,
        organicElements: true
      },
      contact: {
        backgroundOpacity: [0.25, 0.4, 0.5, 0.4, 0.3],
        textureOpacity: [0.015, 0.025, 0.02, 0.015, 0.01],
        animationSpeed: 0.6,
        cursorFollowing: true,
        organicElements: false
      }
    }
    return configs[contentType]
  }

  const config = getIntensityConfig()
  const colors = BACKGROUND_DNA.colorRiver[section]

  // Dynamic transforms based on content type
  const backgroundOpacity = useTransform(
    smoothProgress, 
    [0, 0.2, 0.5, 0.8, 1], 
    config.backgroundOpacity
  )
  const gradientRotation = useTransform(smoothProgress, [0, 1], [0, 45 * config.animationSpeed])
  const textureOpacity = useTransform(
    smoothProgress, 
    [0, 0.3, 0.7, 1], 
    config.textureOpacity
  )

  // Cursor-following gradient for engagement (only if enabled)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const cursorX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const cursorY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    if (!config.cursorFollowing) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, config.cursorFollowing])

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none ${className}`}>
      
      {/* Layer 1: Primary Adaptive Flow */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(${colors.primary}, ${contentType === 'hero' ? 0.12 : contentType.includes('text') ? 0.03 : 0.06}) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 80%, rgba(${colors.secondary}, ${contentType === 'hero' ? 0.08 : contentType.includes('text') ? 0.02 : 0.04}) 0%, transparent 60%),
            linear-gradient(135deg, 
              rgba(${colors.accent}, ${contentType === 'hero' ? 0.06 : contentType.includes('text') ? 0.015 : 0.03}) 0%, 
              transparent 40%, 
              rgba(${colors.primary}, ${contentType === 'hero' ? 0.04 : contentType.includes('text') ? 0.01 : 0.02}) 80%, 
              transparent 100%
            )
          `,
          opacity: backgroundOpacity,
          transform: `rotate(${gradientRotation}deg)`
        }}
      />

      {/* Layer 2: Adaptive Color Temperature Zones (Reduced for text) */}
      {contentType !== 'text-primary' && (
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 30% 20%, rgba(${colors.secondary}, ${contentType === 'hero' ? 0.04 : 0.02}) 0%, transparent 50%)`,
              `radial-gradient(circle at 70% 60%, rgba(${colors.accent}, ${contentType === 'hero' ? 0.04 : 0.02}) 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 80%, rgba(${colors.primary}, ${contentType === 'hero' ? 0.04 : 0.02}) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 30%, rgba(${colors.secondary}, ${contentType === 'hero' ? 0.04 : 0.02}) 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 25 / config.animationSpeed,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Layer 3: Content-Aware Texture System */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(${colors.primary}, ${contentType.includes('text') ? 0.002 : 0.008}) 1px, transparent 0),
            ${!contentType.includes('text') ? `linear-gradient(45deg, transparent 49%, rgba(${colors.secondary}, 0.004) 50%, transparent 51%),` : ''}
            ${!contentType.includes('text') ? `linear-gradient(-45deg, transparent 49%, rgba(${colors.accent}, 0.003) 50%, transparent 51%)` : ''}
          `,
          backgroundSize: contentType.includes('text') ? '60px 60px' : '40px 40px, 80px 80px, 80px 80px',
          opacity: textureOpacity
        }}
        animate={!contentType.includes('text') ? {
          backgroundPosition: [
            '0% 0%, 0% 0%, 0% 0%',
            '100% 100%, 50% 50%, -50% -50%'
          ]
        } : undefined}
        transition={!contentType.includes('text') ? {
          duration: 40 / config.animationSpeed,
          repeat: Infinity,
          ease: "linear"
        } : undefined}
      />

      {/* Layer 4: Organic Elements (Only for non-text sections) */}
      {config.organicElements && (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: contentType === 'hero' ? 0.02 : 0.01 }}
        >
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id={`flowGradient-${section}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={`rgb(${colors.primary})`} stopOpacity="0.05" />
                <stop offset="50%" stopColor={`rgb(${colors.secondary})`} stopOpacity="0.02" />
                <stop offset="100%" stopColor={`rgb(${colors.accent})`} stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M0,300 Q250,200 500,300 T1000,300"
              stroke={`url(#flowGradient-${section})`}
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>
      )}

      {/* Layer 5: Cursor-Following Accent (Conditional) */}
      {config.cursorFollowing && (
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(${colors.accent}, ${contentType === 'hero' ? 0.02 : 0.008}) 0%, transparent 70%)`,
            left: useTransform(cursorX, [0, 1], ['-12rem', 'calc(100vw - 12rem)']),
            top: useTransform(cursorY, [0, 1], ['-12rem', 'calc(100vh - 12rem)']),
            filter: 'blur(60px)'
          }}
        />
      )}

      {/* Layer 6: Breathing Animation (Reduced for text) */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(ellipse at center, rgba(${colors.primary}, ${contentType.includes('text') ? 0.005 : 0.015}) 0%, transparent 70%)`,
            `radial-gradient(ellipse at center, rgba(${colors.secondary}, ${contentType.includes('text') ? 0.008 : 0.02}) 0%, transparent 70%)`,
            `radial-gradient(ellipse at center, rgba(${colors.accent}, ${contentType.includes('text') ? 0.005 : 0.015}) 0%, transparent 70%)`
          ]
        }}
        transition={{
          duration: 20 / config.animationSpeed,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Layer 7: Sophisticated Noise (Minimal for text) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${contentType.includes('text') ? '0.003' : '0.008'}'/%3E%3C/svg%3E")`,
          opacity: contentType.includes('text') ? 0.3 : 0.6,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  )
}