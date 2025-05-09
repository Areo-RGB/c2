"use client"
import { cn } from "@/lib/utils"
import { Compare } from "@/components/ui/compare"

interface VideoCompareCardProps {
  firstVideo: string
  secondVideo: string
  authorName?: string
  authorImage?: string
  readTime?: string
  title?: string
  description?: string
  theme?: "default" | "blue" | "purple" | "green" | "red"
}

export function VideoCompareCard({
  firstVideo,
  secondVideo,
  authorName = "Manu Arora",
  authorImage = "/manu.png",
  readTime = "2 min read",
  title = "Video Comparison",
  description = "Interactive comparison between two videos with a slider interface.",
  theme = "blue",
}: VideoCompareCardProps) {
  return (
    <div className="max-w-md w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card rounded-lg shadow-xl max-w-md mx-auto flex flex-col justify-between p-4 bg-gradient-to-br from-gray-900 to-gray-800 h-[500px]",
        )}
      >
        <div className="flex flex-row items-center space-x-4 z-10 mb-2">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src={authorImage || "/placeholder.svg"}
            className="h-10 w-10 rounded-full border-2 border-white/20 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">{authorName}</p>
            <p className="text-sm text-gray-400">{readTime}</p>
          </div>
        </div>

        <div className="text-content mb-2">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">{title}</h1>
          <p className="font-normal text-sm text-gray-300 relative z-10 my-2">{description}</p>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <Compare
            firstVideo={firstVideo}
            secondVideo={secondVideo}
            className="w-full h-[280px] rounded-lg"
            slideMode="hover"
            autoplay={true}
            theme={theme}
          />
        </div>
      </div>
    </div>
  )
}
