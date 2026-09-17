import { motion } from 'framer-motion';
import { Trophy, Award, GraduationCap, ExternalLink, Calendar, ChevronRight } from 'lucide-react';
import { achievements } from '../data/achievements';
import { SECTION_IDS } from '../utils/constants';
import AnimatedSection from './AnimatedSection';

const iconMap = {
  Hackathon: Trophy,
  Coding: Award,
  Education: GraduationCap,
};

export default function Achievements() {
  return (
    <section id={SECTION_IDS.achievements} className="section">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">
            My <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Milestones and accomplishments on my journey
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.category] || Trophy;

            return (
              <AnimatedSection key={item.id} delay={i * 0.15}>
                <div className="card-hover-lift flex flex-col h-full overflow-hidden group">
                  <div className="relative h-48 rounded-xl overflow-hidden bg-bg-secondary mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-bg-card to-secondary-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary-500/20 group-hover:text-primary-500/30 transition-colors" />
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="badge-primary text-xs">{item.category}</span>
                    </div>

                    <div className="absolute top-3 right-3 flex items-center gap-1 badge text-xs">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col p-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-text-primary group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-primary-400 font-medium">{item.role}</p>
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.technologies.map(tech => (
                          <span key={tech} className="badge text-xs">{tech}</span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto">
                      <ul className="space-y-1.5">
                        {item.highlights.map((hl, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-text-muted">
                            <ChevronRight className="w-3 h-3 text-primary-400 mt-0.5 flex-shrink-0" />
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}