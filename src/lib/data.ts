import type { PerformanceData, PerformanceDifference } from "@/types/performance"
import type { VideoData, ButtonVideoMapping } from "@/types/videos"

export const performanceData: PerformanceData[] = [
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-3", ergebnis: 2.39 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-10", ergebnis: 2.33 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-20", ergebnis: 2.28 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-30", ergebnis: 2.24 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-40", ergebnis: 2.21 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-50", ergebnis: 2.18 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-60", ergebnis: 2.16 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-70", ergebnis: 2.13 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-80", ergebnis: 2.1 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-90", ergebnis: 2.05 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-97", ergebnis: 1.99 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-3", ergebnis: 4.14 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-10", ergebnis: 4.01 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-20", ergebnis: "3.93*" },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-30", ergebnis: 3.87 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-40", ergebnis: 3.82 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-50", ergebnis: 3.78 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-60", ergebnis: 3.74 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-70", ergebnis: 3.69 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-80", ergebnis: 3.64 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-90", ergebnis: 3.57 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-97", ergebnis: 3.47 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-3", ergebnis: 9.66 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-10", ergebnis: 9.33 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-20", ergebnis: 9.07 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-30", ergebnis: 8.9 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-40", ergebnis: 8.77 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-50", ergebnis: 8.66 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-60", ergebnis: 8.54 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-70", ergebnis: 8.42 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-80", ergebnis: 8.28 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-90", ergebnis: 8.11 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-97", ergebnis: 7.91 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-3", ergebnis: 14.37 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-10", ergebnis: 13.42 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-20", ergebnis: 12.84 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-30", ergebnis: 12.5 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-40", ergebnis: 12.15 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-50", ergebnis: 11.9 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-60", ergebnis: 11.68 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-70", ergebnis: 11.44 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-80", ergebnis: 11.16 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-90", ergebnis: 10.84 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-97", ergebnis: 10.43 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-3", ergebnis: 15.29 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-10", ergebnis: 13.81 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-20", ergebnis: 12.86 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-30", ergebnis: 12.28 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-40", ergebnis: 11.78 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-50", ergebnis: 11.36 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-60", ergebnis: 10.99 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-70", ergebnis: 10.59 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-80", ergebnis: 10.18 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-90", ergebnis: 9.66 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-97", ergebnis: 9.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB", ergebnis: 1.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB", ergebnis: 1.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB", ergebnis: 1.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB", ergebnis: 1.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-80", ergebnis: 2.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-90", ergebnis: 3.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-97", ergebnis: 6.0 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "Finley", ergebnis: 2.0 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "Finley", ergebnis: 3.59 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "Finley", ergebnis: 7.81 },
  { kategorie: "Technik", uebung: "Dribbling", name: "Finley", ergebnis: 10.27 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "Finley", ergebnis: 0.0 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "Finley", ergebnis: 10.82 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "Finley", ergebnis: 640 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "Alex", ergebnis: 7.39 },
  { kategorie: "Technik", uebung: "Dribbling", name: "Alex", ergebnis: 10.0 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "Alex", ergebnis: 2.16 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "Alex", ergebnis: 3.78 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "Alex", ergebnis: 1720 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "Bent", ergebnis: 2.19 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "Bent", ergebnis: 3.82 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "Bent", ergebnis: 8.14 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "Bent", ergebnis: 8.95 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "Bent", ergebnis: 3 },
  { kategorie: "Gewandtheit", uebung: "Dribbling", name: "Bent", ergebnis: 10.28 },
]

// Video data array with videos for performance cards
export const videoData: VideoData[] = [
  // Sample data with demo videos
  {
    url: "https://data3.fra1.cdn.digitaloceanspaces.com/a1%20(2).mp4",
    name: "Finley",
    test: "Gewandtheit",
    result: 7.81,
    date: "15-05-2023",
    description: "Technique analysis focusing on agility and movement patterns",
    buttonIndex: 0,
  },
  {
    url: "https://data3.fra1.cdn.digitaloceanspaces.com/a1%20(2).mp4",
    name: "Bent",
    test: "Gewandtheit",
    result: 8.14,
    date: "02-06-2023",
    description: "Follow-up assessment of agility performance",
    buttonIndex: 1,
  },
  {
    url: "https://data3.fra1.cdn.digitaloceanspaces.com/a1%20(2).mp4",
    name: "Finley",
    test: "10m Sprint",
    result: 2.0,
    date: "10-05-2023",
    description: "10m sprint acceleration analysis",
    buttonIndex: 0,
  },
]

