"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
  current: boolean
}

interface BreadcrumbNavigationProps {
  className?: string
}

export function BreadcrumbNavigation({ className }: BreadcrumbNavigationProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateBreadcrumbs = () => {
      const sections = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "services", label: "Services" },
        { id: "contact", label: "Contact" }
      ]

      let currentSection = "hero"
      
      // Find current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            currentSection = sections[i].id
            break
          }
        }
      }

      // Build breadcrumb trail
      const currentIndex = sections.findIndex(s => s.id === currentSection)
      const breadcrumbItems: BreadcrumbItem[] = []
      
      // Always include Home
      breadcrumbItems.push({
        label: "Home",
        href: "#hero",
        current: currentSection === "hero"
      })

      // Add current section if not Home
      if (currentSection !== "hero") {
        breadcrumbItems.push({
          label: sections[currentIndex].label,
          href: `#${currentSection}`,
          current: true
        })
      }

      setBreadcrumbs(breadcrumbItems)
      setIsVisible(currentSection !== "hero")
    }

    const handleScroll = () => {
      updateBreadcrumbs()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    updateBreadcrumbs()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-24 left-1/2 transform -translate-x-1/2 z-40 px-4 py-2 rounded-full backdrop-blur-md bg-background/80 border border-border/30 shadow-lg",
          className
        )}
        aria-label="Breadcrumb navigation"
      >
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              <Link
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={cn(
                  "flex items-center transition-colors duration-200 hover:text-foreground",
                  item.current 
                    ? "text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground/80"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {index === 0 && <Home className="w-4 h-4 mr-1" />}
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </motion.nav>
    </AnimatePresence>
  )
}
