import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  badge?: { text: string; className?: string; danger?: boolean }
  children: React.ReactNode
}

export function PageLayout({ title, subtitle, badge, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen" style={{ background: "hsl(220 45% 8%)" }}>
      {/* Inner page hero bar */}
      <div
        className="w-full px-4 py-8 border-b"
        style={{
          background: "linear-gradient(180deg, hsl(220 50% 6%) 0%, hsl(220 45% 9%) 100%)",
          borderColor: "hsl(220 30% 18%)",
        }}
      >
        {/* Gold accent line */}
        <div
          className="w-full h-[2px] mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(43 85% 48%), hsl(43 90% 60%), hsl(43 85% 48%), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-[1100px]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest mb-5 transition-colors text-[hsl(220_15%_45%)] hover:text-[hsl(43_85%_58%)]"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1
                className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tight text-foreground leading-tight"
              >
                {title}
              </h1>
              {subtitle && (
                <p className="font-mono text-[10px] mt-2 uppercase tracking-widest" style={{ color: "hsl(43 85% 45%)" }}>
                  {subtitle}
                </p>
              )}
            </div>
            {badge && (
              <span
                className="flex-shrink-0 font-mono text-xs px-3 py-1 rounded-md uppercase tracking-widest"
                style={
                  badge.danger
                    ? { border: "1px solid hsl(0 72% 50% / 0.5)", color: "hsl(0 72% 60%)" }
                    : { border: "1px solid hsl(43 85% 52% / 0.4)", color: "hsl(43 85% 60%)" }
                }
              >
                {badge.text}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="mx-auto max-w-[1100px] px-4 py-10 space-y-5">
        {children}
      </div>
    </div>
  )
}

interface ContentBlockProps {
  title: string
  children: React.ReactNode
  accent?: "gold" | "red" | "blue"
}

export function ContentBlock({ title, children, accent = "gold" }: ContentBlockProps) {
  const accentColor =
    accent === "red"
      ? "hsl(0 72% 52%)"
      : accent === "blue"
        ? "hsl(210 90% 55%)"
        : "hsl(43 85% 52%)"

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "hsl(220 40% 12%)",
        border: "1px solid hsl(220 30% 20%)",
      }}
    >
      <div
        className="px-5 py-3.5 border-b"
        style={{
          background: "hsl(220 38% 14%)",
          borderColor: "hsl(220 30% 20%)",
          borderLeft: `3px solid ${accentColor}`,
        }}
      >
        <h2 className="font-heading font-bold text-sm md:text-base uppercase tracking-wide text-foreground">
          {title}
        </h2>
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  )
}
