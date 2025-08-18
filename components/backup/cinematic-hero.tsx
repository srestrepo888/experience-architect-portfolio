"use client"

import { useRef, useState, useEffect } from "react"
import type React from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useReducedMotion } from "framer-motion"

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5, // Stagger delay + initial delay
      duration: 0.8,
      ease: "easeOut",
    },
  }),
}

function FeminineWord({ text, delay = 0 }: { text: string; delay?: number }) {
  const reduced = useReducedMotion()
  const letters = text.split("")
  const ease: number[] = [0.16, 1, 0.3, 1]

  return (
    <span className="relative inline-block select-none">
      {/* Soft rose-gold gradient text with delicate per-letter rise */}
      <motion.span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,224,234,0.92) 55%, rgba(255,255,255,0.98) 100%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "120% 0%",
          WebkitTextStroke: "0.35px rgba(255,255,255,0.35)",
        }}
        initial={reduced ? undefined : { backgroundPosition: "120% 0%", opacity: 0, y: 12, filter: "blur(6px)" }}
        animate={
          reduced
            ? { backgroundPosition: "0% 0%", opacity: 1, y: 0, filter: "blur(0px)" }
            : { backgroundPosition: "0% 0%", opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: reduced ? 0.2 : 1.05, ease, delay }}
      >
        {letters.map((ch, i) => (
          <motion.span
            key={`fem-${i}-${ch}`}
            className="inline-block"
            initial={reduced ? undefined : { opacity: 0, y: "0.55em" }}
            animate={reduced ? { opacity: 1, y: "0em" } : { opacity: 1, y: "0em" }}
            transition={{ duration: reduced ? 0.15 : 0.55, delay: delay + i * 0.038, ease }}
            aria-hidden={ch === " "}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.span>

      {/* Underline flourish */}
      {!reduced && (
        <motion.span
          className="absolute left-0 right-0 -bottom-2 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,208,224,0) 0%, rgba(255,210,232,0.85) 40%, rgba(255,208,224,0) 100%)",
            boxShadow: "0 0 12px rgba(255,210,232,0.45)",
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.85 }}
          transition={{ duration: 0.8, delay: delay + letters.length * 0.038 + 0.08, ease }}
        />
      )}

      {/* Gentle sheen pass */}
      {!reduced && (
        <motion.span
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0.0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: delay + 0.5 }}
        >
          <motion.span
            className="absolute -inset-y-1 -left-1/3 w-1/3 blur-md"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,230,238,0.55) 50%, rgba(255,255,255,0) 100%)",
              mixBlendMode: "screen",
            }}
            animate={{ x: ["-15%", "135%"] }}
            transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2.2, ease: "easeInOut" }}
          />
        </motion.span>
      )}
    </span>
  )
}

