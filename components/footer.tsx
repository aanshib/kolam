"use client"

export function Footer() {
  return (
    <footer className="w-full bg-background/95 backdrop-blur-sm border-t border-border py-16 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 flex flex-col items-center">
        {" "}
        {/* Added flexbox for centering children */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {" "}
          {/* Removed mx-auto text-center, added w-full */}
          <div className="md:col-span-2">
<h3 className="text-2xl font-bold text-primary mb-4 text-center">
  Kolam3D
</h3>

            <p className="text-muted-foreground mb-4 max-w-md mx-auto text-center">
              {" "}
              {/* Added text-center */}
              Experience the sacred geometry of traditional Kolam art through cutting-edge AI technology and immersive
              3D experiences.
            </p>
          </div>
          <div className="text-center">
            {" "}
            {/* Added text-center */}
            <h4 className="font-semibold text-foreground mb-4">Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Gesture-Based Creation</li>
              <li>Neural Brush Strokes</li>
              <li>AI Co-creation</li>
              <li>Kolam StyleX</li>
              <li>Kolam in Action</li>
            </ul>
          </div>
          <div className="text-center">
            {" "}
            {/* Added text-center */}
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@kolam3d.com</p>
              <p>Follow our journey</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground w-full">
          {" "}
          {/* Added w-full */}
          <p>&copy; 2025 Kolam3D. All rights reserved. Preserving tradition through innovation.</p>
        </div>
      </div>
    </footer>
  )
}
