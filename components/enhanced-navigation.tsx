"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { EnhancedButton } from "@/components/ui/enhanced-button"

interface NavItem {
  href: string
  label: string
  description?: string
  external?: boolean
  children?: NavItem[]
}

interface EnhancedNavigationProps {
  logo?: string
  logoHref?: string
  navItems?: NavItem[]
  ctaButton?: {
    label: string
    href: string
    external?: boolean
  }
  className?: string
}

const defaultNavItems: NavItem[] = [
  {
    href: "#about",
    label: "About",
    description: "Learn about my background and approach",
  },
  {
    href: "#projects",
    label: "Projects",
    description: "Explore my featured work and case studies",
  },
  {
    href: "#experience",
    label: "Experience",
    description: "Professional journey and expertise",
  },
  {
    href: "#services",
    label: "Services",
    description: "How I can help transform your business",
  },
  {
    href: "#contact",
    label: "Contact",
    description: "Let's discuss your next project",
  },
]

export default function EnhancedNavigation({
  logo = "silvana.",
  logoHref = "/",
  navItems = defaultNavItems,
  ctaButton = {
    label: "Get In Touch",
    href: "#contact",
  },
  className,
}: EnhancedNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling for anchor links
  const handleNavClick = (href: string, external?: boolean) => {
    if (!external && href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      <motion.nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out",
          isScrolled ? "backdrop-perfect shadow-soft border-b border-border" : "bg-background/10 backdrop-blur-sm",
          className,
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(150%)' : 'blur(4px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Enhanced with Gradients */}
            <Link
              href="https://silvana.mmm.page/human-perspective"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <motion.div
                className="font-serif text-2xl md:text-3xl font-light bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent transition-all duration-500 group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-purple-600 dark:group-hover:from-purple-300 dark:group-hover:via-pink-300 dark:group-hover:to-purple-300 tracking-[-0.03em]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))',
                }}
              >
                {logo}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.label} 
                  className="relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative py-3 px-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 focus-visible:rounded-lg rounded-lg hover:bg-stone-50/60 dark:hover:bg-stone-800/40"
                    onClick={() => handleNavClick(item.href, item.external)}
                    {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <motion.span 
                      className="font-sans text-[15px] font-medium tracking-[-0.01em] leading-none flex items-center gap-2"
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.15 }}
                    >
                      {item.label}
                      {item.external && <ArrowUpRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                    </motion.span>
                    <motion.div
                      className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: "left" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <EnhancedButton
                  href={ctaButton.href}
                  external={ctaButton.external}
                  variant="primary"
                  size="md"
                  icon="arrow"
                  className="font-sans text-sm font-medium tracking-[0.01em]"
                >
                  {ctaButton.label}
                </EnhancedButton>
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                className="lg:hidden p-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  animate={{ 
                    rotate: isMobileMenuOpen ? 180 : 0,
                    scale: isMobileMenuOpen ? 0.9 : 1
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isMobileMenuOpen ? "close" : "open"}
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%", scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: "100%", scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-stone-50/90 via-amber-50/95 to-rose-50/90 dark:bg-gradient-to-b dark:from-stone-950/90 dark:via-amber-950/95 dark:to-rose-950/90 backdrop-blur-xl shadow-[0_32px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)] z-50 lg:hidden overflow-y-auto border-l border-stone-200/40 dark:border-stone-700/30"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <motion.div 
                    className="font-serif text-2xl font-light bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent tracking-[-0.03em]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {logo}
                  </motion.div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-all duration-300"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <nav className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 30, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.3,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <motion.div
                        className="group/mobile block p-5 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-all duration-300 border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/60"
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between"
                          onClick={() => handleNavClick(item.href, item.external)}
                          {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          <div>
                            <div className="font-sans text-[16px] font-semibold tracking-[-0.02em] group-hover/mobile:text-slate-800 dark:group-hover/mobile:text-slate-100 transition-colors duration-300">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="font-sans text-[13px] font-normal text-slate-500 dark:text-slate-400 mt-2 leading-relaxed tracking-[-0.01em] group-hover/mobile:text-slate-600 dark:group-hover/mobile:text-slate-300 transition-colors duration-300">
                                {item.description}
                              </div>
                            )}
                          </div>
                          {item.external && (
                            <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover/mobile:text-slate-600 dark:group-hover/mobile:text-slate-400 transition-all duration-300 group-hover/mobile:translate-x-1 group-hover/mobile:-translate-y-1" />
                          )}
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-700/60"
                >
                  <EnhancedButton
                    href={ctaButton.href}
                    external={ctaButton.external}
                    variant="primary"
                    size="lg"
                    width="full"
                    icon="arrow"
                  >
                    {ctaButton.label}
                  </EnhancedButton>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}