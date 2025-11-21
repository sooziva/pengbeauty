import ProductCard from "./product-card"

const products = [
  {
    id: 1,
    name: "Velvet Rose",
    description: "A sophisticated rosy pink with subtle shimmer",
    price: "₦10,000",
    color: "from-rose-200 to-rose-400",
    image: "/1a4b263b-4cea-41b5-9a6c-96a22a2ba4c8.JPG",
  },
  {
    id: 2,
    name: "Golden Hour",
    description: "Warm champagne glow for any occasion",
    price: "₦10,000",
    color: "from-amber-200 to-amber-400",
    image: "/4630d1f5-1a76-4910-879e-058b5944e0cd.JPG",
  },
  {
    id: 3,
    name: "Berry Bliss",
    description: "Deep berry tone with luminous finish",
    price: "₦10,000",
    color: "from-red-300 to-red-500",
    image: "/d6f47399-9eab-4a5c-81f1-e2a9a4af6521.JPG",
  },
  {
    id: 4,
    name: "Mystique",
    description: "Timeless nude with buildable coverage",
    price: "₦10,000",
    color: "from-yellow-100 to-yellow-300",
    image: "/IMG_0385.JPG",
  },
  {
    id: 5,
    name: "Juicy",
    description: "Soft mauve with pearlescent shimmer",
    price: "₦10,000",
    color: "from-purple-200 to-purple-400",
    image: "/IMG_0386.PNG",
  },
  {
    id: 6,
    name: "Savage",
    description: "Vibrant coral with hydrating formula",
    price: "₦10,000",
    color: "from-orange-200 to-orange-400",
    image: "/IMG_0390.jpg",
  },
]

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <p className="text-primary text-sm tracking-widest uppercase font-semibold">Our Collection</p>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-balance text-foreground">Six Shades of Luxury</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Each shade is expertly formulated to deliver lasting color and a plumping, nourishing finish
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
