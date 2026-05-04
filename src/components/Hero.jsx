import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, TrendingUp, DollarSign } from 'lucide-react'

/* ── Slide Data ─────────────────────────────────────────── */
const slides = [
  {
    id: 0,
    eyebrow: '🌟 Welcome to Your Financial Future',
    headline: 'You Deserve to\nLive Wealthy.',
    body: 'Money isn\'t just for the few — it\'s for YOU. Temi\'s Financial Academy gives you the tools, the mindset, and the community to build real, lasting wealth. Your transformation starts today.',
    cta: 'Start Your Journey',
    ctaSecondary: 'See Programs',
    accent: 'from-emerald-700 via-brand to-emerald-800',
    tag: { icon: Star, text: '500+ Success Stories' },
  },
  {
    id: 1,
    eyebrow: '💰 The Money Reset Program',
    headline: 'Reset Your\nRelationship\nWith Money.',
    body: 'In just 3 months, completely transform how you earn, save, invest, and grow wealth. This isn\'t a class — it\'s a life upgrade. Join the flagship program that\'s changing lives.',
    cta: 'Join the Reset Program',
    ctaSecondary: 'Learn More',
    accent: 'from-brand-dark via-brand to-green-700',
    tag: { icon: TrendingUp, text: '3-Month Intensive' },
  },
  {
    id: 2,
    eyebrow: '📈 Build Generational Wealth',
    headline: 'Grow Your\nMoney While\nYou Sleep.',
    body: 'Learn proven investment strategies — stocks, real estate, business finance — taught by a certified financial strategist with 10+ years of real-world results. Your money should work harder than you.',
    cta: 'Enrol Now',
    ctaSecondary: 'View Programs',
    accent: 'from-green-800 via-brand to-brand-light',
    tag: { icon: DollarSign, text: 'Expert-Led Training' },
  },
]

const scrollToSection = (id) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* ── Slide variants ─────────────────────────────────────── */
const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.97 }),
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [dir,     setDir]     = useState(1)
  const [paused,  setPaused]  = useState(false)

  const goTo = useCallback((index) => {
    setDir(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    setDir(1)
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDir(-1)
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  /* Auto-advance every 5.5s */
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next, paused])

  const slide = slides[current]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Deep green gradient background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0a3d1f 0%, #1a7a3c 40%, #0f5c2e 70%, #0a3d1f 100%)' }}
      />

      {/* ── Decorative circles ── */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #F0C040 0%, transparent 70%)' }} />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #23a353 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #D4A017 0%, transparent 60%)' }} />

      {/* ── Gold top accent bar ── */}
      <div className="relative z-10 h-1 w-full bg-gold-gradient" />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-20 sm:py-24 lg:py-0 lg:min-h-[calc(100vh-4px)] lg:flex lg:items-center">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

            {/* ── LEFT: Slide text content ── */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={slide.id}
                  custom={dir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="inline-flex items-center gap-2 mb-5 sm:mb-6"
                  >
                    <span className="glass-dark text-white/90 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full tracking-wide">
                      {slide.eyebrow}
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    className="hero-headline font-black leading-[1.05] tracking-tight mb-5 sm:mb-6 whitespace-pre-line"
                    style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
                  >
                    <span className="text-white">{slide.headline.split('\n')[0]}</span>
                    {slide.headline.split('\n').slice(1).map((line, i) => (
                      <span key={i}>
                        <br />
                        <span className="shimmer-white">{line}</span>
                      </span>
                    ))}
                  </motion.h1>

                  {/* Body */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/75 text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10 max-w-xl"
                  >
                    {slide.body}
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8"
                  >
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(240,192,64,0.6)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToSection('#register')}
                      className="px-7 py-4 rounded-2xl font-bold text-base bg-gold text-slate-900 hover:bg-gold-light transition-all duration-300 shadow-gold-glow text-center"
                    >
                      ✨ {slide.cta}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => scrollToSection('#programs')}
                      className="px-7 py-4 rounded-2xl font-semibold text-base text-white border-2 border-white/25 hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-center"
                    >
                      {slide.ctaSecondary}
                    </motion.button>
                  </motion.div>

                  {/* Tag pill */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gold/20 flex items-center justify-center">
                      <slide.tag.icon size={13} className="text-gold" />
                    </div>
                    <span className="text-white/55 text-sm">{slide.tag.text}</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* ── Dots & Arrows ── */}
              <div className="flex items-center gap-4 mt-8 sm:mt-10">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95 flex-shrink-0"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`slide-dot ${i === current ? 'active' : ''}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95 flex-shrink-0"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>

                <span className="text-white/30 text-xs ml-1 hidden sm:block">
                  {current + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* ── RIGHT: Profile image ── */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer pulse ring */}
                <div
                  className="absolute inset-0 rounded-full opacity-40 pulse-ring"
                  style={{ background: 'rgba(212,160,23,0.3)' }}
                />
                {/* Gold accent ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 sm:-inset-4 rounded-full"
                  style={{ border: '2px dashed rgba(212,160,23,0.35)' }}
                />
                {/* Green ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-6 sm:-inset-8 rounded-full"
                  style={{ border: '1px dashed rgba(255,255,255,0.12)' }}
                />

                {/* Profile Image */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden ring-4 ring-gold/50 shadow-hero">
                  <img
                    src="/images/profile.png"
                    alt="Temi — Financial Educator & Strategist"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle gradient at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent" />
                </div>

                {/* Floating badge — top left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-4 sm:-left-8 top-8 sm:top-12 glass-dark rounded-2xl px-4 py-3 shadow-xl"
                >
                  <p className="text-gold font-black text-xl sm:text-2xl">10+</p>
                  <p className="text-white/60 text-[0.65rem] tracking-widest uppercase">Years Exp.</p>
                </motion.div>

                {/* Floating badge — bottom right */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-4 sm:-right-8 bottom-8 sm:bottom-12 glass-dark rounded-2xl px-4 py-3 shadow-xl"
                >
                  <p className="text-gold font-black text-xl sm:text-2xl">500+</p>
                  <p className="text-white/60 text-[0.65rem] tracking-widest uppercase">Graduates</p>
                </motion.div>

                {/* ⭐ Rating badge */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute -right-2 sm:-right-4 top-4 sm:top-6 bg-gold rounded-xl px-3 py-2 shadow-gold-glow"
                >
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-slate-900 fill-slate-900" />
                    <span className="text-slate-900 font-bold text-sm">4.9</span>
                  </div>
                  <p className="text-slate-800 text-[0.6rem] font-semibold">Top Rated</p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Stats bar at bottom ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-5">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6">
            {[
              { value: '500+',  label: 'Students Trained' },
              { value: '95%',   label: 'Success Rate'     },
              { value: '3',     label: 'Flagship Programs' },
              { value: '10+',   label: 'Years of Expertise' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-gold font-black text-xl sm:text-2xl">{stat.value}</span>
                <span className="text-white/45 text-xs sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
