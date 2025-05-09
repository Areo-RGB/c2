"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

// This is a placeholder version that doesn't require the tsparticles libraries
// Replace with the full implementation once dependencies are installed
export const SparklesCore = (props: ParticlesProps) => {
  const { id, className, background, particleColor } = props;

  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0" style={{ background: background || "transparent" }}>
        {/* Simplified sparkle effect with CSS */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                backgroundColor: particleColor || "#ffffff",
                opacity: Math.random() * 0.7 + 0.3,
                animationDuration: Math.random() * 2 + 1 + "s",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}; 