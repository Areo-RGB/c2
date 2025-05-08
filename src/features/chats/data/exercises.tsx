import React from 'react';
import Sprint10mRanking from "../components/performance/sprint-10m-ranking";
import Sprint20mRanking from "../components/performance/sprint-20m-ranking";
import GewandtheitRanking from "../components/performance/gewandtheit-ranking";
import DribblingRanking from "../components/performance/dribbling-ranking";
import BallkontrolleRanking from "../components/performance/ballkontrolle-ranking";
import BalljonglierenRanking from "../components/performance/balljonglieren-ranking";

// Types
export type CategoryType = "schnelligkeit" | "beweglichkeit" | "technik";

export type ExerciseConfig = {
  id: string;
  title: string;
  category: CategoryType;
  component: React.ReactNode;
  color: string;
};

// Define the available exercises
export const exercises: ExerciseConfig[] = [
  // Schnelligkeit exercises
  {
    id: "10m-sprint",
    title: "10m Sprint",
    category: "schnelligkeit",
    component: <Sprint10mRanking />,
    color: "text-amber-500",
  },
  {
    id: "20m-sprint",
    title: "20m Sprint",
    category: "schnelligkeit",
    component: <Sprint20mRanking />,
    color: "text-amber-500",
  },
  // Beweglichkeit exercises
  {
    id: "gewandtheit",
    title: "Gewandtheit",
    category: "beweglichkeit",
    component: <GewandtheitRanking />,
    color: "text-indigo-500",
  },
  // Technik exercises
  {
    id: "dribbling",
    title: "Dribbling",
    category: "technik",
    component: <DribblingRanking />,
    color: "text-emerald-500",
  },
  {
    id: "ballkontrolle",
    title: "Ballkontrolle",
    category: "technik",
    component: <BallkontrolleRanking />,
    color: "text-emerald-500",
  },
  {
    id: "balljonglieren",
    title: "Balljonglieren",
    category: "technik",
    component: <BalljonglierenRanking />,
    color: "text-emerald-500",
  },
]; 