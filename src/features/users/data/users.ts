import { UserStatus } from './schema'

// Performance data
const performanceData = [
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
];

// Define DFB benchmark data for all exercises
const benchmarkData = [
  // 10m Sprint benchmarks (lower is better)
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-97", ergebnis: 1.99 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-90", ergebnis: 2.05 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-80", ergebnis: 2.10 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-70", ergebnis: 2.13 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-60", ergebnis: 2.16 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-50", ergebnis: 2.18 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-40", ergebnis: 2.21 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-30", ergebnis: 2.24 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-20", ergebnis: 2.28 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-10", ergebnis: 2.33 },
  { kategorie: "Schnelligkeit", uebung: "10m Sprint", name: "DFB-3", ergebnis: 2.39 },
  
  // 20m Sprint benchmarks (lower is better)
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-97", ergebnis: 3.47 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-90", ergebnis: 3.57 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-80", ergebnis: 3.64 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-70", ergebnis: 3.69 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-60", ergebnis: 3.74 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-50", ergebnis: 3.78 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-40", ergebnis: 3.82 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-30", ergebnis: 3.87 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-20", ergebnis: 3.93 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-10", ergebnis: 4.01 },
  { kategorie: "Schnelligkeit", uebung: "20m Sprint", name: "DFB-3", ergebnis: 4.14 },
  
  // Gewandtheit benchmarks (lower is better)
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-97", ergebnis: 7.91 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-90", ergebnis: 8.11 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-80", ergebnis: 8.28 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-70", ergebnis: 8.42 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-60", ergebnis: 8.54 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-50", ergebnis: 8.66 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-40", ergebnis: 8.77 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-30", ergebnis: 8.90 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-20", ergebnis: 9.07 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-10", ergebnis: 9.33 },
  { kategorie: "Beweglichkeit", uebung: "Gewandtheit", name: "DFB-3", ergebnis: 9.66 },
  
  // Dribbling benchmarks (lower is better)
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-97", ergebnis: 10.43 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-90", ergebnis: 10.84 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-80", ergebnis: 11.16 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-70", ergebnis: 11.44 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-60", ergebnis: 11.68 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-50", ergebnis: 11.90 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-40", ergebnis: 12.15 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-30", ergebnis: 12.50 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-20", ergebnis: 12.84 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-10", ergebnis: 13.42 },
  { kategorie: "Technik", uebung: "Dribbling", name: "DFB-3", ergebnis: 14.37 },
  
  // Ballkontrolle benchmarks (lower is better)
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-97", ergebnis: 9.0 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-90", ergebnis: 9.66 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-80", ergebnis: 10.18 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-70", ergebnis: 10.59 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-60", ergebnis: 10.99 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-50", ergebnis: 11.36 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-40", ergebnis: 11.78 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-30", ergebnis: 12.28 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-20", ergebnis: 12.86 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-10", ergebnis: 13.81 },
  { kategorie: "Technik", uebung: "Ballkontrolle", name: "DFB-3", ergebnis: 15.29 },
  
  // Balljonglieren benchmarks (higher is better)
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-97", ergebnis: 6.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-90", ergebnis: 3.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-80", ergebnis: 2.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-50", ergebnis: 1.0 },
  { kategorie: "Technik", uebung: "Balljonglieren", name: "DFB-3", ergebnis: 0.0 },
  
  // YoYo IR1 benchmarks (higher is better)
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-97", ergebnis: 2000 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-90", ergebnis: 1800 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-80", ergebnis: 1600 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-70", ergebnis: 1400 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-60", ergebnis: 1200 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-50", ergebnis: 1000 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-40", ergebnis: 800 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-30", ergebnis: 600 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-20", ergebnis: 500 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-10", ergebnis: 450 },
  { kategorie: "Ausdauer", uebung: "YoYo IR1", name: "DFB-3", ergebnis: 400 },
];

// Combine performance and benchmark data
const allData = [...performanceData, ...benchmarkData];

// Generate a simple UUID function
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Functions for performance data processing
function isLowerBetter(exercise: string): boolean {
  // Define exercises where higher values are better
  const higherIsBetter = ["Balljonglieren", "YoYo IR1"]
  // For all other exercises, lower values are better
  return !higherIsBetter.includes(exercise)
}

/**
 * Improved percentile estimation that uses proper interpolation
 * between benchmark data points for each exercise
 */
