"use client"

import { useState } from "react"

export default function MasterpieceProjectsShowcase() {
  const [testCount, setTestCount] = useState(0)

  console.log('=== MINIMAL TEST COMPONENT MOUNTED ===')
  console.log('Test count:', testCount)

  const handleTestClick = () => {
    console.log('=== TEST CLICK HANDLED ===')
    setTestCount(prev => prev + 1)
    alert(`Button clicked! Count: ${testCount + 1}`)
  }

  const handleDivClick = () => {
    console.log('=== DIV CLICK HANDLED ===')
    alert('Div clicked!')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🧪 MINIMAL TEST COMPONENT</h1>
      
      {/* Test if basic HTML works */}
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-center text-gray-600">
          This is a minimal test to isolate the clickability issue.
        </p>

        {/* Test 1: Basic HTML button */}
        <button
          onClick={handleTestClick}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          🔵 BASIC HTML BUTTON (Click Me!)
        </button>

        {/* Test 2: Clickable div */}
        <div
          onClick={handleDivClick}
          className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors cursor-pointer text-center"
        >
          🟢 CLICKABLE DIV (Click Me!)
        </div>

        {/* Test 3: Link */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            console.log('=== LINK CLICKED ===')
            alert('Link clicked!')
          }}
          className="block w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
        >
          🟣 CLICKABLE LINK (Click Me!)
        </a>

        {/* Test 4: Inline function */}
        <button
          onClick={() => {
            console.log('=== INLINE CLICK ===')
            alert('Inline function works!')
          }}
          className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          🔴 INLINE FUNCTION BUTTON (Click Me!)
        </button>

        {/* Display test count */}
        <div className="text-center p-4 bg-white rounded-lg border">
          <p className="text-lg font-semibold">Test Count: {testCount}</p>
          <p className="text-sm text-gray-500">If this increments, clicks are working</p>
        </div>

        {/* Debug info */}
        <div className="text-center p-4 bg-gray-200 rounded-lg">
          <p className="text-sm font-mono">
            Component mounted successfully<br/>
            State working: {testCount >= 0 ? '✅' : '❌'}<br/>
            Click handlers attached: ✅
          </p>
        </div>
      </div>
    </div>
  )
}
