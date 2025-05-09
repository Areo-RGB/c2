import React from 'react';
import { GradientExerciseCard } from './ui/gradient-exercise-card';

export const ExampleUsage = () => {
  const handlePlay = () => {
    console.log('Play video');
    // Add your video playback logic here
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <GradientExerciseCard 
        date="09. Mai 2025"
        title="10m Sprint"
        description="Short sprint over 10 meters to measure explosive speed."
        result="1.80 s"
        imageUrl="https://data3.fra1.cdn.digitaloceanspaces.com/Finley.Time/finley.gw.mp4#t=0.5"
        onPlay={handlePlay}
      />
    </div>
  );
}; 