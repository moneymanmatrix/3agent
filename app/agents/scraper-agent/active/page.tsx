"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Play,
  Pause,
  RefreshCw,
  Trash2,
  Edit,
  Cloud,
  FileText,
  Clock,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

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

// Mock data for active scrapers
const initialScrapers = [
  {
    id: "1",
    domain: "ilmucoding.com",
    adminEmail: "admin@ilmucoding.com",
    links: 124,
    active: true,
    lastScraped: "2023-06-15 14:30",
    status: "running",
  },
  {
    id: "2",
    domain: "santrikoding.com",
    adminEmail: "admin@santrikoding.com",
    links: 260,
    active: true,
    lastScraped: "2023-06-15 13:45",
    status: "running",
  },
  {
    id: "3",
    domain: "teknocerdas.com",
    adminEmail: "admin@teknocerdas.com",
    links: 60,
    active: true,
    lastScraped: "2023-06-15 12:20",
    status: "running",
  },
  {
    id: "4",
    domain: "www.petanikode.com",
    adminEmail: "admin@petanikode.com",
    links: 420,
    active: true,
    lastScraped: "2023-06-15 11:10",
    status: "running",
  },
  {
    id: "5",
    domain: "www.sinaungoding.com",
    adminEmail: "admin@sinaungoding.com",
    links: 42,
    active: true,
    lastScraped: "2023-06-15 10:05",
    status: "running",
  },
]

export default function ActiveScraper() {
  const [scrapers, setScrapers] = useState(initialScrapers)
  const [stats, setStats] = useState({
    domains: 5,
    contents: 782,
    queues: 0,
    loadingErrors: 16,
    scrapingErrors: 3,
    success: 729,
  })
  const [searchQuery, setSearchQuery] = useState("")

  // Simulate scraper activity
  useEffect(() => {
    const interval = setInterval(() => {
      setScrapers((prev) =>
        prev.map((scraper) => {
          // Randomly update status
          if (Math.random() > 0.8) {
            const statuses = ["running", "paused", "error", "completed"]
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
            return { ...scraper, status: randomStatus }
          }
          return scraper
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

  const toggleScraperStatus = (id: string) => {
    setScrapers((prev) =>
      prev.map((scraper) =>
        scraper.id === id
          ? {
              ...scraper,
              status: scraper.status === "running" ? "paused" : "running",
              active: scraper.status === "running" ? false : true,
            }
          : scraper,
      ),
    )
  }

  const restartScraper = (id: string) => {
    setScrapers((prev) =>
      prev.map((scraper) => (scraper.id === id ? { ...scraper, status: "running", active: true } : scraper)),
    )
  }

  const deleteScraper = (id: string) => {
    setScrapers((prev) => prev.filter((scraper) => scraper.id !== id))
    setStats((prev) => ({
      ...prev,
      domains: prev.domains - 1,
    }))
  }

  // Filter scrapers based on search query
  const filteredScrapers = scrapers.filter(
    (scraper) =>
      scraper.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scraper.adminEmail.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Active Scrapers</h1>
            <p className="text-muted-foreground mt-1">Monitor and manage running scraper processes</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/scraper-agent/configuration">
              <Button variant="outline">Configuration</Button>
            </Link>
            <Link href="/agents/scraper-agent/details">
              <Button variant="outline">View Details</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <Cloud className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-3xl font-bold">{stats.domains}</div>
                <p className="text-sm text-muted-foreground">Domains</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <FileText className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-3xl font-bold">{stats.contents}</div>
                <p className="text-sm text-muted-foreground">Contents</p>
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
                <p className="text-sm text-muted-foreground">Scraping Errors</p>
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
                <div>
                  <CardTitle>Domain List</CardTitle>
                  <CardDescription>Manage your active scraper domains</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <RefreshCw className="h-3.5 w-3.5 mr-1" /> Refresh
                  </Button>
                  <Button size="sm" className="h-8">
                    <Cloud className="h-3.5 w-3.5 mr-1" /> New Domain
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredScrapers.length} of {scrapers.length} domains
                </div>
                <div className="relative w-64">
                  <Input
                    placeholder="Search domains..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Domain</TableHead>
                      <TableHead>Admin Email</TableHead>
                      <TableHead>Links</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Scraped</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredScrapers.map((scraper) => (
                      <TableRow key={scraper.id}>
                        <TableCell className="font-medium">
                          <a
                            href={`https://${scraper.domain}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {scraper.domain}
                          </a>
                        </TableCell>
                        <TableCell>{scraper.adminEmail}</TableCell>
                        <TableCell>{scraper.links}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              scraper.status === "running"
                                ? "success"
                                : scraper.status === "paused"
                                  ? "outline"
                                  : scraper.status === "error"
                                    ? "destructive"
                                    : "default"
                            }
                          >
                            {scraper.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{scraper.lastScraped}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => toggleScraperStatus(scraper.id)}
                            >
                              {scraper.status === "running" ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => restartScraper(scraper.id)}
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
                              onClick={() => deleteScraper(scraper.id)}
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

              {filteredScrapers.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No domains found matching your search criteria.
                </div>
              )}

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">Page 1 of 1</div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="px-3 min-w-8">
                    1
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Scraper Activity</CardTitle>
              <CardDescription>Real-time monitoring of scraper processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scrapers.map((scraper) => (
                  <div key={scraper.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{scraper.domain}</div>
                      <Badge
                        variant={
                          scraper.status === "running"
                            ? "success"
                            : scraper.status === "paused"
                              ? "outline"
                              : scraper.status === "error"
                                ? "destructive"
                                : "default"
                        }
                      >
                        {scraper.status}
                      </Badge>
                    </div>
                    <Progress
                      value={
                        scraper.status === "running"
                          ? Math.floor(Math.random() * 60) + 40
                          : scraper.status === "completed"
                            ? 100
                            : scraper.status === "paused"
                              ? 50
                              : 30
                      }
                      className={
                        scraper.status === "running"
                          ? "bg-blue-100"
                          : scraper.status === "error"
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
      </motion.div>
    </div>
  )
}
