import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Sprint10mRanking from "./sprint-10m-ranking"
import Sprint20mRanking from "./sprint-20m-ranking"
import GewandtheitRanking from "./gewandtheit-ranking"
import DribblingRanking from "./dribbling-ranking"
import BallkontrolleRanking from "./ballkontrolle-ranking"
import BalljonglierenRanking from "./balljonglieren-ranking"

type CardCategory = "schnelligkeit" | "beweglichkeit" | "technik"

type CardConfig = {
  component: React.ReactNode
  title: string
  category: CardCategory
  color: string
}

export default function PerformanceCardNavigation({ category }: { category: CardCategory }) {
  const cards: CardConfig[] = [
    // Schnelligkeit cards
    { 
      component: <Sprint10mRanking />, 
      title: "10m Sprint", 
      category: "schnelligkeit",
      color: "text-amber-500",
    },
    { 
      component: <Sprint20mRanking />, 
      title: "20m Sprint", 
      category: "schnelligkeit",
      color: "text-amber-500",
    },
    
    // Beweglichkeit cards
    { 
      component: <GewandtheitRanking />, 
      title: "Gewandtheit", 
      category: "beweglichkeit",
      color: "text-indigo-500",
    },
    
    // Technik cards
    { 
      component: <DribblingRanking />, 
      title: "Dribbling", 
      category: "technik",
      color: "text-emerald-500",
    },
    { 
      component: <BallkontrolleRanking />, 
      title: "Ballkontrolle", 
      category: "technik",
      color: "text-emerald-500",
    },
    { 
      component: <BalljonglierenRanking />, 
      title: "Balljonglieren", 
      category: "technik",
      color: "text-emerald-500",
    },
  ]
  
  // Filter cards by the selected category
  const categoryCards = cards.filter(card => card.category === category)
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null)
  
  // Reset card index when category changes
  useEffect(() => {
    setCurrentCardIndex(0)
    setAnimationDirection(null)
  }, [category])
  
  const handlePrevious = () => {
    setAnimationDirection('left')
    setCurrentCardIndex(prev => (prev - 1 + categoryCards.length) % categoryCards.length)
  }
  
  const handleNext = () => {
    setAnimationDirection('right')
    setCurrentCardIndex(prev => (prev + 1) % categoryCards.length)
  }
  
  if (categoryCards.length === 0) {
    return <div>No cards available for this category</div>
  }
  
  const currentCard = categoryCards[currentCardIndex]
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border/40 pb-3">
        <h3 className={cn("text-sm font-medium", currentCard.color)}>
          {currentCard.title}
        </h3>
        
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handlePrevious}
            className="h-7 w-7 rounded-full"
            disabled={categoryCards.length <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous card</span>
          </Button>
          
          <span className="text-xs text-muted-foreground min-w-[30px] text-center">
            {currentCardIndex + 1}/{categoryCards.length}
          </span>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleNext}
            className="h-7 w-7 rounded-full"
            disabled={categoryCards.length <= 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next card</span>
          </Button>
        </div>
      </div>
      
      <div className={cn(
        "animate-in duration-200",
        animationDirection === 'left' ? "slide-in-from-left-3" : 
        animationDirection === 'right' ? "slide-in-from-right-3" : 
        "fade-in"
      )}>
        {currentCard.component}
      </div>
    </div>
  )
} 