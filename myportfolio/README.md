# Tanuj Nag - AI/ML Portfolio

A multi-page AI/ML-themed portfolio website showcasing my journey through the complete Machine Learning lifecycle.

## Features

- **Interactive Dashboard**: Navigate through AI/ML concepts (EDA, Feature Engineering, Modeling, Evaluation, Deployment)
- **Responsive Design**: Optimized for all devices with dark/light theme support
- **Professional Layout**: Clean, modern design with smooth animations
- **Complete Portfolio**: Resume overview, technical skills, projects, achievements, and live deployments

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Build Tool**: Vite
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Routing**: Wouter

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd tanuj-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Start production server
```bash
npm start
```

## Deployment

### Render Deployment

1. Connect your GitHub repository to Render
2. Use the following settings:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js
   - **Plan**: Free

### Docker Deployment

```bash
docker build -t tanuj-portfolio .
docker run -p 5000:5000 tanuj-portfolio
```

## Project Structure

```
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
├── components.json  # UI component configuration
├── render.yaml      # Render deployment configuration
└── Dockerfile       # Docker configuration
```

## Portfolio Sections

- **EDA**: Personal information, education, and profile summary
- **Feature Engineering**: Technical skills, programming languages, and tools
- **Modeling**: Machine learning projects and applications
- **Evaluation**: Certificates, achievements, and performance metrics
- **Deployment**: Live projects, GitHub repositories, and professional profiles

## Contact

- **Email**: tanuj.nag@email.com
- **GitHub**: [TANUJNAG](https://github.com/TANUJNAG)
- **LinkedIn**: [tanuj-nag](https://www.linkedin.com/in/tanuj-nag-10b186278/)
- **Portfolio**: [RESUMATCH](https://ml-project-lsws.onrender.com)

## License

MIT License - feel free to use this project as inspiration for your own portfolio!