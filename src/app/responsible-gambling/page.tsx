import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Safer Betting — UK VIP List Betting Sites",
  description:
    "Our commitment to safer gambling. Practical advice, warning signs, and UK support services. ukviplistbettingsites.com — responsible by default.",
}

export default function SaferBettingPage() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(220 45% 8%)" }}>
      <Header />
      <PageLayout
        title="Safer Betting"
        subtitle="ukviplistbettingsites.com — Bet for enjoyment, always in control"
        badge={{ text: "18+ Only", danger: true }}
      >

        {/* Critical warning */}
        <div
          className="rounded-xl px-5 py-4"
          style={{
            background: "hsl(0 72% 50% / 0.08)",
            border: "2px solid hsl(0 72% 50% / 0.4)",
          }}
        >
          <p className="font-sans text-sm text-foreground leading-relaxed">
            <strong className="uppercase tracking-wide" style={{ color: "hsl(0 72% 60%)" }}>Important: </strong>
            Sports betting can be addictive and cause serious financial, emotional, and social harm.
            You should never bet money you cannot afford to lose. If gambling is impacting your life, seek free, confidential help immediately at{" "}
            <a
              href="https://www.begambleaware.org"
              className="underline underline-offset-2 font-semibold"
              style={{ color: "hsl(43 85% 60%)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              BeGambleAware.org
            </a>{" "}
            or call <strong>0808 8020 133</strong> (free, 24/7).
          </p>
          <p
            className="font-heading font-black text-sm mt-3 uppercase tracking-widest"
            style={{ color: "hsl(0 72% 60%)" }}
          >
            Under 18s Must Not Gamble
          </p>
        </div>

        <ContentBlock title="What Is Safer Betting?" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Safer betting means staying in complete control of your gambling — treating it as one form of paid entertainment alongside meals out, cinema, or sport. It means you decide in advance how much you are willing to spend, you accept that losses are part of the experience, and you stop when your limit is reached. All UKGC-licensed operators are legally required to provide tools to help you bet safely.
          </p>
        </ContentBlock>

        <ContentBlock title="Key Principles" accent="gold">
          <div className="divide-y" style={{ borderColor: "hsl(220 30% 20%)" }}>
            {[
              {
                num: "01",
                title: "Only Bet What You Can Afford to Lose",
                desc: "Your betting budget must come from disposable income only — never from money earmarked for rent, bills, food, or family needs. If you cannot afford to lose the money, do not bet it.",
              },
              {
                num: "02",
                title: "Set Limits Before You Deposit",
                desc: "Every UKGC bookmaker must offer deposit limits, loss limits, and wager limits. Set them before you start, not after. Once set, wait 24 hours before increasing any limit — this cooling-off period is legally mandated.",
              },
              {
                num: "03",
                title: "Never Chase Losses",
                desc: "Chasing a loss with a bigger bet to 'win it back' is the single most common path to problem gambling. Accept every loss as the cost of entertainment and move on.",
              },
              {
                num: "04",
                title: "Keep Betting in Perspective",
                desc: "Betting should occupy a modest proportion of your leisure time and budget. If you find yourself thinking about it constantly, rearranging other activities around it, or feeling anxious when you cannot bet, seek support.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div
                  className="font-heading font-black text-xl leading-none flex-shrink-0 pt-0.5"
                  style={{ color: "hsl(43 85% 52%)", minWidth: "2rem" }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <div className="grid md:grid-cols-2 gap-5">
          <ContentBlock title="Safe Practices" accent="gold">
            <ul className="space-y-2.5" role="list">
              {[
                "Set a firm monthly betting budget and treat it as spent immediately",
                "Use deposit and session time limits on every account",
                "Keep a variety of other leisure interests in your life",
                "Take regular scheduled breaks from all betting platforms",
                "Use GAMSTOP self-exclusion if you need a longer break",
                "Tell someone you trust about your betting activity",
              ].map((item, i) => (
                <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(43 85% 55%)" }} aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </ContentBlock>

          <ContentBlock title="Warning Signs" accent="red">
            <ul className="space-y-2.5" role="list">
              {[
                "Betting more than you planned or can afford",
                "Hiding bets or winnings from family and friends",
                "Borrowing money or using credit to fund gambling",
                "Neglecting work, studies, or personal responsibilities",
                "Feeling restless, irritable, or anxious when not betting",
                "Believing you can develop a system to beat the bookmaker",
              ].map((item, i) => (
                <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(0 72% 55%)" }} aria-hidden="true">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </ContentBlock>
        </div>

        <ContentBlock title="UK Support Services" accent="blue">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "GambleAware", url: "www.begambleaware.org", desc: "Free confidential support, advice, and treatment" },
              { name: "GamCare", url: "www.gamcare.org.uk", desc: "National helpline: 0808 8020 133 (24/7, free)" },
              { name: "GAMSTOP", url: "www.gamstop.co.uk", desc: "Free UK self-exclusion — blocks all UKGC-licensed sites" },
              { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "Free international online support and forums" },
            ].map((org, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-4"
                style={{ background: "hsl(220 38% 16%)", border: "1px solid hsl(220 30% 22%)" }}
              >
                <div className="font-heading font-bold text-sm text-foreground">{org.name}</div>
                <div className="font-mono text-[10px] mt-0.5" style={{ color: "hsl(43 85% 55%)" }}>{org.url}</div>
                <div className="font-sans text-muted-foreground text-xs mt-0.5">{org.desc}</div>
              </div>
            ))}
          </div>
        </ContentBlock>

      </PageLayout>
      <Footer />
    </div>
  )
}
