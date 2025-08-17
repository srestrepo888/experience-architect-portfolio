"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, ExternalLink, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { getAllProjects } from "@/lib/projects"
import { HeadingLarge, HeadingMedium, HeadingSmall, BodyMedium, BodySmall, Caption } from "@/components/typography"

export default function PerfectSevenProjectsShowcase() {
  const projects = getAllProjects()
  const [activeProject, setActiveProject] = useState<number>(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Perfect 7-project layout configuration
  const layoutConfig = [
    // Hero project (large)
    { size: "hero", gridArea: "1 / 1 / 3 / 3", aspectRatio: "16/10" },
    // Featured projects (medium)
    { size: "featured", gridArea: "1 / 3 / 2 / 5", aspectRatio: "4/3" },
    { size: "featured", gridArea: "2 / 3 / 3 / 4", aspectRatio: "3/4" },
    { size: "featured", gridArea: "2 / 4 / 3 / 5", aspectRatio: "3/4" },
    // Accent projects (smaller but impactful)
    { size: "accent", gridArea: "3 / 1 / 4 / 2", aspectRatio: "1/1" },
    { size: "accent", gridArea: "3 / 2 / 4 / 3", aspectRatio: "1/1" },
    { size: "accent", gridArea: "3 / 3 / 4 / 5", aspectRatio: "8/3" },
  ]

  const sizeStyles = {
    hero: "p-8 md:p-12",
    featured: "p-6 md:p-8",
    accent: "p-4 md:p-6",
  }

  const textSizes = {
    hero: { title: HeadingLarge, subtitle: BodyMedium },
    featured: { title: HeadingMedium, subtitle: BodySmall },
    accent: { title: HeadingSmall, subtitle: Caption },
  }

  // Auto-rotate through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [projects.length])

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="relative min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Dynamic background with project colors */}
      <motion.div className="absolute inset-0 opacity-5" style={{ y: y3 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Caption className="mb-4 tracking-widest">FEATURED WORK</Caption>
          <HeadingLarge className="mb-6">
            Seven Stories of{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Innovation
            </span>
          </HeadingLarge>
          <BodyMedium className="max-w-2xl mx-auto">
            Each project represents a unique challenge, a bold solution, and a transformative impact. Explore the
            intersection of strategy, design, and technology.
          </BodyMedium>
        </motion.div>

        {/* Perfect 7-Project Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-4 grid-rows-3 gap-4 md:gap-6 lg:gap-8 h-[120vh] md:h-[100vh]"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          {projects.slice(0, 7).map((project, index) => {
            const config = layoutConfig[index]
            const isActive = activeProject === index
            const isHovered = hoveredProject === index
            const TitleComponent = textSizes[config.size as keyof typeof textSizes].title
            const SubtitleComponent = textSizes[config.size as keyof typeof textSizes].subtitle

            return (
              <motion.div
                key={project.id}
                className="relative group cursor-pointer"
                style={{
                  gridArea: config.gridArea,
                  aspectRatio: config.aspectRatio,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: config.size === "hero" ? 1.02 : 1.05,
                  zIndex: 10,
                }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => setActiveProject(index)}
              >
                {/* Project Image Container */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
                  <motion.img
                    src={project.thumbnailImage || "/placeholder.svg?width=800&height=600"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ y: index % 2 === 0 ? y1 : y2 }}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Active Project Indicator */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full shadow-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Content Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-end text-white",
                    sizeStyles[config.size as keyof typeof sizeStyles],
                  )}
                >
                  {/* Project Meta */}
                  <div className="flex items-center gap-3 mb-2 opacity-80">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <Caption className="text-white/90">{project.year}</Caption>
                    </div>
                    {project.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <Caption className="text-white/90">{project.location}</Caption>
                      </div>
                    )}
                  </div>

                  {/* Project Title & Subtitle */}
                  <TitleComponent className="text-white mb-2 line-clamp-2">{project.title}</TitleComponent>

                  {config.size !== "accent" && (
                    <SubtitleComponent className="text-white/80 mb-4 line-clamp-2">
                      {project.subtitle}
                    </SubtitleComponent>
                  )}

                  {/* Services Tags */}
                  {config.size === "hero" && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white/90"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/project/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group/btn"
                    >
                      <span className="text-sm font-medium">View Case</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    {project.webpage && config.size === "hero" && (
                      <a
                        href={project.webpage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Enhancement */}
                <motion.div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-primary/50 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Project Navigation Dots */}
        <motion.div
          className="flex justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.slice(0, 7).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                activeProject === index ? "bg-primary scale-125" : "bg-border hover:bg-primary/50 hover:scale-110",
              )}
              aria-label={`View project ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Floating Action */}
        <motion.div
          className="fixed bottom-8 right-8 z-20"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-dramatic hover:shadow-strong hover:scale-105 transition-all duration-300 group"
          >
            <span className="font-medium">View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
