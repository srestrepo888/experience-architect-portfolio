"use client"

import React from "react"
import { motion } from "framer-motion"
import { BulletproofNavigationButton } from "./bulletproof-navigation-button"
import { getAllProjects, type Project } from "@/lib/projects"

interface ProjectNavigationProps {
  currentProject: Project
}

export function ProjectNavigation({ currentProject }: ProjectNavigationProps) {
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex(p => p.slug === currentProject.slug)
  
  const previousProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1]
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0]

  console.log('🚀 ProjectNavigation:', { 
    currentProject: currentProject.title, 
    currentIndex, 
    previousProject: previousProject?.title, 
    nextProject: nextProject?.title 
  })

  return (
    <motion.div 
      className="relative z-[9999] pointer-events-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Previous Project */}
        <div className="order-2 md:order-1">
          {previousProject && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative z-[9999] pointer-events-auto"
            >
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-500 mb-2">Previous Project</p>
                <BulletproofNavigationButton
                  href={`/project/${previousProject.slug}`}
                  variant="outline"
                  size="md"
                  icon="left"
                  className="w-full md:w-auto"
                >
                  {previousProject.title}
                </BulletproofNavigationButton>
              </div>
            </motion.div>
          )}
        </div>

        {/* All Projects / Home */}
        <div className="order-1 md:order-2 text-center">
          <BulletproofNavigationButton
            href="/projects"
            variant="ghost"
            size="lg"
            icon="home"
            className="w-full md:w-auto"
          >
            All Projects
          </BulletproofNavigationButton>
        </div>

        {/* Next Project */}
        <div className="order-3">
          {nextProject && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative z-[9999] pointer-events-auto"
            >
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-500 mb-2">Next Project</p>
                <BulletproofNavigationButton
                  href={`/project/${nextProject.slug}`}
                  variant="primary"
                  size="md"
                  icon="right"
                  className="w-full md:w-auto"
                >
                  {nextProject.title}
                </BulletproofNavigationButton>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Counter */}
      <motion.div 
        className="text-center mt-8 relative z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-sm text-gray-500">
          Project {currentIndex + 1} of {allProjects.length}
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 mt-2 mx-auto max-w-xs">
          <motion.div
            className="bg-gray-900 h-1 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / allProjects.length) * 100}%` }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}