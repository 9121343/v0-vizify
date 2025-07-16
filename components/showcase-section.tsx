"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Sparkles } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "Featured Collection",
    subtitle: "Cosmic Runner Series",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    badge: "Best Seller",
    description:
      "Experience the future of running with our quantum-inspired technology",
  },
  {
    id: 2,
    title: "Style Spotlight",
    subtitle: "Urban Cosmic Look",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    badge: "Trending",
    description: "Street style meets space-age innovation in perfect harmony",
  },
  {
    id: 3,
    title: "Innovation Lab",
    subtitle: "3D Customization",
    image:
      "https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=600&h=400&fit=crop&crop=center&auto=format&q=80",
    badge: "New Tech",
    description: "Design your perfect shoe with our advanced 3D customizer",
  },
];

export function ShowcaseSection() {
  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-violet-400 mr-3" />
            <Badge
              variant="outline"
              className="border-violet-500/50 text-violet-300 bg-violet-950/50"
            >
              Latest Highlights
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Discover FRIZBLEY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest innovations, trending styles, and cutting-edge
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <Card
              key={item.id}
              className="bg-black/40 border-white/10 hover:border-violet-500/50 transition-all duration-500 group overflow-hidden backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      {item.badge}
                    </Badge>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-sm text-violet-300 font-medium mb-1">
                        {item.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/20 hover:border-violet-400 transition-all"
                        asChild
                      >
                        <Link
                          href={
                            index === 0
                              ? "/collection"
                              : index === 1
                                ? "/lookbook"
                                : "/customize-shoe"
                          }
                        >
                          Explore
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transform hover:scale-105 transition-all"
            asChild
          >
            <Link href="/collection">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
