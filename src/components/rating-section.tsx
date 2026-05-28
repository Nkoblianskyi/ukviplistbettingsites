import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section
      className="w-full py-12 px-4 sport-pattern"
      style={{ background: "hsl(220 42% 10%)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="h-10 w-1 rounded-full flex-shrink-0"
            style={{ background: "linear-gradient(180deg, hsl(43 85% 52%), hsl(43 85% 35%))" }}
            aria-hidden="true"
          />
          <div>
            <h2 className="font-heading font-black text-xl md:text-2xl uppercase tracking-tight text-foreground">
              Top Rated VIP Betting Sites
            </h2>
            <p className="text-xs font-mono text-muted-foreground mt-0.5 uppercase tracking-wider">
              Independently ranked &middot; UKGC licensed only &middot; Expert-reviewed
            </p>
          </div>
        </div>

        {/* Cards list */}
        <div className="space-y-3">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Disclaimer note */}
        <div
          className="mt-6 pt-4 border-t"
          style={{ borderColor: "hsl(220 30% 22%)" }}
        >
          <p className="font-mono text-[9px] text-muted-foreground/45 uppercase tracking-widest leading-relaxed">
            Rankings based on independent editorial assessment. Affiliate links used. Gambling involves risk. 18+ only. BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
