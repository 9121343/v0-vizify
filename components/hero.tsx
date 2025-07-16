"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag, BookOpen, Sparkles, Zap } from "lucide-react";
import { FloatingShoes } from "@/components/floating-shoes";
import Link from "next/link";
import { NoSSR } from "@/components/no-ssr";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating shoes background */}
      <div className="absolute inset-0 overflow-hidden">
        <NoSSR>
          <FloatingShoes count={3} />
        </NoSSR>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated badge */}
          <div className="inline-flex items-center mb-8 px-4 py-2 rounded-full bg-violet-950/30 border border-violet-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-violet-400 mr-2" />
            <span className="text-violet-300 text-sm font-medium">
              Cosmic Innovation • Limited Edition
            </span>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Step Into the Future with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 animate-pulse">
                FRIZBLEY
              </span>
            </h1>
          </div>

          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Where cosmic design meets cutting-edge comfort. Discover footwear
            that
            <span className="text-violet-300 font-medium">
              {" "}
              defines tomorrow
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="transform hover:scale-105 transition-transform duration-200">
              <Button
                size="lg"
                className="relative group overflow-hidden px-8 py-4 text-lg"
                asChild
              >
                <Link href="/collection">
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:opacity-90 transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"></span>
                  <span className="relative flex items-center font-semibold">
                    <ShoppingBag className="mr-3 h-5 w-5" />
                    Shop Collection
                    <Zap className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Link>
              </Button>
            </div>

            <div className="transform hover:scale-102 transition-transform duration-200">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-violet-400/50 hover:bg-violet-500/20 hover:border-violet-400 px-8 py-4 text-lg backdrop-blur-sm"
                asChild
              >
                <Link href="/customize-shoe">
                  <Sparkles className="mr-3 h-5 w-5" />
                  Customize Shoe
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced glowing effects */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[1000px] h-[300px] rounded-full bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 blur-[120px] -z-10"></div>
      <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[80px] -z-10"></div>
      <div className="absolute top-40 left-10 w-[300px] h-[300px] rounded-full bg-fuchsia-500/10 blur-[60px] -z-10"></div>
    </div>
  );
}
