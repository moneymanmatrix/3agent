import { NextResponse } from "next/server"

// Mock database of reports
const mockReports = [
  {
    id: 1,
    title: "Reentrancy Vulnerability in DeFi Protocol X",
    date: "2023-06-15",
    severity: "critical",
    category: "Smart Contract",
    description:
      "A critical reentrancy vulnerability was discovered in Protocol X's liquidity pool contract that could lead to fund drainage.",
    agent: "Analyzer Agent",
    status: "published",
    details: {
      technicalDetails:
        "The vulnerability exists in the withdraw function which updates the user's balance after transferring funds, allowing an attacker to recursively call the withdraw function before the balance is updated.",
      impactAssessment:
        "This vulnerability could lead to complete drainage of the liquidity pool, potentially resulting in millions of dollars in losses.",
      recommendations: [
        "Update the withdraw function to follow the checks-effects-interactions pattern",
        "Implement reentrancy guards",
        "Consider using OpenZeppelin's ReentrancyGuard",
      ],
    },
  },
  {
    id: 2,
    title: "Unprotected Admin Functions in Token Y",
    date: "2023-06-12",
    severity: "high",
    category: "Smart Contract",
    description: "Token Y has unprotected admin functions that could allow the owner to arbitrarily modify balances.",
    agent: "Scraper Agent",
    status: "published",
    details: {
      technicalDetails:
        "The contract includes functions like setBalance and adjustSupply that are not properly protected with access controls or time locks.",
      impactAssessment:
        "The contract owner could arbitrarily modify user balances or token supply, potentially leading to token value manipulation.",
      recommendations: [
        "Implement proper access control mechanisms",
        "Add time locks for sensitive operations",
        "Consider implementing a multi-signature scheme for admin functions",
      ],
    },
  },
  {
    id: 3,
    title: "Front-Running Vulnerability in DEX Z",
    date: "2023-06-10",
    severity: "medium",
    category: "DeFi",
    description: "DEX Z is vulnerable to front-running attacks due to predictable transaction ordering.",
    agent: "Researcher Agent",
    status: "published",
    details: {
      technicalDetails:
        "The DEX does not implement any front-running protection mechanisms, allowing miners or other users to observe pending transactions and insert their own transactions ahead with higher gas prices.",
      impactAssessment:
        "Users may experience slippage and unfavorable trade execution, potentially leading to financial losses.",
      recommendations: [
        "Implement commit-reveal schemes",
        "Consider using batch auctions",
        "Add minimum return parameters to protect users from excessive slippage",
      ],
    },
  },
]

// GET handler to retrieve reports
export async function GET(request: Request) {
  // Get URL parameters
  const { searchParams } = new URL(request.url)
  const severity = searchParams.get("severity")
  const category = searchParams.get("category")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  // Filter reports based on parameters
  let filteredReports = [...mockReports]

  if (severity) {
    filteredReports = filteredReports.filter((report) => report.severity === severity)
  }

  if (category) {
    filteredReports = filteredReports.filter((report) => report.category === category)
  }

  // Limit the number of reports
  filteredReports = filteredReports.slice(0, limit)

  return NextResponse.json({
    success: true,
    reports: filteredReports,
    total: mockReports.length,
    filtered: filteredReports.length,
  })
}

// POST handler to create a new report
export async function POST(request: Request) {
  try {
    const reportData = await request.json()

    // Validate required fields
    if (!reportData.title || !reportData.severity || !reportData.category || !reportData.description) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, this would save to a database
    // For demo purposes, we'll just return the report with an ID
    const newReport = {
      id: mockReports.length + 1,
      ...reportData,
      date: reportData.date || new Date().toISOString().split("T")[0],
      status: "draft",
    }

    return NextResponse.json({
      success: true,
      message: "Report created successfully",
      report: newReport,
    })
  } catch (error) {
    console.error("Error creating report:", error)
    return NextResponse.json(
      { success: false, message: "Failed to create report", error: error.message },
      { status: 500 },
    )
  }
}
