"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag, Heart } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { usePathname } from "next/navigation"
import { smoothScrollTo } from "@/lib/smooth-scroll"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const pathname = usePathname()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    if (pathname !== "/") {
      window.location.href = `/#${targetId}`
    } else {
      smoothScrollTo(targetId)
    }
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl font-semibold tracking-wider bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PENG BEAUTY
            </h1>
            {/* <p className="text-xs text-muted-foreground">BEAUTY</p> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              onClick={(e) => handleNavClick(e, "products")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              className="hidden sm:inline-flex relative hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a
              href="#products"
              onClick={(e) => handleNavClick(e, "products")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Link
              href="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
