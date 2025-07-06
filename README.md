# 🚀 Time Trek: The Lost Timeline

A captivating 3D interactive treasure hunt game created for Children's Day 2025, combining QR code scanning, historical exploration, and immersive 3D environments. Players journey through different time periods solving riddles and challenges to restore scrambled history!

## 🎯 Game Overview

**Time Trek: The Lost Timeline** is an innovative park-based treasure hunt where participants use QR codes to navigate through six distinct historical eras:

- 🦕 **Prehistoric Era** - Journey with dinosaurs and early humans
- 🏺 **Ancient Egypt** - Explore pyramids, pharaohs, and ancient mysteries
- 🏰 **Medieval Times** - Knights, castles, and medieval adventures
- 🚂 **Victorian Era** - Industrial revolution and Victorian innovations
- 🎮 **1980s** - Retro gaming and pop culture
- 🚀 **Future** - Futuristic technology and space exploration

Each era features:

- **3 Interactive Quiz Questions** per era (18 total)
- **Immersive 3D Environments** with era-specific models
- **Hint System** (costs 50 points)
- **Skip Option** (costs 100 points)
- **Multiple Choice & Text Input** questions
- **Visual Puzzles** (mazes, rebuses, image-based challenges)

## ✨ Key Features

### 🎮 Interactive Gameplay

- **QR Code Scanning** for location-based progression
- **Real-time Scoring System** with point deductions for hints/skips
- **Stopwatch Timer** tracking total game duration
- **Progressive Era Unlocking** - complete one era to access the next
- **Treasure Map** showing current location and progress

### 🌍 Multilingual Support

- **English (en)**
- **Estonian (et)**
- **Russian (ru)**
- Dynamic language switching with persistent selection

### 🎨 3D Immersive Experience

- **React Three Fiber** powered 3D environments
- **Era-specific 3D Models** (dinosaurs, pyramids, castles, trains, etc.)
- **Interactive Environments** with ambient lighting and controls
- **Smooth Animations** using Framer Motion

### 📱 Modern UI/UX

- **Responsive Design** - works on mobile and desktop
- **Dark Theme** with gradient styling
- **Accessible Components** using Radix UI
- **Progress Tracking** with loading states
- **Error Handling** with user-friendly messages

### 📊 Data Management

- **Firebase Integration** for result storage
- **Local Storage** for game state persistence
- **Team Management** with name and size tracking
- **Statistics Dashboard** showing performance across all eras

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React 18** - Latest React features

### 3D & Animation

- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **Framer Motion** - Smooth animations

### UI Components

- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful component library
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets

### State Management & Data

- **Redux Toolkit** - Predictable state management
- **Firebase** - Backend-as-a-Service for data storage
- **React Timer Hook** - Stopwatch functionality

### Interactive Features

- **@yudiel/react-qr-scanner** - QR code scanning
- **react-type-animation** - Typewriter effects
- **React Use** - Utility hooks

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Modern web browser with camera access (for QR scanning)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd treasure-hunt-quiz
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**
   Create a `.env.local` file with Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASURMENT_ID=your_measurement_id
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎮 How to Play

### For Players

1. **Start** - Select language and create team
2. **Scan QR Code** - Use device camera to scan location codes
3. **Explore Eras** - Navigate through 6 historical time periods
4. **Solve Challenges** - Answer 3 questions per era
5. **Use Hints** - Get help when stuck (costs points)
6. **Complete Quest** - Finish all eras to become a Time Explorer!

### For Organizers

1. **Print QR Codes** - Generate codes linking to specific era URLs
2. **Hide Codes** - Place QR codes at park locations
3. **Monitor Progress** - Check Firebase for team results
4. **Award Prizes** - Recognize completed teams

## 📁 Project Structure

```
treasure-hunt-quiz/
├── app/                          # Next.js App Router pages
│   ├── game/                     # Main game flow
│   │   └── quizz/                # Quiz eras
│   │       ├── prehistoric/      # Prehistoric era (3 questions)
│   │       ├── egypt/            # Ancient Egypt era
│   │       ├── medieval/         # Medieval era
│   │       ├── victorian/        # Victorian era
│   │       ├── 1980/             # 1980s era
│   │       ├── future/           # Future era
│   │       └── new-step/         # Transition page
│   ├── introduction/             # Game introduction
│   ├── congratulations/          # Success page
│   └── layout.tsx                # Root layout
├── components/                   # Reusable components
│   ├── canvas/                   # 3D scene components
│   ├── quizz/                    # Quiz-related components
│   ├── ui/                       # UI primitives
│   ├── QRScanner.tsx            # QR code scanner
│   ├── TreasureMap.tsx          # Progress map
│   └── Statistics.tsx           # Results dashboard
├── lib/                         # Utilities and configuration
│   ├── language/                # Internationalization
│   ├── store/                   # Redux store
│   ├── hooks/                   # Custom React hooks
│   ├── firebase.ts              # Firebase configuration
│   ├── types.ts                 # TypeScript definitions
│   └── functions.ts             # Utility functions
├── public/                      # Static assets
│   ├── *.glb                    # 3D model files
│   ├── *.jsx                    # Generated model components
│   └── images/                  # Game images (mazes, etc.)
└── package.json                 # Dependencies and scripts
```

## 🔧 Configuration

### Firebase Setup

1. Create Firebase project
2. Enable Realtime Database
3. Add web app configuration
4. Update `.env.local` with credentials

### 3D Models

- Models stored in `/public/` as `.glb` files
- Companion `.jsx` files provide React components
- Load via `@react-three/drei` useGLTF hook

### Internationalization

- Language files in `/lib/language/`
- Add new languages by creating `{locale}.ts` files
- Update `LanguageType` in types.ts

## 🎯 Game Mechanics

### Scoring System

- **Correct Answer**: +250 points
- **Using Hint**: -50 points
- **Skipping Question**: -100 points
- **Starting Points**: 1000 points

### Era Progression

1. **Prehistoric** → Egypt → Medieval → Victorian → 1980s → Future
2. Each era must be completed to unlock the next
3. 3 questions per era (18 total questions)
4. Final era completion triggers congratulations

### Question Types

- **Text Input** - Type the answer
- **Multiple Choice** - Select from 4 options
- **Visual Puzzles** - Mazes and image-based challenges
- **Rebus Puzzles** - Picture-word combinations

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Variables

Ensure all Firebase variables are set in production environment.

### Performance Optimization

- 3D models are optimized for web
- Images compressed for fast loading
- Progressive loading with suspense boundaries

## 🤝 Contributing

This project was created for a specific Children's Day event, but contributions for improvements are welcome:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is part of a volunteer initiative for Children's Day 2025 in Tartu, Estonia.

## 🙏 Acknowledgments

- **Volunteering Estonia** - Event organization and support
- **Children's Day 2025** - Event inspiration and context
- **Tartu Community** - Local park and community support
- **React Three Fiber Community** - 3D development resources
- **Next.js Team** - Framework and documentation

## 📧 Contact

Created by a volunteer developer for Volunteering Estonia in Tartu, Estonia.

For questions about the game or technical implementation, please reach out through the event organizers.

---

_Made with ❤️ for Children's Day 2025 - bringing technology and adventure to the park!_

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
