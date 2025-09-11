"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"

const services = [
  {
    title: "Accelerated Product Innovation",
    subtitle: "From concept to market dominance in half the time",
    capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
    excellence: "Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems",
    demand: "Speed to market without sacrificing strategic depth."
  },
  {
    title: "Experience Orchestration",
    subtitle: "Harmonizing thousands of touchpoints into one resonant brand voice",
    capability: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
    excellence: "Theme Park- Multiple Channels-One unified experience language",
    demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance."
  },
  {
    title: "Intelligent Operations Architecture",
    subtitle: "Building AI-augmented teams that outperform traditional structures",
    capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
    excellence: "Globant X initiatives—AI-human collaboration frameworks deployed across 31,000 team members",
    demand: "Operations that think, adapt, and evolve. Intelligence is embedded in every process."
  },
  {
    title: "Design Systems",
    subtitle: "Engineering organizational evolution through scalable design foundations",
    capability: "Build transformation on bedrock design systems that ensure every team moves in harmony. I collaborate to create modular, scalable frameworks where innovation accelerates rather than fragments—turning organizational complexity into competitive advantage.",
    excellence: "Kayanee wellness platform—Saudi Arabia's first integrated phygital ecosystem.",
    demand: "Transformation that compounds. Every change strengthening the foundation for the next leap."
  },
  {
    title: "Strategic Innovation Consulting",
    subtitle: "Converting market disruption into systematic advantage",
    capability: "Navigate complexity with frameworks that transform uncertainty into opportunity. We blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
    excellence: "Centre for Fourth Industrial Revolution—governance frameworks adopted across global affiliate network",
    demand: "Innovation with precision. Strategies that move from boardroom to market with velocity."
  },
  {
    title: "Customer Intelligence Platforms",
    subtitle: "Turning customer behavior into competitive advantage",
    capability: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
    excellence: "32 retail destinations achieving 26% sales growth through behavior-driven experience design",
    demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy."
  }
]

export default function InteractiveServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [2, -2])
  const rotateY = useTransform(mouseX, [-300, 300], [-2, 2])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="w-full relative" ref={containerRef}>
      
      {/* ELEVATED HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-block relative">
          <motion.h3 
            className="text-xs font-medium tracking-[0.4em] uppercase text-foreground/40 mb-6"
            initial={{ letterSpacing: '0.2em' }}
            animate={{ letterSpacing: '0.4em' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Strategic Capabilities
          </motion.h3>
          <div className="absolute -left-20 top-0 w-16 h-px bg-gradient-to-r from-transparent to-foreground/20" />
          <div className="absolute -right-20 top-0 w-16 h-px bg-gradient-to-l from-transparent to-foreground/20" />
        </div>
      </motion.div>

      {/* MUSEUM-QUALITY SERVICE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              onClick={() => {
                setActiveService(index)
                setIsExpanded(true)
              }}
              className="relative h-full cursor-pointer"
            >
              {/* GRADIENT MESH BACKGROUND */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/10 via-transparent to-cyan-500/10 blur-3xl" />
              </div>

              {/* CARD CONTENT */}
              <div className="relative bg-white/50 dark:bg-black/30 backdrop-blur-xl rounded-3xl p-10 h-full border border-white/10 hover:border-white/20 transition-all duration-700">
                
                {/* SOPHISTICATED INDICATOR */}
                <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="0.5"
                      className="text-foreground"
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="35" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="0.5"
                      strokeDasharray="2 4"
                      className="text-foreground animate-spin"
                      style={{ animationDuration: '30s' }}
                    />
                  </svg>
                </div>

                {/* SERVICE NUMBER - ELEGANT */}
                <motion.div 
                  className="text-6xl font-thin text-foreground/10 absolute -top-2 -left-2"
                  whileHover={{ scale: 1.2, opacity: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>

                {/* TITLE WITH ELEVATED TYPOGRAPHY */}
                <h3 className="text-2xl md:text-3xl font-serif font-light leading-tight mb-4 text-foreground mt-8 tracking-tight">
                  {service.title}
                </h3>

                {/* SOPHISTICATED DIVIDER */}
                <div className="w-12 h-px bg-gradient-to-r from-foreground/40 to-transparent mb-6" />

                {/* SUBTITLE - EDITORIAL STYLE */}
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light tracking-wide">
                  {service.subtitle}
                </p>

                {/* EXPLORE INDICATOR */}
                <motion.div 
                  className="absolute bottom-8 right-8 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-foreground/40"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Explore</span>
                  <motion.svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <path 
                      d="M5 12h14m0 0l-7-7m7 7l-7 7" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* EXPANDED DETAIL VIEW - MAGAZINE QUALITY */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-50 flex items-center justify-center p-8"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full bg-white/95 dark:bg-black/95 backdrop-blur-3xl rounded-3xl p-12 md:p-16 relative overflow-hidden"
            >
              {/* CLOSE BUTTON - MINIMAL */}
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsExpanded(false)}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.button>

              {/* CONTENT - EDITORIAL LAYOUT */}
              <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                {/* LEFT COLUMN - TITLE */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/40">
                      Capability {String(activeService + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight mt-4 text-foreground">
                      {services[activeService].title}
                    </h2>
                  </motion.div>
                </div>

                {/* RIGHT COLUMN - DETAILS */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/40 mb-4">
                      Strategic Approach
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-light">
                      {services[activeService].capability}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/40 mb-4">
                      Proven Excellence
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-light">
                      {services[activeService].excellence}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xs font-medium tracking-[0.3em] uppercase text-foreground/40 mb-4">
                      For Projects That Demand
                    </h4>
                    <blockquote className="border-l-2 border-foreground/20 pl-6">
                      <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-light italic">
                        "{services[activeService].demand}"
                      </p>
                    </blockquote>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}