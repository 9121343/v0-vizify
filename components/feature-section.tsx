"use client"

import { motion } from "framer-motion"
import { BookOpen, Presentation, Podcast, LineChart, Lightbulb, Sparkles, Layers, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-purple-500" />,
    title: "Smart Paper Analysis",
    description:
      "Our AI reads and comprehends complex research papers, extracting key insights, methodologies, and findings with remarkable accuracy.",
  },
  {
    icon: <Presentation className="h-10 w-10 text-purple-500" />,
    title: "Presentation Generation",
    description:
      "Transform research papers into visually engaging presentations with key points, data visualizations, and speaker notes.",
  },
  {
    icon: <Podcast className="h-10 w-10 text-purple-500" />,
    title: "Audio Summaries",
    description:
      "Convert papers into podcast-style audio summaries with natural-sounding voices, perfect for learning on the go.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-purple-500" />,
    title: "Data Visualization",
    description:
      "Automatically generate interactive charts and graphs from research data for better understanding and analysis.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
    title: "Insight Extraction",
    description:
      "Identify and highlight groundbreaking insights and implications that might be buried in dense academic language.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-purple-500" />,
    title: "Citation Network",
    description:
      "Visualize and explore the network of citations and related papers to discover connections in the research landscape.",
  },
  {
    icon: <Layers className="h-10 w-10 text-purple-500" />,
    title: "Multi-paper Synthesis",
    description:
      "Compare and synthesize findings across multiple papers to identify patterns, contradictions, and research gaps.",
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "Real-time Collaboration",
    description:
      "Collaborate with colleagues in real-time, sharing insights and annotations directly on the transformed content.",
  },
]

export default function FeatureSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border border-purple-500/20 backdrop-blur-sm h-full hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
