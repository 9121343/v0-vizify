"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Star, ShoppingBag, Grid, Grid3X3 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample product data
const products = [
  {
    id: 1,
    name: "Air Max Pulse",
    brand: "Nike",
    price: 149.99,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    isNew: true,
  },
  {
    id: 2,
    name: "Ultraboost Light",
    brand: "Adidas",
    price: 189.99,
    rating: 4.7,
    reviews: 98,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    isNew: true,
  },
  {
    id: 3,
    name: "Classic Leather",
    brand: "Reebok",
    price: 79.99,
    rating: 4.5,
    reviews: 76,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#FFFF00"],
    isNew: false,
  },
  {
    id: 4,
    name: "Old Skool",
    brand: "Vans",
    price: 69.99,
    rating: 4.6,
    reviews: 112,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#00FF00"],
    isNew: false,
  },
  {
    id: 5,
    name: "ZoomX Invincible",
    brand: "Nike",
    price: 179.99,
    rating: 4.9,
    reviews: 42,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#FF00FF"],
    isNew: true,
  },
  {
    id: 6,
    name: "Gel-Kayano 29",
    brand: "Asics",
    price: 159.99,
    rating: 4.8,
    reviews: 36,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#00FFFF"],
    isNew: false,
  },
  {
    id: 7,
    name: "Fresh Foam X",
    brand: "New Balance",
    price: 139.99,
    rating: 4.7,
    reviews: 28,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#FF5733"],
    isNew: false,
  },
  {
    id: 8,
    name: "Speedgoat 5",
    brand: "Hoka",
    price: 159.99,
    rating: 4.8,
    reviews: 32,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#C70039"],
    isNew: true,
  },
  {
    id: 9,
    name: "Air Force 1",
    brand: "Nike",
    price: 109.99,
    rating: 4.9,
    reviews: 256,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#900C3F"],
    isNew: false,
  },
  {
    id: 10,
    name: "Stan Smith",
    brand: "Adidas",
    price: 89.99,
    rating: 4.8,
    reviews: 198,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#581845"],
    isNew: false,
  },
  {
    id: 11,
    name: "Chuck Taylor All Star",
    brand: "Converse",
    price: 59.99,
    rating: 4.7,
    reviews: 176,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#FFC300"],
    isNew: false,
  },
  {
    id: 12,
    name: "Classic Clog",
    brand: "Crocs",
    price: 49.99,
    rating: 4.6,
    reviews: 142,
    image: "/placeholder.svg?height=300&width=300",
    colors: ["#000000", "#FFFFFF", "#DAF7A6"],
    isNew: false,
  },
]

export default function ProductGrid() {
  const [gridView, setGridView] = useState<"grid" | "list">("grid")
  const [sortOption, setSortOption] = useState("featured")
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId))
    } else {
      setFavorites([...favorites, productId])
    }
  }

  return (
    <div>
      {/* Results header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Men's Shoes</h2>
          <p className="text-gray-500 text-sm">{products.length} results</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={gridView === "grid" ? "bg-gray-100" : ""}
              onClick={() => setGridView("grid")}
            >
              <Grid3X3 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={gridView === "list" ? "bg-gray-100" : ""}
              onClick={() => setGridView("list")}
            >
              <Grid className="h-5 w-5" />
            </Button>
          </div>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Customer Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product grid */}
      <div
        className={
          gridView === "grid"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            : "space-y-4"
        }
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={
              gridView === "grid"
                ? "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                : "group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex"
            }
          >
            {/* Product image */}
            <div
              className={
                gridView === "grid"
                  ? "relative aspect-square bg-gray-100 overflow-hidden"
                  : "relative w-1/3 bg-gray-100 overflow-hidden"
              }
            >
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* New tag */}
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                  New
                </div>
              )}

              {/* Quick actions */}
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full ${
                    favorites.includes(product.id) ? "bg-red-500 text-white" : "bg-white text-gray-700"
                  } hover:bg-red-500 hover:text-white transition-colors`}
                  onClick={(e) => {
                    e.preventDefault()
                    toggleFavorite(product.id)
                  }}
                >
                  <Heart className="h-5 w-5" fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                </Button>
              </div>

              {/* Quick add to cart - visible on hover for grid view */}
              {gridView === "grid" && (
                <div className="absolute bottom-0 left-0 right-0 bg-white p-2 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-1">
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              )}
            </div>

            {/* Product info */}
            <div className={gridView === "grid" ? "p-4" : "flex-1 p-4 flex flex-col"}>
              <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
              <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3"
                      fill={i < Math.floor(product.rating) ? "#FFC107" : "none"}
                      stroke={i < Math.floor(product.rating) ? "#FFC107" : "currentColor"}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="font-bold text-gray-900">${product.price.toFixed(2)}</div>

              {/* Color options */}
              <div className="flex items-center mt-2 space-x-1">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full border ${color === "#FFFFFF" ? "border-gray-300" : "border-transparent"}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">+{product.colors.length} colors</span>
              </div>

              {/* Add to cart button for list view */}
              {gridView === "list" && (
                <div className="mt-auto pt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-1">
          <Button variant="outline" size="icon" disabled>
            <span className="sr-only">Previous page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

          <Button variant="outline" size="sm" className="bg-purple-600 text-white border-purple-600">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            4
          </Button>
          <Button variant="outline" size="sm">
            5
          </Button>

          <Button variant="outline" size="icon">
            <span className="sr-only">Next page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </nav>
      </div>
    </div>
  )
}
