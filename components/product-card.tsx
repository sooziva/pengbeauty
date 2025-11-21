"use client"

import { ShoppingBag, Heart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/contexts/cart-context"
import { parseCurrency } from "@/lib/currency"

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: string
  color: string
  image: string
}

export default function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    const priceNumber = parseCurrency(price)
    
    addItem({
      id,
      name,
      description,
      price: priceNumber,
      image,
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-card mb-4 border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/30">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Wishlist Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur hover:bg-white transition-colors shadow-md"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isFavorited ? "fill-accent text-accent" : "text-foreground"}`}
          />
        </button>

        {/* Add to Bag Button */}
        <button
          onClick={handleAddToCart}
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-center pb-6"
        >
          <div
            className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 font-medium ${
              isAdded
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-white text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">{isAdded ? "Added!" : "Add to Bag"}</span>
          </div>
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-primary font-semibold pt-2">{price}</p>
      </div>
    </div>
  )
}
