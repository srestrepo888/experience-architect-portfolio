"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { CONTENT_CONFIG } from "@/lib/content-config"
import Image from "next/image"

export default function HeroLandorAward() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentRevealPhase, setCurrentRevealPhase] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Sophisticated parallax system
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0.6])
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  // Advanced mouse parallax for micro-interactions
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

  // Award-winning reveal sequence
  useEffect(() => {
    const sequence = [
      { delay: 500, phase: 1 },   // Brand mark
      { delay: 1200, phase: 2 },  // Title reveal
      { delay: 2000, phase: 3 },  // Philosophy
      { delay: 2800, phase: 4 },  // Portrait reveal
      { delay: 3500, phase: 5 }   // CTA
    ]

    sequence.forEach(({ delay, phase }) => {
      setTimeout(() => setCurrentRevealPhase(phase), delay)
    })
  }, [])

  const revealWords = [
    "ARCHITECT",
    "OF",
    "INVISIBLE",
    "SYSTEMS"
  ]

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden flex items-center bg-gradient-to-br from-background via-muted/20 to-primary/5"
    >
      
      {/* Sophisticated Background System */}
      <div className="absolute inset-0">
        
        {/* Your Portrait as Background Foundation */}
        <motion.div
          className="absolute inset-0 opacity-15"
          style={{ 
            y: backgroundY,
            x: mousePosition.x * 20,
            scale: useTransform(scrollYProgress, [0, 1], [1.1, 1.3])
          }}
        >
          <Image
            src="/silvana-portrait-transparent.png"
            alt="Silvana Restrepo"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
        </motion.div>

        {/* Award-winning geometric overlay system */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: overlayOpacity }}
        >
          {/* Dynamic geometric patterns responding to mouse */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              style={{
                left: `${15 + (i * 4.5)}%`,
                top: `${10 + (i % 7) * 12}%`,
                transform: `translate(${mousePosition.x * (10 + i * 2)}px, ${mousePosition.y * (5 + i)}px)`
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + (i * 0.3),
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_400px] gap-12 items-center">
        
        {/* Left: Award-winning content reveal */}
        <motion.div 
          className="space-y-8"
          style={{ scale: textScale }}
        >
          
          {/* Phase 1: Minimalist brand mark */}
          <AnimatePresence>
            {currentRevealPhase >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="text-3xl font-light tracking-[0.3em] text-muted-foreground"
                    whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.3 }}
                  >
                    silvana.
                  </motion.div>
                  <motion.div
                    className="w-12 h-px bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
                <div className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground/70 mt-2">
                  Experience Architect
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2: Revolutionary title sequence */}
          <div className="space-y-2">
            {revealWords.map((word, index) => (
              <AnimatePresence key={word}>
                {currentRevealPhase >= 2 && (
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      ease: "easeOut"
                    }}
                    className={`text-5xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight ${
                      index === 0 ? 'text-foreground' :
                      index === 1 ? 'text-muted-foreground' :
                      index === 2 ? 'text-primary' :
                      'text-foreground'
                    }`}
                    whileHover={{ 
                      scale: 1.05, 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      transform: `translateX(${mousePosition.x * (index + 1) * 10}px)`
                    }}
                  >
                    {word}
                  </motion.h1>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Phase 3: Philosophical manifesto */}
          <AnimatePresence>
            {currentRevealPhase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative max-w-2xl"
              >
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  Making the <motion.em 
                    className="text-primary font-medium not-italic"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    intangible, tangible
                  </motion.em> —
                  where strategy meets soul in the architecture of human experience.
                </motion.p>
                
                {/* Elegant accent line */}
                <motion.div
                  className="absolute -left-4 top-2 w-1 h-16 bg-gradient-to-b from-primary/60 to-transparent rounded-full"
                  initial={{ height: 0 }}
                  animate={{ height: 64 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 5: Sophisticated CTA system */}
          <AnimatePresence>
            {currentRevealPhase >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-start gap-4 pt-4"
              >
                {/* Primary CTA with award-winning interaction */}
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium overflow-hidden"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -3,
                    boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 3}px)`
                  }}
                >
                  <span className="relative z-10">Explore Transformations</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-hover to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Micro-interaction sparkle */}
                  <motion.div
                    className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                </motion.a>

                {/* Secondary CTA */}
                <motion.a
                  href="#about"
                  className="group relative px-8 py-4 text-foreground font-medium border border-border rounded-lg overflow-hidden"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -3,
                    borderColor: "hsl(var(--primary))"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                    The Philosophy
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-primary/5"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right: Sophisticated portrait reveal */}
        <AnimatePresence>
          {currentRevealPhase >= 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
              style={{ y: portraitY }}
            >
              <motion.div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5 
                }}
                transition={{ duration: 0.5 }}
                style={{
                  transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -5}px)`,
                  perspective: "1000px"
                }}
              >
                <Image
                  src="/silvana-portrait.png"
                  alt="Silvana Restrepo - Experience Architect"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
                
                {/* Sophisticated overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Award-winning floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-4 h-4 bg-secondary rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Award-winning scroll indicator */}
      <AnimatePresence>
        {currentRevealPhase >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 text-muted-foreground cursor-pointer group"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-xs tracking-[0.25em] uppercase group-hover:text-primary transition-colors">
                Begin Journey
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary to-transparent group-hover:via-primary-hover transition-colors" />
              <motion.div 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}