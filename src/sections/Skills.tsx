import {
  Code2,
  Palette,
  Braces,
  Atom,
  Zap,
  Box,
  Wind,
  Coffee,
  Leaf,
  Server,
  FlaskConical,
  Database,
  CircleDot,
  GitBranch,
  Github,
  Monitor,
  PenTool,
  Smartphone,
  Cpu,
  Globe,
  Terminal,
} from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const categories = [
  {
    name: 'Frontend',
    icon: Globe,
    skills: [
      { name: 'HTML', icon: Code2 },
      { name: 'CSS', icon: Palette },
      { name: 'JavaScript', icon: Braces },
      { name: 'React', icon: Atom },
      { name: 'Vite', icon: Zap },
      { name: 'Bootstrap', icon: Box },
      { name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Java', icon: Coffee },
      { name: 'Spring Boot', icon: Leaf },
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Zap },
      { name: 'Python', icon: Code2 },
      { name: 'Flask', icon: FlaskConical },
      { name: 'FastAPI', icon: Zap },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'MongoDB', icon: CircleDot },
    ],
  },
  {
    name: 'Tools',
    icon: Terminal,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'VS Code', icon: Monitor },
      { name: 'Figma', icon: PenTool },
      { name: 'FlutterFlow', icon: Smartphone },
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section id="skills" className="py-20 bg-background dark:bg-[#0B0F19] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 opacity-[0.03] dark:opacity-[0.05]">
        <Cpu size={180} className="text-accent" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.03] dark:opacity-[0.05]">
        <Terminal size={150} className="text-accent" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-2xl font-bold text-text dark:text-gray-100 mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="p-5 rounded-lg border border-border dark:border-[#1F2937] bg-surface dark:bg-[#111827] hover:border-gray-300 dark:hover:border-[#374151] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center gap-2 mb-4">
                <category.icon size={18} className="text-accent" />
                <h3 className="text-sm font-semibold text-text-secondary dark:text-gray-400 uppercase tracking-wide">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background dark:bg-[#0B0F19] rounded-md border border-border dark:border-[#1F2937] text-sm text-text dark:text-gray-200 hover:border-gray-300 dark:hover:border-[#374151] transition-colors duration-200"
                  >
                    <skill.icon size={14} className="text-text-secondary dark:text-gray-500" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
