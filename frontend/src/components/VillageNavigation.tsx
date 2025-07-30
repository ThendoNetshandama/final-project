import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Target, Users, Heart, Trophy, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export function VillageNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userPoints = 1250;
  const currentStreak = 7;

  const navigationItems = [
    { icon: Home, label: "Village", href: "#village", variant: "village" as const },
    { icon: Target, label: "Quests", href: "#quests", variant: "quest" as const },
    { icon: Users, label: "Family", href: "#family", variant: "village" as const },
    { icon: Heart, label: "Wellness", href: "#wellness", variant: "sunrise" as const },
    { icon: Trophy, label: "Rewards", href: "#rewards", variant: "quest" as const },
    { icon: ShoppingBag, label: "Shop", href: "#shop", variant: "village" as const },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-village">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-village rounded-full flex items-center justify-center shadow-village">
              <Home className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Digital Health Village</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 hover:bg-accent/50 transition-all duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* User Stats & Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Points */}
            <Card className="px-3 py-2 bg-gradient-quest shadow-quest">
              <div className="flex items-center space-x-2 text-white">
                <Trophy className="w-4 h-4" />
                <span className="font-semibold">{userPoints.toLocaleString()}</span>
              </div>
            </Card>

            {/* Streak */}
            <Card className="px-3 py-2 bg-gradient-sunrise shadow-village">
              <div className="flex items-center space-x-2 text-foreground">
                <span className="text-lg">🔥</span>
                <span className="font-semibold">{currentStreak} days</span>
              </div>
            </Card>

            {/* Profile */}
            <Button variant="village" size="sm" className="rounded-full">
              <div className="w-8 h-8 bg-village-flower rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant={item.variant}
                  size="sm"
                  className="flex items-center space-x-2 justify-start"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
            
            {/* Mobile Stats */}
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-gradient-quest text-white">
                <Trophy className="w-3 h-3 mr-1" />
                {userPoints.toLocaleString()} points
              </Badge>
              <Badge variant="secondary" className="bg-gradient-sunrise">
                🔥 {currentStreak} day streak
              </Badge>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}