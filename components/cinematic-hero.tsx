"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax and cinematic effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const blur = useTransform(scrollYProgress, [0, 1], [0, 2])

  // Split text for staggered animation
  const splitText = (text: string) => {
    return text.split('').map((letter, index) => ({ letter, index }))
  }

  const experienceLetters = splitText("Experience")
  const architectLetters = splitText("ARCHITECT")

  // Ultra-luxury stagger animation
  const letterVariants = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.3,
      rotateX: 90,
      filter: "blur(10px)",
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay: 0.8 + (index * 0.08),
        ease: [0.25, 0.1, 0.25, 1],
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Cinematic background layers */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ 
          scale,
          filter: `blur(${blur}px)`,
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(244, 63, 94, 0.12) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(245, 245, 244, 0.8) 0%, 
              rgba(251, 191, 36, 0.15) 25%, 
              rgba(244, 63, 94, 0.12) 50%, 
              rgba(249, 115, 22, 0.15) 75%, 
              rgba(245, 245, 244, 0.8) 100%
            )
          `
        }}
      />

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/3 w-3 h-3 bg-rose-400/15 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.15, 0.4, 0.15],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Elegant accent lines */}
      <motion.div 
        className="absolute left-1/2 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 3.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: "center" }}
      />
      
      <motion.div 
        className="absolute left-1/2 top-1/2 w-32 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: "center" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Experience - with cinematic reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-foreground leading-tight tracking-wide">
            {experienceLetters.map(({ letter, index }) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="inline-block relative group cursor-default"
                style={{ 
                  display: letter === ' ' ? 'inline' : 'inline-block',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <span 
                  className="relative z-10 bg-gradient-to-b from-foreground via-foreground/95 to-foreground/85"
                  style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
                
                {/* Luxury shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      'linear-gradient(90deg, transparent, rgba(251,191,36,0.1), transparent)',
                      'linear-gradient(90deg, transparent, rgba(244,63,94,0.1), transparent)',
                      'linear-gradient(90deg, transparent, rgba(251,191,36,0.1), transparent)'
                    ],
                    x: ['-100%', '100%', '-100%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5 + (index * 0.1)
                  }}
                />
              </motion.span>
            ))}
          </h1>
        </motion.div>
        
        {/* ARCHITECT - with enhanced drama */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground/90 leading-tight tracking-widest uppercase">
            {architectLetters.map(({ letter, index }) => (
              <motion.span
                key={index}
                custom={experienceLetters.length + index + 3}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="inline-block relative group cursor-default"
                style={{ 
                  display: letter === ' ' ? 'inline' : 'inline-block',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <span 
                  className="relative z-10 bg-gradient-to-b from-foreground/95 via-foreground/85 to-foreground/75"
                  style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
                
                {/* Enhanced shimmer for ARCHITECT */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)',
                      'linear-gradient(90deg, transparent, rgba(168,85,247,0.12), transparent)',
                      'linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)'
                    ],
                    x: ['-100%', '100%', '-100%']
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 6 + (index * 0.08)
                  }}
                />
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Subtle tagline reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12"
        >
          <p className="text-sm sm:text-base md:text-lg font-light text-muted-foreground/70 tracking-wide uppercase max-w-2xl mx-auto leading-relaxed">
            Crafting Digital Experiences Where Strategy Meets Soul
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 6 }}
      >
        <motion.div
          className="w-6 h-10 border border-foreground/20 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-foreground/30 rounded-full mt-2"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}