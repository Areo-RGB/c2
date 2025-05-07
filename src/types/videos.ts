import type React from "react"
import type { PerformanceData } from "./performance"

/**
 * Video player props
 */
export interface VideoPlayerProps {
  src: string
  title?: string
  poster?: string
  className?: string
  autoPlay?: boolean
}

/**
 * Video source for comparison
 */
export interface VideoSource {
  src: string
  title?: string
  poster?: string
}

/**
 * Video comparison props
 */
export interface VideoComparisonProps {
  leftVideo: VideoSource
  rightVideo: VideoSource
  className?: string
  initialSyncState?: boolean
}

/**
 * Enhanced video comparison props with metrics
 */
export interface EnhancedVideoComparisonProps extends VideoComparisonProps {
  metrics?: MetricData[]
  leftPerformanceData?: PerformanceData[]
  rightPerformanceData?: PerformanceData[]
}

/**
 * Video metadata
 */
export interface VideoMetadata {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  duration: number
  recordedDate: string
  athlete: string
  category: string
  coachNotes?: string
}

/**
 * Video player settings
 */
export interface VideoPlayerSettings {
  playbackRate: number
  volume: number
  isMuted: boolean
  isLooping: boolean
  showCaptions: boolean
}

/**
 * Annotation tool types
 */
export type AnnotationTool = "pencil" | "circle" | "arrow" | "text"

/**
 * Point coordinates
 */
export interface Point {
  x: number
  y: number
}

/**
 * Annotation data
 */
export interface Annotation {
  tool: AnnotationTool
  color: string
  points: Point[]
  timestamp: number
  text?: string
}

/**
 * Video annotation props
 */
export interface VideoAnnotationProps {
  videoRef: React.RefObject<HTMLVideoElement>
  width: number
  height: number
  className?: string
  onSave?: (annotations: Annotation[]) => void
}

/**
 * Performance metric data point
 */
export interface MetricPoint {
  time: number
  value: number
}

/**
 * Performance metric data
 */
export interface MetricData {
  id: string
  name: string
  data: MetricPoint[]
}

/**
 * Metric configuration
 */
export interface MetricConfig {
  label: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  unit: string
  formatValue?: (value: number) => string
}

/**
 * Performance overlay props
 */
export interface PerformanceOverlayProps {
  videoRef: React.RefObject<HTMLVideoElement>
  width: number
  height: number
  className?: string
  performanceData?: PerformanceData[]
  comparisonData?: PerformanceData[] 
  showComparison?: boolean
}

// Annotation position types
export type AnnotationPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "middle-left"
  | "middle-center"
  | "middle-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

// Text annotation interface
export interface TextAnnotation {
  id: string
  videoUrl: string
  text: string
  startTime: number
  duration: number
  position: AnnotationPosition
  style?: {
    color?: string
    backgroundColor?: string
    fontSize?: number
    fontWeight?: string
  }
}

// Video annotation overlay props
export interface VideoAnnotationOverlayProps {
  videoUrl: string
  currentTime: number
  className?: string
}

/**
 * Video data structure for performance videos
 */
export interface VideoData {
  url: string
  name: string
  test: string
  result: number | string
  date?: string
  description?: string
  buttonIndex?: number
}

/**
 * Button to video mapping structure
 */
export interface ButtonVideoMapping {
  buttonIndex: number
  videoUrl: string
  label: string
} 