import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: "hsl(220 45% 7%)" }}>
      {/* Gold accent top bar */}
      <div
        className="w-full h-[3px]"
        style={{ background: "linear-gradient(90deg, hsl(43 85% 42%), hsl(43 90% 58%), hsl(38 80% 42%))" }}
      />

      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-center justify-between max-w-[1100px] mx-auto">

          {/* Logo + Wordmark */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="UK VIP List Betting Sites — Home">
            {/* Unique hexagon trophy icon */}
            <div className="relative flex-shrink-0 w-10 h-10" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagon background */}
                <polygon
                  points="20,2 35,10.5 35,29.5 20,38 5,29.5 5,10.5"
                  fill="url(#hexGold)"
                />
                {/* Dark inner hex */}
                <polygon
                  points="20,6 31,12.5 31,27.5 20,34 9,27.5 9,12.5"
                  fill="hsl(220 45% 10%)"
                />
                {/* Crown base */}
                <rect x="13" y="26" width="14" height="2.5" rx="1.2" fill="hsl(43 90% 58%)" />
                {/* Crown body: 3 peaks */}
                <path
                  d="M13 26 L13 20 L16 23 L20 14 L24 23 L27 20 L27 26 Z"
                  fill="hsl(43 90% 58%)"
                />
                {/* Crown jewel dots */}
                <circle cx="13" cy="20" r="1.4" fill="hsl(220 45% 10%)" />
                <circle cx="27" cy="20" r="1.4" fill="hsl(220 45% 10%)" />
                <circle cx="20" cy="14" r="1.6" fill="hsl(220 45% 10%)" />
                {/* Star inside crown */}
                <circle cx="20" cy="14" r="0.9" fill="hsl(43 95% 72%)" />
                <defs>
                  <linearGradient id="hexGold" x1="5" y1="2" x2="35" y2="38" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="hsl(43 90% 62%)" />
                    <stop offset="50%" stopColor="hsl(43 85% 48%)" />
                    <stop offset="100%" stopColor="hsl(38 80% 38%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Single-line wordmark */}
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-heading font-black text-base sm:text-lg tracking-tight text-foreground uppercase">
                UK
              </span>
              <span
                className="font-heading font-black text-base sm:text-lg tracking-tight uppercase"
                style={{ color: "hsl(43 85% 55%)" }}
              >
                VIP List
              </span>
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-foreground/80 uppercase">
                Betting Sites
              </span>
            </div>
          </Link>

          {/* Right badges */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-foreground/50 border border-border/50 px-2.5 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              UKGC Licensed
            </div>
            <span
              className="text-[10px] font-mono font-bold text-foreground border px-2.5 py-1 rounded-md uppercase tracking-widest"
              style={{ borderColor: "hsl(0 72% 50% / 0.6)", color: "hsl(0 72% 60%)" }}
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
