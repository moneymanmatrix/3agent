import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Web3 Sentinel | Security Multi-Agent System",
  description: "A multi-agent system for web3 security analysis and tooling",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            <div className="container mx-auto px-6 pt-6">
              <Breadcrumb />
            </div>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
