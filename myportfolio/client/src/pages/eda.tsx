import { User, Mail, Phone, MapPin, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from "@assets/image_1751653238928.png";

export default function EDA() {
  return (
    <div className="min-h-screen py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <User className="mr-2 text-blue-600" size={20} />
            <span className="text-blue-600 dark:text-blue-400 font-medium">Exploratory Data Analysis</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume Overview</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Personal information, education, and profile summary</p>
        </div>

        <div className="grid gap-8">
          {/* Personal Information */}
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-blue-600" size={24} />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Profile Photo */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative">
                    <img 
                      src={profileImage} 
                      alt="Tanuj Nag - AI/ML Engineer" 
                      className="w-48 h-48 rounded-2xl object-cover shadow-lg border-4 border-blue-100 dark:border-blue-900"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="text-gray-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Tanuj Nag</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">AI/ML Engineer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="text-gray-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">tanujnag1894@gmail.com</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Primary Email</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-gray-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">+91 9381876228</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Contact Number</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="text-gray-500" size={20} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">India</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Location</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-blue-600" size={24} />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 pb-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Bachelor's in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">VIT Chennai - Current Undergraduate Student</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                    Current CGPA: 8.44
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">12th Grade</h4>
                  <p className="text-gray-600 dark:text-gray-300">Higher Secondary Education</p>
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                    928/1000
                  </span>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">10th Grade</h4>
                  <p className="text-gray-600 dark:text-gray-300">Secondary Education</p>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                    10.0 CGPA
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Marketing Lead</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Club ECELL, VIT Chennai</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Led marketing initiatives and promotional campaigns for the entrepreneurship cell, 
                  developing strategic marketing plans and coordinating events to promote innovation and startup culture.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm">
                    Leadership
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                    Marketing Strategy
                  </span>
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                    Event Coordination
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Summary */}
          <Card className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="text-blue-600" size={24} />
                Profile Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Passionate Computer Science student with a strong focus on Artificial Intelligence and Machine Learning. 
                  Dedicated to developing innovative solutions that leverage the power of data and intelligent algorithms 
                  to solve real-world problems.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Experienced in building end-to-end ML projects from data collection and preprocessing to model deployment. 
                  Committed to continuous learning and staying updated with the latest advancements in AI/ML technologies.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                    AI/ML Enthusiast
                  </span>
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-sm">
                    Problem Solver
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                    Continuous Learner
                  </span>
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full text-sm">
                    Team Player
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
