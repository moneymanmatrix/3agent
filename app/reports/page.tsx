import { Search, Filter, Calendar, Tag, ArrowUpDown, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Security Reports</h1>
          <Button>Generate New Report</Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search reports..." className="w-full pl-8" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Tag className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="critical">Critical</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
          </TabsList>

          <div className="flex items-center justify-between py-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>24</strong> of <strong>124</strong> reports
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="severity-high">Highest Severity</SelectItem>
                <SelectItem value="severity-low">Lowest Severity</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="all" className="py-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SecurityReportCard
                title="Reentrancy Vulnerability in DeFi Protocol X"
                date="2023-06-15"
                severity="critical"
                category="Smart Contract"
                description="A critical reentrancy vulnerability was discovered in Protocol X's liquidity pool contract that could lead to fund drainage."
                agent="Analyzer Agent"
              />

              <SecurityReportCard
                title="Unprotected Admin Functions in Token Y"
                date="2023-06-12"
                severity="high"
                category="Smart Contract"
                description="Token Y has unprotected admin functions that could allow the owner to arbitrarily modify balances."
                agent="Scraper Agent"
              />

              <SecurityReportCard
                title="Front-Running Vulnerability in DEX Z"
                date="2023-06-10"
                severity="medium"
                category="DeFi"
                description="DEX Z is vulnerable to front-running attacks due to predictable transaction ordering."
                agent="Researcher Agent"
              />

              <SecurityReportCard
                title="Insecure Randomness in NFT Minting"
                date="2023-06-08"
                severity="high"
                category="NFT"
                description="The randomness source used for NFT trait assignment is predictable and can be manipulated."
                agent="Analyzer Agent"
              />

              <SecurityReportCard
                title="Centralization Risks in Bridge Protocol"
                date="2023-06-05"
                severity="medium"
                category="Bridge"
                description="The cross-chain bridge relies on a small set of validators, creating centralization risks."
                agent="Researcher Agent"
              />

              <SecurityReportCard
                title="Integer Overflow in Staking Contract"
                date="2023-06-01"
                severity="critical"
                category="Smart Contract"
                description="A potential integer overflow was identified in the reward calculation of the staking contract."
                agent="Analyzer Agent"
              />
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered by severity */}
          <TabsContent value="critical" className="py-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SecurityReportCard
                title="Reentrancy Vulnerability in DeFi Protocol X"
                date="2023-06-15"
                severity="critical"
                category="Smart Contract"
                description="A critical reentrancy vulnerability was discovered in Protocol X's liquidity pool contract that could lead to fund drainage."
                agent="Analyzer Agent"
              />

              <SecurityReportCard
                title="Integer Overflow in Staking Contract"
                date="2023-06-01"
                severity="critical"
                category="Smart Contract"
                description="A potential integer overflow was identified in the reward calculation of the staking contract."
                agent="Analyzer Agent"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex items-center justify-center space-x-2 py-4">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            ...
          </Button>
          <Button variant="outline" size="sm">
            8
          </Button>
          <Button variant="outline" size="sm">
            9
          </Button>
          <Button variant="outline" size="sm">
            10
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

interface SecurityReportCardProps {
  title: string
  date: string
  severity: "critical" | "high" | "medium" | "low"
  category: string
  description: string
  agent: string
}

function SecurityReportCard({ title, date, severity, category, description, agent }: SecurityReportCardProps) {
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
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${severityColor[severity]}`} />
            <Badge variant={severityVariant[severity]}>{severity}</Badge>
            <Badge variant="outline">{category}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">{date}</div>
        </div>
        <CardTitle className="mt-2 line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        <div className="mt-4 text-sm">
          <span className="text-muted-foreground">Discovered by: </span>
          <span className="font-medium">{agent}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/reports/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Full Report
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
