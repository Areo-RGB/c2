import { getExerciseData } from "@/features/chats/data/data"
import { performanceData } from '@/lib/data';
import PerformanceRanking from "./performance-ranking"

const data = getExerciseData(performanceData, "Dribbling")

export default function DribblingRanking({ className }: { className?: string }) {
  return (
    <PerformanceRanking
      title="Dribbling"
      displayTitle="Dribbling Rankings"
      data={data}
      className={className}
      unit="s"
      sortAscending={true}
    />
  )
} 