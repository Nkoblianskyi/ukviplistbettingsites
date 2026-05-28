"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingSection } from "@/components/rating-section"
import { InfoSections } from "@/components/info-sections"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <RatingSection />
      <InfoSections />
      <CookieBanner />
      <Footer />
    </div>
  )
}
