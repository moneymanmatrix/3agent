"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AgentBreadcrumb } from "@/components/agent-breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

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

export default function ToolsmithAgentConfigurationPage() {
  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb
            items={[{ label: "Toolsmith Agent", href: "/agents/toolsmith-agent" }, { label: "Configuration" }]}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Toolsmith Agent Configuration</h1>
            <p className="text-muted-foreground mt-1">Configure tool gathering and evaluation settings</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/toolsmith-agent">
              <Button variant="outline">View Tools</Button>
            </Link>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Configuration
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="general" className="w-full">
            <TabsList>
              <TabsTrigger value="general">General Settings</TabsTrigger>
              <TabsTrigger value="sources">Tool Sources</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6 py-4">
              <Card>
                <CardHeader>
                  <CardTitle>General Configuration</CardTitle>
                  <CardDescription>Configure general settings for the Toolsmith Agent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-recommend" defaultChecked />
                      <Label htmlFor="auto-recommend">Auto-recommend tools for vulnerabilities</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-commercial" defaultChecked />
                      <Label htmlFor="include-commercial">Include commercial tools</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-open-source" defaultChecked />
                      <Label htmlFor="include-open-source">Include open-source tools</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="include-custom" defaultChecked />
                      <Label htmlFor="include-custom">Include custom tools</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sources" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tool Sources</CardTitle>
                  <CardDescription>Configure tool sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">
                    Tool sources configuration will be available soon.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Configuration</CardTitle>
                  <CardDescription>Advanced settings for the Toolsmith Agent</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">
                    Advanced configuration options will be available soon.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  )
}
