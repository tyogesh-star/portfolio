import { Mail, FileText, FolderOpen } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Hero() {
  const { ref, isVisible } = useFadeIn(0.15);

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-112px)] flex items-center bg-background dark:bg-[#0B0F19] relative overflow-hidden"
    >
      {/* Subtle 3D grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top',
          }}
        />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 py-16 w-full relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-text dark:text-gray-100 tracking-tight">
                YOGESH T
              </h1>
              <div className="space-y-1">
                <p className="text-lg text-text-secondary dark:text-gray-400 font-medium">
                  Java Full Stack Developer
                </p>
                <p className="text-lg text-text-secondary dark:text-gray-400 font-medium">
                  Python Full Stack Developer
                </p>
                <p className="text-lg text-text-secondary dark:text-gray-400 font-medium">
                  MERN Stack Developer
                </p>
              </div>
              <p className="text-base text-text-secondary dark:text-gray-400 leading-relaxed max-w-md">
                Building scalable applications and solving real-world problems
                through software engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-medium rounded-md hover:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5"
              >
                <FolderOpen size={16} />
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1F2937] text-text dark:text-gray-100 font-medium rounded-md border border-border dark:border-[#374151] hover:bg-gray-50 dark:hover:bg-[#374151] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-[#1F2937] text-text dark:text-gray-100 font-medium rounded-md border border-border dark:border-[#374151] hover:bg-gray-50 dark:hover:bg-[#374151] transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText size={16} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* 3D depth ring effect */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface dark:border-[#1F2937] shadow-2xl shadow-accent/10">
                <img
                  src="/images/WhatsApp_Image_2026-06-23_at_2.52.32_PM.jpeg"
                  alt="YOGESH T"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: '50% 15%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
