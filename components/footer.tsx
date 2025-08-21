"use client"

import { motion } from "framer-motion"
import { PerfectSection } from "@/components/ui/perfect-section"
import { BodyMedium, Overline } from "@/components/typography"
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { EnhancedButton } from "./ui/enhanced-button"
import { CONTENT_CONFIG } from "@/lib/content-config"

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/silvanarestrepo", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/srestrepo888", icon: Github },
]

const navLinks = CONTENT_CONFIG.FOOTER.NAVIGATE.LINKS

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Luxury background with sophisticated patterns */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100/50" />
        
        {/* Sophisticated texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,rgba(15,23,42,0.8)_1px,transparent_0)] bg-[length:32px_32px]" />
        
        {/* Luxury noise pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,transparent_25%,rgba(15,23,42,0.1)_25%,rgba(15,23,42,0.1)_50%,transparent_50%,transparent_75%,rgba(15,23,42,0.1)_75%)] bg-[length:16px_16px]" />
        
        {/* Subtle border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <PerfectSection spacing="spacious" container="content">
        <div className="relative z-10">
          {/* Main footer content with luxury layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
            
            {/* Left: Brand & Mission - Most Prominent */}
            <div className="lg:col-span-5">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                {/* Elegant logo/mission */}
                <div className="space-y-6">
                  <motion.div 
                    className="inline-block"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-4xl font-light text-foreground/90 font-serif tracking-wide">
                      silvana.
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="text-xl font-light text-foreground/80 leading-relaxed max-w-md"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    {CONTENT_CONFIG.FOOTER.MISSION_STATEMENT}
                  </motion.div>
                </div>
                
                {/* Contact information with luxury styling */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 text-foreground/70 hover:text-foreground transition-all duration-300 group">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <a 
                      href="mailto:silvanarestrepo888@gmail.com" 
                      className="text-sm font-light hover:underline underline-offset-4"
                    >
                      silvanarestrepo888@gmail.com
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Middle: Navigation with sophisticated styling */}
            <div className="lg:col-span-3">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <Overline className="text-foreground/60 font-medium tracking-wider text-sm">
                  Navigate
                </Overline>
                
                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div 
                      key={link.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + (index * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                    >
                      <Link href={link.href} passHref>
                        <EnhancedButton 
                          variant="link" 
                          className="p-0 h-auto text-foreground/70 hover:text-foreground transition-all duration-300 hover:translate-x-1 font-normal text-sm group"
                        >
                          <span className="flex items-center space-x-2">
                            <span>{link.text}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                          </span>
                        </EnhancedButton>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Right: Connect & Social with luxury interactions */}
            <div className="lg:col-span-4">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <Overline className="text-foreground/60 font-medium tracking-wider text-sm">
                  Connect
                </Overline>
                
                {/* Social Links with luxury styling */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 rounded-2xl border border-slate-200/50 hover:border-slate-300/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] bg-white/50 hover:bg-white/80 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                      >
                        <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* My Voice Link with luxury styling */}
                  <motion.div 
                    className="pt-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="https://silvana.mmm.page/human-perspective"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 text-foreground/70 hover:text-foreground transition-all duration-300 group p-3 rounded-xl hover:bg-white/50 hover:shadow-sm"
                    >
                      <span className="text-sm font-light">My Voice</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Elegant divider with luxury styling */}
          <motion.div 
            className="mt-24 pt-8 border-t border-slate-200/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div 
                className="text-sm text-foreground/50 font-light"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                {CONTENT_CONFIG.FOOTER.COPYRIGHT}
              </motion.div>
              <motion.div 
                className="text-xs text-foreground/40 font-light tracking-wide"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                Crafted with precision and purpose
              </motion.div>
            </div>
          </motion.div>
        </div>
      </PerfectSection>
    </footer>
  )
}
