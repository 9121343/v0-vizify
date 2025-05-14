"use client"

import { motion } from "framer-motion"

interface CategoryHeaderProps {
  title: string
  description: string
  image: string
}

export default function CategoryHeader({ title, description, image }: CategoryHeaderProps) {
  return (
    <section className="relative h-[200px] md:h-[250px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
            <p className="text-white/80 max-w-2xl">{description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
