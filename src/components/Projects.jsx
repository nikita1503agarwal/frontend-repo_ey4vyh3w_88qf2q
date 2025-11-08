import { ExternalLink, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'Autonomous Drone',
    desc: 'A quadcopter with onboard computer vision for object tracking and navigation.',
    tags: ['Python', 'OpenCV', 'PX4', 'ROS'],
    details:
      'Built a custom flight stack integration with PX4 and ROS. Implemented object tracking with OpenCV and Kalman filtering. Deployed on NVIDIA Jetson Nano for onboard inference.',
  },
  {
    title: 'Hotbonder Controller',
    desc: 'Industrial temperature control system with safety interlocks and touch UI.',
    tags: ['Embedded C', 'STM32', 'PCB'],
    details:
      'Designed a closed-loop PID controller with dual thermocouple inputs and solid-state relay drivers. Created a capacitive touch UI and implemented fault diagnostics.',
  },
  {
    title: 'Home Automation',
    desc: 'Smart home hub with voice control and energy monitoring.',
    tags: ['Raspberry Pi', 'MQTT', 'Flask'],
    details:
      'Built a hub using Raspberry Pi, MQTT for messaging, and Flask for the API. Added energy usage analytics and voice integration via Alexa Skills Kit.',
  },
  {
    title: 'AI Workshop Tools',
    desc: 'Interactive modules to teach AI basics to kids and educators.',
    tags: ['Python', 'Jupyter', 'Streamlit'],
    details:
      'Developed beginner-friendly notebooks and Streamlit apps covering vision, NLP, and ethics. Used real-world datasets and unplugged activities to reinforce learning.',
  },
]

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const openDetails = (proj) => {
    setSelected(proj)
    setOpen(true)
  }

  return (
    <section id="projects" className="relative bg-gradient-to-b from-black to-gray-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
          <a href="#contact" className="text-sm text-blue-400 hover:text-blue-300">Need something built?</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl bg-white/5 border border-white/10 p-6 hover:border-blue-500/40 hover:bg-blue-500/5 transition-colors">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <ExternalLink size={18} className="opacity-60 group-hover:opacity-100" />
              </div>
              <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
              <button onClick={() => openDetails(p)} className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>

      {open && selected && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full sm:max-w-lg mx-auto rounded-t-2xl sm:rounded-2xl bg-white dark:bg-zinc-900 text-black dark:text-white shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
              <h3 className="text-lg font-semibold">{selected.title}</h3>
              <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10">
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">{selected.details}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10">{t}</span>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-black/10 dark:border-white/10 flex justify-end gap-2">
              <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20">
                Close
              </button>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
