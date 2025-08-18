"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Sparkles, Heart, Star } from "lucide-react"

const FloatingElement = ({ delay = 0, children, className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
)

const SparkleEffect = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-luxury-rosegold rounded-full"
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  />
)

export default function LuxuryCinematicHero() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const x = useSpring(mousePosition.x, springConfig)
  const y = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3 + 0.8,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen w-full overflow-hidden bg-luxury-gradient"
      style={{ opacity: heroOpacity }}
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Primary Video/Texture Layer */}
        <motion.div className="absolute inset-0 w-full h-full" style={{ scale }}>
          <video
            className="w-full h-full object-cover opacity-30"
            autoPlay
            loop
            muted
            playsInline
            poster="/texture-fallback.png"
          >
            <source src="/architectural-light.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-pearl/80 via-luxury-champagne/60 to-luxury-rosegold/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-mauve/30 via-transparent to-luxury-blush/20" />

        {/* Animated Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-rose-shimmer opacity-60"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <FloatingElement delay={0} className="top-20 left-20">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-luxury-rosegold to-luxury-blush opacity-60 animate-pearl-shimmer" />
      </FloatingElement>

      <FloatingElement delay={2} className="top-40 right-32">
        <Heart className="w-8 h-8 text-luxury-dustyrose animate-luxury-pulse" fill="currentColor" />
      </FloatingElement>

      <FloatingElement delay={4} className="bottom-40 left-40">
        <Star className="w-6 h-6 text-luxury-rosegold animate-sparkle" fill="currentColor" />
      </FloatingElement>

      {/* Sparkle Effects */}
      {[...Array(12)].map((_, i) => (
        <SparkleEffect key={i} delay={i * 0.5} />
      ))}

      {/* Main Content with Parallax */}
      <motion.div
        className="h-full flex flex-col items-center justify-center text-center relative z-10"
        style={{
          y: contentY,
          x,
          rotateX: y,
          rotateY: x,
        }}
        initial="hidden"
        animate="visible"
      >
        <div className="relative max-w-6xl mx-auto px-8">
          {/* Decorative Frame */}
          <motion.div
            className="absolute inset-0 border-2 border-luxury-rosegold/30 rounded-luxury"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Main Title */}
          <motion.h1
            custom={0}
            variants={titleVariants}
            className="font-display text-[8vw] md:text-[6vw] lg:text-8xl xl:text-9xl leading-none font-light text-transparent bg-clip-text bg-gradient-to-br from-luxury-dustyrose via-luxury-rosegold to-luxury-mauve mb-4"
            style={{
              textShadow: "0 0 40px rgba(232, 180, 184, 0.3)",
            }}
          >
            Experience
          </motion.h1>

          {/* Subtitle with Script Font */}
          <motion.h2
            custom={1}
            variants={titleVariants}
            className="font-script text-[4vw] md:text-[3vw] lg:text-5xl xl:text-6xl leading-none text-luxury-dustyrose/80 mb-8"
          >
            Architect of Dreams
          </motion.h2>

          {/* Elegant Description */}
          <motion.p
            custom={2}
            variants={titleVariants}
            className="font-serif text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-luxury-mauve/90 max-w-3xl mx-auto mb-12"
          >
            Where sophistication meets innovation, and every detail whispers luxury
          </motion.p>

          {/* Luxury CTA Button */}
          <motion.button
            custom={3}
            variants={titleVariants}
            className="group relative px-12 py-4 bg-gradient-to-r from-luxury-rosegold to-luxury-blush rounded-full text-white font-medium tracking-wider uppercase text-sm shadow-luxury hover:shadow-rose-glow transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="w-4 h-4" />
              Discover My World
              <Sparkles className="w-4 h-4" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-luxury-mauve to-luxury-dustyrose"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.span
          className="font-serif text-xs uppercase tracking-[0.3em] text-luxury-dustyrose/70 mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Scroll to Explore
        </motion.span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-luxury-rosegold to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.section>
  )
}
