import { getExerciseData } from "@/features/chats/data/data"
import { performanceData } from '@/lib/data';
import PerformanceRanking from "./performance-ranking"

const data = getExerciseData(performanceData, "Ballkontrolle")

export default function BallkontrolleRanking({ className }: { className?: string }) {
  return (
    <PerformanceRanking
      title="Ballkontrolle"
      displayTitle="Ballkontrolle Rankings"
      data={data}
      className={className}
      unit="s"
      sortAscending={true}
    />
  )
} 