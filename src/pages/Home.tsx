import { Sparkles, ArrowRight, Mail, Phone, MapPin, Shield, Cloud, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Home() {
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Software Factory</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bringing AI from the Cloud
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Securely to Your Users
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            We specialize in delivering cutting-edge AI solutions that keep your data safe and secure. 
            From cloud to customer, we build intelligent systems you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
              <a href="/blog">
                View Blog
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security-First AI Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We build AI systems with security and privacy at their core
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-500/50 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Data Protection</h3>
              <p className="text-slate-400">
                Enterprise-grade security measures to protect your sensitive data throughout the AI pipeline
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-500/50 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Cloud to Edge</h3>
              <p className="text-slate-400">
                Seamless AI deployment from cloud infrastructure to edge devices and end-users
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-cyan-500/50 transition-all">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">Privacy Compliance</h3>
              <p className="text-slate-400">
                Built-in compliance with GDPR, CCPA, and industry-specific regulations
              </p>
            </div>
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
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
                <a href="/blog">
                  View Blog
                </a>
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
    </div>
  )
}

export default Home
