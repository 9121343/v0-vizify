import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { StarfieldBackground } from "@/components/starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Zap, Sparkles, Star, ShoppingBag } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Cosmic Runner",
    description: "Engineered for speed with quantum-inspired technology",
    image: "/placeholder.svg",
    price: "$299",
    featured: true,
    category: "Running",
  },
  {
    id: 2,
    name: "Nebula Elite",
    description: "Luxury comfort meets galactic style",
    image: "/placeholder.svg",
    price: "$399",
    featured: true,
    category: "Lifestyle",
  },
  {
    id: 3,
    name: "Stellar Sport",
    description: "Performance training shoes for everyday champions",
    image: "/placeholder.svg",
    price: "$249",
    featured: false,
    category: "Training",
  },
  {
    id: 4,
    name: "Aurora Casual",
    description: "Everyday elegance with celestial comfort",
    image: "/placeholder.svg",
    price: "$199",
    featured: false,
    category: "Casual",
  },
  {
    id: 5,
    name: "Galaxy Pro",
    description: "Professional performance for serious athletes",
    image: "/placeholder.svg",
    price: "$449",
    featured: true,
    category: "Professional",
  },
  {
    id: 6,
    name: "Comet Classic",
    description: "Timeless design with modern innovation",
    image: "/placeholder.svg",
    price: "$179",
    featured: false,
    category: "Classic",
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
              {collections.map((shoe) => (
                <Card
                  key={shoe.id}
                  className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all duration-300 group overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                        <span className="absolute text-6xl">👟</span>
                      </div>
                      {shoe.featured && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="outline"
                          className="border-gray-600 text-gray-400 text-xs"
                        >
                          {shoe.category}
                        </Badge>
                        <span className="text-2xl font-bold text-violet-400">
                          {shoe.price}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                        {shoe.name}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {shoe.description}
                      </p>

                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
                        >
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-gray-300 hover:bg-white/10"
                        >
                          <Zap className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
                asChild
              >
                <Link href="/shop">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Full Collection
                </Link>
              </Button>
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
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
