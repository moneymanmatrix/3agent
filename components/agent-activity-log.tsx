"use client"

import { useState, useEffect } from "react"
import {
  BugIcon as Spider,
  Search,
  BookOpen,
  Lightbulb,
  Wrench,
  Github,
  AlertCircle,
  CheckCircle,
  Info,
} from "lucide-react"

const agentIcons = {
  "Scraper Agent": Spider,
  "Analyzer Agent": Search,
  "Researcher Agent": BookOpen,
  "Solution Architect": Lightbulb,
  "Toolsmith Agent": Wrench,
  "GitHub Manager": Github,
}

const statusIcons = {
  info: Info,
  warning: AlertCircle,
  success: CheckCircle,
}

const statusColors = {
  info: "text-blue-500",
  warning: "text-yellow-500",
  success: "text-green-500",
}

const initialLogs = [
  {
    id: 1,
    agent: "Scraper Agent",
    message: "Started monitoring Twitter for new vulnerability disclosures",
    timestamp: "2023-06-15T14:32:00",
    status: "info",
  },
  {
    id: 2,
    agent: "Analyzer Agent",
    message: "Analyzing new vulnerability in DeFi Protocol X",
    timestamp: "2023-06-15T14:35:00",
    status: "info",
  },
  {
    id: 3,
    agent: "Researcher Agent",
    message: "Gathering additional context for Protocol X vulnerability",
    timestamp: "2023-06-15T14:40:00",
    status: "info",
  },
  {
    id: 4,
    agent: "Analyzer Agent",
    message: "Completed analysis of Protocol X vulnerability - Critical severity",
    timestamp: "2023-06-15T14:45:00",
    status: "warning",
  },
  {
    id: 5,
    agent: "Solution Architect",
    message: "Generated mitigation strategies for Protocol X vulnerability",
    timestamp: "2023-06-15T14:50:00",
    status: "success",
  },
  {
    id: 6,
    agent: "GitHub Manager",
    message: "Published report for Protocol X vulnerability",
    timestamp: "2023-06-15T15:00:00",
    status: "success",
  },
]

export function AgentActivityLog() {
  const [logs, setLogs] = useState(initialLogs)

  // Simulate new log entries
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const agents = Object.keys(agentIcons)
        const statuses = Object.keys(statusIcons)
        const messages = [
          "Scanning for new vulnerabilities",
          "Analyzing smart contract code",
          "Researching similar vulnerabilities",
          "Generating mitigation strategies",
          "Evaluating security tools",
          "Updating GitHub repository",
        ]

        const newLog = {
          id: logs.length + 1,
          agent: agents[Math.floor(Math.random() * agents.length)],
          message: messages[Math.floor(Math.random() * messages.length)],
          timestamp: new Date().toISOString(),
          status: statuses[Math.floor(Math.random() * statuses.length)],
        }

        setLogs((prev) => [newLog, ...prev.slice(0, 9)])
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [logs])

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="space-y-4">
      {logs.map((log) => {
        const AgentIcon = agentIcons[log.agent]
        const StatusIcon = statusIcons[log.status]

        return (
          <div key={log.id} className="flex items-start gap-3 p-3 border rounded-lg">
            <div className="p-2 bg-primary/10 rounded-md text-primary">
              <AgentIcon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium">{log.agent}</span>
                <span className="text-sm text-muted-foreground">{formatTimestamp(log.timestamp)}</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <StatusIcon className={`h-4 w-4 ${statusColors[log.status]}`} />
                <span>{log.message}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
