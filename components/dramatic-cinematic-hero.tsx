"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { CONTENT_CONFIG } from "@/lib/content-config"

export default function DramaticCinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Cinematic parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  // Sophisticated mouse interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 0.5,
        y: (e.clientY / window.innerHeight - 0.5) * 0.3
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* DRAMATIC CINEMATIC BACKGROUND SYSTEM */}
      <div className="absolute inset-0">
        {/* Primary obsidian gradient foundation */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 80% at 50% 0%, hsl(var(--primary-900)) 0%, hsl(var(--primary)/0.95) 25%, hsl(var(--primary)/0.8) 50%, hsl(var(--background)) 80%)',
            scale
          }}
        />
        
        {/* Champagne gold accent layers */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, hsl(var(--secondary)/0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 30%, hsl(var(--secondary)/0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, hsl(var(--secondary)/0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, hsl(var(--secondary)/0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px)`
          }}
        />

        {/* Sapphire depth accents */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "linear-gradient(45deg, hsl(var(--tertiary)/0.2) 0%, transparent 30%)",
              "linear-gradient(135deg, transparent 20%, hsl(var(--tertiary)/0.3) 50%, transparent 80%)",
              "linear-gradient(225deg, hsl(var(--tertiary)/0.2) 0%, transparent 40%)",
              "linear-gradient(315deg, transparent 30%, hsl(var(--tertiary)/0.2) 70%, transparent 100%)"
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating luxury particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                background: i % 3 === 0 ? 'hsl(var(--secondary)/0.4)' : 
                           i % 3 === 1 ? 'hsl(var(--tertiary)/0.3)' : 
                           'hsl(var(--primary-100)/0.5)',
                left: `${15 + (i * 7)}%`,
                top: `${20 + (i % 4) * 15}%`,
              }}
              animate={{
                y: [-30, -120, -30],
                x: [-15, 25, -15],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 15 + (i * 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2
              }}
            />
          ))}
        </div>
      </div>

      {/* SOPHISTICATED GEOMETRIC ELEMENTS */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-1 h-16 bg-gradient-to-b from-secondary/30 to-transparent"
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/5 w-4 h-4 rounded-full bg-tertiary/20"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        style={{
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * 18}px)`
        }}
      />

      {/* DRAMATIC HERO CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          {/* Ultra-dramatic main title */}
          <motion.h1 
            className="font-light leading-[0.85] tracking-[-0.04em] mb-8"
            style={{
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              background: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--secondary)) 50%, hsl(var(--tertiary)) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 12px hsl(var(--primary)/0.15))'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {CONTENT_CONFIG.HERO.MAIN_TITLE}
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          {/* Sophisticated subtitle */}
          <motion.h2 
            className="font-medium leading-tight tracking-[0.08em] uppercase"
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 2.5rem)',
              color: 'hsl(var(--muted-foreground))',
              textShadow: '0 2px 8px hsl(var(--primary)/0.1)'
            }}
          >
            {CONTENT_CONFIG.HERO.SUBTITLE}
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          {/* Elegant tagline */}
          <motion.p 
            className="font-light leading-relaxed tracking-[0.04em] max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              color: 'hsl(var(--muted-foreground)/0.8)'
            }}
          >
            {CONTENT_CONFIG.HERO.TAGLINE}
          </motion.p>
        </motion.div>

        {/* Dramatic CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#projects"
            className="group relative px-12 py-5 rounded-2xl font-medium text-lg tracking-wide transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--secondary-500)) 100%)',
              color: 'hsl(var(--secondary-foreground))',
              boxShadow: '0 20px 60px hsl(var(--secondary)/0.3)'
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 30px 80px hsl(var(--secondary)/0.4)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore My Work</span>
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--secondary-900)) 0%, hsl(var(--secondary)) 100%)'
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#about"
            className="group relative px-12 py-5 rounded-2xl font-medium text-lg tracking-wide border-2 transition-all duration-500"
            style={{
              borderColor: 'hsl(var(--secondary))',
              color: 'hsl(var(--secondary))'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'hsl(var(--secondary)/0.05)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">About Me</span>
          </motion.a>
        </motion.div>
      </div>

      {/* SOPHISTICATED SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-4"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Elegant scroll line */}
          <motion.div
            className="w-px bg-gradient-to-b from-transparent via-secondary/40 to-transparent"
            style={{ height: '4rem' }}
            animate={{
              height: ['4rem', '3rem', '4rem'],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Luxury indicator dot */}
          <motion.div
            className="w-3 h-3 rounded-full bg-secondary/60"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
              y: [0, 16, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Sophisticated border accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
      />
    </motion.section>
  )
}