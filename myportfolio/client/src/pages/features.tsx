import { Code, Database, Settings, Lightbulb, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programmingLanguages = [
  { name: "Java", level: "Advanced", color: "bg-orange-500" },
  { name: "Python", level: "Intermediate", color: "bg-blue-500" },
  { name: "C++", level: "Intermediate", color: "bg-purple-500" }
];

const webTechnologies = [
  { name: "HTML", level: "Intermediate", color: "bg-red-500" },
  { name: "CSS", level: "Intermediate", color: "bg-blue-600" },
  { name: "JavaScript", level: "Intermediate", color: "bg-yellow-500" }
];

const databases = [
  { name: "MySQL", level: "Intermediate", color: "bg-blue-700" }
];

const coreConcepts = [
  { name: "Operating Systems", level: "Intermediate", color: "bg-green-600" },
  { name: "Computer Networks", level: "Intermediate", color: "bg-purple-600" }
];

const tools = [
  { name: "Git", category: "Version Control" },
  { name: "VS Code", category: "IDE" },
  { name: "Figma", category: "Design" },
  { name: "Azure", category: "Cloud Platform" },
  { name: "Amazon AWS", category: "Cloud Platform" },
  { name: "Pandas", category: "Data Science" },
  { name: "Scikit-learn", category: "ML Library" },
  { name: "TensorFlow", category: "Deep Learning" }
];

const softSkills = [
  { name: "Critical Thinking", icon: Lightbulb },
  { name: "Leadership", icon: Users },
  { name: "Problem Solving", icon: Settings },
  { name: "Communication", icon: Globe }
];

export default function Features() {
  return (
    <div className="min-h-screen py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-6">
            <Settings className="mr-2 text-emerald-600" size={20} />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">Feature Engineering</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Programming languages, tools, and technologies I work with</p>
        </div>

        <div className="grid gap-8">
          {/* Programming Languages */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="text-emerald-600" size={24} />
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {programmingLanguages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${lang.color}`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{lang.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Web Technologies */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="text-emerald-600" size={24} />
                Web Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {webTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${tech.color}`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{tech.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="text-emerald-600" size={24} />
                Databases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {databases.map((db, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${db.color}`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{db.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{db.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Core Concepts */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.25s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="text-emerald-600" size={24} />
                Core Concepts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {coreConcepts.map((concept, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                    <div className={`w-4 h-4 rounded-full ${concept.color}`}></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{concept.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{concept.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="text-emerald-600" size={24} />
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg text-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tool.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-emerald-600" size={24} />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-700 rounded-lg text-center">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-3">
                      <skill.icon className="text-emerald-600 dark:text-emerald-400" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
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
