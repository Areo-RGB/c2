"use client"

import { Zap, Activity, Brain } from "lucide-react"
import Sprint10mRanking from "../performance/sprint-10m-ranking"
import Sprint20mRanking from "../performance/sprint-20m-ranking"
import GewandtheitRanking from "../performance/gewandtheit-ranking"
import DribblingRanking from "../performance/dribbling-ranking"
import BallkontrolleRanking from "../performance/ballkontrolle-ranking"
import BalljonglierenRanking from "../performance/balljonglieren-ranking"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Content() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-card rounded-xl p-5 md:p-7 flex flex-col border border-border shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent -z-10 rounded-bl-full"></div>

          <h2 className="text-xl font-bold text-card-foreground mb-5 text-left flex items-center">
            <span className="mr-2 inline-block w-1 h-6 bg-primary rounded-full"></span>
            Leistungsdiagnostik
          </h2>

          <Tabs defaultValue="schnelligkeit" className="w-full">
            <TabsList className="mb-8 p-1.5 bg-muted/40 rounded-lg border border-border/40 backdrop-blur-sm w-full max-w-2xl mx-auto transition-all shadow-sm">
              <TabsTrigger
                value="schnelligkeit"
                className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-md transition-all duration-200 rounded-lg min-w-28 justify-center py-2.5"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Schnelligkeit</span>
              </TabsTrigger>
              <TabsTrigger
                value="beweglichkeit"
                className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-md transition-all duration-200 rounded-lg min-w-28 justify-center py-2.5"
              >
                <Activity className="w-4 h-4 text-indigo-500" />
                <span>Beweglichkeit</span>
              </TabsTrigger>
              <TabsTrigger
                value="technik"
                className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-md transition-all duration-200 rounded-lg min-w-28 justify-center py-2.5"
              >
                <Brain className="w-4 h-4 text-emerald-500" />
                <span>Technik</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="schnelligkeit" className="space-y-6 animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Sprint10mRanking />
                <Sprint20mRanking />
              </div>
            </TabsContent>

            <TabsContent value="beweglichkeit" className="space-y-6 animate-in fade-in-50 duration-300">
              <GewandtheitRanking />
            </TabsContent>

            <TabsContent value="technik" className="space-y-6 animate-in fade-in-50 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DribblingRanking />
                <BallkontrolleRanking />
              </div>
              <BalljonglierenRanking />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 