import { Github, GitBranch, GitCommit, GitPullRequest, Clock, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function GitHubPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">GitHub Manager</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <GitBranch className="mr-2 h-4 w-4" />
              Create Branch
            </Button>
            <Button>
              <Github className="mr-2 h-4 w-4" />
              Publish Findings
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Repository Overview</CardTitle>
            <CardDescription>web3-security-multi-agent-system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-4">
              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="text-muted-foreground text-sm">Commits</div>
                <div className="flex items-center gap-2">
                  <GitCommit className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">128</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="text-muted-foreground text-sm">Pull Requests</div>
                <div className="flex items-center gap-2">
                  <GitPullRequest className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">24</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="text-muted-foreground text-sm">Contributors</div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">12</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <div className="text-muted-foreground text-sm">Last Update</div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold">2h ago</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-2">Repository Health</h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Code Quality</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Documentation</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Test Coverage</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">GitHub Pages</h3>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Security Findings Portal</h4>
                        <p className="text-sm text-muted-foreground">Published 3 days ago</p>
                      </div>
                      <Link href="https://example.github.io/web3-security-findings" target="_blank">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="recent-activity" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-3">
            <TabsTrigger value="recent-activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="pending-prs">Pending PRs</TabsTrigger>
            <TabsTrigger value="publish-queue">Publish Queue</TabsTrigger>
          </TabsList>

          <TabsContent value="recent-activity" className="py-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Repository Activity</CardTitle>
                <CardDescription>Latest commits and changes to the repository</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "commit",
                      title: "Add new vulnerability report for DeFi Protocol X",
                      author: "Analyzer Agent",
                      time: "2 hours ago",
                      hash: "8f7e6d5",
                    },
                    {
                      type: "pull-request",
                      title: "Implement new scanning algorithm for NFT contracts",
                      author: "Toolsmith Agent",
                      time: "5 hours ago",
                      number: "#42",
                    },
                    {
                      type: "commit",
                      title: "Update documentation for security best practices",
                      author: "Researcher Agent",
                      time: "1 day ago",
                      hash: "3a2b1c0",
                    },
                    {
                      type: "commit",
                      title: "Fix false positive in reentrancy detection",
                      author: "Solution Architect",
                      time: "2 days ago",
                      hash: "9d8c7b6",
                    },
                    {
                      type: "pull-request",
                      title: "Add new visualization for attack vectors",
                      author: "GitHub Manager",
                      time: "3 days ago",
                      number: "#41",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      {activity.type === "commit" ? (
                        <GitCommit className="h-5 w-5 text-primary mt-1" />
                      ) : (
                        <GitPullRequest className="h-5 w-5 text-primary mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.author} • {activity.time} •
                          {activity.type === "commit" ? ` ${activity.hash}` : ` PR ${activity.number}`}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tab contents would be similar */}
        </Tabs>
      </div>
    </div>
  )
}
