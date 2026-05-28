import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="w-full text-foreground border-t"
      style={{ background: "hsl(220 50% 5%)", borderColor: "hsl(220 30% 16%)" }}
    >
      {/* Gold top gradient bar */}
      <div
        className="w-full h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(43 85% 42%), hsl(43 90% 58%), hsl(38 80% 42%), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto px-4 pt-10 pb-6">

        {/* Top row: Logo + Nav */}
        <div
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 pb-8 border-b"
          style={{ borderColor: "hsl(220 30% 16%)" }}
        >
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="UK VIP List Betting Sites — Home">
              <div
                className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-lg"
                style={{ background: "linear-gradient(135deg, hsl(43 85% 48%) 0%, hsl(43 90% 60%) 100%)" }}
                aria-hidden="true"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 5.5V11C4 15.55 7.41 19.74 12 21C16.59 19.74 20 15.55 20 11V5.5L12 2Z" fill="hsl(220 45% 10%)" />
                  <path d="M8 9.5L9.5 11L12 8.5L14.5 11L16 9.5L12 5.5L8 9.5Z" fill="hsl(43 90% 60%)" />
                  <rect x="9" y="13" width="6" height="2" rx="1" fill="hsl(43 90% 60%)" />
                  <rect x="10.5" y="11" width="3" height="2.5" rx="0.5" fill="hsl(43 90% 60%)" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-black text-lg tracking-tight text-foreground uppercase">UK</span>
                  <span className="font-heading font-black text-lg tracking-tight uppercase" style={{ color: "hsl(43 85% 55%)" }}>VIP List</span>
                </div>
                <span className="font-heading font-bold text-xs tracking-widest text-foreground/60 uppercase">Betting Sites</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-xs max-w-xs leading-relaxed font-sans">
              Independent expert comparison of UKGC-licensed bookmakers. We do not operate a bookmaker or accept bets.
            </p>
            <p className="text-[10px] mt-2 font-mono uppercase tracking-widest" style={{ color: "hsl(43 85% 45%)" }}>
              ukviplistbettingsites.com
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
            <span className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "hsl(220 15% 40%)" }}>
              Navigation
            </span>
            {[
              { href: "/about", label: "About Us" },
              { href: "/responsible-gambling", label: "Safer Betting" },
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/cookie-policy", label: "Cookie Policy" },
              { href: "/terms", label: "Terms of Use" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-muted-foreground transition-colors uppercase tracking-wide font-mono hover:text-[hsl(43_85%_58%)]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Regulatory logos */}
        <div
          className="py-7 border-b"
          style={{ borderColor: "hsl(220 30% 16%)" }}
        >
          <p className="text-[10px] font-mono uppercase tracking-widest mb-5" style={{ color: "hsl(220 15% 38%)" }}>
            Regulatory Bodies &amp; Safer Gambling
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { href: "https://www.begambleaware.org/", src: "/gamble.webp", alt: "BeGambleAware — Free Safer Gambling Advice" },
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.png", alt: "GamStop — National Self-Exclusion Scheme" },
              { href: "https://gordonmoody.org.uk/", src: "/gordon.png", alt: "Gambling Therapy — Online Support" },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/commission.png", alt: "UK Gambling Commission — Regulatory Body" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare — Support for Gambling Harm" },
            ].map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="transition-opacity hover:opacity-80 rounded-xl overflow-hidden"
                style={{ background: "#ffffff", padding: "6px 10px" }}
              >
                <img src={src} alt={alt} className="h-7 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 pb-4">
          <p className="text-xs leading-relaxed font-sans" style={{ color: "hsl(220 15% 38%)" }}>
            ukviplistbettingsites.com is an independent comparison website. We earn commission when users register with operators through our affiliate links — this does not influence our editorial rankings in any way. All listed operators hold a valid UK Gambling Commission (UKGC) licence. Gambling involves risk. Please bet responsibly. 18+ only.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] font-mono uppercase tracking-widest pt-4 border-t"
          style={{ color: "hsl(220 15% 28%)", borderColor: "hsl(220 30% 14%)" }}
        >
          <span>&copy; 2026 ukviplistbettingsites.com</span>
          <span>UK VIP List Betting Sites &mdash; Independent Comparison</span>
        </div>
      </div>
    </footer>
  )
}
