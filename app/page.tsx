"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductGrid from "@/components/product-grid"
import PackagingMarquee from "@/components/packaging-marquee"
import About from "@/components/about"
import Footer from "@/components/footer"
import { smoothScrollTo } from "@/lib/smooth-scroll"

export default function Home() {
  useEffect(() => {
    // Handle hash links when page loads
    if (window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => smoothScrollTo(hash), 100)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PackagingMarquee />
        <ProductGrid />
      
        <About />
      </main>
      <Footer />
    </>
  )
}
