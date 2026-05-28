import { Crown } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Site Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <Crown className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Best Casinos Great Britain
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your reliable guide to the best online casinos in Great Britain. We only rate and review
              licensed and secure operators.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#rankings" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Casino Reviews
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Organization Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6 ">
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-white p-4 rounded-md"
            >
              <img
                src="/gamecare.svg"
                alt="GemCare"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-white p-4 rounded-md"
            >
              <img
                src="/gamble.webp"
                alt="BeGambleAware"
                className="h-10 w-auto"
              />
            </a>
            {/* 18+ Badge */}
            <div className="flex justify-center">
              <div className="bg-red-600 text-white px-2 py-2 rounded-full font-bold text-lg border-2 border-yellow-500">
                18+
              </div>
            </div>
          </div>



          <p className="text-gray-500 text-sm text-center">
            © 2026 Best Casinos Great Britain. All rights reserved. | Gamble Responsibly
          </p>
        </div>
      </div>
    </footer>
  )
}
