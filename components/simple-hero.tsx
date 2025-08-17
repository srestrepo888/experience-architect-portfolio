"use client"

import { motion } from "framer-motion"

export default function SimpleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Dramatic accent lines */}
      <motion.div 
        className="absolute left-1/2 top-1/2 w-px h-32 bg-foreground/20"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div 
        className="absolute left-1/2 top-1/2 w-32 h-px bg-foreground/20"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        style={{ transformOrigin: "center" }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1 
          className="font-serif text-7xl md:text-9xl lg:text-[12rem] font-extralight text-foreground mb-4 md:mb-6 leading-[0.8] tracking-[-0.04em]"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Experience
        </motion.h1>
        
        <motion.h2 
          className="font-sans text-4xl md:text-6xl lg:text-8xl font-light text-foreground/90 mb-8 md:mb-12 tracking-[0.2em] md:tracking-[0.3em] lg:tracking-[0.4em] uppercase"
          initial={{ opacity: 0, y: 30, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: ["0.1em", "0.4em"] }}
          transition={{ 
            duration: 1.5, 
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            letterSpacing: { duration: 2, ease: "easeOut" }
          }}
        >
          ARCHITECT
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          initial={{ opacity: 0, y: 30, blur: 10 }}
          animate={{ opacity: 1, y: 0, blur: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          Designing invisible systems that touch the human soul
        </motion.p>
      </div>
    </section>
  )
}