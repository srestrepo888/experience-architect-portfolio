"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function SophisticatedScrollEffects() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring animation for progress
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const progressWidth = useTransform(springProgress, [0, 1], ["0%", "100%"])
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Sophisticated Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1"
        style={{ opacity: progressOpacity }}
      >
        {/* Background track */}
        <div className="absolute inset-0 bg-gradient-to-r from-border/20 via-border/10 to-border/20" />
        
        {/* Animated progress */}
        <motion.div
          className="absolute inset-0 origin-left"
          style={{
            width: progressWidth,
            background: "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        
        {/* Glowing tip */}
        <motion.div
          className="absolute top-0 bottom-0 w-8 rounded-full"
          style={{
            left: progressWidth,
            background: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, transparent 70%)",
            filter: "blur(2px)",
            transform: "translateX(-50%)",
          }}
        />
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        style={{ opacity: progressOpacity }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="relative w-16 h-16 rounded-full backdrop-blur-xl border border-border/20 flex items-center justify-center cursor-pointer group"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
          }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Circular progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border/30"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/60"
              strokeLinecap="round"
              style={{
                pathLength: springProgress,
                strokeDasharray: "0 1",
              }}
              initial={{ pathLength: 0 }}
            />
          </svg>
          
          {/* Arrow icon */}
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary/80 group-hover:text-primary transition-colors"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Ambient Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`ambient-${i}`}
          className="fixed pointer-events-none z-10"
          style={{
            left: `${10 + (i * 8) % 80}%`,
            top: `${20 + (i * 13) % 60}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(0,0,0,${0.1 + (i % 3) * 0.05}) 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
    </>
  )
}