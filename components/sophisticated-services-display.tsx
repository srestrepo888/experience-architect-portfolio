"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    demand: "Speed to market without sacrificing strategic depth."
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
    demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance."
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
    demand: "Operations that think, adapt, and evolve. Intelligence embedded in every process."
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
    demand: "Transformation that compounds. Every change strengthening the foundation for the next leap."
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
    demand: "Innovation with precision. Strategies that move from boardroom to market with velocity."
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
    demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy."
  }
]

export default function SophisticatedServicesDisplay() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Minimal Navigation Dots */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`transition-all duration-500 ${
                index === selectedIndex
                  ? 'w-12 h-1 bg-primary rounded-full'
                  : 'w-1 h-1 bg-border rounded-full hover:bg-primary/50'
              }`}
              aria-label={`Service ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Clean Service Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Service Number - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <span className="text-8xl font-thin text-primary/10">
              {services[selectedIndex].number}
            </span>
          </motion.div>

          {/* Title & Subtitle - Clean Typography */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl lg:text-5xl font-light text-foreground mb-4">
              {services[selectedIndex].title}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
              {services[selectedIndex].subtitle}
            </p>
          </motion.div>

          {/* Content Grid - Progressive Reveal */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Capability - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-primary mb-3">
                  Strategic Capability
                </p>
                <p className="text-base leading-relaxed text-foreground/80">
                  {services[selectedIndex].capability}
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-primary mb-3">
                  Proven Excellence
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  {services[selectedIndex].excellence}
                </p>
              </div>
            </motion.div>

            {/* Outcomes - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm uppercase tracking-wider text-primary mb-4">
                  Measurable Outcomes
                </p>
                <ul className="space-y-3">
                  {services[selectedIndex].outcomes.map((outcome, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-primary mr-3 mt-1.5">—</span>
                      <span className="text-sm text-foreground/70 leading-relaxed">
                        {outcome}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <p className="text-sm uppercase tracking-wider text-primary mb-2">
                  For projects that demand
                </p>
                <p className="text-sm text-foreground/60 italic">
                  {services[selectedIndex].demand}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Arrows - Subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-between items-center mt-16 max-w-6xl mx-auto"
          >
            <button
              onClick={() => setSelectedIndex((prev) => (prev - 1 + services.length) % services.length)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              ← Previous
            </button>
            
            <div className="text-sm text-muted-foreground">
              {selectedIndex + 1} / {services.length}
            </div>
            
            <button
              onClick={() => setSelectedIndex((prev) => (prev + 1) % services.length)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Next →
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}