"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { CONTENT_CONFIG } from "@/lib/content-config"

export default function HeroAwardWinning() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects for award-winning depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const titleSequence = [
    { text: "EXPERIENCE", delay: 0.2, color: "text-muted-foreground" },
    { text: "ARCHITECT", delay: 0.6, color: "text-foreground" },
    { text: "OF INVISIBLE SYSTEMS", delay: 1.0, color: "text-primary" },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden flex items-center">
      
      {/* Award-winning background system */}
      <div className="absolute inset-0">
        {/* Sophisticated base gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-primary/5"
          style={{ y: backgroundY }}
        />
        
        {/* Dynamic geometry that responds to reveal */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isRevealed ? 0.05 : 0 }}
          transition={{ duration: 2 }}
        >
          {/* Geometric pattern generation */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + (i * 0.5),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Hero content with award-winning typography */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        style={{ y: textY }}
      >
        
        {/* Minimalist brand mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="text-2xl font-light tracking-[0.2em] text-muted-foreground mb-2">
            silvana.
          </div>
          <div className="w-16 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Revolutionary title sequence */}
        <div className="space-y-2 mb-12">
          {titleSequence.map((item, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: item.delay,
                ease: "easeOut"
              }}
              className={`text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight ${item.color}`}
            >
              {item.text}
            </motion.h1>
          ))}
        </div>

        {/* Philosophical statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Making the <em className="text-primary font-medium">intangible, tangible</em> —
            where strategy meets soul in the architecture of human experience.
          </p>
        </motion.div>

        {/* Elevated CTA system */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore Transformations</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#about"
            className="group px-8 py-4 text-foreground font-medium border border-border rounded-lg hover:border-primary transition-all duration-200"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <span className="group-hover:text-primary transition-colors">The Philosophy</span>
          </motion.a>
        </motion.div>

        {/* Award-winning scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-muted-foreground"
          >
            <div className="text-xs tracking-[0.2em] uppercase">Begin Journey</div>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}