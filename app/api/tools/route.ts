import { NextResponse } from "next/server"

// Mock database of security tools
const mockTools = [
  {
    id: 1,
    title: "Slither",
    category: "Analysis",
    description:
      "A Solidity static analysis framework that runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses.",
    language: "Python",
    stars: 4500,
    lastUpdated: "2 days ago",
    githubUrl: "https://github.com/crytic/slither",
    installCommand: "pip install slither-analyzer",
    useCases: ["Detect common vulnerabilities", "Visualize contract inheritance", "Extract contract information"],
  },
  {
    id: 2,
    title: "MythX",
    category: "Analysis",
    description:
      "A security analysis platform for Ethereum smart contracts. It performs multiple types of analysis, including static analysis, symbolic execution and fuzzing.",
    language: "Multiple",
    stars: 1200,
    lastUpdated: "1 week ago",
    githubUrl: "https://github.com/ConsenSys/mythx-cli",
    installCommand: "pip install mythx-cli",
    useCases: ["Comprehensive smart contract security analysis", "CI/CD integration", "Detailed vulnerability reports"],
  },
  {
    id: 3,
    title: "Echidna",
    category: "Testing",
    description:
      "A property-based fuzzer for Ethereum smart contracts. It uses sophisticated grammar-based fuzzing campaigns to find vulnerabilities in smart contracts.",
    language: "Haskell",
    stars: 1800,
    lastUpdated: "3 days ago",
    githubUrl: "https://github.com/crytic/echidna",
    installCommand: "docker pull trailofbits/echidna",
    useCases: ["Fuzz testing smart contracts", "Property-based testing", "Finding edge cases in contract logic"],
  },
]

// GET handler to retrieve tools
export async function GET(request: Request) {
  // Get URL parameters
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const language = searchParams.get("language")

  // Filter tools based on parameters
  let filteredTools = [...mockTools]

  if (category) {
    filteredTools = filteredTools.filter((tool) => tool.category === category)
  }

  if (language) {
    filteredTools = filteredTools.filter((tool) => tool.language === language)
  }

  return NextResponse.json({
    success: true,
    tools: filteredTools,
    total: mockTools.length,
    filtered: filteredTools.length,
  })
}

// POST handler to add a new tool
export async function POST(request: Request) {
  try {
    const toolData = await request.json()

    // Validate required fields
    if (!toolData.title || !toolData.category || !toolData.description) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, this would save to a database
    // For demo purposes, we'll just return the tool with an ID
    const newTool = {
      id: mockTools.length + 1,
      ...toolData,
      stars: toolData.stars || 0,
      lastUpdated: "Just now",
    }

    return NextResponse.json({
      success: true,
      message: "Tool added successfully",
      tool: newTool,
    })
  } catch (error) {
    console.error("Error adding tool:", error)
    return NextResponse.json({ success: false, message: "Failed to add tool", error: error.message }, { status: 500 })
  }
}
