import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import { SECTION_IDS } from '../utils/constants';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id={SECTION_IDS.projects} className="section">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of the projects I've built
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'glass text-text-secondary hover:text-text-primary hover:border-primary-500/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}