export default function CinematicHero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  // Sophisticated scroll effects with elegant curves
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.9, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.92])
  const textRotateX = useTransform(scrollYProgress, [0, 0.5], [0, -8])

  // Advanced mouse-tracking with magnetic effect
  const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)
  
  // Cursor tracking for spotlight effect
  const spotlightX = useMotionValue(0)
  const spotlightY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    
    // Enhanced mouse position calculation with magnetic effect
    const centerX = width / 2
    const centerY = height / 2
    const x = (clientX - left - centerX) / 20
    const y = (clientY - top - centerY) / 20
    
    // Set parallax values
    mouseX.set(x)
    mouseY.set(y)
    
    // Set spotlight position for cursor following effect
    spotlightX.set(clientX - left)
    spotlightY.set(clientY - top)
    
    // Update mouse position state
    setMousePosition({ x: clientX - left, y: clientY - top })
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovering(false)
  }

  return (
    <motion.section
      ref={targetRef}
      className="relative min-h-screen w-full overflow-hidden cursor-none flex items-center justify-center"
      style={{
        opacity: heroOpacity,
        scale: heroScale,
        height: 'clamp(100vh, 120vh, 140vh)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Sophisticated Background Image Layer with Enhanced Effects */}
      <div className="absolute inset-0 w-full h-full -z-30">
        <motion.div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/background-texture.png')",
            filter: useTransform(scrollYProgress, [0, 1], ['blur(0px) saturate(100%)', 'blur(1px) saturate(110%)']),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.05]),
          }}
        />
      </div>

      {/* Sophisticated Cream Rose Background System */}
      <motion.div 
        className="absolute inset-0 w-full h-full -z-25"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(254, 247, 240, 0.9) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(253, 242, 248, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(254, 247, 240, 0.7) 0%, transparent 50%),
            linear-gradient(135deg, #fef7f0 0%, #fdf2f8 25%, #fef7f0 50%, #fdf2f8 75%, #fef7f0 100%)
          `
        }}
        animate={{
          background: [
            `radial-gradient(circle at 30% 20%, rgba(254, 247, 240, 0.9) 0%, transparent 50%),
             radial-gradient(circle at 70% 80%, rgba(253, 242, 248, 0.8) 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, rgba(254, 247, 240, 0.7) 0%, transparent 50%),
             linear-gradient(135deg, #fef7f0 0%, #fdf2f8 25%, #fef7f0 50%, #fdf2f8 75%, #fef7f0 100%)`,
            `radial-gradient(circle at 40% 30%, rgba(254, 247, 240, 0.9) 0%, transparent 50%),
             radial-gradient(circle at 60% 70%, rgba(253, 242, 248, 0.8) 0%, transparent 50%),
             radial-gradient(circle at 30% 90%, rgba(254, 247, 240, 0.7) 0%, transparent 50%),
             linear-gradient(135deg, #fef7f0 0%, #fdf2f8 25%, #fef7f0 50%, #fdf2f8 75%, #fef7f0 100%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Subtle Texture Overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full -z-20 opacity-[0.03]"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.05) 0%, transparent 50%)`,
        }}
      />
      
      {/* Elegant Spotlight Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full -z-15 pointer-events-none"
        style={{
          background: isHovering 
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.02) 0%, transparent 50%)`
            : 'transparent',
          transition: 'background 0.3s ease',
        }}
      />

      {/* Subtle Paper Texture */}
      <div
        className="absolute inset-0 w-full h-full -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)`,
          backgroundRepeat: "repeat",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Custom Cursor */}
      <motion.div
        className="absolute w-8 h-8 border-2 border-black/30 rounded-full pointer-events-none z-50"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          opacity: isHovering ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {/* Sophisticated Typographic Content with Elegant Effects */}
      <motion.div
        className="h-full flex flex-col items-center justify-center text-center relative max-w-7xl mx-auto px-8"
        style={{
          y: contentY,
          x: mouseX,
          rotateY: useTransform(mouseX, [-100, 100], [-3, 3]),
          rotateX: useTransform(mouseY, [-100, 100], [3, -3]),
          scale: textScale,
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          {/* Sophisticated Main Title with Impactful Typography */}
          <motion.h1
            custom={0}
            variants={titleVariants}
            className="font-serif leading-none font-light text-black relative mb-8"
            style={{
              fontSize: 'clamp(4rem, 18vw, 120px)',
              letterSpacing: '-0.04em',
              fontKerning: 'auto',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontWeight: '300',
              lineHeight: '0.9',
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              transform: 'translateZ(20px)',
            }}
          >
            <FeminineWord text="Experience" delay={0.15} />
          </motion.h1>
          
          {/* Sophisticated Subtitle with Elegant Animation */}
          <motion.h2
            custom={1}
            variants={titleVariants}
            className="font-sans leading-none font-extralight tracking-widest uppercase text-black relative opacity-85"
            style={{
              fontSize: 'clamp(2rem, 8vw, 5rem)',
              letterSpacing: '0.25em',
              fontWeight: '200',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              marginTop: '-1rem',
              transform: 'translateZ(10px)',
            }}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 0.85, y: 0, rotateX: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <FeminineWord text="Architect" delay={0.3} />
          </motion.h2>
          
          {/* Sophisticated Divider System */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[200%] h-px"
            style={{
              transformOrigin: 'center',
              transform: 'translate(-50%, -50%)',
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 80%, transparent 100%)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1, 
              opacity: 1,
              scaleX: [0, 1.2, 1, 0],
            }}
            transition={{
              scaleX: { duration: 1.5, delay: 2.5, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1.5, delay: 2.5, ease: [0.16, 1, 0.3, 1] },
              scaleX: {
                duration: 6,
                delay: 4,
                repeat: Infinity,
                repeatDelay: 8,
                ease: 'easeInOut',
              }
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[120%] h-0.5"
            style={{
              transformOrigin: 'center',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        
        {/* Sophisticated Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + (i % 3) * 0.5}px`,
              height: `${1 + (i % 3) * 0.5}px`,
              left: `${15 + i * 7}%`,
              top: `${25 + (i % 4) * 20}%`,
              background: `radial-gradient(circle, rgba(0,0,0,${0.1 + (i % 3) * 0.05}) 0%, transparent 70%)`,
            }}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{
              opacity: [0, 0.4 + (i % 3) * 0.1, 0],
              scale: [0, 1 + (i % 2) * 0.5, 0],
              y: [20, -25 - (i % 4) * 5, 20],
              rotate: [0, 180 * (i % 2 ? 1 : -1), 360 * (i % 2 ? 1 : -1)],
            }}
            transition={{
              duration: 8 + i * 1.2,
              repeat: Infinity,
              delay: 3 + i * 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
        
        {/* Elegant Accent Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px"
            style={{
              width: `${20 + i * 15}%`,
              left: `${20 + i * 25}%`,
              top: `${60 + i * 8}%`,
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)',
              transform: `rotate(${-15 + i * 15}deg)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 1.5 + i * 0.3,
              delay: 4 + i * 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ))}
      </motion.div>

      {/* Sophisticated Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span 
          className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-black/70 mb-4 font-light"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          Discover
        </motion.span>
        <motion.div
          className="relative h-12 w-px bg-gradient-to-b from-black/40 via-black/20 to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 4.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 70%, transparent 100%)',
            }}
            animate={{
              y: [0, 28, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 5,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
