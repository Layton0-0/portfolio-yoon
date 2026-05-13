import { motion } from 'framer-motion'
import { stats, specialties, impactStats } from '../data/portfolio'

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
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Backend Developer &amp; Full-Stack Engineer
          </h2>
          <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }} />
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Spring Boot 기반 엔터프라이즈 시스템부터 AI 보조 개발까지, 개발의 전 사이클을 주도합니다.
          </p>
        </motion.div>

        {/* Stats + Specialties */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* Left: stats */}
          <div className="flex flex-row lg:flex-col gap-4 lg:w-72 shrink-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-blue-600 mb-1">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: specialties */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* Proven Impact */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-50 border border-gray-100 rounded-2xl p-8"
        >
          <p className="text-center font-semibold text-gray-700 mb-6">Proven Impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-blue-600 mb-1 leading-tight">{s.value}</p>
                <p className="text-xs font-medium text-gray-700 mb-0.5">{s.label}</p>
                <p className="text-xs text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
