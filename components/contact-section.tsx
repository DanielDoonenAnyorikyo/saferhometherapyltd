"use client"

import React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    request: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hello Safer Home Therapy!

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Request: ${formData.request}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/2348067430887?text=${encodedMessage}`
    
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Get in Touch Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your child&apos;s therapy journey? Reach out to us and let&apos;s discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-6 lg:p-10 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="request" className="block text-sm font-medium text-foreground mb-2">
                    Your Request
                  </label>
                  <textarea
                    id="request"
                    required
                    rows={4}
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your child's needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                <a
                  href="tel:+2348067430887"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+234 806 743 0887</p>
                  </div>
                </a>

                <a
                  href="mailto:saferhometherapy@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">saferhometherapy@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                  </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      {/* We use a div here instead of a p to avoid the nesting error */}
                      <div className="text-muted-foreground text-sm space-y-2">
                      <p><strong>HQ:</strong> Plot 122 Hassan Sani Street, CBN Estate, Abuja, Nigeria.</p>
                       <p><strong>Branch:</strong> Opposite National Open University, Makurdi, Benue State, Nigeria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/share/1823mbimkX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="https://wa.me/2348067430887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="mailto:saferhometherapy@gmail.com"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
                <a
                  href="tel:+2348067430887"
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:scale-105 transition-all group"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-secondary rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Registered Company</p>
              <p className="font-serif text-xl font-bold text-foreground">RC: 8208650</p>
              <p className="text-muted-foreground">Safer Home Therapy Ltd</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
export default ContactSection;
