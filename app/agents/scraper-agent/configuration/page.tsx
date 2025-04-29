"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Trash2, Save, AlertCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

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

interface DataSource {
  id: string
  name: string
  url: string
  frequency: string
  elements: string
  active: boolean
}

export default function ScraperAgentConfiguration() {
  const [dataSources, setDataSources] = useState<DataSource[]>([
    {
      id: "1",
      name: "Ethereum Blog",
      url: "https://blog.ethereum.org",
      frequency: "daily",
      elements: ".post-content, .post-title, .post-date",
      active: true,
    },
    {
      id: "2",
      name: "Web3 Security Forum",
      url: "https://web3security.forum.com",
      frequency: "hourly",
      elements: ".thread-title, .thread-content, .vulnerability-tag",
      active: true,
    },
  ])

  const [newSource, setNewSource] = useState<Partial<DataSource>>({
    name: "",
    url: "",
    frequency: "daily",
    elements: "",
    active: true,
  })

  const [showAlert, setShowAlert] = useState(false)

  const addDataSource = () => {
    if (!newSource.name || !newSource.url || !newSource.elements) {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
      return
    }

    if (dataSources.length >= 10) {
      alert("Maximum of 10 data sources allowed")
      return
    }

    const newId = (dataSources.length + 1).toString()
    setDataSources([...dataSources, { ...(newSource as DataSource), id: newId }])
    setNewSource({
      name: "",
      url: "",
      frequency: "daily",
      elements: "",
      active: true,
    })
  }

  const removeDataSource = (id: string) => {
    setDataSources(dataSources.filter((source) => source.id !== id))
  }

  const updateDataSource = (id: string, field: keyof DataSource, value: string | boolean) => {
    setDataSources(dataSources.map((source) => (source.id === id ? { ...source, [field]: value } : source)))
  }

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Scraper Agent Configuration</h1>
            <p className="text-muted-foreground mt-1">Configure data sources for the scraper agent</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/scraper-agent/details">
              <Button variant="outline">View Details</Button>
            </Link>
            <Link href="/agents/scraper-agent/active">
              <Button variant="outline">Active Scrapers</Button>
            </Link>
            <Button>Save Configuration</Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="sources" className="w-full">
            <TabsList>
              <TabsTrigger value="sources">Data Sources</TabsTrigger>
              <TabsTrigger value="settings">Global Settings</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="sources" className="space-y-6 py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Data Source</CardTitle>
                  <CardDescription>Add a website or API to scrape for security information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {showAlert && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        Please fill in all required fields (Name, URL, and Elements to Scrape).
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="source-name">Source Name</Label>
                      <Input
                        id="source-name"
                        placeholder="e.g., Ethereum Blog"
                        value={newSource.name}
                        onChange={(e) => setNewSource({ ...newSource, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="source-url">URL</Label>
                      <Input
                        id="source-url"
                        placeholder="https://example.com"
                        value={newSource.url}
                        onChange={(e) => setNewSource({ ...newSource, url: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="source-frequency">Scraping Frequency</Label>
                      <Select
                        value={newSource.frequency}
                        onValueChange={(value) => setNewSource({ ...newSource, frequency: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="source-active">Active</Label>
                      <div className="flex items-center space-x-2 pt-2">
                        <Switch
                          id="source-active"
                          checked={newSource.active}
                          onCheckedChange={(checked) => setNewSource({ ...newSource, active: checked })}
                        />
                        <Label htmlFor="source-active">Enable this data source</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="source-elements">Elements to Scrape (CSS Selectors)</Label>
                    <Textarea
                      id="source-elements"
                      placeholder=".article-content, .vulnerability-title, .exploit-code"
                      value={newSource.elements}
                      onChange={(e) => setNewSource({ ...newSource, elements: e.target.value })}
                    />
                    <p className="text-sm text-muted-foreground">
                      Enter CSS selectors separated by commas to target specific elements
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={addDataSource} className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Data Source
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configured Data Sources ({dataSources.length}/10)</CardTitle>
                  <CardDescription>Manage your existing data sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dataSources.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        No data sources configured. Add one above.
                      </div>
                    ) : (
                      dataSources.map((source) => (
                        <motion.div
                          key={source.id}
                          className="border rounded-lg p-4 relative"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ type: "spring", stiffness: 100 }}
                        >
                          <div className="absolute top-4 right-4 flex gap-2">
                            <Badge variant={source.active ? "success" : "outline"}>
                              {source.active ? "Active" : "Inactive"}
                            </Badge>
                            <Button variant="destructive" size="icon" onClick={() => removeDataSource(source.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pr-24">
                            <div>
                              <h3 className="font-medium">{source.name}</h3>
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-500 hover:underline"
                              >
                                {source.url}
                              </a>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">
                                <span className="font-medium">Frequency:</span> {source.frequency}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <span className="font-medium">Elements:</span> {source.elements}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="text-sm text-muted-foreground">{10 - dataSources.length} slots remaining</div>
                  <Button variant="outline">
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Global Scraper Settings</CardTitle>
                  <CardDescription>Configure global settings for all scrapers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="user-agent">User Agent</Label>
                      <Input id="user-agent" defaultValue="Mozilla/5.0 (compatible; Web3SecurityBot/1.0)" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="request-timeout">Request Timeout (seconds)</Label>
                      <Input id="request-timeout" type="number" defaultValue="30" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="max-retries">Max Retries</Label>
                      <Input id="max-retries" type="number" defaultValue="3" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="retry-delay">Retry Delay (seconds)</Label>
                      <Input id="retry-delay" type="number" defaultValue="5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Respect robots.txt</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="robots-txt" defaultChecked />
                      <Label htmlFor="robots-txt">Follow robots.txt directives</Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Global Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Configuration</CardTitle>
                  <CardDescription>Advanced settings for experienced users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="proxy-settings">Proxy Settings (Optional)</Label>
                    <Input id="proxy-settings" placeholder="http://username:password@proxy.example.com:8080" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-headers">Custom Headers (JSON)</Label>
                    <Textarea
                      id="custom-headers"
                      placeholder='{"Authorization": "Bearer token", "Custom-Header": "Value"}'
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="javascript-execution">JavaScript Execution</Label>
                    <div className="flex items-center space-x-2">
                      <Switch id="javascript-execution" />
                      <Label htmlFor="javascript-execution">Execute JavaScript (uses more resources)</Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Advanced Settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
