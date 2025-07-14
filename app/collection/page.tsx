"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StarfieldBackground } from "@/components/starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Sparkles, Star, ShoppingBag, Heart, Palette } from "lucide-react";
import Image from "next/image";

const collections = [
  {
    id: 1,
    name: "Cosmic Runner",
    description: "Engineered for speed with quantum-inspired technology",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23a855f7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Cpath d='M50 150 Q200 50 350 150 Q200 250 50 150' fill='url(%23grad1)' opacity='0.8'/%3E%3Ccircle cx='200' cy='150' r='30' fill='%23fff' opacity='0.9'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23a855f7' font-family='Arial' font-size='16' font-weight='bold'%3ECosmic Runner%3C/text%3E%3C/svg%3E",
    price: "$299",
    featured: true,
    category: "Running",
    colors: ["Cosmic Purple", "Stellar Blue", "Nebula Pink"],
  },
  {
    id: 2,
    name: "Nebula Elite",
    description: "Luxury comfort meets galactic style",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Cpath d='M80 100 Q200 20 320 100 L320 200 Q200 280 80 200 Z' fill='url(%23grad2)' opacity='0.9'/%3E%3Ccircle cx='200' cy='150' r='25' fill='%23fff' opacity='0.8'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23ec4899' font-family='Arial' font-size='16' font-weight='bold'%3ENebula Elite%3C/text%3E%3C/svg%3E",
    price: "$399",
    featured: true,
    category: "Lifestyle",
    colors: ["Galactic Gold", "Aurora Green", "Cosmic White"],
  },
  {
    id: 3,
    name: "Stellar Sport",
    description: "Performance training shoes for everyday champions",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310b981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Cpath d='M60 120 L340 120 L320 180 L80 180 Z' fill='url(%23grad3)' opacity='0.8'/%3E%3Cpath d='M100 140 L300 140 L280 160 L120 160 Z' fill='%23fff' opacity='0.3'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%2310b981' font-family='Arial' font-size='16' font-weight='bold'%3EStellar Sport%3C/text%3E%3C/svg%3E",
    price: "$249",
    featured: false,
    category: "Training",
    colors: ["Emerald Force", "Ocean Blue", "Solar Orange"],
  },
  {
    id: 4,
    name: "Aurora Casual",
    description: "Everyday elegance with celestial comfort",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ec4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Cellipse cx='200' cy='150' rx='120' ry='60' fill='url(%23grad4)' opacity='0.7'/%3E%3Cellipse cx='200' cy='150' rx='80' ry='40' fill='%23fff' opacity='0.2'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23f59e0b' font-family='Arial' font-size='16' font-weight='bold'%3EAurora Casual%3C/text%3E%3C/svg%3E",
    price: "$199",
    featured: false,
    category: "Casual",
    colors: ["Sunset Gold", "Rose Quartz", "Cloud White"],
  },
  {
    id: 5,
    name: "Galaxy Pro",
    description: "Professional performance for serious athletes",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23374151;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366f1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Cpath d='M70 80 L330 80 L350 220 L50 220 Z' fill='url(%23grad5)' opacity='0.9'/%3E%3Cpath d='M90 110 L310 110 L320 190 L80 190 Z' fill='%23fff' opacity='0.1'/%3E%3Ccircle cx='200' cy='150' r='20' fill='%236366f1' opacity='0.8'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%23374151' font-family='Arial' font-size='16' font-weight='bold'%3EGalaxy Pro%3C/text%3E%3C/svg%3E",
    price: "$449",
    featured: true,
    category: "Professional",
    colors: ["Carbon Black", "Titanium Gray", "Electric Blue"],
  },
  {
    id: 6,
    name: "Comet Classic",
    description: "Timeless design with modern innovation",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e5e7eb;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236b7280;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%23000'/%3E%3Cpath d='M100 100 Q200 50 300 100 Q200 200 100 100' fill='url(%23grad6)' opacity='0.8'/%3E%3Cpath d='M120 120 Q200 80 280 120 Q200 180 120 120' fill='%23fff' opacity='0.3'/%3E%3Ctext x='200' y='280' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16' font-weight='bold'%3EComet Classic%3C/text%3E%3C/svg%3E",
    price: "$179",
    featured: false,
    category: "Classic",
    colors: ["Pure White", "Classic Black", "Silver Mist"],
  },
];

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0">
        <StarfieldBackground />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-6"
            >
              <Sparkles className="w-8 h-8 text-violet-400 mr-3" />
              <Badge
                variant="outline"
                className="border-violet-500/50 text-violet-300 bg-violet-950/50"
              >
                New Collection
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6"
            >
              Cosmic Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Step into the future with our revolutionary footwear collection.
              Each pair is crafted with cutting-edge technology and designed to
              elevate your style to cosmic heights.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-6 border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="outline"
                className="border-violet-500/50 text-violet-300 hover:bg-violet-950/50"
              >
                All Shoes
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Running
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Lifestyle
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Training
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Professional
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((shoe, index) => (
                <motion.div
                  key={shoe.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all duration-500 group overflow-hidden backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="aspect-square bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                          <Image
                            src={shoe.image}
                            alt={shoe.name}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {shoe.featured && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            <Badge className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </motion.div>
                        )}

                        {/* Quick action overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-3 opacity-0 group-hover:opacity-100"
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                              <Palette className="w-4 h-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant="outline"
                            className="border-violet-500/30 text-violet-300 text-xs"
                          >
                            {shoe.category}
                          </Badge>
                          <motion.span
                            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"
                            whileHover={{ scale: 1.1 }}
                          >
                            {shoe.price}
                          </motion.span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                          {shoe.name}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {shoe.description}
                        </p>

                        {/* Color options */}
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-2">
                            Available Colors:
                          </p>
                          <div className="flex gap-1">
                            {shoe.colors.map((color, colorIndex) => (
                              <div
                                key={colorIndex}
                                className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                title={color}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1"
                          >
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300"
                            >
                              <ShoppingBag className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-violet-500/30 text-violet-300 hover:bg-violet-500/20"
                            >
                              <Zap className="w-4 h-4" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Experience the Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Join thousands of satisfied customers who've already stepped into
              tomorrow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
                  asChild
                >
                  <Link href="/collection">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Shop Full Collection
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/customize-shoe">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Customize Your Shoe
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
