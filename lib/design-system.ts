// lib/design-system.ts
// THE SINGLE SOURCE OF TRUTH FOR ALL DESIGN TOKENS

// Based on 8px grid system with a modular scale for harmony
export const DESIGN_SYSTEM = {
  spacing: {
    "2xs": "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
    "5xl": "128px",
  },
  containers: {
    content: "max-w-[1200px]",
    wide: "max-w-[1400px]",
    full: "max-w-none",
  },
  padding: {
    mobile: "px-6",
    desktop: "md:px-8 lg:px-12",
  },
  sections: {
    spacing: {
      normal: "py-2xl md:py-3xl",
      spacious: "py-3xl md:py-4xl",
      hero: "pt-4xl pb-3xl",
    },
    headerMargin: "mb-2xl",
  },
  typography: {
    paragraphSpacing: "space-y-md",
  },
  grid: {
    gap: "gap-lg md:gap-xl lg:gap-2xl",
  },
  animation: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  },
} as const
