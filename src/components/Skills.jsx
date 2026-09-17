import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Globe, Wrench, Brain } from 'lucide-react';
import { skills, skillCategories } from '../data/skills';
import { SECTION_IDS } from '../utils/constants';
import AnimatedSection from './AnimatedSection';

const categoryIcons = {
  Languages: Code2,
  Frameworks: Globe,
  Databases: Database,
  Tools: Wrench,
  'Core Concepts': Brain,
};

const skillColorMap = {
  'C++': 'from-blue-500/20 to-blue-600/10',
  'Python': 'from-yellow-500/20 to-green-500/10',
  'SQL': 'from-orange-500/20 to-red-500/10',
  'FastAPI': 'from-green-500/20 to-emerald-500/10',
  'React': 'from-cyan-500/20 to-blue-500/10',
  'NumPy': 'from-blue-400/20 to-indigo-500/10',
  'Pandas': 'from-purple-500/20 to-pink-500/10',
  'Matplotlib': 'from-blue-500/20 to-purple-500/10',
  'MySQL': 'from-blue-600/20 to-orange-500/10',
  'Git': 'from-red-500/20 to-orange-500/10',
  'GitHub': 'from-gray-400/20 to-gray-600/10',
  'VS Code': 'from-blue-500/20 to-cyan-500/10',
  'OpenCV': 'from-green-500/20 to-blue-500/10',
  'Excel': 'from-green-600/20 to-green-400/10',
  'OOP': 'from-violet-500/20 to-purple-500/10',
  'DSA': 'from-amber-500/20 to-orange-500/10',
  'DBMS': 'from-sky-500/20 to-blue-500/10',
  'Basic OS Concepts': 'from-gray-500/20 to-slate-500/10',
};

const skillInitials = {
  'C++': 'C++',
  'Python': 'Py',
  'SQL': 'SQL',
  'FastAPI': 'FA',
  'React': 'Re',
  'NumPy': 'NP',
  'Pandas': 'PD',
  'Matplotlib': 'MPL',
  'MySQL': 'My',
  'Git': 'Gi',
  'GitHub': 'GH',
  'VS Code': 'VS',
  'OpenCV': 'OC',
  'Excel': 'XL',
  'OOP': 'OO',
  'DSA': 'DS',
  'DBMS': 'DB',
  'Basic OS Concepts': 'OS',
};

function SkillCard({ skill }) {
  const gradientClass = skillColorMap[skill.name] || 'from-primary-500/20 to-secondary-500/10';
  const initials = skillInitials[skill.name] || skill.name.slice(0, 2);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="card-hover-lift flex flex-col items-center justify-center p-6 text-center group"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass} border border-border flex items-center justify-center mb-3 group-hover:border-primary-500/50 group-hover:shadow-glow transition-all duration-300`}>
        <span className="text-sm font-bold text-text-secondary group-hover:text-primary-400 transition-colors">
          {initials}
        </span>
      </div>
      <p className="text-sm font-medium text-text-primary">{skill.name}</p>
      <p className="text-xs text-text-muted mt-1">{skill.description}</p>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id={SECTION_IDS.skills} className="section">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map(cat => {
              const CatIcon = categoryIcons[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary-500 text-white shadow-glow'
                      : 'glass text-text-secondary hover:text-text-primary hover:border-primary-500/30'
                  }`}
                >
                  {CatIcon && <CatIcon className="w-4 h-4" />}
                  {cat}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}