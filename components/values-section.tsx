"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Award, Shield, Users, Handshake, Clock } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every child and family with empathy, understanding, and genuine care.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in therapeutic care and professional development.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain honesty, transparency, and ethical practices in all our interactions.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "We celebrate diversity and ensure every child feels valued and supported.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work collaboratively with families, schools and communities as partners in their child's journey.",
  },
  {
    icon: Clock,
    title: "Consistency",
    description: "We value steady, measurable progress through regular home sessions.",
  },
]

export function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-background/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Our Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            What Guides Our Work
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Our core values shape every interaction and drive our commitment to exceptional care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 hover:bg-background/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
