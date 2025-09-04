"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { CONTENT_CONFIG } from "@/lib/content-config"
import { COLOR_COMBINATIONS } from "@/lib/color-utils"
import { NAVIGATION_CONFIG, NAVIGATION_ITEMS, NAVIGATION_BEHAVIOR, NAVIGATION_A11Y } from "@/lib/navigation-utils"
import { ANIMATION_PRESETS, HOVER_ANIMATIONS, EASING_FUNCTIONS } from "@/lib/animation-system"

interface NavItem {
  href: string
  label: string
  description?: string
  external?: boolean
}

const navItems: NavItem[] = NAVIGATION_ITEMS

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
            {/* Luxury background with sophisticated glass effect */}
            <motion.div 
              className="absolute inset-0"
              style={NAVIGATION_CONFIG.styles.glass}
                          {...ANIMATION_PRESETS.scaleIn}
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
                    className="text-2xl font-light font-serif tracking-wide"
                    style={{ color: COLOR_COMBINATIONS.text.primary + "e6" }}
                    whileHover={{ color: "rgb(15 23 42)" }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {CONTENT_CONFIG.NAVIGATION.LOGO.TEXT}
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
                                          className="relative px-4 py-2 text-sm font-light tracking-wide transition-all duration-300"
                    style={activeSection === item.href.slice(1) 
                      ? NAVIGATION_CONFIG.states.active 
                      : NAVIGATION_CONFIG.states.default}
                      tabIndex={0}
                      role="button"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                      
                      {/* Organic active indicator */}
                      {activeSection === item.href.slice(1) && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 w-1 h-1 bg-foreground/60 rounded-full"
                          layoutId="activeIndicator"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          style={{ x: '-50%' }}
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

              {/* CTA Button with Luxury Styling - MAXIMUM VISIBILITY */}
              <div className="hidden lg:block">
                <EnhancedButton
                  href="#footer"
                  variant="primary"
                  size="md"
                  icon="arrow"
                  className="bg-primary text-white hover:bg-primary/90 shadow-[0_12px_48px_rgba(15,23,42,0.25)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.4)] border-2 border-white/10 hover:border-white/20 relative z-50"
                >
                  {CONTENT_CONFIG.NAVIGATION.CTA.TEXT}
                </EnhancedButton>
              </div>

              {/* Mobile Menu Button with Luxury Animation */}
              <motion.button
                className="lg:hidden p-2 rounded-xl border border-slate-200/30 bg-background/50 backdrop-blur-sm"
                onClick={() => setIsOpen(!isOpen)}
                {...HOVER_ANIMATIONS.scale}
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
                      <X className="w-5 h-5" style={{ color: COLOR_COMBINATIONS.text.secondary }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Menu className="w-5 h-5" style={{ color: COLOR_COMBINATIONS.text.secondary }} />
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
              className="absolute inset-0 backdrop-blur-sm"
              style={{ backgroundColor: COLOR_COMBINATIONS.backgrounds.tertiary + "33" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile menu content */}
            <motion.div
              className="absolute top-24 right-4 left-4 p-8"
              style={NAVIGATION_CONFIG.styles.mobile}
              {...ANIMATION_PRESETS.slideDown}
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
                      className="w-full text-left px-4 py-3 text-base font-light tracking-wide rounded-xl transition-all duration-300"
                      style={activeSection === item.href.slice(1) 
                        ? NAVIGATION_CONFIG.states.active 
                        : NAVIGATION_CONFIG.states.default}
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