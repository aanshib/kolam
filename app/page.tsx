// "use client"

// import { Suspense } from "react"
// import { Canvas } from "@react-three/fiber"
// import { Environment, OrbitControls, ScrollControls, Scroll } from "@react-three/drei"
// import { KolamScene } from "@/components/kolam-scene"
// import { Navigation } from "@/components/navigation"
// import { HeroSection } from "@/components/hero-section"
// import { AboutSection } from "@/components/about-section"
// import { Footer } from "@/components/footer"
// import { ServicesSection } from "@/components/services-section"
// import { ScrollProvider } from "@/components/scroll-context"

// export default function Home() {
//   return (
//     <ScrollProvider>
//       <div className="w-full h-screen overflow-hidden">
//         <Canvas
//           camera={{ position: [0, 0, 10], fov: 75 }}
//           className="bg-gradient-to-br from-background via-secondary/20 to-accent/10"
//         >
//           <Suspense fallback={null}>
//             <Environment preset="dawn" />
//             <ambientLight intensity={0.4} />
//             <directionalLight position={[10, 10, 5]} intensity={1} />

//             <ScrollControls pages={8} damping={0.1}>
//               <KolamScene />
//               <Scroll html>
//                 <div className="w-full flex flex-col items-center">
//                   <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <Navigation />
//                     <HeroSection />
//                     <AboutSection />
//                     <ServicesSection />
//                     <Footer />
//                   </div>
//                 </div>
//               </Scroll>
//             </ScrollControls>

//             <OrbitControls
//               enablePan={false}
//               enableZoom={false}
//               enableRotate={true}
//               autoRotate={true}
//               autoRotateSpeed={0.5}
//               maxPolarAngle={Math.PI / 2}
//               minPolarAngle={Math.PI / 3}
//             />
//           </Suspense>
//         </Canvas>
//       </div>
//     </ScrollProvider>
//   )
// }
"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, ScrollControls, Scroll } from "@react-three/drei"
import { KolamScene } from "@/components/kolam-scene"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { ScrollProvider } from "@/components/scroll-context"

export default function Home() {
  return (
    <ScrollProvider>
      <div className="w-full min-h-screen overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          className="bg-gradient-to-br from-background via-secondary/20 to-accent/10"
        >
          <Suspense fallback={null}>
            <Environment preset="dawn" />
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} />

            <ScrollControls pages={8} damping={0.1}>
              <KolamScene />
              <Scroll html>
                <div className="w-full flex flex-col items-center">
                  <div className="w-full max-w-7xl mx-auto">
                    <Navigation />
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <Footer />
                  </div>
                </div>
              </Scroll>
            </ScrollControls>

            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
      </div>
    </ScrollProvider>
  )
}
