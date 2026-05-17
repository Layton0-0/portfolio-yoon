import { motion, animate, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { stats, specialties } from '../data/portfolio'

const isNumericValue = (v: string) => /^[\d,]+$/.test(v)

function StatCounter({ value, unit, label }: { value: string; unit: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const numeric = isNumericValue(value)
  const targetNum = numeric ? parseInt(value.replace(/,/g, ''), 10) : null
  const [displayed, setDisplayed] = useState(numeric ? '0' : value)

  useEffect(() => {
    if (!inView || !numeric || targetNum === null) return
    const hasComma = value.includes(',')
    const controls = animate(0, targetNum, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => {
        const n = Math.round(v)
        setDisplayed(hasComma ? n.toLocaleString('ko-KR') : String(n))
      },
      onComplete: () => setDisplayed(value),
    })
    return controls.stop
  }, [inView, numeric, targetNum, value])

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-end justify-center gap-0.5 mb-1">
        <span className="text-3xl font-bold text-blue-600 font-mono leading-none">
          {numeric ? displayed : value}
        </span>
        <span className="text-lg font-semibold text-blue-400 leading-snug">{unit}</span>
      </div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-12">
          <p className="font-mono text-emerald-600 text-sm mb-2">$ whoami --detail</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Backend Developer &amp; Full-Stack Engineer
          </h2>
          <div
            className="w-16 h-1 mx-auto mb-6 rounded-full"
            style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }}
          />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            엔터프라이즈 백엔드를 설계하고 운영합니다. AI 도구는 이미 일하는 방식의 일부입니다.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50 border border-gray-100 rounded-2xl px-8 py-8 mb-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <StatCounter value={s.value} unit={s.unit} label={s.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
            >
              <p className="font-semibold text-gray-900 text-sm mb-1">{s.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
