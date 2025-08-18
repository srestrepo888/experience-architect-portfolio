"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface BackgroundTextureProps {
  noiseOpacity?: number
  gradientIntensity?: "very-subtle" | "subtle" | "medium"
  showLines?: boolean
  showVignette?: boolean
}

export default function BackgroundTexture({
  noiseOpacity = 0.025,
  gradientIntensity = "very-subtle",
  showLines = true,
  showVignette = true,
}: BackgroundTextureProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Scroll-based animations
  const { scrollYProgress } = useScroll()

  // Gradient overlay that shifts on scroll
  const gradientPosition = useTransform(scrollYProgress, [0, 1], ["0% 0%", "100% 100%"])

  // Line elements that appear on scroll
  const lineOneOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 0.05, 0.05, 0])

  const lineTwoOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 0.05, 0.05, 0])

  const lineThreeOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1], [0, 0.05, 0.05, 0])

  // Create noise texture on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create noise
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        // Random noise value (0-255)
        const noise = Math.floor(Math.random() * 255)

        // Set RGB values (all the same for grayscale)
        data[i] = noise // R
        data[i + 1] = noise // G
        data[i + 2] = noise // B
        data[i + 3] = 10 // Alpha (very subtle)
      }

      ctx.putImageData(imageData, 0, 0)
    }

    // Initial render
    updateCanvasSize()

    // Update on resize
    window.addEventListener("resize", updateCanvasSize)

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [noiseOpacity])

  // Get gradient values based on intensity
  const getGradientColors = () => {
    switch (gradientIntensity) {
      case "very-subtle":
        return {
          from: "rgba(248, 244, 236, 0.1)",
          to: "rgba(255, 253, 250, 0.15)",
        }
      case "subtle":
        return {
          from: "rgba(248, 244, 236, 0.2)",
          to: "rgba(255, 253, 250, 0.25)",
        }
      case "medium":
        return {
          from: "rgba(248, 244, 236, 0.3)",
          to: "rgba(255, 253, 250, 0.35)",
        }
      default:
        return {
          from: "rgba(248, 244, 236, 0.1)",
          to: "rgba(255, 253, 250, 0.15)",
        }
    }
  }

  const gradientColors = getGradientColors()

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
      {/* Noise texture */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-soft-light"
        style={{ opacity: noiseOpacity }}
      />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `radial-gradient(circle at ${gradientPosition}, ${gradientColors.from}, ${gradientColors.to})`,
        }}
      />

      {/* Subtle line elements */}
      {showLines && (
        <>
          <motion.div
            className="absolute top-[20%] right-[10%] w-[30vw] h-px bg-black"
            style={{ opacity: lineOneOpacity }}
          />
          <motion.div
            className="absolute top-[50%] left-[15%] w-[20vw] h-px bg-black"
            style={{ opacity: lineTwoOpacity }}
          />
          <motion.div
            className="absolute bottom-[30%] right-[20%] w-[25vw] h-px bg-black"
            style={{ opacity: lineThreeOpacity }}
          />
        </>
      )}

      {/* Vignette effect */}
      {showVignette && (
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            boxShadow: "inset 0 0 200px rgba(0, 0, 0, 0.05)",
          }}
        />
      )}
    </div>
  )
}
