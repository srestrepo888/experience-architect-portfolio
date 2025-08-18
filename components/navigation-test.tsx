"use client"

import React from "react"
import { BulletproofNavigationButton } from "./ui/bulletproof-navigation-button"

export function NavigationTest() {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-[10000]">
      <h3 className="text-sm font-bold mb-2">🔧 NAVIGATION TEST</h3>
      <div className="space-y-2">
        <BulletproofNavigationButton
          href="/projects"
          variant="primary"
          size="sm"
          icon="home"
        >
          Projects
        </BulletproofNavigationButton>
        
        <BulletproofNavigationButton
          href="/project/kayanee"
          variant="outline"
          size="sm"
          icon="right"
        >
          Kayanee
        </BulletproofNavigationButton>
        
        <BulletproofNavigationButton
          href="https://google.com"
          external={true}
          variant="ghost"
          size="sm"
          icon="external"
        >
          External
        </BulletproofNavigationButton>
        
        <BulletproofNavigationButton
          onClick={() => console.log('✅ onClick working!')}
          variant="secondary"
          size="sm"
        >
          Click Test
        </BulletproofNavigationButton>
      </div>
    </div>
  )
}