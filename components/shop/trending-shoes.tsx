"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Star, ShoppingBag } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const trendingShoes = {
  popular: [
    {
      id: 1,
      name: "Air Max Pulse",
      brand: "Nike",
      price: 149.99,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      colors: ["#000000", "#FFFFFF", "#FF0000"],
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
    },
  ],
  newArrivals: [
    {
      id: 5,
      name: "ZoomX Invincible",
      brand: "Nike",
      price: 179.99,
      rating: 4.9,
      reviews: 42,
      image: "/placeholder.svg?height=300&width=300",
      colors: ["#000000", "#FFFFFF", "#FF00FF"],
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
    },
  ],
  bestSellers: [
    {
      id: 9,
      name: "Air Force 1",
      brand: "Nike",
      price: 109.99,
      rating: 4.9,
      reviews: 256,
      image: "/placeholder.svg?height=300&width=300",
      colors: ["#000000", "#FFFFFF", "#900C3F"],
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
    },
  ],
}

export default function TrendingShoes() {
  const [activeTab, setActiveTab] = useState("popular")

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover what's hot in footwear this season</p>
        </div>

        <Tabs defaultValue="popular" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="popular" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Popular
              </TabsTrigger>
              <TabsTrigger
                value="newArrivals"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                New Arrivals
              </TabsTrigger>
              <TabsTrigger
                value="bestSellers"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                Best Sellers
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(trendingShoes).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingShoes[category].map((shoe, index) => (
                  <ShoeCard key={shoe.id} shoe={shoe} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
            View All Trending Shoes
          </Button>
        </div>
      </div>
    </section>
  )
}

function ShoeCard({ shoe, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={shoe.image || "/placeholder.svg"}
          alt={shoe.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Quick actions */}
        <div className="absolute top-4 right-4">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${
              isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-700"
            } hover:bg-red-500 hover:text-white transition-colors`}
            onClick={(e) => {
              e.preventDefault()
              setIsFavorite(!isFavorite)
            }}
          >
            <Heart className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
          </Button>
        </div>

        {/* Quick add to cart - visible on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white p-3 transform transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{shoe.brand}</div>
        <h3 className="font-medium text-gray-900 mb-2">{shoe.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4"
                fill={i < Math.floor(shoe.rating) ? "#FFC107" : "none"}
                stroke={i < Math.floor(shoe.rating) ? "#FFC107" : "currentColor"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {shoe.rating} ({shoe.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="font-bold text-gray-900">${shoe.price.toFixed(2)}</div>

        {/* Color options */}
        <div className="flex items-center mt-3 space-x-2">
          {shoe.colors.map((color, i) => (
            <div key={i} className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
          ))}
          <span className="text-xs text-gray-500 ml-1">+{shoe.colors.length} colors</span>
        </div>
      </div>
    </motion.div>
  )
}
