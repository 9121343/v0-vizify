"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Gift, Percent, RefreshCw } from "lucide-react"

export default function LoyaltyProgram() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Award className="h-16 w-16 mx-auto text-yellow-400 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ShoeVista Rewards</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join our loyalty program and earn points with every purchase. Redeem for discounts, exclusive products,
              and more!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <div className="bg-purple-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Percent className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Earn Points</h3>
            <p className="text-white/80 mb-4">
              Earn 1 point for every $1 spent. Additional points for reviews, referrals, and social shares.
            </p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• $1 spent = 1 point</li>
              <li>• Product review = 50 points</li>
              <li>• Friend referral = 100 points</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <div className="bg-purple-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Redeem Rewards</h3>
            <p className="text-white/80 mb-4">
              Use your points for discounts, free shipping, exclusive products, and early access to sales.
            </p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• 500 points = $10 off</li>
              <li>• 1000 points = Free shipping</li>
              <li>• 2500 points = Exclusive products</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <div className="bg-purple-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Membership Tiers</h3>
            <p className="text-white/80 mb-4">
              Unlock higher tiers with more purchases for additional benefits and higher point multipliers.
            </p>
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              <li>• Silver: 0-499 points (1x multiplier)</li>
              <li>• Gold: 500-1499 points (1.5x multiplier)</li>
              <li>• Platinum: 1500+ points (2x multiplier)</li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-6 text-lg">Join Rewards Program</Button>
        </div>
      </div>
    </section>
  )
}
