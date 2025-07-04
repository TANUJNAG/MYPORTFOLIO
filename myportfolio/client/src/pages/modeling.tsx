import { Brain, ExternalLink, Github, Smartphone, Ship } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RESUMATCH",
    description: "BERT-based intelligent job matching system that analyzes resumes and job descriptions to find the best matches using advanced NLP techniques and semantic similarity.",
    tech: ["Python", "BERT", "NLP", "Machine Learning", "Flask"],
    accuracy: "~85%",
    category: "Natural Language Processing",
    icon: Brain,
    links: {
      live: "https://ml-project-lsws.onrender.com",
      github: "https://github.com/TANUJNAG"
    },
    highlights: [
      "Advanced BERT model implementation",
      "Semantic similarity matching",
      "Real-time job recommendation",
      "User-friendly web interface"
    ]
  },
  {
    title: "Titanic Survival Predictor",
    description: "Machine learning model using logistic regression to predict passenger survival on the Titanic. Comprehensive data analysis and feature engineering for optimal performance.",
    tech: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Data Analysis"],
    accuracy: "81%",
    category: "Classification",
    icon: Ship,
    links: {
      github: "https://github.com/TANUJNAG/titanic-streamlit-app"
    },
    highlights: [
      "Extensive data preprocessing",
      "Feature engineering techniques",
      "Model optimization",
      "Statistical analysis"
    ]
  },
  {
    title: "Accident Alert System",
    description: "Android application with GSM and GPS integration for real-time accident detection and emergency response. Automated alert system for enhanced safety.",
    tech: ["Android", "Java", "GSM", "GPS", "IoT"],
    accuracy: "Real-time",
    category: "Mobile & IoT",
    icon: Smartphone,
    links: {
      github: "https://github.com/TANUJNAG"
    },
    highlights: [
      "Real-time location tracking",
      "Automated emergency alerts",
      "GSM communication",
      "User-friendly mobile interface"
    ]
  },

];

export default function Modeling() {
  return (
    <div className="min-h-screen py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900 rounded-full mb-6">
            <Brain className="mr-2 text-purple-600" size={20} />
            <span className="text-purple-600 dark:text-purple-400 font-medium">Machine Learning Modeling</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">ML Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Showcase of machine learning projects and applications</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`animate-slide-up overflow-hidden`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <project.icon className="text-purple-600 dark:text-purple-400" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {project.accuracy && (
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {project.accuracy}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {project.accuracy.includes('%') ? 'Model Accuracy' : 'Performance Metric'}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
