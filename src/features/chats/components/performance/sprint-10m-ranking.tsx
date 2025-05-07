import { getExerciseData } from "@/features/chats/data/data"
import PerformanceRanking from "./performance-ranking"

export default function Sprint10mRanking({ className }: { className?: string }) {
  const data = getExerciseData("10m Sprint")

  return (
    <PerformanceRanking
      title="10m Sprint" // Key for data lookup
      displayTitle="10m Sprint Rankings" // Display title for UI
      data={data}
      className={className}
      unit="s"
      sortAscending={true}
    />
  )
} 