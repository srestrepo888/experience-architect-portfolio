"use client"

import { motion } from "framer-motion"

export default function SimpleHero() {
  // Ultra-luxury easing curve
  const luxuryEasing = [0.25, 0.1, 0.25, 1]
  
  // Split text into letters for stagger animation
  const splitText = (text: string) => {
    return text.split('').map((letter, index) => ({ letter, index }))
  }
  
  // Letter animation variants with luxury sophistication
  const letterVariants = {
    initial: {
      opacity: 0,
      y: 40,
      scale: 0.7,
      filter: "blur(8px)",
      rotateX: 15,
      transformPerspective: 1000
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transformPerspective: 1000,
      transition: {
        duration: 2.5,
        delay: 0.3 + (index * 0.1),
        ease: luxuryEasing
      }
    }),
    hover: {
      scale: 1.05,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const experienceLetters = splitText("Experience")
  const architectLetters = splitText("ARCHITECT")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-stone-50/30">
      
      {/* Ambient background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.05)_0%,transparent_50%)]" />
      
      {/* Dramatic accent lines - delayed to appear after text */}
      <motion.div 
        className="absolute left-1/2 top-1/2 w-px h-32 bg-foreground/20"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.2 }}
        style={{ transformOrigin: "center" }}
      />
      <motion.div 
        className="absolute left-1/2 top-1/2 w-32 h-px bg-foreground/20"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.4 }}
        style={{ transformOrigin: "center" }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Experience - Letter by letter stagger with luxury spacing */}
        <h1 className="font-serif text-8xl md:text-9xl lg:text-[16rem] xl:text-[18rem] font-extralight text-foreground mb-6 md:mb-8 leading-[0.85] tracking-[0.02em]">
          {experienceLetters.map(({ letter, index }) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="inline-block relative group cursor-default"
              style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
            >
              {/* Letter with animated gradient texture */}
              <span 
                className="relative z-10 bg-gradient-to-b from-foreground to-foreground/90"
                style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundImage: `linear-gradient(135deg, 
                    hsl(var(--foreground)) 0%, 
                    hsl(var(--foreground) / 0.95) 25%, 
                    hsl(var(--foreground)) 50%, 
                    hsl(var(--foreground) / 0.9) 75%, 
                    hsl(var(--foreground)) 100%)`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
              
              {/* Subtle shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4 + (index * 0.1)
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                }}
              />
            </motion.span>
          ))}
        </h1>
        
        {/* ARCHITECT - Letter by letter stagger with offset and ULTRA dramatic size */}
        <h2 className="font-sans text-8xl md:text-9xl lg:text-[14rem] xl:text-[16rem] font-light text-foreground/95 mb-12 md:mb-20 leading-[0.75] tracking-[0.08em] uppercase">
          {architectLetters.map(({ letter, index }) => (
            <motion.span
              key={index}
              custom={experienceLetters.length + index + 2} // Offset after "Experience"
              variants={letterVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="inline-block relative group cursor-default"
              style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
            >
              {/* Letter with animated gradient texture - stronger for ARCHITECT */}
              <span 
                className="relative z-10 bg-gradient-to-b from-foreground to-foreground/85"
                style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundImage: `linear-gradient(135deg, 
                    hsl(var(--foreground) / 0.95) 0%, 
                    hsl(var(--foreground)) 20%, 
                    hsl(var(--foreground) / 0.9) 40%, 
                    hsl(var(--foreground)) 60%, 
                    hsl(var(--foreground) / 0.85) 80%, 
                    hsl(var(--foreground)) 100%)`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
              
              {/* Enhanced shimmer effect for ARCHITECT */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4.5 + (index * 0.1)
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)'
                }}
              />
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  )
}