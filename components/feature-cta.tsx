"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeatureCTA() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Research?</h2>
            <p className="text-gray-300 text-lg mb-6 md:mb-0">
              Upload your first paper and see how our AI can help you communicate your research more effectively.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              <FileText className="mr-2 h-5 w-5" />
              Upload Paper
            </Button>
            <Link href="/examples" passHref>
              <Button size="lg" variant="outline" className="text-white border-purple-500 hover:bg-purple-500/20">
                See Examples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
