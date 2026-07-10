import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="shrink-0 h-12 bg-surface dark:bg-[#111827] border-t border-border dark:border-[#1F2937]">
      <div className="h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-text dark:text-gray-100">YOGESH T</span>
          <span className="text-sm text-text-secondary dark:text-gray-400 hidden sm:inline">Full Stack Developer</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tyogesh-star"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary dark:text-gray-400 hover:text-text dark:hover:text-gray-200 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <span className="text-xs text-text-secondary dark:text-gray-500 hidden sm:inline">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
