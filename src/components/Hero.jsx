import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-start justify-center min-h-screen">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm backdrop-blur">
          Robotics Developer • Python Expert • IoT Innovator • Educator
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Satyam Singh
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-white/80">
          Building intelligent systems and teaching future innovators.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/resume.txt"
            download
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-colors"
          >
            <Download size={18} /> Download Resume
          </a>
          <div className="flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:satyam@example.com" aria-label="Email" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
