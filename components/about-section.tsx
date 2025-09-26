// "use client"

// import Image from "next/image"

// export function AboutSection() {
//   return (
//     <section id="about" className="min-h-screen flex items-center py-20">
//       <div className="w-full px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
//           {/* Left Side (Text) */}
//           <div>
//             <h2 className="text-5xl font-bold mb-6 text-primary">
//               Living Geometry
//               <br />
//               <span className="text-accent">Digital Rituals</span>
//             </h2>

//             <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//               Kolam begins as a dawn ritual—rice flour traced in looping constellations that bless the threshold and
//               welcome the day. Our studio studies these living blueprints, translating their rhythm and symmetry into
//               responsive 3D canvases that invite touch, movement, and discovery.
//             </p>

//             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//               Each digital weave honors the artisans who shaped it while opening new portals for cultural storytelling.
//               From projection-mapped installations to immersive web journeys, Kolam3D bridges ancestral memory with
//               contemporary expression.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
//                 <div className="w-12 h-12 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
//                   <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
//                 </div>
//                 <div className="text-sm font-medium text-primary mb-1">Interactive Design</div>
//                 <div className="text-xs text-muted-foreground">Touch & Motion Responsive</div>
//               </div>
//               <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
//                 <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
//                   <div
//                     className="w-6 h-6 bg-accent rounded-full animate-pulse"
//                     style={{ animationDelay: "0.5s" }}
//                   ></div>
//                 </div>
//                 <div className="text-sm font-medium text-accent mb-1">3D Immersion</div>
//                 <div className="text-xs text-muted-foreground">Parallax Depth Experience</div>
//               </div>
//               <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300">
//                 <div className="w-12 h-12 mx-auto mb-3 bg-secondary/20 rounded-full flex items-center justify-center">
//                   <div
//                     className="w-6 h-6 bg-secondary rounded-full animate-pulse"
//                     style={{ animationDelay: "1s" }}
//                   ></div>
//                 </div>
//                 <div className="text-sm font-medium text-secondary mb-1">Cultural Heritage</div>
//                 <div className="text-xs text-muted-foreground">Traditional Art Preserved</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side (Image + Glow) */}
//           <div className="relative">
//            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
//   <Image
//     src="/kolam-final.jpg"
//     alt="Kolam digital artwork"
//     width={360}   // ⬅️ reduce width
//     height={350}  // ⬅️ reduce height
//     className="object-contain rounded-xl"
//   />
// </div>


//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full pulse-glow" />
//             <div
//               className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full pulse-glow"
//               style={{ animationDelay: "1s" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 sm:py-20">
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-primary">
              Living Geometry
              <br />
              <span className="text-accent">Digital Rituals</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Kolam begins as a dawn ritual—rice flour traced in looping constellations that bless the threshold and
              welcome the day. Our studio studies these living blueprints, translating their rhythm and symmetry into
              responsive 3D canvases that invite touch, movement, and discovery.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Each digital weave honors the artisans who shaped it while opening new portals for cultural storytelling.
              From projection-mapped installations to immersive web journeys, Kolam3D bridges ancestral memory with
              contemporary expression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2 sm:mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-primary mb-1">Interactive Design</div>
                <div className="text-xs text-muted-foreground">Touch & Motion Responsive</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2 sm:mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                  <div
                    className="w-5 sm:w-6 h-5 sm:h-6 bg-accent rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-accent mb-1">3D Immersion</div>
                <div className="text-xs text-muted-foreground">Parallax Depth Experience</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 sm:col-span-2 md:col-span-1">
                <div className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-2 sm:mb-3 bg-secondary/20 rounded-full flex items-center justify-center">
                  <div
                    className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-secondary mb-1">Cultural Heritage</div>
                <div className="text-xs text-muted-foreground">Traditional Art Preserved</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-4xl sm:text-5xl md:text-6xl text-primary/40">⚬</div>
            </div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-accent/20 rounded-full pulse-glow" />
            <div
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-primary/20 rounded-full pulse-glow"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
