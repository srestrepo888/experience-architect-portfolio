"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ResponsiveEnhancements() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <>
      {/* Mobile Navigation Enhancement */}
      {isMobile && (
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <motion.div
            className="bg-card/90 backdrop-blur-xl border border-border/20 rounded-2xl p-4 shadow-soft"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <a href="#about" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </a>
                <a href="#projects" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </a>
                <a href="#services" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </a>
                <a href="#contact" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Touch-Friendly Adjustments */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .sophisticated-project-card {
            min-height: 44px;
            touch-action: manipulation;
          }
          
          .sophisticated-service-card {
            min-height: 44px;
            touch-action: manipulation;
          }
          
          /* Reduce parallax effects on mobile for performance */
          .parallax-reduced {
            transform: none !important;
          }
          
          /* Optimize animations for mobile */
          .mobile-optimized {
            animation-duration: 0.3s !important;
            transition-duration: 0.3s !important;
          }
        }
        
        @media (max-width: 480px) {
          /* Extra small screens optimizations */
          .section-padding {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          .text-responsive {
            font-size: clamp(0.875rem, 4vw, 1rem) !important;
          }
          
          .title-responsive {
            font-size: clamp(1.5rem, 8vw, 2.5rem) !important;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 768px) and (max-width: 1024px) {
          .tablet-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .tablet-spacing {
            gap: 1.5rem !important;
          }
        }
        
        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .crisp-edges {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </>
  )
}