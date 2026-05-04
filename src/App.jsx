import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import About             from './components/About'
import Programs          from './components/Programs'
import RegistrationForm  from './components/RegistrationForm'
import Footer            from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  )
}
