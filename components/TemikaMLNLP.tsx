"use client"

interface TemikaMLNLPProps {
  isOpen: boolean
  onClose: () => void
}

export function TemikaMLNLP({ isOpen, onClose }: TemikaMLNLPProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-background p-6 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Temika ML NLP</h2>
        <p className="mb-4">This is a placeholder for the Temika ML NLP interface.</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

