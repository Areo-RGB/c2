"use client";
import { Main } from '@/components/layout/main'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { ExpandableCardDemo } from '@/components/ui/expandable-card'
import { ExpandableCardDemoBent } from '@/components/ui/expandable-card-bent'
import { useState } from 'react';

// Import local images
import finleyPortrait from '@/assets/images/Finley_portrait.png';
import bentAttr1 from '@/assets/images/bent_attr1_subject.png';

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

// Sample testimonials data
const testimonials = [
  {
    quote: "",
    name: "Finley",
    designation: "Nr.5",
    src: finleyPortrait
  },
  {
    quote: "",
    name: "Bent",
    designation: "Nr.6",
    src: bentAttr1
  }
];

export default function Tasks() {
  const [showExpandableCard, setShowExpandableCard] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);
  
  // Handle click on any testimonial image
  const handleTestimonialClick = (name: string) => {
    setSelectedTestimonial(name);
    setShowExpandableCard(true);
  };
  
  // Handle going back to testimonials
  const handleBackToTestimonials = () => {
    setShowExpandableCard(false);
    setSelectedTestimonial(null);
  };

  return (
    <Main className="h-screen p-0 overflow-auto">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Entwicklung</h1>
        
        {showExpandableCard ? (
          <>
            <div className="flex justify-between items-center mb-6 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold">Übung</h2>
              <button 
                onClick={handleBackToTestimonials}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full text-sm font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back
              </button>
            </div>
            {selectedTestimonial === "Bent" ? (
              <ExpandableCardDemoBent />
            ) : (
              <ExpandableCardDemo />
            )}
          </>
        ) : (
          <div className="cursor-pointer">
            <AnimatedTestimonials 
              testimonials={testimonials.map(t => ({
                ...t,
                onClick: () => handleTestimonialClick(t.name)
              }))} 
            />
          </div>
        )}
      </div>
    </Main>
  )
} 