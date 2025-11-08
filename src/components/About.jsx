import { GraduationCap, Cpu, Bot, BookOpen, School } from 'lucide-react'

const timeline = [
  {
    year: '2019 - 2023',
    title: 'Electronics & Computer Science Engineering',
    icon: GraduationCap,
    desc:
      'Specialized in robotics, AI, and embedded systems. Hands-on with Raspberry Pi, Arduino, and PCB design.',
  },
  {
    year: '2022 - Present',
    title: 'Robotics Developer & Educator',
    icon: Bot,
    desc:
      'Built drones, hot bonders, and home automation systems. Teach robotics and AI to students from grades 2–9.',
  },
  {
    year: '2023',
    title: 'IoT & AI Workshops',
    icon: BookOpen,
    desc:
      'Conducted workshops for teachers on using AI in education and integrating IoT into classrooms.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white dark:bg-black text-black dark:text-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m Satyam Singh, an Electronics and Computer Science Engineer specializing in robotics, AI, and embedded systems. I’ve worked with Raspberry Pi, Arduino, and developed several real-world projects like drones, home automation systems, and hot bonders.
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              I teach robotics and AI to students from grades 2–9 and conduct workshops for teachers on leveraging AI in education. With 2+ years of experience as a robotics instructor, I’ve collaborated with multiple schools and institutions to build future innovators.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2"><Cpu size={16}/> Robotics</div>
              <div className="flex items-center gap-2"><Bot size={16}/> AI & ML</div>
              <div className="flex items-center gap-2"><Cpu size={16}/> Embedded / IoT</div>
              <div className="flex items-center gap-2"><School size={16}/> Educator</div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Journey</h3>
            <ol className="mt-6 relative border-l border-gray-200 dark:border-white/10">
              {timeline.map((item, idx) => (
                <li key={idx} className="ml-6 mb-8">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                    <item.icon size={14} />
                  </span>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.year}</div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
