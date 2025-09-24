// 🎯 MINIMAL DESIGN SYSTEM - Legacy Support for Tailwind Config
// This file exists only for Tailwind configuration compatibility
// All new components should use lib/landor-typography-system.ts

export const DESIGN_SYSTEM = {
  spacing: {
    // 8px grid system
    "0.5": "0.125rem", // 2px
    "1": "0.25rem",    // 4px
    "2": "0.5rem",     // 8px
    "3": "0.75rem",    // 12px
    "4": "1rem",       // 16px
    "5": "1.25rem",    // 20px
    "6": "1.5rem",     // 24px
    "8": "2rem",       // 32px
    "10": "2.5rem",    // 40px
    "12": "3rem",      // 48px
    "16": "4rem",      // 64px
    "20": "5rem",      // 80px
    "24": "6rem",      // 96px
    "32": "8rem",      // 128px
  }
} as const;

// 🚨 DEPRECATION WARNING
console.warn("⚠️  design-system.ts is deprecated. Use lib/landor-typography-system.ts for new components.");
