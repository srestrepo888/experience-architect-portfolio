"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { CONTENT_CONFIG } from "@/lib/content-config"

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/silvanarestrepo", 
    icon: Linkedin,
  },
  { 
    name: "GitHub", 
    href: "https://github.com/srestrepo888", 
    icon: Github,
  },
]

const navLinks = [
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Experience", href: "#experience" },
  { text: "Services", href: "#services" },
]

export default function FooterRefined() {
  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Compact Professional Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        
        {/* Tagline */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl font-light text-muted-foreground italic max-w-3xl mx-auto">
            "Transforming business vision into human experiences—where strategic design meets operational excellence and technological possibility."
          </p>
        </div>
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Brand & Contact */}
          <div className="space-y-4">
            <Link 
              href="/"
              className="inline-block group"
            >
              <motion.div 
                className="space-y-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl font-light tracking-wide text-foreground">
                  silvana.
                </span>
                <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  Experience Architect
                </div>
              </motion.div>
            </Link>
            
            {/* Direct Contact */}
            <motion.a 
              href="mailto:silvanarestrepo888@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              whileHover={{ x: 2 }}
            >
              <Mail className="w-4 h-4" />
              silvanarestrepo888@gmail.com
            </motion.a>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.text}
                  href={link.href} 
                  className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200 py-1"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </nav>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border bg-background hover:bg-muted hover:border-primary transition-all duration-200"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </motion.a>
                )
              })}
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="#hero"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary-hover transition-colors duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Work Together
              <ArrowUpRight className="w-3 h-3" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Silvana Restrepo. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}