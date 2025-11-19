import { Brain, Calendar, User, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function Blog() {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Software",
      excerpt: "Exploring how artificial intelligence is transforming enterprise software development and what it means for businesses in 2024 and beyond.",
      author: "Nexionics Team",
      date: "November 15, 2024",
      category: "AI & Machine Learning"
    },
    {
      title: "Building Scalable RAG Systems for Production",
      excerpt: "A deep dive into Retrieval-Augmented Generation systems, best practices for implementation, and lessons learned from real-world deployments.",
      author: "Nexionics Team",
      date: "November 10, 2024",
      category: "Technical Insights"
    },
    {
      title: "Data Security in the Age of AI",
      excerpt: "How to maintain data privacy and security while leveraging the power of AI and machine learning in your applications.",
      author: "Nexionics Team",
      date: "November 5, 2024",
      category: "Security"
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
              <a href="/services" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</a>
              <a href="/blog" className="text-cyan-400">Blog</a>
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
              Nexionics Blog
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Insights, updates, and technical deep-dives from our team on AI, software development, and technology trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="text-cyan-400 text-sm font-medium mb-2">{post.category}</div>
                  <CardTitle className="text-white text-2xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-slate-500 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-slate-400 text-lg">
              More articles coming soon. Stay tuned for updates on AI, software development, and industry insights.
            </p>
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

export default Blog
