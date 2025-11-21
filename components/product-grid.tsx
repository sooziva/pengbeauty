import ProductCard from "./product-card"

const products = [
  {
    id: 1,
    name: "PB Luxury Set",
    description: "Warm champagne glow for any occasion",
    price: "₦110,000",
    color: "from-amber-200 to-amber-400",
    image: "/4630d1f5-1a76-4910-879e-058b5944e0cd.JPG",
  },
  {
    id: 2,
    name: "Berry Bliss",
    description: "Deep berry tone with luminous finish",
    price: "₦10,000",
    color: "from-red-300 to-red-500",
    image: "/d6f47399-9eab-4a5c-81f1-e2a9a4af6521.JPG",
  },
  {
    id: 3,
    name: "Mystique",
    description: "Timeless nude with buildable coverage",
    price: "₦10,000",
    color: "from-yellow-100 to-yellow-300",
    image: "/IMG_0385.JPG",
  },
  {
    id: 4,
    name: "Juicy",
    description: "Soft mauve with pearlescent shimmer",
    price: "₦10,000",
    color: "from-purple-200 to-purple-400",
    image: "/IMG_0386.PNG",
  },
  {
    id: 5,
    name: "Savage",
    description: "Vibrant coral with hydrating formula",
    price: "₦10,000",
    color: "from-orange-200 to-orange-400",
    image: "/IMG_0396.PNG",
  },
  {
    id: 6,
    name: "Eye pencil",
    description: "Long-lasting eye pencil with smooth application",
    price: "₦10,000",
    color: "from-orange-100 to-orange-300",
    image: "/IMG_0393.PNG",
    variants: [
      { name: "Foxy", value: "foxy", color: "#DC2626" }, // Red
      { name: "Toffee", value: "toffee", color: "#78350F" }, // Dark Brown
      { name: "Brique", value: "brique", color: "#92400E" }, // Brown
      { name: "Midnight", value: "midnight", color: "#000000" }, // Black
    ],
  },
  {
    id: 7,
    name: "Enchant",
    description: "Rich plum with velvety finish",
    price: "₦10,000",
    color: "from-purple-300 to-purple-500",
    image: "/IMG_0395.PNG",
  },
  {
    id: 8,
    name: "Tease",
    description: "Deep wine with sophisticated shimmer",
    price: "₦10,000",
    color: "from-red-400 to-red-600",
    image: "/IMG_0397.JPG",
  },
  {
    id: 9,
    name: "Crystal",
    description: "Bold fuchsia with high-shine finish",
    price: "₦10,000",
    color: "from-fuchsia-300 to-fuchsia-500",
    image: "/IMG_0398.PNG",
  },
  {
    id: 10,
    name: "coco",
    description: "Luxurious berry with glossy finish",
    price: "₦10,000",
    color: "from-purple-400 to-purple-600",
    image: "/IMG_0399 3.PNG",
  },
  {
    id: 11,
    name: "Charm",
    description: "Elegant mauve with silky texture",
    price: "₦10,000",
    color: "from-purple-200 to-purple-400",
    image: "/IMG_0401.PNG",
  },
  {
    id: 12,
    name: "Wild n out",
    description: "Striking red with long-lasting color",
    price: "₦10,000",
    color: "from-red-400 to-red-600",
    image: "/IMG_0402.PNG",
  },
  {
    id: 13,
    name: "Peaches",
    description: "Calming nude with natural finish",
    price: "₦10,000",
    color: "from-beige-200 to-beige-400",
    image: "/IMG_0403.PNG",
  },
  {
    id: 14,
    name: "Bloom",
    description: "Bright coral with tropical vibes",
    price: "₦10,000",
    color: "from-orange-300 to-orange-500",
    image: "/IMG_0405.PNG",
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
          <h2 className="text-4xl md:text-5xl font-light text-balance text-foreground">Our Luxury Collection</h2>
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
