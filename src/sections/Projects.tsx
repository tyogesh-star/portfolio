import { ExternalLink, Rocket, Trophy } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const projects = [
  {
    name: 'VENTURE CONNECT',
    type: 'Java Full Stack Application',
    problem:
      'Entrepreneurs struggle to discover investors and investors struggle to find promising startup ideas.',
    solution:
      'Built a platform connecting startups and investors for networking, collaboration, and funding opportunities.',
    tech: ['Java', 'Spring Boot', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/tyogesh-star',
    icon: Rocket,
  },
  {
    name: 'LOCOTOUR',
    type: 'Python Full Stack Application',
    problem:
      'Manual sports tournament management causes scheduling conflicts and inaccurate record keeping.',
    solution:
      'Built a system to manage teams, matches, scores, and tournament standings efficiently.',
    tech: ['Python', 'Flask', 'FastAPI', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/tyogesh-star',
    icon: Trophy,
  },
];

export default function Projects() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section id="projects" className="py-20 bg-surface dark:bg-[#111827] border-t border-border dark:border-[#1F2937] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 right-16 opacity-[0.03] dark:opacity-[0.05]">
        <Rocket size={200} className="text-accent" />
      </div>
      <div className="absolute bottom-16 left-16 opacity-[0.03] dark:opacity-[0.05]">
        <Trophy size={160} className="text-accent" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-2xl font-bold text-text dark:text-gray-100 mb-8">Projects</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 rounded-lg border border-border dark:border-[#1F2937] bg-background dark:bg-[#0B0F19] hover:border-gray-300 dark:hover:border-[#374151] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-accent">
                    <project.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text dark:text-gray-100 mb-1">
                      {project.name}
                    </h3>
                    <span className="inline-block text-xs font-medium text-accent bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">
                      {project.type}
                    </span>
                  </div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover font-medium transition-colors duration-200 shrink-0"
                >
                  <ExternalLink size={14} />
                  View on GitHub
                </a>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs font-semibold text-text-secondary dark:text-gray-500 uppercase tracking-wide">
                    Problem
                  </span>
                  <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed mt-0.5">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-text-secondary dark:text-gray-500 uppercase tracking-wide">
                    Solution
                  </span>
                  <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed mt-0.5">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-text-secondary dark:text-gray-400 bg-white dark:bg-[#111827] border border-border dark:border-[#1F2937] px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
