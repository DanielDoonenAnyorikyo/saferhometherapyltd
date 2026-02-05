"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What conditions do you provide therapy for?",
    answer: "We specialize in providing therapy for children with Autism Spectrum Disorder (ASD), Down Syndrome, Cerebral Palsy, ADHD, developmental delays, speech and language disorders, sensory processing challenges, and other special needs.",
  },
  {
    question: "How does home-based therapy work?",
    answer: "Our qualified therapists visit your home at scheduled times to provide therapy sessions. This allows children to learn and develop in their familiar environment, which often leads to better engagement and faster progress.",
  },
  {
    question: "What age groups do you work with?",
    answer: "We work with children from infancy through adolescence (0-18 years). Early intervention is particularly beneficial, but we can help children at any stage of their development journey.",
  },
  {
    question: "How long are therapy sessions?",
    answer: "Sessions typically last 45-60 minutes, depending on the child's age, attention span, and specific therapeutic needs. We customize session length to maximize effectiveness for each child.",
  },
  {
    question: "How often should my child receive therapy?",
    answer: "The frequency depends on your child's individual needs and goals. Most children benefit from 2-3 sessions per week, but we'll work with you to create a schedule that fits your family and optimizes outcomes.",
  },
  {
    question: "Are your therapists qualified?",
    answer: "Yes, all our therapists are licensed professionals with specialized training and certifications in their respective fields. They undergo continuous professional development to stay current with best practices.",
  },
  {
    question: "How do you create treatment plans?",
    answer: "We begin with a comprehensive assessment of your child's strengths, challenges, and goals. Based on this, we develop an individualized treatment plan that we regularly review and adjust as your child progresses.",
  },
  {
    question: "Can parents be involved in therapy sessions?",
    answer: "Absolutely! We encourage parental involvement and provide coaching to help you support your child's development between sessions. Parent participation is often key to achieving the best outcomes.",
  },
  {
    question: "What areas in Nigeria do you cover?",
    answer: "We currently provide services all across the country. Please contact us to confirm availability in your specific location.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply fill out the contact form on our website or call us directly. We'll schedule an initial consultation to discuss your child's needs and explain our services in detail.",
  },
]

function FaqItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-medium text-foreground pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">{faq.answer}</p>
      </motion.div>
    </div>
  )
}

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            FAQs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our home therapy services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-6 lg:p-8 border border-border"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
