import { Code, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ApiDocumentationPage() {
  const endpoints = [
    {
      name: "GET /api/exploits",
      description: "Retrieve a list of exploits with optional filtering",
      link: "/docs/api/exploits",
    },
    {
      name: "GET /api/vulnerabilities",
      description: "Retrieve a list of vulnerabilities with optional filtering",
      link: "/docs/api/vulnerabilities",
    },
    {
      name: "GET /api/analysis/:id",
      description: "Retrieve detailed analysis for a specific vulnerability",
      link: "/docs/api/analysis",
    },
    {
      name: "GET /api/solutions",
      description: "Retrieve security solutions with optional filtering",
      link: "/docs/api/solutions",
    },
    {
      name: "GET /api/tools",
      description: "Retrieve security tools with optional filtering",
      link: "/docs/api/tools",
    },
    {
      name: "POST /api/reports",
      description: "Create a new security report",
      link: "/docs/api/reports",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Code className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">API Documentation</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Integrate Web3 Sentinel's security capabilities into your own applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
            <p className="text-gray-300 mb-6">
              The Web3 Sentinel API allows you to programmatically access our security data and features. This
              documentation provides information about the available endpoints, authentication, and usage examples.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300 font-mono">Base URL: https://api.web3sentinel.io/v1</p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Authentication</h2>
            <p className="text-gray-300 mb-6">
              All API requests require authentication using an API key. You can obtain an API key from your account
              dashboard.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
              <p className="text-gray-300 font-mono">Authorization: Bearer YOUR_API_KEY</p>
            </div>
            <p className="text-gray-300">
              Include this header with all your API requests to authenticate your application.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Endpoints</h2>
            <p className="text-gray-300 mb-6">The following endpoints are available in the Web3 Sentinel API:</p>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Link key={index} href={endpoint.link} className="block">
                  <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-mono text-primary">{endpoint.name}</h3>
                        <p className="text-gray-400 text-sm mt-1">{endpoint.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Example Usage</h2>
            <p className="text-gray-300 mb-6">
              Here's an example of how to use the API to retrieve a list of vulnerabilities:
            </p>
            <div className="bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto">
              <pre className="text-gray-300 font-mono text-sm">
                {`fetch('https://api.web3sentinel.io/v1/vulnerabilities?severity=critical', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
              </pre>
            </div>
            <p className="text-gray-300">This will return a list of critical vulnerabilities in JSON format.</p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Rate Limits</h2>
            <p className="text-gray-300 mb-6">
              To ensure fair usage of our API, we implement rate limiting. The current limits are:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
              <li>Free tier: 100 requests per hour</li>
              <li>Pro tier: 1,000 requests per hour</li>
              <li>Enterprise tier: Custom limits</li>
            </ul>
            <p className="text-gray-300">
              If you exceed these limits, you'll receive a 429 Too Many Requests response.
            </p>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <a href="/contact">Contact Us for API Access</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
