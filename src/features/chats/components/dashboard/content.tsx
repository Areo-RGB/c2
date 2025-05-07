"use client"

import { Zap, Activity, Brain } from "lucide-react"
import { cn } from "@/lib/utils"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import Sprint10mRanking from "../performance/sprint-10m-ranking"
import Sprint20mRanking from "../performance/sprint-20m-ranking"
import GewandtheitRanking from "../performance/gewandtheit-ranking"
import DribblingRanking from "../performance/dribbling-ranking"
import BallkontrolleRanking from "../performance/ballkontrolle-ranking"
import BalljonglierenRanking from "../performance/balljonglieren-ranking"

// Types
type CategoryType = "schnelligkeit" | "beweglichkeit" | "technik"

type ExerciseConfig = {
  id: string
  title: string
  category: CategoryType
  component: React.ReactNode
  color: string
}

export default function Content() {
  // Define the available exercises
  const exercises: ExerciseConfig[] = [
    // Schnelligkeit exercises
    {
      id: "10m-sprint",
      title: "10m Sprint",
      category: "schnelligkeit",
      component: <Sprint10mRanking />,
      color: "text-amber-500"
    },
    {
      id: "20m-sprint",
      title: "20m Sprint",
      category: "schnelligkeit",
      component: <Sprint20mRanking />,
      color: "text-amber-500"
    },
    
    // Beweglichkeit exercises
    {
      id: "gewandtheit",
      title: "Gewandtheit",
      category: "beweglichkeit",
      component: <GewandtheitRanking />,
      color: "text-indigo-500"
    },
    
    // Technik exercises
    {
      id: "dribbling",
      title: "Dribbling",
      category: "technik",
      component: <DribblingRanking />,
      color: "text-emerald-500"
    },
    {
      id: "ballkontrolle",
      title: "Ballkontrolle",
      category: "technik",
      component: <BallkontrolleRanking />,
      color: "text-emerald-500"
    },
    {
      id: "balljonglieren",
      title: "Balljonglieren",
      category: "technik",
      component: <BalljonglierenRanking />,
      color: "text-emerald-500"
    }
  ]

  // State for the selected category and exercise
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("schnelligkeit")
  const [selectedExerciseId, setSelectedExerciseId] = useState<string>("10m-sprint")
  
  // Filter exercises by category
  const categoryExercises = exercises.filter(ex => ex.category === selectedCategory)
  
  // Get the selected exercise
  const selectedExercise = exercises.find(ex => ex.id === selectedExerciseId) || categoryExercises[0]
  
  // Handle category change
  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category)
    // Select the first exercise in the new category
    const firstExerciseInCategory = exercises.find(ex => ex.category === category)
    if (firstExerciseInCategory) {
      setSelectedExerciseId(firstExerciseInCategory.id)
    }
  }

  // Get color classes based on selected category
  const getCategoryColorClasses = () => {
    switch (selectedCategory) {
      case "schnelligkeit":
        return {
          bg: "bg-background",
          border: "border-border",
          icon: "text-amber-500"
        }
      case "beweglichkeit":
        return {
          bg: "bg-background",
          border: "border-border",
          icon: "text-indigo-500"
        }
      case "technik":
        return {
          bg: "bg-background",
          border: "border-border",
          icon: "text-emerald-500"
        }
    }
  }

  const colorClasses = getCategoryColorClasses()

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-card rounded-xl p-5 md:p-6 flex flex-col border border-border shadow-sm">
          <h2 className="text-xl font-bold text-card-foreground mb-5 text-left flex items-center">
            <span className="mr-2 inline-block w-1 h-6 bg-primary rounded-full"></span>
            Leistungsdiagnostik
          </h2>

          <div className="max-w-xl mx-auto w-full">
            {/* Main category tabs - with shorter names */}
            <div className="flex justify-between mb-5 rounded-lg p-1 border border-border/40 bg-muted/10">
              <button
                onClick={() => handleCategoryChange("schnelligkeit")}
                className={cn(
                  "flex items-center py-2 px-3 rounded-lg transition-all min-w-0 flex-1",
                  selectedCategory === "schnelligkeit" 
                    ? "bg-background border border-border shadow-sm" 
                    : "border border-transparent"
                )}
              >
                <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mr-2" />
                <span className="text-sm font-medium truncate">Schnell.</span>
              </button>
              
              <button
                onClick={() => handleCategoryChange("beweglichkeit")}
                className={cn(
                  "flex items-center py-2 px-3 rounded-lg transition-all min-w-0 flex-1",
                  selectedCategory === "beweglichkeit" 
                    ? "bg-background border border-border shadow-sm" 
                    : "border border-transparent"
                )}
              >
                <Activity className="w-4 h-4 text-indigo-500 flex-shrink-0 mr-2" />
                <span className="text-sm font-medium truncate">Beweg.</span>
              </button>
              
              <button
                onClick={() => handleCategoryChange("technik")}
                className={cn(
                  "flex items-center py-2 px-3 rounded-lg transition-all min-w-0 flex-1",
                  selectedCategory === "technik" 
                    ? "bg-background border border-border shadow-sm" 
                    : "border border-transparent"
                )}
              >
                <Brain className="w-4 h-4 text-emerald-500 flex-shrink-0 mr-2" />
                <span className="text-sm font-medium truncate">Technik</span>
              </button>
            </div>

            {/* Content Container */}
            <div className="rounded-lg p-5 border border-border bg-background shadow-sm">
              {/* Exercise Header with title and dropdown */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={cn(
                    "text-sm font-medium",
                    colorClasses.icon
                  )}>
                    Ranking
                  </h3>
                </div>
                
                {/* Exercise Selector Below Title */}
                <Select 
                  value={selectedExerciseId} 
                  onValueChange={setSelectedExerciseId}
                >
                  <SelectTrigger 
                    className={cn(
                      "w-full h-9 text-sm mb-2", 
                      colorClasses.icon
                    )}
                  >
                    <SelectValue placeholder="Übung auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryExercises.map((exercise) => (
                      <SelectItem 
                        key={exercise.id} 
                        value={exercise.id}
                        className={colorClasses.icon}
                      >
                        {exercise.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Exercise Content */}
              <div className="animate-in fade-in duration-200">
                {selectedExercise?.component}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 