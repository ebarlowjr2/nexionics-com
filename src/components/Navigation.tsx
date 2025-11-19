import { Brain, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function Navigation() {
  const aiServices = [
    { name: "Generative AI Solutions", href: "/services/generative-ai" },
    { name: "ML Model Development", href: "/services/ml-development" },
    { name: "AI Automation", href: "/services/ai-automation" },
    { name: "Computer Vision", href: "/services/computer-vision" },
    { name: "Natural Language Processing", href: "/services/nlp" },
    { name: "Data Engineering & MLOps", href: "/services/data-engineering-mlops" }
  ]

  const traditionalServices = [
    { name: "IT Business Solutions", href: "/services/it-business-solutions" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Web App Development", href: "/services/web-app-development" },
    { name: "E-Commerce Integration", href: "/services/ecommerce-integration" },
    { name: "QA Testing & Automation", href: "/services/qa-testing-automation" }
  ]

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">Nexionics</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-slate-900 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <div className="text-cyan-400 text-xs font-semibold uppercase mb-2">AI Solutions</div>
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block text-slate-300 hover:text-cyan-400 py-2 text-sm transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="text-cyan-400 text-xs font-semibold uppercase mt-4 mb-2">Traditional Services</div>
                  {traditionalServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block text-slate-300 hover:text-cyan-400 py-2 text-sm transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/blog" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <a href="/#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
          <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              Schedule a Call
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
