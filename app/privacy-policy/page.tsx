import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — UK VIP List Betting Sites",
  description:
    "Privacy Policy for ukviplistbettingsites.com. How we collect, use, and protect your personal data under UK GDPR.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "hsl(220 45% 8%)" }}>
      <Header />
      <PageLayout
        title="Privacy Policy"
        subtitle="Last updated: 2026 — ukviplistbettingsites.com"
      >

        <ContentBlock title="Introduction" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            UK VIP List Betting Sites (ukviplistbettingsites.com) is committed to protecting the privacy and personal data of every visitor. This Privacy Policy explains what data we collect, how it is used, who it may be shared with, and what rights you have under UK GDPR (UK General Data Protection Regulation) and the Data Protection Act 2018.
          </p>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-3">
            By using ukviplistbettingsites.com, you agree to the collection and use of information described in this policy.
          </p>
        </ContentBlock>

        <ContentBlock title="Information We Collect" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-3">
            We collect the following categories of data automatically when you visit our site:
          </p>
          <ul className="space-y-2" role="list">
            {[
              "IP address and approximate geographic location (city-level)",
              "Browser type, version, and operating system",
              "Pages visited, time on page, and navigation paths",
              "Referring website or search query that led you to our site",
              "Cookie consent preferences and timestamps",
              "Clicks on affiliate links to licensed bookmaker partners",
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
            We do not collect names, email addresses, payment information, or any other directly identifying personal data unless you contact us directly.
          </p>
        </ContentBlock>

        <ContentBlock title="How We Use Your Data" accent="gold">
          <div className="space-y-0 divide-y" style={{ borderColor: "hsl(220 30% 20%)" }}>
            {[
              {
                title: "Site Improvement",
                desc: "Aggregated and anonymised analytics data helps us understand which content is most valuable and how to improve navigation, layout, and load performance.",
              },
              {
                title: "Personalisation",
                desc: "We may use browsing data to show you content relevant to your interests, such as specific betting categories or operator types.",
              },
              {
                title: "Affiliate Performance Tracking",
                desc: "Click data on affiliate links is passed to our bookmaker partners to attribute referrals and calculate commission. This data is used solely for commercial reporting — it is not used to profile individual users.",
              },
              {
                title: "Legal Compliance",
                desc: "We may process data as required to comply with applicable UK law, including responding to lawful requests from regulatory authorities.",
              },
            ].map((item, i) => (
              <div key={i} className="py-3 first:pt-0 last:pb-0">
                <h3 className="font-heading font-bold text-xs uppercase tracking-wide text-foreground mb-1">{item.title}</h3>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Data Security" accent="blue">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            ukviplistbettingsites.com implements industry-standard technical and organisational security measures to protect your data, including TLS/SSL encryption for all data in transit, restricted access controls, and regular security assessments. While we take every reasonable precaution, no internet transmission is completely secure — you use this site at your own risk.
          </p>
        </ContentBlock>

        <ContentBlock title="Your Rights Under UK GDPR" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-3">
            Under UK GDPR you have the following rights regarding your personal data:
          </p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              { right: "Right of Access", desc: "Request a copy of the personal data we hold about you." },
              { right: "Right to Rectification", desc: "Ask us to correct inaccurate or incomplete data." },
              { right: "Right to Erasure", desc: "Request deletion of your data where there is no overriding reason to retain it." },
              { right: "Right to Restrict Processing", desc: "Ask us to pause processing your data in certain circumstances." },
              { right: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format." },
              { right: "Right to Object", desc: "Object to processing based on legitimate interests or for direct marketing." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg px-3 py-3"
                style={{ background: "hsl(220 38% 16%)", border: "1px solid hsl(220 30% 22%)" }}
              >
                <div className="font-heading font-bold text-xs uppercase tracking-wide mb-0.5" style={{ color: "hsl(43 85% 55%)" }}>
                  {item.right}
                </div>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Cookies" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This site uses cookies to improve your browsing experience and track affiliate referrals. For full details on the types of cookies we set and how to manage them, please read our{" "}
            <a href="/cookie-policy" className="underline underline-offset-2" style={{ color: "hsl(43 85% 60%)" }}>
              Cookie Policy
            </a>.
          </p>
        </ContentBlock>

        <ContentBlock title="Third Parties & Data Sharing" accent="gold">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            We do not sell your personal data to third parties. Anonymised or aggregated analytics data may be processed by Google Analytics on our behalf. Affiliate tracking data is shared with licensed bookmaker partners for the sole purpose of commission attribution. All third-party processors are contractually required to comply with UK GDPR.
          </p>
        </ContentBlock>

        <ContentBlock title="Contact Us" accent="blue">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            To exercise any of your rights, or if you have questions or concerns about how we handle your personal data, please contact our data team at{" "}
            <span className="font-semibold" style={{ color: "hsl(43 85% 60%)" }}>privacy@ukviplistbettingsites.com</span>.
            We aim to respond to all requests within 30 days.
          </p>
          <p className="font-sans text-muted-foreground text-xs leading-relaxed mt-2">
            If you are unsatisfied with our response, you have the right to lodge a complaint with the UK&apos;s supervisory authority, the Information Commissioner&apos;s Office (ICO), at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "hsl(43 85% 60%)" }}>
              ico.org.uk
            </a>.
          </p>
        </ContentBlock>

      </PageLayout>
      <Footer />
    </div>
  )
}
