"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SophisticatedFoundationProps {
  section: "hero" | "about" | "projects" | "experience" | "services" | "footer"
  children: ReactNode
  className?: string
}

export function SophisticatedFoundation({ 
  section, 
  children, 
  className = "" 
}: SophisticatedFoundationProps) {

  // 🎨 SOPHISTICATED FOUNDATION SYSTEM
  // Creates depth, texture, and atmospheric foundation without overwhelming content
  // Supports the "architect of invisible systems" narrative
  
  const getSectionFoundation = () => {
    switch (section) {
      case "hero":
        // HERO: Visible foundation with sophisticated depth
        return {
          baseGradient: "bg-gradient-to-br from-slate-50 via-slate-100/90 to-slate-200/80",
          atmosphericLayer: "radial-gradient(ellipse at 30% 20%, rgba(15,23,42,0.12) 0%, transparent 60%)",
          texturePattern: "opacity-[0.025] bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.6)_0.5px,transparent_0)] bg-[length:32px_32px]",
          depth: "inset 0 1px 3px rgba(15,23,42,0.08), inset 0 -1px 2px rgba(255,255,255,0.6)"
        }

      case "about":
        // ABOUT: Warm, inviting foundation for personal connection
        return {
          baseGradient: "bg-gradient-to-br from-rose-50/60 via-slate-50/80 to-white",
          atmosphericLayer: "radial-gradient(ellipse at 20% 40%, rgba(15,23,42,0.08) 0%, transparent 60%)",
          texturePattern: "opacity-[0.020] bg-[linear-gradient(45deg,transparent_47%,rgba(15,23,42,0.4)_49%,transparent_51%)] bg-[length:24px_24px]",
          depth: "inset 0 1px 2px rgba(15,23,42,0.06), inset 0 -1px 3px rgba(255,255,255,0.7)"
        }

      case "projects":
        // PROJECTS: Clean gallery foundation that elevates work
        return {
          baseGradient: "bg-gradient-to-br from-slate-50/90 via-white to-slate-100/70",
          atmosphericLayer: "radial-gradient(ellipse at 50% 30%, rgba(15,23,42,0.06) 0%, transparent 70%)",
          texturePattern: "opacity-[0.015] bg-[radial-gradient(circle_at_2px_2px,rgba(15,23,42,0.4)_0.5px,transparent_0)] bg-[length:40px_40px]",
          depth: "inset 0 1px 2px rgba(15,23,42,0.04), inset 0 -1px 4px rgba(255,255,255,0.8)"
        }

      case "experience":
        // EXPERIENCE: Professional progression foundation
        return {
          baseGradient: "bg-gradient-to-br from-blue-50/50 via-slate-50/80 to-slate-100/70",
          atmosphericLayer: "linear-gradient(135deg, rgba(15,23,42,0.10) 0%, transparent 40%, rgba(15,23,42,0.06) 80%)",
          texturePattern: "opacity-[0.018] bg-[linear-gradient(90deg,transparent_48%,rgba(15,23,42,0.5)_50%,transparent_52%)] bg-[length:28px_28px]",
          depth: "inset 0 1px 2px rgba(15,23,42,0.08), inset 0 -1px 3px rgba(255,255,255,0.6)"
        }

      case "services":
        // SERVICES: Authoritative yet approachable foundation
        return {
          baseGradient: "bg-gradient-to-br from-emerald-50/40 via-slate-50/70 to-white",
          atmosphericLayer: "radial-gradient(ellipse at 60% 40%, rgba(15,23,42,0.09) 0%, transparent 55%)",
          texturePattern: "opacity-[0.022] bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(15,23,42,0.5)_0.5px,transparent_0)] bg-[length:36px_36px]",
          depth: "inset 0 1px 3px rgba(15,23,42,0.08), inset 0 -1px 2px rgba(255,255,255,0.7)"
        }

      case "footer":
        // FOOTER: Sophisticated conclusion foundation
        return {
          baseGradient: "bg-gradient-to-br from-slate-100/80 via-slate-50/60 to-slate-200/50",
          atmosphericLayer: "linear-gradient(0deg, rgba(15,23,42,0.12) 0%, transparent 60%)",
          texturePattern: "opacity-[0.028] bg-[radial-gradient(circle_at_2px_2px,rgba(15,23,42,0.6)_0.5px,transparent_0)] bg-[length:30px_30px]",
          depth: "inset 0 2px 4px rgba(15,23,42,0.10), inset 0 -1px 2px rgba(255,255,255,0.8)"
        }

      default:
        return {
          baseGradient: "bg-gradient-to-br from-white via-slate-50/20 to-slate-100/30",
          atmosphericLayer: "radial-gradient(ellipse at 50% 50%, rgba(15,23,42,0.03) 0%, transparent 60%)",
          texturePattern: "opacity-[0.006] bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.3)_0.5px,transparent_0)] bg-[length:32px_32px]",
          depth: "inset 0 1px 2px rgba(15,23,42,0.015), inset 0 -1px 3px rgba(255,255,255,0.4)"
        }
    }
  }

  const foundation = getSectionFoundation()

  return (
    <div className={`relative ${className}`}>
      {/* Sophisticated Base Foundation */}
      <div className={`absolute inset-0 ${foundation.baseGradient}`} />
      
      {/* Atmospheric Depth Layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: foundation.atmosphericLayer
        }}
      />
      
      {/* Subtle Texture Pattern */}
      <div className={`absolute inset-0 ${foundation.texturePattern}`} />
      
      {/* Depth Enhancement */}
      <div 
        className="absolute inset-0"
        style={{
          boxShadow: foundation.depth
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Clean Export Components
export function HeroFoundation({ children, className }: { children: ReactNode, className?: string }) {
  return <SophisticatedFoundation section="hero" className={className}>{children}</SophisticatedFoundation>
}

export function AboutFoundation({ children, className }: { children: ReactNode, className?: string }) {
  return <SophisticatedFoundation section="about" className={className}>{children}</SophisticatedFoundation>
}

export function ProjectsFoundation({ children, className }: { children: ReactNode, className?: string }) {
  return <SophisticatedFoundation section="projects" className={className}>{children}</SophisticatedFoundation>
}

export function ExperienceFoundation({ children, className }: { children: ReactNode, className?: string }) {
  return <SophisticatedFoundation section="experience" className={className}>{children}</SophisticatedFoundation>
}

export function ServicesFoundation({ children, className }: { children: ReactNode, className?: string }) {
  return <SophisticatedFoundation section="services" className={className}>{children}</SophisticatedFoundation>
}

export function FooterFoundation({ children, className }: { children: ReactNode, className?: string }) {
  return <SophisticatedFoundation section="footer" className={className}>{children}</SophisticatedFoundation>
}