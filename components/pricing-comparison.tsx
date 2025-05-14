"use client"

import React from "react"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"

export default function PricingComparison() {
  const features = [
    {
      category: "Content Generation",
      items: [
        { name: "Text Summaries", free: true, basic: true, pro: true, enterprise: true },
        {
          name: "Presentation Generation",
          free: "Basic only",
          basic: "Enhanced",
          pro: "Professional",
          enterprise: "Custom branded",
        },
        { name: "Audio Summaries", free: false, basic: true, pro: "With voice options", enterprise: "Custom voices" },
        {
          name: "Data Visualization",
          free: false,
          basic: "Basic charts",
          pro: "Advanced interactive",
          enterprise: "Custom visualizations",
        },
      ],
    },
    {
      category: "Analysis Features",
      items: [
        {
          name: "Key Insights Extraction",
          free: "Basic",
          basic: "Advanced",
          pro: "Comprehensive",
          enterprise: "Custom depth",
        },
        { name: "Citation Network Analysis", free: false, basic: false, pro: true, enterprise: "Advanced" },
        { name: "Multi-paper Synthesis", free: false, basic: false, pro: "Up to 5 papers", enterprise: "Unlimited" },
        { name: "Research Gap Identification", free: false, basic: false, pro: true, enterprise: "Advanced" },
      ],
    },
    {
      category: "Collaboration & Sharing",
      items: [
        {
          name: "Export Options",
          free: "PDF only",
          basic: "PDF, PPTX",
          pro: "All formats",
          enterprise: "All formats + custom",
        },
        { name: "Team Sharing", free: false, basic: false, pro: "Up to 3 users", enterprise: "Unlimited" },
        { name: "Commenting & Feedback", free: false, basic: false, pro: true, enterprise: "Advanced" },
        { name: "Access Controls", free: false, basic: false, pro: "Basic", enterprise: "Advanced" },
      ],
    },
    {
      category: "Support & Resources",
      items: [
        {
          name: "Customer Support",
          free: "Email",
          basic: "Email, Chat",
          pro: "Priority support",
          enterprise: "Dedicated manager",
        },
        { name: "API Access", free: false, basic: false, pro: "Limited", enterprise: "Full access" },
        { name: "Custom Training", free: false, basic: false, pro: false, enterprise: true },
        { name: "Usage Analytics", free: false, basic: "Basic", pro: "Advanced", enterprise: "Comprehensive" },
      ],
    },
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Feature Comparison</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compare all features across our pricing tiers to find the perfect plan for your research needs.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-left text-gray-400 font-medium">Features</th>
                <th className="py-4 px-6 text-center text-white font-medium">Free</th>
                <th className="py-4 px-6 text-center text-white font-medium">Basic</th>
                <th className="py-4 px-6 text-center text-white font-medium bg-purple-900/20">Pro</th>
                <th className="py-4 px-6 text-center text-white font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-white/5">
                    <td colSpan={5} className="py-3 px-6 text-left text-purple-400 font-medium">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-left text-gray-300">{feature.name}</td>
                      <td className="py-4 px-6 text-center text-gray-300">
                        {feature.free === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature.free === false ? (
                          <Minus className="h-5 w-5 text-gray-500 mx-auto" />
                        ) : (
                          feature.free
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-300">
                        {feature.basic === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature.basic === false ? (
                          <Minus className="h-5 w-5 text-gray-500 mx-auto" />
                        ) : (
                          feature.basic
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-300 bg-purple-900/10">
                        {feature.pro === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature.pro === false ? (
                          <Minus className="h-5 w-5 text-gray-500 mx-auto" />
                        ) : (
                          feature.pro
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-gray-300">
                        {feature.enterprise === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : feature.enterprise === false ? (
                          <Minus className="h-5 w-5 text-gray-500 mx-auto" />
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
