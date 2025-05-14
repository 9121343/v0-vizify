"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  // Default to false to avoid hydration mismatch
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)

      // Set initial value
      setMatches(media.matches)

      // Create event listener function
      const listener = () => setMatches(media.matches)

      // Use the modern approach for compatibility
      if (media.addEventListener) {
        media.addEventListener("change", listener)
        return () => media.removeEventListener("change", listener)
      } else {
        // Fallback for older browsers
        media.addListener(listener)
        return () => media.removeListener(listener)
      }
    }

    // Return empty cleanup function for SSR
    return () => {}
  }, [query])

  return matches
}
