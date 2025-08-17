"use client"

import { useEffect, useState } from "react"
import { isExternalLink } from "@/lib/navigation"

interface NavigationIssue {
  element: string
  issue: string
  location: string
  severity: "high" | "medium" | "low"
}

export default function NavigationAudit() {
  const [issues, setIssues] = useState<NavigationIssue[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const runAudit = () => {
    setIsRunning(true)
    const foundIssues: NavigationIssue[] = []

    // Check all links
    document.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href")

      if (!href) {
        foundIssues.push({
          element: "Link",
          issue: "Missing href attribute",
          location: getElementPath(link),
          severity: "high",
        })
      } else if (href === "#" || href === "javascript:void(0)") {
        foundIssues.push({
          element: "Link",
          issue: "Placeholder href attribute",
          location: getElementPath(link),
          severity: "medium",
        })
      } else if (href.startsWith("/") && !link.hasAttribute("onClick")) {
        // Internal links should have onClick handlers for smooth navigation
        foundIssues.push({
          element: "Link",
          issue: "Internal link missing onClick handler",
          location: getElementPath(link),
          severity: "medium",
        })
      }

      // Check for target="_blank" without rel="noopener noreferrer"
      if (
        isExternalLink(href || "") &&
        link.getAttribute("target") === "_blank" &&
        !link.getAttribute("rel")?.includes("noopener")
      ) {
        foundIssues.push({
          element: "Link",
          issue: 'External link missing rel="noopener noreferrer"',
          location: getElementPath(link),
          severity: "medium",
        })
      }
    })

    // Check all buttons
    document.querySelectorAll("button").forEach((button) => {
      if (!button.hasAttribute("type")) {
        foundIssues.push({
          element: "Button",
          issue: "Missing type attribute",
          location: getElementPath(button),
          severity: "low",
        })
      }

      if (!button.hasAttribute("aria-label") && !button.textContent?.trim()) {
        foundIssues.push({
          element: "Button",
          issue: "Button without text content missing aria-label",
          location: getElementPath(button),
          severity: "high",
        })
      }
    })

    setIssues(foundIssues)
    setIsRunning(false)
  }

  // Helper function to get element path for debugging
  const getElementPath = (element: Element): string => {
    let path = ""
    let current = element

    while (current && current !== document.body) {
      let name = current.tagName.toLowerCase()
      if (current.id) {
        name += `#${current.id}`
      } else if (current.className) {
        name += `.${current.className.split(" ")[0]}`
      }
      path = name + (path ? " > " + path : "")
      current = current.parentElement as Element
    }

    return path || "Unknown"
  }

  useEffect(() => {
    // Run audit on mount
    runAudit()

    // Re-run audit when navigation changes
    const handleNavigation = () => {
      runAudit()
    }

    window.addEventListener("popstate", handleNavigation)
    return () => {
      window.removeEventListener("popstate", handleNavigation)
    }
  }, [])

  // Only render in development
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => {
          if (issues.length > 0) {
            console.table(issues)
            alert(`Found ${issues.length} navigation issues. See console for details.`)
          } else {
            alert("No navigation issues found!")
          }
        }}
        className="bg-black text-white px-4 py-2 rounded-full text-sm"
      >
        {isRunning ? "Running audit..." : `Navigation Audit (${issues.length} issues)`}
      </button>
    </div>
  )
}
