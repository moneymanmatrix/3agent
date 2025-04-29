"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { TemikaMLNLP } from "./TemikaMLNLP"

export function AiChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleTemikaMLNLP = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Floating Temika ML NLP button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTemikaMLNLP}
        aria-label="Open Temika ML NLP"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Temika ML NLP interface */}
      <TemikaMLNLP isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
