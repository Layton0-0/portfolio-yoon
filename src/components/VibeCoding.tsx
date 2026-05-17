import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { vibeCoding } from '../data/portfolio'

/** 줄바꿈 시 단어·제품명이 끊기지 않도록 고정 구문을 nowrap으로 감쌈 */
const NO_BREAK_PHRASES = ['Cursor와 Claude Code', 'Claude Code', 'Harness 기법'] as const

function formatIntro(text: string): ReactNode[] {
  let segments: ReactNode[] = [text]

  for (const phrase of NO_BREAK_PHRASES) {
    segments = segments.flatMap((segment, segIdx) => {
      if (typeof segment !== 'string') return [segment]

      const parts = segment.split(phrase)
      if (parts.length === 1) return [segment]

      return parts.flatMap((part, i) =>
        i < parts.length - 1
          ? [
              part,
              <span key={`${phrase}-${segIdx}-${i}`} className="whitespace-nowrap">
                {phrase}
              </span>,
            ]
          : [part],
      )
    })
  }

  return segments
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function VibeCoding() {
  return (
    <section id="vibecoding" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-emerald-400 text-sm mb-2">$ ./vibe-coding --method=harness</p>
          <h2 className="text-3xl font-bold text-white mb-4">AI와 협업하는 개발 방식</h2>
          <p className="text-slate-400 max-w-2xl text-pretty leading-relaxed">
            {formatIntro(vibeCoding.intro)}
          </p>
        </motion.div>

        {/* 3단계 플로우 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {vibeCoding.steps.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative bg-slate-800 rounded-xl p-6 border border-slate-700"
            >
              {/* 화살표 연결선 */}
              {i < vibeCoding.steps.length - 1 && (
                <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xl z-10">
                  →
                </span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
                <h3 className="font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 증거 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">실무 적용 현황</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vibeCoding.evidence.map((ev, i) => (
              <motion.div
                key={`${ev.label}-${ev.value}`}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-slate-800/60 border border-slate-700 rounded-xl p-5"
              >
                <p className="text-xs text-slate-500 mb-1">{ev.label}</p>
                <p className="font-semibold text-white mb-0.5">{ev.value}</p>
                <p className="text-emerald-400 text-sm font-mono">{ev.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 툴 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">사용 도구</p>
          <div className="flex flex-col sm:flex-row gap-4">
            {vibeCoding.tools.map((tool) => (
              <div
                key={tool.name}
                className="flex-1 flex items-center gap-4 bg-slate-800/60 border border-slate-700 rounded-xl px-5 py-4"
              >
                <span className="font-mono font-bold text-emerald-400 text-lg">{tool.name}</span>
                <span className="text-slate-400 text-sm">{tool.role}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
