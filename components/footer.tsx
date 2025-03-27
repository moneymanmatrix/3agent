"use client"

import Link from "next/link"
import { Shield, Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo and About */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-primary mb-4">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-lg">Web3 Sentinel</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Advanced multi-agent system for monitoring, analyzing, and securing the web3 ecosystem.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </Link>
              <Link href="mailto:support@web3sentinel.io" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-400 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/mission" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Mission Statement
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Team/Developers
                </Link>
              </li>
              <li>
                <Link href="/about/technology" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Technology Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Legal & Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@web3sentinel.io"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  support@web3sentinel.io
                </Link>
              </li>
            </ul>
          </div>

          {/* Contribute & Documentation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contribute" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/docs/user-manual" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  User Manual
                </Link>
              </li>
              <li>
                <Link href="/docs/api" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Security Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/web3sentinel/repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center"
                >
                  GitHub Repository
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Showcase
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} Web3 Sentinel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

