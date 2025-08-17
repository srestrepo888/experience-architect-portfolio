"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { HeadingMedium, BodyMedium, Caption } from "@/components/typography"
import type { Project } from "@/lib/projects"

interface ProjectNavigationProps {
  prevProject: Project | null
  nextProject: Project | null
}

export default function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  const cardBaseClasses =
    "group block relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl"
  const themedCardClasses = `${cardBaseClasses} bg-brand-creme_rose_subtle dark:bg-brand-night_subtle_bg border-brand-interactive_subtle_border dark:border-brand-interactive_subtle_border_dark hover:border-brand-charcoal_soft_text/30 dark:hover:border-brand-moonstone_light_text/30`
  const placeholderClasses =
    "aspect-[16/9] md:aspect-[4/3] rounded-2xl flex items-center justify-center bg-brand-creme_rose_subtle dark:bg-brand-night_subtle_bg border border-brand-interactive_subtle_border dark:border-brand-interactive_subtle_border_dark"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Previous Project */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {prevProject ? (
          <Link href={`/project/${prevProject.slug}`} className="group block">
            <div className={themedCardClasses}>
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={prevProject.heroImage || "/placeholder.svg?height=270&width=480&query=abstract+design+preview"}
                  alt={prevProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal_soft_text/50 via-transparent to-transparent dark:from-brand-night_deep_bg/50"></div>

                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-creme_rose_bg/90 dark:bg-brand-night_deep_bg/90 backdrop-blur-sm rounded-full">
                    <ArrowLeft className="h-4 w-4 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
                    <Caption className="text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text">
                      PREVIOUS
                    </Caption>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <HeadingMedium className="mb-2 group-hover:text-brand-charcoal_soft_text/80 dark:group-hover:text-brand-rosewater_hover transition-colors">
                  {prevProject.title}
                </HeadingMedium>
                <BodyMedium className="line-clamp-2">{prevProject.subtitle}</BodyMedium>
              </div>
            </div>
          </Link>
        ) : (
          <div className={placeholderClasses}>
            <Caption className="text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
              NO PREVIOUS PROJECT
            </Caption>
          </div>
        )}
      </motion.div>

      {/* Next Project */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {nextProject ? (
          <Link href={`/project/${nextProject.slug}`} className="group block">
            <div className={themedCardClasses}>
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={nextProject.heroImage || "/placeholder.svg?height=270&width=480&query=modern+art+preview"}
                  alt={nextProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal_soft_text/50 via-transparent to-transparent dark:from-brand-night_deep_bg/50"></div>

                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-creme_rose_bg/90 dark:bg-brand-night_deep_bg/90 backdrop-blur-sm rounded-full">
                    <Caption className="text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text">
                      NEXT
                    </Caption>
                    <ArrowRight className="h-4 w-4 text-brand-graphite_medium_text dark:text-brand-moonstone_medium_text" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <HeadingMedium className="mb-2 group-hover:text-brand-charcoal_soft_text/80 dark:group-hover:text-brand-rosewater_hover transition-colors">
                  {nextProject.title}
                </HeadingMedium>
                <BodyMedium className="line-clamp-2">{nextProject.subtitle}</BodyMedium>
              </div>
            </div>
          </Link>
        ) : (
          <div className={placeholderClasses}>
            <Caption className="text-brand-graphite_medium_text/60 dark:text-brand-moonstone_medium_text/60">
              NO NEXT PROJECT
            </Caption>
          </div>
        )}
      </motion.div>
    </div>
  )
}
