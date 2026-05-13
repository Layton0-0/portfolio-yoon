import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-emerald-600 text-sm mb-3">
            $ cat /var/log/career.log | grep experience
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 mb-4">./experience</h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }} />
        </motion.div>

        {/* Company card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
        >
          {/* Company header */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-8 py-6 border-b border-gray-100">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
                <p className="text-gray-600 text-sm mt-1">{experience.role}</p>
                <p className="text-gray-400 text-xs mt-0.5">{experience.client}</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-blue-600">{experience.period}</span>
                <p className="text-xs text-gray-400 mt-0.5">{experience.duration}</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="divide-y divide-gray-50">
            {experience.projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-8 py-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-gray-900 text-base">{proj.title}</h4>
                  <span className="text-xs text-gray-400 font-mono shrink-0">{proj.period}</span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-3">{proj.description}</p>

                {proj.highlight && (
                  <div className="flex items-start gap-2 mb-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <span className="text-blue-500 text-xs mt-0.5">✦</span>
                    <p className="text-blue-700 text-sm font-medium leading-relaxed">{proj.highlight}</p>
                  </div>
                )}

                {proj.bullets.length > 0 && (
                  <ul className="space-y-1.5 mb-4">
                    {proj.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="text-gray-300 shrink-0 mt-0.5">·</span>
                        <span dangerouslySetInnerHTML={{ __html: b.replace(/(2주 → 1초|100%|월 2,000건 → 0건|8개월 → 2개월)/g, '<strong class="text-gray-900">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {proj.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 border border-gray-200 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
