import { useState } from 'react';
import { GraduationCap, Trophy, Code, Heart, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import { SECTION_IDS } from '../utils/constants';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const [heroImage] = useState(() => {
    return localStorage.getItem('portfolio-hero-image') || null;
  });

  const highlights = [
    { icon: GraduationCap, label: 'Education', value: `B.Tech (CS&IT) — ${profile.education.expectedGraduation}`, sub: profile.education.institution },
    { icon: Trophy, label: 'Achievement', value: profile.achievements[0]?.description || '', sub: profile.achievements[0]?.title || '' },
    { icon: Code, label: 'Coding', value: profile.achievements[1]?.description || '', sub: 'Problem Solver' },
    { icon: Heart, label: 'Interests', value: profile.interests.join(' | '), sub: null },
  ];

  return (
    <section id={SECTION_IDS.about} className="section">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me better
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <AnimatedSection className="lg:col-span-2" delay={0.1} direction="left">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-primary-500/30 glass aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-bg-card to-secondary-500/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  {heroImage ? (
                    <img src={heroImage} alt="Vikram Patel" className="w-28 h-28 rounded-full object-cover border-2 border-primary-500/30 mb-6 shadow-glow" />
                  ) : (
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 shadow-glow">
                      <span className="text-4xl font-bold text-white">VP</span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-text-primary mb-1">{profile.name}</h3>
                  <span className="text-primary-400 text-sm font-medium">CS&IT Student</span>
                  <span className="text-text-muted text-xs mt-1">B.Tech (2027)</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-3" delay={0.2} direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Hi, I'm <span className="text-gradient">{profile.name}</span>
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I am a Computer Science & IT student with a strong interest in building impactful technology solutions. 
                  I enjoy working on real-world problems, learning new skills and growing as a developer. My focus areas include 
                  software development, AI/ML, backend systems, and data structures & algorithms. I love turning ideas into 
                  functional, well-crafted software.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="card-hover-lift flex items-start gap-4 p-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-0.5">{label}</p>
                      <p className="text-sm font-semibold text-text-primary">{value}</p>
                      {sub && <p className="text-xs text-text-muted mt-0.5">{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById(SECTION_IDS.skills)?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-sm"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}