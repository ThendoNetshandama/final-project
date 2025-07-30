import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Droplets, Footprints, BookOpen, Heart, Clock, Star, CheckCircle2 } from "lucide-react";

interface Quest {
  id: string;
  title: string;
  description: string;
  category: "water" | "movement" | "mindfulness" | "nutrition" | "sleep";
  points: number;
  progress: number;
  target: number;
  unit: string;
  completed: boolean;
  timeLeft: string;
  icon: typeof Droplets;
  color: string;
}

const dailyQuests: Quest[] = [
  {
    id: "1",
    title: "Hydration Hero",
    description: "Drink water throughout the day to stay energized",
    category: "water",
    points: 50,
    progress: 6,
    target: 8,
    unit: "glasses",
    completed: false,
    timeLeft: "6h left",
    icon: Droplets,
    color: "text-blue-500"
  },
  {
    id: "2",
    title: "Village Walker",
    description: "Take a refreshing walk around your neighborhood",
    category: "movement",
    points: 75,
    progress: 4500,
    target: 8000,
    unit: "steps",
    completed: false,
    timeLeft: "All day",
    icon: Footprints,
    color: "text-green-500"
  },
  {
    id: "3",
    title: "Mindful Moments",
    description: "Take time for reflection and gratitude",
    category: "mindfulness",
    points: 40,
    progress: 1,
    target: 1,
    unit: "session",
    completed: true,
    timeLeft: "Completed!",
    icon: Heart,
    color: "text-pink-500"
  },
  {
    id: "4",
    title: "Learning Journey",
    description: "Read or learn something new today",
    category: "mindfulness",
    points: 30,
    progress: 15,
    target: 20,
    unit: "minutes",
    completed: false,
    timeLeft: "3h left",
    icon: BookOpen,
    color: "text-purple-500"
  }
];

export function DailyQuestBoard() {
  const completedQuests = dailyQuests.filter(q => q.completed).length;
  const totalPoints = dailyQuests.reduce((sum, q) => sum + (q.completed ? q.points : 0), 0);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Today's Village Quests
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Small steps, big adventures. Complete your daily wellness journey!
          </p>
          
          {/* Daily Progress Summary */}
          <Card className="max-w-md mx-auto p-6 bg-gradient-village shadow-village">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{completedQuests}/4</div>
                <div className="text-sm text-muted-foreground">Quests Complete</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{totalPoints}</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">🎯</div>
                <div className="text-sm text-muted-foreground">Quest Master</div>
              </div>
            </div>
            <Progress 
              value={(completedQuests / dailyQuests.length) * 100} 
              className="h-3 bg-background"
            />
          </Card>
        </div>

        {/* Quest Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dailyQuests.map((quest) => {
            const progressPercentage = (quest.progress / quest.target) * 100;
            const IconComponent = quest.icon;
            
            return (
              <Card 
                key={quest.id}
                className={`p-6 transition-all duration-300 hover:scale-105 ${
                  quest.completed 
                    ? 'bg-gradient-meadow shadow-glow border-primary/20' 
                    : 'bg-card shadow-village hover:shadow-quest'
                }`}
              >
                {/* Quest Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    quest.completed ? 'bg-primary' : 'bg-secondary'
                  }`}>
                    {quest.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <IconComponent className={`w-6 h-6 ${quest.color}`} />
                    )}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={quest.completed ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {quest.points} pts
                  </Badge>
                </div>

                {/* Quest Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{quest.title}</h3>
                    <p className="text-sm text-muted-foreground">{quest.description}</p>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {quest.progress} / {quest.target} {quest.unit}
                      </span>
                      <span className={`font-medium ${
                        quest.completed ? 'text-primary' : 'text-foreground'
                      }`}>
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <Progress 
                      value={progressPercentage} 
                      className={`h-2 ${quest.completed ? 'bg-primary/20' : 'bg-secondary'}`}
                    />
                  </div>

                  {/* Time and Action */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{quest.timeLeft}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant={quest.completed ? "secondary" : "quest"}
                      disabled={quest.completed}
                      className="text-xs"
                    >
                      {quest.completed ? "Complete!" : "Log Progress"}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Daily Bonus */}
        <Card className="mt-8 p-6 bg-gradient-sunrise shadow-quest text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Star className="w-8 h-8 text-village-sun animate-glow" />
            <h3 className="text-xl font-bold text-foreground">Daily Bonus Available!</h3>
            <Star className="w-8 h-8 text-village-sun animate-glow" />
          </div>
          <p className="text-muted-foreground mb-4">
            Complete all quests today to unlock a special family challenge bonus!
          </p>
          <Button variant="village" size="lg" className="animate-village-bounce">
            Unlock Family Bonus
          </Button>
        </Card>
      </div>
    </section>
  );
}