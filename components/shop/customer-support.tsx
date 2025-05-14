"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Phone, Mail, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unworn shoes in their original packaging. Returns are free for members of our rewards program, and $5.95 for all other customers.",
  },
  {
    question: "How do I find my shoe size?",
    answer:
      "You can use our size guide available on each product page. We recommend measuring your feet in the evening when they are at their largest and using our interactive size finder tool.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. International shipping may take 7-14 business days depending on the destination.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes, we offer free standard shipping on all orders over $75. We also offer free shipping to all members of our Gold and Platinum rewards tiers regardless of order value.",
  },
]

export default function CustomerSupport() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We're Here to Help</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our customer support team is ready to help you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h4>
                <p className="text-gray-600 mb-4">Chat with our support team in real-time for immediate assistance.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Start Chat</Button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600 mb-4">Speak directly with our customer service representatives.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">1-800-SHOE-HELP</Button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Email Support</h4>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">support@shoevista.com</Button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <HelpCircle className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Help Center</h4>
                <p className="text-gray-600 mb-4">Browse our comprehensive knowledge base for answers.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Visit Help Center</Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h4>
              <p className="text-gray-600 mb-4">Stay updated with the latest products, trends, and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Your email address" className="flex-1" />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap">Subscribe</Button>
              </form>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-purple-600 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Can't find what you're looking for? Check our complete FAQ section.</p>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                View All FAQs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
