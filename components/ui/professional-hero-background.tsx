"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { PROFESSIONAL_COLOR_SYSTEM } from "@/lib/professional-color-system"
import { ANIMATION_PRESETS, HOVER_ANIMATIONS, EASING_FUNCTIONS, PERFORMANCE_SETTINGS } from "@/lib/animation-system"

export function ProfessionalHeroBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Motion values for smooth animations
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const scrollY = useMotionValue(0)
  
  // Spring configurations - optimized for performance
  const smoothSpring = { stiffness: 100, damping: 30, mass: 0.1 }
  const fastSpring = { stiffness: 200, damping: 25, mass: 0.05 }
  
  // Parallax transforms
  const rotateX = useSpring(useTransform(mouseY, [-400, 400], [3, -3]), smoothSpring)
  const rotateY = useSpring(useTransform(mouseX, [-400, 400], [-3, 3]), smoothSpring)
  const scale = useSpring(useTransform(scrollY, [0, 1000], [1, 1.005]), smoothSpring)
  
  // Layer movements for parallax effect
  const layer1X = useSpring(useTransform(mouseX, [-400, 400], [-8, 8]), smoothSpring)
  const layer1Y = useSpring(useTransform(mouseY, [-400, 400], [-8, 8]), smoothSpring)
  const layer2X = useSpring(useTransform(mouseX, [-400, 400], [-15, 15]), fastSpring)
  const layer2Y = useSpring(useTransform(mouseY, [-400, 400], [-15, 15]), fastSpring)
  const layer3X = useSpring(useTransform(mouseX, [-400, 400], [-25, 25]), fastSpring)
  const layer3Y = useSpring(useTransform(mouseY, [-400, 400], [-25, 25]), fastSpring)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const x = event.clientX - centerX
      const y = event.clientY - centerY
      
      setMousePosition({ x, y })
      mouseX.set(x)
      mouseY.set(y)
    }

    const handleScroll = () => {
      scrollY.set(window.scrollY)
    }

    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible')
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter)
      containerRef.current.addEventListener('mouseleave', handleMouseLeave)
    }
    
    setIsVisible(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter)
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [mouseX, mouseY, scrollY])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden cursor-none"
      style={{ perspective: "1200px" }}
    >
      {/* Main Background - Professional Core Base */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #FDE9E3 0%, #F8D7C9 100%)',
          scale 
        }}
                        {...ANIMATION_PRESETS.fadeIn}
                transition={{ duration: 1.5, ease: EASING_FUNCTIONS.standard }}
      />
      
      {/* Layer 1: Organic Flow Lines - Experience Fabric */}
      <motion.div 
        className="absolute inset-0 opacity-25"
        style={{ 
          x: layer1X, 
          y: layer1Y,
          rotateX: rotateX * 0.3,
          rotateY: rotateY * 0.3
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EEC4B5" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#FF6B6B" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#FF4DA6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F8D7C9" stopOpacity="0.3" />
            </linearGradient>
            <filter id="flowGlow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Primary Flow Wave */}
          <motion.path
            d="M0,350 Q150,280 300,350 T600,350 Q750,320 900,350 T1200,350 L1200,800 L0,800 Z"
            fill="url(#flowGradient)"
            filter="url(#flowGlow)"
            animate={isVisible ? {
              d: [
                "M0,350 Q150,280 300,350 T600,350 Q750,320 900,350 T1200,350 L1200,800 L0,800 Z",
                "M0,370 Q150,300 300,370 T600,370 Q750,340 900,370 T1200,370 L1200,800 L0,800 Z",
                "M0,350 Q150,280 300,350 T600,350 Q750,320 900,350 T1200,350 L1200,800 L0,800 Z"
              ]
            } : {}}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Secondary Flow Wave */}
          <motion.path
            d="M0,450 Q200,400 400,450 T800,450 Q1000,420 1200,450 L1200,800 L0,800 Z"
            fill="url(#flowGradient)"
            opacity="0.7"
            animate={isVisible ? {
              d: [
                "M0,450 Q200,400 400,450 T800,450 Q1000,420 1200,450 L1200,800 L0,800 Z",
                "M0,430 Q200,380 400,430 T800,430 Q1000,400 1200,430 L1200,800 L0,800 Z",
                "M0,450 Q200,400 400,450 T800,450 Q1000,420 1200,450 L1200,800 L0,800 Z"
              ]
            } : {}}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </svg>
      </motion.div>

      {/* Layer 2: Systemic Thinking - Geometric Mesh */}
      <motion.div 
        className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-20"
        style={{ 
          x: layer2X, 
          y: layer2Y,
          rotateX: rotateX * 0.2,
          rotateY: rotateY * 0.2
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 600 600">
          <defs>
            <pattern id="systemicMesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#E28A4A" opacity="0.6" />
              <line x1="30" y1="30" x2="90" y2="30" stroke="#FEC260" strokeWidth="0.8" opacity="0.4" />
              <line x1="30" y1="30" x2="30" y2="90" stroke="#FEC260" strokeWidth="0.8" opacity="0.4" />
              <line x1="30" y1="30" x2="90" y2="90" stroke="#FF6B6B" strokeWidth="0.6" opacity="0.3" />
            </pattern>
          </defs>
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#systemicMesh)"
            animate={isVisible ? {
              opacity: [0.2, 0.3, 0.2]
            } : {}}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Layer 3: Floating Experience Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              background: 'linear-gradient(45deg, #FF6B6B, #FF4DA6)'
            }}
            animate={isVisible ? {
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            } : {}}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
            whileHover={{
              scale: 2,
              opacity: 1,
              transition: { duration: 0.3 }
            }}
          />
        ))}
      </div>

      {/* Layer 4: Architectural Precision Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              left: `${25 + i * 20}%`,
              top: `${35 + (i % 2) * 30}%`,
              width: 15 + i * 3,
              height: 15 + i * 3,
              borderColor: 'rgba(254, 194, 96, 0.3)'
            }}
            animate={isVisible ? {
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.4, 0.2],
            } : {}}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            whileHover={{
              scale: 1.5,
              opacity: 0.6,
              borderColor: '#FF4DA6',
              transition: { duration: 0.3 }
            }}
          />
        ))}
      </div>

      {/* Responsive Flow - Ripple Effect on Hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(255, 107, 107, 0.1) 0%, transparent 60%)`
        }}
        animate={isVisible ? {
          opacity: isHovering ? [0.3, 0.5, 0.3] : [0.1, 0.2, 0.1],
          scale: isHovering ? [1, 1.1, 1] : 1
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Node Glow - Connection Activation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(255, 77, 166, 0.05) 0%, transparent 40%)`
        }}
        animate={isVisible ? {
          opacity: isHovering ? [0.2, 0.4, 0.2] : 0
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Texture Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EEC4B5' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        animate={isVisible ? {
          opacity: [0.08, 0.12, 0.08]
        } : {}}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Interactive Cursor Follower */}
      <motion.div
        className="absolute w-4 h-4 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x + 50,
          top: mousePosition.y + 50,
          x: -8,
          y: -8,
          background: 'linear-gradient(45deg, #FF6B6B, #FF4DA6)'
        }}
        animate={{
          scale: isHovering ? [1, 1.5, 1] : 1,
          opacity: isHovering ? [0.3, 0.6, 0.3] : 0.2,
        }}
        transition={{
          duration: 0.3
        }}
      />
    </div>
  )
}
