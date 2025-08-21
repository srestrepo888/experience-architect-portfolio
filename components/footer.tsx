// components/footer.tsx
// A completely redesigned, elegant footer for the Experience Architect portfolio.

import { PerfectSection } from "@/components/ui/perfect-section"
import { BodyMedium, Overline } from "@/components/typography"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
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
      {/* Elegant background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.6)_1px,transparent_0)] bg-[length:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.02] to-transparent" />
      </div>

      <PerfectSection spacing="spacious" container="content">
        <div className="relative z-10">
          {/* Main footer content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left: Mission Statement - Most Prominent */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {/* Elegant logo/mission */}
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="text-3xl font-light text-foreground/90 font-serif">
                      silvana.
                    </span>
                  </div>
                  <div className="text-xl font-light text-foreground/80 leading-relaxed max-w-md">
                    {CONTENT_CONFIG.FOOTER.MISSION_STATEMENT}
                  </div>
                </div>
                
                {/* Contact information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-foreground/70 hover:text-foreground transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:silvanarestrepo888@gmail.com" className="text-sm">
                      silvanarestrepo888@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Navigation */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                <Overline className="text-foreground/60 font-medium tracking-wider text-sm">
                  Navigate
                </Overline>
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.text}>
                      <Link href={link.href} passHref>
                        <EnhancedButton 
                          variant="link" 
                          className="p-0 h-auto text-foreground/70 hover:text-foreground transition-all duration-300 hover:translate-x-1 font-normal text-sm"
                        >
                          {link.text}
                        </EnhancedButton>
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right: Connect & Social */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <Overline className="text-foreground/60 font-medium tracking-wider text-sm">
                  Connect
                </Overline>
                
                {/* Social Links */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-3 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-300" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    ))}
                  </div>
                  
                  {/* My Voice Link */}
                  <div className="pt-2">
                    <Link 
                      href="https://silvana.mmm.page/human-perspective"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-all duration-300 group"
                    >
                      <span className="text-sm">My Voice</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant divider */}
          <div className="mt-20 pt-8 border-t border-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-foreground/50">
                © 2024 • Experience Architect Portfolio
              </div>
              <div className="text-xs text-foreground/40">
                Crafted with precision and purpose
              </div>
            </div>
          </div>
        </div>
      </PerfectSection>
    </footer>
  )
}
