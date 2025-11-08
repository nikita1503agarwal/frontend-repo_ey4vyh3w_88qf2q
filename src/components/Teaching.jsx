const items = [
  {
    title: 'AI for Kids: Grades 6-9',
    topics: 'Computer vision, basic ML, and ethical AI',
    bg: 'from-blue-600/30 to-cyan-600/30',
  },
  {
    title: 'Robotics Fundamentals',
    topics: 'Sensors, actuators, Arduino, and Raspberry Pi',
    bg: 'from-purple-600/30 to-pink-600/30',
  },
  {
    title: 'Teacher Workshop: AI in Classrooms',
    topics: 'Prompting, tools, and curriculum integration',
    bg: 'from-amber-600/30 to-red-600/30',
  },
]

export default function Teaching() {
  return (
    <section id="workshops" className="bg-white dark:bg-black text-black dark:text-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Workshops & Teaching</h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl">
          I design hands-on sessions for students and educators, focusing on real-world problem solving through robotics and AI.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c.title} className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
              <div className={`aspect-video bg-gradient-to-br ${c.bg}`} />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{c.topics}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
