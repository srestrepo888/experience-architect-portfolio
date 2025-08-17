"use client"
// components/navigation.tsx
// The one and only navigation component for the entire site.

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { EnhancedButton } from "./ui/enhanced-button"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Services", href: "/#services" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 shadow-md backdrop-blur-sm" : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="text-xl font-semibold tracking-wider text-foreground">
            Silvana
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <EnhancedButton variant="link" className="text-muted-foreground hover:text-foreground">
                  {link.name}
                </EnhancedButton>
              </Link>
            ))}
            <EnhancedButton href="/#contact" variant="primary" size="md">
              Contact
            </EnhancedButton>
          </nav>
          <div className="md:hidden">
            <EnhancedButton onClick={toggleMenu} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </EnhancedButton>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-lg"
          >
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
              <span className="text-xl font-semibold tracking-wider text-foreground">Silvana</span>
              <EnhancedButton onClick={toggleMenu} variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </EnhancedButton>
            </div>
            <nav className="mt-12 flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} passHref>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + navLinks.indexOf(link) * 0.1 }}
                    onClick={toggleMenu}
                    className="text-2xl text-foreground"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <EnhancedButton href="/#contact" variant="primary" size="lg" onClick={toggleMenu}>
                  Contact
                </EnhancedButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
