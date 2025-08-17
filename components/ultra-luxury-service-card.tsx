"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ChevronRight, Crown, Sparkles, Star } from "lucide-react"
import type React from "react"
import { useState, useRef } from "react"

interface UltraLuxuryServiceCardProps {
  icon: React.ElementType
  title: string
  description: string
  caseStudy: string
  index: number
  premium?: boolean
}

export default function UltraLuxuryServiceCard({
  icon: Icon,
  title,
  description,
  caseStudy,
  index,
  premium = false,
}: UltraLuxuryServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]))
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]))

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
      initial={{ opacity: 0, y: 100, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="group relative perspective-1000 h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <motion.div
        className="relative h-full overflow-hidden rounded-3xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.05,
          y: -20,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Ultra-Luxury Background */}
        <div
          className={`absolute inset-0 ${
            premium
              ? "bg-gradient-to-br from-amber-900/90 via-yellow-900/80 to-amber-800/90"
              : "bg-gradient-to-br from-purple-900/90 via-slate-800/80 to-purple-800/90"
          } backdrop-blur-xl`}
        />

        {/* Premium Border */}
        <div
          className={`absolute inset-0 rounded-3xl border-2 ${
            premium ? "border-amber-400/50" : "border-purple-400/30"
          } group-hover:border-opacity-100 transition-all duration-700`}
        />

        {/* Luxury Glow Effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl ${
            premium ? "shadow-[0_0_50px_rgba(251,191,36,0.3)]" : "shadow-[0_0_50px_rgba(147,51,234,0.2)]"
          } opacity-0 group-hover:opacity-100`}
          transition={{ duration: 0.7 }}
        />

        {/* Floating Sparkles */}
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 ${premium ? "bg-amber-400" : "bg-purple-400"} rounded-full`}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${15 + i * 8}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -30, -60],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </>
        )}

        <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
          {/* Premium Badge */}
          {premium && (
            <motion.div
              className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-amber-400/20 backdrop-blur-sm rounded-full border border-amber-400/30"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-amber-200 font-medium tracking-wider">PREMIUM</span>
            </motion.div>
          )}

          {/* Icon Section */}
          <motion.div
            className="flex items-center gap-6 mb-8"
            animate={isHovered ? { x: 10 } : { x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className={`relative p-6 rounded-2xl ${
                premium
                  ? "bg-gradient-to-br from-amber-400/20 to-yellow-400/20 border border-amber-400/30"
                  : "bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-purple-400/30"
              } backdrop-blur-sm`}
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 10 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Icon
                className={`h-12 w-12 ${premium ? "text-amber-300" : "text-purple-300"} transition-all duration-500`}
                strokeWidth={1.5}
              />

              {/* Icon Glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl ${premium ? "bg-amber-400/20" : "bg-purple-400/20"}`}
                animate={
                  isHovered
                    ? {
                        scale: [1, 1.3, 1],
                        opacity: [0, 0.6, 0],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>

            <div className="flex-1">
              <motion.h3
                className={`text-3xl md:text-4xl font-bold ${
                  premium ? "text-amber-100" : "text-purple-100"
                } leading-tight mb-2 tracking-tight`}
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>

              {/* Luxury Divider */}
              <motion.div
                className={`h-1 rounded-full ${
                  premium
                    ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400"
                    : "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
                }`}
                animate={{
                  scaleX: isHovered ? 1 : 0.3,
                }}
                transition={{ duration: 0.7 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg leading-relaxed text-slate-200 mb-8 font-light"
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 5 }}
            transition={{ duration: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Ultra-Luxury CTA */}
          <div className="mt-auto">
            <motion.div className="group/cta relative" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div
                className={`flex items-center gap-4 p-6 rounded-2xl ${
                  premium
                    ? "bg-gradient-to-r from-amber-400/10 to-yellow-400/10 border border-amber-400/20"
                    : "bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20"
                } backdrop-blur-sm transition-all duration-500 group-hover/cta:border-opacity-50`}
              >
                <motion.div
                  className={`p-3 rounded-full ${
                    premium
                      ? "bg-amber-400/20 border border-amber-400/30"
                      : "bg-purple-400/20 border border-purple-400/30"
                  }`}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ChevronRight className={`h-5 w-5 ${premium ? "text-amber-300" : "text-purple-300"}`} />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className={`h-3 w-3 ${premium ? "text-amber-400" : "text-purple-400"}`} />
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                      Featured Case Study
                    </span>
                  </div>
                  <p
                    className={`text-base font-medium ${premium ? "text-amber-200" : "text-purple-200"} leading-tight`}
                  >
                    {caseStudy}
                  </p>
                </div>

                <Sparkles
                  className={`h-4 w-4 ${
                    premium ? "text-amber-400" : "text-purple-400"
                  } opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
