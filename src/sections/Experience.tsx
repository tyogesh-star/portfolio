import { Code, Layout, Server, Layers, Briefcase, GraduationCap } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const milestones = [
  {
    icon: Code,
    title: 'Learning Programming',
    description:
      'Started with core programming concepts, data structures, and algorithms. Built a strong foundation in problem-solving and logical thinking.',
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description:
      'Learned HTML, CSS, and JavaScript. Developed responsive interfaces and interactive web applications using React and modern tooling.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Expanded into server-side development with Java, Spring Boot, Python, and Node.js. Built REST APIs and managed databases.',
  },
  {
    icon: Layers,
    title: 'Full Stack Projects',
    description:
      'Delivered end-to-end applications combining frontend and backend systems. Applied software architecture principles and deployment practices.',
  },
  {
    icon: Briefcase,
    title: 'Career Preparation',
    description:
      'Sharpening skills through continuous learning, building portfolio projects, and preparing for professional software engineering roles.',
  },
];

export default function Experience() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section id="experience" className="py-20 bg-surface dark:bg-[#111827] border-t border-border dark:border-[#1F2937] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 opacity-[0.03] dark:opacity-[0.05]">
        <GraduationCap size={180} className="text-accent" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-[0.03] dark:opacity-[0.05]">
        <Briefcase size={150} className="text-accent" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-2xl font-bold text-text dark:text-gray-100 mb-8">Experience</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border dark:bg-[#1F2937] md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`hidden md:block md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
                  }`}
                >
                  <h3 className="text-base font-semibold text-text dark:text-gray-100 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center shrink-0 z-10 shadow-lg shadow-accent/30">
                  <milestone.icon size={14} />
                </div>

                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-10">
                  <div className="md:hidden">
                    <h3 className="text-base font-semibold text-text dark:text-gray-100 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-text-secondary dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
