"use client";
import { Main } from '@/components/layout/main'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { GenericExpandableCard, CardData } from '@/components/ui/generic-expandable-card'
import { useState } from 'react';
import { testimonials as testimonialData, finleyCardsData as finleyCardData, bentCardsData as bentCardData } from '@/data/testimonials';

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
    src: finleyPortrait,
    cardType: "finley"
  },
  {
    quote: "",
    name: "Bent",
    designation: "Nr.6",
    src: bentAttr1,
    cardType: "bent"
  }
];

// --- Card Data Definitions ---
const finleyCardsData: CardData[] = [
  {
    id: "finley-card-1",
    title: "Passen",
    description: "Entwicklung 2023",
    src: finleyPortrait,
    ctaText: "Details",
    ctaLink: "#",
    videos: [
      {
        url: "https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Nested%20Sequence%2001%20-%20(4x5).mp4",
        title: "05/2025",
        description: "Ergebnis",
        score: "7/10"
      },
      {
        url: "https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/Timeline%201%20(2).mp4",
        title: "11/2025",
        description: "Ergebnis",
        score: "8/10"
      }
    ]
  },
];

const bentCardsData: CardData[] = [
  {
    id: "bent-card-1",
    title: "Jonglieren",
    description: "Entwicklung 2024",
    src: bentAttr1,
    ctaText: "Details",
    ctaLink: "#",
    videos: [
      {
        url: "https://data3.fra1.cdn.digitaloceanspaces.com/6%20(2).mp4",
        title: "03/2024",
        description: "Ergebnis",
        score: "8/10"
      },
      {
        url: "https://data3.fra1.cdn.digitaloceanspaces.com/bent1/bent.jong.mp4",
        title: "09/2025",
        description: "Ergebnis",
        score: "9/10"
      }
    ]
  },
];

export default function Tasks() {
  const [showExpandableCard, setShowExpandableCard] = useState(false);
  const [selectedTestimonialCardType, setSelectedTestimonialCardType] = useState<string | null>(null);
  
  const handleTestimonialClick = (cardType: string) => {
    setSelectedTestimonialCardType(cardType);
    setShowExpandableCard(true);
  };
  
  const handleBackToTestimonials = () => {
    setShowExpandableCard(false);
    setSelectedTestimonialCardType(null);
  };

  let currentCardsData: CardData[] = [];
  let currentThemeColor: "blue" | "green" = "blue";

  if (selectedTestimonialCardType === "finley") {
    currentCardsData = finleyCardData;
    currentThemeColor = "green";
  } else if (selectedTestimonialCardType === "bent") {
    currentCardsData = bentCardData;
    currentThemeColor = "blue";
  }

  return (
    <Main className="h-screen p-0 overflow-auto">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Entwicklung</h1>
        
        {showExpandableCard && selectedTestimonialCardType ? (
          <>
            <div className="flex justify-between items-center mb-6 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold">Übung: {selectedTestimonialCardType.charAt(0).toUpperCase() + selectedTestimonialCardType.slice(1)}</h2>
              <button 
                onClick={handleBackToTestimonials}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full text-sm font-medium transition-colors"
                aria-label="Back to testimonials"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Back
              </button>
            </div>
            <GenericExpandableCard cardsData={currentCardsData} themeColor={currentThemeColor} />
          </>
        ) : (
          <div className="cursor-pointer">
            <AnimatedTestimonials 
              testimonials={testimonialData.map(t => ({
                ...t,
                onClick: () => handleTestimonialClick(t.cardType || t.name.toLowerCase())
              }))} 
            />
          </div>
        )}
      </div>
    </Main>
  )
} 