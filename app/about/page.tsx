import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us — UK VIP List Betting Sites",
  description:
    "Learn about ukviplistbettingsites.com — the UK's independent VIP betting site comparison. Our editorial mission, methodology, and values.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(220 45% 8%)" }}>
      <Header />
      <PageLayout
        title="About UK VIP List Betting Sites"
        subtitle="ukviplistbettingsites.com — Independent VIP Bookmaker Comparison"
      >

        <ContentBlock title="Our Mission" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            UK VIP List Betting Sites was created for one purpose: to give UK bettors clear, honest, and expertly researched information about the country's best licensed bookmakers. We cut through the noise of affiliate marketing to deliver rankings based entirely on objective criteria — not commercial relationships.
          </p>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-3">
            Every operator on our VIP list holds a current UKGC licence. Our editorial team independently tests each site before any score is published. We will never feature a bookmaker with a poor responsible gambling record, regardless of commercial incentives.
          </p>
        </ContentBlock>

        <ContentBlock title="What Makes a VIP Betting Site?" accent="gold">
          <div className="space-y-0 divide-y" style={{ borderColor: "hsl(220 30% 20%)" }}>
            {[
              {
                title: "Elite UKGC Compliance",
                desc: "A VIP site must hold a flawless UKGC compliance record with no upheld consumer complaints. We verify licensing status monthly.",
              },
              {
                title: "Outstanding Odds & Markets",
                desc: "Top-tier bookmakers consistently offer market-leading prices on Premier League, Champions League, horse racing, and major international events.",
              },
              {
                title: "Premium Promotions",
                desc: "VIP picks offer genuinely valuable welcome bonuses with transparent wagering requirements — not headline figures designed to mislead.",
              },
              {
                title: "Fast, Reliable Payouts",
                desc: "We test withdrawal speeds across multiple methods. Our VIP rated sites process withdrawals within 24 hours for e-wallets and 2–3 business days for bank transfers.",
              },
              {
                title: "Exceptional User Experience",
                desc: "From mobile app quality to desktop navigation, live betting interfaces and customer support — every touchpoint is evaluated by our team.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div
                  className="w-0.5 flex-shrink-0 self-stretch rounded-full"
                  style={{ background: "hsl(43 85% 52%)" }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide">{item.title}</h3>
                  <p className="font-sans text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Our Values" accent="blue">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "Transparency", desc: "Every scoring criterion is publicly documented. You always know exactly how we arrive at our ratings." },
              { title: "Independence", desc: "Zero paid placements. Affiliate revenue funds our operation but never influences a single position in our rankings." },
              { title: "Responsibility", desc: "Safer gambling guidance appears throughout our site. We never recommend operators with poor player protection records." },
              { title: "Accuracy", desc: "Monthly editorial reviews ensure rankings reflect current operator standards, not outdated assessments." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-4"
                style={{ background: "hsl(220 38% 16%)", border: "1px solid hsl(220 30% 22%)" }}
              >
                <h3 className="font-heading font-bold text-xs uppercase tracking-wide mb-1.5" style={{ color: "hsl(43 85% 55%)" }}>
                  {item.title}
                </h3>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Editorial Team" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Our team of sports betting specialists brings together over 40 years of combined experience covering UK and international gambling markets. Reviewers are required to hold active accounts and place real bets before any opinion is published. We operate under strict editorial independence guidelines — no reviewer has a financial interest in any bookmaker we assess.
          </p>
        </ContentBlock>

        <div
          className="rounded-xl px-5 py-4"
          style={{
            background: "hsl(220 38% 14%)",
            border: "1px solid hsl(220 30% 20%)",
          }}
        >
          <p className="font-sans text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground font-semibold">Disclaimer:</strong>{" "}
            ukviplistbettingsites.com is an informational comparison site. We are not a bookmaker and do not accept bets. All featured operators hold a current UKGC licence. Affiliate links are used to fund our independent operation. Please gamble responsibly. 18+ only.
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
