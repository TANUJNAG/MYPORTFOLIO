# AI/ML Portfolio - Tanuj Nag

## Overview

This is a multi-page AI/ML-themed portfolio website built as a React application with a Node.js backend. The project showcases Tanuj Nag's journey through the complete Machine Learning lifecycle, featuring an interactive dashboard where users can navigate through different AI/ML concepts (EDA, Feature Engineering, Modeling, Evaluation, Deployment) to explore various sections of the portfolio.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom AI/ML theme colors
- **UI Components**: Radix UI primitives with custom styling
- **Routing**: Wouter for client-side routing
- **State Management**: React Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: In-memory storage implementation with interface for database abstraction
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Design System
- **Component Library**: Custom shadcn/ui components
- **Theme**: Light/dark mode support with CSS variables
- **Icons**: Lucide React icons
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Pages Structure
1. **Home Page** (`/`): Interactive AI/ML concept dashboard with navigation cards
2. **EDA Page** (`/eda`): Personal information, education, and profile summary
3. **Features Page** (`/features`): Technical skills, programming languages, and tools
4. **Modeling Page** (`/modeling`): ML projects including RESUMATCH and Titanic predictor
5. **Evaluation Page** (`/evaluation`): Certificates, achievements, and performance metrics
6. **Deployment Page** (`/deployment`): Live projects, repositories, and deployment links

### Core Features
- **Interactive Dashboard**: AI/ML concept icons that navigate to dedicated pages
- **Responsive Design**: Optimized for all devices with consistent theming
- **Theme Switching**: Light/dark mode toggle with persistent storage
- **Professional Layout**: Clean, modern design with smooth animations
- **Project Showcase**: Live project links and GitHub repositories

### UI Components
- Custom card components for project displays
- Badge system for technology tags
- Button variants for different actions
- Progress indicators for skill levels
- Responsive navigation with mobile support

## Data Flow

### Client-Side Navigation
1. User lands on homepage with AI/ML concept cards
2. Each card navigates to a specific page using Wouter routing
3. Pages are rendered client-side with React components
4. Theme preferences are stored in localStorage

### Server Communication
- API routes prefixed with `/api` for backend communication
- React Query manages server state and caching
- Express middleware handles request logging and error handling
- Session management through PostgreSQL sessions

### Asset Management
- Static assets served from attached_assets directory
- Profile images and project screenshots
- Vite handles asset bundling and optimization

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Libraries**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, Class Variance Authority
- **Routing**: Wouter for lightweight routing
- **Forms**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Server**: Express.js with TypeScript support
- **Session**: Connect-pg-simple for session storage
- **Utilities**: Date-fns for date manipulation

### Development Dependencies
- **Build Tools**: Vite, ESBuild for production builds
- **Development**: TSX for TypeScript execution
- **Linting**: TypeScript compiler for type checking

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` - Starts development server with hot reload
2. **Production Build**: `npm run build` - Vite builds frontend, ESBuild bundles backend
3. **Start Production**: `npm start` - Runs production server

### Deployment Targets
- **Primary**: Render.com deployment with automatic GitHub integration
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment**: Node.js 20+

### Database Configuration
- PostgreSQL database with Drizzle ORM
- Connection via DATABASE_URL environment variable
- Session storage in PostgreSQL
- Schema migrations via `npm run db:push`

### File Structure
```
dist/
├── public/          # Frontend build output
└── index.js         # Backend bundle

client/
├── src/
│   ├── components/  # React components
│   ├── pages/       # Page components
│   ├── lib/         # Utilities
│   └── hooks/       # Custom hooks

server/
├── index.ts         # Express server
├── routes.ts        # API routes
└── storage.ts       # Database abstraction
```

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```