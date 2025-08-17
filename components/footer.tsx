// components/footer.tsx
// A clean, refactored footer using the new design system.

import { PerfectSection } from "@/components/ui/perfect-section"
import { BodyMedium, Overline } from "@/components/typography"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { EnhancedButton } from "./ui/enhanced-button"

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
]

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <PerfectSection spacing="spacious" container="content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <Overline className="mb-4">Silvana Restrepo</Overline>
            <BodyMedium className="text-muted-foreground">
              Architecting experiences that connect strategy with soul.
            </BodyMedium>
          </div>

          <div className="md:col-span-1">
            <Overline className="mb-4">Navigate</Overline>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} passHref>
                    <EnhancedButton variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
                      {link.name}
                    </EnhancedButton>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <Overline className="mb-4">Connect</Overline>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <BodyMedium className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Silvana Restrepo. All Rights Reserved.
          </BodyMedium>
        </div>
      </PerfectSection>
    </footer>
  )
}
