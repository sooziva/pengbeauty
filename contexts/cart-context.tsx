"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export interface CartItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  quantity: number
  variant?: string
  cartKey: string // Unique key combining id and variant
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity" | "cartKey">) => void
  removeItem: (cartKey: string) => void
  updateQuantity: (cartKey: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: Omit<CartItem, "quantity" | "cartKey">) => {
    const cartKey = item.variant ? `${item.id}-${item.variant}` : `${item.id}`
    
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.cartKey === cartKey)
      if (existingItem) {
        return prevItems.map((i) =>
          i.cartKey === cartKey ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prevItems, { ...item, quantity: 1, cartKey }]
    })
  }

  const removeItem = (cartKey: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.cartKey !== cartKey))
  }

  const updateQuantity = (cartKey: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartKey)
      return
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.cartKey === cartKey ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

