/**
 * CONTENT CONFIGURATION
 * 
 * This file contains ALL authorized copy for the Experience Architect Portfolio.
 * NO text should be added to components without being documented here first.
 * 
 * IMPORTANT: This is the single source of truth for all portfolio content.
 * All components must reference this configuration to ensure consistency.
 */

export const CONTENT_CONFIG = {
  // ============================================================================
  // HERO SECTION
  // ============================================================================
  HERO: {
    MAIN_TITLE: "EXPERIENCE",
    SUBTITLE: "ARCHITECT",
    TAGLINE: "Architecting experiences that connect strategy with soul",
    SCROLL_INDICATOR: {
      ARIA_LABEL: "Scroll down to explore the portfolio"
    }
  },

  // ============================================================================
  // ABOUT SECTION
  // ============================================================================
  ABOUT: {
    SECTION_ID: "about",
    SECTION_NUMBER: "01",
    SECTION_TITLE: "About",
    HEADING: "Personal Story",
    DESCRIPTION: "I am an Experience Architect who believes in the power of human-centered design to transform businesses and create meaningful connections. My approach combines strategic thinking with deep empathy for user needs.",
    PERSONAL_QUOTE: {
      TEXT: "The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire.",
      ATTRIBUTION: "Silvana"
    },
    PORTRAIT: {
      ALT_TEXT: "A portrait of Silvana Restrepo with a transparent background.",
      SRC: "/silvana-portrait-transparent.png"
    },
    CTA: {
      TEXT: "Download CV",
      FILE_PATH: "/silvana-restrepo-cv.pdf",
      ARIA_LABEL: "Download Silvana Restrepo's CV"
    }
  },

  // ============================================================================
  // PROJECTS SECTION
  // ============================================================================
  PROJECTS: {
    SECTION_ID: "projects",
    SECTION_NUMBER: "02",
    SECTION_TITLE: "Selected Works",
    HEADING: "Featured Projects",
    DESCRIPTION: "A curated selection of strategic design projects that demonstrate my commitment to human-centered design, strategic thinking, and measurable business impact.",
    ARIA_LABEL: "Projects showcase section"
  },

  // ============================================================================
  // EXPERIENCE SECTION
  // ============================================================================
  EXPERIENCE: {
    SECTION_ID: "experience",
    SECTION_NUMBER: "03",
    SECTION_TITLE: "Journey",
    HEADING: "Professional Experience",
    DESCRIPTION: "With over a decade of experience across diverse industries, I've developed a unique perspective on design and strategy. My career journey has equipped me with the skills to navigate complex challenges and deliver impactful solutions.",
    ARIA_LABEL: "Professional experience timeline"
  },

  // ============================================================================
  // SERVICES SECTION
  // ============================================================================
  SERVICES: {
    SECTION_ID: "services",
    SECTION_NUMBER: "04",
    SECTION_TITLE: "Services",
    HEADING: "Design Excellence",
    DESCRIPTION: "Strategic design solutions that address complex business challenges while maintaining focus on human needs and business objectives.",
    ARIA_LABEL: "Services and capabilities section"
  },

  // ============================================================================
  // FOOTER SECTION
  // ============================================================================
  FOOTER: {
    SECTION_ID: "footer",
    MISSION_STATEMENT: "Architecting experiences that connect strategy with soul",
    NAVIGATE: {
      TITLE: "Navigate",
      LINKS: [
        { text: "Home", href: "#hero" },
        { text: "About", href: "#about" },
        { text: "Projects", href: "#projects" },
        { text: "Experience", href: "#experience" },
        { text: "Services", href: "#services" }
      ]
    },
    CONNECT: {
      TITLE: "Connect",
      SOCIAL_LINKS: [
        { platform: "LinkedIn", href: "https://linkedin.com/in/silvanarestrepo", icon: "linkedin" },
        { platform: "GitHub", href: "https://github.com/srestrepo888", icon: "github" }
      ],
      DIRECT_LINKS: [
        { text: "My Voice", href: "https://silvana.mmm.page/human-perspective" },
        { text: "Email", href: "mailto:srestrepo2@me.com" }
      ]
    },
    COPYRIGHT: "© 2025. All rights reserved."
  },

  // ============================================================================
  // NAVIGATION
  // ============================================================================
  NAVIGATION: {
    LOGO: {
      TEXT: "Silvana Restrepo",
      HREF: "https://silvana.mmm.page/human-perspective",
      SUBTITLE: "My Voice",
      ARIA_LABEL: "Go to My Voice manifesto"
    },
    ITEMS: [
      { href: "#hero", label: "Home", description: "Return to the beginning" },
      { href: "#about", label: "About", description: "My story and approach" },
      { href: "#projects", label: "Projects", description: "Featured work and case studies" },
      { href: "#experience", label: "Experience", description: "Professional journey" },
      { href: "#services", label: "Services", description: "How I can help" }
    ],
    CTA: {
      TEXT: "Let's Connect",
      HREF: "#footer",
      ARIA_LABEL: "Go to contact section"
    }
  },

  // ============================================================================
  // META INFORMATION
  // ============================================================================
  META: {
    SITE_TITLE: "Silvana Restrepo - Experience Architect",
    SITE_DESCRIPTION: "Strategic design solutions that connect business strategy with human experience. Portfolio showcasing human-centered design projects and professional expertise.",
    KEYWORDS: ["Experience Design", "Strategic Design", "Human-Centered Design", "UX Strategy", "Design Leadership", "Portfolio"],
    AUTHOR: "Silvana Restrepo",
    SITE_URL: "https://silvana.mmm.page"
  }
}

// ============================================================================
// CONTENT VALIDATION
// ============================================================================

/**
 * Content validation function to ensure all text matches authorized content
 * This should be run during development and build to catch unauthorized copy
 */
export function validateContent(content: string, allowedContent: string[]): boolean {
  const normalizedContent = content.toLowerCase().trim()
  return allowedContent.some(allowed => 
    allowed.toLowerCase().trim() === normalizedContent
  )
}

/**
 * Get all authorized text content for validation purposes
 */
export function getAllAuthorizedContent(): string[] {
  const content: string[] = []
  
  // Extract all text content from configuration
  Object.values(CONTENT_CONFIG).forEach(section => {
    if (typeof section === 'string') {
      content.push(section)
    } else if (typeof section === 'object') {
      Object.values(section).forEach(value => {
        if (typeof value === 'string') {
          content.push(value)
        } else if (Array.isArray(value)) {
          value.forEach(item => {
            if (typeof item === 'string') {
              content.push(item)
            } else if (typeof item === 'object') {
              Object.values(item).forEach(subValue => {
                if (typeof subValue === 'string') {
                  content.push(subValue)
                }
              })
            }
          })
        }
      })
    }
  })
  
  return content.filter(text => text.length > 0)
}

/**
 * Content usage tracking for quality assurance
 */
export const CONTENT_USAGE = {
  HERO_TAGLINE: "cinematic-hero.tsx",
  PROJECTS_HEADING: "app/page.tsx",
  PROJECTS_DESCRIPTION: "app/page.tsx",
  EXPERIENCE_DESCRIPTION: "app/page.tsx",
  SERVICES_DESCRIPTION: "app/page.tsx"
}

export default CONTENT_CONFIG
