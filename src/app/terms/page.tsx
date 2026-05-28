import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use — UK VIP List Betting Sites",
  description:
    "Terms of Use for ukviplistbettingsites.com. Your legal agreement when using our independent UK betting comparison service.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(220 45% 8%)" }}>
      <Header />
      <PageLayout
        title="Terms of Use"
        subtitle="Last updated: 2026 — ukviplistbettingsites.com"
      >

        <ContentBlock title="Acceptance of Terms" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            By accessing and using ukviplistbettingsites.com, you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you must not use this website. These terms apply to all visitors, users, and others who access the site.
          </p>
        </ContentBlock>

        <ContentBlock title="Nature of Service" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-3">
            ukviplistbettingsites.com is an independent editorial comparison website. We provide information, reviews, and rankings of UKGC-licensed betting operators to help UK residents make informed decisions. We are not a bookmaker and we do not:
          </p>
          <ul className="space-y-2" role="list">
            {[
              "Accept bets or gambling deposits of any kind",
              "Hold a gambling operating licence",
              "Guarantee the accuracy of any odds or promotional offers",
              "Provide regulated financial or gambling advice",
            ].map((item, i) => (
              <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                  style={{ background: "hsl(43 85% 52%)" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </ContentBlock>

        <ContentBlock title="Affiliate Relationships & Commercial Disclosure" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This site earns revenue through affiliate partnerships with UKGC-licensed bookmakers. When you click a link to a bookmaker and register or deposit, we may receive a commission. This commercial relationship does not influence our editorial rankings or review scores in any way. Our methodology is transparent and published on-site. All affiliate links are clearly identifiable and labelled with appropriate disclosure.
          </p>
        </ContentBlock>

        <ContentBlock title="Accuracy of Information" accent="blue">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            We take considerable care to ensure all information published on ukviplistbettingsites.com is accurate and current. However, the betting industry changes rapidly — offers expire, odds fluctuate, and operator terms evolve. We cannot guarantee that all information is up to date at the exact moment you read it. Always verify current terms directly with the bookmaker before depositing. We accept no liability for decisions made based on information on this site.
          </p>
        </ContentBlock>

        <ContentBlock title="Age Restriction — 18+ Only" accent="red">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This website contains information about gambling services which are strictly for adults aged 18 and over. If you are under 18 years of age, you must leave this site immediately. We take child safety seriously and support all UKGC requirements regarding age verification with licensed operators.
          </p>
        </ContentBlock>

        <ContentBlock title="Intellectual Property" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            All content on ukviplistbettingsites.com — including but not limited to text, reviews, rankings, scoring methodology, graphics, and layout — is the intellectual property of UK VIP List Betting Sites unless otherwise stated. You may not reproduce, republish, distribute, or commercially exploit any content without prior written permission.
          </p>
        </ContentBlock>

        <ContentBlock title="Limitation of Liability" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            To the fullest extent permitted by law, ukviplistbettingsites.com and its operators shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this site or reliance on any information herein. This includes, without limitation, any losses incurred from gambling decisions influenced by content on this site.
          </p>
        </ContentBlock>

        <ContentBlock title="External Links" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This site contains links to third-party bookmaker websites. These are provided for convenience and informational purposes. We are not responsible for the content, accuracy, privacy practices, or terms of any external website. Visiting external links is done at your own risk and subject to the terms and conditions of those third-party sites.
          </p>
        </ContentBlock>

        <ContentBlock title="Changes to These Terms" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            We reserve the right to update or modify these Terms of Use at any time without prior notice. Changes take effect immediately upon publication. Your continued use of the site after any changes constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.
          </p>
        </ContentBlock>

        <ContentBlock title="Governing Law" accent="blue">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </ContentBlock>

        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "hsl(220 38% 14%)", border: "1px solid hsl(220 30% 20%)" }}
        >
          <p className="font-sans text-muted-foreground text-xs leading-relaxed">
            Questions about these terms? Contact us at{" "}
            <span className="font-semibold" style={{ color: "hsl(43 85% 60%)" }}>legal@ukviplistbettingsites.com</span>
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
