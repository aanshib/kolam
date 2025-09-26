"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Gesture-Based Kolam Creation",
    description:
      "Create beautiful Kolam patterns using intuitive hand gestures and motion controls in our immersive 3D environment. Experience the traditional art form through modern technology.",
    icon: "🤲",
    category: "Interactive Creation",
    features: ["Motion tracking", "Real-time feedback", "3D visualization", "Pattern recognition"],
    gradient: "from-violet-500/20 via-purple-500/15 to-indigo-500/20",
    borderGradient: "from-violet-500/60 to-indigo-500/60",
    glowColor: "shadow-violet-500/25",
    accentColor: "text-violet-500",
  },
  {
    title: "Neural Brush Strokes",
    description:
      "Experience AI-powered brush strokes that learn from traditional Kolam masters to create authentic patterns with perfect symmetry and cultural accuracy.",
    icon: "🧠",
    category: "AI-Powered Art",
    features: ["AI-powered strokes", "Master techniques", "Authentic patterns", "Style learning"],
    gradient: "from-emerald-500/20 via-teal-500/15 to-cyan-500/20",
    borderGradient: "from-emerald-500/60 to-cyan-500/60",
    glowColor: "shadow-emerald-500/25",
    accentColor: "text-emerald-500",
  },
  {
    title: "Co-create Kolams with AI",
    description:
      "Collaborate with our intelligent AI assistant to design unique Kolam patterns that blend tradition with innovation, creating personalized sacred geometry.",
    icon: "🤖",
    category: "AI Collaboration",
    features: ["AI collaboration", "Pattern suggestions", "Creative assistance", "Personalized designs"],
    gradient: "from-rose-500/20 via-pink-500/15 to-fuchsia-500/20",
    borderGradient: "from-rose-500/60 to-fuchsia-500/60",
    glowColor: "shadow-rose-500/25",
    accentColor: "text-rose-500",
  },
  {
    title: "Kolam StyleX",
    description:
      "Transform your Kolam designs across multiple artistic styles while preserving the sacred geometry and cultural essence of this ancient art form.",
    icon: "✨",
    category: "Style Transfer",
    features: ["Style transformation", "Sacred geometry", "Cultural preservation", "Artistic variations"],
    gradient: "from-amber-500/20 via-orange-500/15 to-red-500/20",
    borderGradient: "from-amber-500/60 to-red-500/60",
    glowColor: "shadow-amber-500/25",
    accentColor: "text-amber-500",
  },
  {
    title: "Kolam Creation-to-Application",
    description:
      "Seamlessly transition from digital creation to real-world application with our comprehensive design-to-implementation workflow and guidance.",
    icon: "🔄",
    category: "Implementation",
    features: ["Digital to physical", "Implementation guide", "Material suggestions", "Step-by-step process"],
    gradient: "from-blue-500/20 via-indigo-500/15 to-purple-500/20",
    borderGradient: "from-blue-500/60 to-purple-500/60",
    glowColor: "shadow-blue-500/25",
    accentColor: "text-blue-500",
  },
  {
    title: "Sacred Pattern Library",
    description:
      "Access thousands of traditional Kolam patterns from different regions, each with historical context and cultural significance for authentic creation.",
    icon: "📚",
    category: "Cultural Heritage",
    features: ["Traditional patterns", "Regional variations", "Historical context", "Cultural authenticity"],
    gradient: "from-green-500/20 via-lime-500/15 to-emerald-500/20",
    borderGradient: "from-green-500/60 to-emerald-500/60",
    glowColor: "shadow-green-500/25",
    accentColor: "text-green-500",
  },
]

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function FeaturesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20">
        <FloatingParticles />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        <section
          ref={heroRef}
          className="pt-32 pb-20 px-6 relative"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="container mx-auto text-center max-w-5xl">
            <Badge
              variant="secondary"
              className="mb-8 text-sm px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
            >
              ✨ AI-Powered Traditional Art
            </Badge>

            <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 text-balance leading-tight">
              <span
                className="brown-shimmer brown-bounce inline-block font-serif text-7xl md:text-9xl"
                style={{ animationDelay: "0.2s" }}
              >
                Features
              </span>
              <br />
              <span
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent italic inline-block animate-fade-in-up bg-[length:200%_100%] animate-gradient-x"
                style={{ animationDelay: "0.4s" }}
              >
                Beyond Imagination
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              Discover the perfect fusion of ancient wisdom and cutting-edge technology. Create, collaborate, and
              celebrate the timeless art of Kolam with revolutionary AI-powered tools.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-10 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Start Creating →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-10 py-4 text-lg font-medium backdrop-blur-sm bg-transparent hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                Watch Demo →
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 relative">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-balance animate-fade-in-up brown-glow brown-bounce">
                Powerful <span className="italic brown-shimmer">Features</span>
              </h2>
              <p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Experience the next generation of Kolam creation with our comprehensive suite of AI-powered tools and
                traditional artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-transparent transition-all duration-700 hover:shadow-2xl ${feature.glowColor} overflow-hidden rounded-3xl hover:scale-[1.05] hover:-translate-y-2 animate-fade-in-up`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: `translateY(${scrollY * 0.02 * (index % 2 === 0 ? 1 : -1)}px)`,
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700`}
                  />

                  {/* Animated border gradient */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 blur-sm animate-pulse`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="text-5xl transform group-hover:scale-125 transition-all duration-500 group-hover:rotate-12 animate-float">
                        {feature.icon}
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs px-3 py-1 bg-background/80 backdrop-blur-sm border-primary/20 group-hover:bg-primary/10 transition-all duration-300"
                      >
                        {feature.category}
                      </Badge>
                    </div>

                    <h3
                      className={`text-2xl font-playfair font-bold mb-6 text-foreground group-hover:${feature.accentColor} transition-all duration-500 leading-tight`}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground mb-8 leading-relaxed text-base group-hover:text-foreground/90 transition-colors duration-300">
                      {feature.description}
                    </p>

                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {feature.features.map((feat, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            variant="outline"
                            className="text-xs px-3 py-1 bg-background/60 backdrop-blur-sm border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                            style={{ animationDelay: `${featureIndex * 0.1}s` }}
                          >
                            {feat}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-center p-4 h-auto text-primary hover:text-white hover:bg-primary/90 transition-all duration-500 font-medium group-hover:shadow-lg hover:scale-105"
                    >
                      Explore Feature →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-border/50 relative">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-balance animate-fade-in-up">
              Ready to Create <span className="italic text-primary animate-pulse">Magic</span>?
            </h2>
            <p
              className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join thousands of artists and creators who are already transforming traditional Kolam art with our
              revolutionary platform.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-12 py-4 text-lg font-medium backdrop-blur-sm bg-transparent hover:scale-110 hover:-translate-y-2 transition-all duration-300"
              >
                📚 View Documentation
              </Button>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .brown-shimmer {
          background: linear-gradient(85deg, #a0522d, #8b4513);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .brown-bounce {
          animation: bounce 2s infinite;
        }

        .brown-glow {
          box-shadow: 0 0 10px rgba(160, 82, 45, 0.5);
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
