import { Users } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Lead Developer",
      bio: "Alex has over 10 years of experience in blockchain security and smart contract auditing. Previously worked at major security firms before founding Web3 Sentinel.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Sophia Chen",
      role: "Security Researcher",
      bio: "Sophia specializes in DeFi vulnerabilities and exploit analysis. She has discovered several critical vulnerabilities in major protocols.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Marcus Williams",
      role: "AI Engineer",
      bio: "Marcus leads the development of our multi-agent system architecture, with expertise in AI and machine learning for security applications.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Priya Patel",
      role: "Smart Contract Auditor",
      bio: "Priya has audited over 100 smart contracts and developed automated tools for vulnerability detection in Solidity code.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Kim",
      role: "Frontend Developer",
      bio: "David creates intuitive interfaces that make complex security information accessible and actionable for users.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Elena Rodriguez",
      role: "Security Educator",
      bio: "Elena translates complex security concepts into educational content and best practices for the web3 community.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Users className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Meet the experts behind Web3 Sentinel's multi-agent security system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Team</h2>
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who are passionate about web3 security and want to make a
              difference in the ecosystem. If you're interested in joining our team, check out our open positions or
              reach out directly.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:careers@web3sentinel.io"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
