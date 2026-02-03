"use client"

import { useState } from "react"
import { ShoppingCart, Filter, SlidersHorizontal, Monitor, Cpu, HardDrive, Gamepad2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categories = [
  { id: "all", label: "All Products", icon: <SlidersHorizontal className="w-4 h-4" /> },
  { id: "laptops", label: "Laptops", icon: <Monitor className="w-4 h-4" /> },
  { id: "desktops", label: "Gaming PCs", icon: <Gamepad2 className="w-4 h-4" /> },
  { id: "components", label: "Components", icon: <Cpu className="w-4 h-4" /> },
  { id: "storage", label: "Storage", icon: <HardDrive className="w-4 h-4" /> },
]

const priceRanges = [
  { id: "all", label: "All Prices" },
  { id: "under500", label: "Under RM500" },
  { id: "500-1000", label: "RM500 - RM1000" },
  { id: "1000-2000", label: "RM1000 - RM2000" },
  { id: "above2000", label: "Above RM2000" },
]

const products = [
  {
    id: 1,
    name: "Refurbished Dell Latitude 5520",
    category: "laptops",
    price: 1299,
    originalPrice: 1899,
    condition: "Excellent",
    specs: ["i5-11th Gen", "16GB RAM", "512GB SSD", "15.6\" FHD"],
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "IZZY Gaming PC - Starter",
    category: "desktops",
    price: 2499,
    originalPrice: null,
    condition: "New Build",
    specs: ["Ryzen 5 5600", "RTX 3060", "16GB RAM", "500GB NVMe"],
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "IZZY Gaming PC - Pro",
    category: "desktops",
    price: 4999,
    originalPrice: null,
    condition: "New Build",
    specs: ["Ryzen 7 7700X", "RTX 4070", "32GB RAM", "1TB NVMe"],
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Refurbished Lenovo ThinkPad T480",
    category: "laptops",
    price: 899,
    originalPrice: 1299,
    condition: "Good",
    specs: ["i5-8th Gen", "8GB RAM", "256GB SSD", "14\" FHD"],
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "Samsung 970 EVO Plus 1TB",
    category: "storage",
    price: 449,
    originalPrice: 549,
    condition: "New",
    specs: ["NVMe M.2", "3500MB/s Read", "3300MB/s Write", "5-Year Warranty"],
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: "Corsair Vengeance RGB 32GB Kit",
    category: "components",
    price: 499,
    originalPrice: null,
    condition: "New",
    specs: ["DDR4-3600", "2x16GB", "RGB Lighting", "Intel XMP 2.0"],
    inStock: true,
    featured: false,
  },
  {
    id: 7,
    name: "MSI GeForce RTX 4060",
    category: "components",
    price: 1399,
    originalPrice: 1599,
    condition: "New",
    specs: ["8GB GDDR6", "Dual Fan", "DLSS 3", "Ray Tracing"],
    inStock: false,
    featured: false,
  },
  {
    id: 8,
    name: "Refurbished HP EliteBook 840 G7",
    category: "laptops",
    price: 1599,
    originalPrice: 2199,
    condition: "Like New",
    specs: ["i7-10th Gen", "16GB RAM", "512GB SSD", "14\" FHD"],
    inStock: true,
    featured: false,
  },
  {
    id: 9,
    name: "WD Black SN850X 2TB",
    category: "storage",
    price: 799,
    originalPrice: 999,
    condition: "New",
    specs: ["NVMe M.2", "7300MB/s Read", "6600MB/s Write", "PCIe Gen4"],
    inStock: true,
    featured: false,
  },
  {
    id: 10,
    name: "NZXT H510 Flow Case",
    category: "components",
    price: 349,
    originalPrice: null,
    condition: "New",
    specs: ["ATX Mid Tower", "Mesh Front", "Tempered Glass", "USB-C"],
    inStock: true,
    featured: false,
  },
  {
    id: 11,
    name: "IZZY Gaming PC - Elite",
    category: "desktops",
    price: 7999,
    originalPrice: null,
    condition: "New Build",
    specs: ["Ryzen 9 7950X", "RTX 4080", "64GB RAM", "2TB NVMe"],
    inStock: true,
    featured: true,
  },
  {
    id: 12,
    name: "Crucial P3 Plus 500GB",
    category: "storage",
    price: 199,
    originalPrice: 249,
    condition: "New",
    specs: ["NVMe M.2", "5000MB/s Read", "3600MB/s Write", "PCIe Gen4"],
    inStock: true,
    featured: false,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPrice, setSelectedPrice] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory
    
    let priceMatch = true
    if (selectedPrice === "under500") priceMatch = product.price < 500
    else if (selectedPrice === "500-1000") priceMatch = product.price >= 500 && product.price < 1000
    else if (selectedPrice === "1000-2000") priceMatch = product.price >= 1000 && product.price < 2000
    else if (selectedPrice === "above2000") priceMatch = product.price >= 2000

    return categoryMatch && priceMatch
  })

  const addToCart = (productId: number) => {
    setCart((prev) => [...prev, productId])
  }

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((id) => id !== productId))
  }

  const isInCart = (productId: number) => cart.includes(productId)

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-[var(--font-orbitron)] text-4xl md:text-5xl font-bold text-foreground mb-4">
                <span className="text-[#00FFFF] neon-text">Shop</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Quality refurbished laptops, custom gaming PCs, and components at competitive prices. 
                All items come with warranty.
              </p>
            </div>

            {/* Cart Summary */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00FFFF]/30 bg-[#111111] text-foreground hover:border-[#00FFFF] transition-colors">
                  <ShoppingCart className="w-5 h-5 text-[#00FFFF]" />
                  <span>Cart ({cart.length})</span>
                </button>
              </div>
              <Button
                variant="outline"
                className="md:hidden border-[#00FFFF]/30 text-[#00FFFF] bg-transparent"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-[var(--font-orbitron)] text-sm font-bold text-[#00FFFF] uppercase tracking-wider mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors",
                          selectedCategory === cat.id
                            ? "bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/30"
                            : "text-muted-foreground hover:text-foreground hover:bg-[#111111]"
                        )}
                      >
                        {cat.icon}
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-[var(--font-orbitron)] text-sm font-bold text-[#00FFFF] uppercase tracking-wider mb-4">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => setSelectedPrice(range.id)}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg text-left transition-colors",
                          selectedPrice === range.id
                            ? "bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/30"
                            : "text-muted-foreground hover:text-foreground hover:bg-[#111111]"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-[#111111] rounded-xl border border-[#00FFFF]/20 p-4">
                  <p className="text-muted-foreground text-sm mb-3">
                    Looking for something specific? We can source it for you!
                  </p>
                  <Button 
                    asChild
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] font-bold"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </aside>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="fixed inset-0 z-50 md:hidden">
                <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#0A0A0A] p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-[var(--font-orbitron)] text-lg font-bold text-foreground">Filters</h2>
                    <button onClick={() => setShowFilters(false)} className="text-muted-foreground">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Categories */}
                  <div className="mb-8">
                    <h3 className="font-[var(--font-orbitron)] text-sm font-bold text-[#00FFFF] uppercase tracking-wider mb-4">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id)
                            setShowFilters(false)
                          }}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-colors",
                            selectedCategory === cat.id
                              ? "bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/30"
                              : "text-muted-foreground hover:text-foreground hover:bg-[#111111]"
                          )}
                        >
                          {cat.icon}
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-[var(--font-orbitron)] text-sm font-bold text-[#00FFFF] uppercase tracking-wider mb-4">
                      Price Range
                    </h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => {
                            setSelectedPrice(range.id)
                            setShowFilters(false)
                          }}
                          className={cn(
                            "w-full px-4 py-2 rounded-lg text-left transition-colors",
                            selectedPrice === range.id
                              ? "bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/30"
                              : "text-muted-foreground hover:text-foreground hover:bg-[#111111]"
                          )}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
                </p>
              </div>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id}
                    className="relative bg-[#111111] rounded-xl border border-[#00FFFF]/20 overflow-hidden group hover:border-[#00FFFF]/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all"
                  >
                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] text-[#0A0A0A] text-xs font-bold rounded">
                        FEATURED
                      </div>
                    )}

                    {/* Out of Stock Overlay */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-[#0A0A0A]/70 z-20 flex items-center justify-center">
                        <span className="px-4 py-2 bg-red-500/20 text-red-400 font-bold rounded-lg border border-red-500/30">
                          OUT OF STOCK
                        </span>
                      </div>
                    )}

                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] flex items-center justify-center p-6">
                      <div className="w-full h-full rounded-lg border border-[#00FFFF]/10 flex items-center justify-center">
                        {product.category === "laptops" && <Monitor className="w-16 h-16 text-[#00FFFF]/30" />}
                        {product.category === "desktops" && <Gamepad2 className="w-16 h-16 text-[#00FFFF]/30" />}
                        {product.category === "components" && <Cpu className="w-16 h-16 text-[#00FFFF]/30" />}
                        {product.category === "storage" && <HardDrive className="w-16 h-16 text-[#00FFFF]/30" />}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      {/* Condition */}
                      <span className={cn(
                        "text-xs font-medium px-2 py-1 rounded",
                        product.condition === "New" || product.condition === "New Build" 
                          ? "bg-green-500/20 text-green-400"
                          : product.condition === "Like New" || product.condition === "Excellent"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      )}>
                        {product.condition}
                      </span>

                      {/* Title */}
                      <h3 className="font-semibold text-foreground mt-2 mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.specs.slice(0, 3).map((spec) => (
                          <span key={spec} className="text-xs text-muted-foreground bg-[#0A0A0A] px-2 py-0.5 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="font-[var(--font-orbitron)] text-xl font-bold text-[#00FFFF]">
                            RM{product.price.toLocaleString()}
                          </div>
                          {product.originalPrice && (
                            <div className="text-muted-foreground text-sm line-through">
                              RM{product.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                        
                        {product.inStock && (
                          <Button
                            size="sm"
                            onClick={() => isInCart(product.id) ? removeFromCart(product.id) : addToCart(product.id)}
                            className={cn(
                              "transition-all",
                              isInCart(product.id)
                                ? "bg-[#00FFFF] text-[#0A0A0A]"
                                : "bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF]/30 hover:bg-[#00FFFF]/20"
                            )}
                          >
                            {isInCart(product.id) ? "Added" : "Add to Cart"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#00FFFF]/10 flex items-center justify-center mx-auto mb-4">
                    <Filter className="w-8 h-8 text-[#00FFFF]" />
                  </div>
                  <h3 className="font-[var(--font-orbitron)] text-xl font-bold text-foreground mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or browse all products.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all")
                      setSelectedPrice("all")
                    }}
                    variant="outline"
                    className="border-[#00FFFF]/50 text-[#00FFFF]"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-[#111111] rounded-2xl border border-[#00FFFF]/20 p-8 text-center">
            <h3 className="font-[var(--font-orbitron)] text-xl font-bold text-foreground mb-4">
              Secure Payments & Easy Checkout
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We accept various payment methods including online banking, credit/debit cards, and cash on pickup. 
              Contact us for installment options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["FPX", "Visa", "Mastercard", "Touch n Go", "Cash"].map((method) => (
                <div 
                  key={method}
                  className="px-4 py-2 bg-[#0A0A0A] rounded-lg border border-[#00FFFF]/20 text-foreground text-sm"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
