"use client"

import React from "react"

interface UltraLuxuryProjectBackgroundProps {
  className?: string
  variant?: "default" | "subtle" | "elegant"
  children: React.ReactNode
}

export function UltraLuxuryProjectBackground({ 
  className = "", 
  variant = "default",
  children 
}: UltraLuxuryProjectBackgroundProps) {
  
  const backgroundVariants = {
    default: "bg-gradient-to-br from-primary-50 via-background to-accent",
    subtle: "bg-gradient-to-b from-primary-50/30 via-background to-primary-50/20",
    elegant: "bg-gradient-to-br from-stone-50 via-background via-primary-50/40 to-forest-50/30"
  }

  return (
    <div className={`relative min-h-screen ${backgroundVariants[variant]} ${className}`}>
      {/* Ultra-Sophisticated Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Geometric Element */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]"
          style={{
            background: `radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 70%)`,
            transform: "translate(25%, -25%)"
          }}
        />
        
        {/* Secondary Geometric Element */}
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.02]"
          style={{
            background: `conic-gradient(from 45deg at center, hsl(var(--secondary)) 0%, transparent 40%, hsl(var(--primary)) 100%)`,
            transform: "translate(-25%, 25%)"
          }}
        />

        {/* Tertiary Sophisticated Pattern */}
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 opacity-[0.015]"
          style={{
            background: `linear-gradient(135deg, hsl(var(--accent)) 0%, transparent 50%, hsl(var(--muted)) 100%)`,
            transform: "translate(-50%, -50%) rotate(45deg)",
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
          }}
        />

        {/* Ultra-Subtle Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, hsl(var(--accent)) 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, hsl(var(--muted)) 0%, transparent 50%)
            `,
            backgroundSize: "400px 400px, 300px 300px, 200px 200px, 350px 350px"
          }}
        />

        {/* Architectural Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.005]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      {/* Content with perfect backdrop */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Sophisticated Bottom Fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)`
        }}
      />
    </div>
  )
}