function estimatePlayerPercentile(playerResult: number | string, exercise: string): number | null {
  try {
    // Convert player result to number
    const result = typeof playerResult === "string" 
      ? Number.parseFloat(String(playerResult).replace(/[^\d.]/g, "")) 
      : playerResult

    if (isNaN(result)) {
      return null;
    }

    // Get benchmark data for this specific exercise
    const benchmarks = allData
      .filter(item => item.uebung === exercise && item.name.startsWith("DFB"))
      .map(item => {
        // Extract percentile from DFB-XX format
        const percentileMatch = item.name.match(/DFB-(\d+)/)
        const percentile = percentileMatch ? Number.parseInt(percentileMatch[1], 10) : Number.NaN

        const benchmarkResult = typeof item.ergebnis === "string" 
          ? Number.parseFloat(String(item.ergebnis).replace(/[^\d.]/g, "")) 
          : item.ergebnis

        return { percentile, result: benchmarkResult }
      })
      .filter(item => !isNaN(item.percentile) && !isNaN(item.result))

    // If we don't have enough benchmark data, return a default percentile
    if (benchmarks.length < 2) {
      return 50;
    }

    // Sort benchmarks by result
    const lowerBetter = isLowerBetter(exercise);
    benchmarks.sort((a, b) => lowerBetter 
      ? a.result - b.result  // For lower is better: sort ascending by result
      : b.result - a.result  // For higher is better: sort descending by result
    );

    // Handle edge cases where the result is better than the best benchmark
    // or worse than the worst benchmark
    const worstBenchmark = lowerBetter ? benchmarks[benchmarks.length - 1] : benchmarks[benchmarks.length - 1];
    const bestBenchmark = lowerBetter ? benchmarks[0] : benchmarks[0];

    if (lowerBetter) {
      // For exercises where lower is better (sprints, agility, etc.)
      if (result <= bestBenchmark.result) {
        // Result is better than or equal to the best benchmark
        return bestBenchmark.percentile;
      }
      if (result >= worstBenchmark.result) {
        // Result is worse than or equal to the worst benchmark
        return worstBenchmark.percentile;
      }
    } else {
      // For exercises where higher is better (YoYo IR1, Balljonglieren)
      if (result >= bestBenchmark.result) {
        // Result is better than or equal to the best benchmark
        return bestBenchmark.percentile;
      }
      if (result <= worstBenchmark.result) {
        // Result is worse than or equal to the worst benchmark
        return worstBenchmark.percentile;
      }
    }

    // Find the two benchmarks the result falls between
    let lowerBenchmark: {percentile: number, result: number} | null = null;
    let upperBenchmark: {percentile: number, result: number} | null = null;

    for (let i = 0; i < benchmarks.length - 1; i++) {
      const current = benchmarks[i];
      const next = benchmarks[i + 1];

      if (lowerBetter) {
        // For exercises where lower values are better
        if (result > current.result && result <= next.result) {
          lowerBenchmark = current;
          upperBenchmark = next;
          break;
        }
      } else {
        // For exercises where higher values are better
        if (result <= current.result && result > next.result) {
          lowerBenchmark = current;
          upperBenchmark = next;
          break;
        }
      }
    }

    // If we couldn't find the right interval, use the middle value
    if (!lowerBenchmark || !upperBenchmark) {
      return 50;
    }

    // Linear interpolation to estimate percentile
    const resultRange = Math.abs(upperBenchmark.result - lowerBenchmark.result);
    const percentileRange = Math.abs(upperBenchmark.percentile - lowerBenchmark.percentile);
    
    // Calculate how far the result is along the range (0 to 1)
    const position = Math.abs(result - lowerBenchmark.result) / resultRange;
    
    // Interpolate between the percentiles
    const interpolatedPercentile = lowerBenchmark.percentile - (position * percentileRange);
    
    return Math.round(interpolatedPercentile);
  } catch (_error) {
    return null;
  }
}

function getPerformanceCategory(percentile: number | null): string {
  if (percentile === null) return "unknown"

  if (percentile < 3) return "sehr schwach"
  if (percentile < 30) return "unterdurchschnittlich"
  if (percentile < 70) return "durchschnittlich"
  if (percentile < 80) return "gut"
  if (percentile < 97) return "sehr gut"
  return "hervorragend"
}

function getCategoryColor(category: string): string {
  switch (category) {
    case "sehr schwach":
      return "border border-red-700 text-red-700" 
    case "unterdurchschnittlich":
      return "border border-red-500 text-red-700" 
    case "durchschnittlich":
      return "border border-orange-500 text-orange-700" 
    case "gut":
      return "border border-yellow-500 text-yellow-700" 
    case "sehr gut":
      return "border border-green-400 text-green-700" 
    case "hervorragend":
      return "border border-green-500 text-green-800" 
    default:
      return "border border-gray-400 text-gray-700"
  }
}

interface PerformanceItem {
  kategorie: string;
  uebung: string;
  name: string;
  ergebnis: number | string;
}

function verifyPercentileCalculation(item: PerformanceItem): void {
  // Just call the function to verify it works, but don't use the result
  estimatePlayerPercentile(item.ergebnis, item.uebung);
  // No need to use the percentile or calculate category
}

// Run verification for each player without logging
performanceData.forEach(verifyPercentileCalculation);

// Define the basic mock users data
export type User = {
  id: string
  name: string
  email: string
  status: UserStatus
  imageUrl: string
  lastActive: Date
  joinDate: Date
  role: string
  team?: string
  bio?: string
  age?: number
  height?: number
  weight?: number
  position?: string
  foot?: string
}

export const users: User[] = [
  {
    id: generateUUID(),
    name: 'Finley',
    email: 'finley@example.com',
    status: 'inactive', // Changed from 'online' to match UserStatus type
    imageUrl: '/avatars/finley.jpg',
    lastActive: new Date(),
    joinDate: new Date(2023, 6, 12),
    role: 'Spieler',
    team: 'U19',
    bio: 'Angreifer mit Vorliebe für präzise Pässe und schnellen Spielaufbau.',
    age: 18,
    height: 178,
    weight: 72,
    position: 'Mittelfeld',
    foot: 'rechts',
  },
  {
    id: generateUUID(),
    name: 'Alex',
    email: 'alex@example.com',
    status: 'inactive',
    imageUrl: '/avatars/alex.jpg',
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    joinDate: new Date(2023, 3, 5),
    role: 'Spieler',
    team: 'U19',
    bio: 'Schneller Verteidiger mit starkem Stellungsspiel und guter Antizipation.',
    age: 19,
    height: 185,
    weight: 78,
    position: 'Verteidigung',
    foot: 'links',
  },
  // Add more users as needed
];

// Export all the functions and data
export {
  performanceData,
  benchmarkData,
  allData,
  isLowerBetter,
  estimatePlayerPercentile,
  getPerformanceCategory,
  getCategoryColor,
};
