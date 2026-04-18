{/* Aggressive Voiceflow Blocker */}
<Script id="block-voiceflow-now" strategy="beforeInteractive">
  {`
    (function() {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.tagName === 'SCRIPT' && node.src && node.src.includes('voiceflow')) {
              node.remove();
            }
            if (node.id === 'voiceflow-chat' || node.className?.includes?.('vf-')) {
              node.style.display = 'none';
              node.remove();
            }
          });
        });
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    })();
  `}
</Script>

{/* Your new Botpress Scripts */}
<Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
<Script src="https://files.bpcontent.cloud/2026/04/17/15/20260417155516-TKCGHR4F.js" strategy="afterInteractive" />
  
// Deploying Botpress v3 - April 2026
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
        
        {/* 1. Botpress Core Library */}
        <Script 
          src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" 
          strategy="afterInteractive" 
        />
        
        {/* 2. Your Specific Bot Configuration */}
        <Script 
          src="https://files.bpcontent.cloud/2026/04/17/15/20260417155516-TKCGHR4F.js" 
          strategy="afterInteractive"
        />

        {/* 3. TTS (Text-to-Speech) Logic */}
        <Script id="botpress-tts" strategy="afterInteractive">
          {`
            window.botpressWebChat.onEvent(function(event) {
              if (event.type === 'MESSAGE.RECEIVED') {
                const utterance = new SpeechSynthesisUtterance(event.value.text);
                utterance.pitch = 1;
                utterance.rate = 1;
                window.speechSynthesis.speak(utterance);
              }
            }, ['MESSAGE.RECEIVED']);
          `}
        </Script>

      </body>
    </html>
  )
}
