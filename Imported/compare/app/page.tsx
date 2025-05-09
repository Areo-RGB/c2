import { VideoCompareCard } from "@/components/video-compare-card"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-950">
      <VideoCompareCard
        firstVideo="https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Timeline%201%20(2).mp4"
        secondVideo="https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Nested%20Sequence%2001%20-%20(4x5).mp4"
        authorName="Finley Time"
        authorImage="/abstract-profile.png"
        readTime="Video Comparison"
        title="Timeline Comparison"
        description="Compare two different timeline sequences with this interactive slider."
        theme="blue"
      />
    </main>
  )
}
