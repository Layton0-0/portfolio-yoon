import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [openDecisions, setOpenDecisions] = useState<Record<string, boolean>>({})

  const toggle = (name: string) =>
    setOpenDecisions((prev) => ({ ...prev, [name]: !prev[name] }))

  return (
    <section id="projects" className="py-28 bg-slate-50">
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
            $ git log --oneline --all | head -10
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            &lt;&gt; Personal Projects
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }}
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow"
            >
              {/* Project header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3 className="text-lg font-bold text-gray-900">{proj.name}</h3>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="GitHub 저장소"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={`https://${proj.liveUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-teal-600 hover:underline"
                      >
                        {proj.liveUrl}
                      </a>
                    )}
                  </div>
                  {proj.subtitle && (
                    <p className="text-xs text-gray-500 mb-0.5">{proj.subtitle}</p>
                  )}
                  <p className="text-xs text-gray-400">{proj.type}</p>
                </div>
                <span className="font-mono text-xs text-gray-400 shrink-0">{proj.period}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-3">{proj.description}</p>

              {/* Vibe Coding note */}
              {proj.vibeCodingNote && (
                <div className="flex items-start gap-2 mb-3 p-3 bg-indigo-50 border border-indigo-100 rounded-lg">
                  <span className="text-indigo-500 text-xs mt-0.5">✦</span>
                  <p className="text-indigo-700 text-sm">{proj.vibeCodingNote}</p>
                </div>
              )}

              {/* Bullets */}
              {proj.bullets.length > 0 && (
                <ul className="space-y-1 mb-4">
                  {proj.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-gray-600">
                      <span className="text-gray-300 shrink-0 mt-0.5">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Decisions accordion */}
              {proj.techDecisions && proj.techDecisions.length > 0 && (
                <div className="mb-4">
                  <button
                    onClick={() => toggle(proj.name)}
                    className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors mb-2"
                  >
                    <motion.span
                      animate={{ rotate: openDecisions[proj.name] ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                    기술 선택 이유
                  </button>
                  <AnimatePresence initial={false}>
                    {openDecisions[proj.name] && (
                      <motion.div
                        key="decisions"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-2 pt-1">
                          {proj.techDecisions.map((td) => (
                            <div
                              key={td.decision}
                              className="bg-slate-50 border border-gray-100 rounded-lg px-4 py-3"
                            >
                              <p className="text-xs font-semibold text-gray-800 mb-0.5">{td.decision}</p>
                              <p className="text-xs text-gray-500">{td.reason}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {proj.badges.map((badge) => {
                  const isHighlight = badge === proj.highlightBadge
                  return (
                    <span
                      key={badge}
                      className={`px-2.5 py-1 text-xs rounded-full border font-medium ${
                        isHighlight
                          ? 'bg-blue-50 border-blue-200 text-blue-700'
                          : 'bg-gray-100 border-gray-200 text-gray-600'
                      }`}
                    >
                      {badge}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Layton0-0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={16} />
            View All Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
