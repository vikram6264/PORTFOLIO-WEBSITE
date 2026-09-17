import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, AlertTriangle, Lightbulb, Code2, Target, MessageSquare } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
import { projects } from '../data/projects';
import AnimatedSection from '../components/AnimatedSection';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <section className="section min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-8">The project you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        </div>
      </section>
    );
  }

  const sections = [
    { icon: Target, title: 'Problem Statement', content: project.problemStatement },
    { icon: Lightbulb, title: 'Solution', content: project.solution },
    { icon: CheckCircle, title: 'Features', items: project.features },
    { icon: Code2, title: 'Architecture', content: project.architecture },
    { icon: MessageSquare, title: 'My Contribution', content: project.myContribution },
    { icon: AlertTriangle, title: 'Challenges', items: project.challenges },
    { icon: Lightbulb, title: 'Future Improvements', items: project.futureImprovements },
  ];

  return (
    <section className="section pt-28 pb-16">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-text-secondary hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </button>
        </motion.div>

        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-bg-secondary mb-8 border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-bg-card to-secondary-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-text-muted/10">
                {project.title.split(' ').map(w => w[0]).join('').slice(0, 4)}
              </span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{project.title}</h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(tech => (
                <span key={tech} className="badge-primary">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <GithubIcon /> GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {sections.map(({ icon: Icon, title, content, items }, i) => (
            <AnimatedSection key={title} delay={0.1 + i * 0.05}>
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{title}</h3>
                </div>
                {content && <p className="text-text-secondary leading-relaxed">{content}</p>}
                {items && (
                  <ul className="space-y-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                        <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}