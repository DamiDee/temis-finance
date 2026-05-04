import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react'
import FadeUp from './FadeUp'

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-50 hover:text-pink-600' },
  { icon: Twitter,   href: '#', label: 'Twitter',   color: 'hover:bg-sky-50 hover:text-sky-500'   },
  { icon: Youtube,   href: '#', label: 'YouTube',   color: 'hover:bg-red-50 hover:text-red-500'   },
  { icon: Facebook,  href: '#', label: 'Facebook',  color: 'hover:bg-blue-50 hover:text-blue-600' },
]

const contactItems = [
  { icon: Mail,    label: 'Email',    value: 'hello@temisfinancialacademy.com', href: 'mailto:hello@temisfinancialacademy.com' },
  { icon: Phone,   label: 'Phone',   value: '+234 800 000 0000',               href: 'tel:+2348000000000' },
  { icon: MapPin,  label: 'Location',value: 'Lagos, Nigeria',                  href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-slate-900 pt-20 sm:pt-24 pb-10 px-5 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      {/* Background blobs */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #D4A017 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #23a353 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* ── Brand ── */}
          <FadeUp className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-gold/30">
                <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="leading-none">
                <span className="block text-[0.6rem] tracking-[0.25em] text-white/35 uppercase">Temi's</span>
                <span className="block font-bold text-white">
                  Financial <span className="gold-text">Academy</span>
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs mb-7">
              Empowering Africans to build, grow, and protect wealth through world-class financial education.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 bg-white/5 border border-white/8 transition-all duration-300 ${s.color}`}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </FadeUp>

          {/* ── Quick Links ── */}
          <FadeUp delay={0.1}>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: 'About',                href: '#about'    },
                { label: 'Programs',             href: '#programs' },
                { label: 'Register Now',         href: '#register' },
                { label: 'The Money Reset Program', href: '#register' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-sm text-slate-400 hover:text-white transition-colors duration-300 font-light group flex items-center gap-2"
                >
                  <span className="w-4 h-0.5 bg-brand/40 group-hover:w-6 group-hover:bg-gold transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </nav>
          </FadeUp>

          {/* ── Contact ── */}
          <FadeUp delay={0.2}>
            <h4 className="text-xs tracking-[0.2em] text-gold uppercase font-bold mb-6">Contact Us</h4>
            <div className="space-y-5">
              {contactItems.map((item) => (
                <a key={item.label} href={item.href} className="flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-brand/20 border border-brand/30 group-hover:bg-brand/30 transition-colors duration-300">
                    <item.icon size={15} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-[0.65rem] tracking-widest text-slate-500 uppercase mb-0.5 font-medium">{item.label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300 font-light">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-light">
            © {year} Temi's Financial Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
