"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LazyImage } from "@/components/ui/lazy-image"
import { HeadingMedium, HeadingSmall, BodySmall, Caption } from "@/components/typography"
import { Section, SectionHeader } from "@/components/ui/section"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { Globe, MapPin, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects"

interface AdvancedProjectsMasonryProps {
  projects: Project[]
  onNavigate: (route: string) => void
}

const GRID_PATTERNS = [
  { span: "col-span-2 row-span-2", size: "hero" }, // Hero project
  { span: "col-span-1 row-span-2", size: "tall" }, // Tall project
  { span: "col-span-2 row-span-1", size: "wide" }, // Wide project
  { span: "col-span-1 row-span-1", size: "standard" }, // Standard
  { span: "col-span-1 row-span-1", size: "standard" }, // Standard
  { span: "col-span-1 row-span-1", size: "standard" }, // Standard
  { span: "col-span-1 row-span-1", size: "standard" }, // Standard
]

const FILTER_CATEGORIES = [
  "All Projects",
  "Experience Design",
  "Product Strategy",
  "Service Design",
  "Digital Transformation",
]

export default function AdvancedProjectsMasonry({ projects, onNavigate }: AdvancedProjectsMasonryProps) {
  const [activeFilter, setActiveFilter] = useState("All Projects")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (activeFilter === "All Projects") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.services.some((service) =>
            service.toLowerCase().includes(activeFilter.toLowerCase().replace(" ", "")),
          ),
        ),
      )
    }
  }, [activeFilter, projects])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <Section id="projects" spacing="spacious" maxWidth="7xl" className="bg-muted/20">
      <SectionHeader
        overline="02 — Portfolio"
        title="Featured Projects"
        subtitle="A curated collection of transformative experiences that bridge strategic thinking with human-centered design, each project representing a unique challenge and innovative solution."
        align="center"
      />

      {/* Advanced Filter System */}
      <motion.div
        className="flex justify-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/95 backdrop-blur-xl rounded-2xl border border-border/40" />
          <div className="relative flex flex-wrap gap-2 p-6 max-w-4xl">
            {FILTER_CATEGORIES.map((category) => (
              <EnhancedButton
                key={category}
                variant={activeFilter === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "relative overflow-hidden transition-all duration-500 ease-out",
                  "hover:scale-105 hover:-translate-y-0.5",
                  "text-xs font-medium px-6 py-3 rounded-full",
                  activeFilter === category
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-background/60 hover:bg-card/80 border border-border/30",
                )}
              >
                <span className="relative z-10">{category}</span>
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-foreground rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </EnhancedButton>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Advanced Masonry Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[300px]"
        style={{
          gridTemplateRows: "repeat(auto-fit, 300px)",
        }}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.slice(0, 7).map((project, index) => {
            const pattern = GRID_PATTERNS[index] || GRID_PATTERNS[GRID_PATTERNS.length - 1]
            const isHero = pattern.size === "hero"
            const isTall = pattern.size === "tall"
            const isWide = pattern.size === "wide"

            return (
              <motion.article
                key={project.id}
                variants={itemVariants}
                layout
                className={cn(
                  "group relative overflow-hidden rounded-3xl",
                  "bg-card border border-border/20",
                  "hover:border-border/40 transition-all duration-700 ease-out",
                  "hover:shadow-2xl hover:-translate-y-2",
                  pattern.span,
                  "cursor-pointer",
                )}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => onNavigate(`/project/${project.slug}`)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Container */}
                <div className="relative h-full overflow-hidden">
                  <LazyImage
                    src={project.thumbnailImage || "/placeholder.svg?width=600&height=400"}
                    alt={project.title}
                    aspectRatio="auto"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 1,
                        y: hoveredProject === project.id ? 0 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Project Meta */}
                      <div className="flex items-center gap-3 mb-3">
                        <Caption className="text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                          {project.year}
                        </Caption>
                        {project.location && (
                          <div className="flex items-center text-white/70">
                            <MapPin className="h-3 w-3 mr-1" />
                            <Caption className="text-white/70">{project.location}</Caption>
                          </div>
                        )}
                      </div>

                      {/* Project Title */}
                      {isHero ? (
                        <HeadingMedium className="text-white mb-3 text-balance" noMargin>
                          {project.title}
                        </HeadingMedium>
                      ) : (
                        <HeadingSmall className="text-white mb-2 text-balance" noMargin>
                          {project.title}
                        </HeadingSmall>
                      )}

                      {/* Project Description */}
                      {(isHero || isTall) && (
                        <BodySmall className="text-white/90 mb-4 line-clamp-2" noMargin>
                          {project.subtitle}
                        </BodySmall>
                      )}

                      {/* Services Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.slice(0, isHero ? 3 : 2).map((service, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/70">
                          <Caption className="mr-2">Client:</Caption>
                          <Caption className="text-white">{project.client}</Caption>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors duration-300"
                        >
                          <ArrowUpRight className="h-4 w-4 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* External Link Indicator */}
                  {project.webpage && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <EnhancedButton
          href="/projects"
          variant="secondary"
          size="lg"
          icon="arrow-right"
          className="group relative overflow-hidden bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="relative z-10">Explore All Projects</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </EnhancedButton>
      </motion.div>
    </Section>
  )
}
