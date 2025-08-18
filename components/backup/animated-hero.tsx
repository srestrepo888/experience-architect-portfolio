"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state after component mounts to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Transform values for first word: "Experience" -> "Great"
  const firstWordOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 0, 0])
  const secondWordOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.7], [0, 1, 0])
  const thirdWordOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])

  // Transform values for second word: "Designer" -> "Design"
  const fourthWordOpacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 0, 0])
  const fifthWordOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.9], [0, 1, 0])
  const sixthWordOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1])

  // Scale and position transforms for added elegance
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, 50])

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-center">
          <span>Experience</span>
          <br />
          <span>Designer</span>
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="text-center" style={{ scale, y: yOffset }}>
          <div className="relative h-[1.2em] mb-4 md:mb-6">
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full"
              style={{ opacity: firstWordOpacity }}
            >
              Experience
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full"
              style={{ opacity: secondWordOpacity }}
            >
              Great
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full"
              style={{ opacity: thirdWordOpacity }}
            >
              Great
            </motion.div>
          </div>

          <div className="relative h-[1.2em]">
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full"
              style={{ opacity: fourthWordOpacity }}
            >
              Designer
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full"
              style={{ opacity: fifthWordOpacity }}
            >
              Design
            </motion.div>
            <motion.div
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight absolute w-full"
              style={{ opacity: sixthWordOpacity }}
            >
              Design
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
