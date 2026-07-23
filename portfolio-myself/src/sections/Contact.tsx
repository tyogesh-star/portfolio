import { Mail, Github, Linkedin, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tyogesh2314x@gmail.com',
    href: 'mailto:tyogesh2314x@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/tyogesh-star',
    href: 'https://github.com/tyogesh-star',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yogesh2314',
    href: 'https://www.linkedin.com/in/yogesh2314',
  },
];

export default function Contact() {
  const { ref, isVisible } = useFadeIn(0.1);

  return (
    <section id="contact" className="py-20 bg-background dark:bg-[#0B0F19] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-16 left-16 opacity-[0.03] dark:opacity-[0.05]">
        <MessageSquare size={180} className="text-accent" />
      </div>
      <div className="absolute bottom-16 right-16 opacity-[0.03] dark:opacity-[0.05]">
        <MapPin size={150} className="text-accent" />
      </div>

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h2 className="text-2xl font-bold text-text dark:text-gray-100 mb-8">Contact</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group p-5 rounded-lg border border-border dark:border-[#1F2937] bg-surface dark:bg-[#111827] hover:border-gray-300 dark:hover:border-[#374151] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/20 text-accent">
                  <contact.icon size={18} />
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-text-secondary dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <span className="text-xs font-semibold text-text-secondary dark:text-gray-500 uppercase tracking-wide">
                {contact.label}
              </span>
              <p className="text-sm font-medium text-text dark:text-gray-200 mt-1">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
