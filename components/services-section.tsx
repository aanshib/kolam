// "use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// const services = [
//   {
//     title: "Gesture-Based Kolam Creation",
//     description:
//       "Create beautiful Kolam patterns using intuitive hand gestures and motion controls in our immersive 3D environment.",
//     icon: "/icons/finger.png", // 👈 use image path instead of emoji
//     shape: "circle",
//   },
//   {
//     title: "Neural Brush Strokes",
//     description:
//       "Experience AI-powered brush strokes that learn from traditional Kolam masters to create authentic patterns.",
//     icon: "/icons/neural-network.png",
//     shape: "circle",
//   },
//   {
//     title: "Co-create Kolams with AI",
//     description:
//       "Collaborate with our intelligent AI assistant to design unique Kolam patterns that blend tradition with innovation.",
//     icon: "/icons/generate.png",
//     shape: "circle",
//   },
//   {
//     title: "Kolam StyleX",
//     description:
//       "Transform your Kolam designs across multiple artistic styles while preserving the sacred geometry and cultural essence.",
//     icon: "/icons/textile.png",
//     shape: "circle",
//   },
//   {
//     title: "Kolam in Action",
//     description:
//       "Seamlessly transition from digital creation to real-world application with our comprehensive design-to-implementation workflow.",
//     icon: "/icons/kolam.png",
//     shape: "circle",
//   },
// ]

// const getShapeClasses = (shape: string) => {
//   switch (shape) {
//     case "hexagon":
//       return "clip-path-hexagon"
//     case "diamond":
//       return "clip-path-diamond"
//     case "circle":
//       return "rounded-full"
//     case "octagon":
//       return "clip-path-octagon"
//     case "star":
//       return "clip-path-star"
//     default:
//       return "rounded-2xl"
//   }
// }

// export function ServicesSection() {
//   return (
//     <>
//       <section id="services" className="min-h-[200vh] flex items-center py-32 bg-background/95 backdrop-blur-sm">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="text-center mb-20">
//             <div className="relative inline-block mb-8">
//               {/* Decorative dots pattern */}
//               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
//                 <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></div>
//                 <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
//               </div>

//               {/* Main heading */}
//               <h2 className="text-6xl md:text-7xl font-serif font-bold tracking-wide relative brown-glow brown-bounce">
//                 <span className="brown-shimmer">Features</span>
//                 <span className="absolute inset-0 text-6xl md:text-7xl font-serif font-bold tracking-wide text-amber-800/20 blur-sm -z-10">
//                   Features
//                 </span>
//               </h2>

//               {/* Decorative underline */}
//               <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>

//               {/* Corners */}
//               <div className="absolute -top-4 -left-4 w-3 h-3 border-2 border-primary rounded-full bg-background"></div>
//               <div className="absolute -top-4 -right-4 w-3 h-3 border-2 border-accent rounded-full bg-background"></div>
//               <div className="absolute -bottom-8 -left-8 w-2 h-2 bg-secondary rounded-full"></div>
//               <div className="absolute -bottom-8 -right-8 w-2 h-2 bg-primary rounded-full"></div>
//             </div>

//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
//               Discover the beauty of <span className="text-primary font-medium">Kolam</span> through cutting-edge AI
//               technology and immersive 3D experiences.
//             </p>
//           </div>

//           {/* Service cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto">
//             {services.map((service, index) => (
//               <div key={index} className="group relative flex flex-col items-center text-center">
//                 <div
//                   className={`relative p-8 flex flex-col items-center justify-center
//                     bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/15
//                     backdrop-blur-sm
//                     hover:shadow-xl hover:shadow-primary/20
//                     hover:bg-gradient-to-br hover:from-primary/20 hover:via-secondary/30 hover:to-accent/25
//                     kolam-pattern complete-boundary boundary-pulse
//                     ${getShapeClasses(service.shape)}
//                     w-72 h-72
//                     transition-all duration-500`}
//                 >
//                   {/* Decorative dots inside card */}
//                   <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                     <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full border-2 border-accent"></div>
//                     <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full border-2 border-accent"></div>
//                     <div className="absolute bottom-4 left-4 w-3 h-3 bg-primary rounded-full border-2 border-accent"></div>
//                     <div className="absolute bottom-4 right-4 w-3 h-3 bg-primary rounded-full border-2 border-accent"></div>
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full border border-primary"></div>
//                   </div>

