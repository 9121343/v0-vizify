"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function PricingCTA() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 md:p-12 border border-purple-500/20 backdrop-blur-sm"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Research Journey Today</h2>
            <p className="text-gray-300 text-lg mb-6">
              Begin with our free plan or try our premium features with a 14-day free trial.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                "No credit card required for free plan",
                "Upgrade or downgrade anytime",
                "Cancel anytime, no questions asked",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 w-full md:w-auto">
              Get Started for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-purple-500 hover:bg-purple-500/20 w-full md:w-auto"
            >
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
