import { Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ShowcasePage() {
  const showcaseItems = [
    {
      title: "DeFi Protocol Reentrancy Vulnerability",
      description:
        "A detailed analysis of a critical reentrancy vulnerability discovered in a major DeFi lending protocol, including the exploit mechanism and mitigation strategy.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Vulnerability Analysis",
      tags: ["DeFi", "Reentrancy", "Smart Contract"],
      link: "/showcase/defi-reentrancy-vulnerability",
    },
    {
      title: "Flash Loan Attack Prevention",
      description:
        "A comprehensive guide to preventing flash loan attacks in DeFi protocols, with code examples and security patterns.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Security Guide",
      tags: ["Flash Loans", "DeFi", "Prevention"],
      link: "/showcase/flash-loan-prevention",
    },
    {
      title: "NFT Marketplace Security Audit",
      description:
        "A showcase of our multi-agent analysis of a popular NFT marketplace, highlighting security issues and recommended fixes.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Security Audit",
      tags: ["NFT", "Marketplace", "Audit"],
      link: "/showcase/nft-marketplace-audit",
    },
    {
      title: "Cross-Chain Bridge Exploit Analysis",
      description:
        "A detailed breakdown of a major cross-chain bridge exploit, explaining the attack vector and lessons learned.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Exploit Analysis",
      tags: ["Cross-Chain", "Bridge", "Exploit"],
      link: "/showcase/bridge-exploit-analysis",
    },
    {
      title: "DAO Governance Attack Simulation",
      description:
        "A simulation of a governance attack on a DAO, demonstrating the vulnerability and providing mitigation strategies.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Attack Simulation",
      tags: ["DAO", "Governance", "Simulation"],
      link: "/showcase/dao-governance-attack",
    },
    {
      title: "Smart Contract Security Patterns",
      description:
        "A collection of security patterns and best practices for smart contract development, with code examples and explanations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Best Practices",
      tags: ["Patterns", "Smart Contract", "Security"],
      link: "/showcase/security-patterns",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Lightbulb className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Showcase</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Explore real-world examples of our security analysis and solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <Link key={index} href={item.link} className="block">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-4">{item.category}</Badge>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary">
                      <span>View case study</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-b from-blue-950 to-black rounded-lg p-8 border border-blue-900/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Want to see your project analyzed?</h2>
                <p className="text-gray-300 mb-6">
                  Our multi-agent system can analyze your smart contracts and web3 applications to identify potential
                  security vulnerabilities and provide mitigation strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="/contact">Request Analysis</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/docs/user-manual">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Security Analysis"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Our Security Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((partner) => (
                <div
                  key={partner}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 flex items-center justify-center"
                >
                  <div className="w-32 h-12 bg-gray-800 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
