import { Main } from '@/components/layout/main'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
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
  return (
    <Main className="p-0 overflow-auto flex flex-col items-center justify-center">
      {/* Added ThreeDMarquee component */}
      <ThreeDMarquee images={placeholderImages} />
    </Main>
  )
} 