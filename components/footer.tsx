// components/footer.tsx
// A clean, refactored footer using the new design system.

import { PerfectSection } from "@/components/ui/perfect-section"
import { BodyMedium, Overline } from "@/components/typography"
import { Github, Linkedin, Twitter } from "lucide-react"
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
    <footer className="border-t border-border/20 bg-gradient-to-b from-background to-background/95">
      <PerfectSection spacing="spacious" container="content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left: Mission Statement - Most Prominent */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <div className="text-2xl font-light text-foreground/90 leading-relaxed">
                {CONTENT_CONFIG.FOOTER.MISSION_STATEMENT}
              </div>
            </div>
          </div>

          {/* Middle: Navigation */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <Overline className="text-foreground/60 font-medium tracking-wider">
                {CONTENT_CONFIG.FOOTER.NAVIGATE.TITLE}
              </Overline>
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.text}>
                    <Link href={link.href} passHref>
                      <EnhancedButton 
                        variant="link" 
                        className="p-0 h-auto text-foreground/70 hover:text-foreground transition-all duration-300 hover:translate-x-1 font-normal"
                      >
                        {link.text}
                      </EnhancedButton>
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Right: Connect */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <Overline className="text-foreground/60 font-medium tracking-wider">
                {CONTENT_CONFIG.FOOTER.CONNECT.TITLE}
              </Overline>
              <div className="space-y-4">
                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-foreground/5"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
                
                {/* My Voice Link */}
                <div>
                  <Link 
                    href="https://silvana.mmm.page/human-perspective"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:underline inline-flex items-center space-x-2"
                  >
                    <span>My Voice</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                
                {/* Email */}
                <div>
                  <a 
                    href="mailto:silvanarestrepo888@gmail.com"
                    className="text-foreground/70 hover:text-foreground transition-colors duration-300 hover:underline"
                  >
                    silvanarestrepo888@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/20 text-center">
          <div className="text-sm text-foreground/50">
            © 2024 • Experience Architect Portfolio
          </div>
        </div>
      </PerfectSection>
    </footer>
  )
}
