"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

interface SophisticatedBackgroundProps {
  className?: string
  variant?: "home" | "project" | "minimal"
  colorProgression?: {
    start: string
    middle: string
    end: string
  }
}

export function SophisticatedBackground({ 
  className = "", 
  variant = "home",
  colorProgression = {
    start: "stone-50",
    middle: "amber-50", 
    end: "rose-50"
  }
}: SophisticatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring animations for organic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Dynamic color temperature based on scroll
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.3, 0.6, 0.8, 0.6, 0.4])
  const gradientRotation = useTransform(smoothProgress, [0, 1], [0, 180])
  const textureOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.02, 0.05, 0.03, 0.01])

  // Advanced gradient mathematics for river-like flow
  const createRiverGradient = (progress: number) => {
    const baseHue = 30 + (progress * 60) // Stone (30) to Rose (90)
    const saturation = 15 + (Math.sin(progress * Math.PI) * 10) // Organic saturation wave
    const lightness = 85 + (Math.cos(progress * Math.PI * 2) * 5) // Subtle lightness breathing
    
    return `hsl(${baseHue}, ${saturation}%, ${lightness}%)`
  }

  // Cursor-following gradient for engagement
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const cursorX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const cursorY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className={`fixed inset-0 pointer-events-none ${className}`}>
      
      {/* Layer 1: Primary River Flow */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 0%, rgba(251, 191, 36, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(245, 245, 244, 0.4) 0%,
              rgba(251, 191, 36, 0.3) 25%,
              rgba(244, 63, 94, 0.3) 50%,
              rgba(249, 115, 22, 0.3) 75%,
              rgba(245, 245, 244, 0.4) 100%
            )
          `,
          opacity: backgroundOpacity,
          transform: `rotate(${gradientRotation}deg)`
        }}
      />

      {/* Layer 2: Dynamic Color Temperature Zones */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 30% 20%, rgba(251, 191, 36, 0.06) 0%, transparent 40%)`,
            `radial-gradient(circle at 70% 60%, rgba(244, 63, 94, 0.06) 0%, transparent 40%)`,
            `radial-gradient(circle at 40% 80%, rgba(249, 115, 22, 0.06) 0%, transparent 40%)`,
            `radial-gradient(circle at 80% 30%, rgba(251, 191, 36, 0.06) 0%, transparent 40%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Layer 3: Sophisticated Texture System */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0),
            linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.02) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0,0,0,0.02) 50%, transparent 51%)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
          opacity: textureOpacity
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 0% 0%, 0% 0%',
            '100% 100%, 50% 50%, -50% -50%'
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Layer 4: Organic Line System */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ opacity: 0.03 }}
      >
        {/* Flowing curves for organic feel */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Organic flowing paths */}
          <motion.path
            d="M0,300 Q250,200 500,300 T1000,300"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M0,700 Q250,600 500,700 T1000,700"
            stroke="url(#flowGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          
          {/* Subtle connecting elements */}
          <motion.circle
            cx="250"
            cy="200"
            r="3"
            fill="currentColor"
            opacity="0.1"
            animate={{ 
              cx: [250, 300, 250],
              cy: [200, 180, 200],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.circle
            cx="750"
            cy="600"
            r="2"
            fill="currentColor"
            opacity="0.1"
            animate={{ 
              cx: [750, 700, 750],
              cy: [600, 620, 600],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.svg>
      </motion.div>

      {/* Layer 5: Cursor-Following Accent */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(251, 191, 36, 0.03) 0%, transparent 70%)`,
          left: useTransform(cursorX, [0, 1], ['-12rem', 'calc(100vw - 12rem)']),
          top: useTransform(cursorY, [0, 1], ['-12rem', 'calc(100vh - 12rem)']),
          filter: 'blur(40px)'
        }}
      />

      {/* Layer 6: Section-Aware Breathing Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(ellipse at center, rgba(251, 191, 36, 0.02) 0%, transparent 60%)`,
            `radial-gradient(ellipse at center, rgba(244, 63, 94, 0.03) 0%, transparent 60%)`,
            `radial-gradient(ellipse at center, rgba(249, 115, 22, 0.02) 0%, transparent 60%)`
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Layer 7: Sophisticated Noise for Premium Feel */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.01'/%3E%3C/svg%3E")`,
          opacity: 0.02,
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  )
}