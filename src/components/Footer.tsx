import { Github, BookOpen, Mail } from 'lucide-react'
import { personal } from '../data/portfolio'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-mono text-white text-lg font-semibold mb-2">
              yoon<span className="text-blue-400">.dev</span>
            </p>
            <p className="text-sm leading-relaxed">
              Spring Boot 기반 엔터프라이즈 개발 4년차.<br />
              백엔드·풀스택 개발자.
            </p>
            <div className="flex gap-4 mt-4">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href={personal.blog} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Blog">
                <BookOpen size={18} />
              </a>
              <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/{personal.githubUser}
                </a>
              </li>
              <li>
                <a href={personal.blog} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {personal.blogDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>© 2025 최윤정. All rights reserved.</p>
          <p>백엔드 · 풀스택 웹 개발자</p>
        </div>
      </div>
    </footer>
  )
}
