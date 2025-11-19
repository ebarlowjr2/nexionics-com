import { Brain, Sparkles, Database, Eye, MessageSquare, Workflow, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import './App.css'

function App() {
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

  const techStack = [
    { name: "OpenAI", category: "LLM" },
    { name: "Anthropic Claude", category: "LLM" },
    { name: "Google Gemini", category: "LLM" },
    { name: "LangChain", category: "Framework" },
    { name: "LlamaIndex", category: "Framework" },
    { name: "PyTorch", category: "ML" },
    { name: "TensorFlow", category: "ML" },
    { name: "Pinecone", category: "Vector DB" },
    { name: "Weaviate", category: "Vector DB" },
    { name: "Qdrant", category: "Vector DB" },
    { name: "MLflow", category: "MLOps" },
    { name: "Kubernetes", category: "Infrastructure" }
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "We analyze your business needs and identify AI opportunities that deliver real value."
    },
    {
      step: "2",
      title: "Design & Development",
      description: "Our team builds custom AI solutions using cutting-edge technologies and best practices."
    },
    {
      step: "3",
      title: "Deploy & Scale",
      description: "We deploy your AI systems with robust infrastructure and provide ongoing optimization."
    },
    {
      step: "4",
      title: "Support & Evolution",
      description: "Continuous monitoring, improvements, and adaptation as your business grows."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Nexionics</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</a>
              <a href="#tech" className="text-slate-300 hover:text-cyan-400 transition-colors">Technology</a>
              <a href="#process" className="text-slate-300 hover:text-cyan-400 transition-colors">Process</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Schedule a Call
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Software Factory</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              With AI Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Nexionics delivers cutting-edge AI and machine learning solutions that drive real business value. 
            From generative AI to computer vision, we build intelligent systems that scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Services That Drive Results
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
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
      </section>

      <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge AI Technology Stack
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We leverage the latest AI technologies and frameworks
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all">
                <div className="text-white font-semibold mb-1">{tech.name}</div>
                <div className="text-cyan-400 text-sm">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From concept to deployment, we guide you every step of the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Let's discuss how AI can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
                View Case Studies
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-slate-400 text-sm">5940 S. Rainbow Blvd<br />Las Vegas, NV 89118</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-slate-400 text-sm">725-900-4330</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 mt-1" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-slate-400 text-sm">info@nexionics.com</div>
                </div>
              </div>
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

export default App
