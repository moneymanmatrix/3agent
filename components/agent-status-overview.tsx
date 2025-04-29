"use client"

import { useState, useEffect } from "react"
import { BugIcon as Spider, Search, BookOpen, Lightbulb, Wrench, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function AgentStatusOverview() {
  const [agents, setAgents] = useState([
    { name: "Scraper Agent", icon: Spider, status: "active", findings: 0 },
    { name: "Analyzer Agent", icon: Search, status: "active", findings: 0 },
    { name: "Researcher Agent", icon: BookOpen, status: "active", findings: 0 },
    { name: "Solution Architect", icon: Lightbulb, status: "active", findings: 0 },
    { name: "Toolsmith Agent", icon: Wrench, status: "active", findings: 0 },
    { name: "GitHub Manager", icon: Github, status: "active", findings: 0 },
  ])

  // Simulate agent activity
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prevAgents) =>
        prevAgents.map((agent) => {
          // Randomly increment findings for some agents
          if (Math.random() > 0.7) {
            return { ...agent, findings: agent.findings + 1 }
          }
          return agent
        }),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4">
      {agents.map((agent, index) => {
        const Icon = agent.icon
        return (
          <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
            <div className="p-2 bg-primary/10 rounded-md text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{agent.name}</div>
              <div className="text-sm text-muted-foreground">Findings: {agent.findings}</div>
            </div>
            <Badge variant={agent.status === "active" ? "success" : "outline"} className="ml-auto">
              {agent.status}
            </Badge>
          </div>
        )
      })}
    </div>
  )
}
