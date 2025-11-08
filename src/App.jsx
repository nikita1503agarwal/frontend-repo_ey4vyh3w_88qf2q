import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Teaching from './components/Teaching'
import Contact from './components/Contact'
import SEO from './components/SEO'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-inter bg-white dark:bg-black text-black dark:text-white scroll-smooth">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Teaching />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
