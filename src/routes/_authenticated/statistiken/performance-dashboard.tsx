import { createFileRoute } from '@tanstack/react-router'
import PerformanceDashboard from "@/features/chats/components/performance/performance-dashboard"
import dfbLogo from "@/assets/images/dfb-logo.png"

export const Route = createFileRoute('/_authenticated/statistiken/performance-dashboard')({
  component: PerformanceDashboardPage,
})

function PerformanceDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-2">
          <p className="text-muted-foreground">
            Techno-Motorische
          </p>
          <h1 className="text-3xl font-bold tracking-tight">Leistungsdiagnostik</h1>
        </div>
        <img 
          src={dfbLogo} 
          alt="DFB Logo" 
          className="h-16 w-auto object-contain"
        />
      </div>
      
      <PerformanceDashboard />
    </div>
  )
} 