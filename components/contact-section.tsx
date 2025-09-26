"use client"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to</span> <span className="text-primary">Explore?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Join us on a journey through the sacred geometry of Kolam. Experience tradition like never before.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Email</h3>
              <p className="text-muted-foreground">hello@kolam3d.com</p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Connect</h3>
              <p className="text-muted-foreground">Follow our journey</p>
            </div>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
