"use client"

import dynamic from "next/dynamic"

/* Dynamically import the heavy client-only showcase and disable SSR */
const LuxuryShowcaseClient = dynamic(() => import("@/components/luxury-showcase-client"), {
  ssr: false,
  loading: () => null,
})

export default function LuxuryShowcaseClientEntry() {
  return <LuxuryShowcaseClient />
}
