"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { CONTENT_CONFIG } from "@/lib/content-config"

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Silk-like parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.6])

  // Mouse interaction for silk movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Organic text emergence animation
  const textVariants = {
    initial: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      filter: "blur(20px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    }
  }


  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Silk Fabric Animation Overlay - Works WITH existing background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Silk wave layers - subtle overlays on existing background */}
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 20%, transparent 40%, rgba(255,255,255,0.05) 60%, transparent 80%)",
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
              "linear-gradient(225deg, transparent 0%, rgba(255,255,255,0.1) 30%, transparent 60%, rgba(255,255,255,0.05) 90%)",
              "linear-gradient(315deg, rgba(255,255,255,0.05) 0%, transparent 35%, rgba(255,255,255,0.1) 70%, transparent 100%)",
              "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 20%, transparent 40%, rgba(255,255,255,0.05) 60%, transparent 80%)"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 8}px)`
          }}
        />

        {/* Secondary silk flow - enhances existing background */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            background: [
              "radial-gradient(ellipse 200% 100% at 0% 50%, rgba(255,255,255,0.08) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 100% 50%, rgba(255,255,255,0.12) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 50% 100%, rgba(255,255,255,0.12) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 0% 50%, rgba(255,255,255,0.08) 0%, transparent 40%)"
            ]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * 6}px)`
          }}
        />

        {/* Silk sheen effects - subtle light enhancement */}
        <motion.div
          className="absolute inset-0 opacity-8"
          animate={{
            background: [
              "linear-gradient(60deg, transparent 0%, rgba(255,255,255,0.15) 10%, transparent 20%)",
              "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
              "linear-gradient(240deg, transparent 70%, rgba(255,255,255,0.15) 80%, transparent 90%)",
              "linear-gradient(300deg, transparent 20%, rgba(255,255,255,0.15) 30%, transparent 40%)",
              "linear-gradient(60deg, transparent 0%, rgba(255,255,255,0.15) 10%, transparent 20%)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating silk fibers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-sophisticated/20 to-sophisticated/10"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, -80, -20],
              x: [-10, 15, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
      </div>

      {/* Elegant geometric accents */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-sophisticated/10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 12}px)`
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-sophisticated/15"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        style={{
          transform: `translate(${mousePosition.x * -12}px, ${mousePosition.y * 10}px)`
        }}
      />

      {/* Clean, professional hero content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-[-0.02em] drop-shadow-[0_2px_8px_rgba(60,60,60,0.08)]" style={{ color: '#3C3C3C', textShadow: '0 1px 2px rgba(60,60,60,0.1)' }}>
            {CONTENT_CONFIG.HERO.MAIN_TITLE}
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-[0.15em] uppercase drop-shadow-[0_1px_4px_rgba(191,174,162,0.2)]" style={{ color: '#BFAEA2', textShadow: '0 1px 3px rgba(191,174,162,0.15)' }}>
            {CONTENT_CONFIG.HERO.SUBTITLE}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-sm sm:text-base md:text-lg font-light tracking-[0.08em] uppercase max-w-2xl mx-auto leading-relaxed" style={{ color: '#BFAEA2' }}>
            {CONTENT_CONFIG.HERO.TAGLINE}
          </p>
        </motion.div>
      </div>

      {/* Silk-inspired scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Elegant scroll line */}
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-transparent via-sophisticated/30 to-transparent"
            animate={{
              height: [64, 48, 64],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Flowing indicator dot */}
          <motion.div
            className="w-2 h-2 rounded-full bg-sophisticated/40"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Subtle silk border accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sophisticated/20 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 3, ease: "easeOut" }}
      />
    </motion.section>
  )
}