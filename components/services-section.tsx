"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Hand, Brain, Sparkles, Focus, Users } from "lucide-react"

const services = [
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    description: "Enhancing communication skills through specialized speech and language interventions tailored to each child's needs.",
  },
  {
    icon: Hand,
    title: "Occupational Therapy",
    description: "Developing fine motor skills, daily living activities, and sensory processing for improved independence.",
  },
  {
    icon: Brain,
    title: "Behavior Modification",
    description: "Implementing positive behavioral strategies to support emotional regulation and social development.",
  },
  {
    icon: Sparkles,
    title: "Sensory Integration",
    description: "Helping children process and respond to sensory information more effectively in their daily lives.",
  },
  {
    icon: Focus,
    title: "Concentration Training",
    description: "Building attention span and focus through engaging activities and evidence-based techniques.",
  },
  {
    icon: Users,
    title: "Parental Coaching",
    description: "Empowering parents with skills and strategies to support their child's development at home.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Therapy Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a wide range of therapeutic services designed to address each child&apos;s unique needs and support their developmental journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
