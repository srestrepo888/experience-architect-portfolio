"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPosition = window.scrollY
      const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-brand-stone-light/30 dark:bg-brand-graphite-dark/30">
      <div
        className="h-full bg-brand-terracotta-muted dark:bg-brand-terracotta-vivid transition-all duration-100 ease-linear"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}
