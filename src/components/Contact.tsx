import { motion } from 'framer-motion'
import { Mail, Github, BookOpen, Send } from 'lucide-react'
import { personal, education, certifications } from '../data/portfolio'

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: personal.githubUser,
    href: personal.github,
  },
  {
    icon: BookOpen,
    label: 'Blog',
    value: personal.blogDisplay,
    href: personal.blog,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
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
            $ ping contact@yoon.dev --ttl=unlimited
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: 'linear-gradient(to right, #2563eb, #0d9488)' }} />
          <p className="text-gray-500 text-lg">협업이나 채용 문의는 언제든 환영합니다.</p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                <card.icon size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{card.label}</p>
                <p className="text-gray-500 text-xs mt-0.5">{card.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Education & Certs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-4">학력 · 교육</h3>
            <div className="divide-y divide-gray-50 border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
              {education.map((edu) => (
                <div key={edu.school} className="flex items-center justify-between px-5 py-4 gap-4">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{edu.school}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{edu.detail}</p>
                  </div>
                  <span className="text-xs text-gray-400 font-mono shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider mb-4">자격 · 어학</h3>
            <div className="divide-y divide-gray-50 border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-4 px-5 py-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm">{cert.type === 'cert' ? '🏅' : '🌐'}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{cert.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{cert.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-2">함께 만들어봐요</h3>
          <p className="text-blue-100 mb-6">새로운 프로젝트나 기회가 있다면 언제든 연락주세요.</p>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <Send size={16} />
            이메일 보내기
          </a>
        </motion.div>
      </div>
    </section>
  )
}
