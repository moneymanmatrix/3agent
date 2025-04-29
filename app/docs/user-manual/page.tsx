import { BookOpen, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UserManualPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn how to set up and start using Web3 Sentinel",
      link: "/docs/user-manual/getting-started",
    },
    {
      title: "Scraper Agent",
      description: "How to configure and use the Scraper Agent to monitor for vulnerabilities",
      link: "/docs/user-manual/scraper-agent",
    },
    {
      title: "Analyzer Agent",
      description: "Understanding the Analyzer Agent's technical analysis capabilities",
      link: "/docs/user-manual/analyzer-agent",
    },
    {
      title: "Researcher Agent",
      description: "Leveraging the Researcher Agent for comprehensive security research",
      link: "/docs/user-manual/researcher-agent",
    },
    {
      title: "Solution Architect",
      description: "Using the Solution Architect to develop mitigation strategies",
      link: "/docs/user-manual/solution-architect",
    },
    {
      title: "Toolsmith Agent",
      description: "Finding and using security tools with the Toolsmith Agent",
      link: "/docs/user-manual/toolsmith-agent",
    },
    {
      title: "GitHub Manager",
      description: "Managing and publishing security findings with the GitHub Manager",
      link: "/docs/user-manual/github-manager",
    },
    {
      title: "Reports",
      description: "Creating, viewing, and managing security reports",
      link: "/docs/user-manual/reports",
    },
    {
      title: "API Integration",
      description: "Integrating Web3 Sentinel with your own applications",
      link: "/docs/user-manual/api-integration",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <BookOpen className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">User Manual</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Comprehensive documentation to help you get the most out of Web3 Sentinel
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
            <p className="text-gray-300 mb-6">
              Web3 Sentinel is a multi-agent system designed to monitor, analyze, and secure the web3 ecosystem. This
              user manual provides detailed information on how to use each component of the system effectively.
            </p>
            <p className="text-gray-300">
              Whether you're a security researcher, developer, or project manager, this documentation will help you
              leverage Web3 Sentinel's capabilities to enhance your security posture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <Link key={index} href={section.link} className="block">
                <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                  <p className="text-gray-400 mb-4">{section.description}</p>
                  <div className="flex items-center text-primary">
                    <span>Read more</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              If you can't find what you're looking for in the documentation, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">Contact Support</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/faq">View FAQ</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
