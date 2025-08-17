"use client"

import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Caption, BodyMedium, HeadingSmall } from "@/components/typography"
import type { Project } from "@/lib/projects"

interface ProjectOverviewCardProps {
  project: Project
}

export default function ProjectOverviewCard({ project }: ProjectOverviewCardProps) {
  return (
    <motion.div
      className="bg-white/95 backdrop-blur-md rounded-xl border border-black/5 shadow-md overflow-hidden"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle top border accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

      <div className="p-6 md:p-8">
        {/* Refined section heading */}
        <HeadingSmall className="text-black/90 mb-6 font-light">Project Overview</HeadingSmall>

        {/* Elegant grid layout with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6">
          <div className="md:col-span-3">
            <div className="border-l-2 border-black/10 pl-4 py-1">
              <Caption className="mb-2 text-black/60">CLIENT</Caption>
              <BodyMedium className="font-medium text-black/90">{project.client}</BodyMedium>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="border-l-2 border-black/10 pl-4 py-1">
              <Caption className="mb-2 text-black/60">YEAR</Caption>
              <BodyMedium className="font-medium text-black/90">{project.year}</BodyMedium>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="border-l-2 border-black/10 pl-4 py-1">
              <Caption className="mb-2 text-black/60">INDUSTRY</Caption>
              <BodyMedium className="font-medium text-black/90">{project.industry}</BodyMedium>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="border-l-2 border-black/10 pl-4 py-1">
              <Caption className="mb-2 text-black/60">LOCATION</Caption>
              <BodyMedium className="font-medium text-black/90">{project.location}</BodyMedium>
            </div>
          </div>

          {project.webpage && (
            <div className="md:col-span-12 mt-2">
              <div className="border-l-2 border-black/10 pl-4 py-1">
                <Caption className="mb-2 text-black/60">WEBPAGE</Caption>
                <a
                  href={project.webpage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black/90 hover:text-black transition-colors group"
                >
                  <BodyMedium className="font-medium">{project.webpage.replace(/^https?:\/\//, "")}</BodyMedium>
                  <ExternalLink className="h-4 w-4 text-black/50 group-hover:text-black/80 transition-colors" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Services section with refined styling */}
        <div className="mt-8 pt-6 border-t border-black/10">
          <Caption className="mb-4 text-black/60">SERVICES PROVIDED</Caption>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service, idx) => (
              <motion.div
                key={idx}
                className="px-3 py-1.5 bg-[#F9F7F3] rounded-full border border-black/5 transition-all duration-300"
                whileHover={{ y: -2, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
              >
                <span className="text-xs tracking-wide text-black/80 font-light">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
