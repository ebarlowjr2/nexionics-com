import { Brain, Sparkles, Database, Eye, MessageSquare, Workflow, Code, Smartphone, Palette, ShoppingCart, TestTube, Briefcase } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function Services() {
  const aiServices = [
    {
      icon: Sparkles,
      title: "Generative AI Solutions",
      description: "Custom LLM integrations, RAG systems, and AI agents tailored to your business needs. Build intelligent assistants that understand your data."
    },
    {
      icon: Brain,
      title: "ML Model Development",
      description: "End-to-end machine learning solutions from data preparation to model deployment. Fine-tuning and custom model training for your specific use cases."
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description: "Streamline operations with intelligent automation. Document processing, workflow optimization, and intelligent decision systems."
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analysis solutions. Object detection, facial recognition, and visual quality inspection systems."
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, chatbots, and language understanding systems. Extract insights from unstructured text data."
    },
    {
      icon: Database,
      title: "Data Engineering & MLOps",
      description: "Robust data pipelines, model deployment infrastructure, and monitoring systems. Scale your AI solutions with confidence."
    }
  ]

  const traditionalServices = [
    {
      icon: Briefcase,
      title: "IT Business Solutions",
      description: "Comprehensive IT consulting and business solutions to optimize your operations, improve efficiency, and drive digital transformation."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging experiences. From wireframes to high-fidelity prototypes and design systems."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Beautiful, performant apps that users love."
    },
    {
      icon: Code,
      title: "Web App Development",
      description: "Modern, scalable web applications built with cutting-edge technologies. From MVPs to enterprise-grade solutions."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Integration",
      description: "Complete e-commerce solutions with payment processing, inventory management, and seamless shopping experiences."
    },
    {
      icon: TestTube,
      title: "QA Testing & Automation",
      description: "Comprehensive quality assurance with automated testing, performance testing, and continuous integration pipelines."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Nexionics</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="/services" className="text-cyan-400">Services</a>
              <a href="/blog" className="text-slate-300 hover:text-cyan-400 transition-colors">Blog</a>
              <a href="/#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From cutting-edge AI solutions to traditional software development, we provide comprehensive services to transform your business.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              AI & Machine Learning Services
            </h2>
            <p className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto">
              Harness the power of artificial intelligence to drive innovation and efficiency
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              Traditional Software Development
            </h2>
            <p className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto">
              Proven expertise in full-cycle software development and IT solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traditionalServices.map((service, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Let's discuss how we can help transform your business with our services
              </p>
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">Nexionics</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 Nexionics. AI-Powered Software Factory.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Services
