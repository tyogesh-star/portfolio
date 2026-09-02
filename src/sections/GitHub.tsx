import { Github, Star, GitFork, GitCommit, GitPullRequest } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const pinnedRepos = [
  {
    name: 'VENTURE CONNECT',
    description: 'Platform connecting startups and investors for networking and funding.',
    language: 'Java',
    stars: 3,
    forks: 1,
  },
  {
    name: 'LOCOTOUR',
    description: 'Sports tournament management system with scheduling and standings.',
    language: 'Python',
    stars: 2,
    forks: 0,
  },
];

const languages = [
  { name: 'Java', percent: 35, color: '#b07219' },
  { name: 'Python', percent: 25, color: '#3572A5' },
  { name: 'JavaScript', percent: 25, color: '#f1e05a' },
  { name: 'HTML/CSS', percent: 15, color: '#e34c26' },
];

export default function GitHub() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section id="github" className="py-20 bg-background dark:bg-[#0B0F19] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 opacity-[0.03] dark:opacity-[0.05]">
        <GitCommit size={180} className="text-accent" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-[0.03] dark:opacity-[0.05]">
        <GitPullRequest size={150} className="text-accent" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex items-center gap-3 mb-8">
          <Github size={24} className="text-text dark:text-gray-100" />
          <h2 className="text-2xl font-bold text-text dark:text-gray-100">GitHub</h2>
          <a
            href="https://github.com/tyogesh-star"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-accent hover:text-accent-hover font-medium transition-colors duration-200"
          >
            github.com/tyogesh-star
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold text-text-secondary dark:text-gray-500 uppercase tracking-wide">
              Pinned Repositories
            </h3>
            {pinnedRepos.map((repo) => (
              <div
                key={repo.name}
                className="p-4 rounded-lg border border-border dark:border-[#1F2937] bg-surface dark:bg-[#111827] hover:border-gray-300 dark:hover:border-[#374151] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-accent">
                    {repo.name}
                  </h4>
                  <span className="text-xs text-text-secondary dark:text-gray-500">Public</span>
                </div>
                <p className="text-sm text-text-secondary dark:text-gray-400 mb-3">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-secondary dark:text-gray-500">
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.language === 'Java' ? '#b07219' : '#3572A5' }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-secondary dark:text-gray-500 uppercase tracking-wide">
              Languages
            </h3>
            <div className="p-4 rounded-lg border border-border dark:border-[#1F2937] bg-surface dark:bg-[#111827]">
              <div className="flex h-2 rounded-full overflow-hidden mb-4">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percent}%`,
                      backgroundColor: lang.color,
                    }}
                  />
                ))}
              </div>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-text dark:text-gray-200">{lang.name}</span>
                    </span>
                    <span className="text-text-secondary dark:text-gray-500">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border dark:border-[#1F2937] bg-surface dark:bg-[#111827]">
              <h3 className="text-sm font-semibold text-text-secondary dark:text-gray-500 uppercase tracking-wide mb-3">
                Activity
              </h3>
              <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span>Active contributor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
