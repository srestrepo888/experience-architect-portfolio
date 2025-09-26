"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { LANDOR_EASING, LANDOR_TIMING } from "@/lib/landor-magnetic-system"
import { LandorStandardTitle } from "@/components/ui/landor-section-title-system"
import { cn } from "@/lib/utils"

// 🏛️ SERVICES DATA - From approved content
const SERVICES_DATA = [
  {
    id: "accelerated-innovation",
    title: "Accelerated Product Innovation",
    subtitle: "From concept to market dominance in half the time",
    description: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
    keywords: ["AI-Powered Prototyping", "Innovation Sprints", "Market Validation"],
    icon: "diamond",
    color: "from-primary/20 to-primary/10",
    accentColor: "primary"
  },
  {
    id: "experience-orchestration",
    title: "Experience Orchestration",
    subtitle: "Harmonizing thousands of touchpoints into one resonant brand voice",
    description: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
    keywords: ["Systems Thinking", "Brand Architecture", "Omnichannel Design"],
    icon: "circles",
    color: "from-blue-500/20 to-blue-400/10",
    accentColor: "blue-500"
  },
  {
    id: "intelligent-operations",
    title: "Intelligent Operations Architecture",
    subtitle: "Building AI-augmented teams that outperform traditional structures",
    description: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
    keywords: ["AI-Human Collaboration", "Operations Design", "Intelligence Systems"],
    icon: "squares",
    color: "from-emerald-500/20 to-emerald-400/10",
    accentColor: "emerald-500"
  },
  {
    id: "design-systems",
    title: "Design Systems",
    subtitle: "Engineering organizational evolution through scalable design foundations",
    description: "Build transformation on bedrock design systems that ensure every team moves in harmony. I collaborate to create modular, scalable frameworks where innovation accelerates rather than fragments—turning organizational complexity into competitive advantage.",
    keywords: ["Scalable Frameworks", "Modular Design", "Organizational Evolution"],
    icon: "concentric",
    color: "from-purple-500/20 to-purple-400/10",
    accentColor: "purple-500"
  },
  {
    id: "strategic-innovation",
    title: "Strategic Innovation Consulting",
    subtitle: "Converting market disruption into systematic advantage",
    description: "Navigate complexity with frameworks that transform uncertainty into opportunity. We blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
    keywords: ["Innovation Strategy", "Behavioral Economics", "Market Disruption"],
    icon: "rotation",
    color: "from-orange-500/20 to-orange-400/10",
    accentColor: "orange-500"
  },
  {
    id: "customer-intelligence",
    title: "Customer Intelligence Platforms",
    subtitle: "Turning customer behavior into competitive advantage",
    description: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
    keywords: ["Customer Intelligence", "Behavioral Analytics", "Learning Algorithms"],
    icon: "dots",
    color: "from-rose-500/20 to-rose-400/10",
    accentColor: "rose-500"
  }
]

