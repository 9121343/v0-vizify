"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  {
    id: "mens",
    name: "Men's Shoes",
    image: "/placeholder.svg?height=400&width=300",
    link: "/shop/mens",
  },
  {
    id: "womens",
    name: "Women's Shoes",
    image: "/placeholder.svg?height=400&width=300",
    link: "/shop/womens",
  },
  {
    id: "kids",
    name: "Kids' Shoes",
    image: "/placeholder.svg?height=400&width=300",
    link: "/shop/kids",
  },
  {
    id: "sports",
    name: "Sports Shoes",
    image: "/placeholder.svg?height=400&width=300",
    link: "/shop/sports",
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "/placeholder.svg?height=400&width=300",
    link: "/shop/accessories",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of shoes for every occasion, style, and purpose
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={category.link} className="block">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Image */}
                  <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg md:text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-white/80 mt-1 group-hover:text-white transition-colors">Shop Now</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
