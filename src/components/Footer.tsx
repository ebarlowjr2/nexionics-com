import { Brain } from 'lucide-react'

function Footer() {
  return (
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
  )
}

export default Footer
