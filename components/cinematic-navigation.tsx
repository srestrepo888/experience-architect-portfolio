"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { CONTENT_CONFIG } from "@/lib/content-config"

interface NavItem {
  href: string
  label: string
  description?: string
  external?: boolean
}

const navItems: NavItem[] = CONTENT_CONFIG.NAVIGATION.ITEMS

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
      { 
        threshold: 0.3,
        rootMargin: "-20% 0px -60% 0px"
      }
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
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        // Update active section immediately for better UX
        setActiveSection(href.slice(1))
      }
    }
    setIsOpen(false)
  }

  // Enhanced keyboard navigation with luxury feedback
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
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
            {/* Luxury background with sophisticated glass effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/90 to-background/85 backdrop-blur-xl rounded-3xl border border-slate-200/20 shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            
            {/* Navigation Content with Luxury Spacing */}
            <div className="relative flex items-center justify-between px-8 py-6">
              {/* Logo with Luxury Typography */}
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  href="https://silvana.mmm.page/human-perspective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div
                    className="text-2xl font-light text-foreground/90 font-serif tracking-wide"
                    whileHover={{ color: "rgb(15 23 42)" }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {CONTENT_CONFIG.NAVIGATION.LOGO.TEXT}
                  </motion.div>
                  <motion.div
                    className="text-xs text-foreground/60 font-light tracking-widest uppercase"
                    whileHover={{ color: "rgb(71 85 105)" }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {CONTENT_CONFIG.NAVIGATION.LOGO.SUBTITLE}
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Navigation with Luxury Interactions */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    className="relative"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      onKeyDown={(e) => handleKeyDown(e, item.href)}
                      className={cn(
                        "relative px-4 py-2 text-sm font-light tracking-wide transition-all duration-300",
                        activeSection === item.href.slice(1)
                          ? "text-foreground"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                      tabIndex={0}
                      role="button"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                      
                      {/* Luxury active indicator */}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground/80 rounded-full"
                          layoutId="activeIndicator"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                      
                      {/* Luxury hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-foreground/5 rounded-lg -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button with Luxury Styling */}
              <div className="hidden lg:block">
                <EnhancedButton
                  href="#footer"
                  variant="luxury"
                  size="md"
                  icon="arrow"
                  className="shadow-[0_8px_32px_rgba(15,23,42,0.15)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.25)]"
                >
                  {CONTENT_CONFIG.NAVIGATION.CTA.TEXT}
                </EnhancedButton>
              </div>

              {/* Mobile Menu Button with Luxury Animation */}
              <motion.button
                className="lg:hidden p-2 rounded-xl border border-slate-200/30 bg-background/50 backdrop-blur-sm"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(248, 250, 252, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <X className="w-5 h-5 text-foreground/80" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Menu className="w-5 h-5 text-foreground/80" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu with Luxury Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Luxury backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile menu content */}
            <motion.div
              className="absolute top-24 right-4 left-4 bg-background/95 backdrop-blur-xl rounded-3xl border border-slate-200/20 shadow-[0_25px_50px_rgba(15,23,42,0.15)] p-8"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-6">
                {/* Mobile navigation items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full text-left px-4 py-3 text-base font-light tracking-wide rounded-xl transition-all duration-300",
                        activeSection === item.href.slice(1)
                          ? "bg-foreground/5 text-foreground border border-foreground/10"
                          : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                      )}
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
                    duration: 0.3, 
                    delay: navItems.length * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="pt-4"
                >
                  <EnhancedButton
                    href="#footer"
                    variant="luxury"
                    size="lg"
                    width="full"
                    icon="arrow"
                    onClick={() => setIsOpen(false)}
                  >
                    {CONTENT_CONFIG.NAVIGATION.CTA.TEXT}
                  </EnhancedButton>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}