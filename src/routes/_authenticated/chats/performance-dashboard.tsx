import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from "@/features/chats/components"

export const Route = createFileRoute('/_authenticated/chats/performance-dashboard')({
  component: PerformanceDashboardPage,
})

function PerformanceDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Performance Dashboard</h1>
        <p className="text-muted-foreground">
          Performance analytics and rankings for athletes.
        </p>
      </div>
      
      <Dashboard />
    </div>
  )
} 