"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: string
  index: number
}

const services = [
  {
    icon: "◆",
    title: "Transformation Leadership",
    description:
      "I guide organizations by tuning into their cultural frequencies. Change happens when strategy harmonizes with the collective heartbeat of teams and communities.",
    features: [
      "Cultural Intelligence Assessment",
      "Change Orchestration Strategy", 
      "Team Resonance Alignment",
      "Collective Transformation Roadmaps"
    ],
  },
  {
    icon: "⚡",
    title: "Scale Experience Systems",
    description:
      "I cultivate spaces with distinct energetic signatures—environments that spark breakthrough thinking. The right atmosphere transforms potential into reality, whether for megaprojects or intimate startups.",
    features: [
      "Phygital Ecosystem Design",
      "Experience Architecture",
      "Scalable System Frameworks",
      "Atmospheric Environment Creation"
    ],
  },
  {
    icon: "◎",
    title: "Strategic Design",
    description:
      "My approach to Strategic Design architectures converts ecosystems complexity into structured implementation roadmaps with measurable ROI.",
    features: [
      "Ecosystem Complexity Mapping",
      "Implementation Roadmaps",
      "ROI-Driven Design Strategy",
      "Business Architecture Planning"
    ],
  },
  {
    icon: "●",
    title: "Experience Orchestration",
    description:
      "I compose service symphonies where every interaction contributes to the emotional arc. Thousands of moments, one cohesive feeling that stays with people long after.",
    features: [
      "Service Journey Mapping",
      "Emotional Arc Design",
      "Touchpoint Orchestration",
      "Experience Continuity Strategy"
    ],
  },
  {
    icon: "◊",
    title: "Product Strategy Evolution",
    description:
      "I infuse products with soul—designing not just what they do, but how they make people feel. Each feature carries intention, creating atmospheres where users naturally thrive.",
    features: [
      "Soul-Centered Product Design",
      "Intentional Feature Architecture",
      "User Atmosphere Creation",
      "Product Evolution Strategy"
    ],
  },
  {
    icon: "▲",
    title: "Intelligence Amplification Design",
    description:
      "I choreograph the dance between human intuition and machine precision. Creating spaces where both energies complement rather than compete, amplifying our collective wisdom.",
    features: [
      "Human-AI Collaboration Design",
      "Intuition-Precision Balance",
      "Collective Wisdom Platforms",
      "Intelligence Amplification Systems"
    ],
  },
]

