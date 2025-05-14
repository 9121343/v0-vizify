"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Palette, Search } from "lucide-react"

export default function InteractiveTools() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Shopping Tools</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Enhance your shopping experience with our innovative tools</p>
        </div>

        <Tabs defaultValue="virtualTryOn" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger
                value="virtualTryOn"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Virtual Try-On
              </TabsTrigger>
              <TabsTrigger
                value="customization"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <Palette className="h-4 w-4 mr-2" />
                Shoe Customization
              </TabsTrigger>
              <TabsTrigger
                value="shoeFinder"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
              >
                <Search className="h-4 w-4 mr-2" />
                Shoe Finder
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="virtualTryOn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Try-On</h3>
                <p className="text-gray-600 mb-6">
                  See how shoes look on your feet before you buy. Our augmented reality technology lets you visualize
                  any pair of shoes on your feet in real-time.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Try on shoes from anywhere using your smartphone",
                    "See how different styles look on your feet",
                    "Share your virtual try-on with friends for feedback",
                    "Works with hundreds of shoe styles in our catalog",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-5 w-5 text-purple-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Try It Now</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Virtual Try-On Demo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="customization">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shoe Customization</h3>
                <p className="text-gray-600 mb-6">
                  Design your own unique shoes with our 3D customization tool. Choose colors, materials, and add
                  personal touches to create shoes that are uniquely yours.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Customize colors for different parts of the shoe",
                    "Choose from premium materials and textures",
                    "Add personalized text or monograms",
                    "See your design in 3D from every angle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-5 w-5 text-purple-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Start Designing</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Shoe Customization Demo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="shoeFinder">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shoe Finder</h3>
                <p className="text-gray-600 mb-6">
                  Not sure what shoes you need? Our Shoe Finder asks you a few questions about your preferences and
                  activities to recommend the perfect shoes for you.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Get personalized recommendations in under 60 seconds",
                    "Find shoes based on your activities and preferences",
                    "Discover styles you might not have considered",
                    "Filter recommendations by price range and availability",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-5 w-5 text-purple-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Find Your Shoes</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-lg overflow-hidden"
              >
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Shoe Finder Demo"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
