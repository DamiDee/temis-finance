import { motion } from 'framer-motion'
import { TrendingUp, BookOpen, Shield, Award } from 'lucide-react'
import FadeUp from './FadeUp'

const pillars = [
  {
    icon: TrendingUp,
    title: 'Wealth Building',
    desc: 'Practical frameworks for growing and protecting long-term wealth.',
    color: 'bg-green-50 text-brand border-green-100',
    iconBg: 'bg-green-100',
  },
  {
    icon: BookOpen,
    title: 'Financial Literacy',
    desc: 'Decode markets, instruments, and economic principles with confidence.',
    color: 'bg-gold-100 text-gold-700 border-gold-200',
    iconBg: 'bg-gold-200',
  },
  {
    icon: Shield,
    title: 'Strategic Growth',
    desc: 'Investment strategies built for sustainable, compounding prosperity.',
    color: 'bg-green-50 text-brand border-green-100',
    iconBg: 'bg-green-100',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 bg-white overflow-hidden">
      {/* Top wave divider from hero */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand via-gold to-brand-light" />

      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-30 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #dcfce8 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full opacity-25 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #FEF9E7 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── RIGHT: Profile ── (shows first on mobile) */}
        <FadeUp delay={0.15} className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            {/* Gold ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 sm:-inset-5 rounded-3xl"
              style={{ border: '2px dashed rgba(212,160,23,0.3)' }}
            />

            {/* Image */}
            <div className="relative w-72 sm:w-80 lg:w-96 h-[380px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-card-hover ring-4 ring-brand/10">
              <img
                src="/images/profile.png"
                alt="Temi — Financial Educator & Strategist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />

              {/* Name label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
                <div className="glass-dark rounded-2xl px-5 py-3">
                  <p className="text-white font-bold text-base">Temi</p>
                  <p className="text-gold text-xs font-medium tracking-wider">Certified Financial Strategist</p>
                </div>
              </div>
            </div>

            {/* Badge 1 */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 sm:-left-10 top-16 bg-white rounded-2xl px-4 py-3 shadow-card border border-green-100"
            >
              <p className="text-2xl font-black text-brand">10+</p>
              <p className="text-slate-500 text-[0.65rem] tracking-widest uppercase font-medium">Years Exp.</p>
            </motion.div>

            {/* Badge 2 */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-6 sm:-right-10 bottom-20 bg-white rounded-2xl px-4 py-3 shadow-card border border-gold-200"
            >
              <p className="text-2xl font-black text-gold">500+</p>
              <p className="text-slate-500 text-[0.65rem] tracking-widest uppercase font-medium">Trained</p>
            </motion.div>

            {/* Award badge */}
            <div className="absolute -right-3 top-8 bg-gold rounded-xl p-2.5 shadow-gold-glow">
              <Award size={20} className="text-slate-900" />
            </div>
          </div>
        </FadeUp>

        {/* ── LEFT: Text ── */}
        <div className="order-2 lg:order-1">
          <FadeUp>
            <p className="text-xs tracking-[0.3em] text-brand uppercase mb-3 font-bold">About Us</p>
            <h2
              className="section-headline font-black tracking-tight leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              We Teach Money{' '}
              <span className="green-text">At The Highest Level.</span>
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-4">
              Temi's Financial Academy is a premier institution dedicated to transforming
              how Africans relate with money. We combine rigorous financial education
              with practical, real-world application — equipping you to make
              intelligent decisions about income, investments, and wealth.
            </p>
            <p className="text-slate-500 leading-relaxed font-light text-sm sm:text-base">
              Founded by Temi — an award-winning financial strategist with over a decade
              of experience in personal finance, capital markets, and business growth —
              the Academy has empowered hundreds of students to achieve genuine
              financial independence.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(26,122,60,0.25)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 px-7 py-3.5 rounded-2xl font-bold text-white bg-brand hover:bg-brand-light transition-all duration-300 shadow-green-glow text-sm sm:text-base"
            >
              Start Learning Today →
            </motion.button>
          </FadeUp>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1 + 0.2}>
                <div className={`rounded-2xl p-4 border transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${p.color}`}>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${p.iconBg}`}>
                    <p.icon size={18} className="text-brand" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-800 mb-1">{p.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
