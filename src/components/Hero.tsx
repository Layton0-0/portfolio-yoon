import { motion } from 'framer-motion'
import { Github, BookOpen, Mail, ChevronDown } from 'lucide-react'
import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Decorative blobs */}
      <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] bg-blue-400 rounded-full opacity-[0.07] blur-3xl pointer-events-none" />
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-purple-400 rounded-full opacity-[0.07] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center pt-20 pb-16">
        {/* Terminal command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-md text-sm font-mono text-emerald-700 mb-10"
        >
          <span className="text-emerald-500">$</span>
          BUILD-ENTERPRISE-SYSTEM --stack=springboot --mode=fullstack
        </motion.div>

        {/* Prompt line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-gray-400 text-xl mb-3"
        >
          yoon@backend:~$
        </motion.p>

        {/* Big whoami */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-7xl md:text-8xl font-bold text-gray-900 mb-5 tracking-tight"
        >
          whoami
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-mono text-2xl text-gray-600 mb-8"
        >
          &gt; {personal.role}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed whitespace-pre-line"
        >
          {personal.subtitle}
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {personal.heroTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            기술스택 보기
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
          >
            연락하기 <ChevronDown size={16} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-5"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={personal.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Blog"
          >
            <BookOpen size={22} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-300"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
