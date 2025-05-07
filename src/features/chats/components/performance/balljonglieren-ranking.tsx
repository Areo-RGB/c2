import { getExerciseData } from "@/features/chats/data/data"
import PerformanceRanking from "./performance-ranking"

export default function BalljonglierenRanking({ className }: { className?: string }) {
  const data = getExerciseData("Balljonglieren")

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