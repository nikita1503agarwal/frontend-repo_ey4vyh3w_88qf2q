import { Cpu, Code, Rocket, Brain, CircuitBoard, Gauge, Atom } from 'lucide-react'

const skills = [
  { name: 'Python', level: 95, icon: Code },
  { name: 'Raspberry Pi', level: 90, icon: CircuitBoard },
  { name: 'Arduino', level: 88, icon: Gauge },
  { name: 'Flask', level: 80, icon: Rocket },
  { name: 'PCB Designing', level: 75, icon: CircuitBoard },
  { name: 'Robotics', level: 92, icon: Cpu },
  { name: 'AI / ML', level: 85, icon: Brain },
  { name: 'IoT', level: 86, icon: Atom },
]

export default function Skills() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black text-black dark:text-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600/10 text-blue-600">
                    <s.icon size={18} />
                  </span>
                  <div className="font-medium">{s.name}</div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{s.level}%</div>
              </div>
              <div className="mt-3 h-2 w-full rounded bg-black/5 dark:bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
