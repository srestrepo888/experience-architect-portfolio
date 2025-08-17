"use client"

/**
 * Navigation utility functions.
 */

// Temporarily re-exporting navigateToRoute to resolve import errors.
// This version is a placeholder and does NOT use React Hooks correctly for client-side navigation.
// Its purpose is to help identify which component might still be importing it.
export function navigateToRoute(route: string): void {
  console.warn(
    `[DEPRECATED] navigateToRoute from lib/navigation.ts was called with route: "${route}". ` +
      "This function is deprecated due to incorrect React Hook usage in its original form. " +
      "Please refactor the calling component to use Next.js <Link> components for declarative navigation, " +
      "or use `useRouter().push()` directly within Client Components for programmatic navigation.",
  )

  // As a fallback, this function will now do nothing to prevent further errors,
  // but it won't perform client-side navigation.
  // If it were to do a full page reload (which is bad for SPA UX):
  // if (typeof window !== 'undefined' && route.startsWith("/")) {
  //   window.location.href = route;
  // }

  // Handling for anchor links can remain if this function was also used for that.
  if (typeof window !== "undefined" && route.startsWith("#")) {
    const elementId = route.substring(1)
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}

/**
 * Scroll to a section by ID. This function is fine as it doesn't use React hooks.
 * @param id The ID of the section to scroll to
 */
export function scrollToSection(id: string): void {
  if (typeof window !== "undefined") {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}

/**
 * Check if a link is external. This function is fine.
 * @param url The URL to check
 * @returns Whether the URL is external
 */
export function isExternalLink(url: string): boolean {
  return url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")
}
