"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    number: "01",
    title: "Accelerated Product Innovation",
    subtitle: "From concept to market dominance in half the time",
    capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
    excellence: "Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems",
    demand: "Speed to market without sacrificing strategic depth."
  },
  {
    number: "02",
    title: "Experience Orchestration",
    subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
    capability: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
    excellence: "Theme Park- Multiple Channels-One unified experience language",
    demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance."
  },
  {
    number: "03",
    title: "Intelligent Operations Architecture",
    subtitle: "Building AI-augmented teams that outperform traditional structures",
    capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
    excellence: "Globant X initiatives—AI-human collaboration frameworks deployed across 31,000 team members",
    demand: "Operations that think, adapt, and evolve. Intelligence is embedded in every process."
  },
  {
    number: "04",
    title: "Design Systems",
    subtitle: "Engineering organizational evolution through scalable design foundations",
    capability: "Build transformation on bedrock design systems that ensure every team moves in harmony. I collaborate to create modular, scalable frameworks where innovation accelerates rather than fragments—turning organizational complexity into competitive advantage.",
    excellence: "Kayanee wellness platform—Saudi Arabia's first integrated phygital ecosystem.",
    demand: "Transformation that compounds. Every change strengthening the foundation for the next leap."
  },
  {
    number: "05",
    title: "Strategic Innovation Consulting",
    subtitle: "Converting market disruption into systematic advantage",
    capability: "Navigate complexity with frameworks that transform uncertainty into opportunity. We blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
    excellence: "Centre for Fourth Industrial Revolution—governance frameworks adopted across global affiliate network",
    demand: "Innovation with precision. Strategies that move from boardroom to market with velocity."
  },
  {
    number: "06",
    title: "Customer Intelligence Platforms",
    subtitle: "Turning customer behavior into a competitive advantage",
    capability: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
    excellence: "32 retail destinations achieving 26% sales growth through behavior-driven experience design",
    demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy."
  }
]

export default function InteractiveServicesSection() {
  const [selectedService, setSelectedService] = useState(0) // Default to first service

  return (
    <div className="w-full relative">
      
      {/* Beautiful Progress Indicator - Architectural Compass */}
      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32">
          {/* Outer Ring - Architectural Elements */}
          <div className="absolute inset-0 border-2 border-primary/10 rounded-full">
            {/* Compass Points */}
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-primary/30 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-primary/30 rounded-full transform -translate-x-1/2"></div>
            <div className="absolute -left-1 top-1/2 w-2 h-2 bg-primary/30 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute -right-1 top-1/2 w-2 h-2 bg-primary/30 rounded-full transform -translate-y-1/2"></div>
          </div>
          
          {/* Progress Ring */}
          <svg className="absolute inset-2 transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r="52"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary/20"
            />
            <circle
              cx="56"
              cy="56"
              r="52"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - (selectedService + 1) / 6)}`}
              className="text-primary transition-all duration-500 ease-out"
            />
          </svg>
          
          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-primary">{selectedService + 1}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">of 6</span>
          </div>
          
          {/* Floating Dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full transition-colors duration-300 ${
                  i === selectedService ? 'bg-primary' : 'bg-primary/40'
                }`}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${angle}deg) translateY(-60px) translateX(-0.5px)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Horizontal Service Cards - ALL 6 CLICKABLE */}
      <div className="overflow-x-auto pb-6 mb-12">
        <div className="flex gap-4 px-4" style={{ width: 'calc(6 * 300px + 5 * 16px)' }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedService(index)}
              className={`flex-shrink-0 w-80 h-52 rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                selectedService === index
                  ? 'bg-primary/10 border-primary/40 shadow-lg'
                  : 'bg-muted/20 border-border hover:border-primary/30 hover:bg-primary/5'
              }`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="text-left">
                  <span className={`text-6xl font-bold transition-colors duration-300 ${
                    selectedService === index ? 'text-primary/60' : 'text-primary/30'
                  }`}>
                    {service.number}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                    selectedService === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Interactive Service Details - Smooth Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-primary/10">
                <span className="text-white font-bold text-lg">{services[selectedService].number}</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground mb-2">
                  {services[selectedService].title}
                </h2>
                <p className="text-lg text-muted-foreground italic font-light">
                  {services[selectedService].subtitle}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="grid md:grid-cols-[1.2fr_1fr] gap-12"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Strategic Capability
                </h3>
                <p className="text-base leading-relaxed text-foreground">
                  {services[selectedService].capability}
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Proven Excellence
                </h3>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10">
                  <p className="text-base text-foreground font-medium">
                    {services[selectedService].excellence}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  For Projects That Demand
                </h3>
                <blockquote className="border-l-4 border-primary pl-4">
                  <p className="text-base text-foreground italic font-light">
                    {services[selectedService].demand}
                  </p>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}