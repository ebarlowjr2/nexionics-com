import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, Check, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { servicesBySlug, services } from '@/data/services'

function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug || !servicesBySlug[slug]) {
    return <Navigate to="/services" replace />
  }

  const service = servicesBySlug[slug]
  const ServiceIcon = service.icon
  
  const relatedServices = services
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <ServiceIcon className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">
                  {service.category === 'ai' ? 'AI Service' : 'Traditional Service'}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                {service.short}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800 text-lg px-8 py-6">
                  <Link to="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 flex items-center justify-center">
              <div className="w-48 h-48 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <ServiceIcon className="h-32 w-32 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Overview
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-white text-lg">{feature}</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Use Cases
              </h2>
              <div className="space-y-4">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-slate-800/30 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-all">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-slate-300 text-lg">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Benefits
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4">
                    <Check className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {relatedServices.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => {
                  const RelatedIcon = relatedService.icon
                  return (
                    <Link key={relatedService.slug} to={`/services/${relatedService.slug}`}>
                      <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                        <CardHeader>
                          <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                            <RelatedIcon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <CardTitle className="text-white text-xl">{relatedService.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-400">
                            {relatedService.short}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Let's discuss how {service.title.toLowerCase()} can transform your business
            </p>
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
