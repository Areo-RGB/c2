import { createFileRoute } from '@tanstack/react-router'
import PlayerProgressTimeline from '@/features/chats/components/performance/player-progress-timeline'

function RouteComponent() {
  // Sample data for demonstration
  const progressEntries = [
    {
      date: new Date('2024-04-15'),
      videoUrl: 'https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Timeline%201%20(2).mp4',
      description: 'Improved passing technique with better follow-through',
      exerciseName: 'Passen',
      result: '85% Accuracy'
    },
    {
      date: new Date('2024-03-30'),
      videoUrl: 'https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Nested%20Sequence%2001%20-%20(4x5).mp4',
      description: 'Working on ball control and positioning during passing drills',
      exerciseName: 'Ball Control',
      result: '72% Completion'
    }
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Player Progress</h1>
      <PlayerProgressTimeline 
        playerName="Finley"
        exerciseName="Skills Development"
        entries={progressEntries}
      />
    </div>
  )
}

export const Route = createFileRoute('/_authenticated/chats/player-progress')({
  component: RouteComponent,
})
