import { Github, Linkedin, FileText, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="shrink-0 h-16 bg-surface dark:bg-[#111827] border-b border-border dark:border-[#1F2937] z-50">
      <div className="h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-text dark:text-gray-100 font-bold text-lg tracking-tight hover:text-accent dark:hover:text-accent transition-colors duration-200"
        >
          YOGESH T
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-accent bg-blue-50 dark:bg-blue-900/20'
                  : 'text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://www.linkedin.com/in/yogesh2314"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/tyogesh-star"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="/Yogesh_T_Resume.pdf"
            download="Yogesh_T_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white text-sm font-medium rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface dark:bg-[#111827] border-b border-border dark:border-[#1F2937]">
          <div className="px-6 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent bg-blue-50 dark:bg-blue-900/20'
                    : 'text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-border dark:border-[#1F2937] mt-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-text-secondary dark:text-gray-400"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                href="https://www.linkedin.com/in/yogesh2314"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/tyogesh-star"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="/Yogesh_T_Resume.pdf"
                download="Yogesh_T_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white text-sm font-medium rounded-md"
              >
                <FileText size={14} />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
