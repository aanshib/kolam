"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { useScrollNavigation } from "./scroll-context"

export function Navigation() {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const { scrollToSection } = useScrollNavigation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrollY > 50
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="group relative cursor-pointer">
            <span className="text-3xl font-playfair font-bold hover:text-primary/80 transition-all duration-300 tracking-tight">
              <span className="text-amber-700">Kolam</span>
              <span className="text-accent font-playfair italic">3D</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></div>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="font-inter font-medium text-sm tracking-wide text-foreground hover:text-primary transition-all duration-300 relative group uppercase"
            >
              Home
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-inter font-medium text-sm tracking-wide text-foreground hover:text-primary transition-all duration-300 relative group uppercase"
            >
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-inter font-medium text-sm tracking-wide text-foreground hover:text-primary transition-all duration-300 relative group uppercase"
            >
              Features
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>

          <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
