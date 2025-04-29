"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Bug,
  Star,
  DollarSign,
  Image,
  MessageSquare,
  Link2,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
}

// Mock data for the results
const mockResults = {
  exploits: [
    {
      id: "e1",
      title: "Reentrancy Exploit in DeFi Protocol",
      date: "2023-06-15",
      severity: "critical",
      source: "github.com",
    },
    { id: "e2", title: "Flash Loan Attack Vector", date: "2023-06-10", severity: "high", source: "medium.com" },
    { id: "e3", title: "Front-Running Exploit", date: "2023-06-05", severity: "medium", source: "twitter.com" },
  ],
  vulnerabilities: [
    { id: "v1", title: "Unprotected Self-Destruct", date: "2023-06-14", severity: "critical", source: "etherscan.io" },
    { id: "v2", title: "Unchecked Return Values", date: "2023-06-12", severity: "medium", source: "github.com" },
    {
      id: "v3",
      title: "Integer Overflow in Token Contract",
      date: "2023-06-08",
      severity: "high",
      source: "medium.com",
    },
  ],
  solutions: [
    {
      id: "s1",
      title: "Implementing Reentrancy Guards",
      date: "2023-06-16",
      type: "prevention",
      source: "ethereum.org",
    },
    { id: "s2", title: "Secure Randomness Solutions", date: "2023-06-11", type: "mitigation", source: "chainlink.com" },
    {
      id: "s3",
      title: "Access Control Best Practices",
      date: "2023-06-07",
      type: "prevention",
      source: "openzeppelin.com",
    },
  ],
  tools: [
    { id: "t1", title: "Slither - Static Analyzer", date: "2023-06-15", category: "analysis", source: "github.com" },
    {
      id: "t2",
      title: "Mythril - Security Analysis Tool",
      date: "2023-06-09",
      category: "analysis",
      source: "github.com",
    },
    { id: "t3", title: "Echidna - Fuzzing Tool", date: "2023-06-04", category: "testing", source: "github.com" },
  ],
  related: [
    {
      id: "r1",
      title: "Similar Exploit in Another Protocol",
      date: "2023-06-13",
      type: "case-study",
      source: "medium.com",
    },
    {
      id: "r2",
      title: "Historical Context of DeFi Attacks",
      date: "2023-06-08",
      type: "analysis",
      source: "defipulse.com",
    },
    {
      id: "r3",
      title: "Market Impact of Security Breaches",
      date: "2023-06-03",
      type: "research",
      source: "coindesk.com",
    },
  ],
  research: [
    {
      id: "rr1",
      title: "Academic Paper on Smart Contract Security",
      date: "2023-06-14",
      type: "academic",
      source: "arxiv.org",
    },
    {
      id: "rr2",
      title: "Formal Verification Methods",
      date: "2023-06-10",
      type: "methodology",
      source: "ethereum.org",
    },
    {
      id: "rr3",
      title: "Security Trends in Web3",
      date: "2023-06-05",
      type: "trend-analysis",
      source: "web3securityalliance.org",
    },
  ],
}

// Icons for each category
const categoryIcons = {
  exploits: <Bug className="h-6 w-6" />,
  vulnerabilities: <Star className="h-6 w-6" />,
  solutions: <DollarSign className="h-6 w-6" />,
  tools: <Image className="h-6 w-6" />,
  related: <MessageSquare className="h-6 w-6" />,
  research: <Link2 className="h-6 w-6" />,
}

export default function ScraperDetails() {
  const [selectedSource, setSelectedSource] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("exploits")
  const [results, setResults] = useState(mockResults.exploits)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Simulate loading when changing categories
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setResults(mockResults[selectedCategory as keyof typeof mockResults])
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [selectedCategory])

  // Filter results based on search query
  const filteredResults = results.filter(
    (result) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.source.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Scraper Agent Details</h1>
            <p className="text-muted-foreground mt-1">View and analyze scraper results</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/scraper-agent/configuration">
              <Button variant="outline">Configuration</Button>
            </Link>
            <Link href="/agents/scraper-agent/active">
              <Button variant="outline">Active Scrapers</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search results..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedSource} onValueChange={setSelectedSource}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="github.com">github.com</SelectItem>
              <SelectItem value="medium.com">medium.com</SelectItem>
              <SelectItem value="twitter.com">twitter.com</SelectItem>
              <SelectItem value="ethereum.org">ethereum.org</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-b from-blue-950 to-black rounded-lg p-6 shadow-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Source</h2>
            <div className="inline-block bg-gray-800 rounded-lg px-4 py-2 text-white">
              {selectedSource === "all" ? "All Sources" : selectedSource}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {Object.keys(mockResults).map((category) => (
              <motion.button
                key={category}
                className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-blue-900/50 text-blue-100 hover:bg-blue-800"
                } transition-all duration-200`}
                onClick={() => setSelectedCategory(category)}
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <div className="bg-blue-950/50 p-3 rounded-lg mb-2">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <span className="capitalize text-sm">{category}</span>
                <div className="mt-1 text-xs opacity-80">
                  {mockResults[category as keyof typeof mockResults].length} items
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/50">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-center items-center py-20"
                >
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </motion.div>
              ) : (
                <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-white capitalize">{selectedCategory} Results</h3>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <Download className="h-3.5 w-3.5 mr-1" /> Export
                      </Button>
                      <Button size="sm" variant="outline" className="h-8">
                        <Share2 className="h-3.5 w-3.5 mr-1" /> Share
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredResults.length > 0 ? (
                      filteredResults.map((result) => (
                        <motion.div
                          key={result.id}
                          className="bg-blue-950/50 rounded-lg p-4 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-200"
                          whileHover={{ y: -5, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <Badge
                              variant={
                                result.severity === "critical"
                                  ? "destructive"
                                  : result.severity === "high"
                                    ? "destructive"
                                    : result.severity === "medium"
                                      ? "warning"
                                      : "outline"
                              }
                              className="mb-2"
                            >
                              {result.severity || result.type || result.category}
                            </Badge>
                            <span className="text-xs text-blue-300">{result.date}</span>
                          </div>
                          <h4 className="font-medium text-white mb-2">{result.title}</h4>
                          <div className="text-xs text-blue-300 flex justify-between items-center">
                            <span>Source: {result.source}</span>
                            <Button variant="ghost" size="sm" className="h-7 px-2 text-blue-300 hover:text-white">
                              View Details
                            </Button>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-10 text-blue-300">
                        No results found for your search criteria.
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
