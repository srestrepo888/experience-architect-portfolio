import type React from "react"
import type { Metadata } from "next"
import { Lora, Inter } from "next/font/google"
import "./globals.css"
import ScrollProgress from "@/components/scroll-progress"
import NavigationAudit from "@/components/navigation-audit"

// Primary Font: Lora - Graceful serif with calligraphic influences
const serif = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

// Secondary Font: Inter for perfect readability
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Silvana | Experience Architect",
  description: "Portfolio of Silvana, an experience architect specializing in creating sophisticated digital products.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased bg-background text-foreground`}>
        <ScrollProgress />
        {children}
        {process.env.NODE_ENV === "development" && <NavigationAudit />}
      </body>
    </html>
  )
}
