export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  features: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
    {
    id: 4,
    name: "BetVictor",
    logo: "/betvictor.webp",
    bonus: "Get £30 Free Bets",
    url: "https://www.betvictor.com/",
    rating: 9.9,
    stars: 5,
    reviews: 5846,
    features: ["UKGC Licensed", "Bet Builder", "In-Play Betting"],
    terms: "18+ | New customers | Bet £5 to get £30 in Free Bets | Valid 7 days | T&Cs apply | BeGambleAware.org",
    isTrending: true,
  },
    {
    id: 1,
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    bonus: "Only £5 to Claim £30 Welcome Bonus",
    url: "https://www.ladbrokes.com/",
    rating: 9.8,
    stars: 5,
    reviews: 6472,
    features: ["UKGC Licensed", "Best Odds Guaranteed", "PayPal"],
    terms: "18+ | New customers | Deposit £5, bet £5 to receive £30 Free Bets | Valid 7 days | T&Cs apply | BeGambleAware.org",
    isTopLine: true,
  },
  {
    id: 2,
    name: "Betfred",
    logo: "/betfred.webp",
    bonus: "Get £50 Free Bets",
    url: "https://www.betfred.com/",
    rating: 9.7,
    stars: 5,
    reviews: 6583,
    features: ["UKGC Licensed", "Cash Out", "Mobile App"],
    terms: "18+ | New customers | Deposit & bet £10 on Sports to get £50 in Free Bets | Free Bets valid 7 days | T&Cs apply | BeGambleAware.org",
    isTopRating: true,
  },
  {
    id: 3,
    name: "BoyleSports",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Offer",
    url: "https://www.boylesports.com",
    rating: 9.6,
    stars: 5,
    reviews: 7014,
    features: ["UKGC Licensed", "Live Streaming", "Apple Pay"],
    terms: "18+ | New customers only | Min deposit £10 | T&Cs apply | BeGambleAware.org",
    isPopular: true,
  },

  {
    id: 5,
    name: "Midnite",
    logo: "/midnite.webp",
    bonus: "Get £30 in Free Bets",
    url: "https://www.midnite.com",
    rating: 9.2,
    stars: 5,
    reviews: 7208,
    features: ["UKGC Licensed", "Esports Markets", "Fast Payouts"],
    terms: "18+ | New customers | Deposit & bet £10 to get £30 in Free Bets | T&Cs apply | BeGambleAware.org",
  },
]
