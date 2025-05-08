import { getExerciseData } from "@/features/chats/data/data"
import { performanceData } from '@/lib/data';
import PerformanceRanking from "./performance-ranking"

const data = getExerciseData(performanceData, "20m Sprint")

export default function Sprint20mRanking({ className }: { className?: string }) {
  return (
    <PerformanceRanking
      title="20m Sprint"
      displayTitle="20m Sprint Rankings"
      data={data}
      className={className}
      unit="s"
      sortAscending={true}
    />
  )
} 