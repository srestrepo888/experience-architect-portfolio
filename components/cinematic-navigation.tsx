"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { EnhancedButton } from "@/components/ui/enhanced-button"

interface NavItem {
  href: string
  label: string
  description?: string
  external?: boolean
}

const navItems: NavItem[] = [
  {
    href: "#hero",
    label: "Home",
    description: "Return to the beginning",
  },
  {
    href: "#about", 
    label: "About",
    description: "My story and approach",
  },
  {
    href: "#projects",
    label: "Projects", 
    description: "Featured work and case studies",
  },
  {
    href: "#experience",
    label: "Experience",
    description: "Professional journey",
  },
  {
    href: "#services",
    label: "Services",
    description: "How I can help",
  },
  {
    href: "#contact",
    label: "Contact",
    description: "Let's connect",
  },
]

export default function CinematicNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const navRef = useRef<HTMLElement>(null)

  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])
  const navBlur = useTransform(scrollY, [0, 100], [0, 8])

  // Enhanced scroll tracking
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

  // Enhanced keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleNavClick(href)
    }
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4"
        style={{ 
          opacity: navOpacity,
          backdropFilter: `blur(${navBlur}px)`
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative">
            {/* Background with sophisticated glass effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/90 to-background/80 backdrop-blur-md rounded-2xl border border-border/20" />
            
            {/* Navigation Content */}
            <div className="relative flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="#hero"
                  onClick={() => handleNavClick('#hero')}
                  className="text-xl font-serif font-light text-foreground hover:text-foreground/80 transition-colors duration-300"
                >
                  Silvana Restrepo
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1 + (index * 0.05),
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      onKeyDown={(e) => handleKeyDown(e, item.href)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Navigate to ${item.label} section`}
                      className={cn(
                        "relative text-sm font-medium transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1",
                        activeSection === item.href.slice(1)
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                      
                      {/* Active indicator */}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-px bg-foreground"
                        initial={{ width: 0 }}
                        animate={{ 
                          width: activeSection === item.href.slice(1) ? "100%" : 0 
                        }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                      
                      {/* Hover indicator */}
                      <motion.div
                        className="absolute -bottom-1 left-0 h-px bg-muted-foreground"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:flex">
                <EnhancedButton
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  variant="secondary"
                  size="sm"
                  className="backdrop-blur-sm bg-foreground/5 hover:bg-foreground/10 border border-border/30"
                >
                  Let's Connect
                </EnhancedButton>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 text-foreground hover:text-muted-foreground transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
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
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative flex flex-col justify-center items-center h-full px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="space-y-8 text-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      onKeyDown={(e) => handleKeyDown(e, item.href)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Navigate to ${item.label} section`}
                      className="block group focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
                    >
                      <span className="text-3xl font-serif font-light text-foreground hover:text-muted-foreground transition-colors duration-300">
                        {item.label}
                      </span>
                      {item.description && (
                        <span className="block mt-1 text-sm text-muted-foreground group-hover:text-muted-foreground/70 transition-colors duration-300">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.4,
                    delay: navItems.length * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className="pt-8"
                >
                  <EnhancedButton
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#contact')
                    }}
                    variant="secondary"
                    size="lg"
                    className="backdrop-blur-sm bg-foreground/10 hover:bg-foreground/20"
                  >
                    Let's Connect
                    <ArrowUpRight className="w-4 h-4 ml-2" />
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