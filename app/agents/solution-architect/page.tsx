"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Lightbulb, Settings, Play, ArrowRight } from "lucide-react"

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

export default function SolutionArchitectPage() {
  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb items={[{ label: "Solution Architect" }]} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Solution Architect</h1>
            <p className="text-muted-foreground mt-1">
              Suggests potential solutions to mitigate identified vulnerabilities
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/solution-architect/configuration">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Configuration
              </Button>
            </Link>
            <Link href="/agents/solution-architect/generate">
              <Button>
                <Lightbulb className="mr-2 h-4 w-4" />
                Generate Solution
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Mitigation Strategies</CardTitle>
              <CardDescription>Generate solutions for vulnerabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create detailed mitigation strategies for identified vulnerabilities in smart contracts and web3
                applications.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/agents/solution-architect/generate" className="w-full">
                <Button className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Generate Mitigation
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Patterns</CardTitle>
              <CardDescription>Browse recommended security patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access a library of security patterns and best practices for secure smart contract development.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ArrowRight className="mr-2 h-4 w-4" />
                View Patterns
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Solutions</CardTitle>
              <CardDescription>View recently generated solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access your history of generated mitigation strategies and solutions.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ArrowRight className="mr-2 h-4 w-4" />
                View History
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
