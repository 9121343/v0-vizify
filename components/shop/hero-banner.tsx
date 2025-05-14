"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
  {
    id: 1,
    title: "Summer Collection 2023",
    subtitle: "Step into summer with our latest styles",
    cta: "Shop Now",
    image: "/placeholder.svg?height=600&width=1200",
    link: "/shop/summer-collection",
    color: "from-blue-500/80 to-purple-500/80",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Be the first to try our newest designs",
    cta: "Explore",
    image: "/placeholder.svg?height=600&width=1200",
    link: "/shop/new-arrivals",
    color: "from-pink-500/80 to-orange-500/80",
  },
  {
    id: 3,
    title: "Limited Edition",
    subtitle: "Exclusive designs for a limited time only",
    cta: "Shop Collection",
    image: "/placeholder.svg?height=600&width=1200",
    link: "/shop/limited-edition",
    color: "from-green-500/80 to-teal-500/80",
  },
]

export default function HeroBanner() {
  const [currentBanner, setCurrentBanner] = useState(0)

  // Auto-rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {banners.map(
          (banner, index) =>
            index === currentBanner && (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner.image})` }}
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-70`} />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white">
                      <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                      >
                        {banner.title}
                      </motion.h1>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-xl md:text-2xl mb-8"
                      >
                        {banner.subtitle}
                      </motion.p>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg">
                          {banner.cta}
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 z-10 rounded-full h-12 w-12"
        onClick={prevBanner}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/40 z-10 rounded-full h-12 w-12"
        onClick={nextBanner}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentBanner ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </section>
  )
}
