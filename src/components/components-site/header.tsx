import { Crown } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black border-b border-red-900/50">
      <div className="container mx-auto px-4 py-2 sm:py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Crown className="h-7 w-7 text-yellow-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Best Casinos Great Britain
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
