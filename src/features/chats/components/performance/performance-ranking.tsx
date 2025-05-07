"use client"

import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { Film, X, Info, ChevronDown, ChevronUp } from "lucide-react"
import type { PerformanceRankingProps } from "@/types/performance"
import {
  estimatePlayerPercentile,
  getPerformanceCategory,
  getGradientColor,
  getGradientTextColor,
} from "@/features/chats/data/data"

/**
 * PerformanceRanking component displays a ranking of performance data
 * and provides video playback functionality for associated videos.
 */
export default function PerformanceRanking({
  title,
  displayTitle,
  data,
  className,
  unit = "s",
  sortAscending = true,
}: PerformanceRankingProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)
  const [currentVideoItem, setCurrentVideoItem] = useState<number | null>(null)
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null)
  const [showCategoryLegend, setShowCategoryLegend] = useState(false)

  // Sort data based on result
  const sortedData = [...data].sort((a, b) => {
    const aResult = typeof a.ergebnis === "string" ? Number.parseFloat(a.ergebnis) : a.ergebnis
    const bResult = typeof b.ergebnis === "string" ? Number.parseFloat(b.ergebnis) : b.ergebnis
    return sortAscending ? aResult - bResult : bResult - aResult
  })

  // Create a mapping of videos for each data item
  const itemVideoMap = useMemo(() => {
    // Default mapping uses the external video for all items
    const defaultMap: Record<number, string> = {}
    
    // Map each item to a video based on specific categories
    sortedData.forEach((item, index) => {
      // Default fallback video
      defaultMap[index] = "https://data3.fra1.cdn.digitaloceanspaces.com/g.mp4"
      
      // Use specific videos for specific categories
      if (title === "20m Sprint" || 
          item.name.toLowerCase().includes("sprint") || 
          item.kategorie?.toLowerCase().includes("sprint")) {
        // 20m sprint video
        defaultMap[index] = "https://data3.fra1.cdn.digitaloceanspaces.com/20.mp4"
      } 
      else if (title === "Balljonglieren" || 
               item.name.toLowerCase().includes("ball") || 
               item.kategorie?.toLowerCase().includes("ball")) {
        // Ball juggling video
        defaultMap[index] = "https://data3.fra1.cdn.digitaloceanspaces.com/6%20(2).mp4"
      }
      else if (title === "Dribbling" || 
               item.name.toLowerCase().includes("dribb") || 
               item.kategorie?.toLowerCase().includes("dribb")) {
        // Dribbling video
        defaultMap[index] = "https://data3.fra1.cdn.digitaloceanspaces.com/2%20-%20(1x1)_3.mp4"
      }
    })
    
    return defaultMap
  }, [sortedData, title])

  // Handle toggling video play/pause
  const handleToggleVideo = (index: number) => {
    // Always set the current item first
    setCurrentVideoItem(index)
    
    // Get the video URL for this item
    const videoUrl = itemVideoMap[index] || "https://data3.fra1.cdn.digitaloceanspaces.com/g.mp4"
    
    // If we're already playing this item, stop the video
    if (currentVideoItem === index && isPlayingVideo) {
      setIsPlayingVideo(false)
      setCurrentVideoUrl(null)
    } else {
      // Otherwise start playing the selected video
      setCurrentVideoUrl(videoUrl)
      setIsPlayingVideo(true)
    }
  }

  // Generate gradient legend items with performance categories
  const gradientLegendItems = [
    { category: "unterdurchschnittlich", color: "bg-red-600/60", percentileRange: "3-30%" },
    { category: "durchschnittlich", color: "bg-orange-500/60", percentileRange: "31-70%" },
    { category: "gut", color: "bg-yellow-500/60", percentileRange: "71-80%" },
    { category: "sehr gut", color: "bg-green-500/60", percentileRange: "81-90%" },
    { category: "ausgezeichnet", color: "bg-green-600/60", percentileRange: "91-97%" },
  ]

  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto",
        "bg-card rounded-xl border border-border",
        "shadow-md",
        "relative",
        "overflow-hidden",
        "cursor-pointer",
        className,
      )}
      onClick={() => {
        // Toggle video on/off when clicking anywhere on the card
        if (isPlayingVideo) {
          setIsPlayingVideo(false)
          setCurrentVideoItem(null)
          setCurrentVideoUrl(null)
        } else {
          // Use the first non-benchmark item if available
          const firstPlayerIndex = sortedData.findIndex(item => !item.name.startsWith("DFB"))
          if (firstPlayerIndex !== -1) {
            const videoUrl = itemVideoMap[firstPlayerIndex] || "https://data3.fra1.cdn.digitaloceanspaces.com/g.mp4"
            setCurrentVideoItem(firstPlayerIndex)
            setCurrentVideoUrl(videoUrl)
            setIsPlayingVideo(true)
          }
        }
      }}
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/5 to-transparent -z-10 rounded-bl-full"></div>

      {/* Video Overlay - Full component dimensions */}
      {isPlayingVideo && currentVideoUrl && (
        <div className="absolute inset-0 z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <video
            src={currentVideoUrl}
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 animate-in fade-in duration-500"></div>
          
          {/* Close button */}
          <button 
            onClick={(e) => {
              e.stopPropagation() // Prevent click from propagating to parent
              setIsPlayingVideo(false)
              setCurrentVideoItem(null)
              setCurrentVideoUrl(null)
            }}
            className="absolute top-2 right-2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white z-20 transition-colors animate-in fade-in slide-in-from-top-5 duration-300 delay-150"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Card Content */}
      <div className={cn(
        "p-5 transition-all duration-300",
        isPlayingVideo ? "relative z-20" : ""
      )}>
        <div className="flex items-center justify-between mb-4 transition-all duration-300">
          <h2 className={cn(
            "text-sm font-semibold flex items-center transition-colors duration-300", 
            isPlayingVideo ? "text-white" : "text-card-foreground"
          )}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
            {displayTitle || title}
          </h2>
          
          {/* Only show controls when video is not playing */}
          <div className={cn(
            "flex flex-wrap items-center gap-2 gap-y-1 transition-all duration-300",
            !isPlayingVideo ? "opacity-100" : "opacity-0 invisible h-0"
          )}>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full border-2 border-muted-foreground"></div>
              <span className="text-xs text-muted-foreground">Benchmark</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full border-2 border-primary"></div>
              <span className="text-xs text-muted-foreground">Player</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation() // Prevent click from propagating
                setShowCategoryLegend(!showCategoryLegend)
              }}
              className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Info className="w-3 h-3" />
              {showCategoryLegend ? "Hide" : "Show"}
              {showCategoryLegend ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Gradient Legend - only show when video is not playing */}
        {showCategoryLegend && !isPlayingVideo && (
          <div 
            className="mb-4 p-3 bg-muted/50 rounded-lg text-xs border border-border/50 animate-in slide-in-from-top duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent legend clicks from toggling video
          >
            <div className="font-medium mb-2 text-card-foreground">Leistungskategorien:</div>
            <div className="flex items-center mb-3">
              <div className="h-4 flex-1 bg-gradient-to-r from-red-600/60 via-orange-500/60 to-green-600/60 rounded-sm"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2">
              {gradientLegendItems.map((item) => (
                <div key={item.category} className="flex items-center gap-2">
                  <div className={`w-2 h-4 rounded-sm ${item.color}`}></div>
                  <span className="text-muted-foreground">{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Data List */}
        <div className="space-y-2 transition-all duration-300">
          {sortedData
            // Filter out benchmarks when video is playing
            .filter(item => !isPlayingVideo || !item.name.startsWith("DFB"))
            .map((item, index) => {
            const isBenchmark = item.name.startsWith("DFB")
            const percentile = isBenchmark
              ? Number.parseInt(item.name.split("-")[1] || "0", 10)
              : estimatePlayerPercentile(item.ergebnis, title)

            // Get category for display
            const category = getPerformanceCategory(percentile)

            // Get gradient colors
            const indicatorColor = getGradientColor(percentile)
            const textColor = isPlayingVideo ? "text-white" : getGradientTextColor(percentile)

            // Determine border color based on percentile
            let borderColorClass = "border-muted-foreground/40"
            if (!isBenchmark && percentile !== null) {
              if (percentile < 31) borderColorClass = "border-red-600/60"
              else if (percentile < 71) borderColorClass = "border-orange-500/60"
              else if (percentile < 81) borderColorClass = "border-yellow-500/60"
              else if (percentile < 91) borderColorClass = "border-green-500/60"
              else borderColorClass = "border-green-600/60"
            }

            const isActive = currentVideoItem === sortedData.indexOf(item)
            
            // Calculate display index - important for numbering when filtering
            const displayIndex = sortedData
              .filter(i => !isPlayingVideo || !i.name.startsWith("DFB"))
              .indexOf(item)

            return (
              <div
                key={`${item.name}-${index}`}
                className={cn(
                  "group flex items-center gap-3",
                  "p-2.5 rounded-lg",
                  "hover:bg-muted/50",
                  "transition-all duration-300",
                  "relative",
                  isActive && isPlayingVideo ? "bg-white/10 hover:bg-white/20 animate-pulse" : 
                  isPlayingVideo ? "hover:bg-white/10" : 
                  index === 0 ? "bg-muted/30" : "",
                  isPlayingVideo && !isBenchmark ? "animate-in fade-in slide-in-from-left-5" : "",
                )}
                onClick={(e) => {
                  e.stopPropagation() // Prevent clicks from bubbling to parent
                  const itemIndex = sortedData.indexOf(item)
                  handleToggleVideo(itemIndex)
                }}
              >
                {/* Gradient Indicator - only for player entries */}
                {!isBenchmark && (
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 ${indicatorColor} rounded-l-lg transition-all duration-300`}
                    title={`${percentile}% - ${category}`}
                  ></div>
                )}

                <div
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full",
                    "border-2",
                    "transition-all duration-300",
                    isPlayingVideo ? "border-white/30" : borderColorClass,
                    isActive && isPlayingVideo 
                      ? "bg-primary text-primary-foreground scale-110" 
                      : isBenchmark 
                        ? isPlayingVideo ? "bg-white/20 text-white" : "bg-muted/50 text-muted-foreground" 
                        : isPlayingVideo ? "bg-white/20 text-white" : "bg-muted text-card-foreground",
                    "text-sm font-semibold",
                    "transition-transform duration-200 group-hover:scale-105",
                  )}
                >
                  {isActive && isPlayingVideo ? (
                    <Film className="w-4 h-4 animate-in zoom-in duration-300" />
                  ) : (
                    <span className="transition-all duration-300">{displayIndex + 1}</span>
                  )}
                </div>

                <div className="flex-1 flex items-center justify-between min-w-0 transition-all duration-300">
                  <div className="space-y-0.5">
                    <h3 className={cn(
                      "text-xs font-medium transition-colors duration-300", 
                      isPlayingVideo ? "text-white" : "text-card-foreground"
                    )}>
                      {item.name}
                      {isBenchmark && percentile && (
                        <span className={cn(
                          "ml-1 text-[10px] transition-colors duration-300", 
                          isPlayingVideo ? "text-white/70" : "text-muted-foreground"
                        )}>
                          (P{percentile})
                        </span>
                      )}
                      {!isBenchmark && percentile && (
                        <span className={`ml-1 text-[10px] ${textColor} transition-colors duration-300`}>
                          (P{percentile} - {category})
                        </span>
                      )}
                    </h3>
                    <p className={cn(
                      "text-[11px] transition-colors duration-300",
                      isPlayingVideo ? "text-white/70" : "text-muted-foreground"
                    )}>
                      {isBenchmark ? "DFB Benchmark" : item.kategorie}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 pl-3">
                    <span className={cn(
                      "text-xs font-medium transition-colors duration-300", 
                      isPlayingVideo 
                        ? "text-white" 
                        : !isBenchmark ? textColor : "text-card-foreground"
                    )}>
                      {item.ergebnis}
                      {unit}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 