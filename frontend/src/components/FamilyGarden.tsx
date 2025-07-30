import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Trophy, Target, Heart, Crown, Star } from "lucide-react";
import familyWellness from "@/assets/family-wellness.jpg";

interface FamilyMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  points: number;
  streak: number;
  questsCompleted: number;
  totalQuests: number;
  isLeader: boolean;
  achievements: string[];
}

const familyMembers: FamilyMember[] = [
  {
    id: "1",
    name: "Sarah",
    role: "Mom",
    avatar: "S",
    points: 1850,
    streak: 12,
    questsCompleted: 8,
    totalQuests: 10,
    isLeader: true,
    achievements: ["🏃‍♀️", "💧", "🧘‍♀️"]
  },
  {
    id: "2", 
    name: "Emma",
    role: "Teen",
    avatar: "E",
    points: 1640,
    streak: 8,
    questsCompleted: 7,
    totalQuests: 8,
    isLeader: false,
    achievements: ["📚", "🎨", "💪"]
  },
  {
    id: "3",
    name: "Grandma Rose",
    role: "Elder",
    avatar: "R",
    points: 1420,
    streak: 15,
    questsCompleted: 6,
    totalQuests: 6,
    isLeader: false,
    achievements: ["🌱", "📖", "☀️"]
  },
  {
    id: "4",
    name: "Alex",
    role: "Kid",
    avatar: "A",
    points: 980,
    streak: 5,
    questsCompleted: 4,
    totalQuests: 6,
    isLeader: false,
    achievements: ["🎮", "🏊‍♂️", "🎵"]
  }
];

const familyChallenges = [
  {
    id: "1",
    title: "Weekend Hiking Adventure",
    description: "Complete 15,000 steps together as a family",
    progress: 12450,
    target: 15000,
    reward: "Family Movie Night",
    timeLeft: "2 days",
    participants: 4
  },
  {
    id: "2",
    title: "Hydration Heroes",
    description: "Drink 32 glasses of water total this week",
    progress: 28,
    target: 32,
    reward: "Healthy Smoothie Kit",
    timeLeft: "3 days",
    participants: 4
  }
];

export function FamilyGarden() {
  const totalFamilyPoints = familyMembers.reduce((sum, member) => sum + member.points, 0);
  const averageStreak = Math.round(familyMembers.reduce((sum, member) => sum + member.streak, 0) / familyMembers.length);

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Family Garden
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Growing stronger together, one healthy habit at a time
          </p>

          {/* Family Stats */}
          <Card className="max-w-2xl mx-auto p-6 bg-gradient-village shadow-village">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{totalFamilyPoints.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Family Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{averageStreak}</div>
                <div className="text-sm text-muted-foreground">Avg Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl">🏆</div>
                <div className="text-sm text-muted-foreground">Top Village</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Family Members */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <Users className="w-6 h-6 text-primary" />
              <span>Family Members</span>
            </h3>

            <div className="space-y-4">
              {familyMembers.map((member, index) => (
                <Card 
                  key={member.id}
                  className={`p-4 transition-all duration-300 hover:scale-105 ${
                    member.isLeader 
                      ? 'bg-gradient-sunrise shadow-glow border-primary/20' 
                      : 'bg-card shadow-village'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Avatar with Rank */}
                    <div className="relative">
                      <Avatar className="w-12 h-12 border-2 border-primary">
                        <AvatarFallback className={`text-lg font-bold ${
                          member.isLeader ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                        }`}>
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {member.isLeader && (
                        <Crown className="w-4 h-4 text-village-sun absolute -top-1 -right-1" />
                      )}
                      <Badge 
                        variant="secondary" 
                        className="absolute -bottom-1 -right-1 text-xs px-1 min-w-6 h-5"
                      >
                        #{index + 1}
                      </Badge>
                    </div>

                    {/* Member Info */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{member.name}</h4>
                        <Badge variant="outline" className="text-xs">{member.role}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-muted-foreground">
                          {member.points} pts
                        </span>
                        <span className="text-sm text-muted-foreground">
                          🔥 {member.streak} days
                        </span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">
                        {member.questsCompleted}/{member.totalQuests} quests
                      </div>
                      <Progress 
                        value={(member.questsCompleted / member.totalQuests) * 100}
                        className="w-20 h-2 mt-1"
                      />
                    </div>

                    {/* Achievements */}
                    <div className="flex space-x-1">
                      {member.achievements.map((achievement, i) => (
                        <span key={i} className="text-lg animate-glow">{achievement}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button variant="village" className="w-full">
              <Heart className="w-4 h-4 mr-2" />
              Invite Family Member
            </Button>
          </div>

          {/* Family Challenges */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <Target className="w-6 h-6 text-primary" />
              <span>Active Challenges</span>
            </h3>

            <div className="space-y-4">
              {familyChallenges.map((challenge) => {
                const progressPercentage = (challenge.progress / challenge.target) * 100;
                
                return (
                  <Card key={challenge.id} className="p-6 bg-card shadow-village hover:shadow-quest transition-all duration-300">
                    <div className="space-y-4">
                      {/* Challenge Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">{challenge.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {challenge.participants} members
                        </Badge>
                      </div>

                      {/* Progress */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {challenge.progress.toLocaleString()} / {challenge.target.toLocaleString()}
                          </span>
                          <span className="font-medium text-primary">
                            {Math.round(progressPercentage)}% complete
                          </span>
                        </div>
                        <Progress value={progressPercentage} className="h-3" />
                      </div>

                      {/* Reward & Time */}
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-4 h-4 text-village-sun" />
                          <span className="text-sm font-medium text-foreground">{challenge.reward}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{challenge.timeLeft} left</span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Family Photo */}
            <Card className="p-6 bg-gradient-meadow shadow-village">
              <div className="text-center space-y-4">
                <img 
                  src={familyWellness} 
                  alt="Family Wellness Journey"
                  className="w-full h-48 object-cover rounded-lg shadow-village"
                />
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Family Wellness Journey</h4>
                  <p className="text-sm text-muted-foreground">
                    "Together we grow stronger, happier, and healthier every day!"
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-village-sun fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Button variant="quest" className="w-full" size="lg">
              <Target className="w-4 h-4 mr-2" />
              Create New Family Challenge
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}