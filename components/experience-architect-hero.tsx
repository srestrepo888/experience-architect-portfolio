"use client"

import type React from "react"
import { useEffect, useRef, useState, useMemo } from "react"
import { motion, useScroll, useTransform, useMotionValue, animate, type Variants } from "framer-motion"
import { useTheme } from "next-themes"

// --- Main Hero Component ---
export default function ExperienceArchitectHero() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()
  const targetRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isInteracted, setIsInteracted] = useState(false) // Has user clicked the bud?
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)

  // --- Configuration for Sentient Bloom ---
  const BLOOM_CONFIG = {
    particleCount: 70,
    particleMaxDrift: 150,
    bud: {
      initialSize: 40,
      pulsateMin: 0.9,
      pulsateMax: 1.1,
      pulsateDuration: 3,
      glowColorDark: "hsla(180, 100%, 70%, 0.3)", // Cyan/Aqua
      glowColorLight: "hsla(210, 100%, 75%, 0.4)", // Light Steel Blue
      interactionExpandSize: 120,
      interactionGlowIntensity: 0.7,
    },
    petals: {
      count: 7,
      minSize: 150,
      maxSize: 400,
      unfurlDuration: 2.5,
      unfurlStagger: 0.15,
      colorDark: (i: number) => `hsla(${180 + i * 20}, 100%, 60%, 0.25)`,
      colorLight: (i: number) => `hsla(${200 + i * 15}, 90%, 65%, 0.3)`,
      shapeComplexity: 5, // Number of points in petal SVG path
    },
    textExperience: {
      revealDelay: 1.5, // BLOOM_CONFIG.petals.unfurlDuration * 0.6,
      letterStagger: 0.1,
      letterDuration: 1.2,
      fontSizeBase: 100,
      colorDark: "hsla(180, 100%, 90%, 0.95)",
      colorLight: "hsla(210, 100%, 95%, 0.95)",
      textShadowDark: "0 0 15px hsla(180, 100%, 80%, 0.7), 0 0 30px hsla(180, 100%, 60%, 0.5)",
      textShadowLight: "0 0 15px hsla(210, 100%, 85%, 0.7), 0 0 30px hsla(210, 100%, 70%, 0.5)",
    },
    textArchitect: {
      revealDelay: 3.0, // BLOOM_CONFIG.petals.unfurlDuration + 0.5,
      duration: 1.8,
      fontSizeBase: 50,
      colorDark: "hsla(0, 0%, 80%, 0.9)", // Silver
      colorLight: "hsla(0, 0%, 70%, 0.9)", // Grey
      textShadowDark: "0 0 8px hsla(0,0%,60%,0.4)",
      textShadowLight: "0 0 8px hsla(0,0%,50%,0.4)",
    },
    interaction: {
      mouseInfluenceRadius: 200,
      mouseForceFactor: 0.1,
    },
    scrollIndicatorDelay: 4.8, // BLOOM_CONFIG.petals.unfurlDuration + BLOOM_CONFIG.textArchitect.duration,
  }

  useEffect(() => {
    setIsMounted(true)
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    updateDimensions()
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("resize", updateDimensions)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("resize", updateDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.65])

  const currentTheme = theme || "light"
  const config = BLOOM_CONFIG

  const experienceText = "EXPERIENCE".split("")
  const getResponsiveFontSize = (base: number) => `clamp(${base * 0.4}px, ${(base / 1920) * 100}vw, ${base}px)`

  const handleBudInteraction = () => {
    if (!isInteracted) setIsInteracted(true)
  }

  if (!isMounted || dimensions.width === 0) {
    return <div ref={targetRef} className="relative h-screen min-h-[700px] w-full bg-black" />
  }

  const budGlow = currentTheme === "dark" ? config.bud.glowColorDark : config.bud.glowColorLight

  return (
    <motion.section
      ref={targetRef}
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-neutral-900 isolate cursor-pointer"
      style={{ opacity: heroOpacity, scale: heroScale }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      onClick={handleBudInteraction} // Trigger bloom on click anywhere for simplicity
    >
      {/* Background Particles */}
      {Array.from({ length: config.particleCount }).map((_, i) => (
        <DriftingParticle
          key={`particle-${i}`}
          delay={i}
          bounds={dimensions}
          mousePos={mousePosition}
          config={config}
        />
      ))}

      {/* Central Bud / Core */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
        }}
        initial={{ width: config.bud.initialSize, height: config.bud.initialSize, opacity: 0.7 }}
        animate={{
          width: isInteracted ? config.bud.interactionExpandSize : config.bud.initialSize,
          height: isInteracted ? config.bud.interactionExpandSize : config.bud.initialSize,
          opacity: isInteracted ? 1 : 0.7,
          boxShadow: isInteracted
            ? `0 0 ${config.bud.interactionExpandSize * 0.5}px ${config.bud.interactionExpandSize * 0.25}px ${budGlow.replace(/[\d.]+\)$/g, `${config.bud.interactionGlowIntensity})`)}`
            : `0 0 ${config.bud.initialSize}px ${config.bud.initialSize * 0.5}px ${budGlow}`,
          transition: { duration: 0.8, ease: "backOut" },
        }}
      >
        <motion.div // Inner pulsating core
          className="w-full h-full rounded-full"
          style={{ backgroundColor: budGlow.replace(/[\d.]+\)$/g, `0.5)`) }}
          animate={{
            scale: [1, config.bud.pulsateMax, config.bud.pulsateMin, 1],
            opacity: [0.7, 1, 0.8, 0.7],
            transition: { duration: config.bud.pulsateDuration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        />
      </motion.div>

      {/* Blooming Petals */}
      {Array.from({ length: config.petals.count }).map((_, i) => (
        <BloomingPetal
          key={`petal-${i}`}
          index={i}
          config={config.petals}
          theme={currentTheme}
          isBlooming={isInteracted}
          center={{ x: dimensions.width / 2, y: dimensions.height / 2 }}
        />
      ))}

      {/* Typographic Reveal */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10">
        <motion.h1
          className="font-serif select-none"
          style={{
            fontSize: getResponsiveFontSize(config.textExperience.fontSizeBase),
            color: currentTheme === "dark" ? config.textExperience.colorDark : config.textExperience.colorLight,
            textShadow:
              currentTheme === "dark" ? config.textExperience.textShadowDark : config.textExperience.textShadowLight,
          }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: config.textExperience.revealDelay,
                staggerChildren: config.textExperience.letterStagger,
              },
            },
          }}
          initial="hidden"
          animate={isInteracted ? "visible" : "hidden"}
        >
          {experienceText.map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: "0.4em", scale: 0.7, filter: "blur(5px)" },
                visible: {
                  opacity: 1,
                  y: "0em",
                  scale: 1,
                  filter: "blur(0px)",
                  transition: { duration: config.textExperience.letterDuration, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="font-sans select-none mt-1 md:mt-2"
          style={{
            fontSize: getResponsiveFontSize(config.textArchitect.fontSizeBase),
            color: currentTheme === "dark" ? config.textArchitect.colorDark : config.textArchitect.colorLight,
            textShadow:
              currentTheme === "dark" ? config.textArchitect.textShadowDark : config.textArchitect.textShadowLight,
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
          initial={{ opacity: 0, y: "0.5em", filter: "blur(3px)" }}
          animate={
            isInteracted
              ? {
                  opacity: 1,
                  y: "0em",
                  filter: "blur(0px)",
                  transition: {
                    delay: config.textArchitect.revealDelay,
                    duration: config.textArchitect.duration,
                    ease: "easeOut",
                  },
                }
              : { opacity: 0, y: "0.5em" }
          }
        >
          ARCHITECT
        </motion.h2>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={
          isInteracted
            ? { opacity: 1, transition: { delay: config.scrollIndicatorDelay, duration: 1 } }
            : { opacity: 0 }
        }
      >
        <span className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400 mb-1.5">
          Scroll
        </span>
        <div className="w-px h-8 bg-neutral-600 dark:bg-neutral-500" />
      </motion.div>
    </motion.section>
  )
}

// --- Particle Component ---
// (Similar to previous, can be reused or adapted if needed, for brevity assuming a simple one for now)
interface ParticleProps {
  delay: number
  bounds: { width: number; height: number }
  mousePos: { x: number; y: number } | null
  config: typeof BLOOM_CONFIG
}
const DriftingParticle: React.FC<ParticleProps> = ({ delay, bounds, mousePos, config }) => {
  const size = useMemo(() => Math.random() * 2.5 + 0.5, [])
  const initialX = useMemo(() => Math.random() * bounds.width, [bounds.width])
  const initialY = useMemo(() => Math.random() * bounds.height, [bounds.height])

  const x = useMotionValue(initialX)
  const y = useMotionValue(initialY)
  const opacity = useMotionValue(0)

  useEffect(() => {
    animate(opacity, Math.random() * 0.2 + 0.05, {
      duration: Math.random() * 3 + 2,
      delay: delay * 0.1,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    })

    // Simple drift
    const drift = () => {
      let targetX = x.get() + (Math.random() - 0.5) * config.particleMaxDrift
      let targetY = y.get() + (Math.random() - 0.5) * config.particleMaxDrift

      // Mouse influence
      if (mousePos) {
        const dx = x.get() - mousePos.x
        const dy = y.get() - mousePos.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < config.interaction.mouseInfluenceRadius) {
          const force = (config.interaction.mouseInfluenceRadius - dist) / config.interaction.mouseInfluenceRadius
          targetX += (dx / dist) * force * config.interaction.mouseForceFactor * 50 // Push away
          targetY += (dy / dist) * force * config.interaction.mouseForceFactor * 50
        }
      }

      // Keep within bounds (simple wrap)
      targetX = (targetX + bounds.width) % bounds.width
      targetY = (targetY + bounds.height) % bounds.height

      animate(x, targetX, { duration: Math.random() * 15 + 10, ease: "linear", onComplete: drift })
      animate(y, targetY, { duration: Math.random() * 15 + 10, ease: "linear" })
    }
    const timeoutId = setTimeout(drift, delay * 100 + Math.random() * 1000) // Staggered start for drift

    return () => {
      clearTimeout(timeoutId)
      // Framer Motion's animate() returns controls that have a .stop() method
      // To properly stop them, you'd need to store these controls.
      // For this example, we'll rely on component unmount.
    }
  }, [delay, bounds, mousePos, x, y, opacity, config])

  return (
    <motion.div
      className="absolute rounded-full bg-neutral-600 dark:bg-neutral-400"
      style={{ x, y, opacity, width: size, height: size, pointerEvents: "none" }}
    />
  )
}

// --- Petal Component ---
interface PetalProps {
  index: number
  config: typeof BLOOM_CONFIG.petals
  theme: string
  isBlooming: boolean
  center: { x: number; y: number }
}
const BloomingPetal: React.FC<PetalProps> = ({ index, config, theme, isBlooming, center }) => {
  const size = useMemo(() => Math.random() * (config.maxSize - config.minSize) + config.minSize, [config])
  const angle = useMemo(() => (index / config.count) * Math.PI * 2, [index, config.count])
  const color = useMemo(
    () => (theme === "dark" ? config.colorDark(index) : config.colorLight(index)),
    [theme, config, index],
  )

  // Generate a more organic petal shape
  const pathData = useMemo(() => {
    let d = `M0,0 C`
    const complexity = config.shapeComplexity
    for (let i = 0; i < complexity; i++) {
      const x1 = (Math.random() - 0.5) * size * 0.8
      const y1 = (Math.random() * 0.5 + 0.2) * size * (i % 2 === 0 ? -1 : -0.8) // Points outwards
      const x2 = (Math.random() - 0.5) * size * 0.6
      const y2 = (Math.random() * 0.5 + 0.5) * size * (i % 2 === 0 ? -1.2 : -1)
      const x = (i / (complexity - 1) - 0.5) * size * 0.3 * (i === complexity - 1 ? 0 : 1) // Endpoint x
      const y = -size * (0.8 + Math.random() * 0.2) // Endpoint y (tip of petal)
      if (i === 0) d = `M0,0 Q${x1},${y1 * 0.5} ${x},${y * 0.3}`
      else d += ` S${x1},${y1} ${x},${y * (0.3 + (i / complexity) * 0.7)}`
    }
    d += ` Q${(Math.random() - 0.5) * size * 0.2},${-size * 0.3} 0,0 Z` // Close path smoothly
    return d
  }, [size, config.shapeComplexity])

  const variants: Variants = {
    dormant: {
      opacity: 0,
      scale: 0.1,
      rotate: angle * (180 / Math.PI) + (Math.random() - 0.5) * 30,
      x: center.x,
      y: center.y,
    },
    blooming: {
      opacity: [0, 0.6, 0.4, 0.7],
      scale: 1,
      filter: ["blur(10px)", "blur(2px)", "blur(0px)"],
      x: center.x + Math.cos(angle) * (size * 0.3),
      y: center.y + Math.sin(angle) * (size * 0.3),
      rotate: angle * (180 / Math.PI) + (Math.random() - 0.5) * 10,
      transition: {
        duration: config.unfurlDuration,
        delay: index * config.unfurlStagger,
        ease: [0.16, 1, 0.3, 1], // Expo out
      },
    },
  }

  return (
    <motion.svg
      className="absolute"
      style={{
        width: size,
        height: size,
        originX: "50%",
        originY: "100%", // Base of petal for rotation
        translateX: "-50%",
        translateY: "-100%", // Adjust so originY is at center point
        pointerEvents: "none",
      }}
      viewBox={`-${size / 2} -${size} ${size} ${size}`} // Adjust viewbox for origin
      variants={variants}
      initial="dormant"
      animate={isBlooming ? "blooming" : "dormant"}
    >
      <path d={pathData} fill={color} />
    </motion.svg>
  )
}
