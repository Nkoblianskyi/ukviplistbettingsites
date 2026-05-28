export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "VegasHero",
    logo: "/vegashero.png",
    rating: 9.9,
    bonus: "125% UP TO £1,250 + 250 FS + 200% UP TO 3,000 USDT",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    isTopChoice: true,
    url: "https://qualityboost.top/qfdxrcVH",
  },
  {
    rank: 2,
    name: "Lizaro",
    logo: "/lizarp.png",
    rating: 9.8,
    bonus: "350% up to £13,600 + 350 FS",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/4Qc8VKvf",
  },    {
    rank: 3,
    name: "Zombillion",
    logo: "/zombillion.svg",
    rating: 9.7,
    bonus: "250% Up To 4000€ + 200 FS",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/FKnjwmbn",
  },

  {
    rank: 4,
    name: "Daytona Spin",
    logo: "/daytonaspin.webp",
    rating: 9.6,
    bonus: "50% Up To £400 + 100 FS",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/4Qc8VKvf",
  },
  {
    rank: 5,
    name: "West Ice",
    logo: "/west-ice.png",
    rating: 9.5,
    bonus: "50% up to £320 + 50 FS",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/qfdxrcVH",
  },

  {
    rank: 6,
    name: "Lola Jack",
    logo: "/lolajack.webp",
    rating: 9.4,
    bonus: "50% up to £320 + 50 FS",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/4Qc8VKvf",
  },
  {
    rank: 7,
    name: "Lucky Master",
    logo: "/luckymister.svg",
    rating: 9.3,
    bonus: "Up to 100% + 50 FS",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/FKnjwmbn",
  },
  {
    rank: 8,
    name: "Potter Slots",
    logo: "/potterslot.png",
    rating: 9.2,
    bonus: "70% Up To €200",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/qfdxrcVH",
  },
  {
    rank: 9,
    name: "Spinathlon",
    logo: "/spinathlon.svg",
    rating: 9.1,
    bonus: "First Deposit +500% Up To £300",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/qfdxrcVH",
  },
  {
    rank: 10,
    name: "WinPlace",
    logo: "/winplace.svg",
    rating: 9.0,
    bonus: "Exclusive Welcome 500% up to £100",
    features: ["Fast Payouts", "Mobile App", "5% Cashback"],
    url: "https://qualityboost.top/FKnjwmbn",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
