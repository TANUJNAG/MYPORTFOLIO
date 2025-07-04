import { Link } from "wouter";
import { Moon, Sun, Brain, Github, Linkedin, ExternalLink, Mail, MapPin } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Navigation Header */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                  <Brain className="text-white text-xl" size={20} />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">AI/ML Portfolio</span>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-gray-600" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-300" />
                )}
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/TANUJNAG" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/tanuj-nag-10b186278/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                  <Brain className="text-white text-xl" size={20} />
                </div>
                <span className="text-xl font-bold">Tanuj Nag</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI/ML Engineer passionate about building intelligent solutions and exploring the frontiers of machine learning.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/eda" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Resume Overview
                </Link>
                <Link href="/modeling" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </Link>
                <Link href="/evaluation" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Achievements
                </Link>
                <Link href="/deployment" className="block text-gray-400 hover:text-white transition-colors duration-200">
                  Live Projects
                </Link>
              </div>
            </div>
            
            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/TANUJNAG" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <Github className="text-xl" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/tanuj-nag-10b186278/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <Linkedin className="text-xl" size={20} />
                </a>
                <a href="https://ml-project-lsws.onrender.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <ExternalLink className="text-xl" size={20} />
                </a>
              </div>
              <div className="text-gray-400 text-sm space-y-1">
                <p><Mail className="inline mr-2" size={16} />tanujnag1894@gmail.com</p>
                <p><MapPin className="inline mr-2" size={16} />India</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tanuj Nag. Built with passion for AI/ML innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
