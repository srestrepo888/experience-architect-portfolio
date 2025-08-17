"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ChevronRight, Sparkles } from "lucide-react"
import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface LuxuryServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  caseStudy: string
  index: number
}

export default function LuxuryServiceCard({
  icon: Icon,
  title,
  description,
  caseStudy,
  index,
}: LuxuryServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]))
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]))

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.15,
      }}
      className="group relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={cn(
          "relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "bg-gradient-to-br from-luxury-pearl/90 via-luxury-cream/80 to-luxury-champagne/70",
          "backdrop-blur-xl border border-luxury-rosegold/20",
          "rounded-luxury p-8 md:p-10 lg:p-12 h-full",
          "shadow-elegant hover:shadow-luxury",
        )}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.02,
          y: -8,
        }}
      >
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-rosegold/10 via-transparent to-luxury-blush/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 bg-rose-shimmer opacity-0 group-hover:opacity-30"
          animate={
            isHovered
              ? {
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }
              : {}
          }
          transition={{ duration: 2, ease: "linear" }}
        />

        {/* Floating Sparkles */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-luxury-rosegold rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + i * 10}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -20, -40],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </>
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Section */}
          <div className="flex items-start gap-6 mb-8">
            <motion.div
              className="relative flex-shrink-0"
              animate={{
                scale: isHovered ? 1.15 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative p-6 rounded-feminine bg-gradient-to-br from-luxury-rosegold/20 to-luxury-blush/20 shadow-feminine backdrop-blur-sm border border-luxury-rosegold/30">
                <Icon
                  className="h-10 w-10 md:h-12 md:w-12 text-luxury-dustyrose transition-all duration-500 group-hover:text-luxury-rosegold"
                  strokeWidth={1}
                />

                {/* Icon Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-feminine bg-luxury-rosegold/20"
                  animate={
                    isHovered
                      ? {
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.5, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3
                className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-luxury-dustyrose leading-tight mb-3 tracking-tight"
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>

              {/* Elegant Divider */}
              <motion.div
                className="h-px bg-gradient-to-r from-luxury-rosegold via-luxury-blush to-transparent"
                animate={{
                  scaleX: isHovered ? 1 : 0.4,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>

          {/* Description with Elegant Animation */}
          <motion.div
            className="mb-8 overflow-hidden"
            animate={{
              height: isHovered ? "auto" : "80px",
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="font-serif text-lg md:text-xl leading-relaxed text-luxury-mauve/90 font-light"
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 10 }}
              transition={{ duration: 0.4 }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Luxury CTA */}
          <div className="mt-auto">
            <motion.a
              href="#"
              className="group/link relative inline-flex items-center gap-4 text-base font-medium text-luxury-dustyrose transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative p-3 rounded-full bg-gradient-to-br from-luxury-rosegold/20 to-luxury-blush/20 shadow-feminine border border-luxury-rosegold/30"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.4 }}
              >
                <ChevronRight className="h-4 w-4 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:text-luxury-rosegold" />

                {/* Button Sparkle Effect */}
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-luxury-rosegold opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-luxury-mauve/70 font-medium mb-1">
                  Featured Case
                </span>
                <span className="font-script text-base italic leading-tight text-luxury-dustyrose">
                  {caseStudy.replace("Featured Business Case: ", "")}
                </span>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Luxury Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-luxury border border-luxury-rosegold/40 opacity-0 group-hover:opacity-100"
          animate={
            isHovered
              ? {
                  boxShadow: [
                    "0 0 20px rgba(232, 180, 184, 0.3)",
                    "0 0 40px rgba(232, 180, 184, 0.5)",
                    "0 0 20px rgba(232, 180, 184, 0.3)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>
    </motion.div>
  )
}
