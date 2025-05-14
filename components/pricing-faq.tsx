"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingFAQ() {
  const faqs = [
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the end of your current billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for our Basic and Pro plans. No credit card is required to start your trial. You'll get full access to all features included in the plan during the trial period.",
    },
    {
      question: "How does the paper upload limit work?",
      answer:
        "The paper upload limit refers to the number of unique research papers you can upload and process per month. Each time you upload a new paper, it counts against your monthly limit. The limit resets at the beginning of each billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Enterprise customers, we can also arrange invoicing for bank transfers.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan's features until the end of your current billing period.",
    },
    {
      question: "What's included in the Enterprise plan?",
      answer:
        "The Enterprise plan includes everything in the Pro plan plus custom AI training on your specific research domain, unlimited paper uploads, advanced team collaboration features, admin dashboard, API access, and a dedicated account manager for personalized support.",
    },
    {
      question: "Do you offer discounts for academic institutions?",
      answer:
        "Yes, we offer special pricing for universities, research institutions, and academic labs. Please contact our sales team for more information about our academic pricing options.",
    },
    {
      question: "How secure is my research data?",
      answer:
        "We take data security very seriously. All uploads are encrypted in transit and at rest. We do not share your research data with third parties, and you retain full ownership of your content. For Enterprise customers, we offer additional security features and custom data retention policies.",
    },
  ]

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            Have questions about our pricing or features? Find answers to common questions below.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-black/30 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-purple-400 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Still have questions?{" "}
            <a href="/contact" className="text-purple-400 hover:text-purple-300 underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
