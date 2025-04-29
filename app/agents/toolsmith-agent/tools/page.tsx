"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Wrench, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function ToolsmithToolsPage() {
  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb
            items={[{ label: "Toolsmith Agent", href: "/agents/toolsmith-agent" }, { label: "Tools" }]}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Security Tools</h1>
            <p className="text-muted-foreground mt-1">Browse and manage security tools</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/toolsmith-agent">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Toolsmith
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Tools Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-20">
                <Wrench className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-2xl font-bold mb-2">Tools Coming Soon</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The Toolsmith Agent is currently gathering and evaluating security tools. Results will appear here
                  shortly.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
