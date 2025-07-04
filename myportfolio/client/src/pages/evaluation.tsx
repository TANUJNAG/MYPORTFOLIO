import { Award, TrendingUp, Trophy, Star, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis",
    date: "October 15, 2024",
    category: "Data Science",
    description: "Online non-credit course covering SQL fundamentals for data science applications through Coursera. Verified completion with course identity confirmation.",
    skills: ["SQL", "Database Management", "Data Analysis", "Query Optimization"],
    credentialUrl: "https://coursera.org/verify/KB2U37CBWXGI"
  },
  {
    title: "Microsoft Azure AI-900",
    issuer: "Microsoft",
    date: "2024",
    category: "Cloud AI",
    description: "Azure AI Fundamentals certification demonstrating knowledge of machine learning and AI concepts on Microsoft Azure platform.",
    skills: ["Azure AI Services", "Machine Learning", "Cognitive Services", "AI Ethics"],
    credentialUrl: "https://drive.google.com/file/d/1lSPjOWffFMamizynoXtittai34fUAA2C/view?usp=drive_link"
  },
  {
    title: "GDSC Hackathon Participant",
    issuer: "Google Developer Student Clubs",
    date: "2024",
    category: "Competition",
    description: "Active participant in Google Developer Student Clubs hackathon, developing innovative AI/ML solutions and collaborating with fellow developers.",
    skills: ["Problem Solving", "Team Collaboration", "Innovation", "Technical Implementation"],
    credentialUrl: "https://drive.google.com/file/d/1fWepCWyhK0ojc0V1X5hlh85gJF7lupnz/view?usp=drive_link"
  },
  {
    title: "V-Nest Makeathon Participant",
    issuer: "V-Nest Innovation",
    date: "2024",
    category: "Innovation",
    description: "Active participant in V-Nest Makeathon, developing creative solutions for real-world problems.",
    skills: ["Creative Thinking", "Rapid Prototyping", "Product Development", "Presentation"],
    credentialUrl: "https://drive.google.com/file/d/1TKy4l_0yUOOpcdI2g9wL--1DfO9jFV4l/view?usp=drive_link"
  }
];

const achievements = [
  {
    title: "Best Model Performance",
    metric: "85%",
    description: "RESUMATCH project achieved 85% accuracy in job-resume matching",
    icon: TrendingUp,
    color: "text-emerald-600"
  },
  {
    title: "Academic Excellence",
    metric: "8.44",
    description: "Current CGPA maintaining consistent academic performance",
    icon: Star,
    color: "text-blue-600"
  },
  {
    title: "Project Completion",
    metric: "3+",
    description: "Successfully completed ML projects across different domains",
    icon: Trophy,
    color: "text-purple-600"
  },
  {
    title: "Live Deployments",
    metric: "2+",
    description: "Successfully deployed and maintained production applications",
    icon: Award,
    color: "text-amber-600"
  }
];

const academicHighlights = [
  {
    title: "Leadership Experience",
    description: "Demonstrated leadership skills in academic, professional, and entrepreneurship activities",
    points: [
      "Marketing Lead at Club ECELL VIT Chennai",
      "Strategic marketing campaign development",
      "Event coordination and team management",
      "Promoting innovation and startup culture"
    ]
  },
  {
    title: "Technical Growth",
    description: "Continuous learning and skill development in AI/ML domain",
    points: [
      "Self-directed learning initiatives",
      "Industry best practices adoption",
      "Open source contributions",
      "Technology trend awareness"
    ]
  }
];

export default function Evaluation() {
  return (
    <div className="min-h-screen py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900 rounded-full mb-6">
            <Award className="mr-2 text-amber-600" size={20} />
            <span className="text-amber-600 dark:text-amber-400 font-medium">Model Evaluation</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements & Certifications</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Certificates, performance metrics, and academic highlights</p>
        </div>

        <div className="grid gap-8">
          {/* Performance Metrics */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-amber-600" size={24} />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className="w-12 h-12 bg-white dark:bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <achievement.icon className={achievement.color} size={24} />
                    </div>
                    <div className={`text-2xl font-bold ${achievement.color} mb-2`}>
                      {achievement.metric}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-amber-600" size={24} />
                Certifications & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <div key={index} className="border border-gray-200 dark:border-slate-600 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {cert.title}
                          </h3>
                          <Badge variant="outline">{cert.category}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                          <span className="flex items-center gap-1">
                            <Award size={16} />
                            {cert.issuer}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={16} />
                            {cert.date}
                          </span>
                        </div>
                      </div>
                      {cert.credentialUrl && cert.credentialUrl !== "#" && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-1" />
                            View
                          </a>
                        </Button>
                      )}
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {cert.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Skills Acquired:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="text-amber-600" size={24} />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-gray-200 dark:border-slate-600 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Marketing Lead
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      Club ECELL, VIT Chennai
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      Entrepreneurship Cell - Student Organization
                    </p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://www.instagram.com/p/C_arPNKSt_D/?img_index=4" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-1" />
                      View
                    </a>
                  </Button>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Led comprehensive marketing initiatives and promotional campaigns for the entrepreneurship cell, 
                  developing strategic marketing plans and coordinating events to promote innovation and startup culture among students.
                </p>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                      Strategic marketing campaign development and execution
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                      Event coordination and team management for entrepreneurship initiatives
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                      Promoting innovation and startup culture across campus
                    </li>
                    <li className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                      Cross-functional collaboration with technical and business teams
                    </li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-xs">
                      Leadership
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs">
                      Marketing Strategy
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs">
                      Event Management
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs">
                      Team Coordination
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic & Leadership Highlights */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="text-amber-600" size={24} />
                Academic & Leadership Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {academicHighlights.map((highlight, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {highlight.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {highlight.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                          {point}
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
