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
                  <div className="h-full w-full overflow-hidden rounded-2xl border-4 border-white shadow-xl dark:border-neutral-800 flex flex-col bg-gradient-to-br from-slate-50 to-slate-200 dark:from-neutral-900 dark:to-neutral-800">
                    <div className="relative h-[80%] w-full overflow-hidden">
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full object-cover object-center cursor-pointer"
                      />
                      {isActive(index) && (
                        <div className="absolute top-3 right-3 flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrev();
                            }}
                            className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-black/60 dark:hover:bg-black/80"
                          >
                            <IconArrowLeft className="h-5 w-5 text-neutral-700 transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-300" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNext();
                            }}
                            className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white dark:bg-black/60 dark:hover:bg-black/80"
                          >
                            <IconArrowRight className="h-5 w-5 text-neutral-700 transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-300" />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="p-3 text-center flex-1 flex flex-col justify-center bg-gradient-to-b from-transparent to-gray-100 dark:to-neutral-800">
                      <h3 className="text-xl font-bold text-neutral-800 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {testimonial.designation}
                      </p>
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