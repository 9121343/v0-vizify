import type { Metadata } from "next"
import ShopNavbar from "@/components/shop/shop-navbar"
import ShopFooter from "@/components/shop/shop-footer"
import CategoryHeader from "@/components/shop/category/category-header"
import ProductGrid from "@/components/shop/category/product-grid"
import FilterSidebar from "@/components/shop/category/filter-sidebar"
import MobileFilterDrawer from "@/components/shop/category/mobile-filter-drawer"

export const metadata: Metadata = {
  title: "Men's Shoes | ShoeVista",
  description:
    "Browse our collection of men's shoes for every occasion. Find the perfect pair for your style and needs.",
}

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-white antialiased">
      {/* Shop-specific navbar */}
      <ShopNavbar />

      {/* Category Header */}
      <CategoryHeader
        title="Men's Shoes"
        description="Browse our collection of men's shoes for every occasion. Find the perfect pair for your style and needs."
        image="/placeholder.svg?height=300&width=1200"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filter Sidebar - hidden on mobile */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Mobile Filter Drawer - visible only on mobile */}
          <div className="lg:hidden mb-4">
            <MobileFilterDrawer />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>

      {/* Footer */}
      <ShopFooter />
    </main>
  )
}
