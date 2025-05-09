import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import PlayerProgressTimeline from "@/features/chats/components/performance/player-progress-timeline"
import { Header } from '@/components/layout/header'
import { ThemeSwitch } from '@/components/theme-switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Player progress page route
export const Route = createFileRoute('/_authenticated/chats/player-progress')({
  component: PlayerProgressPage,
})

function PlayerProgressPage() {
  const [selectedPlayer, setSelectedPlayer] = useState('Alex')
  const [selectedExercise, setSelectedExercise] = useState('10m Sprint')
  
  // Sample data for the progress timeline
  const generateTimelineData = (player: string, exercise: string) => {
    const exerciseDescription = {
      "10m Sprint": "Short sprint over 10 meters to measure explosive speed.",
      "20m Sprint": "Speed test over 20 meters to assess acceleration and top speed.",
      "Balljonglieren": "Technical ball control exercise to improve touch and coordination.",
      "Dribbling": "Dribbling through cones to improve close control and agility."
    }
    
    const getVideo = (playerName: string, exName: string, monthsAgo: number) => {
      let defaultVideo = "https://data3.fra1.cdn.digitaloceanspaces.com/g.mp4"
      
      if (playerName === "Alex") {
        if (exName === "10m Sprint") {
          return "https://data3.fra1.cdn.digitaloceanspaces.com/Timeline%201sprint.bent_prob4_tvai.mp4"
        } else if (exName === "Dribbling") {
          return "https://data3.fra1.cdn.digitaloceanspaces.com/2%20-%20(1x1)_3.mp4"
        }
      } else if (playerName === "Bent") {
        if (exName === "Balljonglieren") {
          return "https://data3.fra1.cdn.digitaloceanspaces.com/bent1/bent.jong.mp4"
        } else if (exName === "10m Sprint") {
          return "https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/bent.20m.mp4"
        }
      } else if (playerName === "Finley") {
        if (exName === "10m Sprint") {
          return "https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/finley.gw.mp4"
        }
      }
      
      if (exName === "Balljonglieren") {
        return "https://data3.fra1.cdn.digitaloceanspaces.com/6%20(2).mp4"
      } else if (exName === "20m Sprint") {
        return "https://data3.fra1.cdn.digitaloceanspaces.com/20.mp4"
      }
      
      return defaultVideo
    }
    
    // Create timeline entries for the past 5 months
    return Array.from({ length: 5 }).map((_, i) => {
      const date = new Date()
      date.setMonth(date.getMonth() - i)
      
      // Generate slightly improving results
      let baseResult = 0
      if (exercise === "10m Sprint") baseResult = 1.8
      if (exercise === "20m Sprint") baseResult = 3.2
      if (exercise === "Balljonglieren") baseResult = 15
      if (exercise === "Dribbling") baseResult = 8.5
      
      // Decrease the result by 2-5% for each month forward (better performance)
      const improvement = i * (Math.random() * 0.03 + 0.02)
      const result = (baseResult * (1 - improvement)).toFixed(2)
      
      const unit = exercise.includes("Sprint") ? "s" : exercise === "Balljonglieren" ? "touches" : "s"
      
      return {
        date,
        videoUrl: getVideo(player, exercise, i),
        description: exerciseDescription[exercise as keyof typeof exerciseDescription] || "",
        exerciseName: exercise,
        result: `${result} ${unit}`
      }
    })
  }
  
  const [timelineData, setTimelineData] = useState(
    generateTimelineData(selectedPlayer, selectedExercise)
  )
  
  // Update timeline data when player or exercise changes
  useEffect(() => {
    setTimelineData(generateTimelineData(selectedPlayer, selectedExercise))
  }, [selectedPlayer, selectedExercise])

  return (
    <>
      <Header>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
        </div>
      </Header>
      <div className="container mx-auto px-4 py-6 space-y-8 mb-20">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Player Progress Timeline</h1>
          <p className="text-muted-foreground">
            Track exercise improvement over time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Player</label>
            <Select 
              value={selectedPlayer} 
              onValueChange={setSelectedPlayer}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select player" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Alex">Alex</SelectItem>
                <SelectItem value="Bent">Bent</SelectItem>
                <SelectItem value="Finley">Finley</SelectItem>
                <SelectItem value="Tom">Tom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Exercise</label>
            <Select 
              value={selectedExercise} 
              onValueChange={setSelectedExercise}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select exercise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10m Sprint">10m Sprint</SelectItem>
                <SelectItem value="20m Sprint">20m Sprint</SelectItem>
                <SelectItem value="Balljonglieren">Balljonglieren</SelectItem>
                <SelectItem value="Dribbling">Dribbling</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-10">
          <PlayerProgressTimeline 
            playerName={selectedPlayer}
            exerciseName={selectedExercise}
            entries={timelineData}
          />
        </div>
      </div>
    </>
  )
} 