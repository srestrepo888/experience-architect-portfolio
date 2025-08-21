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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

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
      transition: {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  }

  const subtitleVariants = {
    initial: {
      opacity: 0,
      y: 40,
      filter: "blur(15px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        delay: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  }

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Silk Fabric Background System */}
      <div className="absolute inset-0">
        {/* Primary silk layer - flowing base */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 140% 120% at 20% 30%, 
                hsl(33, 15%, 96%) 0%, 
                hsl(15, 12%, 95%) 25%, 
                hsl(33, 15%, 97%) 50%, 
                hsl(15, 12%, 96%) 75%, 
                hsl(33, 15%, 95%) 100%
              )
            `,
            scale,
          }}
          animate={{
            background: [
              `radial-gradient(ellipse 140% 120% at 20% 30%, 
                hsl(33, 15%, 96%) 0%, 
                hsl(15, 12%, 95%) 25%, 
                hsl(33, 15%, 97%) 50%, 
                hsl(15, 12%, 96%) 75%, 
                hsl(33, 15%, 95%) 100%
              )`,
              `radial-gradient(ellipse 160% 140% at 80% 70%, 
                hsl(15, 12%, 96%) 0%, 
                hsl(33, 15%, 95%) 25%, 
                hsl(15, 12%, 97%) 50%, 
                hsl(33, 15%, 96%) 75%, 
                hsl(15, 12%, 95%) 100%
              )`,
              `radial-gradient(ellipse 140% 120% at 20% 30%, 
                hsl(33, 15%, 96%) 0%, 
                hsl(15, 12%, 95%) 25%, 
                hsl(33, 15%, 97%) 50%, 
                hsl(15, 12%, 96%) 75%, 
                hsl(33, 15%, 95%) 100%
              )`
            ]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Silk wave layers - multiple flowing gradients */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "linear-gradient(45deg, transparent 0%, hsl(33, 15%, 92%) 20%, transparent 40%, hsl(15, 12%, 93%) 60%, transparent 80%)",
              "linear-gradient(135deg, hsl(15, 12%, 93%) 0%, transparent 25%, hsl(33, 15%, 92%) 50%, transparent 75%)",
              "linear-gradient(225deg, transparent 0%, hsl(33, 15%, 92%) 30%, transparent 60%, hsl(15, 12%, 93%) 90%)",
              "linear-gradient(315deg, hsl(15, 12%, 93%) 0%, transparent 35%, hsl(33, 15%, 92%) 70%, transparent 100%)",
              "linear-gradient(45deg, transparent 0%, hsl(33, 15%, 92%) 20%, transparent 40%, hsl(15, 12%, 93%) 60%, transparent 80%)"
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

        {/* Secondary silk flow */}
        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{
            background: [
              "radial-gradient(ellipse 200% 100% at 0% 50%, hsl(15, 12%, 94%) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 100% 50%, hsl(33, 15%, 94%) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 50% 0%, hsl(15, 12%, 94%) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 50% 100%, hsl(33, 15%, 94%) 0%, transparent 40%)",
              "radial-gradient(ellipse 200% 100% at 0% 50%, hsl(15, 12%, 94%) 0%, transparent 40%)"
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

        {/* Silk sheen effects */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            background: [
              "linear-gradient(60deg, transparent 0%, hsl(0, 0%, 100%) 10%, transparent 20%)",
              "linear-gradient(120deg, transparent 40%, hsl(0, 0%, 100%) 50%, transparent 60%)",
              "linear-gradient(240deg, transparent 70%, hsl(0, 0%, 100%) 80%, transparent 90%)",
              "linear-gradient(300deg, transparent 20%, hsl(0, 0%, 100%) 30%, transparent 40%)",
              "linear-gradient(60deg, transparent 0%, hsl(0, 0%, 100%) 10%, transparent 20%)"
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

      {/* Main content with silk-like emergence */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        
        {/* EXPERIENCE - organic emergence */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <motion.h1 
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-sophisticated leading-[0.9] tracking-[-0.02em]"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--foreground)) 0%, 
                hsl(var(--foreground) / 0.9) 50%, 
                hsl(var(--foreground) / 0.8) 100%
              )`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 0px hsl(var(--foreground) / 0)",
                  "0 2px 8px hsl(var(--foreground) / 0.1)",
                  "0 0 0px hsl(var(--foreground) / 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {CONTENT_CONFIG.HERO.MAIN_TITLE}
            </motion.span>
          </motion.h1>
        </motion.div>
        
        {/* ARCHITECT - flowing subtitle */}
        <motion.div
          variants={subtitleVariants}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <motion.h2 
            className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-sophisticated/85 leading-tight tracking-[0.1em] uppercase"
            style={{
              background: `linear-gradient(120deg, 
                hsl(var(--foreground) / 0.85) 0%, 
                hsl(var(--foreground) / 0.7) 50%, 
                hsl(var(--foreground) / 0.85) 100%
              )`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {CONTENT_CONFIG.HERO.SUBTITLE}
          </motion.h2>
        </motion.div>

        {/* Elegant tagline with silk emergence */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-sm sm:text-base md:text-lg font-light text-sophisticated/60 tracking-[0.08em] uppercase max-w-2xl mx-auto leading-relaxed">
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
        transition={{ duration: 2, delay: 3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </motion.section>
  )
}