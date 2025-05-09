"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useIsMobile } from "@/hooks/use-mobile"; // Import the hook
import { cn } from "@/lib/utils"; // Import cn utility

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
  const isMobile = useIsMobile(); // Use the hook
  
  // Touch state for swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum swipe distance required (in px)
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    if (!activeCard?.videos || activeCard.videos.length <= 1) return;
    
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !activeCard?.videos) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentVideoIndex < activeCard.videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (isRightSwipe && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
    
    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveCard(null); // Consistently use null
      }
    }

    if (activeCard) {
      // Only hide overflow on larger screens where modal is truly fixed overlay
      if (!isMobile) {
         document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      // Restore overflow on unmount if card was active and not mobile
      if (activeCard && !isMobile) {
         document.body.style.overflow = "auto";
      }
    };
  }, [activeCard, isMobile]); // Add isMobile to dependencies

  const handleOutsideClick = React.useCallback(() => {
    setActiveCard(null);
  }, []);

  // Only use outside click when NOT on mobile
  useOutsideClick(ref, handleOutsideClick, !isMobile); // Pass !isMobile as enabled condition

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

  // Determine if layout animations should be enabled
  const enableLayoutAnimations = !isMobile;

  return (
    <>
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Use conditional className instead of fixed inset for mobile full screen
            className={cn(
              "fixed inset-0 bg-black/20 h-full w-full z-10",
              isMobile && "bg-background/80 dark:bg-black/80" // Use a softer overlay on mobile
            )}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeCard ? (
          <div
            className={cn(
              "fixed inset-0 grid place-items-center z-[100] p-4", // Added padding for mobile
              isMobile && "p-0" // Remove padding for full-screen mobile modal
            )}
          >
            <motion.button
              key={`button-close-${activeCard.id}-${componentId}`}
              layout={enableLayoutAnimations} // Conditional layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className={cn(
                 "flex absolute top-4 right-4 z-[110] items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-10 w-10 shadow-md border border-gray-200 dark:border-neutral-700",
                 isMobile && "top-2 right-2 h-8 w-8" // Smaller close button on mobile
              )}
              onClick={() => setActiveCard(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={enableLayoutAnimations ? `card-${activeCard.id}-${componentId}` : undefined} // Conditional layoutId
              ref={ref}
              className={cn(
                "w-screen h-screen flex flex-col bg-black dark:bg-black overflow-hidden",
                !isMobile && "max-w-2xl max-h-[80vh] rounded-xl", // Constrain size on larger screens
                isMobile && "rounded-none" // No rounded corners on mobile full screen
              )}
            >
              {activeCard.videos && activeCard.videos.length > 0 ? (
                <div className="flex flex-col h-full">
                  <motion.div
                    className={cn(
                      "w-full h-[calc(100vh-100px)] flex justify-center items-center bg-black flex-grow overflow-hidden",
                      !isMobile && "rounded-t-xl", // Rounded top on larger screens
                      isMobile && "h-full pb-[120px]" // Use full height on mobile, push info to bottom
                    )}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    {/* Swipe indicators for videos with multiple items */}
                    {activeCard.videos && activeCard.videos.length > 1 && touchStart && touchEnd && (
                      <>
                        {/* Left indicator */}
                        {currentVideoIndex > 0 && (
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M15 18l-6-6 6-6" />
                            </svg>
                          </div>
                        )}
                        
                        {/* Right indicator */}
                        {currentVideoIndex < activeCard.videos.length - 1 && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </div>
                        )}
                      </>
                    )}
                    
                    <video
                      key={activeCard.videos[currentVideoIndex].url}
                      controls
                      autoPlay
                      className={cn(
                         "min-h-full min-w-full object-cover",
                         isMobile && "max-h-full max-w-full" // Ensure video fits within bounds on mobile
                       )}
                      src={activeCard.videos[currentVideoIndex].url}
                    />
                  </motion.div>
                  {/* Navigation dots - Only visible when video is playing and on mobile */}
                   {activeCard.videos.length > 1 && isMobile && (
                     <div className="flex absolute bottom-[100px] left-0 right-0 justify-center py-2 px-4 z-[110]">
                       <div className="flex items-center justify-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10 shadow-lg">
                         {activeCard.videos.map((video, index) => (
                           <button
                             key={`mobile-dot-${video.title}`}
                             onClick={() => setCurrentVideoIndex(index)}
                             className={`w-2 h-2 rounded-full transition-colors`}
                             aria-current={currentVideoIndex === index ? "page" : undefined}
                             style={{
                               backgroundColor: currentVideoIndex === index
                                 ? 'white'
                                 : 'rgba(255, 255, 255, 0.4)'
                             }}
                           />
                         ))}
                       </div>
                     </div>
                   )}
                  {activeCard.videos.length > 1 && !isMobile && (
                    <div className="flex absolute bottom-[100px] left-0 right-0 justify-center py-2 px-4 z-[110]">
                      <div className="flex items-center justify-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10 shadow-lg">
                        {activeCard.videos.map((video, index) => (
                          <button
                            key={video.title}
                            onClick={() => setCurrentVideoIndex(index)}
                            className={`relative py-2 px-5 font-medium text-sm transition-all rounded-lg ${
                              currentVideoIndex === index
                                ? `bg-white/10 text-white font-semibold shadow-inner`
                                : "text-gray-300 hover:text-white hover:bg-white/5"
                            }`}
                            aria-current={currentVideoIndex === index ? "page" : undefined}
                          >
                            <span className="flex items-center">
                              <span className={`mr-2 h-2 w-2 rounded-full ${currentVideoIndex === index ? 'bg-blue-500' : 'bg-gray-500'}`}></span>
                              {video.title}
                            </span>
                            {currentVideoIndex === index && (
                              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 mx-2"></span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mobile swipe hint */}
                  {activeCard.videos && activeCard.videos.length > 1 && isMobile && (
                    <div className="absolute bottom-[135px] left-0 right-0 flex justify-center">
                      <div className="bg-black/40 backdrop-blur-sm text-white/80 text-xs px-3 py-1.5 rounded-full">
                        Swipe to change videos
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Fallback for cards without videos, using the main card image
                <motion.div layoutId={enableLayoutAnimations ? `image-${activeCard.id}-${componentId}` : undefined}>
                  <img
                    width={200} // These seem like defaults, might want to make them more dynamic or review
                    height={200}
                    src={activeCard.src} // Use active card's main image
                    alt={activeCard.title}
                    className={cn(
                       "w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top",
                       !isMobile && "rounded-t-xl", // Rounded top on larger screens
                       isMobile && "h-auto max-h-[60vh] rounded-none" // Adjust size and remove rounded on mobile
                    )}
                  />
                </motion.div>
              )}

              <div
                 className={cn(
                   "flex justify-between items-start p-4 absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-neutral-800 z-[105]",
                   !isMobile && "rounded-b-xl", // Rounded bottom on larger screens
                   isMobile && "rounded-none flex-col items-stretch gap-2" // Flex-col and stretch on mobile
                 )}
               >
                <div className="flex-grow">
                  <motion.h3
                    layoutId={enableLayoutAnimations ? `title-${activeCard.id}-${componentId}` : undefined} // Conditional layoutId
                    className="font-bold text-neutral-700 dark:text-neutral-200"
                  >
                    {activeVideoData?.description || activeCard.title}
                  </motion.h3>
                  {activeVideoData && activeCard.description && activeVideoData.description !== activeCard.description && (
                     <motion.p className="text-sm text-neutral-500 dark:text-neutral-400">
                       {activeCard.description}
                     </motion.p>
                  )}
                </div>

                {/* CTA and Close button container */}
                 <div className={cn(
                   "flex items-center gap-3 flex-shrink-0",
                   isMobile && "flex-row-reverse justify-between" // Reverse order and justify on mobile
                 )}> {/* Prevent shrinking */}
                  {activeVideoData?.score && (
                     <motion.div // Changed from <a> to <div> if not always a link
                        layoutId={enableLayoutAnimations ? `button-cta-${activeCard.id}-${componentId}` : undefined} // Conditional layoutId
                        className={`px-4 py-2 text-sm rounded-full font-bold ${getThemeColorClasses("bg")} text-white`}
                      >
                        {activeVideoData.score}
                      </motion.div>
                  )}
                  {/* Generic CTA from card data if no video score or if it's a non-video card */}
                  {!activeVideoData?.score && activeCard.ctaLink && (
                     <motion.a
                        layoutId={enableLayoutAnimations ? `button-cta-${activeCard.id}-${componentId}` : undefined} // Conditional layoutId
                        href={activeCard.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-600 dark:text-white text-black ${getThemeColorClasses("hover-bg")} ${getThemeColorClasses("hover-text")}`}
                      >
                        {activeCard.ctaText} {/* Use main CTA text */}
                      </motion.a>
                  )}

                  {/* Close button - Positioned absolutely above for mobile, part of flex on desktop */}
                  {!isMobile && (
                     <button
                       onClick={() => setActiveCard(null)}
                       className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-neutral-700 dark:text-white rounded-full w-10 h-10 shadow-sm"
                       aria-label="Close"
                     >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M18 6L6 18M6 6l12 12" />
                       </svg>
                     </button>
                   )}
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
            layoutId={enableLayoutAnimations ? `card-${card.id}-${componentId}` : undefined} // Conditional layoutId
            key={card.id} // Use card.id as key
            onClick={() => {
              setCurrentVideoIndex(0); // Reset to first video when opening a card
              setActiveCard(card);
            }}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm mb-3"
            role="button" // Added role
            tabIndex={0} // Added tabIndex for keyboard accessibility
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveCard(card);}} // Keyboard activation
          >
            <div className="flex gap-4 flex-col md:flex-row items-center"> {/* items-center added */}
              <motion.div layoutId={enableLayoutAnimations ? `image-${card.id}-${componentId}` : undefined}>
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
                  layoutId={enableLayoutAnimations ? `title-${card.id}-${componentId}` : undefined} // Conditional layoutId
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
              layoutId={enableLayoutAnimations ? `button-cta-${card.id}-${componentId}` : undefined} // Conditional layoutId
              className={`px-4 py-2 text-sm rounded-full font-bold bg-gray-100 dark:bg-neutral-600 dark:text-white text-black mt-4 md:mt-0 ${getThemeColorClasses("hover-bg")} ${getThemeColorClasses("hover-text")}`}
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
      className="h-5 w-5 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};