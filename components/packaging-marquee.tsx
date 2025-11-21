"use client"

export default function PackagingMarquee() {
  const packagingImages = [
    "/IMG_0391.JPG",
    "/d6f47399-9eab-4a5c-81f1-e2a9a4af6521.JPG",
    "/hero.PNG",
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...packagingImages, ...packagingImages]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-transparent to-muted/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Marquee Container */}
          <div className="flex gap-8 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
              >
                <img
                  src={image}
                  alt={`Packaging ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

