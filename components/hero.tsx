"use client"

import { smoothScrollTo } from "@/lib/smooth-scroll"

export default function Hero() {
  const handleShopClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    smoothScrollTo("products")
  }

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    smoothScrollTo("about")
  }

  return (
    <section className="pt-32 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-muted-foreground text-sm tracking-widest uppercase font-semibold">
                  Luxury Redefined
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl font-light leading-tight text-balance text-foreground">
                Luminous Gloss,{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Timeless Elegance
                </span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Crafted with the finest ingredients, Peng Beauty lip glosses deliver uncompromising quality and a
              luxurious finish that speaks for itself.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleShopClick}
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all font-medium rounded-lg"
              >
                Shop Collection
              </button>
              <button
                onClick={handleLearnMoreClick}
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 transition-colors font-medium rounded-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
            <img
              src="/hero.png"
              alt="Peng Beauty Lip Gloss"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
