"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Gesture-Based Kolam Creation",
    description:
      "Create beautiful Kolam patterns with hand gestures in 3D. Watch the demo video below.",
    icon: "/icons/finger.png",
    shape: "circle",
  },
  {
    title: "Neural Brush Strokes",
    description:
      "Experience AI-powered brush strokes that learn from traditional Kolam masters to create authentic patterns.",
    icon: "/icons/neural-network.png",
    shape: "circle",
  },
  {
    title: "Co-create Kolams with AI",
    description:
      "Collaborate with our intelligent AI assistant to design unique Kolam patterns that blend tradition with innovation.",
    icon: "/icons/generate.png",
    shape: "circle",
  },
  {
    title: "Kolam StyleX",
    description:
      "Transform your Kolam designs across multiple artistic styles while preserving the sacred geometry and cultural essence.",
    icon: "/icons/textile.png",
    shape: "circle",
  },
  {
    title: "Kolam in Action",
    description:
      "Seamlessly transition from digital creation to real-world application with our comprehensive design-to-implementation workflow.",
    icon: "/icons/kolam.png",
    shape: "circle",
  },
]

const getShapeClasses = (shape: string) => {
  switch (shape) {
    case "hexagon":
      return "clip-path-hexagon"
    case "diamond":
      return "clip-path-diamond"
    case "circle":
      return "rounded-full"
    case "octagon":
      return "clip-path-octagon"
    case "star":
      return "clip-path-star"
    default:
      return "rounded-2xl"
  }
}

export function ServicesSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-50 bg-white/10 hover:bg-white/20 
                         text-white text-2xl font-bold rounded-full w-10 h-10 
                         flex items-center justify-center shadow-lg transition"
            >
              ✕
            </button>
            <video
              src="/videos/gesture-control.mp4"
              className="w-full h-full object-contain"
              autoPlay
              controls
            />
          </div>
        </div>
      )}

      {/* Services Section */}
      <section
        id="services"
        className="min-h-[200vh] flex items-center py-32 bg-background/95 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-wide relative">
              Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Discover the beauty of{" "}
              <span className="text-primary font-medium">Kolam</span> through
              cutting-edge AI technology and immersive 3D experiences.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                <div
                  className={`relative p-8 flex flex-col items-center justify-center
                    bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/15
                    backdrop-blur-sm
                    hover:shadow-xl hover:shadow-primary/20
                    hover:bg-gradient-to-br hover:from-primary/20 hover:via-secondary/30 hover:to-accent/25
                    ${getShapeClasses(service.shape)}
                    w-72 h-72
                    transition-all duration-500`}
                >
                  <div className="mb-4 z-10">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="group-hover:scale-125 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold mb-3 text-foreground group-hover:text-primary transition-colors z-10 px-4 text-lg">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-8 max-w-sm">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.title === "Gesture-Based Kolam Creation" ? (
                      <>
                        Create beautiful Kolam patterns with hand gestures in 3D.{" "}
                        <strong>Watch the demo video below.</strong>
                      </>
                    ) : (
                      service.description
                    )}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    onClick={() => {
                      if (service.title === "Gesture-Based Kolam Creation") {
                        setVideoOpen(true)
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
