// Advanced Background Interaction System
// Provides intelligent micro-interactions and content-aware adaptations

import { useCallback, useEffect, useState } from 'react'
import { BACKGROUND_DNA } from './background-dna'

export interface BackgroundInteractionState {
  isHovering: boolean
  hoverIntensity: number
  focusedElement: string | null
  interactionHistory: string[]
  contentEngagement: 'low' | 'medium' | 'high'
}

export function useBackgroundInteractions(
  section: string,
  contentType: 'hero' | 'text-primary' | 'text-secondary' | 'gallery' | 'contact'
) {
  const [state, setState] = useState<BackgroundInteractionState>({
    isHovering: false,
    hoverIntensity: 0,
    focusedElement: null,
    interactionHistory: [],
    contentEngagement: 'medium'
  })

  const [engagementTimer, setEngagementTimer] = useState<NodeJS.Timeout | null>(null)

  // Intelligent hover intensity calculation
  const calculateHoverIntensity = useCallback((element: HTMLElement) => {
    const elementType = element.tagName.toLowerCase()
    const hasInteractiveClass = element.classList.contains('interactive') || 
                                element.classList.contains('hover-enhanced')
    
    // Base intensity by element type
    const intensityMap = {
      'button': 0.8,
      'a': 0.7,
      'input': 0.6,
      'img': 0.9,
      'h1': 0.4,
      'h2': 0.3,
      'h3': 0.3,
      'p': 0.2,
      'div': hasInteractiveClass ? 0.5 : 0.1
    }

    return intensityMap[elementType as keyof typeof intensityMap] || 0.2
  }, [])

  // Content engagement tracking
  const trackEngagement = useCallback((action: string) => {
    setState(prev => {
      const newHistory = [...prev.interactionHistory, action].slice(-10) // Keep last 10 actions
      
      // Calculate engagement based on interaction frequency and variety
      const uniqueActions = new Set(newHistory).size
      const frequency = newHistory.length
      
      let engagement: 'low' | 'medium' | 'high' = 'medium'
      if (frequency > 7 && uniqueActions > 3) engagement = 'high'
      else if (frequency < 3 || uniqueActions < 2) engagement = 'low'

      return {
        ...prev,
        interactionHistory: newHistory,
        contentEngagement: engagement
      }
    })
  }, [])

  // Enhanced hover handlers
  const handleMouseEnter = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement
    const intensity = calculateHoverIntensity(target)
    
    setState(prev => ({
      ...prev,
      isHovering: true,
      hoverIntensity: intensity,
      focusedElement: target.tagName.toLowerCase()
    }))

    trackEngagement(`hover_${target.tagName.toLowerCase()}`)
  }, [calculateHoverIntensity, trackEngagement])

  const handleMouseLeave = useCallback(() => {
    setState(prev => ({
      ...prev,
      isHovering: false,
      hoverIntensity: 0,
      focusedElement: null
    }))
  }, [])

  const handleClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement
    trackEngagement(`click_${target.tagName.toLowerCase()}`)
  }, [trackEngagement])

  const handleScroll = useCallback(() => {
    trackEngagement('scroll')
  }, [trackEngagement])

  // Setup engagement timer
  useEffect(() => {
    if (engagementTimer) clearTimeout(engagementTimer)
    
    const timer = setTimeout(() => {
      setState(prev => ({
        ...prev,
        contentEngagement: prev.interactionHistory.length > 5 ? 'high' : 'low'
      }))
    }, 10000) // 10 second engagement window
    
    setEngagementTimer(timer)
    return () => clearTimeout(timer)
  }, [state.interactionHistory])

  // Get dynamic background properties based on current state
  const getDynamicProperties = useCallback(() => {
    const baseConfig = BACKGROUND_DNA.contentAdaptations[contentType]
    
    // Engagement multipliers
    const engagementMultipliers = {
      'low': 0.8,
      'medium': 1.0,
      'high': 1.3
    }
    
    // Hover intensity effects
    const hoverMultiplier = 1 + (state.hoverIntensity * 0.4)
    const engagementMultiplier = engagementMultipliers[state.contentEngagement]
    
    return {
      patternIntensity: (baseConfig?.textureOpacity?.[2] || 0.02) * hoverMultiplier * engagementMultiplier,
      backgroundOpacity: (baseConfig?.backgroundOpacity?.[2] || 0.4) * engagementMultiplier,
      animationSpeed: (baseConfig?.animationSpeed || 0.5) * (state.isHovering ? 1.5 : 1),
      cursorInfluence: state.hoverIntensity,
      breathingIntensity: state.contentEngagement === 'high' ? 'strong' : baseConfig?.breathingIntensity || 'medium'
    }
  }, [contentType, state])

  return {
    state,
    handlers: {
      handleMouseEnter,
      handleMouseLeave,
      handleClick,
      handleScroll
    },
    dynamicProperties: getDynamicProperties(),
    trackEngagement
  }
}

// Sophisticated element detection
export function useElementInteractionTracking(containerRef: React.RefObject<HTMLElement>) {
  const [trackedElements, setTrackedElements] = useState<{
    interactive: HTMLElement[]
    textContent: HTMLElement[]
    visualContent: HTMLElement[]
  }>({
    interactive: [],
    textContent: [],
    visualContent: []
  })

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    
    // Categorize elements for intelligent background adaptation
    const interactive = container.querySelectorAll('button, a, input, select, textarea, [role="button"]')
    const textContent = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span:not([role]), div[role="text"]')
    const visualContent = container.querySelectorAll('img, svg, video, canvas, [role="img"]')

    setTrackedElements({
      interactive: Array.from(interactive) as HTMLElement[],
      textContent: Array.from(textContent) as HTMLElement[],
      visualContent: Array.from(visualContent) as HTMLElement[]
    })
  }, [containerRef])

  return trackedElements
}

// Advanced cursor tracking with momentum and prediction
export function useAdvancedCursorTracking(
  enabled: boolean,
  containerRef: React.RefObject<HTMLElement>
) {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    velocity: { x: 0, y: 0 },
    acceleration: { x: 0, y: 0 },
    isMoving: false,
    momentum: 0
  })

  useEffect(() => {
    if (!enabled || !containerRef.current) return

    let lastX = 0
    let lastY = 0
    let lastTime = Date.now()
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return

      const currentTime = Date.now()
      const deltaTime = currentTime - lastTime
      
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Calculate velocity and acceleration
      const velocityX = (x - lastX) / deltaTime
      const velocityY = (y - lastY) / deltaTime
      
      const accelerationX = (velocityX - cursor.velocity.x) / deltaTime
      const accelerationY = (velocityY - cursor.velocity.y) / deltaTime
      
      // Calculate momentum (speed)
      const momentum = Math.sqrt(velocityX * velocityX + velocityY * velocityY)

      setCursor(prev => ({
        x,
        y,
        velocity: { x: velocityX, y: velocityY },
        acceleration: { x: accelerationX, y: accelerationY },
        isMoving: momentum > 0.01,
        momentum: Math.min(momentum * 100, 1) // Normalize to 0-1
      }))

      lastX = x
      lastY = y
      lastTime = currentTime
    }

    const handleMouseLeave = () => {
      setCursor(prev => ({
        ...prev,
        isMoving: false,
        momentum: 0,
        velocity: { x: 0, y: 0 },
        acceleration: { x: 0, y: 0 }
      }))
    }

    const container = containerRef.current
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [enabled, containerRef])

  return cursor
}

