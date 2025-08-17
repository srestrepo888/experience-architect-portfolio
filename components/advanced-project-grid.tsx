"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/project-card"
import type { Project } from "@/lib/projects"
import { Eye, XIcon } from "lucide-react"

interface AdvancedProjectGridProps {
  projects: Project[]
  className?: string
}

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "branding", label: "Branding" },
  { id: "digital", label: "Digital" },
  { id: "experience", label: "Experience" },
  { id: "strategy", label: "Strategy" },
]

export function AdvancedProjectGrid({ projects, className }: AdvancedProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isLoading, setIsLoading] = useState(false)
  const [previewProject, setPreviewProject] = useState<Project | null>(null)

  // Filter projects with smooth animation
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      if (activeFilter === "all") {
        setFilteredProjects(projects)
      } else {
        setFilteredProjects(
          projects.filter((project) =>
            project.services.some((service) => service.toLowerCase().includes(activeFilter.toLowerCase())),
          ),
        )
      }
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeFilter, projects])

  return (
    <div className={cn("relative", className)}>
      {/* Filter Navigation */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {filterCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
              "border border-border hover:border-primary/30",
              "backdrop-blur-sm",
              activeFilter === category.id
                ? "bg-primary text-primary-foreground shadow-medium"
                : "bg-background/80 text-muted-foreground hover:text-foreground hover:bg-background",
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid with True Masonry Layout (CSS Columns) */}
      <div
        className="w-full"
        style={{
          columnCount: 1,
          columnGap: "1.5rem",
        }}
      >
        <AnimatePresence>
          {isLoading
            ? null
            : filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="mb-6 break-inside-avoid"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="relative group">
                    <ProjectCard
                      project={project}
                      onNavigate={(route) => {
                        window.location.href = route
                      }}
                      className="h-full hover:shadow-dramatic transition-all duration-500"
                    />
                    <motion.button
                      className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      onClick={() => setPreviewProject(project)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Quick view project"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
        </AnimatePresence>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .w-full {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .w-full {
            column-count: 3;
          }
        }
      `}</style>

      {/* Quick Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-dramatic"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={previewProject.thumbnailImage || "/placeholder.svg?width=800&height=450"}
                  alt={previewProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-2">{previewProject.title}</h3>
                <p className="text-muted-foreground mb-4">{previewProject.subtitle}</p>
                <p className="text-sm leading-relaxed mb-6">{previewProject.context}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {previewProject.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setPreviewProject(null)
                      window.location.href = `/project/${previewProject.slug}`
                    }}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:opacity-90 transition-opacity"
                  >
                    View Full Case Study
                  </button>
                </div>
              </div>
              <button
                onClick={() => setPreviewProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Close quick view"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
