import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'

export default function Projects() {
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
            &lt;&gt; 개인 프로젝트
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }} />
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
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">{proj.name}</h3>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        aria-label="GitHub 저장소"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-400">{proj.type}</p>
                </div>
                <span className="font-mono text-xs text-gray-400 shrink-0">{proj.period}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">{proj.description}</p>

              {proj.bullets.length > 0 && (
                <ul className="space-y-1.5 mb-4">
                  {proj.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                      <span className="text-gray-300 shrink-0 mt-0.5">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

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
