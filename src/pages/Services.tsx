import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { aiServices, traditionalServices } from '@/data/services'

function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
              {aiServices.map((service) => {
                const ServiceIcon = service.icon
                return (
                  <Link key={service.slug} to={`/services/${service.slug}`}>
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full cursor-pointer">
                      <CardHeader>
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                          <ServiceIcon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-400 text-base">
                          {service.short}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
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
              {traditionalServices.map((service) => {
                const ServiceIcon = service.icon
                return (
                  <Link key={service.slug} to={`/services/${service.slug}`}>
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full cursor-pointer">
                      <CardHeader>
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                          <ServiceIcon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-400 text-base">
                          {service.short}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
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
    </div>
  )
}

export default Services
