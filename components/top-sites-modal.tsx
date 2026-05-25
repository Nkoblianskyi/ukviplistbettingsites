"use client"

import { Button } from "@/components/ui/button"
import { Star, X } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"
import { useEffect, useState } from "react"

export function TopSitesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 9000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  if (!isOpen || !topSite) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div className="bg-[#111] border border-border w-full max-w-[460px] relative">

        {/* Gold top bar */}
        <div className="h-[3px] w-full bg-primary" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <span className="font-heading font-bold text-lg uppercase tracking-widest text-foreground">
            Our Top Pick
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Logo box */}
        <div className="mx-6 mt-6 border border-border bg-[#1a1a1a] flex items-center justify-center py-7">
          <img
            src={topSite.logo || "/placeholder.svg"}
            alt={`${topSite.name} logo`}
            className="h-14 max-w-[200px] object-contain"
          />
        </div>

        {/* Welcome offer */}
        <div className="px-6 pt-5 pb-5 border-b border-border text-center">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.25em] mb-2">
            Welcome Offer
          </p>
          <p className="font-heading font-bold text-2xl md:text-2xl text-primary leading-snug">
            {topSite.bonus}
          </p>
        </div>

        {/* Stars + rating */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-1" aria-label={`${topSite.stars} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < topSite.stars ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="font-heading font-bold text-3xl text-primary">
            {topSite.rating.toFixed(1)}
            <span className="text-sm text-muted-foreground font-mono font-normal">/10</span>
          </span>
        </div>

        {/* CTA */}
        <div className="px-6 pt-5 pb-3">
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest text-sm h-12">
            <a href={topSite.url} target="_blank" rel="noopener noreferrer nofollow sponsored">
              Visit Site
            </a>
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="px-6 pb-5 text-center">
          <p className="font-mono text-[10px] text-destructive/80 uppercase tracking-wide">
            18+ | Responsible Gambling | T&amp;Cs Apply
          </p>
        </div>
      </div>
    </div>
  )
}
