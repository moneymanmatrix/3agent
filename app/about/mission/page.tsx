import { Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Shield className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Securing the web3 ecosystem through advanced multi-agent intelligence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Purpose</h2>
            <p className="text-gray-300 mb-6">
              Web3 Sentinel exists to protect and strengthen the web3 ecosystem by providing advanced security
              monitoring, analysis, and mitigation strategies. We believe that security is foundational to the success
              and adoption of blockchain technology and decentralized applications.
            </p>
            <p className="text-gray-300">
              Our multi-agent system works tirelessly to identify vulnerabilities, analyze exploits, research security
              patterns, and develop solutions that help developers and organizations build more secure web3
              applications.
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Core Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Security First</h3>
                  <p className="text-gray-300">
                    We prioritize security in everything we do, believing that robust security is essential for the
                    growth and adoption of web3 technologies.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Transparency</h3>
                  <p className="text-gray-300">
                    We operate with complete transparency, sharing our methodologies, findings, and solutions openly
                    with the community.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Collaboration</h3>
                  <p className="text-gray-300">
                    We believe in the power of collaboration and actively work with developers, security researchers,
                    and organizations to improve web3 security.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Innovation</h3>
                  <p className="text-gray-300">
                    We continuously innovate and improve our multi-agent system to stay ahead of emerging threats and
                    security challenges.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Approach</h2>
            <p className="text-gray-300 mb-6">
              Web3 Sentinel takes a comprehensive approach to web3 security through our specialized agents:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong>Scraper Agent:</strong> Continuously monitors the web for the latest exploits and
                vulnerabilities.
              </li>
              <li>
                <strong>Analyzer Agent:</strong> Performs deep technical analysis of identified security issues.
              </li>
              <li>
                <strong>Researcher Agent:</strong> Researches and curates information related to blockchain security.
              </li>
              <li>
                <strong>Solution Architect:</strong> Develops mitigation strategies and security solutions.
              </li>
              <li>
                <strong>Toolsmith Agent:</strong> Gathers and evaluates security tools for vulnerability assessment.
              </li>
              <li>
                <strong>GitHub Manager:</strong> Manages and publishes security findings and resources.
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/about/team">
              <Button size="lg" className="mr-4">
                Meet Our Team
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
