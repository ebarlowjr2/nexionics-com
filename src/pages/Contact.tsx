import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <MessageSquare className="h-4 w-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Have a question about our services or want to discuss your next project? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Fill out our quick form and we'll get back to you within 24 hours
            </p>
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRE86_vAyckMNmMi3jJhbhXy8ABc7pxrOj3BKSq_Fq2dEsIg/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  5940 S. Rainbow Blvd<br />
                  Las Vegas, NV 89118
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  <a href="tel:725-900-4330" className="hover:text-cyan-400 transition-colors">
                    725-900-4330
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  <a href="mailto:info@nexionics.com" className="hover:text-cyan-400 transition-colors">
                    info@nexionics.com
                  </a>
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
            <div className="space-y-2 text-slate-400">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-white">9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
