"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Search,
  BookOpen,
  Play,
  Pause,
  RefreshCw,
  Edit,
  Trash2,
  Clock,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentBreadcrumb } from "@/components/agent-breadcrumb"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

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

// Mock data for active sources
const initialSources = [
  {
    id: "1",
    domain: "ethresear.ch",
    category: "Web3",
    type: "Forum",
    items: 124,
    active: true,
    lastScraped: "2023-06-15 14:30",
    status: "running",
  },
  {
    id: "2",
    domain: "blocksec.info",
    category: "Security",
    type: "Database",
    items: 260,
    active: true,
    lastScraped: "2023-06-15 13:45",
    status: "running",
  },
  {
    id: "3",
    domain: "defi-security.archive.org",
    category: "DeFi",
    type: "Archive",
    items: 60,
    active: true,
    lastScraped: "2023-06-15 12:20",
    status: "running",
  },
  {
    id: "4",
    domain: "github.com/ethereum",
    category: "Web3",
    type: "Repository",
    items: 420,
    active: true,
    lastScraped: "2023-06-15 11:10",
    status: "running",
  },
  {
    id: "5",
    domain: "arxiv.org",
    category: "Academic",
    type: "Journal",
    items: 42,
    active: true,
    lastScraped: "2023-06-15 10:05",
    status: "running",
  },
]

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sources, setSources] = useState(initialSources)
  const [stats, setStats] = useState({
    sources: 5,
    contents: 782,
    queues: 0,
    loadingErrors: 16,
    scrapingErrors: 3,
    success: 729,
  })
  const [queryText, setQueryText] = useState("Reentrancy vulnerabilities in DeFi protocols")
  const [isEditing, setIsEditing] = useState(false)

  const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams()
  const vulnerabilityParam = urlParams.get("vulnerability")

  useEffect(() => {
    if (vulnerabilityParam) {
      setQueryText(`${vulnerabilityParam} vulnerabilities in Web3 and DeFi protocols`)
    }
  }, [vulnerabilityParam])

  // Simulate research activity
  useEffect(() => {
    const interval = setInterval(() => {
      setSources((prev) =>
        prev.map((source) => {
          // Randomly update status
          if (Math.random() > 0.8) {
            const statuses = ["running", "paused", "error", "completed"]
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
            return { ...source, status: randomStatus }
          }
          return source
        }),
      )

      // Randomly update stats
      setStats((prev) => ({
        ...prev,
        contents: prev.contents + Math.floor(Math.random() * 5),
        queues: Math.floor(Math.random() * 3),
        success: prev.success + Math.floor(Math.random() * 5),
        loadingErrors: prev.loadingErrors + (Math.random() > 0.9 ? 1 : 0),
        scrapingErrors: prev.scrapingErrors + (Math.random() > 0.95 ? 1 : 0),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const toggleSourceStatus = (id: string) => {
    setSources((prev) =>
      prev.map((source) =>
        source.id === id
          ? {
              ...source,
              status: source.status === "running" ? "paused" : "running",
              active: source.status === "running" ? false : true,
            }
          : source,
      ),
    )
  }

  const restartSource = (id: string) => {
    setSources((prev) =>
      prev.map((source) => (source.id === id ? { ...source, status: "running", active: true } : source)),
    )
  }

  const deleteSource = (id: string) => {
    setSources((prev) => prev.filter((source) => source.id !== id))
    setStats((prev) => ({
      ...prev,
      sources: prev.sources - 1,
    }))
  }

  // Filter sources based on search query
  const filteredSources = sources.filter(
    (source) =>
      source.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb
            items={[{ label: "Researcher Agent", href: "/agents/researcher-agent" }, { label: "Active Research" }]}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Active Research</h1>
            <p className="text-muted-foreground mt-1">Monitor and manage ongoing research processes</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/researcher-agent/configuration">
              <Button variant="outline">Configuration</Button>
            </Link>
            <Link href="/agents/researcher-agent">
              <Button variant="outline">View Results</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>Current Research Query</span>
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}>
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Cancel" : "Edit"}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <Textarea
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                    rows={3}
                    className="w-full"
                  />
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setIsEditing(false)}>Update Query</Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">"{queryText}"</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Pause className="mr-2 h-4 w-4" />
                      Pause
                    </Button>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Restart
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <BookOpen className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-3xl font-bold">{stats.sources}</div>
                <p className="text-sm text-muted-foreground">Sources</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <Search className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-3xl font-bold">{stats.contents}</div>
                <p className="text-sm text-muted-foreground">Items Found</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <Clock className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-3xl font-bold">{stats.queues}</div>
                <p className="text-sm text-muted-foreground">Queues</p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mb-2" />
                <div className="text-3xl font-bold">{stats.loadingErrors}</div>
                <p className="text-sm text-muted-foreground">Loading Errors</p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <AlertCircle className="h-8 w-8 text-red-500 mb-2" />
                <div className="text-3xl font-bold">{stats.scrapingErrors}</div>
                <p className="text-sm text-muted-foreground">Research Errors</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                <div className="text-3xl font-bold">{stats.success}</div>
                <p className="text-sm text-muted-foreground">Success</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Research Sources</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <RefreshCw className="h-3.5 w-3.5 mr-1" /> Refresh
                  </Button>
                  <Button size="sm" className="h-8">
                    <BookOpen className="h-3.5 w-3.5 mr-1" /> Add Source
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredSources.length} of {sources.length} sources
                </div>
                <div className="relative w-64">
                  <Input
                    placeholder="Search sources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Domain</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSources.map((source) => (
                      <TableRow key={source.id}>
                        <TableCell className="font-medium">
                          <a
                            href={`https://${source.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {source.domain}
                          </a>
                        </TableCell>
                        <TableCell>{source.category}</TableCell>
                        <TableCell>{source.type}</TableCell>
                        <TableCell>{source.items}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              source.status === "running"
                                ? "success"
                                : source.status === "paused"
                                  ? "outline"
                                  : source.status === "error"
                                    ? "destructive"
                                    : "default"
                            }
                          >
                            {source.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{source.lastScraped}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => toggleSourceStatus(source.id)}
                            >
                              {source.status === "running" ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => restartSource(source.id)}
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:text-red-700"
                              onClick={() => deleteSource(source.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredSources.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No sources found matching your search criteria.
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Research Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sources.map((source) => (
                  <div key={source.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{source.domain}</div>
                      <Badge
                        variant={
                          source.status === "running"
                            ? "success"
                            : source.status === "paused"
                              ? "outline"
                              : source.status === "error"
                                ? "destructive"
                                : "default"
                        }
                      >
                        {source.status}
                      </Badge>
                    </div>
                    <Progress
                      value={
                        source.status === "running"
                          ? Math.floor(Math.random() * 60) + 40
                          : source.status === "completed"
                            ? 100
                            : source.status === "paused"
                              ? 50
                              : 30
                      }
                      className={
                        source.status === "running"
                          ? "bg-blue-100"
                          : source.status === "error"
                            ? "bg-red-100"
                            : "bg-gray-100"
                      }
                    />
                    <div className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="exploits" className="w-full">
            <TabsList>
              <TabsTrigger value="exploits">Exploits</TabsTrigger>
              <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            <TabsContent value="exploits" className="py-4">
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Research in Progress</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Researcher Agent is currently gathering and analyzing information about exploits. Results will
                  appear here as they are discovered.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="vulnerabilities" className="py-4">
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Vulnerabilities Research in Progress</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Researcher Agent is currently gathering information about vulnerabilities. Results will appear
                  here as they are discovered.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="py-4">
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Solutions Research in Progress</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Researcher Agent is currently gathering information about solutions. Results will appear here as
                  they are discovered.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="py-4">
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Tools Research in Progress</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Researcher Agent is currently gathering information about security tools. Results will appear here
                  as they are discovered.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="related" className="py-4">
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Related Topics Research in Progress</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Researcher Agent is currently gathering information about related topics. Results will appear here
                  as they are discovered.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="research" className="py-4">
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Academic Research in Progress</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Researcher Agent is currently gathering academic research papers. Results will appear here as they
                  are discovered.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
