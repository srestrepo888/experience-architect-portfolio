"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isExpanded) {
        setCurrentIndex((prev) => (prev + 1) % services.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isExpanded])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  return (
    <div className="w-full relative">
      
      {/* SERVICE PROGRESS INDICATOR - MINIMALIST */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          {/* Circular Progress */}
          <svg className="w-24 h-24 transform -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="36"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-foreground/10"
            />
            <circle
              cx="48"
              cy="48"
              r="36"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 36}`}
              strokeDashoffset={`${2 * Math.PI * 36 * (1 - (currentIndex + 1) / 6)}`}
              className="text-foreground/60 transition-all duration-700"
            />
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-thin text-foreground/80">{currentIndex + 1}</span>
            <span className="text-[10px] uppercase tracking-wider text-foreground/40">of 6</span>
          </div>
        </div>
      </div>

      {/* HORIZONTAL CAROUSEL */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-black transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-black transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden mx-16" ref={scrollRef}>
          <motion.div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsExpanded(true)}
                  className="relative bg-white/50 dark:bg-black/30 backdrop-blur-xl rounded-2xl p-12 cursor-pointer border border-foreground/5 hover:border-foreground/10 transition-all duration-500"
                >
                  {/* Subtle Gradient Background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 via-transparent to-foreground/10" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-foreground">
                      {service.title}
                    </h3>
                    
                    <div className="w-16 h-px bg-foreground/20 mb-6" />
                    
                    <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light mb-8">
                      {service.subtitle}
                    </p>

                    {/* Expand Indicator */}
                    <div className="flex items-center gap-3 text-sm font-light tracking-wider text-foreground/40 uppercase">
                      <span>View Details</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-foreground/60' 
                  : 'bg-foreground/20 hover:bg-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* EXPANDED MODAL - CLEAN DESIGN */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex items-center justify-center p-8"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-2xl p-12 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-foreground/40 hover:text-foreground/60 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Modal Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight text-foreground mb-4">
                    {services[currentIndex].title}
                  </h2>
                  <div className="w-24 h-px bg-foreground/20" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
                      Strategic Capability
                    </h4>
                    <p className="text-base leading-relaxed text-foreground/80 font-light">
                      {services[currentIndex].capability}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
                      Proven Excellence
                    </h4>
                    <p className="text-base leading-relaxed text-foreground/80 font-light">
                      {services[currentIndex].excellence}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-3">
                      For Projects That Demand
                    </h4>
                    <blockquote className="border-l-2 border-foreground/20 pl-4">
                      <p className="text-base leading-relaxed text-foreground/80 font-light italic">
                        "{services[currentIndex].demand}"
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}