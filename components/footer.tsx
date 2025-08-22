"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Heart } from "lucide-react"
import Link from "next/link"
import { CONTENT_CONFIG } from "@/lib/content-config"

const socialLinks = [
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/silvanarestrepo", 
    icon: Linkedin,
    description: "Professional network"
  },
  { 
    name: "GitHub", 
    href: "https://github.com/srestrepo888", 
    icon: Github,
    description: "Code repositories"
  },
]

const navLinks = [
  { text: "About", href: "#about" },
  { text: "Projects", href: "#projects" },
  { text: "Experience", href: "#experience" },
  { text: "Services", href: "#services" },
  { text: "Contact", href: "#footer" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Sophisticated Background System */}
      <div className="absolute inset-0">
        {/* Primary elegant gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(33,15%,97%)] via-[hsl(15,12%,96%)] to-[hsl(33,15%,95%)]" />
        
        {/* Subtle animated atmosphere */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(33,15%,85%)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(15,12%,85%)_0%,transparent_50%)]" />
        </div>

        {/* Elegant border accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sophisticated/20 to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Primary Footer Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
            
            {/* Brand & Mission Statement */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                {/* Elegant Logo */}
                <div className="mb-8">
                  <Link 
                    href="https://silvana.mmm.page/human-perspective"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block"
                  >
                    <div className="space-y-1">
                      <span className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif font-extralight text-sophisticated leading-none tracking-[-0.02em] group-hover:text-sophisticated/80 transition-colors duration-300">
                        silvana.
                      </span>
                      <div className="text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-light text-sophisticated/60 tracking-[0.2em] uppercase">
                        My Voice
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Mission Statement - Prominent */}
                <div className="space-y-6">
                  <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] font-serif font-extralight leading-[1.3] tracking-[-0.015em] text-sophisticated max-w-2xl">
                    {CONTENT_CONFIG.FOOTER.MISSION_STATEMENT}
                  </h3>
                  
                  {/* Contact Information */}
                  <div className="pt-4">
                    <a 
                      href="mailto:silvanarestrepo888@gmail.com"
                      className="group inline-flex items-center space-x-4 text-sophisticated/70 hover:text-sophisticated transition-all duration-300 p-4 rounded-2xl hover:bg-sophisticated/5"
                    >
                      <div className="p-3 rounded-xl bg-sophisticated/10 group-hover:bg-sophisticated/15 transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[clamp(1rem,1.25vw,1.125rem)] font-sans font-light tracking-wide">
                          Let's connect
                        </div>
                        <div className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-sophisticated/60">
                          silvanarestrepo888@gmail.com
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation & Social */}
            <div className="space-y-12">
              
              {/* Navigation Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-medium text-sophisticated/60 tracking-[0.15em] uppercase">
                  Navigate
                </h4>
                
                <nav className="space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + (index * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-sophisticated/5 transition-all duration-300"
                        >
                          <span className="text-[clamp(1rem,1.25vw,1.125rem)] font-sans font-light text-sophisticated/80 group-hover:text-sophisticated transition-colors duration-300">
                            {link.text}
                          </span>
                          <ExternalLink className="w-4 h-4 text-sophisticated/40 group-hover:text-sophisticated/70 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                      ) : (
                        <Link href={link.href} className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-sophisticated/5 transition-all duration-300">
                          <span className="text-[clamp(1rem,1.25vw,1.125rem)] font-sans font-light text-sophisticated/80 group-hover:text-sophisticated transition-colors duration-300">
                            {link.text}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-sophisticated/40 group-hover:text-sophisticated/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-medium text-sophisticated/60 tracking-[0.15em] uppercase">
                  Connect
                </h4>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-sophisticated/5 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 rounded-xl bg-sophisticated/10 group-hover:bg-sophisticated/15 transition-colors duration-300">
                        <social.icon className="w-5 h-5 text-sophisticated/70 group-hover:text-sophisticated transition-colors duration-300" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="text-[clamp(1rem,1.25vw,1.125rem)] font-sans font-light text-sophisticated/80 group-hover:text-sophisticated transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-sophisticated/50">
                          {social.description}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-sophisticated/40 group-hover:text-sophisticated/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Elegant Divider */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-sophisticated/20 to-transparent" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sophisticated/30" />
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <div className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-sophisticated/50">
              {CONTENT_CONFIG.FOOTER.COPYRIGHT}
            </div>
            
            <div className="flex items-center space-x-2 text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-sophisticated/40">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 fill-current text-sophisticated/60" />
              <span>and precision</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sophisticated/5 to-transparent pointer-events-none" />
    </footer>
  )
}