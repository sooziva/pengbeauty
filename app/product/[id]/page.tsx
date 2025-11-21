"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft, ShoppingBag, Heart, Minus, Plus } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { parseCurrency, formatCurrency } from "@/lib/currency"

// Import products - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Golden Hour",
    description: "Warm champagne glow for any occasion",
    price: "₦10,000",
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
    description: "Long-lasting eye pencil with smooth application. Perfect for defining your eyes with precision and style.",
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

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  const [selectedVariant, setSelectedVariant] = useState<string>(
    product?.variants && product.variants.length > 0 ? product.variants[0].value : ""
  )
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  const { addItem } = useCart()

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-20 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-light mb-4">Product not found</h1>
            <button
              onClick={() => router.push("/#products")}
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg"
            >
              Back to Products
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    const priceNumber = parseCurrency(product.price)
    const variantName = product.variants?.find((v) => v.value === selectedVariant)?.name || ""
    const displayName = product.variants ? `${product.name} - ${variantName}` : product.name

    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: displayName,
        description: product.description,
        price: priceNumber,
        image: product.image,
        variant: product.variants ? selectedVariant : undefined,
      })
    }

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-light mb-4 text-foreground">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="text-3xl font-semibold text-primary">{product.price}</div>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                    Select Shade:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.value}
                        onClick={() => setSelectedVariant(variant.value)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 transition-all font-medium ${
                          selectedVariant === variant.value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        <div
                          className="w-6 h-6 rounded-full border-2 border-current/20"
                          style={{ backgroundColor: variant.color }}
                        />
                        <span>{variant.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div>
                <p className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">Quantity:</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-16 text-center text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium transition-all ${
                  isAdded
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{isAdded ? "Added to Cart!" : "Add to Cart"}</span>
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 border-border hover:bg-muted transition-colors font-medium"
              >
                <Heart
                  className={`w-5 h-5 ${isFavorited ? "fill-accent text-accent" : "text-foreground"}`}
                />
                <span>{isFavorited ? "Saved to Wishlist" : "Add to Wishlist"}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

