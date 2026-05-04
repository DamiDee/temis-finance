import { motion } from 'framer-motion'
import { Clock, Users, CheckCircle2, Star, ArrowRight, Zap } from 'lucide-react'
import FadeUp from './FadeUp'

const programs = [
  {
    tag: 'Flagship ★',
    featured: true,
    title: 'The Money Reset Program',
    subtitle: '3-Month Intensive Training',
    description:
      'A comprehensive, structured programme designed to completely transform your financial identity — from mindset to mechanics. The most impactful thing you\'ll do for your money this year.',
    duration: '3 Months',
    audience: 'Employees, Entrepreneurs & Side-Hustlers',
    price: 'Limited Spots',
    learnings: [
      'Budgeting, Saving & Debt Elimination',
      'Investment Vehicles (Stocks, Bonds, Real Estate)',
      'Building Multiple Income Streams',
      'Tax Optimization & Business Finance',
      'Wealth Psychology & Behavioral Finance',
      'Personalized 12-Month Wealth Plan',
    ],
  },
  {
    tag: 'Beginner',
    featured: false,
    title: 'Financial Literacy Bootcamp',
    subtitle: '4-Week Intensive',
    description:
      'A rapid yet thorough deep-dive into the fundamentals of personal finance. Perfect for anyone starting their financial education journey.',
    duration: '4 Weeks',
    audience: 'Beginners & Young Professionals',
    price: 'Open Enrolment',
    learnings: [
      'Money Mindset & Financial Goals',
      'Smart Budgeting Techniques',
      'Emergency Funds & Savings Plans',
      'Introduction to Investing',
    ],
  },
  {
    tag: 'Advanced',
    featured: false,
    title: 'Investment Masterclass',
    subtitle: '6-Week Deep Dive',
    description:
      'For the investor who wants to go beyond basics — exploring capital markets, portfolio construction, and alternative assets with a certified expert.',
    duration: '6 Weeks',
    audience: 'Intermediate to Advanced Investors',
    price: 'Rolling Admission',
    learnings: [
      'Equities, ETFs & Fixed Income',
      'Risk Management & Asset Allocation',
      'Alternative Investments',
      'Building a Long-Term Portfolio',
    ],
  },
]

const scrollToSection = (id) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f0fdf5 0%, #ffffff 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-brand to-gold" />
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #bbf7d1 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp className="text-center mb-14 sm:mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.3em] text-brand uppercase mb-3 font-bold">Our Programs</p>
          <h2
            className="section-headline font-black tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Education That{' '}
            <span className="gold-text">Pays For Itself.</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-slate-500 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Each programme is meticulously crafted to deliver tangible, measurable
            financial transformation — not just theory.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {programs.map((program, i) => (
            <FadeUp key={program.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.12)' }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative flex flex-col h-full rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  program.featured
                    ? 'bg-brand text-white shadow-green-glow ring-2 ring-brand/50'
                    : 'bg-white border border-slate-100 shadow-card hover:border-green-200'
                }`}
              >
                {/* Featured glow top line */}
                {program.featured && (
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gold-gradient rounded-b-full" />
                )}

                {/* Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className={program.featured ? 'program-badge-featured' : 'program-badge'}>
                    {program.tag}
                  </span>
                  {program.featured && <Zap size={18} className="text-gold" />}
                </div>

                <h3 className={`text-lg sm:text-xl font-bold mb-1 ${program.featured ? 'text-white' : 'text-slate-800'}`}>
                  {program.title}
                </h3>
                <p className={`text-xs font-semibold mb-4 uppercase tracking-wider ${program.featured ? 'text-gold' : 'text-brand'}`}>
                  {program.subtitle}
                </p>
                <p className={`text-sm leading-relaxed mb-5 font-light ${program.featured ? 'text-white/75' : 'text-slate-500'}`}>
                  {program.description}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className={`flex items-center gap-1.5 text-xs ${program.featured ? 'text-white/60' : 'text-slate-400'}`}>
                    <Clock size={12} />
                    {program.duration}
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs ${program.featured ? 'text-white/60' : 'text-slate-400'}`}>
                    <Users size={12} />
                    {program.audience}
                  </div>
                </div>

                {/* Divider */}
                <div className={`border-t mb-5 ${program.featured ? 'border-white/15' : 'border-slate-100'}`} />

                {/* Learnings */}
                <div className="flex-1 mb-6">
                  <p className={`text-[0.68rem] tracking-[0.18em] uppercase mb-3 font-semibold ${program.featured ? 'text-white/40' : 'text-slate-400'}`}>
                    Key Learnings
                  </p>
                  <ul className="space-y-2">
                    {program.learnings.map((item) => (
                      <li key={item} className={`flex items-start gap-2 text-sm font-light ${program.featured ? 'text-white/70' : 'text-slate-600'}`}>
                        <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${program.featured ? 'text-gold' : 'text-brand'}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price tag */}
                <div className={`text-xs font-semibold mb-4 flex items-center gap-1.5 ${program.featured ? 'text-gold' : 'text-brand'}`}>
                  <Star size={12} className="fill-current" />
                  {program.price}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#register')}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                    program.featured
                      ? 'bg-gold text-slate-900 hover:bg-gold-light shadow-gold-glow'
                      : 'bg-brand text-white hover:bg-brand-light shadow-green-glow'
                  }`}
                >
                  Enrol Now
                  <ArrowRight size={14} />
                </motion.button>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
