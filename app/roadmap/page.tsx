import { Map, CheckCircle, Circle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function RoadmapPage() {
  const roadmapItems = [
    {
      title: "Q2 2023",
      status: "completed",
      items: [
        { name: "Initial platform launch", status: "completed" },
        { name: "Scraper Agent implementation", status: "completed" },
        { name: "Analyzer Agent basic functionality", status: "completed" },
        { name: "Researcher Agent integration", status: "completed" },
        { name: "Public beta release", status: "completed" },
      ],
    },
    {
      title: "Q3 2023",
      status: "in-progress",
      items: [
        { name: "Enhanced vulnerability detection patterns", status: "completed" },
        { name: "Solution Architect advanced features", status: "completed" },
        { name: "Toolsmith Agent expansion", status: "in-progress" },
        { name: "API access for developers", status: "in-progress" },
        { name: "Integration with popular development environments", status: "planned" },
      ],
    },
    {
      title: "Q4 2023",
      status: "planned",
      items: [
        { name: "Real-time monitoring system", status: "planned" },
        { name: "Advanced machine learning models for vulnerability detection", status: "planned" },
        { name: "Customizable security rules and policies", status: "planned" },
        { name: "Expanded blockchain support beyond Ethereum", status: "planned" },
        { name: "Enterprise security dashboard", status: "planned" },
      ],
    },
    {
      title: "Q1 2024",
      status: "planned",
      items: [
        { name: "Automated security auditing", status: "planned" },
        { name: "Formal verification integration", status: "planned" },
        { name: "Security scoring system for projects", status: "planned" },
        { name: "Collaborative security analysis features", status: "planned" },
        { name: "Advanced reporting and analytics", status: "planned" },
      ],
    },
    {
      title: "Q2 2024",
      status: "planned",
      items: [
        { name: "Decentralized security oracle", status: "planned" },
        { name: "On-chain security attestations", status: "planned" },
        { name: "Integration with major DeFi protocols", status: "planned" },
        { name: "Security-as-a-Service API expansion", status: "planned" },
        { name: "Community-driven security database", status: "planned" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "planned":
        return <Circle className="h-5 w-5 text-gray-500" />
      default:
        return <Circle className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-amber-500">In Progress</Badge>
      case "planned":
        return <Badge variant="outline">Planned</Badge>
      default:
        return <Badge variant="outline">Planned</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Map className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Roadmap</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Our vision and planned development timeline for Web3 Sentinel
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative pl-8 border-l-2 border-gray-800 space-y-12">
            {roadmapItems.map((quarter, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] bg-gray-900 p-2 rounded-full border-4 border-gray-800">
                  {getStatusIcon(quarter.status)}
                </div>

                <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{quarter.title}</h2>
                    {getStatusBadge(quarter.status)}
                  </div>

                  <div className="space-y-4">
                    {quarter.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        {getStatusIcon(item.status)}
                        <span className="ml-3 text-gray-300">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Future Vision</h2>
            <p className="text-gray-300 mb-6">
              Beyond our current roadmap, we envision Web3 Sentinel evolving into a comprehensive security ecosystem
              that:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Decentralized Security Network</h3>
                  <p>
                    Creates a decentralized network of security validators and researchers working together to secure
                    the web3 ecosystem.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Predictive Security Intelligence</h3>
                  <p>Leverages advanced AI to predict and prevent security threats before they can be exploited.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Security Standards Development</h3>
                  <p>Contributes to the development of security standards and best practices for the web3 industry.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Security Education Platform</h3>
                  <p>Provides comprehensive security education and training for developers, auditors, and users.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Our roadmap is continuously evolving based on community feedback and emerging security needs in the web3
              ecosystem.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Share Your Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
