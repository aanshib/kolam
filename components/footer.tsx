// "use client"

// export function Footer() {
//   return (
//     <footer className="w-full bg-background/95 backdrop-blur-sm border-t border-border py-16 flex flex-col items-center">
//       <div className="max-w-7xl w-full px-6 flex flex-col items-center">
//         {" "}
//         {/* Added flexbox for centering children */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
//           {" "}
//           {/* Removed mx-auto text-center, added w-full */}
//           <div className="md:col-span-2">
// <h3 className="text-2xl font-bold text-primary mb-4 text-center">
//   Kolam3D
// </h3>

//             <p className="text-muted-foreground mb-4 max-w-md mx-auto text-center">
//               {" "}
//               {/* Added text-center */}
//               Experience the sacred geometry of traditional Kolam art through cutting-edge AI technology and immersive
//               3D experiences.
//             </p>
//           </div>
//           <div className="text-center">
//             {" "}
//             {/* Added text-center */}
//             <h4 className="font-semibold text-foreground mb-4">Features</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>Gesture-Based Creation</li>
//               <li>Neural Brush Strokes</li>
//               <li>AI Co-creation</li>
//               <li>Kolam StyleX</li>
//               <li>Kolam in Action</li>
//             </ul>
//           </div>
//           <div className="text-center">
//             {" "}
//             {/* Added text-center */}
//             <h4 className="font-semibold text-foreground mb-4">Contact</h4>
//             <div className="space-y-2 text-muted-foreground">
//               <p>hello@kolam3d.com</p>
//               <p>Follow our journey</p>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground w-full">
//           {" "}
//           {/* Added w-full */}
//           <p>&copy; 2025 Kolam3D. All rights reserved. Preserving tradition through innovation.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }
"use client"

export function Footer() {
  return (
    <footer className="w-full bg-background/95 backdrop-blur-sm border-t border-border py-12 sm:py-16 flex flex-col items-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full text-center sm:text-left">
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Kolam3D</h3>
            <p className="text-muted-foreground mb-3 sm:mb-4 max-w-md mx-auto sm:mx-0 text-sm sm:text-base">
              Experience the sacred geometry of traditional Kolam art through cutting-edge AI technology and immersive
              3D experiences.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Features</h4>
            <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm">
              <li>Gesture-Based Creation</li>
              <li>Neural Brush Strokes</li>
              <li>AI Co-creation</li>
              <li>Kolam StyleX</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <div className="space-y-1 sm:space-y-2 text-muted-foreground text-sm">
              <p>hello@kolam3d.com</p>
              <p>Follow our journey</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground w-full">
          <p className="text-xs sm:text-sm">
            &copy; 2025 Kolam3D. All rights reserved. Preserving tradition through innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
