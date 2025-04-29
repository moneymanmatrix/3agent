import { Shield } from "lucide-react"

export default function ReportsLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      <div className="animate-pulse flex flex-col items-center">
        <Shield className="h-12 w-12 text-primary mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Loading Reports...</h2>
        <p className="text-muted-foreground">Retrieving security reports and findings</p>
      </div>

      {/* Skeleton loaders for reports */}
      <div className="w-full max-w-4xl mt-8 space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border border-border rounded-lg p-6 w-full">
            <div className="flex justify-between items-start">
              <div className="space-y-3 w-3/4">
                <div className="h-7 bg-muted rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
              </div>
              <div className="h-10 w-24 bg-muted rounded animate-pulse"></div>
            </div>
            <div className="flex mt-4 space-x-2">
              <div className="h-6 w-16 bg-muted rounded animate-pulse"></div>
              <div className="h-6 w-20 bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
