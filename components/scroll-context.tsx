"use client"

import { createContext, useContext, useRef, type ReactNode } from "react"

interface ScrollContextType {
  scrollToSection: (section: "home" | "about" | "services") => void
}

const ScrollContext = createContext<ScrollContextType | null>(null)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: "home" | "about" | "services") => {
    if (!scrollRef.current) return

    // Define scroll positions for each section based on viewport height
    const positions = {
      home: 0, // Top of the page
      about: window.innerHeight * 2.5, // About section position
      services: window.innerHeight * 5, // Services section position
    }

    // Smooth scroll to the target position
    scrollRef.current.scrollTo({
      top: positions[section],
      behavior: "smooth",
    })
  }

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      <div ref={scrollRef} className="scroll-container">
        {children}
      </div>
    </ScrollContext.Provider>
  )
}

export function useScrollNavigation() {
  const context = useContext(ScrollContext)
  if (!context) {
    // Return a fallback function if context is not available
    return {
      scrollToSection: (section: "home" | "about" | "services") => {
        // Fallback to element-based scrolling
        const element = document.getElementById(section === "services" ? "services" : section)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      },
    }
  }
  return context
}
