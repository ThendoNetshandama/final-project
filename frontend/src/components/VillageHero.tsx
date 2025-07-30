import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Target, Star } from "lucide-react";
import villageHero from "@/assets/village-hero.jpg";

export function VillageHero() {
  return (
    <section className="relative min-h-screen bg-gradient-village overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${villageHero})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-village-sun rounded-full shadow-glow animate-glow" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-12 h-12 text-village-flower animate-village-bounce" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="w-10 h-10 text-village-sun animate-glow" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Welcome to Your
              <span className="block bg-gradient-sunrise bg-clip-text text-transparent animate-glow">
                Digital Health Village
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where wellness becomes a joyful family adventure. Build healthy habits together, 
              one quest at a time.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-village hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-quest rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Daily Quests</h3>
                <p className="text-muted-foreground text-center">
                  Personalized wellness challenges that fit your lifestyle
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-village hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-village rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Family Challenges</h3>
                <p className="text-muted-foreground text-center">
                  Connect and compete with loved ones across generations
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-village hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">AI Wellness Guide</h3>
                <p className="text-muted-foreground text-center">
                  Daily check-ins and personalized encouragement
                </p>
              </div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              variant="quest" 
              size="lg" 
              className="text-lg px-8 py-4 animate-village-bounce"
            >
              Start Your Village Journey
            </Button>
            <Button 
              variant="village" 
              size="lg" 
              className="text-lg px-8 py-4"
            >
              Create Family Challenge
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-muted-foreground">Active Villagers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Quests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Family Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}