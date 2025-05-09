"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { formatDate } from "@/lib/utils.ts"
import { Play, Pause } from "lucide-react"
import { Compare } from "@/components/ui/compare"

interface ProgressEntry {
  date: Date;
  videoUrl: string;
  description: string;
  exerciseName: string;
  result?: string;
}

interface PlayerProgressTimelineProps {
  playerName: string;
  exerciseName: string;
  entries: ProgressEntry[];
}

export default function PlayerProgressTimeline({
  playerName,
  exerciseName,
  entries = [],
}: PlayerProgressTimelineProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  
  // Sort entries by date, newest first
  const sortedEntries = [...entries].sort((a, b) => 
    b.date.getTime() - a.date.getTime()
  )
  
  return (
    <div className="w-full space-y-6">
      {sortedEntries.map((entry, index) => {
    const isPlaying = activeVideo === entry.videoUrl
    
    const handleVideoToggle = (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (isPlaying) {
        setActiveVideo(null)
      } else {
        setActiveVideo(entry.videoUrl)
      }
    }
    
        return (
          <div key={index} className="w-full">
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {formatDate(entry.date)}
            </h3>
            
        <Card className="overflow-hidden group bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-black border border-blue-100 dark:border-blue-800/40 shadow-md hover:shadow-blue-200/40 dark:hover:shadow-blue-900/30 transition-all duration-300">
              {entry.exerciseName === "Passen" ? (
                // Layout for Passen exercise with video comparison
                <>
                  <div className="relative pt-4 px-4 pb-3">
                    {/* Date is already shown above the card */}
                    
                    <div className="rounded-lg overflow-hidden shadow-inner border border-blue-100/30 dark:border-blue-900/30">
                      <Compare
                        firstVideo="https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Timeline%201%20(2).mp4"
                        secondVideo="https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Nested%20Sequence%2001%20-%20(4x5).mp4"
                        className="w-full h-[280px]"
                        slideMode="drag"
                        autoplay={false}
                        theme="blue"
                      />
                    </div>
                  </div>
                  
                  <div className="p-5 pt-3 border-t border-blue-100/30 dark:border-blue-900/30 bg-white/50 dark:bg-blue-950/20">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{entry.exerciseName}</h3>
                      {entry.result && (
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                          {entry.result}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{entry.description}</p>
                  </div>
                </>
              ) : (
                // Standard layout for other exercises
                <>
          <div className="relative aspect-video w-full">
            {isPlaying ? (
              <video 
                src={entry.videoUrl}
                className="w-full h-full object-cover"
                autoPlay
                loop
                controls
              />
            ) : (
              <div className="relative w-full h-full bg-black/10 dark:bg-white/5 flex items-center justify-center">
                <img
                  src={`${entry.videoUrl}#t=0.5`}
                  alt={`Exercise preview for ${entry.exerciseName}`}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleVideoToggle}
                    className="rounded-full bg-blue-500/90 hover:bg-blue-600 hover:scale-105 p-3 text-white shadow-lg transition-transform duration-200"
                  >
                    <Play size={24} />
                  </button>
                </div>
              </div>
            )}
            
                    {/* Date is already shown above the card */}
            
            {isPlaying && (
              <button
                onClick={handleVideoToggle}
                className="absolute bottom-4 right-4 rounded-full bg-blue-500/90 hover:bg-blue-600 p-2 text-white shadow-lg transition-transform duration-200 hover:scale-105"
              >
                <Pause size={20} />
              </button>
            )}
          </div>
          
                  <div className="p-5 border-t border-blue-100/30 dark:border-blue-900/30 bg-white/50 dark:bg-blue-950/20">
                    <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{entry.exerciseName}</h3>
              {entry.result && (
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                  {entry.result}
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300">{entry.description}</p>
          </div>
                </>
              )}
        </Card>
          </div>
        )
      })}
    </div>
  )
} 