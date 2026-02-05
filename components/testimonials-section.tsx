"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mrs. Adaeze O.",
    location: "Lagos",
    text: "The progress my son has made in just 6 months is incredible. The therapists are patient and truly understand his needs.",
    rating: 5,
  },
  {
    name: "Mr. Chukwudi E.",
    location: "Abuja",
    text: "Having therapy at home has been a game-changer for our daughter. She's more comfortable and engaged during sessions.",
    rating: 5,
  },
  {
    name: "Mrs. Fatima B.",
    location: "Lagos",
    text: "Professional, compassionate, and effective. Safer Home Therapy has given us hope and our child the support she needs.",
    rating: 5,
  },
  {
    name: "Dr. Olumide A.",
    location: "Ibadan",
    text: "As a pediatrician, I confidently refer families to Safer Home Therapy. Their evidence-based approach delivers results.",
    rating: 5,
  },
  {
    name: "Mrs. Ngozi U.",
    location: "Port Harcourt",
    text: "The parental coaching has empowered us to better support our child's development every day. Truly transformative.",
    rating: 5,
  },
  {
    name: "Mr. & Mrs. Ibrahim",
    location: "Abuja",
    text: "Our twins both receive therapy, and the personalized approach for each child shows real understanding of their unique needs.",
    rating: 5,
  },
  {
    name: "Mrs. Blessing N.",
    location: "Lagos",
    text: "The speech therapy has helped our son find his voice. We're so grateful for this dedicated team.",
    rating: 5,
  },
  {
    name: "Chief & Mrs. Okafor",
    location: "Enugu",
    text: "Exceptional service and genuine care. They treat our grandchild like family while maintaining professionalism.",
    rating: 5,
  },
  {
    name: "Mrs. Aisha M.",
    location: "Kano",
    text: "The occupational therapy has improved our daughter's independence remarkably. Daily tasks are no longer a struggle.",
    rating: 5,
  },
  {
    name: "Mr. Emeka C.",
    location: "Lagos",
    text: "Consistency and dedication define this team. Our son looks forward to every session now.",
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-card rounded-2xl p-6 border border-border mx-3">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={`star-${testimonial.name}-${i}`} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
      <div>
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Families Say About Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the families whose lives we&apos;ve had the privilege to touch.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: [0, -2640] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
