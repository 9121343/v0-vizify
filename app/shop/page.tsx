import HeroBanner from "@/components/shop/hero-banner"
import FeaturedCategories from "@/components/shop/featured-categories"
import TrendingShoes from "@/components/shop/trending-shoes"
import StyleQuiz from "@/components/shop/style-quiz"
import InteractiveTools from "@/components/shop/interactive-tools"
import SocialFeed from "@/components/shop/social-feed"
import BlogSection from "@/components/shop/blog-section"
import LoyaltyProgram from "@/components/shop/loyalty-program"
import SustainabilitySection from "@/components/shop/sustainability-section"
import CustomerSupport from "@/components/shop/customer-support"
import ShopFooter from "@/components/shop/shop-footer"
import ShopNavbar from "@/components/shop/shop-navbar"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white antialiased">
      {/* Shop-specific navbar */}
      <ShopNavbar />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Trending Shoes */}
      <TrendingShoes />

      {/* Style Quiz */}
      <StyleQuiz />

      {/* Interactive Tools */}
      <InteractiveTools />

      {/* Social Feed */}
      <SocialFeed />

      {/* Blog Section */}
      <BlogSection />

      {/* Loyalty Program */}
      <LoyaltyProgram />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Customer Support */}
      <CustomerSupport />

      {/* Footer */}
      <ShopFooter />
    </main>
  )
}
