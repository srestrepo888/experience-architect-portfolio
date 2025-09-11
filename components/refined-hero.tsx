"use client"

import { motion } from "framer-motion"
import { CONTENT_CONFIG } from "@/lib/content-config"
import Image from "next/image"

export default function RefinedHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Your Portrait as Background Foundation */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/silvana-portrait-transparent.png"
            alt="Silvana Restrepo"
            fill
            className="object-cover object-top"
            priority
            quality={95}
          />
        </div>
        {/* Sophisticated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      </div>
      
      {/* Clean content-first layout */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* DRAMATIC TECHNOLOGY-FOCUSED HEADLINE */}
        <div className="relative mb-8">
          {/* Tech Grid Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-1 h-full">
              {[...Array(64)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: Math.random() * 0.3 }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.02,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
              ))}
            </div>
          </div>

          {/* EXPERIENCE - Primary emphasis, dramatic presentation */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary-hover relative mb-4"
          >
            {CONTENT_CONFIG.HERO.MAIN_TITLE}
            
            <motion.div
              className="absolute bottom-2 left-1/4 w-1 h-8 bg-gradient-to-t from-primary to-transparent"
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.h1>

          {/* ARCHITECT - Secondary, elegant supporting */}
          <motion.h1
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-none tracking-wide text-foreground/80"
          >
            {CONTENT_CONFIG.HERO.SUBTITLE}
          </motion.h1>
          
          {/* Sophisticated Connecting Lines - Architecting Idea */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="absolute left-0 right-0 -bottom-4 flex items-center justify-center gap-4"
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 rounded-full bg-primary/40" />
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </motion.div>
        </div>
        
        
        {/* Clean, purposeful CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA - Coral button */}
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200"
            whileHover={{ 
              y: -1,
              boxShadow: "0 10px 25px -3px rgb(255 102 99 / 0.3)"
            }}
            whileTap={{ y: 0 }}
          >
            View My Work
          </motion.a>
          
          {/* Secondary CTA - Ghost button */}
          <motion.a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 text-foreground font-medium border border-border rounded-lg transition-all duration-200 hover:bg-muted hover:border-primary"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
          >
            About Me
          </motion.a>
        </motion.div>
        
        {/* Refined tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="mt-16 text-sm font-light text-muted-foreground max-w-lg mx-auto leading-relaxed"
        >
          {CONTENT_CONFIG.HERO.TAGLINE}
        </motion.p>
      </div>
      
      {/* Minimal scroll indicator - no floating animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-8 bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}