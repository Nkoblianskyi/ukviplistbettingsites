"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "VIP Gold Pick", highlight: true }
    if (site.isTopLine) return { text: "Best Choice", highlight: false }
    if (site.isPopular) return { text: "Popular", highlight: false }
    if (site.isTrending) return { text: "Trending", highlight: false }
    return null
  }

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className="w-3 h-3"
        style={{
          fill: i < Math.floor(count) ? "hsl(43 85% 52%)" : "hsl(220 30% 25%)",
          color: i < Math.floor(count) ? "hsl(43 85% 52%)" : "hsl(220 30% 25%)",
        }}
        aria-hidden="true"
      />
    ))

  const primaryBadge = getPrimaryBadge()
  const isFirst = rank === 1

  return (
    <div
      className="relative rounded-xl overflow-hidden card-vip-hover"
      style={{
        background: isFirst
          ? "linear-gradient(135deg, hsl(220 42% 14%) 0%, hsl(220 40% 16%) 100%)"
          : "hsl(220 40% 12%)",
        border: isFirst
          ? "1px solid hsl(43 85% 52% / 0.45)"
          : "1px solid hsl(220 30% 22%)",
        boxShadow: isFirst
          ? "0 4px 24px hsl(43 85% 52% / 0.1), inset 0 1px 0 hsl(43 85% 52% / 0.08)"
          : "0 2px 8px hsl(220 45% 4% / 0.4)",
      }}
    >
      {/* Top badge strip */}
      {primaryBadge && (
        <div
          className="px-4 py-1.5 flex items-center gap-2"
          style={{
            background: primaryBadge.highlight
              ? "linear-gradient(90deg, hsl(43 85% 52% / 0.18), transparent)"
              : "hsl(220 38% 16% / 0.6)",
            borderBottom: "1px solid hsl(220 30% 22%)",
          }}
        >
          {primaryBadge.highlight && (
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "hsl(43 85% 52%)" }}
              aria-hidden="true"
            />
          )}
          <span
            className="font-mono text-[9px] uppercase tracking-[0.2em]"
            style={{ color: primaryBadge.highlight ? "hsl(43 85% 62%)" : "hsl(220 15% 55%)" }}
          >
            {primaryBadge.text}
          </span>
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[52px_190px_1fr_120px_160px] md:items-center md:gap-0 px-4 py-5">
        {/* Rank */}
        <div
          className="w-10 h-10 flex items-center justify-center font-heading font-black text-base flex-shrink-0 rounded-lg"
          style={{
            background: isFirst
              ? "linear-gradient(135deg, hsl(43 85% 48%), hsl(43 90% 60%))"
              : "hsl(220 35% 18%)",
            color: isFirst ? "hsl(220 45% 8%)" : "hsl(220 15% 55%)",
          }}
          aria-label={`Rank ${rank}`}
        >
          {rank}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 h-16 flex items-center justify-center px-4 overflow-hidden">
          <div
            className="flex items-center justify-center rounded-lg overflow-hidden"
            style={{ background: "#ffffff", padding: "6px 10px", maxWidth: 150 }}
          >
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="max-h-10 max-w-[130px] object-contain"
            />
          </div>
        </div>

        {/* Bonus */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <p
            className="font-heading font-black text-2xl md:text-3xl leading-tight"
            style={{ color: "hsl(43 85% 58%)" }}
          >
            {site.bonus}
          </p>
          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            {site.features.slice(0, 2).map((f, i) => (
              <span key={i} className="font-mono text-[9px] text-muted-foreground uppercase tracking-wide">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="text-center flex-shrink-0">
          <div
            className="font-heading font-black text-3xl leading-none"
            style={{ color: "hsl(43 85% 58%)" }}
          >
            {site.rating.toFixed(1)}
          </div>
          <div className="font-mono text-[9px] text-muted-foreground">/ 10</div>
          <div className="flex items-center justify-center gap-0.5 mt-1.5" aria-label={`${site.stars} out of 5 stars`}>
            {renderStars(site.stars)}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 text-center pl-4">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            aria-label={`Claim offer at ${site.name}`}
          >
            <button
              className="w-full font-mono uppercase tracking-widest text-[10px] px-4 py-2.5 rounded-lg transition-all"
              style={{
                background: isFirst
                  ? "linear-gradient(135deg, hsl(43 85% 48%), hsl(43 90% 58%))"
                  : "hsl(43 85% 48%)",
                color: "hsl(220 45% 8%)",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88"
                e.currentTarget.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Claim Offer
            </button>
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-8 h-8 flex items-center justify-center font-heading font-black text-sm flex-shrink-0 rounded-lg"
            style={{
              background: isFirst
                ? "linear-gradient(135deg, hsl(43 85% 48%), hsl(43 90% 60%))"
                : "hsl(220 35% 18%)",
              color: isFirst ? "hsl(220 45% 8%)" : "hsl(220 15% 55%)",
            }}
          >
            {rank}
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden"
            style={{ background: "#ffffff", padding: "5px 8px" }}
          >
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              width={110}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="flex-1 text-right">
            <div
              className="font-heading font-black text-2xl leading-none"
              style={{ color: "hsl(43 85% 58%)" }}
            >
              {site.rating.toFixed(1)}
            </div>
            <div className="flex justify-end gap-0.5 mt-0.5" aria-label={`${site.stars} out of 5 stars`}>
              {renderStars(site.stars)}
            </div>
          </div>
        </div>

        <div
          className="text-center py-3 mb-3 rounded-lg"
          style={{ background: "hsl(220 35% 16%)" }}
        >
          <p
            className="font-heading font-black text-2xl leading-tight"
            style={{ color: "hsl(43 85% 58%)" }}
          >
            {site.bonus}
          </p>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          aria-label={`Claim offer at ${site.name}`}
          className="block"
        >
          <button
            className="w-full font-mono uppercase tracking-widest text-[10px] h-10 rounded-lg transition-all"
            style={{
              background: "linear-gradient(135deg, hsl(43 85% 48%), hsl(43 90% 58%))",
              color: "hsl(220 45% 8%)",
              fontWeight: 700,
            }}
          >
            Claim Offer
          </button>
        </a>
      </div>

      {/* Disclaimer */}
      <div
        className="px-4 pb-2 pt-2 border-t"
        style={{ borderColor: "hsl(220 30% 18%)" }}
      >
        <p className="text-muted-foreground/50 text-[9px] font-mono">
          <span style={{ color: "hsl(0 72% 55%)", fontWeight: 600 }}>18+</span> | {site.terms}
        </p>
      </div>
    </div>
  )
}
