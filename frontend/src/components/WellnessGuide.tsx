import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Brain, Sparkles, Calendar, TrendingUp } from "lucide-react";

const todaysMessage = {
  greeting: "Good morning, Sarah! 🌅",
  message: "You're doing amazing with your 12-day streak! I noticed you've been consistent with your morning walks. How about trying a 5-minute meditation after your walk today?",
  mood: "encouraging",
  suggestions: [
    {
      title: "Mindful Walking",
      description: "Focus on your breathing during today's walk",
      duration: "10 min",
      points: 25
    },
    {
      title: "Gratitude Journal",
      description: "Write down 3 things you're grateful for",
      duration: "5 min", 
      points: 15
    },
    {
      title: "Family Check-in",
      description: "Ask Emma about her day and share yours",
      duration: "15 min",
      points: 30
    }
  ]
};

const insights = [
  {
    icon: TrendingUp,
    title: "Weekly Progress",
    value: "+15%",
    description: "Your activity increased this week!",
    color: "text-green-500"
  },
  {
    icon: Heart,
    title: "Wellness Score",
    value: "85/100",
    description: "Excellent consistency in habits",
    color: "text-red-500"
  },
  {
    icon: Calendar,
    title: "Best Day",
    value: "Monday",
    description: "You're strongest at week starts",
    color: "text-blue-500"
  }
];

export function WellnessGuide() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-village-sky/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Personal Wellness Guide
          </h2>
          <p className="text-xl text-muted-foreground">
            AI-powered insights and encouragement tailored just for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Message */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-village shadow-village">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-quest rounded-full flex items-center justify-center shadow-quest animate-glow">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{todaysMessage.greeting}</h3>
                    <Badge variant="secondary" className="bg-village-flower text-white">
                      Wellness Guide
                    </Badge>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {todaysMessage.message}
                  </p>
                  <Button variant="quest" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Guide
                  </Button>
                </div>
              </div>
            </Card>

            {/* Personalized Suggestions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-village-sun" />
                <span>Personalized Suggestions</span>
              </h3>
              
              <div className="grid gap-4">
                {todaysMessage.suggestions.map((suggestion, index) => (
                  <Card key={index} className="p-4 bg-card shadow-village hover:shadow-quest transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{suggestion.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{suggestion.description}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {suggestion.duration}
                          </Badge>
                          <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground">
                            +{suggestion.points} pts
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" variant="village" className="ml-4">
                        Try It
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Insights & Stats */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Your Insights</h3>
            
            <div className="space-y-4">
              {insights.map((insight, index) => {
                const IconComponent = insight.icon;
                return (
                  <Card key={index} className="p-4 bg-card shadow-village">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <IconComponent className={`w-5 h-5 ${insight.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-lg font-bold text-foreground">{insight.value}</span>
                          <span className="text-sm font-medium text-foreground">{insight.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{insight.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Mood Check-in */}
            <Card className="p-6 bg-gradient-sunrise shadow-village">
              <div className="text-center space-y-4">
                <h4 className="font-semibold text-foreground">How are you feeling today?</h4>
                <div className="grid grid-cols-5 gap-2">
                  {["😔", "😐", "🙂", "😊", "🤩"].map((emoji, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      size="sm"
                      className="text-2xl h-12 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    >
                      {emoji}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Your mood helps me give better suggestions
                </p>
              </div>
            </Card>

            {/* Daily Affirmation */}
            <Card className="p-6 bg-gradient-meadow shadow-village">
              <div className="text-center space-y-3">
                <Heart className="w-8 h-8 text-village-flower mx-auto animate-glow" />
                <h4 className="font-semibold text-foreground">Today's Affirmation</h4>
                <p className="text-sm text-foreground italic leading-relaxed">
                  "Every small step I take towards wellness ripples out to inspire my family and community."
                </p>
                <Button variant="village" size="sm" className="text-xs">
                  Share with Family
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}