import { Main } from '@/components/layout/main'
import { Timeline } from '@/components/ui/timeline'

// Sample timeline data
const timelineData = [
  {
    title: <span className="flex items-baseline">2025 <span className="text-sm ml-2 text-neutral-400">03.05</span></span>,
    content: (
      <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-white dark:bg-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-700">
        <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl -z-10"></div>
          <video
            src="https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Nested%20Sequence%2001%20-%20(4x5).mp4"
            controls
            playsInline
            className="w-full h-[450px] rounded-lg border-2 border-blue-100 dark:border-blue-900 object-cover"
          />
        </div>
      </div>
    ),
  }
];

export default function Tasks() {
  return (
    <Main className="p-0 overflow-auto">
      <Timeline data={timelineData} />
    </Main>
  )
} 