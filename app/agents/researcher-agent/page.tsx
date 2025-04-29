"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Search,
  Filter,
  ArrowUpDown,
  ExternalLink,
  Plus,
  Bug,
  Shield,
  Wrench,
  Link2,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AgentBreadcrumb } from "@/components/agent-breadcrumb"

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

// Mock research data for different categories
const mockData = {
  exploits: [
    {
      id: "exploit_001",
      title: "Flash Loan Attack on DeFi Protocol X",
      category: "DeFi",
      severity: "Critical",
      date: "2023-10-27",
      description: "A sophisticated flash loan attack that exploited price oracle manipulation to drain funds.",
      tags: ["Flash Loan", "Price Oracle", "DeFi"],
    },
    {
      id: "exploit_002",
      title: "Reentrancy Exploit in Smart Contract Y",
      category: "Smart Contract",
      severity: "High",
      date: "2023-10-25",
      description: "A reentrancy vulnerability that allowed attackers to withdraw funds multiple times.",
      tags: ["Reentrancy", "Smart Contract", "Ethereum"],
    },
    {
      id: "exploit_003",
      title: "Front-Running Attack on DEX Z",
      category: "DEX",
      severity: "Medium",
      date: "2023-10-20",
      description: "A front-running attack that exploited transaction ordering to gain unfair advantages.",
      tags: ["Front-Running", "DEX", "MEV"],
    },
  ],
  vulnerabilities: [
    {
      id: "vuln_001",
      title: "Integer Overflow in Token Contract",
      category: "Smart Contract",
      severity: "High",
      date: "2023-10-26",
      description: "An integer overflow vulnerability that could lead to token minting exploits.",
      tags: ["Integer Overflow", "ERC20", "Solidity"],
    },
    {
      id: "vuln_002",
      title: "Access Control Weakness in Admin Functions",
      category: "Access Control",
      severity: "Critical",
      date: "2023-10-24",
      description: "Insufficient access controls allowing unauthorized users to call privileged functions.",
      tags: ["Access Control", "Admin", "Security"],
    },
    {
      id: "vuln_003",
      title: "Unchecked Return Values in External Calls",
      category: "Smart Contract",
      severity: "Medium",
      date: "2023-10-22",
      description: "Failure to check return values from external calls leading to silent failures.",
      tags: ["External Calls", "Error Handling", "Solidity"],
    },
  ],
  solutions: [
    {
      id: "sol_001",
      title: "Implementing Reentrancy Guards",
      category: "Security Pattern",
      type: "Prevention",
      date: "2023-10-27",
      description: "A comprehensive approach to implementing reentrancy guards in smart contracts.",
      tags: ["Reentrancy", "Security Pattern", "Best Practice"],
    },
    {
      id: "sol_002",
      title: "Secure Oracle Implementation Patterns",
      category: "Architecture",
      type: "Mitigation",
      date: "2023-10-25",
      description: "Patterns for implementing secure and manipulation-resistant price oracles.",
      tags: ["Oracle", "Price Feed", "DeFi"],
    },
    {
      id: "sol_003",
      title: "Access Control Best Practices",
      category: "Security Pattern",
      type: "Prevention",
      date: "2023-10-23",
      description: "Best practices for implementing robust access control in smart contracts.",
      tags: ["Access Control", "Role-Based", "Security"],
    },
  ],
  tools: [
    {
      id: "tool_001",
      title: "Slither - Static Analyzer",
      category: "Analysis",
      platform: "CLI",
      date: "2023-10-26",
      description: "A static analysis framework for finding vulnerabilities in Solidity code.",
      tags: ["Static Analysis", "Vulnerability Detection", "Python"],
    },
    {
      id: "tool_002",
      title: "Mythril - Symbolic Execution Tool",
      category: "Analysis",
      platform: "CLI",
      date: "2023-10-24",
      description: "A security analysis tool for EVM bytecode using symbolic execution.",
      tags: ["Symbolic Execution", "EVM", "Security"],
    },
    {
      id: "tool_003",
      title: "Echidna - Fuzzing Framework",
      category: "Testing",
      platform: "CLI",
      date: "2023-10-22",
      description: "A property-based fuzzing framework for Ethereum smart contracts.",
      tags: ["Fuzzing", "Property Testing", "Security"],
    },
  ],
  related: [
    {
      id: "rel_001",
      title: "MEV in DeFi Ecosystems",
      category: "Research",
      type: "Analysis",
      date: "2023-10-25",
      description: "An analysis of Miner Extractable Value (MEV) and its impact on DeFi ecosystems.",
      tags: ["MEV", "DeFi", "Blockchain"],
    },
    {
      id: "rel_002",
      title: "Cross-Chain Bridge Security",
      category: "Infrastructure",
      type: "Security",
      date: "2023-10-23",
      description: "An overview of security considerations for cross-chain bridge implementations.",
      tags: ["Cross-Chain", "Bridge", "Security"],
    },
    {
      id: "rel_003",
      title: "Governance Attack Vectors",
      category: "Governance",
      type: "Risk",
      date: "2023-10-21",
      description: "Analysis of attack vectors targeting on-chain governance mechanisms.",
      tags: ["Governance", "DAO", "Attack Vector"],
    },
  ],
  research: [
    {
      id: "res_001",
      title: "Formal Verification of DeFi Protocols",
      category: "Academic",
      publisher: "Blockchain Security Journal",
      date: "2023-10-24",
      description: "A formal approach to verifying the security properties of DeFi protocols.",
      tags: ["Formal Verification", "DeFi", "Academic"],
    },
    {
      id: "res_002",
      title: "Economic Security of Proof-of-Stake",
      category: "Academic",
      publisher: "Cryptoeconomic Research",
      date: "2023-10-22",
      description: "Research on the economic security guarantees of Proof-of-Stake consensus mechanisms.",
      tags: ["Proof-of-Stake", "Consensus", "Economics"],
    },
    {
      id: "res_003",
      title: "Smart Contract Vulnerability Classification",
      category: "Academic",
      publisher: "Security Conference",
      date: "2023-10-20",
      description: "A taxonomy and classification of smart contract vulnerabilities.",
      tags: ["Taxonomy", "Vulnerabilities", "Classification"],
    },
  ],
}

