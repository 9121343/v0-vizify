"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CSSStarfieldBackground } from "@/components/css-starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Zap, Sparkles, Star, ShoppingBag, Heart, Palette } from "lucide-react";
import Image from "next/image";
import { NoSSR } from "@/components/no-ssr";

const collections = [
  {
    id: 1,
    name: "Cosmic Runner",
    description: "Engineered for speed with quantum-inspired technology",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
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
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
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
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
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
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
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
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
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
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
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
        <CSSStarfieldBackground />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-violet-400 mr-3" />
              <Badge
                variant="outline"
                className="border-violet-500/50 text-violet-300 bg-violet-950/50"
              >
                New Collection
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Cosmic Collection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Step into the future with our revolutionary footwear collection.
              Each pair is crafted with cutting-edge technology and designed to
              elevate your style to cosmic heights.
            </p>
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
                <NoSSR key={shoe.id}>
                  <div className="group transform hover:-translate-y-2 transition-all duration-300">
                    <Card className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden backdrop-blur-sm">
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
                            <Badge className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}

                          {/* Quick action overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-3">
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
                            </div>
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
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                              {shoe.price}
                            </span>
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
                            <Button
                              size="sm"
                              className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 hover:scale-105"
                            >
                              <ShoppingBag className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-violet-500/30 text-violet-300 hover:bg-violet-500/20 hover:scale-110 transition-all"
                            >
                              <Zap className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </NoSSR>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who've already stepped into
              tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 hover:scale-105 transition-all"
                asChild
              >
                <Link href="/collection">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Full Collection
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all"
                asChild
              >
                <Link href="/customize-shoe">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Customize Your Shoe
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
