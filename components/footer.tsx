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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "My Voice", href: "https://silvana.mmm.page/human-perspective" },
  { name: "Contact", href: "/#contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <PerfectSection spacing="spacious" container="content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Most Important - Your Mission */}
          <div className="md:col-span-1">
            <div className="relative">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 rounded-lg" />
              <div className="relative">
                <BodyMedium className="text-lg leading-relaxed text-foreground font-medium">
                  {CONTENT_CONFIG.FOOTER.MISSION_STATEMENT}
                </BodyMedium>
              </div>
            </div>
          </div>

          {/* Middle: Enhanced Navigate */}
          <div className="md:col-span-1">
            <Overline className="mb-4 text-foreground/80">{CONTENT_CONFIG.FOOTER.NAVIGATE.TITLE}</Overline>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} passHref>
                    <EnhancedButton 
                      variant="link" 
                      className="p-0 h-auto text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1"
                    >
                      {link.name}
                    </EnhancedButton>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Enhanced Connect */}
          <div className="md:col-span-1">
            <Overline className="mb-4 text-foreground/80">{CONTENT_CONFIG.FOOTER.CONNECT.TITLE}</Overline>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-6 h-6" />
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
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:underline"
                >
                  My Voice
                </Link>
              </div>
              
              {/* Email */}
              <div>
                <a 
                  href="mailto:srestrepo2@me.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:underline"
                >
                  srestrepo2@me.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <BodyMedium className="text-muted-foreground">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </BodyMedium>
        </div>
      </PerfectSection>
    </footer>
  )
}
