"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

interface PhilosophyPoint {
  title: string
  description: string
  icon: string
  color: string
}

const philosophyPoints: PhilosophyPoint[] = [
  {
    title: "Human-Centered Design",
    description: "Every decision begins with understanding the human experience and emotional journey.",
    icon: "♦",
    color: "rgba(254, 247, 240, 0.8)"
  },
  {
    title: "Strategic Innovation",
    description: "Balancing creative vision with business objectives to create meaningful impact.",
    icon: "◆",
    color: "rgba(253, 242, 248, 0.8)"
  },
  {
    title: "Invisible Systems",
    description: "Designing the unseen architecture that makes experiences feel effortless and intuitive.",
    icon: "●",
    color: "rgba(254, 247, 240, 0.7)"
  },
  {
    title: "Cultural Synthesis",
    description: "Weaving diverse perspectives into universally resonant design solutions.",
    icon: "▲",
    color: "rgba(253, 242, 248, 0.7)"
  }
]

export default function PhilosophyVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-200px" })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const centerY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      className="relative py-32 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={isInView ? {
          background: [
            "radial-gradient(circle at 20% 30%, rgba(254, 247, 240, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 70%, rgba(253, 242, 248, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(254, 247, 240, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 30%, rgba(254, 247, 240, 0.3) 0%, transparent 50%)"
          ]
        } : {}}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-sm font-light tracking-[0.3em] uppercase text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Philosophy
          </motion.p>
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Design Principles
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The invisible threads that weave together exceptional experiences, 
            connecting strategic vision with human emotion.
          </motion.p>
        </motion.div>

        {/* Central Philosophy Visualization */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Core */}
          <motion.div
            className="absolute w-24 h-24 rounded-full backdrop-blur-xl border border-border/30 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              y: centerY,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-primary/20"
              animate={isInView ? {
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Philosophy Points arranged in a circle */}
          {philosophyPoints.map((point, index) => {
            const angle = (index * 360) / philosophyPoints.length
            const radius = 280
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius

            return (
              <motion.div
                key={point.title}
                className="absolute"
                style={{
                  x: x,
                  y: y + centerY.get() * 0.5,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 1 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* Connection Line */}
                <motion.div
                  className="absolute w-px bg-gradient-to-r from-border/50 to-transparent"
                  style={{
                    height: radius * 0.6,
                    left: "50%",
                    top: "50%",
                    transformOrigin: "top center",
                    transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                  }}
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: 1.2 + index * 0.1,
                    ease: "easeOut"
                  }}
                />

                {/* Philosophy Point Card */}
                <motion.div
                  className="w-80 p-6 rounded-2xl backdrop-blur-xl border border-border/20 relative"
                  style={{
                    background: point.color,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="text-3xl mb-4 text-primary"
                    initial={{ rotateY: 0 }}
                    animate={isInView ? {
                      rotateY: [0, 180, 360],
                    } : {}}
                    transition={{
                      duration: 6,
                      delay: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {point.icon}
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className="font-serif text-xl font-light text-foreground mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  >
                    {point.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.2 }}
                  >
                    {point.description}
                  </motion.p>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/10"
                    animate={isInView ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.7, 0.3],
                    } : {}}
                    transition={{
                      duration: 4,
                      delay: 3 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            )
          })}

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-primary/20"
              style={{
                x: Math.cos(i * 45 * (Math.PI / 180)) * (200 + i * 20),
                y: Math.sin(i * 45 * (Math.PI / 180)) * (200 + i * 20),
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? {
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                rotate: [0, 360],
              } : {}}
              transition={{
                duration: 6,
                delay: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}