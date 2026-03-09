import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script' // <-- Add this import
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Safer Home Therapy | Professional Pediatric Therapy in Nigeria",
  description: "Expert Speech Therapy, Occupational Therapy, and Behavioral Modification for children with special needs. Trusted home-based therapy services in Nigeria.",
  keywords: [
    "Pediatric Therapy Nigeria",
    "Speech Therapy for children",
    "Occupational Therapy Nigeria",
    "Behavioral Modification",
    "Special Needs Education",
    "Autism support Nigeria",
    "Safer Home Therapy",
    "Health",
    "Children care",
    "Hospital",
  ],
  authors: [{ name: "Safer Home Therapy Ltd" }],
  metadataBase: new URL("https://saferhometherapyltd.com"), 
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saferhometherapyltd.com",
    title: "Safer Home Therapy - Empowering Children with Special Needs",
    description: "Professional home-based therapy and consulting services for children. Specialized in Speech and Occupational therapy.",
    siteName: "Safer Home Therapy",
    images: [
      {
        url: "/icon-light-32x32.png",
        width: 800,
        height: 600,
        alt: "Safer Home Therapy Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Safer Home Therapy | Pediatric Services",
    description: "Expert therapy services for children with special needs.",
    images: ["/icon-light-32x32.png"],
  },

  icons: {
    icon: "/icon-light-32x32.png",
    apple: "/icon-light-32x32.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Analytics />
        
        {/* Optimized Voiceflow Script */}
        <Script id="voiceflow-widget" strategy="lazyOnload">
          {`
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '69a7eb2e7e59042952d660a2' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `}
        </Script>
      </body>
    </html>
  )
}
