import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy — UK VIP List Betting Sites",
  description:
    "How ukviplistbettingsites.com uses cookies. What we collect, why, and how to manage your preferences.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(220 45% 8%)" }}>
      <Header />
      <PageLayout
        title="Cookie Policy"
        subtitle="Last updated: 2026 — ukviplistbettingsites.com"
      >

        <ContentBlock title="What Are Cookies?" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Cookies are small text files placed on your device when you visit a website. They allow the site to recognise your browser on subsequent visits, remember your preferences, and measure how you interact with content. Cookies do not contain personally identifying information such as your name or payment details.
          </p>
        </ContentBlock>

        <ContentBlock title="Types of Cookies We Use" accent="gold">
          <div className="space-y-3">
            {[
              {
                title: "Essential Cookies",
                tag: "Always Active",
                gold: true,
                desc: "These cookies are strictly necessary for ukviplistbettingsites.com to function. They enable core features such as cookie consent storage, security, and navigation. The site cannot operate correctly without them and they cannot be disabled.",
              },
              {
                title: "Analytics Cookies",
                tag: "Optional",
                gold: false,
                desc: "We use analytics cookies (including Google Analytics) to understand how visitors find, navigate, and engage with our site. The data collected is aggregated and anonymous — it helps us improve content quality and page structure.",
              },
              {
                title: "Marketing & Affiliate Cookies",
                tag: "Optional",
                gold: false,
                desc: "These cookies track clicks on affiliate links to licensed bookmakers and measure the effectiveness of our partnership arrangements. They allow us to earn commission that funds independent editorial operations. No personal data is sold to third parties.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-4"
                style={{
                  background: "hsl(220 38% 15%)",
                  border: "1px solid hsl(220 30% 22%)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-foreground">{item.title}</h3>
                  <span
                    className="font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-widest"
                    style={
                      item.gold
                        ? { background: "hsl(43 85% 52% / 0.12)", color: "hsl(43 85% 58%)", border: "1px solid hsl(43 85% 52% / 0.3)" }
                        : { background: "hsl(220 35% 20%)", color: "hsl(220 15% 55%)", border: "1px solid hsl(220 30% 26%)" }
                    }
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Managing Your Cookie Preferences" accent="blue">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-3">
            You can manage your cookie preferences in three ways:
          </p>
          <ul className="space-y-2.5" role="list">
            {[
              "Use the cookie consent banner displayed on your first visit to accept all cookies or essential cookies only.",
              "Clear cookies already stored on your device via your browser settings (Chrome, Firefox, Safari, Edge all provide this option in their privacy settings).",
              "Install a browser extension that blocks third-party tracking scripts before they run.",
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
          <p className="font-sans text-muted-foreground text-xs leading-relaxed mt-3">
            Note: disabling essential cookies will affect site functionality, including remembering your cookie consent choice.
          </p>
        </ContentBlock>

        <ContentBlock title="Third-Party Cookies" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Some cookies on ukviplistbettingsites.com are set by third-party services we use, including Google Analytics and affiliate tracking networks. These third parties have their own privacy policies governing how they use cookie data. We do not control these cookies directly — please review the relevant third-party policy for full details.
          </p>
        </ContentBlock>

        <ContentBlock title="Changes to This Policy" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our operational practices. Any material changes will be signalled by an updated revision date at the top of this page. We recommend checking back periodically.
          </p>
        </ContentBlock>

        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "hsl(220 38% 14%)", border: "1px solid hsl(220 30% 20%)" }}
        >
          <p className="font-sans text-muted-foreground text-xs">
            Questions about our cookie practices? Contact us at{" "}
            <span className="font-semibold" style={{ color: "hsl(43 85% 60%)" }}>cookies@ukviplistbettingsites.com</span>
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
