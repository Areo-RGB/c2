import { BackgroundGradient } from "@/components/ui/background-gradient";

interface ExerciseCardProps {
  date: string;
  title: string;
  description: string;
  result: string;
  imageUrl: string;
  onPlay: () => void;
}

export const GradientExerciseCard = ({
  date,
  title,
  description,
  result,
  imageUrl,
  onPlay
}: ExerciseCardProps) => {
  return (
    <BackgroundGradient>
      <div className="flex flex-col gap-6 rounded-xl py-6 overflow-hidden group bg-white dark:bg-black border border-blue-100/80 dark:border-blue-800/20 shadow-md transition-all duration-300">
        <div className="relative aspect-video w-full">
          <div className="relative w-full h-full bg-black/10 dark:bg-white/5 flex items-center justify-center">
            <img alt={`Exercise preview for ${title}`} className="w-full h-full object-cover opacity-85" src={imageUrl} />
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={onPlay}
                className="rounded-full bg-blue-500/90 hover:bg-blue-600 hover:scale-105 p-3 text-white shadow-lg transition-transform duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-lg font-medium text-sm shadow-md">
            {date}
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold">
              {result}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </BackgroundGradient>
  );
}; 