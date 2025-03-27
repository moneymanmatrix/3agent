export default function Loading() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="h-8 w-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        <div className="grid gap-6">
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

