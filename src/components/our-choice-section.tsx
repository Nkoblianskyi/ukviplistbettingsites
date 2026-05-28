import { Star } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  const topSite = bettingSites[0]

  return (
    <section className="w-full bg-muted/30 py-10 px-4 border-y border-border">
      <div className="mx-auto max-w-[1000px]">

        {/* Section header */}
        <div className="mb-6">
          <div className="h-[3px] w-full bg-primary mb-0" />
          <div className="border-b border-border pb-4 pt-3 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                Our Gold Pick
              </h2>
              <p className="font-mono text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">
                Highest-rated operator this month — chosen by our editorial team
              </p>
            </div>
            <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-14 h-14 border-2 border-primary">
              <div className="text-center">
                <div className="font-heading font-bold text-primary text-sm leading-none">#1</div>
                <div className="font-mono text-[7px] text-primary/70 uppercase tracking-widest leading-tight mt-0.5">Gold</div>
              </div>
            </div>
          </div>
        </div>

        {/* Top pick preview */}
        <a
          href={topSite.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="w-full block border border-primary/40 bg-card p-6 flex items-center gap-6 hover:border-primary transition-colors"
          aria-label={`Visit ${topSite.name} — ${topSite.bonus}`}
        >
          <div className="flex-shrink-0 h-16 flex items-center">
            <img
              src={topSite.logo || "/placeholder.svg"}
              alt={`${topSite.name} logo`}
              className="h-12 max-w-[160px] object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-1">Welcome Offer</p>
            <p className="font-heading font-bold text-2xl md:text-3xl text-primary leading-tight truncate">
              {topSite.bonus}
            </p>
          </div>
          <div className="flex-shrink-0 hidden sm:flex flex-col items-end gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < topSite.stars ? "fill-primary text-primary" : "fill-muted text-muted"}`} aria-hidden="true" />
              ))}
            </div>
            <span className="font-heading font-bold text-3xl text-primary leading-none">
              {topSite.rating.toFixed(1)}
              <span className="font-mono text-sm text-muted-foreground font-normal">/10</span>
            </span>
          </div>
          <div className="flex-shrink-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary px-4 py-2">
              Visit Site
            </span>
          </div>
        </a>

        {/* Editorial note */}
        <div className="mt-4 bg-card border border-border px-4 py-3">
          <div className="flex gap-3 items-start">
            <div className="w-1 flex-shrink-0 bg-primary self-stretch" aria-hidden="true" />
            <div>
              <p className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest mb-1">Editorial Note</p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                Our Gold Pick is selected based on overall composite scoring across licensing, welcome offer value, odds quality, usability, and customer support. The selection is reviewed monthly and reflects current operator standards.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
