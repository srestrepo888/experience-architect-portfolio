"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { EnhancedButton } from "@/components/ui/enhanced-button"
import { BodyMedium, Caption, Overline } from "@/components/typography"
import { CONTENT_CONFIG } from "@/lib/content-config"
import { Linkedin, Mail } from "lucide-react"

export default function SophisticatedFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-primary/5 backdrop-blur-xl">
      {/* SOPHISTICATED BACKGROUND TREATMENT */}
      <div className="absolute inset-0">
        {/* Primary gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/5 to-primary/10" />
        
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_2px_2px,rgba(15,23,42,1)_1px,transparent_0)] bg-[length:32px_32px]" />
        
        {/* Sophisticated top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand section */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <div className="text-3xl font-serif font-light text-slate-900 mb-3">
                    silvana.
                  </div>
                  <BodyMedium className="text-slate-700 leading-relaxed max-w-md">
                    {CONTENT_CONFIG.FOOTER.MISSION_STATEMENT}
                  </BodyMedium>
                </div>

                <div className="pt-2">
                  <EnhancedButton
                    href="mailto:silvanarestrepo888@gmail.com"
                    variant="secondary"
                    size="md"
                    icon="arrow"
                    className="text-slate-900 border-slate-300 hover:border-slate-400"
                  >
                    Let's Connect
                  </EnhancedButton>
                </div>
              </motion.div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Overline className="text-slate-600 tracking-wider">
                  Navigate
                </Overline>
                
                <div className="grid grid-cols-2 gap-4">
                  {CONTENT_CONFIG.FOOTER.NAVIGATE.LINKS.map((link, index) => (
                    <motion.div
                      key={link.text}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + (index * 0.05), ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="inline-flex text-slate-700 hover:text-slate-900 transition-colors duration-300 text-sm"
                      >
                        {link.text}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact information */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Overline className="text-slate-600 tracking-wider">
                  Connect
                </Overline>
                
                <div className="space-y-4">
                  <a
                    href="mailto:silvanarestrepo888@gmail.com"
                    className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 transition-colors duration-300 group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <Caption>Email</Caption>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/silvanarestrepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 transition-colors duration-300 group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <Caption>LinkedIn</Caption>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Caption className="text-slate-500">
                  {CONTENT_CONFIG.FOOTER.COPYRIGHT}
                </Caption>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Caption className="text-slate-400">
                  Crafted with precision
                </Caption>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
