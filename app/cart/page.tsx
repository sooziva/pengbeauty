"use client"

import { useCart } from "@/contexts/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { formatCurrency } from "@/lib/currency"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart()

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-20 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="text-4xl font-light mb-4 text-foreground">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Discover our collection of luxury lip glosses and add something beautiful to your cart.
              </p>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all font-medium rounded-lg"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-light mb-2 text-foreground">Shopping Cart</h1>
            <p className="text-muted-foreground">
              {getTotalItems()} {getTotalItems() === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-lg font-semibold text-primary">{formatCurrency(item.price)}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 rounded-lg border border-border hover:bg-muted transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 rounded-lg border border-border hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm text-muted-foreground mb-1">Subtotal</p>
                    <p className="text-xl font-semibold text-foreground">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-6 rounded-2xl border border-border bg-card space-y-6">
                <h2 className="text-2xl font-light text-foreground">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatCurrency(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-lg font-semibold text-foreground">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {formatCurrency(getTotalPrice())}
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all font-medium rounded-lg"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#products"
                  className="block text-center text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

