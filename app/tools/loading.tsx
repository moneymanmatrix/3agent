import { Shield } from "lucide-react"

export default function ToolsLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="animate-pulse flex items-center justify-center mb-4">
          <Shield className="h-12 w-12 text-primary mr-2" />
          <h1 className="text-3xl font-bold">Loading Tools...</h1>
        </div>
        <div className="w-full max-w-md h-10 bg-gray-200 dark:bg-gray-700 rounded-md mb-8 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 animate-pulse">
            <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="flex space-x-2 mb-4">
              <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-full"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
