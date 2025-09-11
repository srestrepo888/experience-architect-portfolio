"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    title: "Accelerated Product Innovation",
    subtitle: "From concept to market dominance in half the time",
    capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
    excellence: "Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems",
    demand: "Speed to market without sacrificing strategic depth.",
    personalizedHints: [
      "Perfect for tech startups seeking rapid MVP validation",
      "Ideal if you're exploring AI-enhanced development workflows",
      "Recommended for teams frustrated with slow product cycles"
    ],
    relatedServices: [2, 3],
    contextualTriggers: ["morning", "weekday", "mobile"]
  },
  {
    title: "Experience Orchestration",
    subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
    capability: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
    excellence: "Theme Park- Multiple Channels-One unified experience language",
    demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance.",
    personalizedHints: [
      "Essential for brands managing multiple customer touchpoints",
      "Perfect if you're struggling with inconsistent brand experience",
      "Recommended for companies expanding into new markets"
    ],
    relatedServices: [4, 6],
    contextualTriggers: ["afternoon", "desktop", "return-visitor"]
  },
  {
    title: "Intelligent Operations Architecture",
    subtitle: "Building AI-augmented teams that outperform traditional structures",
    capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
    excellence: "Globant X initiatives—AI-human collaboration frameworks deployed across 31,000 team members",
    demand: "Operations that think, adapt, and evolve. Intelligence is embedded in every process.",
    personalizedHints: [
      "Critical for organizations embracing AI transformation",
      "Ideal if you're scaling teams beyond traditional limits",
      "Perfect for companies seeking operational efficiency"
    ],
    relatedServices: [1, 5],
    contextualTriggers: ["evening", "weekday", "long-session"]
  },
  {
    title: "Design Systems",
    subtitle: "Engineering organizational evolution through scalable design foundations",
    capability: "Build transformation on bedrock design systems that ensure every team moves in harmony. I collaborate to create modular, scalable frameworks where innovation accelerates rather than fragments—turning organizational complexity into competitive advantage.",
    excellence: "Kayanee wellness platform—Saudi Arabia's first integrated phygital ecosystem.",
    demand: "Transformation that compounds. Every change strengthening the foundation for the next leap.",
    personalizedHints: [
      "Fundamental for companies with multiple product teams",
      "Essential if you're experiencing design inconsistencies",
      "Recommended for organizations preparing for scale"
    ],
    relatedServices: [2, 6],
    contextualTriggers: ["morning", "desktop", "designer-profile"]
  },
  {
    title: "Strategic Innovation Consulting",
    subtitle: "Converting market disruption into systematic advantage",
    capability: "Navigate complexity with frameworks that transform uncertainty into opportunity. We blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
    excellence: "Centre for Fourth Industrial Revolution—governance frameworks adopted across global affiliate network",
    demand: "Innovation with precision. Strategies that move from boardroom to market with velocity.",
    personalizedHints: [
      "Crucial for executives navigating market uncertainty",
      "Perfect for companies facing industry disruption",
      "Recommended for organizations seeking competitive edge"
    ],
    relatedServices: [3, 1],
    contextualTriggers: ["weekend", "executive-profile", "strategic-focus"]
  },
  {
    title: "Customer Intelligence Platforms",
    subtitle: "Turning customer behavior into a competitive advantage",
    capability: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
    excellence: "32 retail destinations achieving 26% sales growth through behavior-driven experience design",
    demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy.",
    personalizedHints: [
      "Game-changing for customer-centric businesses",
      "Essential if you're seeking deeper customer insights",
      "Perfect for companies with rich behavioral data"
    ],
    relatedServices: [2, 4],
    contextualTriggers: ["afternoon", "mobile", "data-focused"]
  }
]

