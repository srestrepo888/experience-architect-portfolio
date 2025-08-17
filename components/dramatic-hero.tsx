"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion" // Removed useAnimation as it wasn't essential for particles
import React from "react"

// Helper function for random values
const random = (min: number, max: number) => Math.random() * (max - min) + min

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  vx: number // velocity x
  vy: number // velocity y
}

const createParticle = (id: number, width: number, height: number): Particle => ({
  id,
  x: random(0, width),
  y: random(0, height),
  size: random(1, 3),
  opacity: random(0.1, 0.4),
  vx: random(-0.2, 0.2),
  vy: random(-0.2, 0.2),
})

export default function DramaticHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const animationFrameId = useRef<number>()

  // Ensure useScroll is called unconditionally at the top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Define all useTransform hooks unconditionally at the top
  const experienceOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
  const greatOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0])
  const finalGreatOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1])

  const designerOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const designOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65, 0.75], [0, 1, 1, 0])
  const finalDesignOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1])

  const perspectiveValue = useTransform(scrollYProgress, [0, 1], [1000, 800])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, 50])
  const heroContentOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0])

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const lineWidth = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "100%"])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const verticalGridLineOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.7, 0.7, 0.3])

  const characterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== "undefined") {
      const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      }
      updateDimensions()
      window.addEventListener("resize", updateDimensions)
      return () => window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0 && isMounted) {
      const numParticles = Math.floor((dimensions.width * dimensions.height) / 20000)
      setParticles(
        Array.from({ length: numParticles }).map((_, i) => createParticle(i, dimensions.width, dimensions.height)),
      )
    }
  }, [dimensions, isMounted])

  useEffect(() => {
    const updateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((p) => {
          let newX = p.x + p.vx
          let newY = p.y + p.vy

          if (newX < 0 || newX > dimensions.width) p.vx *= -1
          if (newY < 0 || newY > dimensions.height) p.vy *= -1

          newX = Math.max(0, Math.min(newX, dimensions.width))
          newY = Math.max(0, Math.min(newY, dimensions.height))
          return { ...p, x: newX, y: newY }
        }),
      )
      animationFrameId.current = requestAnimationFrame(updateParticles)
    }

    if (particles.length > 0 && isMounted) {
      animationFrameId.current = requestAnimationFrame(updateParticles)
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [particles, dimensions.width, dimensions.height, isMounted])

  // If not mounted, return null to ensure clean client-side hydration for animations
  if (!isMounted) {
    return <div className="h-[120vh] relative bg-background" />
  }

  return (
    <div ref={containerRef} className="h-[120vh] relative bg-background overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }} aria-hidden="true">
          {/* Use a memoized SVG to prevent re-renders */}
          <MemoizedParticles particles={particles} />
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`grid-h-${i}`}
                className="absolute h-px bg-foreground/30"
                style={{
                  left: 0,
                  right: 0,
                  top: `${(i + 1) * 5}%`,
                  scaleX: lineWidth,
                  transformOrigin: i % 2 === 0 ? "0% 50%" : "100% 50%",
                }}
              />
            ))}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={`grid-v-${i}`}
                className="absolute w-px bg-foreground/30"
                style={{
                  top: 0,
                  bottom: 0,
                  left: `${(i + 1) * (100 / 31)}%`,
                  scaleY: lineWidth,
                  transformOrigin: i % 2 === 0 ? "0% 0%" : "0% 100%",
                  opacity: verticalGridLineOpacity,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center relative z-10"
          style={{
            perspective: perspectiveValue,
            rotateX,
            scale,
            y,
            opacity: heroContentOpacity,
          }}
        >
          <div className="relative h-[1.2em] mb-4 md:mb-6 overflow-hidden">
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full text-foreground"
              style={{ opacity: experienceOpacity }}
            >
              {Array.from("Experience").map((char, index) => (
                <motion.span
                  key={`exp-${index}`}
                  variants={characterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full text-foreground"
              style={{ opacity: greatOpacity }}
            >
              {Array.from("Great").map((char, index) => (
                <motion.span
                  key={`great1-${index}`}
                  variants={characterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full text-foreground"
              style={{ opacity: finalGreatOpacity }}
            >
              {Array.from("Great").map((char, index) => (
                <motion.span
                  key={`great2-${index}`}
                  variants={characterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="relative h-[1.2em] overflow-hidden">
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full text-foreground"
              style={{ opacity: designerOpacity }}
            >
              {Array.from("Designer").map((char, index) => (
                <motion.span
                  key={`designer-${index}`}
                  variants={characterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index + 3} // Stagger animation
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full text-foreground"
              style={{ opacity: designOpacity }}
            >
              {Array.from("Design").map((char, index) => (
                <motion.span
                  key={`design1-${index}`}
                  variants={characterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index + 3}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full text-foreground"
              style={{ opacity: finalDesignOpacity }}
            >
              {Array.from("Design").map((char, index) => (
                <motion.span
                  key={`design2-${index}`}
                  variants={characterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index + 3}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="h-px bg-foreground/30 w-0 mx-auto mt-12"
            style={{
              width: lineWidth,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          style={{
            opacity: scrollIndicatorOpacity,
          }}
        >
          <motion.div
            className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center"
            initial={{ opacity: 0 }} // This initial is for its own animation
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="w-1 h-2 bg-foreground/50 rounded-full mt-2"
              animate={{
                y: [0, 4, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.p
            className="text-xs text-foreground/50 mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Scroll
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

const MemoizedParticles = React.memo(function Particles({ particles }: { particles: Particle[] }) {
  return (
    <motion.svg width="100%" height="100%" className="absolute inset-0 opacity-70">
      {particles.map((p) => (
        <motion.circle
          key={p.id}
          cx={p.x}
          cy={p.y}
          r={p.size}
          className="text-foreground"
          style={{ opacity: p.opacity }}
          fill="currentColor"
        />
      ))}
    </motion.svg>
  )
})
