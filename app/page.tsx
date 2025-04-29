"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Menu, X } from "lucide-react"
import { AiChatButton } from "@/components/AiChatButton"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Background animation effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 10000), 100)
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(timer)
    }
  }, [])

  const agentLinks = [
    { name: "Scraper Agent", path: "/agents#scraper" },
    { name: "Analyzer Agent", path: "/agents#analyzer" },
    { name: "Researcher Agent", path: "/agents#researcher" },
    { name: "Solution Architect", path: "/agents#architect" },
    { name: "Toolsmith Agent", path: "/agents#toolsmith" },
    { name: "GitHub Manager", path: "/agents#github" },
  ]

  const mainLinks = [
    { name: "Agents", path: "/agents" },
    { name: "Reports", path: "/reports" },
    { name: "Tools", path: "/tools" },
    { name: "GitHub", path: "/github" },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />

      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Shield className="h-16 w-16 text-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu button */}
      <div className="fixed top-6 right-6 z-40 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-black/50 backdrop-blur-sm"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-30 flex flex-col p-16 pt-24"
          >
            <div className="space-y-6">
              <h2 className="text-xl font-medium mb-4">Main Navigation</h2>
              {mainLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className="block text-2xl py-2 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <h2 className="text-xl font-medium mt-8 mb-4">Agents</h2>
              {agentLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className="block text-lg py-2 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-20 px-6 py-6">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <Shield className="h-6 w-6" />
              <span className="font-bold text-lg hidden sm:inline">Web3 Security Hub</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-sm font-medium transition-colors hover:text-primary relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero section with animated text */}
        <section className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="text-center">
            <AnimatePresence>
              {!isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mb-6"
                >
                  <Shield className="h-16 w-16 mx-auto text-primary mb-4" />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isLoading && (
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="block">Web3 Security</span>
                  <motion.span
                    className="block text-primary mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    Multi-Agent System
                  </motion.span>
                </motion.h1>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isLoading && (
                <motion.p
                  className="max-w-2xl mx-auto text-lg text-gray-400 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  An intelligent system that monitors, analyzes, and helps secure the web3 ecosystem through a network
                  of specialized agents.
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isLoading && (
                <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <Link href="/agents">
                    <motion.button
                      className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore Agents
                    </motion.button>
                  </Link>
                  <Link href="/reports">
                    <motion.button
                      className="px-8 py-3 border border-white/20 rounded-md hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Reports
                    </motion.button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Agent navigation section */}
        <AnimatePresence>
          {!isLoading && (
            <motion.section
              className="py-20 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Agents</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agentLinks.map((agent, index) => (
                    <motion.div
                      key={agent.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    >
                      <Link href={agent.path}>
                        <div className="p-6 border border-white/10 rounded-lg hover:bg-white/5 transition-colors group">
                          <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                            {agent.name}
                          </h3>
                          <p className="text-gray-400 text-sm">{getAgentDescription(agent.name)}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Footer */}
        <AnimatePresence>
          {!isLoading && (
            <motion.footer
              className="py-8 px-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <Shield className="h-5 w-5 mr-2" />
                  <span className="text-sm">Web3 Security Hub</span>
                </div>
                <div className="text-sm text-gray-400">
                  &copy; {new Date().getFullYear()} Web3 Security Hub. All rights reserved.
                </div>
              </div>
            </motion.footer>
          )}
        </AnimatePresence>

        {/* Temika ML NLP Button */}
        <AiChatButton />
      </div>
    </div>
  )
}

function getAgentDescription(agentName: string): string {
  switch (agentName) {
    case "Scraper Agent":
      return "Monitors the web for the latest exploits and vulnerabilities in web3 and DeFi."
    case "Analyzer Agent":
      return "Performs technical analysis of identified exploits and vulnerabilities."
    case "Researcher Agent":
      return "Researches and curates information related to blockchain and web3 security."
    case "Solution Architect":
      return "Suggests potential solutions to mitigate identified vulnerabilities."
    case "Toolsmith Agent":
      return "Gathers and evaluates security tools for vulnerability assessment."
    case "GitHub Manager":
      return "Manages the project's GitHub presence and publishes findings."
    default:
      return ""
  }
}
