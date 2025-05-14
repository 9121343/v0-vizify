"use client"

import { motion } from "framer-motion"
import { Leaf, Recycle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SustainabilitySection() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment to Sustainability</h2>
            <p className="text-gray-600 mb-6">
              At ShoeVista, we're committed to reducing our environmental footprint and offering sustainable options for
              conscious consumers. We believe that great shoes shouldn't come at the expense of our planet.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Materials</h3>
                  <p className="text-gray-600">
                    We use recycled plastics, organic cotton, and sustainably sourced leather in many of our products.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Recycle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recycling Program</h3>
                  <p className="text-gray-600">
                    Send back your worn-out shoes for recycling and get a discount on your next purchase.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Carbon Neutral Shipping</h3>
                  <p className="text-gray-600">
                    We offset the carbon footprint of every shipment to ensure your delivery is climate-friendly.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white">Shop Eco-Friendly Collection</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Sustainable shoe manufacturing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
              <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
              <p className="text-gray-600">of our new collection is made with recycled or sustainable materials</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
