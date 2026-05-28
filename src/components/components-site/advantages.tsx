import { Gift, CreditCard, Headphones, Shield } from "lucide-react"
import Image from "next/image"

export function Advantages() {
  const advantages = [
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: CreditCard,
      title: "Fast Payouts",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: Shield,
      title: "Licensed & Secure",
      color: "text-red-600",
      bg: "bg-red-600/20 border-red-600/30",
    },
  ]

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-1 sm:gap-3 max-w-xs sm:max-w-2xl">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-4 sm:w-8 h-4 sm:h-8 mb-1 sm:mb-2`}>
                {advantage.title === "Licensed & Secure" ? (
                  <div className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center text-sm sm:text-xl">
                    <Image src="/flag.png" alt="logo" width={24} height={24} />
                  </div>
                ) : (
                  <advantage.icon className={`h-4 sm:h-8 w-4 sm:w-8 ${advantage.color}`} />
                )}
              </div>
              <h3 className="text-xs sm:text-xs font-semibold text-white">{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
