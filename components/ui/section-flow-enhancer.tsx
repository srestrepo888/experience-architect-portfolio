"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface SectionFlowEnhancerProps {
  sectionId: string
  colorTheme: {
    primary: string
    secondary: string
    accent: string
  }
  flowDirection?: "up" | "down" | "both"
  intensity?: "subtle" | "medium" | "strong"
  children: React.ReactNode
}

export function SectionFlowEnhancer({
  sectionId,
  colorTheme,
  flowDirection = "both",
  intensity = "medium",
  children
}: SectionFlowEnhancerProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { margin: "-20%" })
  const [isActive, setIsActive] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Sophisticated intensity mapping
  const intensityMap = {
    subtle: { opacity: 0.03, blur: 60, scale: 1.2 },
    medium: { opacity: 0.05, blur: 40, scale: 1.5 },
    strong: { opacity: 0.08, blur: 20, scale: 2.0 }
  }

  const config = intensityMap[intensity]

  // Advanced scroll-based transformations
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, config.opacity, config.opacity, 0])
  const sectionScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, config.scale, 0.8])
  const colorIntensity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  useEffect(() => {
    setIsActive(isInView)
  }, [isInView])

  // Dynamic color generation based on theme
  const generateFlowGradient = (progress: number) => {
    const baseOpacity = config.opacity * progress
    return `
      radial-gradient(ellipse at 30% 20%, ${colorTheme.primary}/0.${Math.round(baseOpacity * 100)} 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, ${colorTheme.secondary}/0.${Math.round(baseOpacity * 80)} 0%, transparent 50%),
      linear-gradient(135deg, 
        ${colorTheme.accent}/0.${Math.round(baseOpacity * 60)} 0%, 
        transparent 30%, 
        ${colorTheme.primary}/0.${Math.round(baseOpacity * 40)} 70%, 
        transparent 100%
      )
    `
  }

  return (
    <motion.section
      ref={sectionRef}
      id={sectionId}
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Transition Zone - Top */}
      {(flowDirection === "up" || flowDirection === "both") && (
        <motion.div
          className="absolute -top-32 left-0 right-0 h-64 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${colorTheme.primary}/0.02 50%, ${colorTheme.secondary}/0.04 100%)`,
            opacity: sectionOpacity,
            filter: `blur(${config.blur}px)`
          }}
        />
      )}

      {/* Main Section Background Enhancement */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: generateFlowGradient(1),
          opacity: sectionOpacity,
          scale: sectionScale,
          filter: `blur(${config.blur * 0.7}px)`
        }}
      />

      {/* Sophisticated Texture Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, ${colorTheme.accent}/0.01 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, ${colorTheme.primary}/0.01 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, ${colorTheme.secondary}/0.005 50%, transparent 52%)
          `,
          opacity: colorIntensity
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 0% 0%, 0% 0%',
            '100% 100%, -100% -100%, 100% 100%'
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Organic Flow Lines */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity: isActive ? 0.02 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={`flowGradient-${sectionId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorTheme.primary} stopOpacity="0.08" />
              <stop offset="50%" stopColor={colorTheme.accent} stopOpacity="0.04" />
              <stop offset="100%" stopColor={colorTheme.secondary} stopOpacity="0.08" />
            </linearGradient>
          </defs>
          
          {/* Dynamic flowing curves */}
          <motion.path
            d="M-100,50% Q25%,20% 50%,50% T150%,50%"
            stroke={`url(#flowGradient-${sectionId})`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isActive ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M-100,80% Q25%,60% 50%,80% T150%,80%"
            stroke={`url(#flowGradient-${sectionId})`}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isActive ? 1 : 0 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Breathing Accent Points */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Left accent */}
        <motion.div
          className="absolute left-[10%] top-[30%] w-2 h-2 rounded-full"
          style={{ 
            background: colorTheme.accent,
            filter: 'blur(2px)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Right accent */}
        <motion.div
          className="absolute right-[15%] bottom-[40%] w-3 h-3 rounded-full"
          style={{ 
            background: colorTheme.primary,
            filter: 'blur(3px)'
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.08, 0.2, 0.08]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      {/* Transition Zone - Bottom */}
      {(flowDirection === "down" || flowDirection === "both") && (
        <motion.div
          className="absolute -bottom-32 left-0 right-0 h-64 pointer-events-none"
          style={{
            background: `linear-gradient(to top, transparent 0%, ${colorTheme.secondary}/0.02 50%, ${colorTheme.accent}/0.04 100%)`,
            opacity: sectionOpacity,
            filter: `blur(${config.blur}px)`
          }}
        />
      )}

      {/* Section Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  )
}