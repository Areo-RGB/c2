"use client";
import { Main } from '@/components/layout/main'
// import { ThreeDMarquee } from '@/components/ui/3d-marquee' // Removed import
// import { Timeline } from '@/components/ui/timeline' // Removed import

// Sample timeline data // Removed timelineData
// const timelineData = [ ... ]; // Removed timelineData

// Placeholder images for the marquee
const placeholderImages = [
  'https://picsum.photos/seed/p1/970/700',
  'https://picsum.photos/seed/p2/970/700',
  'https://picsum.photos/seed/p3/970/700',
  'https://picsum.photos/seed/p4/970/700',
  'https://picsum.photos/seed/p5/970/700',
  'https://picsum.photos/seed/p6/970/700',
  'https://picsum.photos/seed/p7/970/700',
  'https://picsum.photos/seed/p8/970/700',
];

export default function Tasks() {
  // const images = [ ... ]; // Removed images array
  return (
    <Main className="h-screen p-0 overflow-hidden">
      {/* Content removed to make the page blank */}
      {/* <div className="relative mx-auto my-0 flex h-full w-full flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div> */}
    </Main>
  )
} 