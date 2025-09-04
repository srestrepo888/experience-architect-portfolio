"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ElevatedButton, ElevatedButtonGroup } from "./elevated-button-system"
import { LandorContainer, LandorSection } from "./landor-layout-system"
import { HeadingMedium, BodyMedium, Caption, Overline } from "@/components/typography"
import { ANIMATIONS } from "@/lib/design-constants"

// ELEVATED BUTTON SYSTEM SHOWCASE
// Demonstrates the sophisticated button innovations for luxury portfolios
export function ButtonShowcase() {
  const [activeDemo, setActiveDemo] = React.useState<string | null>(null)

  const buttonVariants = [
    { 
      variant: "primary" as const, 
      label: "Primary", 
      description: "Sophisticated luxury with advanced depth and micro-interactions"
    },
    { 
      variant: "secondary" as const, 
      label: "Secondary", 
      description: "Elegant glassmorphism with luxury backdrop blur effects"
    },
    { 
      variant: "luxury" as const, 
      label: "Luxury", 
      description: "Ultra-premium with silk-like gradients and breathing animation"
    },
    { 
      variant: "ghost" as const, 
      label: "Ghost", 
      description: "Subtle neumorphism with sophisticated tactile feedback"
    },
    { 
      variant: "outline" as const, 
      label: "Outline", 
      description: "Premium border with dynamic gradient interactions"
    },
    { 
      variant: "minimal" as const, 
      label: "Minimal", 
      description: "Pure sophistication with mathematical precision"
    }
  ]

  const buttonSizes = [
    { size: "xs" as const, label: "Extra Small" },
    { size: "sm" as const, label: "Small" },
    { size: "md" as const, label: "Medium" },
    { size: "lg" as const, label: "Large" },
    { size: "xl" as const, label: "Extra Large" }
  ]

  return (
    <LandorSection spacing="spacious">
      <LandorContainer variant="wide">
        <div
          number="01"
          title="Elevated Button System"
          subtitle="Sophistication Showcase"
          description="Demonstrating innovative button design trends for luxury digital experiences. Each variant incorporates advanced micro-interactions, premium material aesthetics, and mathematical precision."
          align="center"
        />

        <div relationship="major-division">
          {/* Variant Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: ANIMATIONS.easing.luxury }}
            viewport={{ once: true }}
          >
            <div padding="spacious" elevation="minimal">
              <div relationship="grouped">
                <div className="text-center mb-12">
                  <Overline className="text-muted-foreground/80 tracking-wider mb-2">
                    BUTTON VARIANTS
                  </Overline>
                  <HeadingMedium>Luxury Design System</HeadingMedium>
                </div>

                <div variant="three-column" gap="luxury" className="items-start">
                  {buttonVariants.map((button, index) => (
                    <motion.div
                      key={button.variant}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1, 
                        ease: ANIMATIONS.easing.luxury 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="space-y-6">
                        <ElevatedButton
                          variant={button.variant}
                          size="lg"
                          icon="sparkles"
                          tactileFeedback={true}
                          magneticEffect={button.variant === "luxury"}
                          onMouseEnter={() => setActiveDemo(button.variant)}
                          onMouseLeave={() => setActiveDemo(null)}
                          className="w-full"
                        >
                          {button.label}
                        </ElevatedButton>
                        
                        <div className="space-y-2">
                          <Caption className="font-medium text-foreground">
                            {button.label}
                          </Caption>
                          <BodyMedium className="text-muted-foreground text-sm leading-relaxed">
                            {button.description}
                          </BodyMedium>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Size Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: ANIMATIONS.easing.luxury }}
            viewport={{ once: true }}
          >
            <div padding="spacious" elevation="minimal">
              <div relationship="grouped">
                <div className="text-center mb-12">
                  <Overline className="text-muted-foreground/80 tracking-wider mb-2">
                    SIZE SYSTEM
                  </Overline>
                  <HeadingMedium>Mathematical Precision</HeadingMedium>
                  <BodyMedium className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Built on our 8px grid system for perfect proportional harmony
                  </BodyMedium>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8">
                  {buttonSizes.map((size, index) => (
                    <motion.div
                      key={size.size}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.05, 
                        ease: ANIMATIONS.easing.luxury 
                      }}
                      viewport={{ once: true }}
                    >
                      <ElevatedButton
                        variant="primary"
                        size={size.size}
                        icon="arrow"
                        tactileFeedback={true}
                      >
                        {size.label}
                      </ElevatedButton>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: ANIMATIONS.easing.luxury }}
            viewport={{ once: true }}
          >
            <div padding="spacious" elevation="minimal">
              <div relationship="grouped">
                <div className="text-center mb-12">
                  <Overline className="text-muted-foreground/80 tracking-wider mb-2">
                    ADVANCED INTERACTIONS
                  </Overline>
                  <HeadingMedium>Sophisticated Micro-Interactions</HeadingMedium>
                  <BodyMedium className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Premium tactile feedback, magnetic effects, and luxury animations
                  </BodyMedium>
                </div>

                <div variant="two-column" gap="luxury" className="items-center">
                  <div className="space-y-8">
                    <div>
                      <Caption className="text-muted-foreground/80 tracking-wider uppercase mb-4">
                        Magnetic Effect
                      </Caption>
                      <ElevatedButton
                        variant="luxury"
                        size="lg"
                        icon="sparkles"
                        magneticEffect={true}
                        tactileFeedback={true}
                        className="w-full"
                      >
                        Luxury Interactive
                      </ElevatedButton>
                    </div>

                    <div>
                      <Caption className="text-muted-foreground/80 tracking-wider uppercase mb-4">
                        Loading States
                      </Caption>
                      <ElevatedButton
                        variant="secondary"
                        size="lg"
                        loading={true}
                        loadingText="Processing..."
                        className="w-full"
                      >
                        Submit
                      </ElevatedButton>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <Caption className="text-muted-foreground/80 tracking-wider uppercase mb-4">
                        Button Groups
                      </Caption>
                      <ElevatedButtonGroup orientation="horizontal" spacing="normal">
                        <ElevatedButton variant="primary" size="md" icon="download">
                          Download
                        </ElevatedButton>
                        <ElevatedButton variant="secondary" size="md" icon="external">
                          Preview
                        </ElevatedButton>
                        <ElevatedButton variant="ghost" size="md" icon="arrow">
                          Details
                        </ElevatedButton>
                      </ElevatedButtonGroup>
                    </div>

                    <div>
                      <Caption className="text-muted-foreground/80 tracking-wider uppercase mb-4">
                        Icon Variants
                      </Caption>
                      <div className="flex items-center gap-4">
                        <ElevatedButton variant="outline" size="icon" icon="download" />
                        <ElevatedButton variant="outline" size="icon" icon="external" />
                        <ElevatedButton variant="outline" size="icon" icon="chevron" />
                        <ElevatedButton variant="outline" size="icon" icon="sparkles" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live Demo Status */}
          {activeDemo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: ANIMATIONS.easing.luxury }}
              className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-2xl px-6 py-4 shadow-lg z-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Caption className="text-slate-700">
                  Demonstrating: <span className="font-medium capitalize">{activeDemo}</span> variant
                </Caption>
              </div>
            </motion.div>
          )}
        </div>
      </LandorContainer>
    </LandorSection>
  )
}