function UltraLuxuryServiceCard({ 
  title, 
  description, 
  features, 
  icon, 
  index 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)
  
  // Ultra-luxurious motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 })
  const scale = useSpring(isHovered ? 1.05 : 1, { stiffness: 300, damping: 30 })
  const y = useSpring(isHovered ? -20 : 0, { stiffness: 300, damping: 30 })

  // Spectacular particle system
  const particles = Array.from({ length: 12 }, (_, i) => i)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="group relative perspective-1000"
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        transition: { duration: 1.2, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsInView(true)}
    >
      {/* Ultra-luxurious floating particles */}
      <AnimatePresence>
        {isInView && particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-gradient-to-r from-[#F6E4D6] to-[#E8CCB1] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: particle * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Ultra-luxurious service card with 3D effects */}
                    <motion.div
                className="relative p-8 rounded-3xl bg-gradient-to-br from-[#F6E4D6] via-[#F0D8C4] to-[#E8CCB1] border-2 border-[#E8CCB1]/60 cursor-pointer overflow-hidden shadow-2xl hover:shadow-[0_50px_100px_-20px_rgba(246,228,214,0.3)] focus:shadow-[0_50px_100px_-20px_rgba(246,228,214,0.4)] transition-all duration-700"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => { setIsHovered(false); handleMouseLeave() }}
                onMouseMove={handleMouseMove}
                style={{
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                  scale,
                  y,
                }}
                whileHover={{
                  boxShadow: "0 50px 100px -20px rgba(246,228,214,0.4), 0 0 0 1px rgba(246,228,214,0.1)"
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                tabIndex={0}
                role="button"
                aria-label={`Service: ${title} - ${description}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    // Add click functionality here if needed
                  }
                }}
              >
        {/* Ultra-luxurious animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#F6E4D6]/20 via-transparent to-[#E8CCB1]/20"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(246,228,214,0.2) 0%, transparent 50%, rgba(232,204,177,0.2) 100%)",
              "linear-gradient(135deg, rgba(232,204,177,0.2) 0%, transparent 50%, rgba(246,228,214,0.2) 100%)",
              "linear-gradient(135deg, rgba(246,228,214,0.2) 0%, transparent 50%, rgba(232,204,177,0.2) 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Ultra-luxurious texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

        {/* Ultra-luxurious icon with spectacular effects */}
        <motion.div
          className="relative mb-8 text-center"
          style={{ transform: "translateZ(50px)" }}
        >
          <motion.div
            className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-[#4A2A0A] via-[#6B3F11] to-[#281503] flex items-center justify-center text-3xl text-[#F6E4D6] mx-auto shadow-2xl"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              rotateY: [0, 180, 360],
            } : {}}
            transition={{
              duration: 1.2,
              ease: "easeInOut"
            }}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(107,114,128,0.5), 0 0 0 1px rgba(246,228,214,0.2)"
            }}
          >
            {/* Ultra-luxurious icon glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#F6E4D6]/20 to-transparent"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {icon}
          </motion.div>
          
          {/* Ultra-luxurious floating elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-[#F6E4D6] to-[#E8CCB1] shadow-lg"
              style={{
                top: `${20 + Math.cos(i * 60 * (Math.PI / 180)) * 40}px`,
                left: `${20 + Math.sin(i * 60 * (Math.PI / 180)) * 40}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + i * 0.2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Ultra-luxurious content with spectacular animations */}
        <motion.div style={{ transform: "translateZ(30px)" }}>
          <motion.h3
            className="font-serif text-2xl font-light text-[#281503] mb-6 text-center leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-[#4A2A0A] leading-relaxed text-base font-normal mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {description}
          </motion.p>

          {/* Ultra-luxurious features list */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
          >
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                className="flex items-center text-sm text-[#281503] font-medium"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.1 + featureIndex * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-[#4A2A0A] to-[#6B3F11] mr-4 shadow-sm"
                  animate={isHovered ? {
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    delay: featureIndex * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Ultra-luxurious action icon */}
        <motion.div
          className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-[#E8CCB1] flex items-center justify-center bg-gradient-to-br from-[#F6E4D6] to-[#F0D8C4] shadow-xl"
          style={{ transform: "translateZ(40px)" }}
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
          } : {}}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          whileHover={{
            boxShadow: "0 20px 40px -12px rgba(232,204,177,0.4), 0 0 0 1px rgba(246,228,214,0.2)"
          }}
        >
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#281503]"
            animate={isHovered ? {
              x: [0, 3, 0],
              y: [0, -3, 0],
            } : {}}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </motion.svg>
        </motion.div>

        {/* Ultra-luxurious border glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent"
          animate={isHovered ? {
            borderColor: ["rgba(246,228,214,0.3)", "rgba(246,228,214,0.8)", "rgba(246,228,214,0.3)"],
            boxShadow: [
              "0 0 0 0 rgba(246,228,214,0)",
              "0 0 0 4px rgba(246,228,214,0.1)",
              "0 0 0 0 rgba(246,228,214,0)"
            ]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function UltraLuxuryServicesSection() {
  const [isInView, setIsInView] = useState(false)

  return (
    <div className="w-full">
      {/* Ultra-luxurious section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setIsInView(true)}
      >
        <motion.div
          className="inline-block mb-6"
          animate={isInView ? {
            scale: [1, 1.05, 1],
            rotateY: [0, 5, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-6 text-[#F6E4D6] leading-tight">
            Services
          </h2>
        </motion.div>
        
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#F6E4D6]/20 to-[#E8CCB1]/20 border border-[#F6E4D6]/30 mb-6"
          animate={isInView ? {
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="text-[#F0D8C4] text-lg font-medium">04</span>
        </motion.div>
        
        <motion.p
          className="text-[#F6E4D6]/90 text-xl max-w-4xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Strategic design leadership that transforms complexity into clarity, 
          creating experiences that resonate with the human soul.
        </motion.p>
      </motion.div>

      {/* Ultra-luxurious services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <UltraLuxuryServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            features={service.features}
            icon={service.icon}
            index={index}
          />
        ))}
      </div>

      {/* Ultra-luxurious call to action */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          className="text-[#F6E4D6]/90 text-xl mb-8 font-light"
          animate={isInView ? {
            opacity: [0.7, 1, 0.7],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Ready to transform your digital experience?
        </motion.p>
        
                        <motion.button
                  className="px-10 py-5 bg-gradient-to-r from-[#F6E4D6] to-[#F0D8C4] text-[#281503] font-medium rounded-2xl hover:from-[#F0D8C4] hover:to-[#E8CCB1] focus:from-[#F0D8C4] focus:to-[#E8CCB1] transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#F6E4D6]/50 focus:ring-offset-4 focus:ring-offset-[#281503] shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(246,228,214,0.4)] transform hover:-translate-y-2"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(246,228,214,0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start a new project with Silvana Restrepo"
                >
                  Start a Project
                </motion.button>
      </motion.div>
    </div>
  )
}
