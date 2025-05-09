"use client"

import { useState } from "react"
import { Timeline } from "@/components/ui/timeline"
import { Card } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import { Play, Pause } from "lucide-react"

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
  
  const timelineData = sortedEntries.map(entry => {
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
    
    return {
      title: formatDate(entry.date),
      content: (
        <Card className="overflow-hidden group bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-black border border-blue-100 dark:border-blue-800/40 shadow-md hover:shadow-blue-200/40 dark:hover:shadow-blue-900/30 transition-all duration-300">
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
            
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-lg font-medium text-sm shadow-md">
              {formatDate(entry.date)}
            </div>
            
            {isPlaying && (
              <button
                onClick={handleVideoToggle}
                className="absolute bottom-4 right-4 rounded-full bg-blue-500/90 hover:bg-blue-600 p-2 text-white shadow-lg transition-transform duration-200 hover:scale-105"
              >
                <Pause size={20} />
              </button>
            )}
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">{entry.exerciseName}</h3>
              {entry.result && (
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold">
                  {entry.result}
                </span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300">{entry.description}</p>
          </div>
        </Card>
      )
    }
  })

  return (
    <div className="w-full">
      <Timeline data={timelineData} />
    </div>
  )
} 