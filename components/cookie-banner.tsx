"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const consent = localStorage.getItem("cookieConsent")
        if (!consent) setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem("cookieConsent", choice)
      localStorage.setItem("cookieConsentDate", new Date().toISOString())
    } catch {
      // silent
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
    >
      {/* Glass card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "hsl(220 45% 10% / 0.96)",
          border: "1px solid hsl(43 85% 52% / 0.25)",
          boxShadow:
            "0 24px 64px hsl(220 45% 4% / 0.7), 0 2px 0 inset hsl(43 85% 52% / 0.08), 0 0 0 1px hsl(220 30% 25% / 0.4)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Gold top accent */}
        <div
          className="h-0.5 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(43 85% 52%), hsl(43 90% 64%), hsl(43 85% 52%), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="px-5 pt-4 pb-5">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(43 85% 52% / 0.12)" }}
                aria-hidden="true"
              >
                <Cookie className="w-4 h-4" style={{ color: "hsl(43 85% 55%)" }} />
              </div>
              <h2 className="font-heading font-black text-base uppercase tracking-tight text-foreground">
                Cookie Settings
              </h2>
            </div>
            <button
              onClick={() => handleChoice("rejected")}
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: "hsl(220 35% 18%)" }}
              aria-label="Dismiss and accept essential cookies only"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
            </button>
          </div>

          {/* Body text */}
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
            We use cookies to personalise content, analyse site traffic, and improve your experience on{" "}
            <span style={{ color: "hsl(43 85% 58%)" }} className="font-medium">
              ukviplistbettingsites.com
            </span>
            . You can choose which cookies you allow below.
          </p>

          {/* Cookie types */}
          <div className="space-y-2 mb-5">
            {[
              {
                label: "Essential cookies",
                desc: "Required for the site to function. Cannot be disabled.",
                always: true,
              },
              {
                label: "Analytics cookies",
                desc: "Help us understand how visitors use our site.",
                always: false,
              },
              {
                label: "Marketing cookies",
                desc: "Used to show relevant offers and track affiliate clicks.",
                always: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-3 py-2.5 rounded-lg"
                style={{ background: "hsl(220 38% 14%)" }}
              >
                <div
                  className="w-4 h-4 rounded-sm flex-shrink-0 mt-0.5 flex items-center justify-center"
                  style={{
                    background: item.always
                      ? "hsl(43 85% 52%)"
                      : "hsl(220 30% 22%)",
                    border: item.always ? "none" : "1px solid hsl(220 30% 28%)",
                  }}
                  aria-hidden="true"
                >
                  {item.always && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3l2 2 4-4" stroke="hsl(220 45% 8%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-heading font-bold text-foreground/90 uppercase tracking-wide">
                    {item.label}
                    {item.always && (
                      <span
                        className="ml-2 text-[9px] font-mono normal-case"
                        style={{ color: "hsl(43 85% 58%)" }}
                      >
                        Always on
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy link */}
          <p className="text-[11px] text-muted-foreground/60 mb-4">
            Read our full{" "}
            <Link
              href="/cookie-policy"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "hsl(43 85% 58%)" }}
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-2 transition-colors"
              style={{ color: "hsl(43 85% 58%)" }}
            >
              Privacy Policy
            </Link>
            .
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => handleChoice("rejected")}
              className="flex-1 py-2.5 px-4 rounded-lg font-mono text-[11px] font-bold uppercase tracking-widest transition-all"
              style={{
                background: "hsl(220 35% 18%)",
                color: "hsl(220 15% 65%)",
                border: "1px solid hsl(220 30% 24%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "hsl(220 30% 32%)"
                e.currentTarget.style.color = "hsl(220 15% 80%)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "hsl(220 30% 24%)"
                e.currentTarget.style.color = "hsl(220 15% 65%)"
              }}
            >
              Essential Only
            </button>
            <button
              onClick={() => handleChoice("accepted")}
              className="flex-1 py-2.5 px-4 rounded-lg font-mono text-[11px] font-bold uppercase tracking-widest transition-all"
              style={{
                background: "linear-gradient(135deg, hsl(43 85% 48%), hsl(43 90% 58%))",
                color: "hsl(220 45% 8%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9"
                e.currentTarget.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
