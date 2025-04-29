"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search, Filter, Upload, Plus, ArrowUpDown, ExternalLink } from "lucide-react"

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

// Mock analysis data
const mockAnalyses = [
  {
    id: "analysis_20231027_001",
    contract_address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    chain: "Ethereum Mainnet",
    vulnerability_type: "Reentrancy",
    check_result: "PatternFound",
    confidence: "High",
    timestamp: "2023-10-27T10:30:00Z",
    basic_impacts: ["Fund Loss", "State Corruption"],
  },
  {
    id: "analysis_20231026_002",
    contract_address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    chain: "Ethereum Mainnet",
    vulnerability_type: "Integer Overflow",
    check_result: "PatternNotFound",
    confidence: "High",
    timestamp: "2023-10-26T15:45:00Z",
    basic_impacts: ["None Detected"],
  },
  {
    id: "analysis_20231025_003",
    contract_address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chain: "Ethereum Mainnet",
    vulnerability_type: "Unchecked Return Value",
    check_result: "PatternFound",
    confidence: "Medium",
    timestamp: "2023-10-25T09:15:00Z",
    basic_impacts: ["State Corruption"],
  },
  {
    id: "analysis_20231024_004",
    contract_address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    chain: "Ethereum Mainnet",
    vulnerability_type: "Access Control",
    check_result: "Inconclusive",
    confidence: "Low",
    timestamp: "2023-10-24T14:20:00Z",
    basic_impacts: ["Potential Privilege Escalation"],
  },
  {
    id: "analysis_20231023_005",
    contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    chain: "Ethereum Mainnet",
    vulnerability_type: "Flash Loan Attack",
    check_result: "PatternFound",
    confidence: "High",
    timestamp: "2023-10-23T11:10:00Z",
    basic_impacts: ["Fund Loss", "Market Manipulation"],
  },
]

