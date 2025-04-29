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
import { Input } from "@/components/ui/input"

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

export default function GitHubManagerConfigurationPage() {
  return (
    <div className="container py-10">
      <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <AgentBreadcrumb
            items={[{ label: "GitHub Manager", href: "/agents/github-manager" }, { label: "Configuration" }]}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">GitHub Manager Configuration</h1>
            <p className="text-muted-foreground mt-1">Configure GitHub integration and publishing settings</p>
          </div>
          <div className="flex gap-2">
            <Link href="/agents/github-manager">
              <Button variant="outline">View Activity</Button>
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
              <TabsTrigger value="repositories">Repositories</TabsTrigger>
              <TabsTrigger value="publishing">Publishing</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6 py-4">
              <Card>
                <CardHeader>
                  <CardTitle>GitHub Integration</CardTitle>
                  <CardDescription>Configure GitHub integration settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="github-token">GitHub Personal Access Token</Label>
                    <Input id="github-token" type="password" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" />
                    <p className="text-sm text-muted-foreground">
                      Enter your GitHub Personal Access Token with repo and workflow permissions
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-publish" defaultChecked />
                      <Label htmlFor="auto-publish">Auto-publish critical findings</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="create-issues" defaultChecked />
                      <Label htmlFor="create-issues">Create issues for vulnerabilities</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="update-pages" defaultChecked />
                      <Label htmlFor="update-pages">Auto-update GitHub Pages</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="create-prs" defaultChecked />
                      <Label htmlFor="create-prs">Create PRs for fixes</Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="repositories" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Repository Configuration</CardTitle>
                  <CardDescription>Configure GitHub repositories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">
                    Repository configuration will be available soon.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="publishing" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Publishing Settings</CardTitle>
                  <CardDescription>Configure publishing settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-8 text-muted-foreground">Publishing settings will be available soon.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="py-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Configuration</CardTitle>
                  <CardDescription>Advanced settings for the GitHub Manager</CardDescription>
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
