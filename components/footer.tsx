"use client"

import Link from "next/link"
import { smoothScrollTo } from "@/lib/smooth-scroll"

export default function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    smoothScrollTo(targetId)
  }

  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                PENG BEAUTY
              </h3>
            </Link>
            <p className="text-sm opacity-75">Premium lip gloss for the modern luxury consumer.</p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">Shop</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleAnchorClick(e, "products")}
                  className="hover:opacity-100 transition-opacity"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleAnchorClick(e, "products")}
                  className="hover:opacity-100 transition-opacity"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => handleAnchorClick(e, "products")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Bestsellers
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleAnchorClick(e, "about")}
                  className="hover:opacity-100 transition-opacity"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleAnchorClick(e, "about")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="/cart" className="hover:opacity-100 transition-opacity">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:opacity-100 transition-opacity">
                  Checkout
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleAnchorClick(e, "about")}
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2025 Peng Beauty. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                TikTok
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
