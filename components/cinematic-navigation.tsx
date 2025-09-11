"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { CONTENT_CONFIG } from "@/lib/content-config"
import { NAVIGATION_ITEMS, NAVIGATION_BEHAVIOR, NAVIGATION_A11Y } from "@/lib/navigation-utils"

interface NavItem {
  href: string
  label: string
  description?: string
  external?: boolean
}

const navItems = NAVIGATION_ITEMS

export default function CinematicNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const navRef = useRef<HTMLElement>(null)

  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])
  const navBlur = useTransform(scrollY, [0, 100], [0, 12])
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98])

  // Enhanced scroll tracking with luxury precision
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      NAVIGATION_BEHAVIOR.scrollTracking
    )

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
                    element.scrollIntoView(NAVIGATION_BEHAVIOR.smoothScroll)
        // Update active section immediately for better UX
        setActiveSection(href.slice(1))
      }
    }
    setIsOpen(false)
  }

  // Enhanced keyboard navigation with luxury feedback
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === NAVIGATION_A11Y.keyboard.enter || event.key === NAVIGATION_A11Y.keyboard.space) {
      event.preventDefault()
      handleNavClick(href)
    }
  }

  return (
    <>
      {/* Main Navigation with Luxury Glass Effect */}
      <motion.nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
        style={{ 
          opacity: navOpacity,
          backdropFilter: `blur(${navBlur}px)`,
          scale: navScale,
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            {/* Clean minimal background with rounded corners */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl border border-border/30 rounded-2xl" />
            
            {/* Navigation Content with Clean Spacing */}
            <div className="relative flex items-center justify-between px-6 py-4">
              {/* Clean Logo */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href="https://silvana.mmm.page/human-perspective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div
                    className="text-2xl font-light tracking-wide text-foreground"
                    whileHover={{ color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {CONTENT_CONFIG.NAVIGATION.LOGO.TEXT}
                  </motion.div>

                </Link>
              </motion.div>

              {/* Desktop Navigation - Clean */}
              <div className="hidden lg:flex items-center space-x-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    className="relative"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      onKeyDown={(e) => handleKeyDown(e, item.href)}
                      className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                        activeSection === item.href.slice(1) 
                          ? 'text-primary' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                      
                      {/* Clean active indicator */}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary rounded-full"
                          layoutId="activeIndicator"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ x: '-50%' }}
                        />
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Clean Coral CTA Button */}
              <div className="hidden lg:block">
                <motion.a
                  href="#footer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary-hover"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {CONTENT_CONFIG.NAVIGATION.CTA.TEXT}
                </motion.a>
              </div>

              {/* Clean Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-lg border border-border bg-background"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Clean Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Simple backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile menu content */}
            <motion.div
              className="absolute top-24 right-4 left-4 p-6 bg-background border border-border rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-6">
                {/* Mobile navigation items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: index * 0.05
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        activeSection === item.href.slice(1) 
                          ? 'text-primary bg-muted' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                      tabIndex={0}
                      role="button"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: navItems.length * 0.05
                  }}
                  className="pt-4"
                >
                  <motion.a
                    href="#footer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary-hover"
                    onClick={() => setIsOpen(false)}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                  >
                    {CONTENT_CONFIG.NAVIGATION.CTA.TEXT}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}