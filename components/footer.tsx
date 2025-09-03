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
        {/* Multi-layer gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDE9E3] via-[#F8D7C9] to-[#EEC4B5]" />
        
        {/* Sophisticated depth layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 via-transparent to-[#FEC260]/8" />
        
        {/* Atmospheric radial gradients */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,#FF6B6B_0%,transparent_60%)] opacity-10" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[radial-gradient(circle,#FEC260_0%,transparent_60%)] opacity-15" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[radial-gradient(circle,#FF4DA6_0%,transparent_70%)] opacity-8 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Elegant top border with gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6B6B]/30 to-transparent" />
        
        {/* Subtle bottom glow enhancement */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EEC4B5]/30 via-[#F8D7C9]/15 to-transparent" />
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
                    <div className="space-y-2 relative">
                      {/* Floating glow effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B6B]/10 via-[#FEC260]/15 to-[#FF4DA6]/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                      
                      <span className="relative text-[clamp(2.5rem,4vw,3.5rem)] font-serif font-extralight leading-none tracking-[-0.02em] bg-gradient-to-br from-[#3C3C3C] via-[#FF6B6B] to-[#E28A4A] bg-clip-text text-transparent group-hover:from-[#FF6B6B] group-hover:via-[#FF4DA6] group-hover:to-[#FEC260] transition-all duration-500">
                        silvana.
                      </span>
                      <div className="relative text-[clamp(0.75rem,1vw,0.875rem)] font-sans font-light text-[#BFAEA2] tracking-[0.25em] uppercase group-hover:text-[#FF6B6B]/80 transition-colors duration-300">
                        Experience Architect
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Mission Statement - Enhanced Prominence */}
                <div className="space-y-8">
                  <div className="relative">
                    <h3 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-serif font-extralight leading-[1.25] tracking-[-0.015em] bg-gradient-to-r from-[#3C3C3C] via-[#FF6B6B] to-[#E28A4A] bg-clip-text text-transparent max-w-3xl">
                      {CONTENT_CONFIG.FOOTER.MISSION_STATEMENT}
                    </h3>
                    {/* Subtle accent line */}
                    <div className="absolute -left-2 top-4 w-1 h-16 bg-gradient-to-b from-[#FF6B6B]/40 via-[#FEC260]/30 to-transparent rounded-full" />
                  </div>
                  
                  {/* Enhanced Contact Information */}
                  <div className="pt-6">
                    <motion.a 
                      href="mailto:silvanarestrepo888@gmail.com"
                      className="group inline-flex items-center space-x-5 p-6 rounded-3xl hover:bg-gradient-to-r hover:from-[#FDE9E3] hover:to-[#F8D7C9] transition-all duration-500 border border-transparent hover:border-[#FF6B6B]/20 hover:shadow-[0_20px_40px_rgba(255,107,107,0.1)]"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#FF6B6B]/10 to-[#FEC260]/15 group-hover:from-[#FF6B6B]/20 group-hover:to-[#FEC260]/25 transition-all duration-500">
                        <Mail className="w-6 h-6 text-[#FF6B6B] group-hover:scale-110 transition-transform duration-300" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#FF6B6B]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-sans font-medium tracking-wide text-[#3C3C3C] group-hover:text-[#FF6B6B] transition-colors duration-300">
                          Let's connect
                        </div>
                        <div className="text-[clamp(0.875rem,1.1vw,1rem)] font-sans font-light text-[#BFAEA2] group-hover:text-[#E28A4A] transition-colors duration-300">
                          silvanarestrepo888@gmail.com
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#BFAEA2] opacity-60 group-hover:opacity-100 group-hover:text-[#FF6B6B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </motion.a>
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
                <div className="relative">
                  <h4 className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-semibold text-[#3C3C3C] tracking-[0.2em] uppercase mb-2">
                    Navigate
                  </h4>
                  {/* Accent underline */}
                  <div className="w-12 h-px bg-gradient-to-r from-[#FF6B6B] to-[#FEC260] mb-6" />
                </div>
                
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + (index * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                    >
                      {link.external ? (
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between py-4 px-5 rounded-2xl hover:bg-gradient-to-r hover:from-[#FDE9E3]/80 hover:to-[#F8D7C9]/60 transition-all duration-400 border border-transparent hover:border-[#FF6B6B]/15"
                          whileHover={{ x: 4, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-[clamp(1rem,1.25vw,1.125rem)] font-sans font-light text-[#3C3C3C]/80 group-hover:text-[#FF6B6B] transition-colors duration-300">
                            {link.text}
                          </span>
                          <ExternalLink className="w-4 h-4 text-[#BFAEA2] group-hover:text-[#FF6B6B] group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                        </motion.a>
                      ) : (
                        <motion.div
                          whileHover={{ x: 4, scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link href={link.href} className="group flex items-center justify-between py-4 px-5 rounded-2xl hover:bg-gradient-to-r hover:from-[#FDE9E3]/80 hover:to-[#F8D7C9]/60 transition-all duration-400 border border-transparent hover:border-[#FF6B6B]/15">
                            <span className="text-[clamp(1rem,1.25vw,1.125rem)] font-sans font-light text-[#3C3C3C]/80 group-hover:text-[#FF6B6B] transition-colors duration-300">
                              {link.text}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-[#BFAEA2] group-hover:text-[#FF6B6B] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
                          </Link>
                        </motion.div>
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
                <div className="relative">
                  <h4 className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-semibold text-[#3C3C3C] tracking-[0.2em] uppercase mb-2">
                    Connect
                  </h4>
                  {/* Accent underline */}
                  <div className="w-12 h-px bg-gradient-to-r from-[#FF4DA6] to-[#FEC260] mb-6" />
                </div>
                
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-5 p-5 rounded-3xl hover:bg-gradient-to-r hover:from-[#FDE9E3]/70 hover:to-[#F8D7C9]/50 transition-all duration-500 border border-transparent hover:border-[#FF4DA6]/20 hover:shadow-[0_12px_32px_rgba(255,77,166,0.08)]"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      whileHover={{ x: 6, y: -2, scale: 1.03 }}
                    >
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#FF4DA6]/8 to-[#FEC260]/12 group-hover:from-[#FF4DA6]/15 group-hover:to-[#FEC260]/20 transition-all duration-500">
                        <social.icon className="w-6 h-6 text-[#FF4DA6] group-hover:text-[#FF6B6B] group-hover:scale-110 transition-all duration-300" />
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-[#FF4DA6]/15 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="text-[clamp(1rem,1.25vw,1.125rem)] font-sans font-medium text-[#3C3C3C] group-hover:text-[#FF4DA6] transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-[#BFAEA2] group-hover:text-[#E28A4A] transition-colors duration-300">
                          {social.description}
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#BFAEA2] opacity-60 group-hover:opacity-100 group-hover:text-[#FF4DA6] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sophisticated Divider with Enhanced Visual Interest */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Multi-layer gradient line */}
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF6B6B]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FEC260]/20 to-transparent blur-sm" />
            </div>
            
            {/* Central accent element */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FEC260]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FEC260] blur-md opacity-50" />
              </div>
            </div>
            
            {/* Floating accent dots */}
            <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#FF4DA6]/40" />
            <div className="absolute right-1/3 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#E28A4A]/40" />
          </motion.div>

          {/* Enhanced Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 pt-4"
          >
            <div className="text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-[#BFAEA2] tracking-wide">
              {CONTENT_CONFIG.FOOTER.COPYRIGHT}
            </div>
            
            <motion.div 
              className="flex items-center space-x-3 text-[clamp(0.875rem,1vw,1rem)] font-sans font-light text-[#BFAEA2]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="tracking-wide">Crafted with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Heart className="w-4 h-4 fill-current text-[#FF6B6B]/80" />
              </motion.div>
              <span className="tracking-wide">and precision</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced ambient lighting system */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#EEC4B5]/20 via-[#F8D7C9]/10 to-transparent pointer-events-none" />
      
      {/* Floating ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#FF6B6B]/20"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0 
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/5 w-1 h-1 rounded-full bg-[#FEC260]/30"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3] 
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.2 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#FF4DA6]/25"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.25, 0.75, 0.25] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2.4 
          }}
        />
      </div>
    </footer>
  )
}