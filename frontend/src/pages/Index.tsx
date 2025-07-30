import { VillageNavigation } from "@/components/VillageNavigation";
import { VillageHero } from "@/components/VillageHero";
import { DailyQuestBoard } from "@/components/DailyQuestBoard";
import { FamilyGarden } from "@/components/FamilyGarden";
import { WellnessGuide } from "@/components/WellnessGuide";
import { VillageMarketplace } from "@/components/VillageMarketplace";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-village">
      <VillageNavigation />
      <VillageHero />
      <DailyQuestBoard />
      <FamilyGarden />
      <WellnessGuide />
      <VillageMarketplace />
    </div>
  );
};

export default Index;
