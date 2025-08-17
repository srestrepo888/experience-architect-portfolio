"use client"
// components/ui/perfect-section.tsx
// The single, authoritative component for creating page sections.

import type React from "react"
import { useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { DESIGN_SYSTEM } from "@/lib/design-system"
import { HeadingLarge, BodyLarge, Overline } from "@/components/typography"

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "subtle" | "transparent"
  spacing?: keyof (typeof DESIGN_SYSTEM.sections)["spacing"]
  container?: keyof typeof DESIGN_SYSTEM.containers
  animate?: boolean
}

const backgroundVariants = {
  default: "bg-background",
  subtle: "bg-gradient-to-b from-muted/10 via-muted/5 to-transparent",
  transparent: "bg-transparent",
  glass: "bg-white/5 dark:bg-black/5 backdrop-blur-xl border-y border-white/10 dark:border-white/5",
}

export function PerfectSection({
  children,
  className,
  id,
  background = "default",
  spacing = "normal",
  container = "content",
  animate = true,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7])

  const sectionClasses = cn(
    "relative w-full overflow-hidden",
    backgroundVariants[background as keyof typeof backgroundVariants] || backgroundVariants.default,
    DESIGN_SYSTEM.sections.spacing[spacing],
    className,
  )

  const containerClasses = cn(
    "relative w-full mx-auto",
    DESIGN_SYSTEM.containers[container],
    container !== "full" && `${DESIGN_SYSTEM.padding.mobile} ${DESIGN_SYSTEM.padding.desktop}`,
  )

  const content = (
    <motion.section 
      ref={ref}
      id={id} 
      className={sectionClasses}
      style={{ y, opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Modern CSS Grid Container */}
      <div className={containerClasses} style={{ 
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        gap: 'clamp(1rem, 4vw, 3rem)',
        containerType: 'inline-size',
      }}>
        {children}
      </div>
      
      {/* Subtle Background Pattern */}
      {background !== 'transparent' && (
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      )}
    </motion.section>
  )

  return content
}

type SectionHeaderProps = {
  overline?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function PerfectSectionHeader({ overline, title, subtitle, align = "center", className }: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start"
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: "-50px" })

  return (
    <motion.div 
      ref={headerRef}
      className={cn("flex flex-col", DESIGN_SYSTEM.sections.headerMargin, alignClasses, className)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {overline && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Overline className="mb-4 text-muted-foreground/80 gradient-text-primary">{overline}</Overline>
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeadingLarge 
          as="h2" 
          className="mb-6 text-foreground text-glow" 
          maxWidth="4xl" 
          noMargin
          style={{
            background: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.8) 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          }}
        >
          {title}
        </HeadingLarge>
      </motion.div>
      
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <BodyLarge 
            className="animate-float" 
            style={{ color: 'hsl(var(--body-contrast))' }}
            maxWidth={align === "center" ? "3xl" : "none"} 
            noMargin
          >
            {subtitle}
          </BodyLarge>
        </motion.div>
      )}
    </motion.div>
  )
}
