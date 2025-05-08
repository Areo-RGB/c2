"use client";
 
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  onClick?: () => void;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
 
  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };
 
  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
 
  const isActive = (index: number) => {
    return index === active;
  };
 
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
 
  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  
  const handleImageClick = (index: number) => {
    if (testimonials[index].onClick) {
      testimonials[index].onClick!();
    }
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-[420px] w-[300px] mx-auto">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="h-full w-full overflow-hidden rounded-2xl flex flex-col shadow-lg group relative">
                    {/* Outer frame with gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-200 via-white to-slate-200 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-700"></div>
                    
                    {/* Inner card content with proper positioning to avoid corner clipping */}
                    <div className="absolute inset-[3px] rounded-xl flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 dark:from-neutral-900 dark:to-neutral-850 overflow-hidden">
                      {/* Image container */}
                      <div className="relative h-full w-full overflow-hidden">
                        <img
                          src={testimonial.src}
                          alt={testimonial.name}
                          width={500}
                          height={500}
                          draggable={false}
                          className="h-full w-full object-cover object-center cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        
                        {/* Subtle player name badge */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-medium text-white tracking-wide">{testimonial.name}</span>
                        </div>
                        
                        {/* Navigation buttons */}
                        {isActive(index) && (
                          <div className="absolute top-3 right-3 flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                              }}
                              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors dark:bg-neutral-800/80 dark:hover:bg-neutral-800 shadow-md"
                            >
                              <IconArrowLeft className="h-5 w-5 text-neutral-700 transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-300" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                              }}
                              className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors dark:bg-neutral-800/80 dark:hover:bg-neutral-800 shadow-md"
                            >
                              <IconArrowRight className="h-5 w-5 text-neutral-700 transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-300" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-center"
          >
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 