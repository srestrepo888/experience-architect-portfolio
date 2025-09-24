// 🎯 MINIMAL DESIGN CONSTANTS - Legacy Support Only
// This file exists only for backward compatibility
// All new components should use lib/landor-typography-system.ts

export const COLORS = {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary))",
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
} as const;

export const LUXURY_SPACING = {
  xs: "0.5rem",
  sm: "1rem", 
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
} as const;

export const BORDER_RADIUS = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
} as const;

export const ANIMATIONS = {
  duration: {
    fast: "0.15s",
    normal: "0.3s",
    slow: "0.5s",
  },
  easing: {
    ease: "ease",
    linear: "linear",
    easeIn: "ease-in",
    easeOut: "ease-out",
  }
} as const;

// 🚨 DEPRECATION WARNING
console.warn("⚠️  design-constants.ts is deprecated. Use lib/landor-typography-system.ts for new components.");
