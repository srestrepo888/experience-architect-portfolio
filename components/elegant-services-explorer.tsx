"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles, Target, Zap } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Accelerated Product Innovation",
    subtitle: "From concept to market dominance in half the time",
    capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
    outcomes: [
      "Reduction in product development cycles",
      "3x faster market validation through AI-driven research",
      "Cross-industry trend synthesis identifying opportunity spaces"
    ],
    excellence: "Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems",
    demand: "Speed to market without sacrificing strategic depth.",
    icon: Zap,
    gradient: "from-blue-600/20 via-purple-600/10 to-blue-400/20"
  },
  {
    number: "02",
    title: "Experience Orchestration",
    subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
    capability: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
    outcomes: [
      "Increase in cross-channel satisfaction",
      "Reduction in operational redundancy",
      "Unified governance frameworks"
    ],
    excellence: "Theme Park- Multiple Channels-One unified experience language",
    demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance.",
    icon: Target,
    gradient: "from-emerald-600/20 via-teal-500/10 to-green-400/20"
  },
  {
    number: "03",
    title: "Intelligent Operations Architecture",
    subtitle: "Building AI-augmented teams that outperform traditional structures",
    capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
    outcomes: [
      "Improvement in operational excellence metrics",
      "Real-time competitive intelligence",
      "Automated trend detection"
    ],
    excellence: "Globant X initiatives—AI-human collaboration frameworks deployed across 31,000 team members",
    demand: "Operations that think, adapt, and evolve. Intelligence embedded in every process.",
    icon: Sparkles,
    gradient: "from-orange-600/20 via-red-500/10 to-pink-400/20"
  },
  {
    number: "04",
    title: "Design Systems",
    subtitle: "Engineering organizational evolution through scalable design foundations",
    capability: "Build transformation on bedrock design systems that ensure every team moves in harmony. I collaborate to create modular, scalable frameworks where innovation accelerates rather than fragments—turning organizational complexity into competitive advantage.",
    outcomes: [
      "Faster feature deployment through unified systems",
      "Design consistency across all digital properties",
      "Team velocity increased by 2.5x"
    ],
    excellence: "Kayanee wellness platform—Saudi Arabia's first integrated phygital ecosystem.",
    demand: "Transformation that compounds. Every change strengthening the foundation for the next leap.",
    icon: Target,
    gradient: "from-violet-600/20 via-purple-500/10 to-indigo-400/20"
  },
  {
    number: "05",
    title: "Strategic Innovation Consulting",
    subtitle: "Converting market disruption into systematic advantage",
    capability: "Navigate complexity with frameworks that transform uncertainty into opportunity. We blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
    outcomes: [
      "Innovation portfolios with tangible industry ROI",
      "Stakeholder alignment",
      "Time to strategic clarity"
    ],
    excellence: "Centre for Fourth Industrial Revolution—governance frameworks adopted across global affiliate network",
    demand: "Innovation with precision. Strategies that move from boardroom to market with velocity.",
    icon: Sparkles,
    gradient: "from-cyan-600/20 via-blue-500/10 to-teal-400/20"
  },
  {
    number: "06",
    title: "Customer Intelligence Platforms",
    subtitle: "Turning customer behavior into a competitive advantage",
    capability: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
    outcomes: [
      "Experience resonance",
      "Customer Service Metrics",
      "Service Blueprints"
    ],
    excellence: "32 retail destinations achieving 26% sales growth through behavior-driven experience design",
    demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy.",
    icon: Target,
    gradient: "from-rose-600/20 via-pink-500/10 to-red-400/20"
  }
]

export default function ElegantServicesExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentService = services[activeIndex]
  const IconComponent = currentService.icon

  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length)
  }

  const prevService = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Service Navigation Pills */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-white/40">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm ${
                index === activeIndex
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/60'
              }`}
            >
              {service.number}
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-xl"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{service.number}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Service Display */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${currentService.gradient} backdrop-blur-lg border border-white/30 shadow-2xl`}
          >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 gap-px h-full">
                {[...Array(144)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-primary/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: Math.random() * 0.3 }}
                    transition={{ 
                      duration: 3,
                      delay: i * 0.01,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 p-8 lg:p-12">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentService.gradient.replace(/\/20|\/10/g, '/40')} border border-white/30`}>
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <span className="text-6xl font-black font-mono text-primary/20 block leading-none">
                      {currentService.number}
                    </span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevService}
                    className="p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 hover:bg-white/90 transition-all duration-200 hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextService}
                    className="p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 hover:bg-white/90 transition-all duration-200 hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Main Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight text-foreground">
                      {currentService.title}
                    </h3>
                    <p className="text-xl italic text-primary mb-6 leading-relaxed">
                      {currentService.subtitle}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-3">
                      Strategic Capability
                    </h4>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {currentService.capability}
                    </p>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-6">
                  {/* Outcomes */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-4">
                      Measurable Outcomes
                    </h4>
                    <ul className="space-y-3">
                      {currentService.outcomes.map((outcome, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {outcome}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Excellence */}
                  <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-2">
                      Proven Excellence
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {currentService.excellence}
                    </p>
                  </div>

                  {/* Demand */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 mb-2">
                      For projects that demand
                    </h4>
                    <p className="text-sm text-primary font-medium leading-relaxed">
                      {currentService.demand}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8 mb-12">
        <div className="flex items-center gap-2">
          {services.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-border'
              }`}
            />
          ))}
        </div>
      </div>

      {/* SEXY CALL-TO-ACTION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-16 relative"
      >
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl" />
        
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-12 lg:p-16 shadow-2xl border border-white/60 text-center">
          {/* Animated icon */}
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Architect Your Success?
          </h3>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into market reality with strategic experience design that connects business goals with human needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <motion.a
              href="mailto:silvana@example.com?subject=Let's Architect Something Amazing&body=Hi Silvana, I'd love to discuss how we can work together to create exceptional experiences."
              className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-r from-primary to-primary-hover text-white font-bold rounded-2xl text-lg shadow-lg hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(255, 102, 99, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Create Magic Together
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </motion.a>
            
            {/* Secondary CTA */}
            <motion.a
              href="/silvana-restrepo-cv.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-2xl hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Portfolio
            </motion.a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/60 font-medium">
              <span>GLOBANT</span>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>JOHNSON & JOHNSON</span>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>DANONE</span>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span>KAYANEE</span>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 70}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}