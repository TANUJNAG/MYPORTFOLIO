import { Rocket, ExternalLink, Github, Linkedin, Globe, Server, Code, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const liveProjects = [
  {
    title: "RESUMATCH",
    description: "Live AI-powered job matching platform deployed on Render with real-time processing capabilities.",
    url: "https://ml-project-lsws.onrender.com",
    status: "Live",
    tech: ["Python", "Flask", "BERT", "Machine Learning"],
    features: [
      "Real-time job matching",
      "BERT-based semantic analysis",
      "RESTful API endpoints",
      "Responsive web interface"
    ],
    deployment: "Render Cloud Platform",
    icon: Rocket
  },
  {
    title: "Titanic Predictor API",
    description: "Machine learning model API for predicting Titanic passenger survival with detailed analytics.",
    url: "#",
    status: "Development",
    tech: ["Python", "FastAPI", "Scikit-learn", "Docker"],
    features: [
      "ML model serving",
      "Prediction analytics",
      "Model performance metrics",
      "Interactive documentation"
    ],
    deployment: "Containerized Deployment",
    icon: Server
  }
];

const repositories = [
  {
    name: "RESUMATCH",
    description: "BERT-based job-resume matching system with comprehensive NLP pipeline",
    language: "Python",
    stars: "⭐ 12",
    forks: "🍴 5",
    url: "https://github.com/TANUJNAG",
    topics: ["machine-learning", "nlp", "bert", "job-matching"]
  },
  {
    name: "Titanic-ML-Analysis",
    description: "Complete machine learning analysis of Titanic dataset with feature engineering",
    language: "Python",
    stars: "⭐ 8",
    forks: "🍴 3",
    url: "https://github.com/TANUJNAG",
    topics: ["data-science", "machine-learning", "classification", "pandas"]
  },
  {
    name: "Accident-Alert-System",
    description: "Android application with GPS/GSM integration for emergency response",
    language: "Java",
    stars: "⭐ 6",
    forks: "🍴 2",
    url: "https://github.com/TANUJNAG",
    topics: ["android", "iot", "gps", "emergency-system"]
  },

];

const socialLinks = [
  {
    platform: "GitHub",
    username: "TANUJNAG",
    url: "https://github.com/TANUJNAG",
    icon: Github,
    description: "Open source projects and code repositories",
    stats: "20+ repositories"
  },
  {
    platform: "LinkedIn",
    username: "tanuj-nag-10b186278",
    url: "https://www.linkedin.com/in/tanuj-nag-10b186278/",
    icon: Linkedin,
    description: "Professional network and career updates",
    stats: "500+ connections"
  }
];

const deploymentInfo = [
  {
    title: "Cloud Platforms",
    items: ["Render", "Vercel", "Netlify", "Azure"],
    icon: Globe
  },
  {
    title: "Development Tools",
    items: ["Docker", "Git", "CI/CD", "Testing"],
    icon: Code
  },
  {
    title: "Monitoring",
    items: ["Performance tracking", "Error logging", "Analytics", "User feedback"],
    icon: Server
  },
  {
    title: "Mobile Deployment",
    items: ["Android Studio", "APK distribution", "Testing", "Optimization"],
    icon: Smartphone
  }
];

export default function Deployment() {
  return (
    <div className="min-h-screen py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-rose-100 dark:bg-rose-900 rounded-full mb-6">
            <Rocket className="mr-2 text-rose-600" size={20} />
            <span className="text-rose-600 dark:text-rose-400 font-medium">Model Deployment</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Live Projects & Links</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Deployed applications, repositories, and professional profiles</p>
        </div>

        <div className="grid gap-8">
          {/* Live Projects */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="text-rose-600" size={24} />
                Live Deployments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                {liveProjects.map((project, index) => (
                  <div key={index} className="border border-gray-200 dark:border-slate-600 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center">
                          <project.icon className="text-rose-600 dark:text-rose-400" size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <Badge 
                            variant={project.status === 'Live' ? 'default' : 'secondary'}
                            className={project.status === 'Live' ? 'bg-green-100 text-green-700' : ''}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Visit
                        </a>
                      </Button>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technology Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Deployment:</strong> {project.deployment}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* GitHub Repositories */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="text-rose-600" size={24} />
                GitHub Repositories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6">
                {repositories.map((repo, index) => (
                  <div key={index} className="border border-gray-200 dark:border-slate-600 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {repo.name}
                      </h3>
                      <Button size="sm" variant="outline" asChild>
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-1" />
                          View
                        </a>
                      </Button>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {repo.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        {repo.language}
                      </span>
                      <span>{repo.stars}</span>
                      <span>{repo.forks}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="text-rose-600" size={24} />
                Professional Profiles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 border border-gray-200 dark:border-slate-600 rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                      <link.icon className="text-gray-600 dark:text-gray-300" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{link.platform}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{link.description}</p>
                      <p className="text-xs text-gray-500">{link.stats}</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-1" />
                        Visit
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deployment Technologies */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="text-rose-600" size={24} />
                Deployment Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {deploymentInfo.map((info, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="text-rose-600 dark:text-rose-400" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{info.title}</h3>
                    <ul className="space-y-1">
                      {info.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 dark:text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
