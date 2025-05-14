"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, Star, Trash } from "lucide-react"

interface WishlistItem {
  id: string
  name: string
  brand: string
  price: number
  rating: number
  reviews: number
  image: string
  color: string
  size: string
  inStock: boolean
}

export default function Wishlist() {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "item1",
      name: "Air Max Pulse",
      brand: "Nike",
      price: 149.99,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=150&width=150",
      color: "Black/White",
      size: "10",
      inStock: true,
    },
    {
      id: "item2",
      name: "Ultraboost Light",
      brand: "Adidas",
      price: 189.99,
      rating: 4.7,
      reviews: 98,
      image: "/placeholder.svg?height=150&width=150",
      color: "Gray/Blue",
      size: "9.5",
      inStock: true,
    },
    {
      id: "item3",
      name: "Classic Leather",
      brand: "Reebok",
      price: 79.99,
      rating: 4.5,
      reviews: 76,
      image: "/placeholder.svg?height=150&width=150",
      color: "White",
      size: "10",
      inStock: false,
    },
    {
      id: "item4",
      name: "Chuck Taylor All Star",
      brand: "Converse",
      price: 59.99,
      rating: 4.6,
      reviews: 112,
      image: "/placeholder.svg?height=150&width=150",
      color: "Black",
      size: "9.5",
      inStock: true,
    },
    {
      id: "item5",
      name: "Fresh Foam X",
      brand: "New Balance",
      price: 139.99,
      rating: 4.7,
      reviews: 28,
      image: "/placeholder.svg?height=150&width=150",
      color: "Blue/White",
      size: "10",
      inStock: true,
    },
  ])

  const handleRemoveItem = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
        <p className="text-gray-500">{wishlistItems.length} items</p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="space-y-6">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col sm:flex-row"
            >
              <div className="w-full sm:w-32 h-32 flex-shrink-0 mb-4 sm:mb-0 flex items-center justify-center">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-1 sm:ml-6">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <div className="flex items-center mt-1 mb-2">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3"
                            fill={i < Math.floor(item.rating) ? "#FFC107" : "none"}
                            stroke={i < Math.floor(item.rating) ? "#FFC107" : "currentColor"}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {item.rating} ({item.reviews})
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      {item.color} • Size {item.size}
                    </p>
                    <p className="font-bold text-gray-900 mt-2">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex flex-col sm:items-end gap-2">
                    <div className="mb-2">
                      {item.inStock ? (
                        <span className="text-green-600 text-sm font-medium">In Stock</span>
                      ) : (
                        <span className="text-red-600 text-sm font-medium">Out of Stock</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 w-full sm:justify-end">
                      <Button
                        className="bg-purple-600 hover:bg-purple-700 flex-1 sm:flex-initial"
                        disabled={!item.inStock}
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        className="text-red-600 border-red-200 hover:bg-red-50 flex-1 sm:flex-initial"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">Save items you love to your wishlist and they'll appear here.</p>
          <Button className="bg-purple-600 hover:bg-purple-700">Continue Shopping</Button>
        </div>
      )}
    </div>
  )
}
