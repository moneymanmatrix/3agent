"use client"

import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const mockFindings = [
  {
    id: 1,
    title: "Reentrancy Vulnerability in DeFi Protocol X",
    severity: "critical",
    category: "Smart Contract",
    description:
      "A critical reentrancy vulnerability was discovered in Protocol X's liquidity pool contract that could lead to fund drainage.",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Unprotected Admin Functions in Token Y",
    severity: "high",
    category: "Smart Contract",
    description: "Token Y has unprotected admin functions that could allow the owner to arbitrarily modify balances.",
    date: "2023-06-12",
  },
  {
    id: 3,
    title: "Front-Running Vulnerability in DEX Z",
    severity: "medium",
    category: "DeFi",
    description: "DEX Z is vulnerable to front-running attacks due to predictable transaction ordering.",
    date: "2023-06-10",
  },
]

export function RecentFindings() {
  const [findings, setFindings] = useState(mockFindings)

  // Simulate new findings being added
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newFinding = {
          id: findings.length + 1,
          title: `New Vulnerability ${Math.floor(Math.random() * 100)}`,
          severity: ["critical", "high", "medium", "low"][Math.floor(Math.random() * 4)],
          category: ["Smart Contract", "DeFi", "NFT", "Bridge"][Math.floor(Math.random() * 4)],
          description: "A newly discovered vulnerability that requires further analysis.",
          date: new Date().toISOString().split("T")[0],
        }
        setFindings((prev) => [newFinding, ...prev.slice(0, 2)])
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [findings])

  const severityColor = {
    critical: "bg-red-500",
    high: "bg-orange-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  }

  const severityVariant = {
    critical: "destructive",
    high: "destructive",
    medium: "warning",
    low: "success",
  }

  return (
    <>
      {findings.map((finding) => (
        <Card key={finding.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${severityColor[finding.severity]}`} />
              <Badge variant={severityVariant[finding.severity]}>{finding.severity}</Badge>
              <Badge variant="outline">{finding.category}</Badge>
            </div>
            <CardTitle className="mt-2 text-lg">{finding.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">{finding.description}</p>
            <div className="mt-2 text-xs text-muted-foreground">{finding.date}</div>
          </CardContent>
          <CardFooter>
            <Link href={`/reports/${finding.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Details
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

