import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Barlow_Condensed } from "next/font/google"
import "./globals.css"



const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "UK VIP List Betting Sites — Top UKGC Bookmakers 2026",
  description:
    "Discover the UK's most trusted VIP betting sites. Independent expert rankings of UKGC-licensed bookmakers with exclusive offers, in-depth reviews, and unbiased ratings. ukviplistbettingsites.com",
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#0d1320",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${barlow.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full">
          {children}

        </div>
      </body>
    </html>
  )
}
