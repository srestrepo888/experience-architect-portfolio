"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  useMagneticCursor,
  LANDOR_EASING,
  LANDOR_TIMING,
  createEntranceOrchestration,
  getFibonacciSpacing
} from "@/lib/landor-magnetic-system"
import { LandorMagneticButton } from "@/components/ui/landor-magnetic-button"

// 🧭 NAVIGATION ITEM INTERFACE
interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: React.ReactNode
  description?: string
}

interface LandorMagneticNavigationProps {
  items: NavigationItem[]
  currentPath?: string
  className?: string
  
  // Landor-specific enhancements
  magnetism?: "subtle" | "moderate" | "strong" | "magnetic"
  showBackground?: boolean
  fixedPosition?: boolean
  
  // Branding
  logo?: React.ReactNode
  logoHref?: string
  
  // CTA
  ctaButton?: {
    label: string
    href: string
    external?: boolean
  }
  
  // Mobile behavior
  mobileBreakpoint?: "sm" | "md" | "lg"
}

// 🎨 LANDOR MAGNETIC NAVIGATION COMPONENT
export const LandorMagneticNavigation: React.FC<LandorMagneticNavigationProps> = ({
  items,
  currentPath = "",
  className,
  magnetism = "moderate",
  showBackground = true,
  fixedPosition = true,
  logo,
  logoHref = "/",
  ctaButton,
  mobileBreakpoint = "lg"
}) => {
  
  
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // 🔄 Scroll detection for sophisticated background transitions
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // 📱 Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [currentPath])
  
  // 🎯 Navigation entrance animation
  const navigationEntrance = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: LANDOR_TIMING.sophisticated,
      ease: LANDOR_EASING.entrance
    }
  }
  
  // 🎨 Dynamic background with luxury blur effect
  const backgroundStyle = showBackground ? {
    backgroundColor: isScrolled 
      ? "rgba(255, 255, 255, 0.95)" 
      : "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    borderBottom: isScrolled 
      ? "1px solid rgba(0, 0, 0, 0.1)" 
      : "1px solid transparent"
  } : {}
  
  return (
    <>
      <motion.nav
        className={cn(
          // Base navigation styles
          "w-full z-50 transition-all duration-500",
          
          // Position handling
          fixedPosition ? "fixed top-0 left-0 right-0" : "relative",
          
          // Responsive breakpoints
          "px-4 sm:px-6 lg:px-8",
          
          className
        )}
        style={backgroundStyle}
        {...navigationEntrance}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* 🏷️ Logo with magnetic personality */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: LANDOR_TIMING.standard,
                delay: 0.1,
                ease: LANDOR_EASING.signature
              }}
            >
              <LandorMagneticButton
                href={logoHref}
                variant="ghost"
                size="lg"
                magnetism="subtle"
                className="p-0 hover:bg-transparent"
              >
                {logo || (
                  <span className="text-xl font-serif font-light tracking-wide">
                    Portfolio
                  </span>
                )}
              </LandorMagneticButton>
            </motion.div>
            
            {/* 🧭 Desktop Navigation Items */}
            <div className={cn(
              "hidden items-center space-x-1",
              mobileBreakpoint === "sm" && "sm:flex",
              mobileBreakpoint === "md" && "md:flex", 
              mobileBreakpoint === "lg" && "lg:flex"
            )}>
              {items.map((item, index) => (
                <NavigationItem
                  key={item.id}
                  item={item}
                  isActive={currentPath === item.href}
                  magnetism={magnetism}
                  orchestrationIndex={index}
                />
              ))}
            </div>
            
            {/* 🎯 CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              
              {/* CTA Button (Desktop) */}
              {ctaButton && (
                <motion.div
                  className={cn(
                    "hidden",
                    mobileBreakpoint === "sm" && "sm:block",
                    mobileBreakpoint === "md" && "md:block",
                    mobileBreakpoint === "lg" && "lg:block"
                  )}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: LANDOR_TIMING.standard,
                    delay: 0.3,
                    ease: LANDOR_EASING.signature
                  }}
                >
                  <LandorMagneticButton
                    href={ctaButton.href}
                    external={ctaButton.external}
                    variant="primary"
                    size="md"
                    magnetism="strong"
                    breathing={true}
                  >
                    {ctaButton.label}
                  </LandorMagneticButton>
                </motion.div>
              )}
              
              {/* 📱 Mobile Menu Toggle */}
              <MobileMenuToggle
                isOpen={isMobileMenuOpen}
                onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  mobileBreakpoint === "sm" && "sm:hidden",
                  mobileBreakpoint === "md" && "md:hidden",
                  mobileBreakpoint === "lg" && "lg:hidden"
                )}
              />
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* 📱 Mobile Menu with sophisticated animations */}
      <MobileMenu
        items={items}
        ctaButton={ctaButton}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPath={currentPath}
        magnetism={magnetism}
      />
    </>
  )
}