// Icons for each category
const categoryIcons = {
  exploits: <Bug className="h-6 w-6" />,
  vulnerabilities: <Shield className="h-6 w-6" />,
  solutions: <Shield className="h-6 w-6" />,
  tools: <Wrench className="h-6 w-6" />,
  related: <Link2 className="h-6 w-6" />,
  research: <MessageSquare className="h-6 w-6" />,
}

export default function ResearcherAgentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTab, setSelectedTab] = useState("exploits")
  const [currentData, setCurrentData] = useState(mockData.exploits)

  // Update current data when tab changes
  useEffect(() => {
    setCurrentData(mockData[selectedTab as keyof typeof mockData])
  }, [selectedTab])

  // Filter data based on search and category
  const filteredData = currentData.filter((item) => {
    // Search filter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    // Category filter
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Function to format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Function to get severity badge variant
  const getSeverityBadgeVariant = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "destructive"
      case "High":
        return "destructive"
      case "Medium":
        return "warning"
      case "Low":
        return "success"
      default:
        return "outline"
    }
  }

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb items={[{ label: "Researcher Agent" }]} />
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Researcher Agent</h1>
            <p className="text-muted-foreground mt-1">Research and curate blockchain security information</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/researcher-agent/configuration">
              <Button variant="outline">Configuration</Button>
            </Link>
            <Link href="/agents/researcher-agent/research">
              <Button variant="outline">Active Research</Button>
            </Link>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Research
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search research results..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Smart Contract">Smart Contract</SelectItem>
              <SelectItem value="DeFi">DeFi</SelectItem>
              <SelectItem value="DEX">DEX</SelectItem>
              <SelectItem value="Access Control">Access Control</SelectItem>
              <SelectItem value="Security Pattern">Security Pattern</SelectItem>
              <SelectItem value="Architecture">Architecture</SelectItem>
              <SelectItem value="Analysis">Analysis</SelectItem>
              <SelectItem value="Testing">Testing</SelectItem>
              <SelectItem value="Academic">Academic</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-b from-blue-950 to-black rounded-lg p-6 shadow-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Research Results</h2>
            <div className="inline-block bg-gray-800 rounded-lg px-4 py-2 text-white">
              {selectedCategory === "all" ? "All Categories" : selectedCategory}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {Object.keys(mockData).map((category) => (
              <motion.button
                key={category}
                className={`flex flex-col items-center justify-center p-4 rounded-lg ${
                  selectedTab === category ? "bg-blue-600 text-white" : "bg-blue-900/50 text-blue-100 hover:bg-blue-800"
                } transition-all duration-200`}
                onClick={() => setSelectedTab(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-blue-950/50 p-3 rounded-lg mb-2">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </div>
                <span className="capitalize text-sm">{category}</span>
                <div className="mt-1 text-xs opacity-80">
                  {mockData[category as keyof typeof mockData].length} items
                </div>
              </motion.button>
            ))}
          </div>

          <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white capitalize">{selectedTab} Results</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="h-8">
                  <ExternalLink className="h-3.5 w-3.5 mr-1" /> View All
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <motion.div
                    key={item.id}
                    className="bg-blue-950/50 rounded-lg p-4 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-200"
                    whileHover={{ y: -5, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      {"severity" in item ? (
                        <Badge variant={getSeverityBadgeVariant(item.severity)}>{item.severity}</Badge>
                      ) : "type" in item ? (
                        <Badge variant="outline">{item.type}</Badge>
                      ) : "platform" in item ? (
                        <Badge variant="outline">{item.platform}</Badge>
                      ) : "publisher" in item ? (
                        <Badge variant="secondary">{item.publisher}</Badge>
                      ) : (
                        <Badge variant="outline">{item.category}</Badge>
                      )}
                      <span className="text-xs text-blue-300">{formatDate(item.date)}</span>
                    </div>
                    <h4 className="font-medium text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-blue-200 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-end">
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
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="recent" className="w-full">
            <TabsList>
              <TabsTrigger value="recent">Recent Research</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="py-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockData.research.map((research) => (
                  <Card key={research.id} className="h-full hover:border-primary transition-colors cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="secondary">{research.category}</Badge>
                        <span className="text-xs text-muted-foreground">{formatDate(research.date)}</span>
                      </div>
                      <CardTitle className="text-lg mt-2">{research.title}</CardTitle>
                      <CardDescription>{research.publisher}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">{research.description}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {research.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" className="w-full">
                        View Research
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="py-4">
              <div className="text-center py-10 text-muted-foreground">Popular research will be displayed here.</div>
            </TabsContent>

            <TabsContent value="saved" className="py-4">
              <div className="text-center py-10 text-muted-foreground">
                No saved research items yet. You can save research for quick reference.
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
