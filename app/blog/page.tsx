import { BookOpen, Calendar, User, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const featuredPost = {
    id: "critical-defi-vulnerability",
    title: "Critical Vulnerability Discovered in Major DeFi Protocol",
    excerpt:
      "Our analysis team has identified a critical reentrancy vulnerability that could potentially affect multiple DeFi protocols. Learn about the details and how to protect your smart contracts.",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "Vulnerabilities",
    tags: ["DeFi", "Reentrancy", "Smart Contracts"],
    image: "/placeholder.svg?height=600&width=1200",
  }

  const recentPosts = [
    {
      id: "web3-security-trends-2023",
      title: "Web3 Security Trends to Watch in 2023",
      excerpt: "An overview of emerging security threats and trends in the web3 ecosystem for 2023.",
      date: "June 10, 2023",
      author: "Sophia Chen",
      category: "Trends",
      tags: ["Security", "Trends", "2023"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "smart-contract-audit-checklist",
      title: "The Ultimate Smart Contract Audit Checklist",
      excerpt: "A comprehensive checklist to help developers secure their smart contracts before deployment.",
      date: "June 5, 2023",
      author: "Marcus Williams",
      category: "Best Practices",
      tags: ["Audit", "Smart Contracts", "Security"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "nft-security-vulnerabilities",
      title: "Common Security Vulnerabilities in NFT Projects",
      excerpt: "Exploring the most common security issues found in NFT projects and how to address them.",
      date: "May 28, 2023",
      author: "Priya Patel",
      category: "Vulnerabilities",
      tags: ["NFT", "Security", "Vulnerabilities"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "defi-security-best-practices",
      title: "DeFi Security Best Practices for Developers",
      excerpt: "Essential security practices that every DeFi developer should implement in their projects.",
      date: "May 20, 2023",
      author: "David Kim",
      category: "Best Practices",
      tags: ["DeFi", "Security", "Development"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "cross-chain-bridge-security",
      title: "The State of Cross-Chain Bridge Security",
      excerpt: "An analysis of recent cross-chain bridge exploits and recommendations for improved security.",
      date: "May 15, 2023",
      author: "Elena Rodriguez",
      category: "Analysis",
      tags: ["Cross-Chain", "Bridges", "Security"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "dao-governance-attacks",
      title: "Understanding DAO Governance Attacks",
      excerpt: "A deep dive into governance attacks on DAOs and strategies to prevent them.",
      date: "May 8, 2023",
      author: "Alex Johnson",
      category: "Governance",
      tags: ["DAO", "Governance", "Attacks"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = [
    "Vulnerabilities",
    "Exploits",
    "Best Practices",
    "Trends",
    "Analysis",
    "Governance",
    "Tools",
    "Research",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <BookOpen className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Blog</h1>
          <p className="text-xl text-gray-400 max-w-3xl">The latest insights, research, and updates on web3 security</p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Input type="search" placeholder="Search articles..." className="bg-gray-900 border-gray-800 pl-10" />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary/20 transition-colors">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge>{featuredPost.category}</Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 flex-1">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <div key={index} className="flex items-center text-gray-400 text-sm">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.id}`} className="block">
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center text-primary">
                        <span>Read more</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-gray-900/50 rounded-lg p-8 border border-gray-800 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with the latest web3 security news, vulnerabilities, and best practices. We'll send you a
              monthly digest of our top articles and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
