import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import ShoeCustomizer from "@/components/shoe-customizer/shoe-customizer"

export default function CustomizeShoe() {
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

        {/* Hero Section */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Design Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Dream Shoes
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Customize every detail of your shoes in 3D. Paint, add stickers, and make them uniquely yours.
            </p>
          </div>
        </section>

        {/* 3D Shoe Customizer */}
        <ShoeCustomizer />
      </div>
    </main>
  )
}
