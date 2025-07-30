# final-project

# 🌱 Digital Health Village

> *Think Duolingo for wellness — but more personal, community-driven, and built with love for all ages.*

A gamified health and wellness platform that helps individuals and families build healthier habits through daily quests, points, and AI-guided support. It's more than an app. It's a movement. A place where your whole family can grow healthier, together.

## 🎯 Vision

Health is often sold as an individual responsibility. But in most cultures — especially ours — well-being is communal. The Digital Health Village turns everyday wellness into an adventure you can take with your family, friends, or even your co-workers.

## ✨ Key Features

- **🎮 Daily Health Quests** - Personalized tasks like "Take a 10-min walk", "Drink 2L water", "Stretch before bed"
- **🌿 Family Garden View** - Each family grows a "health garden" based on their progress — visual, motivational
- **🏪 Village Marketplace** - Redeem points for discounts, products, merch, and more
- **🤖 Wellness Guide (AI)** - A soft, motivational companion that checks in and gives emotional wellness tips
- **⭐ Points & Streaks** - Gamified system to reward consistency
- **🌍 Cultural Relevance** - Language and habit suggestions tailored for African households and family values
- **📱 Offline-Friendly UI** - Mobile-first design that supports low-bandwidth environments
- **🏆 Community Challenges** - Compete against other families or join national wellness challenges

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun (recommended) or npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digital-health-village.git
   cd digital-health-village/frontend
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Start the development server**
   ```bash
   # Using Bun
   bun dev
   
   # Or using npm
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app running.

## 🏗️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library (shadcn-style)
- **State Management**: React Hooks
- **Icons**: Lucide React
- **Package Manager**: Bun (with npm fallback)

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/         # React components
│   │   ├── DailyQuestBoard.tsx
│   │   ├── FamilyGarden.tsx
│   │   ├── VillageHero.tsx
│   │   ├── VillageMarketplace.tsx
│   │   ├── VillageNavigation.tsx
│   │   ├── WellnessGuide.tsx
│   │   └── ui/            # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── assets/            # Images and media
│   └── main.tsx          # App entry point
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Component Overview

### Core Components

- **`VillageHero`** - Landing page hero section with compelling messaging
- **`DailyQuestBoard`** - Interactive quest management and tracking
- **`FamilyGarden`** - Visual progress representation for families
- **`WellnessGuide`** - AI-powered wellness companion interface
- **`VillageMarketplace`** - Points redemption and affiliate product showcase
- **`VillageNavigation`** - Mobile-first navigation system

### UI Components

The project uses a comprehensive design system with 40+ reusable components including:
- Forms (Input, Select, Checkbox, etc.)
- Navigation (Tabs, Breadcrumbs, Menu)
- Feedback (Alert, Toast, Progress)
- Data Display (Card, Table, Badge)
- Overlays (Dialog, Sheet, Popover)

## 🛠️ Development

### Available Scripts

```bash
# Start development server
bun dev / npm run dev

# Build for production
bun run build / npm run build

# Preview production build
bun run preview / npm run preview

# Run linting
bun run lint / npm run lint

# Run type checking
bun run type-check / npm run type-check
```

### Code Style

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured for React and TypeScript best practices
- **Prettier**: Consistent code formatting
- **Tailwind CSS**: Utility-first styling approach

## 🎯 Target Users

- **Families** looking to improve health together
- **Young adults and professionals** trying to build routines
- **Elderly users** who enjoy gamified challenges with their grandkids
- **Health-conscious communities** and schools
- Anyone who enjoys apps like Duolingo, Fitbit, or Headspace

## 💰 Monetization Strategy

- **Ezoic Ads** - Non-invasive, smart ad placements
- **Affiliate Links** - Partnered health products in the marketplace
- **Freemium Model** - Free forever, with optional premium perks
- **Merchandise** - Branded wellness items

## 🗓️ Roadmap

| Month | Milestone |
|-------|-----------|
| August | Backend integration + user auth + quest engine |
| September | Marketplace + AI check-in bot |
| October | Family/group features + mobile optimization |
| November | Early release + feedback cycle |
| December | Monetization phase: Ezoic + affiliate testing |
| January 2026 | Full public launch, press + partnership push |

## 🤝 Contributing

We welcome contributions from the community! Please read our contributing guidelines and code of conduct before getting started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with love for communities everywhere
- Inspired by the belief that wellness is communal
- Designed for accessibility and cultural inclusivity

---

**Digital Health Village** - Building the future of community health, beautifully. One small habit at a time.

*Created by Thendo Netshandama*