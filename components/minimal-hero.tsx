"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useAnimation, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

export default function MinimalHero() {
  const [isMounted, setIsMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      controls.start("visible")
    }
  }, [isMounted, controls])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // Track from start of hero to end of hero
  })

  // Parallax for the main content block
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]) // Start fading out towards the end

  // Parallax for decorative lines
  const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  if (!isMounted) {
    // Render a placeholder with the correct background to prevent layout shift
    // and ensure Framer Motion can calculate dimensions correctly on mount.
    return <div className="min-h-screen bg-background" />
  }

  return (
    <motion.section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-background text-foreground overflow-hidden p-4 md:p-8 select-none"
      style={{
        translateY: contentY,
        opacity: contentOpacity,
      }}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Top Horizontal Line */}
      <motion.div
        className="absolute top-[20%] md:top-[25%] left-[10%] right-[10%] h-px bg-foreground/20 dark:bg-foreground/10"
        style={{ translateY: lineY }}
        variants={{
          ...lineVariants,
          visible: { ...lineVariants.visible, transition: { ...lineVariants.visible?.transition, delay: 0.3 } },
        }}
        initial="hidden"
        animate={controls}
      />

      {/* Vertical Line */}
      <motion.div
        className="absolute left-[10%] top-[calc(20%+1px)] md:top-[calc(25%+1px)] bottom-[calc(20%+1px)] md:bottom-[calc(25%+1px)] w-px bg-foreground/20 dark:bg-foreground/10"
        style={{ translateY: lineY }} // Using same Y parallax as horizontal lines for simplicity
        variants={{
          hidden: { scaleY: 0, originY: 0 },
          visible: { scaleY: 1, originY: 0, transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.5 } },
        }}
        initial="hidden"
        animate={controls}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl lg:max-w-5xl">
        <motion.h1
          className={cn(
            "font-serif font-normal text-foreground", // Black/charcoal as per screenshot
            "text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[12vw] xl:text-[180px]", // Responsive font size
            "leading-none tracking-tight tight-kerning", // Tight kerning
          )}
          variants={itemVariants}
          aria-label="Experience"
        >
          Experience
        </motion.h1>

        <motion.div
          className="relative font-serif font-light text-foreground/40 dark:text-foreground/30 mt-[-2vw] sm:mt-[-1.5vw] md:mt-[-1vw] lg:mt-[-0.5vw]" // Light gray, adjust opacity as needed
          variants={itemVariants}
        >
          <span
            className={cn(
              "text-[12vw] sm:text-[11vw] md:text-[10vw] lg:text-[8vw] xl:text-[130px]", // Responsive font size
              "leading-none tracking-normal",
            )}
            aria-hidden="true"
          >
            Architect
          </span>
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-foreground/30 dark:text-foreground/20 font-sans font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2, duration: 0.5 } }}
          >
            Scroll
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom Horizontal Line */}
      <motion.div
        className="absolute bottom-[20%] md:bottom-[25%] left-[10%] right-[10%] h-px bg-foreground/20 dark:bg-foreground/10"
        style={{ translateY: lineY }}
        variants={{
          ...lineVariants,
          visible: { ...lineVariants.visible, transition: { ...lineVariants.visible?.transition, delay: 0.4 } },
        }}
        initial="hidden"
        animate={controls}
      />
    </motion.section>
  )
}
