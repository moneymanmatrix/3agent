import { Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ChangelogPage() {
  const releases = [
    {
      version: "1.2.0",
      date: "June 15, 2023",
      title: "Enhanced Analysis Capabilities",
      description:
        "This release focuses on improving the Analyzer Agent's capabilities and adding new features to the platform.",
      changes: [
        { type: "feature", description: "Added support for analyzing Solidity v0.8.x contracts" },
        { type: "feature", description: "Implemented new vulnerability detection patterns for flash loan attacks" },
        { type: "improvement", description: "Enhanced the accuracy of reentrancy vulnerability detection" },
        { type: "improvement", description: "Optimized the performance of the Analyzer Agent for faster analysis" },
        {
          type: "fix",
          description: "Fixed an issue where certain complex contract interactions were not properly analyzed",
        },
        { type: "fix", description: "Resolved UI rendering issues in the analysis results page" },
      ],
    },
    {
      version: "1.1.0",
      date: "May 20, 2023",
      title: "Researcher Agent Update",
      description:
        "This release introduces significant improvements to the Researcher Agent and adds new research capabilities.",
      changes: [
        {
          type: "feature",
          description: "Added integration with academic research databases for comprehensive security research",
        },
        { type: "feature", description: "Implemented semantic search for finding related security patterns" },
        { type: "improvement", description: "Enhanced the research report generation with more detailed findings" },
        { type: "improvement", description: "Expanded the security knowledge base with new vulnerability patterns" },
        { type: "fix", description: "Fixed an issue with research source prioritization" },
        { type: "fix", description: "Resolved data synchronization issues between agents" },
      ],
    },
    {
      version: "1.0.0",
      date: "April 10, 2023",
      title: "Initial Release",
      description:
        "The first public release of Web3 Sentinel, introducing the multi-agent security system for web3 applications.",
      changes: [
        { type: "feature", description: "Launched the Scraper Agent for monitoring web3 security incidents" },
        { type: "feature", description: "Introduced the Analyzer Agent for smart contract vulnerability detection" },
        { type: "feature", description: "Released the Researcher Agent for security pattern research" },
        { type: "feature", description: "Implemented the Solution Architect for mitigation strategy development" },
        { type: "feature", description: "Added the Toolsmith Agent for security tool recommendations" },
        { type: "feature", description: "Integrated the GitHub Manager for publishing security findings" },
      ],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-green-500"
      case "improvement":
        return "bg-blue-500"
      case "fix":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Clock className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Changelog</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            A detailed history of updates and improvements to Web3 Sentinel
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-gray-800 space-y-12">
            {releases.map((release, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] bg-gray-900 p-2 rounded-full border-4 border-gray-800">
                  <Tag className="h-5 w-5 text-primary" />
                </div>

                <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h2 className="text-2xl font-bold">v{release.version}</h2>
                    <Badge variant="outline" className="sm:ml-2 w-fit">
                      {release.date}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-medium text-primary mb-2">{release.title}</h3>
                  <p className="text-gray-300 mb-6">{release.description}</p>

                  <div className="space-y-3">
                    {release.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex items-start">
                        <div
                          className={`${getTypeColor(change.type)} w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0`}
                        ></div>
                        <div>
                          <span className="text-sm font-medium capitalize text-gray-400">{change.type}: </span>
                          <span className="text-gray-300">{change.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
