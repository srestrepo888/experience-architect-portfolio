"use client"

import { OptimizedImage } from "@/components/ui/optimized-image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectShowcaseProps {
  className?: string
}

export default function ProjectShowcase({ className }: ProjectShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative w-full", className)}
    >
      {/* Main showcase image with perfect optimization */}
      <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
        <OptimizedImage
          src="/project-showcase-trio.png"
          alt="Project showcase featuring three innovative digital experiences: The Kavanee Story wellness platform with personalized beauty and wellness solutions, Guest Support Dashboard with comprehensive hospitality management tools, and Augoor AI platform introduction with advanced technology interface"
          width={1920}
          height={600}
          priority={true}
          hover="lift"
          aspectRatio="wide"
          className="w-full h-auto object-cover"
          containerClassName="group"
        />

        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Subtle border enhancement */}
        <div className="absolute inset-0 rounded-2xl lg:rounded-3xl ring-1 ring-black/5" />
      </div>

      {/* Project labels with sophisticated positioning */}
      <div className="absolute inset-0 flex items-end justify-between p-6 lg:p-8 pointer-events-none">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full justify-between">
          {/* Kavanee Project Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20"
          >
            <span className="text-sm font-medium text-gray-800">Wellness Experience</span>
          </motion.div>

          {/* Dashboard Project Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20"
          >
            <span className="text-sm font-medium text-gray-800">Hospitality Platform</span>
          </motion.div>

          {/* Augoor Project Label */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20"
          >
            <span className="text-sm font-medium text-gray-800">AI Technology</span>
          </motion.div>
        </div>
      </div>

      {/* Performance optimization indicators */}
      <div className="sr-only">
        <p>Optimized for web performance with responsive design</p>
        <p>Lazy loading enabled for optimal page speed</p>
        <p>Accessible alt text provided for screen readers</p>
      </div>
    </motion.div>
  )
}