export default function InteractiveServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [userBehavior, setUserBehavior] = useState({
    timeOnPage: 0,
    interactionCount: 0,
    deviceType: 'desktop',
    timeOfDay: 'morning',
    visitType: 'new'
  })
  const [personalizedSuggestions, setPersonalizedSuggestions] = useState<number[]>([])

  // Intelligent behavior tracking
  useEffect(() => {
    const now = new Date()
    const hour = now.getHours()
    const timeOfDay = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening'
    const deviceType = window.innerWidth < 768 ? 'mobile' : 'desktop'
    const visitType = localStorage.getItem('portfolio-visited') ? 'return' : 'new'
    
    setUserBehavior(prev => ({
      ...prev,
      timeOfDay,
      deviceType,
      visitType
    }))
    
    if (!localStorage.getItem('portfolio-visited')) {
      localStorage.setItem('portfolio-visited', 'true')
    }

    const interval = setInterval(() => {
      setUserBehavior(prev => ({ ...prev, timeOnPage: prev.timeOnPage + 1 }))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (expandedService === null) {
        setCurrentSlide((prev) => (prev + 1) % services.length)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [expandedService])

  // Smart recommendations
  useEffect(() => {
    const { timeOfDay, deviceType, timeOnPage, interactionCount } = userBehavior
    const contextualServices: number[] = []

    services.forEach((service, index) => {
      const triggers = service.contextualTriggers
      let score = 0

      if (triggers.includes(timeOfDay)) score += 2
      if (triggers.includes(deviceType)) score += 1
      if (timeOnPage > 30 && triggers.includes('long-session')) score += 2

      if (score > 0) {
        contextualServices.push(index)
      }
    })

    setPersonalizedSuggestions(contextualServices.slice(0, 2))
  }, [userBehavior])

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
    setUserBehavior(prev => ({ ...prev, interactionCount: prev.interactionCount + 1 }))
  }
  
  const getPersonalizedHint = (serviceIndex: number) => {
    const service = services[serviceIndex]
    const hints = service.personalizedHints
    const { timeOfDay } = userBehavior
    
    if (timeOfDay === 'morning') return hints[0]
    if (timeOfDay === 'afternoon') return hints[1] || hints[0]
    return hints[2] || hints[0]
  }

  return (
    <div className="w-full relative">
      
      {/* Services Carousel Instruction */}
      <div className="text-center mb-8">
        <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
          Navigate horizontally or click cards to expand service details
        </p>
        <div className="mt-2 flex justify-center items-center gap-2">
          <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
          <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {currentSlide + 1} of {services.length}
          </span>
          <div className="w-8 h-0.5 bg-slate-300 dark:bg-slate-600"></div>
        </div>
      </div>
      
      {/* Services Carousel */}
      <div className="relative overflow-hidden">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <span className="text-slate-600 text-lg">←</span>
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % services.length)}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <span className="text-slate-600 text-lg">→</span>
          </button>
        </div>

        {/* Carousel Track */}
        <motion.div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {services.map((service, index) => {
            const isRecommended = personalizedSuggestions.includes(index)
            const personalizedHint = getPersonalizedHint(index)
            
            return (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div
                  className={`rounded-2xl border cursor-pointer transition-all duration-500 overflow-hidden relative ${
                    expandedService === index
                      ? 'bg-gradient-to-br from-slate-50 via-white to-slate-50/80 border-slate-300 shadow-2xl'
                      : isRecommended 
                        ? 'bg-gradient-to-br from-blue-50/50 via-white/90 to-white/80 backdrop-blur-sm border-blue-200/60 shadow-lg'
                        : 'bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-sm border-slate-200/50 hover:border-slate-300/70 hover:shadow-lg hover:scale-[1.02]'
                  }`}
                  onClick={() => toggleService(index)}
                >
                  {/* Recommendation Badge */}
                  <AnimatePresence>
                    {isRecommended && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="absolute -top-2 -right-2 z-10"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white/50">
                          <span className="text-white text-xs">★</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Service Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full uppercase tracking-wider">
                            Click to expand details
                          </span>
                        </div>
                        
                        <h3 className={`text-2xl md:text-3xl font-serif font-medium mb-4 leading-tight transition-all duration-500 ${
                          expandedService === index ? 'text-slate-800' : 'text-slate-900 dark:text-slate-100'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                          {service.subtitle}
                        </p>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: expandedService === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ml-4 ${
                          expandedService === index ? 'bg-slate-200 text-slate-700' : 'bg-slate-100/70 text-slate-500'
                        }`}
                      >
                        <span className="text-xl font-light">+</span>
                      </motion.div>
                    </div>

                    {/* Personalized Hint */}
                    <AnimatePresence>
                      {expandedService !== index && isRecommended && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-4"
                        >
                          <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-200/40">
                            <p className="text-xs text-blue-700 font-medium">{personalizedHint}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-8">
                          <div className="h-px bg-gradient-to-r from-slate-300 via-slate-200 to-transparent mb-8"></div>

                          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-10">
                            <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3, duration: 0.6 }}
                            >
                              <div className="bg-gradient-to-br from-white/90 via-white/70 to-white/50 rounded-2xl p-6 border border-slate-200/60">
                                <h4 className="text-lg font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-3">
                                  <div className="w-3 h-10 bg-slate-400 rounded-full"></div>
                                  Strategic Capability
                                </h4>
                                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-200 font-light">
                                  {service.capability}
                                </p>
                              </div>
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4, duration: 0.6 }}
                              className="space-y-6"
                            >
                              <div className="bg-gradient-to-br from-slate-100/90 to-slate-50/70 rounded-2xl p-6 border border-slate-200/60">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
                                  Proven Excellence
                                </h4>
                                <p className="text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                                  {service.excellence}
                                </p>
                              </div>
                              
                              <div className="bg-gradient-to-br from-slate-100/90 to-slate-50/70 rounded-2xl p-6 border border-slate-200/60">
                                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
                                  For Projects That Demand
                                </h4>
                                <blockquote className="border-l-4 border-slate-400 pl-4">
                                  <p className="text-base text-slate-800 dark:text-slate-200 italic font-light leading-relaxed">
                                    {service.demand}
                                  </p>
                                </blockquote>
                              </div>
                            </motion.div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-center mt-8 pt-6 border-t border-slate-200"
                          >
                            <span className="text-sm text-slate-500 dark:text-slate-400">Click to collapse</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}