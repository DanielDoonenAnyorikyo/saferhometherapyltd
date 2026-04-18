// Final Botpress Fix - April 2026
import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Safer Home Therapy | Professional Pediatric Therapy in Nigeria",
  description: "Expert Speech Therapy, Occupational Therapy, and Behavioral Modification for children with special needs.",
  metadataBase: new URL("https://saferhometherapyltd.com"), 
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        {/* Adjusted CSP to be more permissive for Botpress specifically */}
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.botpress.cloud https://files.bpcontent.cloud; frame-src 'self' https://webchat.botpress.cloud; connect-src 'self' https://*.botpress.cloud https://*.bpcontent.cloud https://cdn.botpress.cloud;"
        />
      </head>
      <body>
        {children}

        {/* BOTPRESS SCRIPT 1: The Loader */}
        <Script 
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" 
          strategy="afterInteractive" 
        />
        
        {/* BOTPRESS SCRIPT 2: Your Bot Config */}
        <Script 
          src="https://files.bpcontent.cloud/2026/04/17/15/20260417155516-TKCGHR4F.js" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
