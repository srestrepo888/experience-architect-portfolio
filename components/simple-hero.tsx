"use client"

import { motion } from "framer-motion"

export default function SimpleHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background-texture.png')",
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          className="font-serif text-6xl md:text-8xl font-light text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h1>
        
        <motion.h2 
          className="font-sans text-2xl md:text-4xl font-light text-foreground/80 mb-8 tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ARCHITECT
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Designing invisible systems that touch the human soul
        </motion.p>
      </div>
    </section>
  )
}