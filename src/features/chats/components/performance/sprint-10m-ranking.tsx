import { getExerciseData } from "@/features/chats/data/data"
import { performanceData } from '@/lib/data';
import PerformanceRanking from "./performance-ranking"

const data = getExerciseData(performanceData, "10m Sprint")

export default function Sprint10mRanking({ className }: { className?: string }) {
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