import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CSSStarfieldBackground } from "@/components/css-starfield-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Camera, Heart, Share2, ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const lookbookEntries = [
  {
    id: 1,
    title: "Urban Cosmic",
    description: "Street style meets space-age technology",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
    category: "Street Style",
    featured: true,
    likes: 1247,
  },
  {
    id: 2,
    title: "Galactic Athlete",
    description: "Performance wear for the modern champion",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
    category: "Athletic",
    featured: false,
    likes: 892,
  },
  {
    id: 3,
    title: "Nebula Nights",
    description: "Evening elegance with celestial flair",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
    category: "Evening",
    featured: true,
    likes: 1563,
  },
  {
    id: 4,
    title: "Solar Casual",
    description: "Everyday comfort with stellar style",
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
    category: "Casual",
    featured: false,
    likes: 734,
  },
  {
    id: 5,
    title: "Cosmic Executive",
    description: "Professional attire for the space age",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
    category: "Professional",
    featured: true,
    likes: 945,
  },
  {
    id: 6,
    title: "Interstellar Adventure",
    description: "Ready for any journey across the galaxy",
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center&auto=format&q=80",
    category: "Adventure",
    featured: false,
    likes: 1128,
  },
];

export default function LookbookPage() {
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
              <Camera className="w-8 h-8 text-violet-400 mr-3" />
              <Badge
                variant="outline"
                className="border-violet-500/50 text-violet-300 bg-violet-950/50"
              >
                Style Inspiration
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Lookbook
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how FRIZBLEY shoes complement every style, from street
              fashion to professional elegance. Get inspired by our cosmic
              community.
            </p>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-black/40 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-violet-900/30 to-fuchsia-900/30 flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <Button
                    size="lg"
                    className="relative z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Watch Lookbook Video
                  </Button>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    Featured
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Spring/Summer 2024 Collection
              </h3>
              <p className="text-gray-400">
                Featuring our latest cosmic-inspired designs
              </p>
            </div>
          </div>
        </section>

        {/* Style Categories */}
        <section className="py-8 px-6 border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="outline"
                className="border-violet-500/50 text-violet-300 hover:bg-violet-950/50"
              >
                All Styles
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Street Style
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Athletic
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Evening
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Professional
              </Button>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-white"
              >
                Adventure
              </Button>
            </div>
          </div>
        </section>

        {/* Lookbook Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lookbookEntries.map((entry, index) => (
                <Card
                  key={entry.id}
                  className={`bg-black/40 border-white/10 hover:border-violet-500/50 transition-all duration-300 group overflow-hidden ${
                    entry.featured ? "md:col-span-2 lg:col-span-1" : ""
                  } ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div
                        className={`${index === 0 ? "aspect-[4/3]" : "aspect-square"} bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 flex items-center justify-center relative`}
                      >
                        <div className="w-40 h-40 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                        <span className="absolute text-8xl">👤</span>

                        {entry.featured && (
                          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600">
                            Featured
                          </Badge>
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="flex gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/30 text-white hover:bg-white/20"
                            >
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/30 text-white hover:bg-white/20"
                            >
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge
                          variant="outline"
                          className="border-gray-600 text-gray-400 text-xs"
                        >
                          {entry.category}
                        </Badge>
                        <div className="flex items-center text-gray-400">
                          <Heart className="w-4 h-4 mr-1" />
                          <span className="text-sm">{entry.likes}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                        {entry.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {entry.description}
                      </p>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-violet-400 hover:text-white hover:bg-violet-950/50 p-0"
                      >
                        View Full Look
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Share Your Style
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tag @frizbley and #CosmicStyle to be featured in our lookbook
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500"
                asChild
              >
                <Link href="/shop">
                  <Camera className="w-5 h-5 mr-2" />
                  Shop the Look
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Submit Your Style
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
