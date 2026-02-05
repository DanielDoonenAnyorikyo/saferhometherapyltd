"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
   {
    question: "How does home-based therapy work?",
    answer: "At Safer Home Therapy LTD, we provide high-quality, individualized therapy services in the comfort of your home. Our qualified therapists conduct detailed assessments, develop customized treatment plans, and deliver one-on-one sessions in a familiar environment. This approach enhances focus, comfort, and faster progress, especially in speech and communication development.",
  },
  {
    question: "What age groups do you work with?",
    answer: "We provide therapy services for both children and adults. Our programs support toddlers, preschoolers, school-age children, teenagers, and adults who experience speech, language, learning, developmental, or physical challenges.",
  },
  {
    question: "How often should my child receive therapy?",
    answer: "Therapy frequency is determined based on individual needs and professional assessment. Most clients receive therapy one to three times per week, while others may require more or fewer sessions depending on their goals and progress.",
  },
  {
    question: "Are your therapists qualified?",
    answer: "Yes. Our therapists are professionally trained, certified, and experienced in speech therapy, occupational therapy, behavioral intervention, and special needs education. We maintain high ethical and professional standards to ensure quality service delivery.",
  },
  {
    question: "How do you create treatment plans?",
    answer: "We begin with a comprehensive evaluation of communication, cognitive, motor, and functional abilities. Based on our findings, we develop a personalized treatment plan with clearly defined goals, evidence-based strategies, and continuous progress monitoring.",
  },
  {
    question: "Can parents be involved in therapy sessions?",
    answer: "Yes. We strongly encourage the active involvement of parents, caregivers, and family members. We provide guidance, training, and practical home-based strategies to help reinforce therapy goals and promote long-term progress.",
  },
  {
    question: "What areas in Nigeria do you cover?",
    answer: "We currently offer home-based therapy services within Abuja and its surrounding communities. Services in other locations may be arranged upon request, subject to availability.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started with Safer Home Therapy LTD is simple: Contact us via phone call or WhatsApp. Schedule an initial consultation and assessment. Receive a personalized therapy and intervention plan. Begin structured home-based therapy sessions.",
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
