import { Github, Code, BookOpen, MessageSquare, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Github className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contribute to Web3 Sentinel</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Join our community and help secure the web3 ecosystem</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Why Contribute?</h2>
            <p className="text-gray-300 mb-6">
              Web3 Sentinel is an open-source project dedicated to improving security in the web3 ecosystem. By
              contributing, you'll:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Make Web3 More Secure</h3>
                  <p className="text-gray-300">
                    Help protect users and projects from security vulnerabilities and exploits.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Grow Your Skills</h3>
                  <p className="text-gray-300">
                    Gain experience with cutting-edge security techniques and technologies.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Join a Community</h3>
                  <p className="text-gray-300">Collaborate with like-minded security researchers and developers.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Build Your Reputation</h3>
                  <p className="text-gray-300">Establish yourself as a contributor to web3 security.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 flex flex-col h-full">
              <div className="bg-primary/20 p-3 rounded-lg w-fit mb-6 text-primary">
                <Code className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Code Contributions</h2>
              <p className="text-gray-300 mb-6">
                Help us improve our codebase by fixing bugs, adding features, or optimizing performance.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6 flex-1">
                <li>• Fix issues and bugs</li>
                <li>• Implement new features</li>
                <li>• Improve performance</li>
                <li>• Write tests</li>
                <li>• Refactor code</li>
              </ul>
              <Button asChild className="mt-auto">
                <a href="https://github.com/web3sentinel/repo" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Repository
                </a>
              </Button>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 flex flex-col h-full">
              <div className="bg-primary/20 p-3 rounded-lg w-fit mb-6 text-primary">
                <BookOpen className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Documentation</h2>
              <p className="text-gray-300 mb-6">
                Help us improve our documentation to make Web3 Sentinel more accessible to users and contributors.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6 flex-1">
                <li>• Improve existing documentation</li>
                <li>• Write tutorials and guides</li>
                <li>• Create examples</li>
                <li>• Translate documentation</li>
                <li>• Fix typos and errors</li>
              </ul>
              <Button asChild variant="outline" className="mt-auto">
                <a href="/docs/user-manual">
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Documentation
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 flex flex-col h-full">
              <div className="bg-primary/20 p-3 rounded-lg w-fit mb-6 text-primary">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Community Support</h2>
              <p className="text-gray-300 mb-6">
                Help grow our community by answering questions, providing support, and sharing knowledge.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6 flex-1">
                <li>• Answer questions in our forums</li>
                <li>• Help new users get started</li>
                <li>• Share your knowledge and expertise</li>
                <li>• Report bugs and issues</li>
                <li>• Provide feedback on features</li>
              </ul>
              <Button asChild variant="outline" className="mt-auto">
                <a href="https://discord.gg/web3sentinel" target="_blank" rel="noopener noreferrer">
                  Join Our Discord
                </a>
              </Button>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 flex flex-col h-full">
              <div className="bg-primary/20 p-3 rounded-lg w-fit mb-6 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Security Research</h2>
              <p className="text-gray-300 mb-6">
                Contribute your security expertise by researching vulnerabilities and developing mitigation strategies.
              </p>
              <ul className="space-y-2 text-gray-300 mb-6 flex-1">
                <li>• Research new attack vectors</li>
                <li>• Analyze smart contract vulnerabilities</li>
                <li>• Develop security tools</li>
                <li>• Create security guidelines</li>
                <li>• Share security insights</li>
              </ul>
              <Button asChild variant="outline" className="mt-auto">
                <a href="/blog">Read Our Security Blog</a>
              </Button>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">Contribution Guidelines</h2>
            <p className="text-gray-300 mb-6">
              To ensure a smooth contribution process, please follow these guidelines:
            </p>
            <ol className="space-y-4 text-gray-300 list-decimal pl-6">
              <li>
                <strong>Fork the Repository:</strong> Start by forking the repository to your GitHub account.
              </li>
              <li>
                <strong>Create a Branch:</strong> Create a branch for your contribution with a descriptive name.
              </li>
              <li>
                <strong>Follow Coding Standards:</strong> Adhere to our coding standards and style guidelines.
              </li>
              <li>
                <strong>Write Tests:</strong> Ensure your code is covered by appropriate tests.
              </li>
              <li>
                <strong>Document Your Changes:</strong> Update documentation to reflect your changes.
              </li>
              <li>
                <strong>Submit a Pull Request:</strong> Submit a pull request with a clear description of your changes.
              </li>
            </ol>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <a
                  href="https://github.com/web3sentinel/repo/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Full Contribution Guidelines
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
