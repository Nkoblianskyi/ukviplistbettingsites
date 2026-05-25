import Image from "next/image"
import { ShieldCheck, Star, Clock, Trophy } from "lucide-react"

function getUpdatedLabel() {
  const now = new Date()
  return now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export function Hero() {
  const updatedDate = getUpdatedLabel()
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[440px] flex flex-col overflow-hidden">
      {/* Stadium background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/stadium-hero.jpg"
          alt="Premier League football stadium packed with supporters"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Deep navy overlay for blue-gold theme */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(220 55% 7% / 0.94) 0%, hsl(220 50% 10% / 0.82) 50%, hsl(215 45% 14% / 0.75) 100%)",
          }}
        />
        {/* Sport pitch line pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, hsl(210 90% 60% / 0.08) 60px, hsl(210 90% 60% / 0.08) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, hsl(210 90% 60% / 0.06) 60px, hsl(210 90% 60% / 0.06) 61px)",
          }}
        />
        {/* Gold side accent glow */}
        <div
          className="absolute inset-y-0 left-0 w-1"
          style={{ background: "linear-gradient(180deg, hsl(43 85% 52%), hsl(43 85% 52% / 0))" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center px-4 py-10 md:py-16">
        <div className="mx-auto w-full max-w-[1100px]">
          {/* Label bar */}
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <div
              className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.18em]"
              style={{
                background: "hsl(43 85% 52% / 0.15)",
                border: "1px solid hsl(43 85% 52% / 0.4)",
                color: "hsl(43 85% 62%)",
              }}
            >
              Independent Editorial &nbsp;&middot;&nbsp; UKGC Licensed Only
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black uppercase leading-none tracking-tight text-balance text-white mb-3 md:mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <span className="block">UK VIP List</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, hsl(43 85% 52%), hsl(43 90% 68%), hsl(38 80% 50%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Betting Sites
            </span>
          </h1>

          {/* Standfirst */}
          <p className="font-sans text-white/75 text-sm md:text-base leading-relaxed max-w-xl mb-6 md:mb-8">
            Expertly ranked UKGC-licensed bookmakers vetted for safety, odds, and player experience.
            Our independent team reviews every site — zero paid placements, ever.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            {[
              { icon: ShieldCheck, label: "UKGC Licensed" },
              { icon: Trophy, label: "VIP Rated" },
              { icon: Star, label: "Expert Reviewed" },
              { icon: Clock, label: "Updated Monthly" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(43 85% 55%)" }} aria-hidden="true" />
                <span className="font-mono text-[11px] text-white/65 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Updated date strip */}
      <div
        className="relative z-10 w-full py-2 px-4 border-t"
        style={{
          borderColor: "hsl(43 85% 52% / 0.25)",
          background: "hsl(220 45% 5% / 0.7)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] flex items-center gap-2">
          <div className="h-[1px] w-4 flex-shrink-0" style={{ background: "hsl(43 85% 52%)" }} aria-hidden="true" />
          <span className="font-mono text-[10px] text-white/45 uppercase tracking-[0.15em]">
            Rating last updated:&nbsp;
            <time dateTime={new Date().toISOString().slice(0, 10)} style={{ color: "hsl(43 85% 60%)" }}>
              {updatedDate}
            </time>
          </span>
        </div>
      </div>
    </section>
  )
}
