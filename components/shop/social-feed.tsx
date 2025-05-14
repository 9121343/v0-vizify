"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    username: "@shoelover",
    likes: 1243,
    caption: "Perfect for my morning run! #RunningShoes #MorningRoutine",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    username: "@fashionista",
    likes: 2567,
    caption: "These boots were made for walking! #NewBoots #FallFashion",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    username: "@sneakerhead",
    likes: 3891,
    caption: "New addition to my collection! #SneakerGame #Kicks",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300",
    username: "@stylequeen",
    likes: 1876,
    caption: "Office ready with my new loafers! #WorkStyle #FashionDaily",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300",
    username: "@hikingadventures",
    likes: 945,
    caption: "These hiking boots conquered the mountain! #Outdoors #Adventure",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    username: "@dancelife",
    likes: 2134,
    caption: "Perfect dance shoes for my performance! #DanceLife #Performance",
  },
]

export default function SocialFeed() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <Instagram className="inline-block h-8 w-8 mr-2 text-purple-600" />
            #ShoeVistaStyle
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our community styles their favorite shoes. Tag us for a chance to be featured!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square bg-gray-200">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={`Post by ${post.username}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay with info */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-white font-medium text-sm">{post.username}</p>
                <p className="text-white/80 text-xs mt-1 line-clamp-2">{post.caption}</p>
                <div className="text-white/70 text-xs mt-2">♥ {post.likes} likes</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            <Instagram className="h-5 w-5 mr-2" />
            Follow Us on Instagram
          </Button>
        </div>
      </div>
    </section>
  )
}
