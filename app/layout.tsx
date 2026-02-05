import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata = {
  title: "Safer Home Therapy",
  description: "Professional Pediatric Therapy Services",
  icons: {
    icon: [
      {
        // This creates a circle mask around your square jpeg
        url: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><foreignObject x='0' y='0' width='100' height='100'><div xmlns='http://www.w3.org/1999/xhtml' style='width:100%;height:100%;background:url(/icon-light-32x32.jpeg) center/cover;border-radius:50%;'/></foreignObject></svg>`,
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
