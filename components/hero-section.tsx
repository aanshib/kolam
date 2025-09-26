"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 md:pt-32">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full float-animation opacity-60" />
        <div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-primary rounded-full float-animation opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full float-animation opacity-80"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-primary rounded-full float-animation opacity-50"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="w-full px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-6 text-balance tracking-tight">
            <span className="text-black font-bold">Kāla</span>
            <span className="text-foreground italic font-light">Kriti</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light italic tracking-wide">
            Every Dot Tells a Story, Every Line Weaves a Tradition
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Explore Patterns
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
