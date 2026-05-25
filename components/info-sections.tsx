"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ShieldCheck, Trophy, Star, Zap, CreditCard, Headphones } from "lucide-react"

const CRITERIA = [
  {
    icon: ShieldCheck,
    title: "Licensing & Safety",
    weight: "30%",
    items: [
      "Active UKGC licence verification",
      "SSL encryption & data protection",
      "Player fund protection status",
      "Anti-fraud systems assessment",
    ],
  },
  {
    icon: Trophy,
    title: "Welcome Offers",
    weight: "25%",
    items: [
      "Welcome offer value analysis",
      "Wagering requirement review",
      "Ongoing promotions quality",
      "Terms transparency check",
    ],
  },
  {
    icon: Star,
    title: "Odds Quality",
    weight: "20%",
    items: [
      "Premier League odds comparison",
      "Operator margin analysis",
      "Market breadth assessment",
      "In-play betting coverage",
    ],
  },
  {
    icon: Zap,
    title: "Usability",
    weight: "15%",
    items: [
      "Mobile and desktop testing",
      "Registration process review",
      "Navigation and design audit",
      "Cash out functionality",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments",
    weight: "7%",
    items: [
      "Deposit and withdrawal options",
      "Withdrawal speed testing",
      "Fee transparency check",
      "Min and max limits review",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    weight: "3%",
    items: [
      "Live chat response time",
      "Email support quality",
      "Help centre depth",
      "Problem resolution ability",
    ],
  },
]

const FAQS = [
  {
    q: "What makes a betting site a 'VIP' pick?",
    a: "A VIP-rated site must hold an active UKGC licence, achieve a rating of 8.5 or above across all six criteria, and pass our hands-on testing for at least four weeks. VIP status is reserved for the top-tier operators that consistently deliver outstanding odds, fast payouts, and transparent terms.",
  },
  {
    q: "How often are the rankings updated?",
    a: "Our expert team reviews and updates the rankings on a monthly basis. Any bookmaker that changes its terms, reduces payout speeds, or fails a re-test is immediately re-evaluated and may be demoted or removed from the list entirely.",
  },
  {
    q: "Are the betting sites on this list safe to use?",
    a: "Every site listed on ukviplistbettingsites.com holds a current UKGC (UK Gambling Commission) licence, meaning it is legally authorised to accept bets from UK residents. All listed sites use 128-bit SSL encryption and are required to provide responsible gambling tools.",
  },
  {
    q: "Do you accept payments from betting operators?",
    a: "Our editorial rankings are strictly independent. We use affiliate links to earn commission when you sign up via our site, but this does not influence rankings in any way. A bookmaker's position is determined solely by our scoring methodology.",
  },
  {
    q: "What should I look for in a welcome offer?",
    a: "Focus on the wagering requirement (aim for 30x or lower), minimum odds restrictions, and time limits. A generous headline bonus with a 50x wagering requirement is rarely worth taking. Our reviews highlight the real value, not just the headline number.",
  },
  {
    q: "How do I bet responsibly?",
    a: "Set a fixed monthly budget before you deposit. Use your bookmaker's deposit limits and session time reminders. Never chase losses and treat any winnings as a bonus, not income. Free help is always available at BeGambleAware.org and GamCare.org.uk.",
  },
]

export function InfoSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="w-full">

      {/* ── How We Rate — sport-accented blue section ── */}
      <section
        className="w-full py-14 px-4"
        style={{ background: "hsl(220 45% 7%)" }}
      >
        <div className="mx-auto max-w-[1100px]">

          {/* Section header */}
          <div className="flex items-start gap-4 mb-10">
            <div
              className="h-12 w-1 rounded-full flex-shrink-0 mt-1"
              style={{ background: "linear-gradient(180deg, hsl(43 85% 52%), hsl(43 85% 35%))" }}
              aria-hidden="true"
            />
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                How We Rate Betting Sites
              </h2>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-2 max-w-2xl">
                Every bookmaker on UK VIP List Betting Sites is put through a rigorous six-pillar assessment by our independent editorial team.
                We spend a minimum of four weeks conducting hands-on tests before any rating is published — no shortcuts, no bias, no paid placements.
              </p>
            </div>
          </div>

          {/* Criteria cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {CRITERIA.map((cat, i) => {
              const Icon = cat.icon
              return (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-3"
                  style={{
                    background: "hsl(220 40% 12%)",
                    border: "1px solid hsl(220 30% 20%)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "hsl(43 85% 52% / 0.12)" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "hsl(43 85% 55%)" }} aria-hidden="true" />
                      </div>
                      <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground">
                        {cat.title}
                      </h3>
                    </div>
                    <span
                      className="font-heading font-black text-xl"
                      style={{ color: "hsl(43 85% 55%)" }}
                    >
                      {cat.weight}
                    </span>
                  </div>
                  {/* Weight bar */}
                  <div
                    className="h-0.5 rounded-full w-full"
                    style={{ background: "hsl(220 30% 20%)" }}
                  >
                    <div
                      className="h-0.5 rounded-full"
                      style={{
                        width: cat.weight,
                        background: "linear-gradient(90deg, hsl(43 85% 52%), hsl(43 90% 64%))",
                      }}
                    />
                  </div>
                  <ul className="space-y-1.5" role="list">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: "hsl(43 85% 52%)" }}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Safer Betting — darker section ── */}
      <section
        className="w-full py-14 px-4 sport-pattern"
        style={{ background: "hsl(220 50% 6%)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="flex items-start gap-4 mb-8">
            <div
              className="h-12 w-1 rounded-full flex-shrink-0 mt-1"
              style={{ background: "linear-gradient(180deg, hsl(0 72% 50%), hsl(0 72% 35%))" }}
              aria-hidden="true"
            />
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                Safer Betting
              </h2>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-2 max-w-2xl">
                Betting should always be an enjoyable form of entertainment — never a financial strategy.
                We are committed to promoting responsible gambling and only list operators with robust safer-gambling tools.
              </p>
            </div>
          </div>

          {/* Warning block */}
          <div
            className="rounded-xl px-5 py-4 mb-6 flex items-start gap-4"
            style={{
              background: "hsl(0 72% 50% / 0.08)",
              border: "1px solid hsl(0 72% 50% / 0.3)",
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: "hsl(0 72% 50% / 0.15)" }}
              aria-hidden="true"
            >
              <span className="font-heading font-black text-sm" style={{ color: "hsl(0 72% 60%)" }}>!</span>
            </div>
            <p className="font-sans text-sm text-foreground/85 leading-relaxed">
              <span className="font-bold" style={{ color: "hsl(0 72% 60%)" }}>Important: </span>
              Gambling can be addictive and cause serious harm. Only ever bet with money you can afford to lose.
              If gambling is affecting your finances, relationships, or mental health, seek free confidential help at{" "}
              <a href="https://www.begambleaware.org" className="underline underline-offset-2" style={{ color: "hsl(43 85% 58%)" }} target="_blank" rel="noopener noreferrer">
                BeGambleAware.org
              </a>{" "}
              or call the National Gambling Helpline on <strong>0808 8020 133</strong> (free, 24/7).
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Safe Practices */}
            <div
              className="rounded-xl p-5"
              style={{ background: "hsl(220 40% 12%)", border: "1px solid hsl(220 30% 20%)" }}
            >
              <h3
                className="font-heading font-bold text-sm uppercase tracking-wide mb-4 pb-3 border-b"
                style={{ color: "hsl(43 85% 55%)", borderColor: "hsl(220 30% 20%)" }}
              >
                Safe Practices
              </h3>
              <ul className="space-y-2.5" role="list">
                {[
                  "Set a monthly budget and never exceed it",
                  "Set session time limits before you start",
                  "Never chase losses with bigger bets",
                  "Treat betting purely as entertainment",
                  "Use deposit limits and self-exclusion tools",
                  "Take regular breaks away from betting",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(43 85% 55%)" }} aria-hidden="true">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Signs */}
            <div
              className="rounded-xl p-5"
              style={{ background: "hsl(220 40% 12%)", border: "1px solid hsl(220 30% 20%)" }}
            >
              <h3
                className="font-heading font-bold text-sm uppercase tracking-wide mb-4 pb-3 border-b"
                style={{ color: "hsl(0 72% 55%)", borderColor: "hsl(220 30% 20%)" }}
              >
                Warning Signs
              </h3>
              <ul className="space-y-2.5" role="list">
                {[
                  "Betting more than you can afford to lose",
                  "Hiding gambling activity from loved ones",
                  "Borrowing money specifically to place bets",
                  "Neglecting work, family or responsibilities",
                  "Feeling anxious or irritable when not betting",
                  "Believing you can win back what you have lost",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(0 72% 55%)" }} aria-hidden="true">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support services */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid hsl(220 30% 20%)" }}
          >
            <div
              className="px-5 py-3"
              style={{ background: "hsl(220 38% 16%)", borderBottom: "1px solid hsl(220 30% 20%)" }}
            >
              <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-foreground">
                UK Support Services
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-0">
              {[
                { name: "GambleAware", url: "www.begambleaware.org", desc: "Free, confidential support & advice" },
                { name: "GamCare", url: "www.gamcare.org.uk", desc: "National gambling helpline: 0808 8020 133" },
                { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "International online support" },
                { name: "GAMSTOP", url: "www.gamstop.co.uk", desc: "UK-wide self-exclusion scheme" },
              ].map((org, i) => (
                <div
                  key={i}
                  className="px-5 py-4"
                  style={{
                    background: "hsl(220 40% 11%)",
                    borderRight: i % 2 === 0 ? "1px solid hsl(220 30% 20%)" : "none",
                    borderBottom: i < 2 ? "1px solid hsl(220 30% 20%)" : "none",
                  }}
                >
                  <div className="font-heading font-bold text-sm text-foreground">{org.name}</div>
                  <div className="font-mono text-[10px] mt-0.5" style={{ color: "hsl(43 85% 55%)" }}>{org.url}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{org.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section
        className="w-full py-14 px-4"
        style={{ background: "hsl(220 45% 8%)" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="flex items-start gap-4 mb-8">
            <div
              className="h-12 w-1 rounded-full flex-shrink-0 mt-1"
              style={{ background: "linear-gradient(180deg, hsl(210 90% 55%), hsl(210 90% 38%))" }}
              aria-hidden="true"
            />
            <div>
              <h2 className="font-heading font-black text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-2">
                Everything you need to know about UK VIP List Betting Sites and how to bet safely.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid hsl(220 30% 20%)" }}
              >
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  style={{ background: openFaq === i ? "hsl(220 40% 14%)" : "hsl(220 40% 12%)" }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-heading font-bold text-sm md:text-base text-foreground pr-4">
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(43 85% 55%)" }} aria-hidden="true" />
                    : <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(43 85% 55%)" }} aria-hidden="true" />
                  }
                </button>
                {openFaq === i && (
                  <div
                    className="px-5 py-4 border-t"
                    style={{ background: "hsl(220 42% 10%)", borderColor: "hsl(220 30% 20%)" }}
                  >
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
