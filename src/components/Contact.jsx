import { Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been sent.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-white dark:bg-black text-black dark:text-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">Have a project in mind or want to collaborate? I’d love to hear from you.</p>
            <div className="mt-6 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2"><Mail size={16}/> satyam@example.com</div>
              <div className="flex items-center gap-2"><Phone size={16}/> +91-00000-00000</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input required name="name" className="w-full rounded-md bg-black/5 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input required type="email" name="email" className="w-full rounded-md bg-black/5 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm mb-1">Message</label>
              <textarea required name="message" rows="5" className="w-full rounded-md bg-black/5 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-sm font-semibold">
                Send Message
              </button>
              <a href="mailto:satyam@example.com" className="inline-flex items-center justify-center rounded-md bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-black dark:text-white px-5 py-2.5 text-sm font-semibold">
                Email Me
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-sm font-semibold">
                WhatsApp
              </a>
            </div>
            {status && <p className="mt-3 text-sm text-green-600 dark:text-green-400">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