// 🧭 INDIVIDUAL NAVIGATION ITEM COMPONENT
interface NavigationItemProps {
  item: NavigationItem
  isActive: boolean
  magnetism: "subtle" | "moderate" | "strong" | "magnetic"
  orchestrationIndex: number
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  magnetism,
  orchestrationIndex
}) => {
  
  const magnetic = useMagneticCursor(magnetism)
  
  return (
    <motion.div
      ref={magnetic.ref}
      className="relative"
      style={{ x: magnetic.x, y: magnetic.y }}
      {...createEntranceOrchestration(orchestrationIndex, 6)}
    >
      <LandorMagneticButton
        href={item.href}
        variant="ghost"
        size="md"
        magnetism={magnetism}
        className={cn(
          "relative px-4 py-2 text-sm font-medium tracking-wide transition-all",
          isActive 
            ? "text-foreground bg-foreground/5" 
            : "text-foreground/70 hover:text-foreground"
        )}
      >
        <span className="flex items-center space-x-2">
          {item.icon && <span className="w-4 h-4">{item.icon}</span>}
          <span>{item.label}</span>
        </span>
        
        {/* Sophisticated active indicator */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-foreground rounded-full"
            layoutId="activeIndicator"
            style={{ x: "-50%" }}
            transition={{
              duration: LANDOR_TIMING.standard,
              ease: LANDOR_EASING.signature
            }}
          />
        )}
      </LandorMagneticButton>
    </motion.div>
  )
}

// 📱 MOBILE MENU TOGGLE WITH MAGNETIC PERSONALITY
interface MobileMenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  isOpen,
  onToggle,
  className
}) => {
  
  const magnetic = useMagneticCursor("moderate")
  
  return (
    <motion.button
      ref={magnetic.ref}
      className={cn(
        "relative w-10 h-10 flex items-center justify-center",
        "rounded-lg border border-border/50 bg-background/80",
        "hover:bg-foreground/5 transition-all",
        "focus:outline-none focus:ring-2 focus:ring-foreground/20",
        className
      )}
      style={{ x: magnetic.x, y: magnetic.y }}
      onClick={onToggle}
      whileHover={{
        scale: 1.05,
        transition: { duration: LANDOR_TIMING.magnetic, ease: LANDOR_EASING.signature }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: LANDOR_TIMING.instant, ease: LANDOR_EASING.magnetic }
      }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-5 h-5 flex flex-col justify-center space-y-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-full h-0.5 bg-foreground rounded-full"
            animate={isOpen ? {
              rotate: index === 1 ? 0 : index === 0 ? 45 : -45,
              y: index === 1 ? 0 : index === 0 ? 6 : -6,
              opacity: index === 1 ? 0 : 1
            } : {
              rotate: 0,
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: LANDOR_TIMING.standard,
              ease: LANDOR_EASING.signature
            }}
          />
        ))}
      </div>
    </motion.button>
  )
}

// 📱 SOPHISTICATED MOBILE MENU
interface MobileMenuProps {
  items: NavigationItem[]
  ctaButton?: { label: string; href: string; external?: boolean }
  isOpen: boolean
  onClose: () => void
  currentPath: string
  magnetism: "subtle" | "moderate" | "strong" | "magnetic"
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  ctaButton,
  isOpen,
  onClose,
  currentPath,
  magnetism
}) => {
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: LANDOR_TIMING.standard }}
            onClick={onClose}
          />
          
          {/* Mobile Menu Panel */}
          <motion.div
            className="fixed top-16 left-4 right-4 z-50 bg-background/95 backdrop-blur-lg rounded-2xl border border-border/50 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: LANDOR_TIMING.sophisticated,
              ease: LANDOR_EASING.signature
            }}
          >
            <div className="p-6 space-y-4">
              
              {/* Navigation Items */}
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  {...createEntranceOrchestration(index, items.length)}
                >
                  <LandorMagneticButton
                    href={item.href}
                    variant="ghost"
                    size="lg"
                    magnetism={magnetism}
                    className={cn(
                      "w-full justify-start text-left p-4 rounded-xl",
                      currentPath === item.href
                        ? "bg-foreground/5 text-foreground"
                        : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                    )}
                    onClick={onClose}
                  >
                    <span className="flex items-center space-x-3">
                      {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                      <div>
                        <div className="font-medium">{item.label}</div>
                        {item.description && (
                          <div className="text-sm text-foreground/50 mt-1">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </span>
                  </LandorMagneticButton>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              {ctaButton && (
                <motion.div
                  className="pt-4 border-t border-border/50"
                  {...createEntranceOrchestration(items.length, items.length + 1)}
                >
                  <LandorMagneticButton
                    href={ctaButton.href}
                    external={ctaButton.external}
                    variant="primary"
                    size="lg"
                    magnetism="strong"
                    className="w-full"
                    breathing={true}
                    onClick={onClose}
                  >
                    {ctaButton.label}
                  </LandorMagneticButton>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default LandorMagneticNavigation
