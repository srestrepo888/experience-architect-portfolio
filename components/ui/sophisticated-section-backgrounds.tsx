"use client"

import { motion } from "framer-motion"
import React from "react"
import { COLOR_COMBINATIONS } from "@/lib/color-utils"

// Hero Section Background - Main sophisticated design
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0" style={{ backgroundColor: COLOR_COMBINATIONS.backgrounds.primary }} />
      
      {/* Organic Wavy Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="wavyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="{COLOR_COMBINATIONS.backgrounds.secondary}" stopOpacity="0.3" />
              <stop offset="50%" stopColor="{COLOR_COMBINATIONS.backgrounds.tertiary}" stopOpacity="0.5" />
              <stop offset="100%" stopColor="{COLOR_COMBINATIONS.backgrounds.secondary}" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 Q200,300 400,400 T800,400 Q1000,350 1200,400 L1200,800 L0,800 Z"
            fill="url(#wavyGradient)"
          />
          <path
            d="M0,500 Q300,450 600,500 T1200,500 L1200,800 L0,800 Z"
            fill="url(#wavyGradient)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Geometric Network Pattern */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="geometricPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="{COLOR_COMBINATIONS.backgrounds.secondary}" opacity="0.4" />
              <line x1="20" y1="20" x2="60" y2="20" stroke="{COLOR_COMBINATIONS.backgrounds.secondary}" strokeWidth="0.5" opacity="0.3" />
              <line x1="20" y1="20" x2="20" y2="60" stroke="{COLOR_COMBINATIONS.backgrounds.secondary}" strokeWidth="0.5" opacity="0.3" />
              <line x1="20" y1="20" x2="60" y2="60" stroke="{COLOR_COMBINATIONS.backgrounds.secondary}" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometricPattern)" />
        </svg>
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F0D8C4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
    </div>
  )
}

// About Section Background - Portrait-focused with subtle elements
export function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0" style={{ backgroundColor: COLOR_COMBINATIONS.backgrounds.primary }} />
      
      {/* Subtle Portrait Frame Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="portraitGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="{COLOR_COMBINATIONS.backgrounds.secondary}" stopOpacity="0.2" />
              <stop offset="100%" stopColor="{COLOR_COMBINATIONS.backgrounds.tertiary}" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="url(#portraitGradient)" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="{COLOR_COMBINATIONS.backgrounds.secondary}" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Gentle Flowing Lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <path
            d="M0,200 Q300,150 600,200 T1200,200"
            fill="none"
            stroke="{COLOR_COMBINATIONS.backgrounds.secondary}"
            strokeWidth="1"
            opacity="0.4"
          />
          <path
            d="M0,600 Q400,550 800,600 T1200,600"
            fill="none"
            stroke="{COLOR_COMBINATIONS.backgrounds.tertiary}"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  )
}

// Projects Section Background - Gallery-focused with dynamic elements
export function ProjectsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0" style={{ backgroundColor: COLOR_COMBINATIONS.backgrounds.primary }} />
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="projectGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="100" height="100" fill="none" stroke="{COLOR_COMBINATIONS.backgrounds.secondary}" strokeWidth="0.5" opacity="0.2" />
              <circle cx="50" cy="50" r="2" fill="{COLOR_COMBINATIONS.backgrounds.secondary}" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectGrid)" />
        </svg>
      </div>

      {/* Floating Project Frames */}
      <motion.div
        className="absolute top-1/3 left-1/6 w-32 h-32 opacity-5"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full border border-[{COLOR_COMBINATIONS.backgrounds.secondary}] rounded-lg" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/6 w-24 h-24 opacity-5"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-full h-full border border-[{COLOR_COMBINATIONS.backgrounds.tertiary}] rounded-lg" />
      </motion.div>
    </div>
  )
}

// Experience Section Background - Timeline-focused with connecting elements
export function ExperienceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0" style={{ backgroundColor: COLOR_COMBINATIONS.backgrounds.primary }} />
      
      {/* Timeline Connection Lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="{COLOR_COMBINATIONS.backgrounds.secondary}" stopOpacity="0.3" />
              <stop offset="50%" stopColor="{COLOR_COMBINATIONS.backgrounds.tertiary}" stopOpacity="0.5" />
              <stop offset="100%" stopColor="{COLOR_COMBINATIONS.backgrounds.secondary}" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line x1="200" y1="200" x2="1000" y2="200" stroke="url(#timelineGradient)" strokeWidth="2" />
          <line x1="200" y1="400" x2="1000" y2="400" stroke="url(#timelineGradient)" strokeWidth="2" />
          <line x1="200" y1="600" x2="1000" y2="600" stroke="url(#timelineGradient)" strokeWidth="2" />
          
          {/* Timeline Nodes */}
          <circle cx="200" cy="200" r="4" fill="{COLOR_COMBINATIONS.backgrounds.secondary}" opacity="0.6" />
          <circle cx="600" cy="400" r="4" fill="{COLOR_COMBINATIONS.backgrounds.tertiary}" opacity="0.6" />
          <circle cx="1000" cy="600" r="4" fill="{COLOR_COMBINATIONS.backgrounds.secondary}" opacity="0.6" />
        </svg>
      </div>

      {/* Subtle Achievement Badges */}
      <div className="absolute top-1/4 left-1/3 w-16 h-16 opacity-8">
        <div className="w-full h-full border-2 border-[{COLOR_COMBINATIONS.backgrounds.secondary}] rounded-full" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 w-12 h-12 opacity-8">
        <div className="w-full h-full border-2 border-[{COLOR_COMBINATIONS.backgrounds.tertiary}] rounded-full" />
      </div>
    </div>
  )
}

// Services Section Background - Service-focused with elegant patterns
export function ServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0" style={{ backgroundColor: COLOR_COMBINATIONS.backgrounds.primary }} />
      
      {/* Service Card Shadows */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <filter id="serviceShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          <rect x="200" y="200" width="200" height="300" rx="20" fill="{COLOR_COMBINATIONS.backgrounds.secondary}" opacity="0.1" filter="url(#serviceShadow)" />
          <rect x="500" y="150" width="200" height="300" rx="20" fill="{COLOR_COMBINATIONS.backgrounds.tertiary}" opacity="0.1" filter="url(#serviceShadow)" />
          <rect x="800" y="250" width="200" height="300" rx="20" fill="{COLOR_COMBINATIONS.backgrounds.secondary}" opacity="0.1" filter="url(#serviceShadow)" />
        </svg>
      </div>

      {/* Elegant Service Icons */}
      <div className="absolute top-1/3 left-1/4 w-8 h-8 opacity-10">
        <div className="w-full h-full border border-[{COLOR_COMBINATIONS.backgrounds.secondary}] rounded-lg rotate-45" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 opacity-10">
        <div className="w-full h-full border border-[{COLOR_COMBINATIONS.backgrounds.tertiary}] rounded-full" />
      </div>
      <div className="absolute top-1/2 right-1/3 w-4 h-4 opacity-10">
        <div className="w-full h-full bg-[{COLOR_COMBINATIONS.backgrounds.secondary}] rounded-full" />
      </div>
    </div>
  )
}

// Contact Section Background - Connection-focused with flowing elements
export function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0" style={{ backgroundColor: COLOR_COMBINATIONS.backgrounds.primary }} />
      
      {/* Connection Flow Lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="{COLOR_COMBINATIONS.backgrounds.secondary}" stopOpacity="0.4" />
              <stop offset="100%" stopColor="{COLOR_COMBINATIONS.backgrounds.tertiary}" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M100,400 Q300,200 600,400 T1100,400"
            fill="none"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
          />
          <path
            d="M100,500 Q500,300 900,500 T1100,500"
            fill="none"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Floating Connection Points */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-3 h-3 bg-[{COLOR_COMBINATIONS.backgrounds.secondary}] rounded-full opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[{COLOR_COMBINATIONS.backgrounds.tertiary}] rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  )
}
