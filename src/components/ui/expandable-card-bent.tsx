"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import bentAttr1 from '@/assets/images/bent_attr1_subject.png';

export function ExpandableCardDemoBent() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  
  // Videos for Bent's card
  const videos = [
    "https://data3.fra1.cdn.digitaloceanspaces.com/6%20(2).mp4",
    "https://data3.fra1.cdn.digitaloceanspaces.com/bent1/bent.jong.mp4"
  ];
  
  const videoTitles = ["03/2024", "09/2025"];
  const videoDescriptions = ["Ergebnis", "Ergebnis"];
  const videoScores = ["8/10", "9/10"];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Type-safe callback for useOutsideClick
  const handleOutsideClick = React.useCallback(() => {
    setActive(null);
  }, []);

  useOutsideClick(ref, handleOutsideClick);
  
  // Handle video navigation
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };
  
  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {active.videoUrl ? (
                <div className="flex flex-col h-full">
                  <motion.div 
                    layoutId={`video-${active.title}-${id}`}
                    className="w-full h-[650px] flex justify-center bg-black flex-grow"
                  >
                    <video 
                      key={videos[currentVideoIndex]}
                      controls 
                      autoPlay 
                      className="h-full object-contain"
                      src={videos[currentVideoIndex]}
                    />
                  </motion.div>
                  <div className="flex border-b border-gray-200 dark:border-neutral-700">
                    {videoTitles.map((title, index) => (
                      <button
                        key={title}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`py-3 px-6 font-medium text-sm transition-colors ${
                          currentVideoIndex === index 
                            ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400" 
                            : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        }`}
                      >
                        {title}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>
              )}

              <div className="flex justify-between items-center p-4">
                <div className="flex items-center">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-bold text-neutral-700 dark:text-neutral-200"
                  >
                    {videoDescriptions[0]}
                  </motion.h3>
                </div>
                
                <div className="flex items-center gap-3">
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full font-bold bg-blue-500 text-white"
                  >
                    {videoScores[currentVideoIndex]}
                  </motion.a>
                  
                  <button 
                    onClick={() => setActive(null)}
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full w-9 h-9"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => {
              setCurrentVideoIndex(0);  // Reset to first video when opening card
              setActive(card);
            }}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "2024",
    title: "Jonglieren",
    src: bentAttr1,
    videoUrl: "https://data3.fra1.cdn.digitaloceanspaces.com/6%20(2).mp4",
    ctaText: "Details",
    ctaLink: "#",
    content: () => {
      return (
        <p></p>
      );
    },
  }
]; 