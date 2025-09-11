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
    color: "from-primary via-primary to-primary-hover",
    capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation.",
    metrics: "31,000+ developers transformed",
    excellence: "Augoor platform: 31,000+ developers transformed",
    impact: "Speed to market without sacrificing strategic depth"
  },
  {
    number: "02", 
    title: "Experience Orchestration",
    subtitle: "Harmonizing thousands of touchpoints into one resonant brand voice",
    visual: "/silvana-portrait-transparent.png",
    color: "from-primary/80 via-primary to-primary-hover/80",
    capability: "Systems thinking applied to create unified experience architectures where interactions feel seamless.",
    metrics: "Multiple channels unified",
    excellence: "Theme Parks: Multiple channels, one unified language",
    impact: "Global reach with local resonance"
  },
  {
    number: "03",
    title: "Intelligent Operations Architecture", 
    subtitle: "Building AI-augmented teams that outperform traditional structures",
    visual: "/luxury-geometric-background.png",
    color: "from-primary/90 via-primary to-primary-hover/90",
    capability: "Design agentic systems where AI and human experts collaborate as unified intelligence.",
    metrics: "31,000 team members enhanced",
    excellence: "Globant X: 31,000 team members enhanced",
    impact: "Intelligence embedded in every process"
  },
  {
    number: "04",
    title: "Design Systems",
    subtitle: "Engineering organizational evolution through scalable foundations", 
    visual: "/silvana-portrait-transparent.png",
    color: "from-primary via-primary-hover to-primary",
    capability: "Build transformation on bedrock systems ensuring teams move in harmony.",
    metrics: "Saudi Arabia's first phygital ecosystem",
    excellence: "Kayanee: Saudi Arabia's first phygital ecosystem",
    impact: "Every change strengthens the foundation"
  },
  {
    number: "05",
    title: "Strategic Innovation Consulting",
    subtitle: "Converting market disruption into systematic advantage",
    visual: "/luxury-geometric-background.png", 
    color: "from-primary/70 via-primary to-primary-hover/70",
    capability: "Navigate complexity with frameworks that transform uncertainty into opportunity.",
    metrics: "Fourth Industrial Revolution governance",
    excellence: "Fourth Industrial Revolution governance frameworks",
    impact: "Innovation with precision and velocity"
  },
  {
    number: "06",
    title: "Customer Intelligence Platforms",
    subtitle: "Turning customer behavior into competitive advantage",
    visual: "/silvana-portrait-transparent.png",
    color: "from-primary/85 via-primary-hover to-primary/85",
    capability: "Architecting systems that anticipate behavior, creating self-improving experiences.",
    metrics: "32 retail destinations transformed",
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

      <div className="relative max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20">
        
        {/* Elegant Service Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-16"
        >
          <div className="grid grid-cols-6 gap-4 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
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
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            
            {/* Sophisticated Visual Content Side */}
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotateY: [0, 2, 0] 
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeOut"
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
                <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-30`} />
                
                {/* Sophisticated Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Geometric Pattern Overlay */}
                  <div className="absolute top-6 left-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-2 border-white/20 rounded-full"
                    >
                      <div className="w-full h-full border border-white/10 rounded-full m-2" />
                    </motion.div>
                  </div>
                  
                  {/* Dynamic Service Number */}
                  <div className="absolute bottom-6 left-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative"
                    >
                      <div className="text-7xl font-black text-white/15 select-none">
                        {currentService.number}
                      </div>
                      <div className="absolute inset-0 text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/40 to-white/10">
                        {currentService.number}
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating Metrics Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="absolute top-6 right-6"
                  >
                    <div className="bg-white/90 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-lg border border-white/20">
                      <p className="text-sm font-semibold text-foreground/80">
                        {currentService.metrics}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Ambient Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${currentService.color} opacity-10 blur-2xl rounded-3xl -z-10`} />
            </div>

            {/* Sophisticated Content Side */}
            <div className="space-y-10">
              
              {/* Title Section with Enhanced Layout */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                {/* Service Number Badge */}
                <div className="absolute -left-4 -top-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentService.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {currentService.number}
                  </div>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight text-foreground mb-6 pl-8">
                  {currentService.title}
                </h3>
                <div className="pl-8 space-y-4">
                  <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
                  <p className="text-xl text-muted-foreground italic leading-relaxed">
                    {currentService.subtitle}
                  </p>
                </div>
              </motion.div>

              {/* Strategic Capability with Enhanced Presentation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative p-6 bg-gradient-to-r from-background/50 to-muted/10 rounded-2xl border-l-4 border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-2">
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm uppercase tracking-wider font-medium text-primary/80">
                      Strategic Capability
                    </h4>
                    <p className="text-lg leading-relaxed text-foreground/85">
                      {currentService.capability}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Impact Statement with Sophisticated Design */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="relative overflow-hidden"
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${currentService.color} bg-opacity-8 border border-primary/10 backdrop-blur-sm`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-sm uppercase tracking-wider font-medium text-primary/70">
                        Transformative Impact
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>
                    <blockquote className="text-lg font-medium text-foreground/90 italic leading-relaxed">
                      "{currentService.impact}"
                    </blockquote>
                  </div>
                  
                  {/* Subtle Background Pattern */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full rounded-full bg-gradient-to-tl ${currentService.color}`} />
                  </div>
                </div>
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