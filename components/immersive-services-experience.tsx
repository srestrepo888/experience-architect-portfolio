"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const services = [
  {
    number: "01",
    title: "Accelerated Product Innovation",
    subtitle: "From concept to market dominance in half the time",
    visual: "/luxury-geometric-background.png",
    color: "from-blue-600 to-cyan-500",
    capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation.",
    keyPoints: [
      "3x faster market validation",
      "AI-accelerated testing cycles", 
      "Cross-industry trend synthesis"
    ],
    excellence: "Augoor platform: 31,000+ developers transformed",
    impact: "Speed to market without sacrificing strategic depth"
  },
  {
    number: "02", 
    title: "Experience Orchestration",
    subtitle: "Harmonizing thousands of touchpoints into one resonant brand voice",
    visual: "/silvana-portrait-transparent.png",
    color: "from-emerald-600 to-teal-500",
    capability: "Systems thinking applied to create unified experience architectures where interactions feel seamless.",
    keyPoints: [
      "Cross-channel satisfaction increase",
      "Operational redundancy reduction",
      "Unified governance frameworks"
    ],
    excellence: "Theme Parks: Multiple channels, one unified language",
    impact: "Global reach with local resonance"
  },
  {
    number: "03",
    title: "Intelligent Operations Architecture", 
    subtitle: "Building AI-augmented teams that outperform traditional structures",
    visual: "/luxury-geometric-background.png",
    color: "from-purple-600 to-indigo-500",
    capability: "Design agentic systems where AI and human experts collaborate as unified intelligence.",
    keyPoints: [
      "Real-time competitive intelligence",
      "Automated trend detection",
      "Self-optimizing organizations"
    ],
    excellence: "Globant X: 31,000 team members enhanced",
    impact: "Intelligence embedded in every process"
  },
  {
    number: "04",
    title: "Design Systems",
    subtitle: "Engineering organizational evolution through scalable foundations", 
    visual: "/silvana-portrait-transparent.png",
    color: "from-rose-600 to-pink-500",
    capability: "Build transformation on bedrock systems ensuring teams move in harmony.",
    keyPoints: [
      "2.5x team velocity increase",
      "Unified design consistency",
      "Accelerated innovation cycles"
    ],
    excellence: "Kayanee: Saudi Arabia's first phygital ecosystem",
    impact: "Every change strengthens the foundation"
  },
  {
    number: "05",
    title: "Strategic Innovation Consulting",
    subtitle: "Converting market disruption into systematic advantage",
    visual: "/luxury-geometric-background.png", 
    color: "from-amber-600 to-orange-500",
    capability: "Navigate complexity with frameworks that transform uncertainty into opportunity.",
    keyPoints: [
      "Tangible industry ROI",
      "Stakeholder alignment",
      "Strategic clarity acceleration"
    ],
    excellence: "Fourth Industrial Revolution governance frameworks",
    impact: "Innovation with precision and velocity"
  },
  {
    number: "06",
    title: "Customer Intelligence Platforms",
    subtitle: "Turning customer behavior into competitive advantage",
    visual: "/silvana-portrait-transparent.png",
    color: "from-violet-600 to-purple-500",
    capability: "Architecting systems that anticipate behavior, creating self-improving experiences.",
    keyPoints: [
      "26% sales growth achieved",
      "Behavior-driven design",
      "Self-evolving platforms"
    ],
    excellence: "32 retail destinations transformed",
    impact: "Intelligence that scales intimacy"
  }
]

export default function ImmersiveServicesExperience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % services.length)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovered])

  const currentService = services[activeIndex]

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Immersive Background Layer */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={currentService.visual}
              alt="Service background"
              fill
              className="object-cover"
              quality={90}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-20`} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-8 py-20">
        
        {/* Elegant Service Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <div className="grid grid-cols-6 gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className={`relative group transition-all duration-500 ${
                  index === activeIndex 
                    ? 'scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">
                    {service.number}
                  </span>
                </div>
                
                {/* Active Indicator */}
                {index === activeIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -inset-2 rounded-3xl border-2 border-white/50"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Immersive Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            
            {/* Visual Content Side */}
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotateY: [0, 2, 0] 
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={currentService.visual}
                  alt={currentService.title}
                  fill
                  className="object-cover"
                  quality={95}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-40`} />
                
                {/* Floating Number */}
                <div className="absolute top-8 left-8">
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-8xl font-black text-white/20"
                  >
                    {currentService.number}
                  </motion.div>
                </div>
                
                {/* Excellence Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl"
                >
                  <p className="text-sm font-medium text-foreground/80 leading-tight">
                    {currentService.excellence}
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-5xl lg:text-6xl font-serif font-light leading-tight text-foreground mb-4">
                  {currentService.title}
                </h3>
                <p className="text-xl text-muted-foreground italic leading-relaxed">
                  {currentService.subtitle}
                </p>
              </motion.div>

              {/* Capability */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h4 className="text-sm uppercase tracking-wider font-medium text-primary">
                  Strategic Capability
                </h4>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {currentService.capability}
                </p>
              </motion.div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h4 className="text-sm uppercase tracking-wider font-medium text-primary">
                  Measurable Outcomes
                </h4>
                <div className="grid gap-3">
                  {currentService.keyPoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentService.color} group-hover:scale-125 transition-transform`} />
                      <span className="text-foreground/70 group-hover:text-foreground transition-colors">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Impact Statement */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className={`p-6 rounded-2xl bg-gradient-to-r ${currentService.color} bg-opacity-10 border border-white/20`}
              >
                <p className="text-base font-medium text-foreground/90 italic">
                  {currentService.impact}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2">
            {services.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex 
                    ? 'w-12 bg-primary' 
                    : 'w-2 bg-border hover:bg-primary/50 cursor-pointer'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}