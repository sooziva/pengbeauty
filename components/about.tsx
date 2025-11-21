export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted order-2 md:order-1 shadow-xl">
            <img
              src="/hero.png"
              alt="Peng Beauty Studio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-muted-foreground text-sm tracking-widest uppercase font-semibold">Our Story</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-balance text-foreground">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Passion</span>{" "}
                for Perfection
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Peng Beauty was founded on a simple belief: luxury should be accessible, but never compromised. Every
                formula, every shade, every detail has been meticulously crafted to exceed expectations.
              </p>
              <p>
                Our lip glosses are infused with premium botanical extracts and cutting-edge beauty technology,
                delivering color that lasts and lips that feel nourished.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="p-4 rounded-xl bg-muted/40 border border-border">
                <p className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  100%
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Cruelty-Free</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border">
                <p className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  6
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Signature Shades</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/40 border border-border">
                <p className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  24hrs
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">Long-Wear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
