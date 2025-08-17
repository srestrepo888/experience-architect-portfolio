"use client"

import type { Project } from "@/lib/projects"
import { HeadingSmall, SubheadingMedium, BodySmall, Caption } from "@/components/typography"
import { Globe, MapPin } from "lucide-react"

interface ProjectCardProps {
  project: Project
  onNavigate: (route: string) => void
}

export default function ProjectCard({ project, onNavigate }: ProjectCardProps) {
  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className="bg-brand-creme_rose_subtle dark:bg-brand-night_subtle_bg rounded-2xl overflow-hidden shadow-sm border border-brand-interactive_subtle_border dark:border-brand-interactive_subtle_border_dark group flex flex-col transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={() => onNavigate(`/project/${project.slug}`)}
    >
      <div className="overflow-hidden aspect-[4/3] relative group bg-muted/20">
        <img
          src={project.thumbnailImage || "/placeholder.svg?width=400&height=300&query=abstract+project+thumbnail"}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = "/placeholder.svg?width=400&height=300"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <HeadingSmall
          as="h3"
          id={`project-title-${project.id}`}
          className="mb-1 text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text"
          noMargin
        >
          {project.title}
        </HeadingSmall>
        <SubheadingMedium
          className="mb-3 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text"
          noMargin
        >
          {project.subtitle}
        </SubheadingMedium>
        <BodySmall className="line-clamp-3 mb-4 text-brand-graphite_medium_text/80 dark:text-brand-moonstone_light_text/80 leading-relaxed flex-grow">
          {project.context}
        </BodySmall>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.services?.map((service, idx) => (
            <span
              key={idx}
              className="inline-block bg-transparent px-3 py-1 text-xs text-brand-charcoal_soft_text/70 dark:text-brand-moonstone_light_text/70 rounded-full border border-brand-charcoal_soft_text/20 dark:border-brand-moonstone_light_text/20"
            >
              {service}
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-1 mb-4 text-xs">
          {project.webpage && (
            <a
              href={project.webpage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-brand-charcoal_soft_text/80 dark:text-brand-moonstone_light_text/80 hover:text-brand-charcoal_soft_text dark:hover:text-brand-moonstone_light_text transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
              <span className="truncate">{project.webpage.replace(/^https?:\/\//, "")}</span>
            </a>
          )}
          {project.location && (
            <div className="flex items-center text-brand-charcoal_soft_text/80 dark:text-brand-moonstone_light_text/80">
              <MapPin className="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
              <span>{project.location}</span>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-brand-interactive_subtle_border dark:border-brand-interactive_subtle_border_dark mt-auto">
          <div>
            <Caption className="block mb-0.5 text-brand-charcoal_soft_text/60 dark:text-brand-moonstone_light_text/60">
              CLIENT
            </Caption>
            <BodySmall className="text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text" noMargin>
              {project.client}
            </BodySmall>
          </div>
          <div className="text-right">
            <Caption className="block mb-0.5 text-brand-charcoal_soft_text/60 dark:text-brand-moonstone_light_text/60">
              YEAR
            </Caption>
            <BodySmall className="text-brand-charcoal_soft_text dark:text-brand-moonstone_light_text" noMargin>
              {project.year}
            </BodySmall>
          </div>
        </div>
      </div>
    </article>
  )
}
