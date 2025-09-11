"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

// EXACT COPIES FROM CLIENT FILE - DO NOT MODIFY
const servicesData = [
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
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
    accentColor: "rgb(16, 185, 129)"
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
    gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20",
    accentColor: "rgb(139, 92, 246)"
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
    demand: "Operations that think, adapt, and evolve. Intelligence is embedded in every process.",
    gradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/20",
    accentColor: "rgb(59, 130, 246)"
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
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/20",
    accentColor: "rgb(245, 158, 11)"
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
    gradient: "from-rose-500/20 via-pink-500/10 to-fuchsia-500/20",
    accentColor: "rgb(244, 63, 94)"
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
    gradient: "from-teal-500/20 via-cyan-500/10 to-blue-500/20",
    accentColor: "rgb(20, 184, 166)"
  }
]

export default function LivingArchitectureServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring animations for mouse tracking
  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Multi-layer parallax transforms
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.15, 0.15, 0])
  
  // Handle mouse movement for 3D depth effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x * 20)
        mouseY.set(y * 20)
      }
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])
  
  const currentService = servicesData[activeIndex]
  
  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      
      {/* LAYER 1: Architectural Blueprint Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: layer1Y, opacity: blueprintOpacity }}
      >
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
        
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 15}%`}
              y1="0%"
              x2={`${30 + i * 15}%`}
              y2="100%"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* LAYER 2: Dynamic Gradient Atmosphere */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: layer2Y }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${currentService.gradient} transition-all duration-1000`} />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="absolute inset-0" 
              style={{
                background: `radial-gradient(circle at 30% 50%, ${currentService.accentColor}20 0%, transparent 50%)`
              }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      {/* LAYER 3: Living Data Constellation */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: layer3Y }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
      
      {/* MAIN CONTENT LAYER */}
      <div className="relative z-10 py-20 md:py-24">
        
        {/* Gestural Navigation - Crystalline Volumes */}
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            style={{
              rotateX: springY,
              rotateY: springX,
              transformPerspective: 1200,
            }}
          >
            {servicesData.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
                whileHover={{ z: 50 }}
                animate={{
                  scale: activeIndex === index ? 1.1 : hoveredIndex === index ? 1.05 : 1,
                  z: activeIndex === index ? 30 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glass Morphism Volume */}
                <motion.div
                  className={`
                    relative h-24 rounded-2xl overflow-hidden
                    backdrop-blur-xl bg-white/10 border border-white/20
                    ${activeIndex === index ? 'shadow-2xl' : 'shadow-lg'}
                  `}
                  style={{
                    background: activeIndex === index 
                      ? `linear-gradient(135deg, ${service.accentColor}30, transparent)`
                      : 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {/* Service Number */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                    <span className="text-3xl font-light text-white/90 mb-1">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-light text-white/60 text-center leading-tight">
                      {service.title.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                  
                  {/* Active Pulse */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        boxShadow: `0 0 40px ${service.accentColor}50`,
                      }}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                  
                  {/* Hover Glow */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        background: `radial-gradient(circle at center, ${service.accentColor}20, transparent)`,
                      }}
                    />
                  )}
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        </div>
        
        {/* Immersive Service Display - Spatial Architecture */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto px-8"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* LEFT: Service Intelligence */}
              <motion.div 
                className="space-y-8"
                style={{
                  transform: `translateZ(${hoveredIndex === activeIndex ? '20px' : '0px'})`,
                }}
              >
                {/* Service Title */}
                <div>
                  <motion.h3 
                    className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentService.title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-muted-foreground italic"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentService.subtitle}
                  </motion.p>
                </div>
                
                {/* Strategic Capability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Strategic Capability
                  </h4>
                  <p className="text-base leading-relaxed text-foreground">
                    {currentService.capability}
                  </p>
                </motion.div>
                
                {/* Proven Excellence */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-primary/5 to-transparent rounded-2xl p-6"
                >
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Proven Excellence
                  </h4>
                  <p className="text-base text-foreground font-medium">
                    {currentService.excellence}
                  </p>
                </motion.div>
                
                {/* For Projects That Demand */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    For Projects That Demand
                  </h4>
                  <p className="text-base text-foreground italic">
                    {currentService.demand}
                  </p>
                </motion.div>
              </motion.div>
              
              {/* RIGHT: Measurable Outcomes Visualization */}
              <motion.div
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${springX.get() * 0.5}deg) rotateX(${springY.get() * -0.5}deg)`,
                }}
              >
                {/* Glass Container */}
                <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                    Measurable Outcomes
                  </h4>
                  
                  <div className="space-y-6">
                    {currentService.outcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="relative"
                      >
                        {/* Outcome Indicator */}
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="w-2 h-2 rounded-full mt-2"
                            style={{ backgroundColor: currentService.accentColor }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          />
                          <p className="text-base text-foreground/90 leading-relaxed">
                            {outcome}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Floating Accent Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${currentService.accentColor}20, transparent)`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />
                </div>
                
                {/* Service Number Display */}
                <motion.div
                  className="absolute -bottom-8 -left-8 text-[120px] font-light leading-none opacity-10"
                  style={{ color: currentService.accentColor }}
                >
                  {currentService.number}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}