/**
 * Get a list of all categories
 */
export function getCategories(): string[] {
  const categories = new Set<string>()
  performanceData.forEach((data) => categories.add(data.kategorie))
  return Array.from(categories)
}

/**
 * Get a list of all exercises
 */
export function getExercises(): string[] {
  const exercises = new Set<string>()
  performanceData.forEach((data) => exercises.add(data.uebung))
  return Array.from(exercises)
}

/**
 * Get a list of all player names
 */
export function getPlayerNames(): string[] {
  const names = new Set<string>()
  performanceData
    .filter((data) => !data.name.startsWith("DFB"))
    .forEach((data) => names.add(data.name))
  return Array.from(names)
}

/**
 * Get performance data for a specific player
 */
export function getPlayerData(playerName: string): PerformanceData[] {
  return performanceData.filter((data) => data.name === playerName)
}

/**
 * Get performance data for a specific exercise
 */
export function getExerciseData(exercise: string): PerformanceData[] {
  return performanceData.filter((data) => data.uebung === exercise)
}

/**
 * Get performance data for a specific category
 */
export function getCategoryData(category: string): PerformanceData[] {
  return performanceData.filter((data) => data.kategorie === category)
}

/**
 * Get benchmark data for a specific exercise
 */
export function getBenchmarkData(exercise: string): PerformanceData[] {
  return performanceData.filter((data) => data.uebung === exercise && data.name.startsWith("DFB"))
}

/**
 * Parse result string to number
 */
function parseResult(result: number | string): number {
  if (typeof result === "number") {
    return result
  }

  // Handle special cases like "3.93*" and convert to number
  const numericPart = result.replace(/[^0-9.]/g, "")
  return Number.parseFloat(numericPart)
}

/**
 * Calculate difference between two performance values
 */
export function calculatePerformanceDifference(
  value1: number | string,
  value2: number | string,
  exercise: string
): PerformanceDifference {
  const num1 = parseResult(value1)
  const num2 = parseResult(value2)
  const rawDifference = num1 - num2
  
  // For exercises where lower is better (like sprints, time-based)
  const lowerIsBetter = isLowerBetter(exercise)
  
  const isImprovement = lowerIsBetter ? rawDifference < 0 : rawDifference > 0
  
  // Calculate percentage difference
  const baseLine = lowerIsBetter ? num2 : num1
  const percentDifference = Math.abs((rawDifference / baseLine) * 100)
  
  return {
    rawDifference: Math.abs(rawDifference),
    percentDifference,
    isImprovement,
  }
}

/**
 * Determine if lower values are better for a given exercise
 */
export function isLowerBetter(exercise: string): boolean {
  // For these exercises, a lower time/score is better
  const lowerIsBetterExercises = [
    "10m Sprint",
    "20m Sprint",
    "Gewandtheit",
    "Dribbling",
    "Ballkontrolle",
  ]
  
  return lowerIsBetterExercises.includes(exercise)
}

/**
 * Estimate player percentile based on result and exercise
 */