export default function AnalyzerAgentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVulnerability, setSelectedVulnerability] = useState("all")
  const [selectedResult, setSelectedResult] = useState("all")
  const [selectedChain, setSelectedChain] = useState("all")

  // Filter analyses based on search and filters
  const filteredAnalyses = mockAnalyses.filter((analysis) => {
    // Search filter
    const matchesSearch =
      analysis.contract_address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.vulnerability_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      analysis.id.toLowerCase().includes(searchQuery.toLowerCase())

    // Vulnerability type filter
    const matchesVulnerability =
      selectedVulnerability === "all" || analysis.vulnerability_type === selectedVulnerability

    // Result filter
    const matchesResult = selectedResult === "all" || analysis.check_result === selectedResult

    // Chain filter
    const matchesChain = selectedChain === "all" || analysis.chain === selectedChain

    return matchesSearch && matchesVulnerability && matchesResult && matchesChain
  })

  // Function to get status badge variant
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "PatternFound":
        return "destructive"
      case "PatternNotFound":
        return "success"
      case "Inconclusive":
        return "warning"
      default:
        return "outline"
    }
  }

  // Function to get confidence badge variant
  const getConfidenceBadgeVariant = (confidence: string) => {
    switch (confidence) {
      case "High":
        return "default"
      case "Medium":
        return "warning"
      case "Low":
        return "outline"
      default:
        return "outline"
    }
  }

  // Function to format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb items={[{ label: "Analyzer Agent" }]} />
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analyzer Agent</h1>
            <p className="text-muted-foreground mt-1">
              Analyze smart contracts for security vulnerabilities and exploits
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Contract
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Analysis
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by contract address, vulnerability type, or ID..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={selectedVulnerability} onValueChange={setSelectedVulnerability}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Vulnerability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Vulnerabilities</SelectItem>
              <SelectItem value="Reentrancy">Reentrancy</SelectItem>
              <SelectItem value="Integer Overflow">Integer Overflow</SelectItem>
              <SelectItem value="Unchecked Return Value">Unchecked Return Value</SelectItem>
              <SelectItem value="Access Control">Access Control</SelectItem>
              <SelectItem value="Flash Loan Attack">Flash Loan Attack</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedResult} onValueChange={setSelectedResult}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Result" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Results</SelectItem>
              <SelectItem value="PatternFound">Pattern Found</SelectItem>
              <SelectItem value="PatternNotFound">Pattern Not Found</SelectItem>
              <SelectItem value="Inconclusive">Inconclusive</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedChain} onValueChange={setSelectedChain}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Chains</SelectItem>
              <SelectItem value="Ethereum Mainnet">Ethereum Mainnet</SelectItem>
              <SelectItem value="Binance Smart Chain">Binance Smart Chain</SelectItem>
              <SelectItem value="Polygon">Polygon</SelectItem>
              <SelectItem value="Arbitrum">Arbitrum</SelectItem>
              <SelectItem value="Optimism">Optimism</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="recent" className="w-full">
            <TabsList>
              <TabsTrigger value="recent">Recent Analyses</TabsTrigger>
              <TabsTrigger value="critical">Critical Findings</TabsTrigger>
              <TabsTrigger value="saved">Saved Analyses</TabsTrigger>
            </TabsList>

            <div className="flex items-center justify-between py-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>{filteredAnalyses.length}</strong> of <strong>{mockAnalyses.length}</strong> analyses
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="critical">Critical First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="recent" className="py-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAnalyses.length > 0 ? (
                  filteredAnalyses.map((analysis) => (
                    <Card
                      key={analysis.id}
                      className="h-full hover:border-primary transition-colors cursor-pointer"
                      onClick={() => (window.location.href = `/agents/analyzer-agent/analysis/${analysis.id}`)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge variant={getStatusBadgeVariant(analysis.check_result)}>{analysis.check_result}</Badge>
                          <Badge variant={getConfidenceBadgeVariant(analysis.confidence)}>{analysis.confidence}</Badge>
                        </div>
                        <CardTitle className="text-lg mt-2">{analysis.vulnerability_type}</CardTitle>
                        <CardDescription className="font-mono text-xs truncate">
                          {analysis.contract_address}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Chain: </span>
                            <span>{analysis.chain}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Date: </span>
                            <span>{formatTimestamp(analysis.timestamp)}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {analysis.basic_impacts.map((impact, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {impact}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link href={`/agents/analyzer-agent/analysis/${analysis.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Analysis
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 text-muted-foreground">
                    No analyses found matching your search criteria.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="critical" className="py-4">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredAnalyses
                  .filter((analysis) => analysis.check_result === "PatternFound" && analysis.confidence === "High")
                  .map((analysis) => (
                    <Card
                      key={analysis.id}
                      className="h-full hover:border-primary transition-colors cursor-pointer"
                      onClick={() => (window.location.href = `/agents/analyzer-agent/analysis/${analysis.id}`)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge variant="destructive">{analysis.check_result}</Badge>
                          <Badge variant="default">{analysis.confidence}</Badge>
                        </div>
                        <CardTitle className="text-lg mt-2">{analysis.vulnerability_type}</CardTitle>
                        <CardDescription className="font-mono text-xs truncate">
                          {analysis.contract_address}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Chain: </span>
                            <span>{analysis.chain}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Date: </span>
                            <span>{formatTimestamp(analysis.timestamp)}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {analysis.basic_impacts.map((impact, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {impact}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link href={`/agents/analyzer-agent/analysis/${analysis.id}`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Analysis
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                {filteredAnalyses.filter(
                  (analysis) => analysis.check_result === "PatternFound" && analysis.confidence === "High",
                ).length === 0 && (
                  <div className="col-span-full text-center py-10 text-muted-foreground">
                    No critical findings match your search criteria.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="saved" className="py-4">
              <div className="text-center py-10 text-muted-foreground">
                No saved analyses yet. You can save analyses for quick reference.
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="flex items-center justify-center space-x-2 py-4">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
