import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface AgentBreadcrumbProps {
  items: {
    label: string
    href?: string
  }[]
}

export function AgentBreadcrumb({ items }: AgentBreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-4">
      <Link href="/" className="flex items-center hover:text-foreground transition-colors">
        <Home className="h-4 w-4 mr-1" />
        <span>Home</span>
      </Link>
      <ChevronRight className="h-4 w-4 mx-2" />
      <Link href="/agents" className="hover:text-foreground transition-colors">
        Agents
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2" />
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

