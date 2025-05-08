"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
// Image imports will need to be handled by the parent component passing the src string.
// import bentAttr1 from '@/assets/images/bent_attr1_subject.png'; // Example, to be removed

// --- Data Types ---
export interface VideoDetail {
  url: string;
  title: string;
  description: string;
  score: string;
}

export interface CardData {
  id: string; // Unique ID for layout animations and keys
  title: string;
  description: string; // Description shown in the list view
  src: string; // Image source for the card in the list view
  ctaText: string;
  ctaLink?: string; // Optional: link for a CTA button in the modal
  videos?: VideoDetail[]; // Optional: if the card has videos
  content?: () => React.ReactNode; // Optional: for cards without videos, like original
}

// --- Component Props ---
interface GenericExpandableCardProps {
  cardsData: CardData[];
  themeColor?: "blue" | "green"; // Add more themes as needed
}

export function GenericExpandableCard({
  cardsData,
  themeColor = "blue", // Default theme
}: GenericExpandableCardProps) {
  const [activeCard, setActiveCard] = useState<CardData | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const componentId = useId(); // Renamed from 'id' to avoid conflict with card.id

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCard(null); // Consistently use null
      }
    }

    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      // Restore overflow on unmount if card was active
      if (activeCard) { // Check added for safety, though covered by else in main effect body
         document.body.style.overflow = "auto";
      }
    };
  }, [activeCard]);

  const handleOutsideClick = React.useCallback(() => {
    setActiveCard(null);
  }, []);

  useOutsideClick(ref, handleOutsideClick);

  const activeVideoData = activeCard?.videos?.[currentVideoIndex];

  // Dynamic class for theme color
  const getThemeColorClasses = (type: "text" | "border" | "bg" | "hover-bg" | "hover-text") => {
    const baseColor = themeColor === "green" ? "green" : "blue";
    switch (type) {
      case "text":
        return `text-${baseColor}-600 dark:text-${baseColor}-400`;
      case "border":
        return `border-${baseColor}-600 dark:border-${baseColor}-400`;
      case "bg":
        return `bg-${baseColor}-500`;
      case "hover-bg":
        return `hover:bg-${baseColor}-500`;
       case "hover-text":
        return `hover:text-white`; // Assuming white text on theme color hover
      default:
        return "";
    }
  };


  return (
    <>
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeCard ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-close-${activeCard.id}-${componentId}`}
              layout // Added layout to close button for consistency
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActiveCard(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${activeCard.id}-${componentId}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {activeCard.videos && activeCard.videos.length > 0 ? (
                <div className="flex flex-col h-full">
                  <motion.div
                    // Consider if layoutId is needed here or if it causes issues with video key changes
                    // layoutId={`video-${activeCard.id}-${componentId}`}
                    className="w-full h-[650px] flex justify-center bg-black flex-grow"
                  >
                    <video
                      key={activeCard.videos[currentVideoIndex].url} // Keyed to video URL
                      controls
                      autoPlay
                      className="h-full object-contain"
                      src={activeCard.videos[currentVideoIndex].url}
                    />
                  </motion.div>
                  {activeCard.videos.length > 1 && (
                    <div className="flex border-b border-gray-200 dark:border-neutral-700">
                      {activeCard.videos.map((video, index) => (
                        <button
                          key={video.title}
                          onClick={() => setCurrentVideoIndex(index)}
                          className={`py-3 px-6 font-medium text-sm transition-colors ${
                            currentVideoIndex === index
                              ? `${getThemeColorClasses("text")} border-b-2 ${getThemeColorClasses("border")}`
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100" // Generic hover for inactive tabs
                          }`}
                          aria-current={currentVideoIndex === index ? "page" : undefined}
                        >
                          {video.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Fallback for cards without videos, using the main card image
                <motion.div layoutId={`image-${activeCard.id}-${componentId}`}>
                  <img
                    width={200} // These seem like defaults, might want to make them more dynamic or review
                    height={200}
                    src={activeCard.src} // Use active card's main image
                    alt={activeCard.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>
              )}

              <div className="flex justify-between items-start p-4"> {/* Changed to items-start for better alignment if content wraps */}
                <div className="flex-grow"> {/* Allow title/description to take more space */}
                  <motion.h3
                    layoutId={`title-${activeCard.id}-${componentId}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200"
                  >
                    {/* Display video description if available, otherwise card title */}
                    {activeVideoData?.description || activeCard.title}
                  </motion.h3>
                  {/* Optionally, show card's main description if no video description */}
                  {activeVideoData && activeCard.description && activeVideoData.description !== activeCard.description && (
                     <motion.p className="text-sm text-neutral-500 dark:text-neutral-400">
                       {activeCard.description}
                     </motion.p>
                  )}
                </div>
                
                <div className="flex items-center gap-3 flex-shrink-0"> {/* Prevent shrinking */}
                  {activeVideoData?.score && (
                     <motion.div // Changed from <a> to <div> if not always a link
                        layoutId={`button-cta-${activeCard.id}-${componentId}`} // Ensured unique layoutId from list item
                        className={`px-4 py-2 text-sm rounded-full font-bold ${getThemeColorClasses("bg")} text-white`}
                      >
                        {activeVideoData.score}
                      </motion.div>
                  )}
                  {/* Generic CTA from card data if no video score or if it's a non-video card */}
                  {!activeVideoData?.score && activeCard.ctaLink && (
                     <motion.a
                        layoutId={`button-cta-${activeCard.id}-${componentId}`}
                        href={activeCard.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 text-sm rounded-full font-bold ${getThemeColorClasses("bg")} text-white`}
                      >
                        {activeCard.ctaText} {/* Use main CTA text */}
                      </motion.a>
                  )}
                  
                  <button
                    onClick={() => setActiveCard(null)}
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full w-9 h-9"
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Render custom content if provided and no videos */}
              {!activeCard.videos && activeCard.content && (
                <div className="p-4">
                  {typeof activeCard.content === 'function' ? activeCard.content() : activeCard.content}
                </div>
              )}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cardsData.map((card) => (
          <motion.li // Changed from div to li for semantic list
            layoutId={`card-${card.id}-${componentId}`}
            key={card.id} // Use card.id as key
            onClick={() => {
              setCurrentVideoIndex(0); // Reset to first video when opening a card
              setActiveCard(card);
            }}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            role="button" // Added role
            tabIndex={0} // Added tabIndex for keyboard accessibility
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveCard(card);}} // Keyboard activation
          >
            <div className="flex gap-4 flex-col md:flex-row items-center"> {/* items-center added */}
              <motion.div layoutId={`image-${card.id}-${componentId}`}>
                <img
                  width={100} // Default width for list item image
                  height={100} // Default height for list item image
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="text-center md:text-left"> {/* Ensure text alignment */}
                <motion.h3
                  layoutId={`title-${card.id}-${componentId}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  // Consider if description needs a layoutId or if it's too much
                  // layoutId={`description-${card.id}-${componentId}`} 
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-cta-${card.id}-${componentId}`} // Unique layoutId
              className={`px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 text-black mt-4 md:mt-0 ${getThemeColorClasses("hover-bg")} ${getThemeColorClasses("hover-text")}`}
            >
              {card.ctaText}
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

// Assuming CloseIcon is defined elsewhere or we can define it here
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black" // Consider dark mode for icon
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}; 