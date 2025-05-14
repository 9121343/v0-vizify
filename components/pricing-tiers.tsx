"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PricingTiers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const pricingTiers = [
    {
      name: "Free",
      description: "For individuals exploring research tools",
      monthlyPrice: 0,
      annualPrice: 0,
      features: ["3 paper uploads per month", "Basic text summaries", "Simple presentations", "7-day history"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Basic",
      description: "For individual researchers",
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "20 paper uploads per month",
        "Advanced summaries",
        "Enhanced presentations",
        "Audio summaries",
        "Basic data visualization",
        "30-day history",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "For serious researchers and small teams",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "100 paper uploads per month",
        "Advanced summaries & insights",
        "Professional presentations",
        "Audio summaries with voice options",
        "Advanced data visualization",
        "Citation network analysis",
        "Multi-paper synthesis",
        "90-day history",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For research organizations and universities",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited paper uploads",
        "All Pro features",
        "Custom AI training",
        "API access",
        "Team collaboration",
        "Admin dashboard",
        "Priority support",
        "Unlimited history",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4 bg-black/50 p-2 rounded-full border border-white/10">
            <Label
              htmlFor="billing-toggle"
              className={`cursor-pointer px-4 py-2 rounded-full ${
                billingCycle === "monthly" ? "bg-purple-600 text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={billingCycle === "annual"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
            />
            <Label
              htmlFor="billing-toggle"
              className={`cursor-pointer px-4 py-2 rounded-full flex items-center ${
                billingCycle === "annual" ? "bg-purple-600 text-white" : "text-gray-400"
              }`}
            >
              Annual{" "}
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Save 20%</span>
            </Label>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card
                className={`w-full bg-black/50 backdrop-blur-sm border ${
                  tier.highlighted
                    ? "border-purple-500 shadow-lg shadow-purple-500/20"
                    : "border-white/10 hover:border-white/30"
                } transition-all duration-300`}
              >
                {tier.highlighted && (
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-4 py-1 rounded-t-lg text-center">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-400">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    {tier.monthlyPrice !== null ? (
                      <>
                        <p className="text-4xl font-bold text-white">
                          ${billingCycle === "monthly" ? tier.monthlyPrice : tier.annualPrice}
                          <span className="text-lg text-gray-400 font-normal">
                            {tier.monthlyPrice > 0 ? `/${billingCycle === "monthly" ? "mo" : "yr"}` : ""}
                          </span>
                        </p>
                        {tier.monthlyPrice > 0 && (
                          <p className="text-sm text-gray-400 mt-1">
                            {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                          </p>
                        )}
                      </>
                    ) : (
                      <p className="text-4xl font-bold text-white">Custom</p>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      tier.highlighted
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : tier.name === "Free"
                          ? "bg-white/10 hover:bg-white/20 text-white"
                          : "bg-black/60 hover:bg-black/80 text-white border border-white/20"
                    }`}
                  >
                    {tier.highlighted && <Sparkles className="mr-2 h-4 w-4" />}
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
