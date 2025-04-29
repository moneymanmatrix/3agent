"use client"

import { useState } from "react"
import { HelpCircle, ChevronDown, ChevronUp, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const faqItems = [
    {
      question: "What is Web3 Sentinel?",
      answer:
        "Web3 Sentinel is a multi-agent system designed to monitor, analyze, and secure the web3 ecosystem. It uses specialized agents to identify vulnerabilities, analyze exploits, research security patterns, and develop solutions for web3 applications.",
    },
    {
      question: "How does the Scraper Agent work?",
      answer:
        "The Scraper Agent continuously monitors various sources across the web for information about new exploits, vulnerabilities, and security incidents in the web3 space. It collects this data and feeds it to other agents in the system for further analysis.",
    },
    {
      question: "What types of vulnerabilities can the Analyzer Agent detect?",
      answer:
        "The Analyzer Agent can detect a wide range of vulnerabilities in smart contracts and web3 applications, including but not limited to: reentrancy vulnerabilities, integer overflow/underflow, access control issues, flash loan attacks, front-running vulnerabilities, and more.",
    },
    {
      question: "How can I contribute to Web3 Sentinel?",
      answer:
        "You can contribute to Web3 Sentinel in several ways: by submitting code contributions on GitHub, improving documentation, reporting bugs, suggesting features, or sharing your security research. Visit our Contribute page for more information.",
    },
    {
      question: "Is Web3 Sentinel open source?",
      answer:
        "Yes, Web3 Sentinel is an open-source project. We believe in transparency and community collaboration to improve web3 security. You can find our source code on GitHub and contribute to the project.",
    },
    {
      question: "How accurate are the vulnerability detections?",
      answer:
        "While we strive for high accuracy, no security tool is perfect. Web3 Sentinel uses a combination of static analysis, pattern matching, and machine learning to identify potential vulnerabilities. We recommend using our platform as part of a comprehensive security strategy that includes manual code reviews and formal audits.",
    },
    {
      question: "Can Web3 Sentinel analyze my private smart contracts?",
      answer:
        "Yes, you can submit your smart contracts for private analysis. Your code will be analyzed in a secure environment, and the results will only be accessible to you. We do not store or share your private code without explicit permission.",
    },
    {
      question: "How often is the security database updated?",
      answer:
        "Our security database is updated continuously. The Scraper Agent monitors sources 24/7, and new vulnerabilities, exploits, and security patterns are added to the database as soon as they are discovered and verified.",
    },
    {
      question: "Do you offer security audits?",
      answer:
        "Web3 Sentinel itself is an automated security analysis platform. While we don't directly offer manual security audits, our platform can help identify potential security issues that should be addressed. For comprehensive security audits, we recommend working with professional audit firms.",
    },
    {
      question: "How can I report a security vulnerability in Web3 Sentinel?",
      answer:
        "If you discover a security vulnerability in Web3 Sentinel itself, please report it responsibly by emailing security@web3sentinel.io. We take security seriously and will address reported vulnerabilities promptly.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <HelpCircle className="h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-400 max-w-3xl">Find answers to common questions about Web3 Sentinel</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search questions..."
              className="bg-gray-900 border-gray-800 pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full p-6 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-medium">{item.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6 text-gray-300">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-400">
                No questions found matching your search. Try a different query.
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Feel free to reach out to our support team.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
