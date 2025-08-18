"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState } from "react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: string
  index: number
}

export default function SophisticatedServiceCard({ 
  title, 
  description, 
  features, 
  icon, 
  index 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Advanced mouse tracking for magnetic effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = (e.clientX - rect.left - width / 2) / width
    const y = (e.clientY - rect.top - height / 2) / height
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut"
      }}
    >
      <motion.div
        className="relative p-8 rounded-3xl backdrop-blur-xl border border-border/20 cursor-pointer overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          handleMouseLeave()
        }}
        whileHover={{ scale: 1.02, y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Sophisticated Shadow System */}
        <motion.div
          className="absolute -inset-2 rounded-3xl -z-10"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)",
            filter: "blur(15px)",
          }}
          animate={{
            opacity: isHovered ? 0.4 : 0.1,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          animate={isHovered ? {
            backgroundPosition: ["0px 0px", "32px 32px"],
          } : {}}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Icon with Sophisticated Animation */}
        <motion.div
          className="relative mb-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl"
            animate={isHovered ? {
              rotateY: [0, 180, 360],
              scale: [1, 1.1, 1],
            } : {}}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
            style={{ transform: "translateZ(20px)" }}
          >
            {icon}
          </motion.div>
          
          {/* Floating particles around icon */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/20"
              style={{
                top: `${25 + Math.cos(i * 90 * (Math.PI / 180)) * 30}px`,
                left: `${25 + Math.sin(i * 90 * (Math.PI / 180)) * 30}px`,
              }}
              animate={isHovered ? {
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              } : {}}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Content with Stagger Animation */}
        <motion.h3
          className="font-serif text-xl font-light text-foreground mb-4"
          style={{ transform: "translateZ(10px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1, ease: "easeOut" }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-muted-foreground text-sm leading-relaxed mb-6"
          style={{ transform: "translateZ(5px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Features List with Reveal Animation */}
        <motion.div
          className="space-y-2"
          style={{ transform: "translateZ(5px)" }}
        >
          {features.map((feature, featureIndex) => (
            <motion.div
              key={feature}
              className="flex items-center text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 0.4 + index * 0.1 + featureIndex * 0.05,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3"
                animate={isHovered ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                } : {}}
                transition={{
                  duration: 1.5,
                  delay: featureIndex * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Magnetic Interaction Indicator */}
        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center"
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            borderColor: ["rgba(0,0,0,0.2)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.2)"],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary/60"
            animate={isHovered ? {
              rotate: [0, 180, 360],
            } : {}}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </motion.svg>
        </motion.div>

        {/* Elegant Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}