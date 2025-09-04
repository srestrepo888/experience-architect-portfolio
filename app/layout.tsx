import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
// Removed unused components for performance optimization

// ULTRA-LUXURIOUS DISPLAY FONT: Cormorant Garamond
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

// PREMIUM SUPPORTING FONT: Inter
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Silvana | Experience Architect",
  description: "Portfolio of Silvana — sophisticated, human-centered strategic design and product leadership.",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
  themeColor: "#F5F1EE",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Silvana Portfolio",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#F5F1EE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Silvana Portfolio" />
      </head>
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased text-foreground safe-y`}>
        {children}
        {/* Removed unused components for performance optimization */}
      </body>
    </html>
  )
}
