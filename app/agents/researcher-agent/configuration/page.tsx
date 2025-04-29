"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Trash2, Save, AlertCircle, BookOpen } from "lucide-react"
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

interface ResearchSource {
  id: string
  name: string
  url: string
  category: string
  type: string
  active: boolean
}

export default function ResearcherAgentConfiguration() {
  const [dataSources, setDataSources] = useState<ResearchSource[]>([
    {
      id: "1",
      name: "Ethereum Research Forum",
      url: "https://ethresear.ch",
      category: "Web3",
      type: "Forum",
      active: true,
    },
    {
      id: "2",
      name: "Blockchain Security Database",
      url: "https://blocksec.info",
      category: "Security",
      type: "Database",
      active: true,
    },
    {
      id: "3",
      name: "DeFi Vulnerabilities Archive",
      url: "https://defi-security.archive.org",
      category: "DeFi",
      type: "Archive",
      active: true,
    },
  ])

  const [newSource, setNewSource] = useState<Partial<ResearchSource>>({
    name: "",
    url: "",
    category: "Web3",
    type: "Website",
    active: true,
  })

  const [showAlert, setShowAlert] = useState(false)
  const [queryText, setQueryText] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("exploits")
  const [selectedEngine, setSelectedEngine] = useState("llm")

  const addDataSource = () => {
    if (!newSource.name || !newSource.url) {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
      return
    }

    if (dataSources.length >= 10) {
      alert("Maximum of 10 data sources allowed")
      return
    }

    const newId = (dataSources.length + 1).toString()
    setDataSources([...dataSources, { ...(newSource as ResearchSource), id: newId }])
    setNewSource({
      name: "",
      url: "",
      category: "Web3",
      type: "Website",
      active: true,
    })
  }

  const removeDataSource = (id: string) => {
    setDataSources(dataSources.filter((source) => source.id !== id))
  }

  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb
            items={[{ label: "Researcher Agent", href: "/agents/researcher-agent" }, { label: "Configuration" }]}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Researcher Agent Configuration</h1>
            <p className="text-muted-foreground mt-1">Configure research topics, sources, and search parameters</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/researcher-agent">
              <Button variant="outline">View Research</Button>
            </Link>
            <Link href="/agents/researcher-agent/research">
              <Button variant="outline">Active Research</Button>
            </Link>
            <Button>Save Configuration</Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="topics" className="w-full">
            <TabsList>
              <TabsTrigger value="topics">Research Topics</TabsTrigger>
              <TabsTrigger value="sources">Data Sources</TabsTrigger>
              <TabsTrigger value="settings">Search Settings</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="topics" className="space-y-6 py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Research Query Configuration</CardTitle>
                  <CardDescription>Configure your research topics and queries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="research-topic">Research Topic</Label>
                    <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exploits">Exploits</SelectItem>
                        <SelectItem value="vulnerabilities">Vulnerabilities</SelectItem>
                        <SelectItem value="solutions">Solutions</SelectItem>
                        <SelectItem value="tools">Tools</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Select the primary focus of your research</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="research-domain">Research Domain</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="cursor-pointer hover:bg-primary">Web3</Badge>
                      <Badge className="cursor-pointer" variant="outline">
                        Crypto
                      </Badge>
                      <Badge className="cursor-pointer" variant="outline">
                        Blockchain
                      </Badge>
                      <Badge className="cursor-pointer" variant="outline">
                        DeFi
                      </Badge>
                      <Badge className="cursor-pointer" variant="outline">
                        NFT
                      </Badge>
                      <Badge className="cursor-pointer" variant="outline">
                        Smart Contracts
                      </Badge>
                      <Badge className="cursor-pointer" variant="outline">
                        Layer 2
                      </Badge>
                      <Badge className="cursor-pointer" variant="outline">
                        Cross-Chain
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Select domains to focus your research (click to toggle)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="research-query">Research Query</Label>
                    <Textarea
                      id="research-query"
                      placeholder="Enter your research query or question..."
                      value={queryText}
                      onChange={(e) => setQueryText(e.target.value)}
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground">
                      Enter a specific query or question for the research agent to investigate
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="search-engine">Search Engine</Label>
                    <Select value={selectedEngine} onValueChange={setSelectedEngine}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select search engine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="llm">LLM Research Agent</SelectItem>
                        <SelectItem value="web">Web Search</SelectItem>
                        <SelectItem value="academic">Academic Papers</SelectItem>
                        <SelectItem value="combined">Combined Approach</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Select the method to use for gathering research</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="include-exploits" defaultChecked />
                      <Label htmlFor="include-exploits">Include Exploits</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-vulnerabilities" defaultChecked />
                      <Label htmlFor="include-vulnerabilities">Include Vulnerabilities</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-solutions" defaultChecked />
                      <Label htmlFor="include-solutions">Include Solutions</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-tools" defaultChecked />
                      <Label htmlFor="include-tools">Include Tools</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-related" defaultChecked />
                      <Label htmlFor="include-related">Include Related Topics</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-research" defaultChecked />
                      <Label htmlFor="include-research">Include Academic Research</Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    <BookOpen className="mr-2 h-4 w-4" /> Start Research
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="sources" className="space-y-6 py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Research Source</CardTitle>
                  <CardDescription>Add a website, database, or API for research</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {showAlert && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>Please fill in all required fields (Name and URL).</AlertDescription>
                    </Alert>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="source-name">Source Name</Label>
                      <Input
                        id="source-name"
                        placeholder="e.g., Ethereum Research Forum"
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
                      <Label htmlFor="source-category">Category</Label>
                      <Select
                        value={newSource.category}
                        onValueChange={(value) => setNewSource({ ...newSource, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Web3">Web3</SelectItem>
                          <SelectItem value="Security">Security</SelectItem>
                          <SelectItem value="DeFi">DeFi</SelectItem>
                          <SelectItem value="NFT">NFT</SelectItem>
                          <SelectItem value="Academic">Academic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="source-type">Source Type</Label>
                      <Select
                        value={newSource.type}
                        onValueChange={(value) => setNewSource({ ...newSource, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Website">Website</SelectItem>
                          <SelectItem value="Forum">Forum</SelectItem>
                          <SelectItem value="Database">Database</SelectItem>
                          <SelectItem value="API">API</SelectItem>
                          <SelectItem value="Archive">Archive</SelectItem>
                          <SelectItem value="Journal">Academic Journal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                </CardContent>
                <CardFooter>
                  <Button onClick={addDataSource} className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Research Source
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Configured Research Sources ({dataSources.length}/10)</CardTitle>
                  <CardDescription>Manage your existing research sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dataSources.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        No research sources configured. Add one above.
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
                                <span className="font-medium">Category:</span> {source.category}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                <span className="font-medium">Type:</span> {source.type}
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
                  <CardTitle>Search Settings</CardTitle>
                  <CardDescription>Configure global settings for all research</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="search-depth">Search Depth</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select depth" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="shallow">Shallow (Faster)</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="deep">Deep (Thorough)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                      <Input id="time-limit" type="number" defaultValue="30" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="max-results">Max Results</Label>
                      <Input id="max-results" type="number" defaultValue="100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="result-freshness">Result Freshness</Label>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue placeholder="Select freshness" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="day">Past 24 hours</SelectItem>
                          <SelectItem value="week">Past week</SelectItem>
                          <SelectItem value="month">Past month</SelectItem>
                          <SelectItem value="year">Past year</SelectItem>
                          <SelectItem value="any">Any time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Research Priorities</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="priority-relevance" className="text-sm">
                          Relevance
                        </Label>
                        <Input id="priority-relevance" type="range" min="1" max="10" defaultValue="8" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority-recency" className="text-sm">
                          Recency
                        </Label>
                        <Input id="priority-recency" type="range" min="1" max="10" defaultValue="6" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority-authority" className="text-sm">
                          Authority
                        </Label>
                        <Input id="priority-authority" type="range" min="1" max="10" defaultValue="7" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority-depth" className="text-sm">
                          Depth
                        </Label>
                        <Input id="priority-depth" type="range" min="1" max="10" defaultValue="5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Settings</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="include-academic" defaultChecked />
                        <Label htmlFor="include-academic">Include Academic Sources</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="include-forums" defaultChecked />
                        <Label htmlFor="include-forums">Include Forums</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="include-news" defaultChecked />
                        <Label htmlFor="include-news">Include News Sources</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="include-github" defaultChecked />
                        <Label htmlFor="include-github">Include GitHub</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Search Settings</Button>
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
                    <Label htmlFor="api-keys">API Keys (Optional)</Label>
                    <Textarea
                      id="api-keys"
                      placeholder='{"google_scholar": "key_123", "semantic_scholar": "key_456"}'
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground">
                      Enter API keys in JSON format for additional research sources
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-prompts">Custom LLM Prompts</Label>
                    <Textarea
                      id="custom-prompts"
                      placeholder="Enter custom prompts for the research agent..."
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground">
                      Customize how the LLM research agent processes and analyzes information
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="research-model">Research Model</Label>
                    <Select defaultValue="gpt-4">
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt-4">GPT-4</SelectItem>
                        <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                        <SelectItem value="claude-3">Claude 3</SelectItem>
                        <SelectItem value="llama-3">Llama 3</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">Select the LLM model to use for research analysis</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Advanced Features</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-rag" defaultChecked />
                        <Label htmlFor="enable-rag">Enable RAG</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-citations" defaultChecked />
                        <Label htmlFor="enable-citations">Generate Citations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-summarization" defaultChecked />
                        <Label htmlFor="enable-summarization">Auto-Summarization</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="enable-fact-checking" />
                        <Label htmlFor="enable-fact-checking">Fact Checking</Label>
                      </div>
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
