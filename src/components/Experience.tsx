import { motion } from 'framer-motion'
import { experience, type Achievement } from '../data/portfolio'

const badgeStyle: Record<string, string> = {
  green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  default: 'bg-gray-100 text-gray-600 border-gray-200',
}

function AchievementCards({ items }: { items: Achievement[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
      {items.map((a) => (
        <div
          key={a.title}
          className="bg-slate-50 border border-gray-100 rounded-lg p-4 text-sm"
        >
          <p className="font-semibold text-gray-800 mb-2 text-xs">{a.title}</p>

          {/* before / after */}
          {a.before && a.after && (
            <div className="flex items-center gap-2 text-xs mb-1">
              <span className="text-gray-400 line-through">{a.before}</span>
              <span className="text-gray-400">→</span>
              <span className="text-emerald-600 font-semibold">{a.after}</span>
            </div>
          )}

          {/* metric 수치 3개 */}
          {a.metric1 && (
            <div className="flex flex-wrap gap-1 mb-1">
              {[a.metric1, a.metric2, a.metric3].filter(Boolean).map((m) => (
                <span key={m} className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">
                  {m}
                </span>
              ))}
            </div>
          )}

          <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
        </div>
      ))}
    </div>
  )
}

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
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }}
          />
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
              <span className="text-sm font-medium text-blue-600">{experience.period}</span>
            </div>
          </div>

          {/* Projects */}
          <div className="divide-y divide-gray-50">
            {experience.projects.map((proj, i) => {
              const colorKey = proj.badgeColor ?? 'default'
              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="px-8 py-7"
                >
                  {/* Title row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-gray-900 text-base">{proj.title}</h4>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${badgeStyle[colorKey]}`}
                      >
                        {proj.badge}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 font-mono shrink-0">{proj.period}</span>
                  </div>

                  {/* Role */}
                  <p className="text-xs text-gray-400 mb-2">{proj.role}</p>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{proj.description}</p>

                  {/* Highlight */}
                  {proj.highlight && (
                    <div className="flex items-start gap-2 mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <span className="text-blue-500 text-xs mt-0.5">✦</span>
                      <p className="text-blue-700 text-sm font-medium">{proj.highlight}</p>
                    </div>
                  )}

                  {/* Achievements (before/after cards) */}
                  {proj.achievements && proj.achievements.length > 0 && (
                    <AchievementCards items={proj.achievements} />
                  )}

                  {/* Bullets */}
                  {proj.bullets.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {proj.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-gray-600">
                          <span className="text-gray-300 shrink-0 mt-0.5">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Additional bullets */}
                  {proj.additionalBullets && proj.additionalBullets.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {proj.additionalBullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-gray-500">
                          <span className="text-gray-200 shrink-0 mt-0.5">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Badges */}
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
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
