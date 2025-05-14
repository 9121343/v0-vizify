"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Running Shoes",
    excerpt: "Find the right running shoes based on your gait, foot type, and running style.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Guides",
    date: "May 15, 2023",
    url: "/blog/choose-running-shoes",
  },
  {
    id: 2,
    title: "Top 10 Shoe Trends for Summer 2023",
    excerpt: "Stay ahead of the fashion curve with these trending shoe styles for the summer season.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Fashion",
    date: "June 2, 2023",
    url: "/blog/summer-shoe-trends",
  },
  {
    id: 3,
    title: "How to Care for Leather Shoes",
    excerpt: "Extend the life of your leather shoes with these essential care and maintenance tips.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Care Tips",
    date: "April 28, 2023",
    url: "/blog/leather-shoe-care",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shoe Care & Style Tips</h2>
            <p className="text-gray-600">Expert advice to help you make the most of your footwear</p>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={post.url} className="block">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center text-purple-600 font-medium">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
