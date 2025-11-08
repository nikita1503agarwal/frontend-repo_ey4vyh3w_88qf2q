import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Autonomous Drone',
    desc: 'A quadcopter with onboard computer vision for object tracking and navigation.',
    tags: ['Python', 'OpenCV', 'PX4', 'ROS'],
  },
  {
    title: 'Hotbonder Controller',
    desc: 'Industrial temperature control system with safety interlocks and touch UI.',
    tags: ['Embedded C', 'STM32', 'PCB'],
  },
  {
    title: 'Home Automation',
    desc: 'Smart home hub with voice control and energy monitoring.',
    tags: ['Raspberry Pi', 'MQTT', 'Flask'],
  },
  {
    title: 'AI Workshop Tools',
    desc: 'Interactive modules to teach AI basics to kids and educators.',
    tags: ['Python', 'Jupyter', 'Streamlit'],
  },
]

export default function Projects() {
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
              <a href="#" className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">View Details</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
