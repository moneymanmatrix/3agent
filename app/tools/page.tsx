import { Search, Filter, Download, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ToolsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Security Tools</h1>
          <Button>Submit Tool</Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tools..." className="w-full pl-8" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="scanning">Scanning</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="py-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SecurityToolCard
                title="Slither"
                category="Analysis"
                description="A Solidity static analysis framework that runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses."
                language="Python"
                stars={4500}
                lastUpdated="2 days ago"
              />

              <SecurityToolCard
                title="MythX"
                category="Analysis"
                description="A security analysis platform for Ethereum smart contracts. It performs multiple types of analysis, including static analysis, symbolic execution and fuzzing."
                language="Multiple"
                stars={1200}
                lastUpdated="1 week ago"
              />

              <SecurityToolCard
                title="Echidna"
                category="Testing"
                description="A property-based fuzzer for Ethereum smart contracts. It uses sophisticated grammar-based fuzzing campaigns to find vulnerabilities in smart contracts."
                language="Haskell"
                stars={1800}
                lastUpdated="3 days ago"
              />

              <SecurityToolCard
                title="Manticore"
                category="Analysis"
                description="A symbolic execution tool for analysis of smart contracts and binaries. It discovers inputs that crash programs through symbolic execution."
                language="Python"
                stars={3200}
                lastUpdated="1 month ago"
              />

              <SecurityToolCard
                title="Securify"
                category="Analysis"
                description="A security scanner for Ethereum smart contracts that checks for common vulnerabilities like reentrancy and transaction ordering dependence."
                language="Java"
                stars={1500}
                lastUpdated="2 months ago"
              />

              <SecurityToolCard
                title="Tenderly"
                category="Monitoring"
                description="A platform for monitoring and alerting of smart contract transactions, with real-time insights into contract execution."
                language="Multiple"
                stars={950}
                lastUpdated="1 week ago"
              />

              <SecurityToolCard
                title="Forta"
                category="Monitoring"
                description="A real-time monitoring network for detecting threats and anomalies on DeFi, NFT, governance, bridges and other Web3 systems."
                language="Multiple"
                stars={1100}
                lastUpdated="5 days ago"
              />

              <SecurityToolCard
                title="Mythril"
                category="Analysis"
                description="A security analysis tool for EVM bytecode. It detects security vulnerabilities in smart contracts built for Ethereum, Hedera, Quorum, Vechain, Roostock, Tron and other EVM-compatible blockchains."
                language="Python"
                stars={2800}
                lastUpdated="2 weeks ago"
              />

              <SecurityToolCard
                title="Web3-Custom-Scanner"
                category="Custom"
                description="A custom-built scanner developed by our Toolsmith Agent to detect specific vulnerabilities in web3 applications."
                language="TypeScript"
                stars={120}
                lastUpdated="1 day ago"
              />
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered by category */}
        </Tabs>
      </div>
    </div>
  )
}

interface SecurityToolCardProps {
  title: string
  category: string
  description: string
  language: string
  stars: number
  lastUpdated: string
}

function SecurityToolCard({ title, category, description, language, stars, lastUpdated }: SecurityToolCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline">{category}</Badge>
          <Badge variant="secondary">{language}</Badge>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <Github className="h-4 w-4" />
          <span>{stars} stars</span>
          <span className="text-muted-foreground">• Updated {lastUpdated}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1">
          <Download className="mr-2 h-4 w-4" />
          Install
        </Button>
        <Link href={`https://github.com/example/${title.toLowerCase()}`} target="_blank" className="flex-1">
          <Button variant="secondary" className="w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
