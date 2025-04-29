"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Lightbulb, Code, Copy, Check, Download, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

export default function GenerateMitigationPage() {
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams()
  const analysisId = urlParams.get("analysis")

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Function to copy code
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const mitigationCode = `// Reentrancy Guard Implementation
// Add this modifier to functions that make external calls
modifier nonReentrant() {
    require(!locked, "Reentrant call detected");
    locked = true;
    _;
    locked = false;
}

// Updated withdraw function with reentrancy protection
function withdraw(uint256 amount) external nonReentrant {
    require(userBalances[msg.sender] >= amount, "Insufficient balance");
    
    // Update state before external call
    userBalances[msg.sender] -= amount;
    
    // Make external call after state update
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
    
    emit Withdrawal(msg.sender, amount);
}`

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
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb
            items={[
              { label: "Solution Architect", href: "/agents/solution-architect" },
              { label: "Generate Mitigation" },
            ]}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Mitigation Generator</h1>
            <p className="text-muted-foreground mt-1">
              {analysisId
                ? `Generating mitigation for analysis ${analysisId}`
                : "Generate mitigation strategies for security vulnerabilities"}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href={analysisId ? `/agents/analyzer-agent/analysis/${analysisId}` : "/agents/solution-architect"}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {analysisId ? "Back to Analysis" : "Back"}
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle>Mitigation Strategy for Reentrancy Vulnerability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-muted-foreground mb-4">
                    The Solution Architect has generated a mitigation strategy for the reentrancy vulnerability detected
                    in the contract.
                  </p>
                  <div className="flex gap-2">
                    <Badge>Reentrancy</Badge>
                    <Badge>Smart Contracts</Badge>
                    <Badge>Security</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="code" className="w-full">
            <TabsList>
              <TabsTrigger value="code">Code Solution</TabsTrigger>
              <TabsTrigger value="explanation">Explanation</TabsTrigger>
              <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
              <TabsTrigger value="testing">Testing</TabsTrigger>
            </TabsList>

            <TabsContent value="code" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    Recommended Code Changes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono">{mitigationCode}</pre>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(mitigationCode)}
                    >
                      {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Key Changes:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Added a nonReentrant modifier to prevent reentrancy attacks</li>
                      <li>Updated the withdraw function to use the nonReentrant modifier</li>
                      <li>Reordered operations to follow the checks-effects-interactions pattern</li>
                      <li>Added a success check after the external call</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="explanation" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Explanation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      The vulnerability in the original code was a classic reentrancy attack vector. The external call
                      was made before updating the user's balance, which allowed an attacker to recursively call the
                      withdraw function before the balance was updated.
                    </p>

                    <h3 className="text-lg font-medium mt-4">The Fix:</h3>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Reentrancy Guard:</strong> We've added a nonReentrant modifier that uses a state
                        variable to track if a function is currently being executed. This prevents recursive calls to
                        protected functions.
                      </li>
                      <li>
                        <strong>Checks-Effects-Interactions Pattern:</strong> We've reordered the operations to follow
                        this pattern:
                        <ul className="list-disc pl-5 mt-2">
                          <li>First, we check conditions (require statement)</li>
                          <li>Then, we update state (reduce the user's balance)</li>
                          <li>Finally, we perform external interactions (send ETH)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Error Handling:</strong> We've added a check to ensure the ETH transfer was successful.
                      </li>
                    </ol>

                    <p className="mt-4">
                      This implementation follows security best practices for Solidity smart contracts and effectively
                      mitigates the reentrancy vulnerability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alternatives" className="py-4">
              <div className="text-center py-20">
                <Lightbulb className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Alternative Solutions</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Solution Architect is analyzing alternative mitigation strategies. Results will appear here
                  shortly.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="testing" className="py-4">
              <div className="text-center py-20">
                <Lightbulb className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Testing Strategies</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Solution Architect is developing testing strategies for the mitigation. Results will appear here
                  shortly.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between">
          <Link href={analysisId ? `/agents/analyzer-agent/analysis/${analysisId}` : "/agents/solution-architect"}>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Analysis
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => alert("Implementation guide downloaded!")}>
              Download Implementation Guide
            </Button>
            <Button>Apply Mitigation</Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
