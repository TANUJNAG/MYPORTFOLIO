import { Link } from "wouter";
import { BarChart3, ServerCog, Brain, TrendingUp, Rocket, GraduationCap, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@assets/image_1751655962101.png";

const conceptCards = [
  {
    id: "eda",
    title: "EDA",
    subtitle: "Resume Overview",
    description: "📊 EDA — Resume Overview",
    icon: BarChart3,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
    path: "/eda"
  },
  {
    id: "features",
    title: "Feature Engineering",
    subtitle: "Technical Skills",
    description: "🧪 Features — Technical Skills",
    icon: ServerCog,
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-100 dark:bg-emerald-900",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    path: "/features"
  },
  {
    id: "modeling",
    title: "Modeling",
    subtitle: "ML Projects",
    description: "🧠 Modeling — My ML Projects",
    icon: Brain,
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-600 dark:text-purple-400",
    path: "/modeling"
  },
  {
    id: "evaluation",
    title: "Evaluation",
    subtitle: "Achievements",
    description: "🧾 Evaluation — Achievements",
    icon: TrendingUp,
    color: "amber",
    gradient: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-600 dark:text-amber-400",
    path: "/evaluation"
  },
  {
    id: "deployment",
    title: "Deployment",
    subtitle: "Live Projects",
    description: "🚀 Deployment — Live Projects",
    icon: Rocket,
    color: "rose",
    gradient: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-100 dark:bg-rose-900",
    iconColor: "text-rose-600 dark:text-rose-400",
    path: "/deployment"
  }
];

const stats = [
  { value: "3+", label: "ML Projects", color: "text-blue-600" },
  { value: "85%", label: "Best Model Accuracy", color: "text-emerald-600" },
  { value: "3", label: "Certificates", color: "text-purple-600" },
  { value: "2+", label: "Live Deployments", color: "text-amber-600" }
];

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Background Profile Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src={profileImage} 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-black/80"></div>
        </div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Left Side - Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Tanuj Nag - AI/ML Engineer" 
                  className="w-full max-w-lg mx-auto rounded-2xl object-cover shadow-2xl border-4 border-white border-opacity-20 aspect-[4/5]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/30 to-transparent"></div>
                
                {/* Floating elements around photo */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-amber-400 to-rose-500 rounded-lg rotate-45 opacity-30 animate-bounce"></div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 rounded-full border border-white border-opacity-20 backdrop-blur-sm mb-6">
                  <Rocket className="mr-2" size={16} />
                  <span className="text-sm font-medium">AI/ML Engineer Portfolio</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                Welcome to My
                <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent block mt-2">
                  AI/ML Journey
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 animate-slide-up">
                Explore my expertise through the complete Machine Learning lifecycle - from data exploration to deployment
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up">
                <div className="flex items-center space-x-2 text-blue-200">
                  <GraduationCap size={20} />
                  <span>Tanuj Nag</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-blue-200 rounded-full"></div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <MapPin size={20} />
                  <span>AI/ML Enthusiast</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-blue-200 rounded-full"></div>
                <div className="flex items-center space-x-2 text-blue-200">
                  <GraduationCap size={20} />
                  <span>Computer Science Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI/ML Dashboard */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore My ML Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Navigate through different stages of the Machine Learning lifecycle to discover my skills, projects, and achievements
            </p>
          </div>

          {/* Concept Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {conceptCards.map((card) => (
              <Link key={card.id} href={card.path}>
                <Card className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-6 lg:p-8 text-center">
                    <div className="mb-4">
                      <div className={`w-16 h-16 mx-auto ${card.bgColor} rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20 transition-all duration-300`}>
                        <card.icon className={`text-2xl ${card.iconColor} group-hover:text-white transition-colors duration-300`} size={24} />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300 mb-2">
                      {card.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-100 transition-colors duration-300 mb-4">
                      {card.subtitle}
                    </p>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      {card.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                    
                    {/* Navigation Arrow */}
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white">→</div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Portfolio Highlights</h3>
            <p className="text-gray-600 dark:text-gray-300">Quick overview of my achievements and capabilities</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-slate-700 rounded-xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
