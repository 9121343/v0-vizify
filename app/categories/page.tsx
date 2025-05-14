import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import ShoeCategories from "@/components/shoe-categories"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Categories Hero */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore Our Shoe
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Categories
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Browse our extensive collection of shoes for every occasion, style, and purpose. Select a category to
              start customizing your perfect pair.
            </p>
          </div>
        </section>

        {/* Shoe Categories */}
        <ShoeCategories />
      </div>
    </main>
  )
}
