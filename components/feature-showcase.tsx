"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Presentation, Podcast, BarChart3 } from "lucide-react"

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState("paper")

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See the Transformation in Action</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Watch how our AI transforms dense research papers into various engaging formats
          </p>
        </div>

        <Tabs defaultValue="paper" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/50 border border-white/10">
              <TabsTrigger value="paper" className="data-[state=active]:bg-purple-600">
                <FileText className="mr-2 h-4 w-4" />
                Original Paper
              </TabsTrigger>
              <TabsTrigger value="presentation" className="data-[state=active]:bg-purple-600">
                <Presentation className="mr-2 h-4 w-4" />
                Presentation
              </TabsTrigger>
              <TabsTrigger value="audio" className="data-[state=active]:bg-purple-600">
                <Podcast className="mr-2 h-4 w-4" />
                Audio Summary
              </TabsTrigger>
              <TabsTrigger value="visualization" className="data-[state=active]:bg-purple-600">
                <BarChart3 className="mr-2 h-4 w-4" />
                Visualization
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="relative bg-black/30 border border-white/10 rounded-xl p-6 min-h-[400px]">
            <AnimatePresence mode="wait">
              <TabsContent value="paper" className="mt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-[350px] overflow-y-auto">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Quantum Computing: Recent Advances and Future Directions
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">Authors: J. Smith, A. Johnson, et al.</p>
                      <p className="text-gray-300 mb-3 text-sm">Abstract:</p>
                      <p className="text-gray-400 text-sm mb-4">
                        This paper explores recent developments in quantum computing architectures, with a focus on
                        superconducting qubits and topological quantum computation. We present experimental results
                        demonstrating improved coherence times and gate fidelities in multi-qubit systems...
                      </p>
                      <p className="text-gray-300 mb-3 text-sm">1. Introduction:</p>
                      <p className="text-gray-400 text-sm">
                        Quantum computing has seen remarkable progress in the past decade, moving from theoretical
                        constructs to working prototypes with increasing qubit counts and improving error rates. The
                        field now stands at a critical juncture where quantum advantage for specific problems appears
                        within reach...
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">Original Research Paper</h3>
                    <p className="text-gray-400 mb-6">
                      Dense academic papers are packed with valuable insights but can be difficult to digest and share.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Complex technical language",
                        "Dense paragraphs of text",
                        "Limited visual elements",
                        "Difficult to extract key points quickly",
                        "Not optimized for different learning styles",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="presentation" className="mt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-br from-purple-900/50 to-black border border-white/10 rounded-lg p-6 h-[350px] flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-6 text-center">
                        Quantum Computing: Key Insights
                      </h3>
                      <div className="flex-1 flex flex-col justify-center">
                        <ul className="space-y-6">
                          {[
                            "Superconducting qubits achieved 99.8% gate fidelity",
                            "Coherence times extended to 300 microseconds",
                            "Error correction protocols reduced logical error rates by 75%",
                            "Quantum advantage demonstrated for simulation of 30-particle system",
                          ].map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              className="flex items-center text-white"
                            >
                              <span className="h-6 w-6 rounded-full bg-purple-500 mr-3 flex items-center justify-center text-sm font-bold">
                                {i + 1}
                              </span>
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">AI-Generated Presentation</h3>
                    <p className="text-gray-400 mb-6">
                      Our AI transforms complex papers into clear, visually engaging presentations ready to share.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Key findings highlighted with visual hierarchy",
                        "Technical concepts simplified with visual aids",
                        "Data presented in clear, engaging charts",
                        "Speaker notes with explanation prompts",
                        "Export to PowerPoint, Google Slides, or PDF",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="audio" className="mt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-black/50 border border-white/10 rounded-lg p-6 h-[350px] flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-4">Audio Summary</h3>
                      <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="w-full max-w-md bg-black/50 rounded-lg p-4 border border-purple-500/30">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                              <Podcast className="h-8 w-8 text-purple-500 mr-3" />
                              <div>
                                <p className="text-white font-medium">Quantum Computing Insights</p>
                                <p className="text-gray-400 text-sm">12:34 minutes</p>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="h-2 bg-gray-700 rounded-full mb-1">
                              <div className="h-2 bg-purple-500 rounded-full w-1/3"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400">
                              <span>4:12</span>
                              <span>12:34</span>
                            </div>
                          </div>

                          <div className="flex justify-center space-x-4">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-10 w-10 rounded-full border-purple-500/50 text-purple-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                              >
                                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                              </svg>
                            </Button>
                            <Button size="icon" className="h-12 w-12 rounded-full bg-purple-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                              >
                                <rect x="6" y="4" width="4" height="16"></rect>
                                <rect x="14" y="4" width="4" height="16"></rect>
                              </svg>
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-10 w-10 rounded-full border-purple-500/50 text-purple-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                              >
                                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">Audio Summaries</h3>
                    <p className="text-gray-400 mb-6">
                      Listen to research papers as engaging podcast-style audio summaries with natural-sounding voices.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Natural-sounding AI narration",
                        "Key findings emphasized with audio cues",
                        "Perfect for learning while commuting",
                        "Adjustable playback speed",
                        "Download for offline listening",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="visualization" className="mt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-black/50 border border-white/10 rounded-lg p-6 h-[350px] flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-4">Data Visualization</h3>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-full h-[250px]">
                          {/* Simulated chart */}
                          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-[200px]">
                            {[65, 40, 85, 30, 70, 50, 90].map((height, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="w-[10%] bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md"
                              ></motion.div>
                            ))}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-600"></div>
                          <div className="absolute bottom-0 left-0 h-full w-px bg-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">Interactive Data Visualization</h3>
                    <p className="text-gray-400 mb-6">
                      Our AI transforms complex research data into clear, interactive visualizations.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Automatic chart generation from paper data",
                        "Interactive elements for exploring results",
                        "Multiple visualization types (bar, line, scatter, etc.)",
                        "Export charts for presentations or publications",
                        "Compare data across multiple papers",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="h-2 w-2 rounded-full bg-purple-500 mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
