"use client"

import { motion } from "framer-motion"
import { PROFESSIONAL_COLOR_SYSTEM } from "@/lib/professional-color-system"

interface GenerativeSystemProps {
  section: 'hero' | 'about' | 'projects' | 'experience' | 'services' | 'contact'
  intensity?: 'minimal' | 'standard' | 'rich'
}

// LANDOR-LEVEL PERFECTION: Clean Generative Background System
export function LandorLevelBackgroundSystem({ 
  section, 
  intensity = 'standard'
}: GenerativeSystemProps) {

  // Section-specific configurations
  const sectionConfigs = {
    hero: {
      primaryGradient: 'linear-gradient(135deg, #FDE9E3 0%, #F8D7C9 100%)',
      accentGradient: 'linear-gradient(45deg, #FF6B6B 0%, #FF4DA6 100%)',
      nodeCount: 8,
      opacity: intensity === 'rich' ? 0.35 : intensity === 'standard' ? 0.25 : 0.15
    },
    about: {
      primaryGradient: 'linear-gradient(45deg, #F8D7C9 0%, #EEC4B5 100%)',
      accentGradient: 'linear-gradient(45deg, #F8D7C9 0%, #FF6B6B 100%)',
      nodeCount: 6,
      opacity: intensity === 'rich' ? 0.30 : intensity === 'standard' ? 0.20 : 0.10
    },
    projects: {
      primaryGradient: 'linear-gradient(135deg, #FDE9E3 0%, #F8D7C9 100%)',
      accentGradient: 'linear-gradient(45deg, #FEC260 0%, #E28A4A 100%)',
      nodeCount: 4,
      opacity: intensity === 'rich' ? 0.20 : intensity === 'standard' ? 0.15 : 0.08
    },
    experience: {
      primaryGradient: 'linear-gradient(45deg, #F8D7C9 0%, #EEC4B5 100%)',
      accentGradient: 'linear-gradient(45deg, #FF4DA6 0%, #E28A4A 100%)',
      nodeCount: 7,
      opacity: intensity === 'rich' ? 0.30 : intensity === 'standard' ? 0.22 : 0.12
    },
    services: {
      primaryGradient: 'linear-gradient(135deg, #FDE9E3 0%, #F8D7C9 100%)',
      accentGradient: 'linear-gradient(45deg, #FEC260 0%, #FF6B6B 50%, #FF4DA6 100%)',
      nodeCount: 6,
      opacity: intensity === 'rich' ? 0.28 : intensity === 'standard' ? 0.20 : 0.12
    },
    contact: {
      primaryGradient: 'linear-gradient(45deg, #F8D7C9 0%, #FF6B6B 100%)',
      accentGradient: 'linear-gradient(45deg, #FEC260 0%, #FF6B6B 50%, #FF4DA6 100%)',
      nodeCount: 10,
      opacity: intensity === 'rich' ? 0.40 : intensity === 'standard' ? 0.30 : 0.18
    }
  }

  const config = sectionConfigs[section]

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* FOUNDATION: Professional Core Base */}
      <motion.div 
        className="absolute inset-0"
        style={{ background: config.primaryGradient }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />
      
      {/* LAYER 1: Organic Flow System */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: config.opacity }}
      >
        <svg className="w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={`flowGradient-${section}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.15" />
              <stop offset="35%" stopColor="#FEC260" stopOpacity="0.12" />
              <stop offset="65%" stopColor="#FF4DA6" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#E28A4A" stopOpacity="0.08" />
            </linearGradient>
            
            <linearGradient id={`strokeGradient-${section}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FF4DA6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FEC260" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* PRIMARY FLOW WAVE */}
          <motion.path
            d="M0,400 Q200,320 400,400 T800,400 Q1000,360 1200,400 T1400,400 L1400,900 L0,900 Z"
            fill={`url(#flowGradient-${section})`}
            animate={{
              d: [
                "M0,400 Q200,320 400,400 T800,400 Q1000,360 1200,400 T1400,400 L1400,900 L0,900 Z",
                "M0,420 Q200,340 400,420 T800,420 Q1000,380 1200,420 T1400,420 L1400,900 L0,900 Z",
                "M0,400 Q200,320 400,400 T800,400 Q1000,360 1200,400 T1400,400 L1400,900 L0,900 Z"
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* SECONDARY FLOW WAVE */}
          <motion.path
            d="M0,500 Q300,450 600,500 T1200,500 Q1300,480 1400,500 L1400,900 L0,900 Z"
            fill={`url(#flowGradient-${section})`}
            opacity="0.6"
            animate={{
              d: [
                "M0,500 Q300,450 600,500 T1200,500 Q1300,480 1400,500 L1400,900 L0,900 Z",
                "M0,480 Q300,430 600,480 T1200,480 Q1300,460 1400,480 L1400,900 L0,900 Z",
                "M0,500 Q300,450 600,500 T1200,500 Q1300,480 1400,500 L1400,900 L0,900 Z"
              ]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />

          {/* HERO HIGHLIGHTS: Coral Glow + Electric Pink Strokes */}
          <motion.path
            d="M100,300 Q350,200 700,300 T1300,300"
            fill="none"
            stroke={`url(#strokeGradient-${section})`}
            strokeWidth="3"
            opacity={section === 'hero' ? 0.4 : 0.2}
            animate={{
              strokeWidth: [3, 5, 3],
              opacity: section === 'hero' ? [0.4, 0.6, 0.4] : [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* LAYER 2: Systemic Architecture - Geometric Precision Mesh */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: config.opacity * 0.5 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1400 900">
          <defs>
            <pattern 
              id={`architecturalMesh-${section}`} 
              x="0" 
              y="0" 
              width="80" 
              height="80" 
              patternUnits="userSpaceOnUse"
            >
              <circle cx="40" cy="40" r="2" fill="#E28A4A" opacity="0.3" />
              <line x1="40" y1="40" x2="120" y2="40" stroke="#BFAEA2" strokeWidth="1" opacity="0.2" />
              <line x1="40" y1="40" x2="40" y2="120" stroke="#BFAEA2" strokeWidth="1" opacity="0.2" />
              <line x1="40" y1="40" x2="120" y2="120" stroke="#FEC260" strokeWidth="0.8" opacity="0.15" />
            </pattern>
          </defs>
          
          <motion.rect 
            width="100%" 
            height="100%" 
            fill={`url(#architecturalMesh-${section})`}
            animate={{ opacity: [0.1, 0.15, 0.1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* LAYER 3: Floating Experience Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: config.nodeCount }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              background: 'linear-gradient(45deg, #FF6B6B, #FF4DA6)'
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </div>

      {/* LAYER 4: Structural Lines */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: 0.12 }}
      >
        <svg className="w-full h-full" viewBox="0 0 1400 900">
          <defs>
            <linearGradient id={`structuralGradient-${section}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EEC4B5" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#E28A4A" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EEC4B5" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {Array.from({ length: 3 }, (_, i) => (
            <motion.path
              key={i}
              d={`M0,${200 + i * 150} Q${300 + i * 100},${150 + i * 150} ${700 + i * 200},${200 + i * 150} T1400,${200 + i * 150}`}
              fill="none"
              stroke={`url(#structuralGradient-${section})`}
              strokeWidth="1.5"
              animate={{
                strokeWidth: [1.5, 2.5, 1.5],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* LAYER 5: Atmospheric Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(ellipse at center, #FEC26003 0%, transparent 60%)`
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  )
}

// Section-Specific Background Components - Simplified
export function LandorHeroBackground() {
  return <LandorLevelBackgroundSystem section="hero" intensity="rich" />
}

export function LandorAboutBackground() {
  return <LandorLevelBackgroundSystem section="about" intensity="standard" />
}

export function LandorProjectsBackground() {
  return <LandorLevelBackgroundSystem section="projects" intensity="minimal" />
}

export function LandorExperienceBackground() {
  return <LandorLevelBackgroundSystem section="experience" intensity="standard" />
}

export function LandorServicesBackground() {
  return <LandorLevelBackgroundSystem section="services" intensity="standard" />
}

export function LandorContactBackground() {
  return <LandorLevelBackgroundSystem section="contact" intensity="rich" />
}