import { Code2, Server, Puzzle, Layers, BookOpen } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const focuses = [
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Designing and implementing robust software solutions with clean architecture and maintainable code.',
  },
  {
    icon: Server,
    title: 'Backend Engineering',
    description:
      'Building reliable server-side systems, APIs, and data pipelines that power scalable applications.',
  },
  {
    icon: Puzzle,
    title: 'Problem Solving',
    description:
      'Analyzing complex requirements and delivering efficient solutions through systematic thinking.',
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description:
      'End-to-end application development from database design to responsive user interfaces.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Staying current with modern technologies and best practices in software engineering.',
  },
];

export default function About() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section id="about" className="py-20 bg-surface dark:bg-[#111827] border-t border-border dark:border-[#1F2937] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 opacity-[0.04] dark:opacity-[0.06]">
        <Code2 size={200} className="text-accent" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-[0.03] dark:opacity-[0.05]">
        <Server size={160} className="text-accent" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-text dark:text-gray-100 mb-3">About</h2>
          <p className="text-text-secondary dark:text-gray-400 leading-relaxed max-w-2xl">
            Software engineer with hands-on experience in full stack development
            across Java, Python, and JavaScript ecosystems. Focused on writing
            clean, testable code and building systems that solve real problems.
            Comfortable working across the entire development lifecycle from
            requirements to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {focuses.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-lg border border-border dark:border-[#1F2937] bg-background dark:bg-[#0B0F19] hover:border-gray-300 dark:hover:border-[#374151] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/20 text-accent shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text dark:text-gray-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