//                   {/* ICON IMAGE */}
//                   <div className="mb-4 z-10">
//                     <Image
//                       src={service.icon}
//                       alt={service.title}
//                       width={64}
//                       height={64}
//                       className="group-hover:scale-125 transition-transform duration-500"
//                     />
//                   </div>

//                   <h3 className="font-bold mb-3 text-foreground group-hover:text-primary transition-colors z-10 px-4 text-lg">
//                     {service.title === "Kolam in Action" ? (
//                       <>
//                         Kolam in
//                         <br />
//                         Action
//                       </>
//                     ) : (
//                       service.title
//                     )}
//                   </h3>
//                 </div>

//                 <div className="mt-8 max-w-sm">
//                   <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{service.description}</p>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Gesture-Based Kolam Creation",
    description:
      "Create beautiful Kolam patterns using intuitive hand gestures and motion controls in our immersive 3D environment.",
    icon: "✋",
    shape: "circle", // Changed from hexagon to circle
  },
  {
    title: "Neural Brush Strokes",
    description:
      "Experience AI-powered brush strokes that learn from traditional Kolam masters to create authentic patterns.",
    icon: "🎨",
    shape: "circle", // Changed from diamond to circle
  },
  {
    title: "Co-create Kolams with AI",
    description:
      "Collaborate with our intelligent AI assistant to design unique Kolam patterns that blend tradition with innovation.",
    icon: "🤖",
    shape: "circle", // Already circle
  },
  {
    title: "Kolam StyleX",
    description:
      "Transform your Kolam designs across multiple artistic styles while preserving the sacred geometry and cultural essence.",
    icon: "✨",
    shape: "circle", // Changed from octagon to circle
  },
  {
    title: "Kolam in Action",
    description:
      "Seamlessly transition from digital creation to real-world application with our comprehensive design-to-implementation workflow.",
    icon: "🔄",
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

export function ServicesSection() {
  return (
    <>
      <section
        id="services"
        className="min-h-[150vh] sm:min-h-[200vh] flex items-center py-20 sm:py-32 bg-background/95 backdrop-blur-sm"
      >
        <div className="w-full px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16 sm:mb-20 max-w-4xl mx-auto">
            <div className="relative inline-block mb-6 sm:mb-8">
              {/* Decorative dots pattern */}
              <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full animate-pulse delay-100"></div>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
              </div>

              {/* Main heading with gradient and shadow */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-wide relative brown-glow brown-bounce">
                <span className="brown-shimmer">Features</span>
                {/* Subtle shadow effect with brown tint */}
                <span className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-wide text-amber-800/20 blur-sm -z-10">
                  Features
                </span>
              </h2>

              {/* Decorative underline */}
              <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>

              {/* Corner decorative elements */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-2 sm:w-3 h-2 sm:h-3 border-2 border-primary rounded-full bg-background"></div>
              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-2 sm:w-3 h-2 sm:h-3 border-2 border-accent rounded-full bg-background"></div>
              <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-secondary rounded-full"></div>
              <div className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4">
              Discover the beauty of <span className="text-primary font-medium">Kolam</span> through cutting-edge AI
              technology and immersive 3D experiences.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group relative flex flex-col items-center text-center">
                <div
                  className={`
                    relative p-6 sm:p-8 flex flex-col items-center justify-center
                    bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/15
                    backdrop-blur-sm
                    hover:shadow-xl hover:shadow-primary/20 
                    hover:bg-gradient-to-br hover:from-primary/20 hover:via-secondary/30 hover:to-accent/25
                    kolam-pattern complete-boundary boundary-pulse
                    ${getShapeClasses(service.shape)}
                    w-full max-w-xs sm:max-w-sm md:w-64 lg:w-72 h-64 sm:h-72 mx-auto
                    transition-all duration-500
                  `}
                >
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full border-2 border-accent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full border-2 border-accent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full border-2 border-accent"></div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full border-2 border-accent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full border border-primary"></div>
                  </div>

                  {/* Icon */}
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-accent group-hover:scale-125 transition-transform duration-500 z-10">
                    {service.icon}
                  </div>
                  {/* Title */}
                  <h3 className="font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors z-10 px-2 sm:px-4 text-base sm:text-lg">
                    {service.title === "Kolam in Action" ? (
                      <>
                        Kolam in
                        <br />
                        Action
                      </>
                    ) : (
                      service.title
                    )}
                  </h3>
                </div>

                {/* Description and button */}
                <div className="mt-6 sm:mt-8 max-w-sm px-4">
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm">{service.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full sm:w-auto"
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
