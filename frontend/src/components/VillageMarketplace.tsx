import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Gift, Star, Coins, Heart, Coffee, BookOpen, Dumbbell } from "lucide-react";

const rewardCategories = [
  {
    id: "health",
    name: "Health & Wellness",
    icon: Heart,
    color: "text-red-500",
    items: [
      {
        id: "1",
        name: "Premium Green Tea Set",
        description: "Organic wellness tea collection with infuser",
        points: 750,
        originalPrice: "$45",
        discount: "25% off",
        rating: 4.8,
        reviews: 124,
        inStock: true,
        image: "🍵"
      },
      {
        id: "2", 
        name: "Meditation Cushion",
        description: "Comfortable cushion for daily mindfulness practice",
        points: 500,
        originalPrice: "$35",
        discount: "20% off", 
        rating: 4.9,
        reviews: 89,
        inStock: true,
        image: "🧘‍♀️"
      }
    ]
  },
  {
    id: "fitness",
    name: "Fitness & Movement",
    icon: Dumbbell,
    color: "text-green-500",
    items: [
      {
        id: "3",
        name: "Resistance Band Set",
        description: "Complete set for home workouts and stretching",
        points: 400,
        originalPrice: "$25",
        discount: "30% off",
        rating: 4.7,
        reviews: 156,
        inStock: true,
        image: "💪"
      },
      {
        id: "4",
        name: "Smart Water Bottle",
        description: "Tracks hydration with app integration",
        points: 900,
        originalPrice: "$55",
        discount: "15% off",
        rating: 4.6,
        reviews: 203,
        inStock: false,
        image: "💧"
      }
    ]
  },
  {
    id: "learning",
    name: "Learning & Growth",
    icon: BookOpen,
    color: "text-purple-500",
    items: [
      {
        id: "5",
        name: "Wellness Journal",
        description: "Beautiful guided journal for daily reflection",
        points: 300,
        originalPrice: "$20",
        discount: "35% off",
        rating: 4.9,
        reviews: 67,
        inStock: true,
        image: "📔"
      },
      {
        id: "6",
        name: "Mindfulness Course",
        description: "30-day guided mindfulness program",
        points: 1200,
        originalPrice: "$75",
        discount: "40% off",
        rating: 5.0,
        reviews: 45,
        inStock: true,
        image: "🧠"
      }
    ]
  }
];

const pointsPackages = [
  {
    points: 100,
    price: "$2.99",
    bonus: "New Member Bonus",
    popular: false
  },
  {
    points: 500,
    price: "$12.99",
    bonus: "+50 Bonus Points",
    popular: true
  },
  {
    points: 1000,
    price: "$24.99",
    bonus: "+150 Bonus Points",
    popular: false
  }
];

export function VillageMarketplace() {
  const userPoints = 1250;

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Village Marketplace
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Transform your wellness points into amazing rewards
          </p>
          
          {/* User Points Display */}
          <Card className="max-w-md mx-auto p-6 bg-gradient-quest shadow-quest">
            <div className="flex items-center justify-center space-x-4 text-white">
              <Coins className="w-8 h-8" />
              <div className="text-center">
                <div className="text-3xl font-bold">{userPoints.toLocaleString()}</div>
                <div className="text-sm opacity-90">Your Points Balance</div>
              </div>
              <Gift className="w-8 h-8" />
            </div>
          </Card>
        </div>

        {/* Quick Point Packages */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">Need More Points?</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {pointsPackages.map((pkg, index) => (
              <Card 
                key={index}
                className={`p-4 text-center transition-all duration-300 hover:scale-105 ${
                  pkg.popular 
                    ? 'bg-gradient-sunrise shadow-glow border-primary/30' 
                    : 'bg-card shadow-village'
                }`}
              >
                {pkg.popular && (
                  <Badge className="mb-2 bg-village-sun text-foreground">Most Popular</Badge>
                )}
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">{pkg.points}</div>
                  <div className="text-sm text-muted-foreground">Points</div>
                  <div className="text-lg font-semibold text-foreground">{pkg.price}</div>
                  <div className="text-xs text-muted-foreground">{pkg.bonus}</div>
                  <Button variant={pkg.popular ? "quest" : "village"} size="sm" className="w-full">
                    Buy Points
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Reward Categories */}
        <div className="space-y-12">
          {rewardCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id}>
                <div className="flex items-center space-x-3 mb-6">
                  <IconComponent className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => {
                    const canAfford = userPoints >= item.points;
                    
                    return (
                      <Card 
                        key={item.id}
                        className={`p-6 transition-all duration-300 hover:scale-105 ${
                          !item.inStock 
                            ? 'opacity-60 grayscale' 
                            : 'shadow-village hover:shadow-quest'
                        }`}
                      >
                        {/* Item Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{item.image}</div>
                          <div className="text-right">
                            {!item.inStock && (
                              <Badge variant="destructive" className="mb-2">Out of Stock</Badge>
                            )}
                            <Badge variant="secondary" className="bg-primary text-primary-foreground">
                              {item.points} pts
                            </Badge>
                          </div>
                        </div>

                        {/* Item Details */}
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-foreground text-lg">{item.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </div>

                          {/* Rating & Reviews */}
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 ${
                                    i < Math.floor(item.rating) 
                                      ? 'text-village-sun fill-current' 
                                      : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {item.rating} ({item.reviews} reviews)
                            </span>
                          </div>

                          {/* Pricing */}
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-muted-foreground line-through">
                                {item.originalPrice}
                              </span>
                              <Badge variant="secondary" className="ml-2 text-xs bg-green-100 text-green-800">
                                {item.discount}
                              </Badge>
                            </div>
                          </div>

                          {/* Action Button */}
                          <Button 
                            variant={canAfford ? "quest" : "outline"}
                            className="w-full"
                            disabled={!item.inStock || !canAfford}
                          >
                            {!item.inStock 
                              ? "Out of Stock"
                              : !canAfford 
                                ? `Need ${item.points - userPoints} more points`
                                : "Redeem Now"
                            }
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Affiliate Partners */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-village shadow-village text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Partner Brands</h3>
            <p className="text-muted-foreground mb-6">
              Earn extra points shopping with our wellness partners
            </p>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {["🌱 GreenLife", "💪 FitGear", "🧘‍♀️ ZenCo", "🍵 WellTea"].map((brand, index) => (
                <div key={index} className="p-4 bg-background rounded-lg shadow-village">
                  <div className="text-xl mb-2">{brand}</div>
                  <Badge variant="secondary" className="text-xs">+2x Points</Badge>
                </div>
              ))}
            </div>
            <Button variant="sunrise" size="lg">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Explore Partners
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}