"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, BookOpen, Sparkles, Zap } from "lucide-react";
import { FloatingShoes } from "@/components/floating-shoes";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating shoes background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShoes count={3} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Step Into the Future with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
                {" "}
                Frizbley
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Where cosmic design meets cutting-edge comfort. Discover footwear
            that defines tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="relative group overflow-hidden"
              asChild
            >
              <Link href="/collection">
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:opacity-90 transition-opacity"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity"></span>
                <span className="relative flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Collection
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-violet-500/50 hover:bg-violet-500/20"
              asChild
            >
              <Link href="/lookbook">
                <BookOpen className="mr-2 h-5 w-5" />
                See Lookbook
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Glowing orb accent */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-violet-600/20 blur-[100px] -z-10"></div>
    </div>
  );
}
