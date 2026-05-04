/**
 * RegistrationForm — EmailJS Integration
 *
 * Setup:
 *   1. npm install @emailjs/browser (already installed)
 *   2. Create an account at https://www.emailjs.com
 *   3. Replace the three placeholders below with your actual IDs:
 *        SERVICE_ID  → Your EmailJS Service ID
 *        TEMPLATE_ID → Your EmailJS Template ID  
 *        PUBLIC_KEY  → Your EmailJS Public Key (Account > API Keys)
 *   4. Template variables: {{from_name}}, {{from_email}}, {{phone}}, {{program}}
 */

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react'
import FadeUp from './FadeUp'

const SERVICE_ID  = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

const programs = [
  'The Money Reset Program (3-Month Intensive)',
  'Financial Literacy Bootcamp (4 Weeks)',
  'Investment Masterclass (6 Weeks)',
]

function FloatingField({ label, children, hasValue }) {
  return (
    <div className={`floating-label-group ${hasValue ? 'has-value' : ''}`}>
      {children}
      <label>{label}</label>
      <span className="bar" />
    </div>
  )
}

export default function RegistrationForm() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ from_name: '', from_email: '', phone: '', program: '' })
  const [status, setStatus]   = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setFormData({ from_name: '', from_email: '', phone: '', program: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg('Something went wrong. Please try again or reach out directly.')
      setStatus('error')
    }
  }

  return (
    <section id="register" className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d4d24 0%, #1a7a3c 40%, #125c2d 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-15 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #F0C040 0%, transparent 70%)' }} />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-10 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #23a353 0%, transparent 70%)' }} />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <FadeUp className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 glass-dark text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-5 tracking-wide">
            <Sparkles size={13} className="text-gold" />
            Limited Spots Available
          </span>
          <h2
            className="section-headline font-black tracking-tight text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Start Your{' '}
            <span className="shimmer-white">Journey.</span>
          </h2>
          <p className="text-white/60 font-light text-base sm:text-lg leading-relaxed">
            Complete the form below — our team will reach out within 24 hours.
          </p>
        </FadeUp>

        {/* Form Card */}
        <FadeUp delay={0.12}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-hero relative overflow-hidden">
            {/* Top gold accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 sm:py-14"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 mb-6"
                  >
                    <CheckCircle2 size={38} className="text-brand" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3">Application Received! 🎉</h3>
                  <p className="text-slate-500 font-light leading-relaxed max-w-sm mx-auto">
                    Thank you for applying. Our team will review your details
                    and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm text-brand hover:text-brand-light underline underline-offset-4 transition-colors font-medium"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 sm:space-y-10"
                >
                  <FloatingField label="Full Name" hasValue={!!formData.from_name}>
                    <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required autoComplete="name" />
                  </FloatingField>

                  <FloatingField label="Email Address" hasValue={!!formData.from_email}>
                    <input type="email" name="from_email" value={formData.from_email} onChange={handleChange} required autoComplete="email" />
                  </FloatingField>

                  <FloatingField label="Phone Number" hasValue={!!formData.phone}>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required autoComplete="tel" />
                  </FloatingField>

                  <FloatingField label="Program of Interest" hasValue={!!formData.program}>
                    <select name="program" value={formData.program} onChange={handleChange} required>
                      <option value="" disabled />
                      {programs.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </FloatingField>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200"
                      >
                        <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                        <p className="text-sm text-red-600">{errorMsg}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02, boxShadow: '0 0 40px rgba(26,122,60,0.35)' } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    className="w-full flex items-center justify-center gap-3 py-4 sm:py-4.5 rounded-2xl font-bold text-base bg-brand text-white hover:bg-brand-light transition-all duration-300 shadow-green-glow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send size={16} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-slate-400 text-xs leading-relaxed">
                    🔒 No spam. Your details are 100% safe. We'll only contact you about your application.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>

        {/* Trust signals */}
        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
            {[
              '✅ 500+ Graduates',
              '🌟 4.9/5 Rating',
              '📞 24hr Response',
            ].map((t) => (
              <span key={t} className="glass-dark text-white/70 text-xs font-medium px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
