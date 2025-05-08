import { getExerciseData } from "@/features/chats/data/data"
import { performanceData } from '@/lib/data';
import PerformanceRanking from "./performance-ranking"

const data = getExerciseData(performanceData, "Balljonglieren")

export default function BalljonglierenRanking({ className }: { className?: string }) {
  return (
    <PerformanceRanking
      title="Balljonglieren"
      displayTitle="Balljonglieren Rankings"
      data={data}
      className={className}
      unit="pts"
      sortAscending={false}
    />
  )
} 