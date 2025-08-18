"use client"

import { motion } from "framer-motion"

export default function SimpleHero() {
  // Ultra-luxury easing curve
  const luxuryEasing = [0.25, 0.1, 0.25, 1]
  
  // Split text into letters for stagger animation
  const splitText = (text: string) => {
    return text.split('').map((letter, index) => ({ letter, index }))
  }
  
  // Letter animation variants
  const letterVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.8,
      filter: "blur(8px)"
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2.5,
        delay: 0.3 + (index * 0.1),
        ease: luxuryEasing
      }
    })
  }

  const experienceLetters = splitText("Experience")
  const architectLetters = splitText("ARCHITECT")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
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
        {/* Experience - Letter by letter stagger */}
        <h1 className="font-serif text-8xl md:text-9xl lg:text-[14rem] font-extralight text-foreground mb-4 md:mb-6 leading-none tracking-wider">
          {experienceLetters.map(({ letter, index }) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="inline-block"
              style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>
        
        {/* ARCHITECT - Letter by letter stagger with offset */}
        <h2 className="font-sans text-6xl md:text-8xl lg:text-[10rem] font-light text-foreground/95 mb-8 md:mb-12 leading-none tracking-wider uppercase">
          {architectLetters.map(({ letter, index }) => (
            <motion.span
              key={index}
              custom={experienceLetters.length + index + 2} // Offset after "Experience"
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className="inline-block"
              style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h2>
      </div>
    </section>
  )
}