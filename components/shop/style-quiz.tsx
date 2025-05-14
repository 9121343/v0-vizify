"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

const quizSteps = [
  {
    id: "style",
    question: "What's your preferred shoe style?",
    options: [
      { id: "casual", label: "Casual", image: "/placeholder.svg?height=100&width=100" },
      { id: "athletic", label: "Athletic", image: "/placeholder.svg?height=100&width=100" },
      { id: "formal", label: "Formal", image: "/placeholder.svg?height=100&width=100" },
      { id: "trendy", label: "Trendy", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "activity",
    question: "What activities do you do most?",
    options: [
      { id: "walking", label: "Walking", image: "/placeholder.svg?height=100&width=100" },
      { id: "running", label: "Running", image: "/placeholder.svg?height=100&width=100" },
      { id: "gym", label: "Gym", image: "/placeholder.svg?height=100&width=100" },
      { id: "everyday", label: "Everyday", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "color",
    question: "What colors do you prefer?",
    options: [
      { id: "neutral", label: "Neutral", image: "/placeholder.svg?height=100&width=100" },
      { id: "bright", label: "Bright", image: "/placeholder.svg?height=100&width=100" },
      { id: "dark", label: "Dark", image: "/placeholder.svg?height=100&width=100" },
      { id: "pastel", label: "Pastel", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
]

export default function StyleQuiz() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isComplete, setIsComplete] = useState(false)

  const handleOptionSelect = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId,
    })
  }

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
      // Here you would typically send the answers to an API
      console.log("Quiz answers:", answers)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setIsComplete(false)
    setIsQuizOpen(false)
  }

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        {!isQuizOpen ? (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Shoes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Take our quick style quiz and get personalized shoe recommendations based on your preferences
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
              onClick={() => setIsQuizOpen(true)}
            >
              Take the Style Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {!isComplete ? (
              <div className="p-6 md:p-8">
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{quizSteps[currentStep].question}</h3>

                {/* Options */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {quizSteps[currentStep].options.map((option) => {
                    const isSelected = answers[quizSteps[currentStep].id] === option.id
                    return (
                      <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-colors ${
                          isSelected ? "border-purple-600 bg-purple-50" : "border-gray-200 hover:border-purple-300"
                        }`}
                        onClick={() => handleOptionSelect(quizSteps[currentStep].id, option.id)}
                      >
                        <div className="relative aspect-square bg-gray-100">
                          <img
                            src={option.image || "/placeholder.svg"}
                            alt={option.label}
                            className="w-full h-full object-cover"
                          />
                          {isSelected && (
                            <div className="absolute inset-0 bg-purple-600/20 flex items-center justify-center">
                              <div className="bg-purple-600 text-white rounded-full p-1">
                                <Check className="h-4 w-4" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-3 text-center">
                          <span className={`font-medium ${isSelected ? "text-purple-600" : "text-gray-900"}`}>
                            {option.label}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => (currentStep > 0 ? setCurrentStep(currentStep - 1) : resetQuiz())}
                  >
                    {currentStep > 0 ? "Back" : "Cancel"}
                  </Button>
                  <Button
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={handleNext}
                    disabled={!answers[quizSteps[currentStep].id]}
                  >
                    {currentStep < quizSteps.length - 1 ? "Next" : "See Results"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Style Profile is Ready!</h3>
                <p className="text-gray-600 mb-8">
                  Based on your preferences, we've curated a selection of shoes just for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">View Recommendations</Button>
                  <Button variant="outline" onClick={resetQuiz}>
                    Retake Quiz
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
