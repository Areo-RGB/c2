import { getExerciseData } from "@/features/chats/data/data"
import { performanceData } from '@/lib/data';
import PerformanceRanking from "./performance-ranking"

const data = getExerciseData(performanceData, "Gewandtheit")

export default function GewandtheitRanking({ className }: { className?: string }) {
  return (
    <PerformanceRanking
      title="Gewandtheit"
      displayTitle="Gewandtheit Rankings"
      data={data}
      className={className}
      unit="s"
      sortAscending={true}
    />
  )
} 