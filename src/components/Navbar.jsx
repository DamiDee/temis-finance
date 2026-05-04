import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',    href: '#about'    },
  { label: 'Programs', href: '#programs' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-green-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-18 sm:h-20">

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
          >
            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-2 transition-all duration-300 ${
              scrolled ? 'ring-brand/20 group-hover:ring-brand/50' : 'ring-white/30 group-hover:ring-gold-light/60'
            }`}>
              <img src="/images/logo.png" alt="Temi's Financial Academy Logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-none">
              <span className={`block text-[0.58rem] sm:text-[0.62rem] tracking-[0.25em] uppercase font-medium transition-colors ${
                scrolled ? 'text-brand/60' : 'text-white/70'
              }`}>
                Temi's
              </span>
              <span className={`block font-bold tracking-tight text-sm sm:text-[0.95rem] transition-colors ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Financial{' '}
                <span className={scrolled ? 'gold-text' : 'shimmer-white'}>Academy</span>
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`text-sm font-medium relative group transition-colors duration-300 ${
                  scrolled ? 'text-slate-600 hover:text-brand' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(212,160,23,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick('#register')}
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-gold text-slate-900 hover:bg-gold-light transition-all duration-300 shadow-gold-glow tracking-wide"
            >
              Register Now
            </motion.button>
          </nav>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col bg-white px-8 pt-24 pb-12 md:hidden overflow-y-auto"
          >
            {/* Mobile logo */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-brand/20">
                <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="block text-[0.6rem] tracking-[0.25em] text-brand/50 uppercase">Temi's</span>
                <span className="block font-bold text-slate-800">Financial <span className="gold-text">Academy</span></span>
              </div>
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="flex items-center justify-between text-xl font-medium text-slate-700 hover:text-brand py-4 border-b border-slate-100 transition-colors"
              >
                {link.label}
                <span className="text-gold text-sm">→</span>
              </motion.a>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={() => handleNavClick('#register')}
              className="mt-8 px-6 py-4 rounded-2xl text-base font-bold bg-brand text-white hover:bg-brand-light active:scale-95 transition-all duration-300 shadow-green-glow"
            >
              🌟 Register Now — It's Free to Start
            </motion.button>

            <p className="mt-4 text-center text-xs text-slate-400">
              Join 500+ students transforming their finances
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
