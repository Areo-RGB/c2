import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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
}

export default function PerformanceCardNavigation({ category }: { category: CardCategory }) {
  const cards: CardConfig[] = [
    // Schnelligkeit cards
    { component: <Sprint10mRanking />, title: "10m Sprint", category: "schnelligkeit" },
    { component: <Sprint20mRanking />, title: "20m Sprint", category: "schnelligkeit" },
    
    // Beweglichkeit cards
    { component: <GewandtheitRanking />, title: "Gewandtheit", category: "beweglichkeit" },
    
    // Technik cards
    { component: <DribblingRanking />, title: "Dribbling", category: "technik" },
    { component: <BallkontrolleRanking />, title: "Ballkontrolle", category: "technik" },
    { component: <BalljonglierenRanking />, title: "Balljonglieren", category: "technik" },
  ]
  
  // Filter cards by the selected category
  const categoryCards = cards.filter(card => card.category === category)
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  
  const handlePrevious = () => {
    setCurrentCardIndex(prev => (prev - 1 + categoryCards.length) % categoryCards.length)
  }
  
  const handleNext = () => {
    setCurrentCardIndex(prev => (prev + 1) % categoryCards.length)
  }
  
  if (categoryCards.length === 0) {
    return <div>No cards available for this category</div>
  }
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">{categoryCards[currentCardIndex].title}</h3>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePrevious}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous card</span>
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentCardIndex + 1} / {categoryCards.length}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNext}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next card</span>
          </Button>
        </div>
      </div>
      
      <div className="animate-in fade-in-50 duration-300">
        {categoryCards[currentCardIndex].component}
      </div>
    </div>
  )
} 