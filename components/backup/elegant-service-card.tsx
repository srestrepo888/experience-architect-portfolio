"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Star } from "lucide-react"
import type React from "react"
import { useState, useRef } from "react"
import { HeadingSmall, BodyMedium, Caption } from "@/components/typography"

interface ElegantServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  caseStudy: string
  index: number
  featured?: boolean
}

export default function ElegantServiceCard({
  icon: Icon,
  title,
  description,
  caseStudy,
  index,
  featured = false,
}: ElegantServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [5, -5]))
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-5, 5]))

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="group relative h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <motion.div
        className="relative h-full overflow-hidden rounded-2xl bg-white border border-brand-interactive_subtle_border shadow-sm"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.02,
          y: -8,
          boxShadow: "0 20px 40px rgba(51, 49, 47, 0.1)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Featured Badge */}
        {featured && (
          <motion.div
            className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 bg-brand-creme_rose_subtle rounded-full border border-brand-interactive_subtle_border"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-3 h-3 text-brand-charcoal_soft_text" fill="currentColor" />
            <Caption className="text-brand-graphite_medium_text !mb-0">Featured</Caption>
          </motion.div>
        )}

        <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
          {/* Icon Section */}
          <motion.div
            className="flex items-center gap-6 mb-8"
            animate={isHovered ? { x: 4 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative group/icon"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Sophisticated Multi-Layer Background */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-creme_rose_subtle via-white to-brand-creme_rose_bg"
                  animate={{
                    backgroundPosition: isHovered ? "100% 100%" : "0% 0%",
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />

                {/* Floating Geometric Accent */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 rounded-full bg-brand-light_grey_text/20"
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : 1,
                    opacity: isHovered ? [0.2, 0.6, 0.2] : 0.2,
                  }}
                  transition={{ duration: 1.2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                />

                {/* Subtle Border with Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-brand-interactive_subtle_border"
                  animate={{
                    boxShadow: isHovered
                      ? "0 0 20px rgba(184, 181, 178, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
                      : "0 0 0px rgba(184, 181, 178, 0), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Icon Container with Advanced Positioning */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    y: isHovered ? -1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Icon with Sophisticated Effects */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Icon
                      className="h-9 w-9 text-brand-charcoal_soft_text transition-all duration-500"
                      strokeWidth={1.2}
                      style={{
                        filter: isHovered ? "drop-shadow(0 2px 8px rgba(51, 49, 47, 0.1))" : "none",
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Innovative Floating Elements */}
                <motion.div
                  className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-brand-light_grey_hover/30"
                  animate={{
                    scale: isHovered ? [1, 1.5, 1] : 1,
                    opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3,
                  }}
                  transition={{ duration: 1.5, delay: 0.2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                />

                {/* Subtle Corner Accent */}
                <motion.div
                  className="absolute top-0 left-0 w-6 h-6 rounded-br-2xl bg-gradient-to-br from-brand-light_grey_text/5 to-transparent"
                  animate={{
                    opacity: isHovered ? 0.8 : 0.3,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            <div className="flex-1">
              <HeadingSmall className="text-brand-charcoal_soft_text !mb-2">{title}</HeadingSmall>

              {/* Elegant Divider */}
              <motion.div
                className="h-0.5 rounded-full bg-brand-interactive_subtle_border"
                animate={{
                  scaleX: isHovered ? 1 : 0.4,
                }}
                transition={{ duration: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 2 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <BodyMedium className="text-brand-graphite_medium_text">{description}</BodyMedium>
          </motion.div>

          {/* Case Study CTA */}
          <div className="mt-auto">
            <motion.div className="group/cta relative" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
              <div className="p-5 rounded-xl bg-brand-creme_rose_subtle border border-brand-interactive_subtle_border transition-all duration-300 group-hover/cta:bg-white group-hover/cta:shadow-sm">
                <div className="flex-1">
                  <Caption className="text-brand-graphite_medium_text !mb-1">Case Study</Caption>
                  <p className="text-sm font-light text-brand-charcoal_soft_text leading-tight">{caseStudy}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
