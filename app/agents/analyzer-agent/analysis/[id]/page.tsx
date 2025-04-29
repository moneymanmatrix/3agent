"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Clock, Code, Copy, Check, ChevronRight, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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
const mockAnalysis = {
  id: "analysis_20231027_001",
  contract_address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  chain: "Ethereum Mainnet",
  chain_id: 1,
  timestamp: "2023-10-27T10:30:00Z",
  vulnerability_type: "Reentrancy",
  check_result: "PatternFound",
  confidence: "High",
  source_code_status: "Verified Source Found",
  source_origin: "Etherscan",
  abi_found: true,
  target_function: "withdraw(uint256)",
  relevant_lines: [125, 130],
  involved_state_variables: ["userBalances", "lockFlag"],
  description: "External call detected on line 125 before state update to 'userBalances' on line 130.",
  basic_impacts: ["Fund Loss", "State Corruption"],
  affected_components: ["User Balances", "Withdrawal Logic"],
  long_term_consequences: [
    "Reputational Damage",
    "Loss of User Trust",
    "Protocol Instability",
    "Potential for Cascading Failures in Dependent Protocols",
  ],
  source_available: true,
  code_snippet: `123: function withdraw(uint256 amount) external {
124:     require(userBalances[msg.sender] >= amount, "Insufficient balance");
125:     (bool success, ) = msg.sender.call{value: amount}("");
126:     
127:     // Vulnerability: State update after external call
128:     // This allows for reentrancy attacks
129:     
130:     userBalances[msg.sender] -= amount;
131:     
132:     emit Withdrawal(msg.sender, amount);
133: }`,
  notes:
    "Analysis focused on source code. The reentrancy pattern was detected with high confidence due to the clear state update after an external call pattern.",
}

export default function AnalysisDetailPage({ params }: { params: { id: string } }) {
  const [analysis, setAnalysis] = useState(mockAnalysis)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Function to copy contract address
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Function to format timestamp
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })
  }

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

  // Function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PatternFound":
        return "🔴"
      case "PatternNotFound":
        return "🟢"
      case "Inconclusive":
        return "🟠"
      default:
        return "⚪"
    }
  }

  if (loading) {
    return (
      <div className="container py-10">
        <div className="flex flex-col gap-6">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        {/* Back button */}
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb
            items={[{ label: "Analyzer Agent", href: "/agents/analyzer-agent" }, { label: "Analysis Details" }]}
          />
        </motion.div>

        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Exploit Analysis Report</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
              <div className="flex items-center">
                <span className="text-muted-foreground mr-2">Contract:</span>
                <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
                  {analysis.contract_address.substring(0, 6)}...{analysis.contract_address.substring(38)}
                </code>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 ml-1"
                        onClick={() => copyToClipboard(analysis.contract_address)}
                      >
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "Copied!" : "Copy address"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <a
                  href={`https://etherscan.io/address/${analysis.contract_address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1"
                >
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </a>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="ml-0 sm:ml-2">
                  {analysis.chain} (ID: {analysis.chain_id})
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              Analyzed: {formatTimestamp(analysis.timestamp)}
            </div>
            <div className="text-xs text-muted-foreground mt-1">ID: {analysis.id}</div>
          </div>
        </motion.div>

        {/* Summary Card */}
        <motion.div variants={itemVariants}>
          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="pb-2">
              <CardTitle>Vulnerability Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <span className="text-muted-foreground">Type:</span>{" "}
                      <span className="font-medium">{analysis.vulnerability_type}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span>{" "}
                      <Badge variant={getStatusBadgeVariant(analysis.check_result)}>
                        {getStatusIcon(analysis.check_result)} {analysis.check_result}
                      </Badge>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Confidence:</span>{" "}
                      <Badge variant={getConfidenceBadgeVariant(analysis.confidence)}>
                        {analysis.confidence} Confidence
                      </Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">Potential Immediate Impact:</div>
                  <div className="flex flex-wrap gap-2">
                    {analysis.basic_impacts.map((impact, index) => (
                      <Badge key={index} variant="destructive">
                        {impact}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Analysis Card */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Technical Findings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Data Source</h3>
                  <div className="space-y-1 text-sm">
                    <div>
                      <span className="text-muted-foreground">Source Code:</span>{" "}
                      <span>{analysis.source_code_status}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Origin:</span> <span>{analysis.source_origin}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">ABI Found:</span>{" "}
                      <span>{analysis.abi_found ? "Yes" : "No"}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Context</h3>
                  <div className="space-y-1 text-sm">
                    <div>
                      <span className="text-muted-foreground">Target Function:</span>{" "}
                      <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">{analysis.target_function}</code>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Relevant Lines:</span>{" "}
                      <span>{analysis.relevant_lines.join(", ")}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Involved State Variables:</span>{" "}
                      <div className="flex flex-wrap gap-1 mt-1">
                        {analysis.involved_state_variables.map((variable, index) => (
                          <code key={index} className="bg-muted px-1 py-0.5 rounded text-xs font-mono">
                            {variable}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Description</h3>
                  <p className="text-sm">
                    {analysis.description.split(/(\d+)/).map((part, i) => {
                      // Check if the part is a number that matches a line number
                      if (/^\d+$/.test(part) && analysis.relevant_lines.includes(Number.parseInt(part))) {
                        return <strong key={i}>{part}</strong>
                      }
                      // Check if the part contains a state variable
                      const highlightedPart = analysis.involved_state_variables.reduce((acc, variable) => {
                        return acc.replace(new RegExp(`'${variable}'`, "g"), `'<strong>${variable}</strong>'`)
                      }, part)

                      // If the part was modified, we need to render it as HTML
                      if (highlightedPart !== part) {
                        return <span key={i} dangerouslySetInnerHTML={{ __html: highlightedPart }} />
                      }

                      return part
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Assessment Card */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Impact Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Affected Components</h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.affected_components.map((component, index) => (
                      <Badge key={index} variant="outline">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Potential Long-Term Consequences</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {analysis.long_term_consequences.map((consequence, index) => (
                      <li key={index}>{consequence}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Evidence Card */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2 flex items-center">
                  <Code className="mr-2 h-4 w-4" />
                  Code Snippet
                </h3>
                {analysis.source_available ? (
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono">
                      {analysis.code_snippet.split("\n").map((line, index) => {
                        const lineNumber = index + 123 // Starting from line 123 as per the mock data
                        const isHighlighted = analysis.relevant_lines.includes(lineNumber)

                        return (
                          <div key={index} className={`${isHighlighted ? "bg-yellow-500/10 -mx-4 px-4" : ""}`}>
                            <span className="inline-block w-8 text-muted-foreground">{lineNumber}</span>
                            {line}
                          </div>
                        )
                      })}
                    </pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(analysis.code_snippet)}
                    >
                      {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                  </div>
                ) : (
                  <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground">
                    Source code not available for snippet display.
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Agent Notes</h3>
                <p className="text-sm">{analysis.notes}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex justify-between">
          <Link href="/agents/analyzer-agent">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Analyses
            </Button>
          </Link>
          <div className="flex gap-2">
            <Link href={`/agents/researcher-agent/research?vulnerability=${analysis.vulnerability_type}`}>
              <Button variant="outline" className="mr-2">
                Research Similar Vulnerabilities
              </Button>
            </Link>
            <Button variant="outline" onClick={() => alert("Report exported successfully!")}>
              Export Report
            </Button>
            <Link href={`/agents/solution-architect/generate?analysis=${analysis.id}`}>
              <Button>
                Generate Mitigation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
