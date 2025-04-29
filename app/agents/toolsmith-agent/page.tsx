"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Wrench, Settings, Search, ArrowRight } from "lucide-react"

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

export default function ToolsmithAgentPage() {
  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb items={[{ label: "Toolsmith Agent" }]} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Toolsmith Agent</h1>
            <p className="text-muted-foreground mt-1">
              Gathers and evaluates security tools for vulnerability assessment
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/toolsmith-agent/configuration">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Configuration
              </Button>
            </Link>
            <Link href="/agents/toolsmith-agent/tools">
              <Button>
                <Wrench className="mr-2 h-4 w-4" />
                Browse Tools
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Security Tools</CardTitle>
              <CardDescription>Browse security tools for web3</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access a curated collection of security tools for smart contract and web3 application security
                assessment.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/agents/toolsmith-agent/tools" className="w-full">
                <Button className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Tools
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tool Recommendations</CardTitle>
              <CardDescription>Get personalized tool recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive personalized recommendations for security tools based on your specific needs and
                vulnerabilities.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ArrowRight className="mr-2 h-4 w-4" />
                Get Recommendations
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Tools</CardTitle>
              <CardDescription>Develop custom security tools</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Request the development of custom security tools tailored to your specific security needs.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ArrowRight className="mr-2 h-4 w-4" />
                Request Custom Tool
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
