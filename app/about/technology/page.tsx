import { Code, Database, Server, Cpu, Lock, GitBranch } from "lucide-react"

export default function TechnologyPage() {
  const technologies = [
    {
      category: "Frontend",
      items: [
        { name: "Next.js", description: "React framework for server-rendered applications" },
        { name: "TypeScript", description: "Typed superset of JavaScript for improved developer experience" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
        { name: "Framer Motion", description: "Animation library for React applications" },
      ],
      icon: <Code className="h-8 w-8" />,
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", description: "JavaScript runtime for server-side applications" },
        { name: "Supabase", description: "Open source Firebase alternative with PostgreSQL" },
        { name: "Next.js API Routes", description: "Serverless functions for API endpoints" },
      ],
      icon: <Server className="h-8 w-8" />,
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", description: "Advanced open-source relational database" },
        { name: "Supabase", description: "Database management and real-time subscriptions" },
      ],
      icon: <Database className="h-8 w-8" />,
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "OpenAI API", description: "Advanced language models for natural language processing" },
        { name: "Custom Multi-Agent System", description: "Specialized agents for different security tasks" },
        { name: "Vector Embeddings", description: "For semantic search and similarity analysis" },
      ],
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      category: "Security",
      items: [
        { name: "JWT Authentication", description: "Secure authentication mechanism" },
        { name: "Role-Based Access Control", description: "Fine-grained permission management" },
        { name: "API Rate Limiting", description: "Protection against abuse and DoS attacks" },
      ],
      icon: <Lock className="h-8 w-8" />,
    },
    {
      category: "DevOps",
      items: [
        { name: "Vercel", description: "Deployment platform for frontend and serverless functions" },
        { name: "GitHub Actions", description: "CI/CD pipeline for automated testing and deployment" },
        { name: "Docker", description: "Containerization for consistent development environments" },
      ],
      icon: <GitBranch className="h-8 w-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <Cpu className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology Stack</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            The powerful technologies behind Web3 Sentinel's security platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary/20 p-3 rounded-lg mr-4 text-primary">{tech.icon}</div>
                <h2 className="text-2xl font-bold">{tech.category}</h2>
              </div>
              <ul className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why We Chose These Technologies</h2>
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800">
            <p className="text-gray-300 mb-6">
              Our technology stack was carefully selected to provide a balance of performance, security, and developer
              experience. We prioritize modern, well-maintained technologies that allow us to rapidly iterate and
              improve our platform while maintaining the highest security standards.
            </p>
            <p className="text-gray-300">
              The multi-agent architecture at the core of Web3 Sentinel requires technologies that can handle complex,
              asynchronous workflows and process large amounts of security data in real-time. Our stack enables us to
              build a system that is both powerful and scalable, capable of monitoring the ever-evolving web3 security
              landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
