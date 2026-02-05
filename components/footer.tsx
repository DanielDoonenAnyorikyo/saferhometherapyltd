"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faqs", label: "FAQs" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
<footer className="bg-foreground text-background py-16">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
     {/* Brand */}
<div className="lg:col-span-2">
  <div className="flex items-center gap-2 mb-4">
    {/* Logo Container */}
    <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-background/20 flex items-center justify-center shrink-0">
      <img 
        src="/public/icon-light-32x32.png"
        alt="Safer Home Therapy Logo" 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-primary font-bold text-lg">S</span>';
        }}
      />
    </div>
    {/* Brand Text */}
    <div>
      <span className="font-serif font-bold text-lg block">Safer Home Therapy</span>
      <span className="block text-xs text-background/60 -mt-1">Ltd</span>
    </div>
  </div>
  
  <p className="text-background/70 max-w-sm mb-4 leading-relaxed">
    Therapy and consulting services for children with special needs.
  </p>
  <p className="text-sm text-background/50">RC: 8208650</p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/70">
              <li>Speech Therapy</li>
              <li>Occupational Therapy</li>
              <li>Behavior Modification</li>
              <li>Sensory Integration</li>
              <li>Parental Coaching</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60 flex items-center gap-1">
              Copyright © {currentYear} SAFER HOME THERAPY LTD. Designed and Developed by
              <a 
              href="https://neot-ech.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}
              >
              Neo-Tech
              </a>
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