export function estimatePlayerPercentile(playerResult: number | string, exercise: string): number | null {
  const benchmarks = getBenchmarkData(exercise)
  
  if (benchmarks.length === 0) {
    return null
  }
  
  const numericResult = parseResult(playerResult)
  const lowerIsBetter = isLowerBetter(exercise)
  
  // Sort benchmarks by percentile
  const sortedBenchmarks = [...benchmarks].sort((a, b) => {
    const aPercentile = Number.parseInt(a.name.split("-")[1] || "0", 10)
    const bPercentile = Number.parseInt(b.name.split("-")[1] || "0", 10)
    return aPercentile - bPercentile
  })
  
  // Convert to array of { percentile, value } pairs
  const percentileValues = sortedBenchmarks
    .map((benchmark) => {
      const percentile = Number.parseInt(benchmark.name.split("-")[1] || "0", 10)
      return {
        percentile,
        value: parseResult(benchmark.ergebnis),
      }
    })
    .filter((item) => !isNaN(item.percentile))
  
  // Handle empty or invalid array
  if (percentileValues.length === 0) {
    return null
  }
  
  // Find where player result fits in the percentile range
  // For lower is better, we need to check if result is less than benchmark
  // For higher is better, we need to check if result is greater than benchmark
  let playerPercentile = 0
  
  if (lowerIsBetter) {
    // If lower is better and player result is better than best benchmark, cap at highest percentile
    if (numericResult <= percentileValues[percentileValues.length - 1].value) {
      playerPercentile = percentileValues[percentileValues.length - 1].percentile
    }
    // If lower is better and player result is worse than worst benchmark, set to lowest percentile
    else if (numericResult >= percentileValues[0].value) {
      playerPercentile = percentileValues[0].percentile
    }
    // Otherwise interpolate
    else {
      for (let i = 0; i < percentileValues.length - 1; i++) {
        const lower = percentileValues[i]
        const upper = percentileValues[i + 1]
        
        if (numericResult <= lower.value && numericResult > upper.value) {
          // Interpolate within this range
          const range = lower.value - upper.value
          const position = lower.value - numericResult
          const percentileRange = upper.percentile - lower.percentile
          const interpolation = (position / range) * percentileRange
          playerPercentile = Math.round(lower.percentile + interpolation)
          break
        }
      }
    }
  } else {
    // If higher is better and player result is better than best benchmark, cap at highest percentile
    if (numericResult >= percentileValues[percentileValues.length - 1].value) {
      playerPercentile = percentileValues[percentileValues.length - 1].percentile
    }
    // If higher is better and player result is worse than worst benchmark, set to lowest percentile
    else if (numericResult <= percentileValues[0].value) {
      playerPercentile = percentileValues[0].percentile
    }
    // Otherwise interpolate
    else {
      for (let i = 0; i < percentileValues.length - 1; i++) {
        const lower = percentileValues[i]
        const upper = percentileValues[i + 1]
        
        if (numericResult >= lower.value && numericResult < upper.value) {
          // Interpolate within this range
          const range = upper.value - lower.value
          const position = numericResult - lower.value
          const percentileRange = upper.percentile - lower.percentile
          const interpolation = (position / range) * percentileRange
          playerPercentile = Math.round(lower.percentile + interpolation)
          break
        }
      }
    }
  }
  
  return playerPercentile
}

/**
 * Get performance category based on percentile
 */
export function getPerformanceCategory(percentile: number | null): string {
  if (percentile === null) return "unknown"
  
  if (percentile < 31) return "unterdurchschnittlich"
  if (percentile < 71) return "durchschnittlich"
  if (percentile < 81) return "gut"
  if (percentile < 91) return "sehr gut"
  return "ausgezeichnet"
}

/**
 * Get gradient color for percentile indicator
 */
export function getGradientColor(percentile: number | null): string {
  if (percentile === null) return "bg-gray-400"
  
  if (percentile < 31) return "bg-red-600/60"
  if (percentile < 71) return "bg-orange-500/60"
  if (percentile < 81) return "bg-yellow-500/60"
  if (percentile < 91) return "bg-green-500/60"
  return "bg-green-600/60"
}

/**
 * Get gradient text color based on percentile
 */
export function getGradientTextColor(percentile: number | null): string {
  if (percentile === null) return "text-gray-400"
  
  if (percentile < 31) return "text-red-600"
  if (percentile < 71) return "text-orange-500"
  if (percentile < 81) return "text-yellow-500"
  if (percentile < 91) return "text-green-500"
  return "text-green-600"
}

/**
 * Get video mappings for an exercise for use in performance ranking buttons
 */
export function getVideoMappingsForExercise(exercise: string): ButtonVideoMapping[] {
  // Find all videos for this exercise
  const exerciseVideos = videoData.filter((video) => video.test === exercise)
  
  // Map to button mappings
  const mappings: ButtonVideoMapping[] = exerciseVideos.map((video) => ({
    buttonIndex: video.buttonIndex || 0,
    videoUrl: video.url,
    label: `${video.name}'s Technique`, // Create a nice label from the data
  }))
  
  // Ensure we have at least one mapping
  if (mappings.length === 0) {
    // Return a placeholder mapping with no video
    return [
      { buttonIndex: 0, videoUrl: "", label: "No video available" },
    ]
  }
  
  return mappings
} 