// 🎨 SERVICE ICONS - Sophisticated animated SVG icons
const ServiceIcon = ({ type, isActive }: { type: string; isActive: boolean }) => {
  const iconVariants = {
    inactive: { scale: 0.9, opacity: 0.6, rotate: 0 },
    active: { scale: 1, opacity: 1, rotate: 0 },
    hover: { scale: 1.1, opacity: 1, rotate: 5 }
  }

  const pathVariants = {
    inactive: { pathLength: 0.3, opacity: 0.4 },
    active: { pathLength: 1, opacity: 1 },
  }

  const iconProps = {
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    className: "text-current"
  }

  switch (type) {
    case "diamond":
      return (
        <motion.svg
          {...iconProps}
          variants={iconVariants}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
          whileHover="hover"
          transition={{ duration: 0.6, ease: LANDOR_EASING.signature }}
        >
          <motion.path
            d="M32 8 L48 24 L32 56 L16 24 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={pathVariants}
            transition={{ duration: 1.2, ease: LANDOR_EASING.signature }}
          />
        </motion.svg>
      )
    
    case "circles":
      return (
        <motion.svg
          {...iconProps}
          variants={iconVariants}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
          whileHover="hover"
          transition={{ duration: 0.6, ease: LANDOR_EASING.signature }}
        >
          <motion.circle
            cx="32" cy="32" r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={pathVariants}
            transition={{ duration: 1, ease: LANDOR_EASING.signature }}
          />
          <motion.circle
            cx="32" cy="32" r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            variants={pathVariants}
            transition={{ duration: 1.2, ease: LANDOR_EASING.signature, delay: 0.2 }}
          />
        </motion.svg>
      )
    
    case "squares":
      return (
        <motion.svg
          {...iconProps}
          variants={iconVariants}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
          whileHover="hover"
          transition={{ duration: 0.6, ease: LANDOR_EASING.signature }}
        >
          <motion.rect
            x="16" y="16" width="16" height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={pathVariants}
            transition={{ duration: 0.8, ease: LANDOR_EASING.signature }}
          />
          <motion.rect
            x="36" y="16" width="16" height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={pathVariants}
            transition={{ duration: 0.8, ease: LANDOR_EASING.signature, delay: 0.2 }}
          />
          <motion.rect
            x="16" y="36" width="16" height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={pathVariants}
            transition={{ duration: 0.8, ease: LANDOR_EASING.signature, delay: 0.4 }}
          />
          <motion.rect
            x="36" y="36" width="16" height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            variants={pathVariants}
            transition={{ duration: 0.8, ease: LANDOR_EASING.signature, delay: 0.6 }}
          />
        </motion.svg>
      )
    
    default:
      return (
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
          variants={iconVariants}
          initial="inactive"
          animate={isActive ? "active" : "inactive"}
          whileHover="hover"
          transition={{ duration: 0.6, ease: LANDOR_EASING.signature }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/40" />
        </motion.div>
      )
  }
}

// 🎭 MAIN COMPONENT
export default function InteractiveServicesExploration() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % SERVICES_DATA.length)
    }, 6000) // 6 seconds per service

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % SERVICES_DATA.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length)
  }, [])

  const goToIndex = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  const currentService = SERVICES_DATA[currentIndex]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 30 : -30
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      rotateY: direction < 0 ? 30 : -30
    })
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: LANDOR_EASING.signature }
    }
  }

  return (
    <section ref={ref} id="services" className="relative py-24 overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.05)_100%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <LandorStandardTitle
          number="03"
          title="Architectural\nitalic:Expertise"
          subtitle="Explore each dimension of architectural excellence through em:sophisticated interactive discovery:em"
        />

        {/* Interactive Services Explorer */}
        <div className="relative">
          {/* Main Service Display */}
          <div className="relative h-[600px] md:h-[500px] perspective-1000">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentService.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.6 },
                  scale: { duration: 0.6 },
                  rotateY: { duration: 0.8, ease: LANDOR_EASING.signature }
                }}
                className="absolute inset-0"
              >
                <div className="h-full bg-background/80 backdrop-blur-xl border border-border/30 rounded-3xl p-12 md:p-16 shadow-2xl">
                  <div className="h-full flex flex-col md:flex-row items-center gap-12">
                    {/* Service Icon */}
                    <motion.div 
                      className="flex-shrink-0"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${currentService.color} flex items-center justify-center p-8`}>
                        <ServiceIcon type={currentService.icon} isActive={true} />
                      </div>
                    </motion.div>

                    {/* Service Content */}
                    <motion.div 
                      className="flex-1 text-center md:text-left"
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="text-3xl md:text-4xl font-serif font-light mb-4 text-foreground">
                        {currentService.title}
                      </h3>
                      <p className="text-lg font-medium text-primary/90 mb-6 leading-relaxed">
                        {currentService.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                        {currentService.description}
                      </p>
                      
                      {/* Keywords */}
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {currentService.keywords.map((keyword, index) => (
                          <motion.span
                            key={keyword}
                            className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary/80 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.8 + (index * 0.1),
                              ease: LANDOR_EASING.signature 
                            }}
                          >
                            {keyword}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Previous Button */}
            <motion.button
              onClick={goToPrevious}
              className="group relative w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
            </motion.button>

            {/* Service Indicators */}
            <div className="flex items-center gap-4">
              {SERVICES_DATA.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => goToIndex(index)}
                  className={cn(
                    "relative w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-primary/50"
                  )}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3, ease: LANDOR_EASING.signature }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={goToNext}
              className="group relative w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
            </motion.button>
          </div>

          {/* Play/Pause Control */}
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              {isPlaying ? "Pause" : "Play"} Auto-exploration
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-border/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/60"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentIndex + 1) / SERVICES_DATA.length) * 100}%` }}
                transition={{ duration: 0.6, ease: LANDOR_EASING.signature }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>{currentIndex + 1} of {SERVICES_DATA.length}</span>
              <span>{currentService.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
