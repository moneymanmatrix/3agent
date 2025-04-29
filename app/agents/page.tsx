import type React from "react"
import Link from "next/link"
import {
  BugIcon as Spider,
  Search,
  BookOpen,
  Lightbulb,
  Wrench,
  Github,
  ArrowRight,
  Play,
  Pause,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AgentActivityLog } from "@/components/agent-activity-log"

export default function AgentsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Agent Management</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Start All
            </Button>
            <Button variant="outline" size="sm">
              <Pause className="mr-2 h-4 w-4" />
              Pause All
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="logs">Activity Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="py-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AgentCard
                title="Scraper Agent"
                description="Monitors the web for the latest exploits and vulnerabilities"
                icon={<Spider className="h-8 w-8" />}
                status="active"
                lastActivity="2 minutes ago"
                findings={12}
                configLink="/agents/scraper-agent/configuration"
                detailsLink="/agents/scraper-agent/details"
                activeLink="/agents/scraper-agent/active"
              />

              <AgentCard
                title="Analyzer Agent"
                description="Performs technical analysis of identified exploits"
                icon={<Search className="h-8 w-8" />}
                status="active"
                lastActivity="5 minutes ago"
                findings={8}
                detailsLink="/agents/analyzer-agent"
              />

              <AgentCard
                title="Researcher Agent"
                description="Researches and curates blockchain security information"
                icon={<BookOpen className="h-8 w-8" />}
                status="active"
                lastActivity="10 minutes ago"
                findings={15}
                detailsLink="/agents/researcher-agent"
                configLink="/agents/researcher-agent/configuration"
                activeLink="/agents/researcher-agent/research"
              />

              <AgentCard
                title="Solution Architect"
                description="Suggests solutions to mitigate vulnerabilities"
                icon={<Lightbulb className="h-8 w-8" />}
                status="active"
                lastActivity="15 minutes ago"
                findings={6}
                detailsLink="/agents/solution-architect"
                configLink="/agents/solution-architect/configuration"
                activeLink="/agents/solution-architect/generate"
              />

              <AgentCard
                title="Toolsmith Agent"
                description="Gathers and evaluates security tools"
                icon={<Wrench className="h-8 w-8" />}
                status="active"
                lastActivity="20 minutes ago"
                findings={10}
                detailsLink="/agents/toolsmith-agent"
                configLink="/agents/toolsmith-agent/configuration"
                activeLink="/agents/toolsmith-agent/tools"
              />

              <AgentCard
                title="GitHub Manager"
                description="Manages the project's GitHub presence"
                icon={<Github className="h-8 w-8" />}
                status="active"
                lastActivity="30 minutes ago"
                findings={4}
                detailsLink="/agents/github-manager"
                configLink="/agents/github-manager/configuration"
                activeLink="/agents/github-manager/activity"
              />
            </div>
          </TabsContent>

          <TabsContent value="status" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Agent Status</CardTitle>
                <CardDescription>Real-time status of all agents in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 font-medium">
                    <div>Agent</div>
                    <div>Status</div>
                    <div>Resources</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Spider className="h-4 w-4" />
                      <span>Scraper Agent</span>
                    </div>
                    <div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div>CPU: 15%, RAM: 120MB</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4" />
                      <span>Analyzer Agent</span>
                    </div>
                    <div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div>CPU: 25%, RAM: 180MB</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Researcher Agent</span>
                    </div>
                    <div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div>CPU: 20%, RAM: 150MB</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      <span>Solution Architect</span>
                    </div>
                    <div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div>CPU: 18%, RAM: 140MB</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4" />
                      <span>Toolsmith Agent</span>
                    </div>
                    <div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div>CPU: 12%, RAM: 110MB</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      <span>GitHub Manager</span>
                    </div>
                    <div>
                      <Badge variant="success">Active</Badge>
                    </div>
                    <div>CPU: 8%, RAM: 90MB</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="configuration" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Agent Configuration</CardTitle>
                <CardDescription>Configure the behavior and parameters of each agent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Select an agent to configure its parameters, data sources, and behavior.
                </p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Scraper Agent",
                      icon: <Spider className="h-5 w-5" />,
                      link: "/agents/scraper-agent/configuration",
                    },
                    {
                      name: "Analyzer Agent",
                      icon: <Search className="h-5 w-5" />,
                      link: "/agents/analyzer-agent",
                    },
                    {
                      name: "Researcher Agent",
                      icon: <BookOpen className="h-5 w-5" />,
                      link: "/agents/researcher-agent/configuration",
                    },
                    {
                      name: "Solution Architect",
                      icon: <Lightbulb className="h-5 w-5" />,
                      link: "/agents/solution-architect/configuration",
                    },
                    {
                      name: "Toolsmith Agent",
                      icon: <Wrench className="h-5 w-5" />,
                      link: "/agents/toolsmith-agent/configuration",
                    },
                    {
                      name: "GitHub Manager",
                      icon: <Github className="h-5 w-5" />,
                      link: "/agents/github-manager/configuration",
                    },
                  ].map((agent, index) => (
                    <Link key={index} href={agent.link}>
                      <Button variant="outline" className="h-auto py-4 justify-start w-full">
                        <div className="flex items-center gap-2">
                          {agent.icon}
                          <span>{agent.name}</span>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Logs</CardTitle>
                <CardDescription>Recent activity from all agents in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <AgentActivityLog />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface AgentCardProps {
  title: string
  description: string
  icon: React.ReactNode
  status: "active" | "inactive" | "error"
  lastActivity: string
  findings: number
  configLink?: string
  detailsLink?: string
  activeLink?: string
}

function AgentCard({
  title,
  description,
  icon,
  status,
  lastActivity,
  findings,
  configLink,
  detailsLink,
  activeLink,
}: AgentCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-primary/10 rounded-md text-primary">{icon}</div>
          <Badge variant={status === "active" ? "success" : status === "inactive" ? "outline" : "destructive"}>
            {status}
          </Badge>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="text-muted-foreground">Last Activity:</div>
          <div>{lastActivity}</div>
          <div className="text-muted-foreground">Findings:</div>
          <div>{findings}</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          {configLink ? (
            <Link href={configLink}>
              <Button variant="ghost" size="sm">
                Configure
              </Button>
            </Link>
          ) : (
            <Button variant="ghost" size="sm" disabled>
              Configure
            </Button>
          )}
          <div className="flex gap-2">
            {activeLink && (
              <Link href={activeLink}>
                <Button size="sm" variant="outline">
                  Active
                </Button>
              </Link>
            )}
            {detailsLink ? (
              <Link href={detailsLink}>
                <Button size="sm">Details</Button>
              </Link>
            ) : (
              <Button size="sm" disabled>
                Details
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
