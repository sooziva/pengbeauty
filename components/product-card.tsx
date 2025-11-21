"use client"

import { ShoppingBag, Heart } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { parseCurrency } from "@/lib/currency"

interface Variant {
  name: string
  value: string
  color?: string
}

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: string
  color: string
  image: string
  variants?: Variant[]
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  variants,
}: ProductCardProps) {
  const router = useRouter()
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState<string>(
    variants && variants.length > 0 ? variants[0].value : ""
  )
  const { addItem } = useCart()

  const handleProductClick = () => {
    router.push(`/product/${id}`)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    const priceNumber = parseCurrency(price)
    const variantName = variants?.find((v) => v.value === selectedVariant)?.name || ""
    const displayName = variants ? `${name} - ${variantName}` : name

    addItem({
      id,
      name: displayName,
      description,
      price: priceNumber,
      image,
      variant: variants ? selectedVariant : undefined,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="group cursor-pointer">
      <div
        className="relative aspect-square rounded-2xl overflow-hidden bg-card mb-4 border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/30"
        onClick={handleProductClick}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorited(!isFavorited)
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-colors shadow-md z-10"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isFavorited ? "fill-accent text-accent" : "text-foreground"}`}
          />
        </button>

        {/* Add to Bag Button - Only shows on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-6 pointer-events-none">
          <button
            onClick={handleAddToCart}
            className={`pointer-events-auto flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 font-medium ${
              isAdded
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-white text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">{isAdded ? "Added!" : "Add to Bag"}</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Variant Selector */}
        {variants && variants.length > 0 && (
          <div className="pt-2" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Select Shade:</p>
            <div className="flex flex-wrap gap-2">
              {variants.map((variant) => (
                <button
                  key={variant.value}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedVariant(variant.value)
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    selectedVariant === variant.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {variant.color && (
                    <div
                      className="w-3 h-3 rounded-full border border-current/20 flex-shrink-0"
                      style={{ backgroundColor: variant.color }}
                    />
                  )}
                  <span>{variant.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="text-primary font-semibold pt-2">{price}</p>
      </div>
    </div>
  )
}
