"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Settings, GitBranch, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function GitHubManagerPage() {
  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb items={[{ label: "GitHub Manager" }]} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">GitHub Manager</h1>
            <p className="text-muted-foreground mt-1">Manages the project's GitHub presence and publishes findings</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/github-manager/configuration">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Configuration
              </Button>
            </Link>
            <Link href="/agents/github-manager/activity">
              <Button>
                <Github className="mr-2 h-4 w-4" />
                View Activity
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Repository Management</CardTitle>
              <CardDescription>Manage GitHub repositories</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage your GitHub repositories, branches, and pull requests for security findings.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/agents/github-manager/activity" className="w-full">
                <Button className="w-full">
                  <GitBranch className="mr-2 h-4 w-4" />
                  Manage Repositories
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publish Findings</CardTitle>
              <CardDescription>Publish security findings to GitHub</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Publish security findings, vulnerability reports, and mitigation strategies to GitHub.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ArrowRight className="mr-2 h-4 w-4" />
                Publish Findings
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GitHub Pages</CardTitle>
              <CardDescription>Manage GitHub Pages for documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage GitHub Pages for publishing security documentation, best practices, and findings.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ArrowRight className="mr-2 h-4 w-4" />
                Manage Pages
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
