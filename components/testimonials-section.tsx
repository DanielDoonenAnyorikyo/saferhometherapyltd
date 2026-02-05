"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ibemere Felix",
    location: "",
    text: "Client centred with optimal result. Tested and trusted.",
    rating: 5,
  },
  {
    name: "Denen Dorothy",
    location: "",
    text: "Safer Home is indeed a safe place for your special kid.",
    rating: 5,
  },
  {
    name: "Oranu Bola",
    location: "",
    text: "My child communication and behaviour have improved greatly thanks so much.",
    rating: 5,
  },
  {
    name: "Jerome Ogwu",
    location: "",
    text: "One of the best therapy centre for special needs therapy.",
    rating: 5,
  },
  {
    name: "Mimidoo Anagbe",
    location: "",
    text: "Safer Home Therapy is truly God-sent. At first, I couldn't believe the transformation someone I referred experienced. Thank you, Raymond for coming through for us.
",
    rating: 4,
  },
  {
    name: "Jude Tov",
    location: "",
    text: "Safer Home Therapy is indeed a company that I can recommend to someone, they are actually doing a great job when it comes to working with people with special needs. I gladly gave you people my 5 stars.",
    rating: 5,
  },
  {
    name: "Uzoamaka Nwoye",
    location: "",
    text: "Top notch services delivery. Safer Home Therapy, your trusted brand. I highly recommend.",
    rating: 5,
  },
  {
    name: "Grace Otokpa",
    location: "",
    text: "We noticed positive changes in our child within a short time. His speech improved and he's more confident and well behaved. As a parent I'm very satisfied with the progress.",
    rating: 4,
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
