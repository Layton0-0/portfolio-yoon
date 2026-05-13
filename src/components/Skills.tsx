import { motion } from 'framer-motion'
import { techStack } from '../data/portfolio'

const tagColors: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
  teal: 'bg-teal-50 text-teal-700 border-teal-200',
  green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
}

const dotColors: Record<string, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  teal: 'bg-teal-500',
  green: 'bg-emerald-500',
  indigo: 'bg-indigo-500',
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-emerald-600 text-sm mb-3">
            $ grep -r &quot;expertise&quot; /var/log/career.log
          </p>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ./tech-stack --list
          </h2>
          <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }} />
          <p className="font-mono text-gray-500 text-base">
            &gt; Spring Boot 백엔드부터 DevOps, AI 보조 개발까지
          </p>
        </motion.div>

        {/* Stack grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStack.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${dotColors[stack.color]}`} />
                  <span className="font-semibold text-gray-900 text-sm">{stack.category}</span>
                </div>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${tagColors[stack.color]}`}
                >
                  {stack.tag}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs bg-gray-50 text-gray-700 border border-gray-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
