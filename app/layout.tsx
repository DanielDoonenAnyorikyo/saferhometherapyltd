// Botpress Deployment - April 2026
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
      <body>
        {children}

        {/* 1. BOTPRESS WEBCHAT SCRIPT */}
        <Script 
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" 
          strategy="afterInteractive" 
        />
        
        {/* 2. YOUR SPECIFIC BOT CONFIGURATION */}
        <Script 
          src="https://files.bpcontent.cloud/2026/04/17/15/20260417155516-TKCGHR4F.js" 
          strategy="afterInteractive"
        />

        {/* 3. TEXT-TO-SPEECH (TTS) LOGIC */}
        <Script id="botpress-tts" strategy="afterInteractive">
          {`
            window.botpressWebChat.onEvent(function(event) {
              if (event.type === 'MESSAGE.RECEIVED') {
                if (event.value && event.value.text) {
                  const utterance = new SpeechSynthesisUtterance(event.value.text);
                  window.speechSynthesis.speak(utterance);
                }
              }
            }, ['MESSAGE.RECEIVED']);
          `}
        </Script>
      </body>
    </html>
  )
}
