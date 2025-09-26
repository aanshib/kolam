"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { KolamScene } from "@/components/kolam-scene"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Gesture-Based Kolam Creation",
    description:
      "Create beautiful Kolam patterns using intuitive hand gestures and motion controls in our immersive 3D environment. Experience the traditional art form through modern technology.",
    icon: "🤲",
    category: "Interactive Creation",
    features: ["Motion tracking", "Real-time feedback", "3D visualization", "Pattern recognition"],
    gradient: "from-primary/10 to-accent/15", // Updated to beige gradient
    borderGradient: "from-primary/50 to-accent/50", // Updated to beige border gradient
    shape: "circle", // Changed from hexagon to circle
  },
  {
    title: "Neural Brush Strokes",
    description:
      "Experience AI-powered brush strokes that learn from traditional Kolam masters to create authentic patterns with perfect symmetry and cultural accuracy.",
    icon: "🧠",
    category: "AI-Powered Art",
    features: ["AI-powered strokes", "Master techniques", "Authentic patterns", "Style learning"],
    gradient: "from-secondary/15 to-primary/10", // Updated to beige gradient
    borderGradient: "from-secondary/50 to-primary/50", // Updated to beige border gradient
    shape: "circle", // Changed from diamond to circle
  },
  {
    title: "Co-create Kolams with AI",
    description:
      "Collaborate with our intelligent AI assistant to design unique Kolam patterns that blend tradition with innovation, creating personalized sacred geometry.",
    icon: "🤖",
    category: "AI Collaboration",
    features: ["AI collaboration", "Pattern suggestions", "Creative assistance", "Personalized designs"],
    gradient: "from-accent/15 to-secondary/10", // Updated to beige gradient
    borderGradient: "from-accent/50 to-secondary/50", // Updated to beige border gradient
    shape: "circle", // Already circle
  },
  {
    title: "Kolam StyleX",
    description:
      "Transform your Kolam designs across multiple artistic styles while preserving the sacred geometry and cultural essence of this ancient art form.",
    icon: "✨",
    category: "Style Transfer",
    features: ["Style transformation", "Sacred geometry", "Cultural preservation", "Artistic variations"],
    gradient: "from-primary/15 to-accent/10", // Updated to beige gradient
    borderGradient: "from-primary/50 to-accent/50", // Updated to beige border gradient
    shape: "circle", // Changed from octagon to circle
  },
  {
    title: "Kolam Creation-to-Application",
    description:
      "Seamlessly transition from digital creation to real-world application with our comprehensive design-to-implementation workflow and guidance.",
    icon: "🔄",
    category: "Implementation",
    features: ["Digital to physical", "Implementation guide", "Material suggestions", "Step-by-step process"],
    gradient: "from-secondary/10 to-primary/15", // Updated to beige gradient
    borderGradient: "from-secondary/50 to-primary/50", // Updated to beige border gradient
    shape: "circle", // Changed from star to circle
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

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 opacity-30">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          className="bg-gradient-to-br from-background via-background to-muted/20"
        >
          <Suspense fallback={null}>
            <Environment preset="dawn" />
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <KolamScene />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.2}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              New: AI-Powered Kolam Creation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
              The fastest and most powerful
              <br />
              <span className="text-primary">platform for creating Kolams</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance max-w-3xl mx-auto">
              Build transformative Kolam experiences powered by industry-leading AI models and traditional artistry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Creating →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-8 bg-transparent"
              >
                View Pricing →
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-border">
          <div className="container mx-auto text-center">
            <p className="text-sm text-muted-foreground mb-12">Trusted by artists and institutions worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="text-2xl font-bold">Kolam3D</div>
              <div className="text-2xl font-bold">ArtTech</div>
              <div className="text-2xl font-bold">CulturalAI</div>
              <div className="text-2xl font-bold">TraditionX</div>
              <div className="text-2xl font-bold">SacredGeometry</div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful AI models for creating authentic Kolam patterns with modern innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden kolam-pattern complete-boundary boundary-pulse ${getShapeClasses(service.shape)}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                    >
                      Learn more →
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 border-t border-border">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start building in seconds</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Kickstart your next Kolam project with templates built by us and our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                View all examples
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-8 bg-transparent"
              >
                📚 Official Documentation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
