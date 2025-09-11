"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// EXACT COPIES FROM CLIENT FILE - NO MODIFICATIONS
const servicesData = [
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

export default function ModernServices2024() {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentService = servicesData[activeIndex]

  return (
    <div className="relative">
      {/* 2024 Design: Horizontal scrolling cards trend */}
      <div className="overflow-x-auto pb-8 mb-16 scrollbar-hide">
        <div className="flex gap-4 min-w-max px-4">
          {servicesData.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative group ${
                index === activeIndex ? 'ring-2 ring-primary' : ''
              }`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Modern Card Design - 2024 Trend: Bold typography with minimal UI */}
              <div className="w-[300px] h-[200px] bg-gradient-to-br from-background to-muted rounded-3xl p-6 border border-border/50 transition-all duration-300 hover:border-primary/50">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-7xl font-bold text-primary/20">
                      {service.number}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                {/* Active indicator - modern minimalist approach */}
                {index === activeIndex && (
                  <motion.div
                    layoutId="activeService"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-3xl"
                    initial={false}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Service Detail - Clean, Modern Typography Focus */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Title & Subtitle */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {currentService.title}
            </h2>
            <p className="text-xl text-muted-foreground italic">
              {currentService.subtitle}
            </p>
          </div>

          {/* Modern 2-column layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Strategic Capability */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Strategic Capability
              </h3>
              <p className="text-base leading-relaxed text-foreground">
                {currentService.capability}
              </p>
            </div>

            {/* Excellence & Demand */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Proven Excellence
                </h3>
                <p className="text-base text-foreground">
                  {currentService.excellence}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  For Projects That Demand
                </h3>
                <p className="text-base text-foreground italic">
                  {currentService.demand}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Custom scrollbar hide styles (add to globals.css)
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }