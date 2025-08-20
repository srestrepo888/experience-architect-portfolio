'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface HarmoniousBackgroundProps {
  sectionId: string
  contentType: 'hero' | 'text-primary' | 'text-secondary' | 'visual' | 'interactive'
  intensity?: 'subtle' | 'moderate' | 'enhanced'
  className?: string
}

export function HarmoniousBackgroundSystem({
  sectionId,
  contentType,
  intensity = 'moderate',
  className = ''
}: HarmoniousBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Content-aware opacity based on text density
  const getOpacityByContent = () => {
    switch (contentType) {
      case 'text-primary':
        return intensity === 'subtle' ? 0.02 : intensity === 'moderate' ? 0.035 : 0.05
      case 'text-secondary':
        return intensity === 'subtle' ? 0.03 : intensity === 'moderate' ? 0.045 : 0.06
      case 'hero':
        return intensity === 'subtle' ? 0.08 : intensity === 'moderate' ? 0.12 : 0.15
      case 'visual':
        return intensity === 'subtle' ? 0.06 : intensity === 'moderate' ? 0.09 : 0.12
      case 'interactive':
        return intensity === 'subtle' ? 0.04 : intensity === 'moderate' ? 0.06 : 0.08
      default:
        return 0.05
    }
  }

  // Scroll-based transformations
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [getOpacityByContent(), getOpacityByContent() * 1.2, getOpacityByContent() * 0.8, getOpacityByContent() * 0.6]
  )

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.05]
  )

  const backgroundBlur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 2]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    
    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  // Asset-based background selection
  const getBackgroundAsset = () => {
    switch (sectionId) {
      case 'hero':
        return '/luxury-geometric-background.png'
      case 'projects':
        return '/elegant-brand-identity.png'
      case 'experience':
        return '/minimal-luxury-interior.png'
      case 'services':
        return '/luxury-brand-hero.png'
      default:
        return '/background-texture.png'
    }
  }

  // Content-aware blur and contrast adjustments
  const getTextEnhancement = () => {
    if (contentType.includes('text')) {
      return {
        backdropFilter: 'blur(0.5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.03)'
      }
    }
    return {}
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      
      {/* Primary Asset Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${getBackgroundAsset()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        animate={{
          opacity: isVisible ? getOpacityByContent() : 0
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      />

      {/* Sophisticated Overlay for Text Readability */}
      {contentType.includes('text') && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%, 
                rgba(255, 255, 255, 0.08) 0%, 
                rgba(255, 255, 255, 0.04) 40%, 
                transparent 70%
              )
            `,
            ...getTextEnhancement()
          }}
          animate={{
            opacity: isVisible ? 1 : 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
        />
      )}

      {/* Dynamic Texture Enhancement */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.015) 1px, transparent 0),
            linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.008) 50%, transparent 51%)
          `,
          backgroundSize: '60px 60px, 80px 80px',
          opacity: getOpacityByContent() * 0.3
        }}
        animate={{
          backgroundPosition: [
            '0% 0%, 0% 0%',
            '100% 100%, 50% 50%'
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Content-Aware Border Enhancement */}
      {contentType === 'hero' && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.02) 20%, 
                rgba(255, 255, 255, 0.04) 50%, 
                rgba(255, 255, 255, 0.02) 80%, 
                transparent 100%
              )
            `,
            opacity: getOpacityByContent() * 0.5
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Scroll-Responsive Transformations */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: backgroundOpacity,
          transform: `scale(${backgroundScale})`,
          filter: `blur(${backgroundBlur}px)`
        }}
      />
    </div>
  )
}

// Enhanced Content-Aware Section Wrapper
export function ContentAwareBackgroundWrapper({
  children,
  sectionId,
  contentType,
  intensity = 'moderate',
  className = ''
}: {
  children: React.ReactNode
  sectionId: string
  contentType: 'hero' | 'text-primary' | 'text-secondary' | 'visual' | 'interactive'
  intensity?: 'subtle' | 'moderate' | 'enhanced'
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <HarmoniousBackgroundSystem
        sectionId={sectionId}
        contentType={contentType}
        intensity={intensity}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
