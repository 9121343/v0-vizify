import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import PricingTiers from "@/components/pricing-tiers"
import PricingComparison from "@/components/pricing-comparison"
import PricingFAQ from "@/components/pricing-faq"
import PricingCTA from "@/components/pricing-cta"

export default function PricingPage() {
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

        {/* Pricing Hero */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Pricing
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Choose the plan that fits your research needs. All plans include core features with different usage limits
              and capabilities.
            </p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <PricingTiers />

        {/* Feature Comparison */}
        <PricingComparison />

        {/* FAQ Section */}
        <PricingFAQ />

        {/* Call to Action */}
        <PricingCTA />
      </div>
    </main>
  )
}
