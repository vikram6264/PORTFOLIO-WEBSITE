import { ExternalLink, Award } from 'lucide-react';
import { certificates } from '../data/certificates';
import { SECTION_IDS } from '../utils/constants';
import AnimatedSection from './AnimatedSection';

export default function Certificates() {
  return (
    <section id={SECTION_IDS.certificates} className="section">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">
            <span className="text-gradient">Certificates</span>
          </h2>
          <p className="section-subtitle">
            My certifications and learning achievements
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <AnimatedSection key={cert.id} delay={i * 0.1}>
              <div className="card-hover-lift flex flex-col h-full">
                <div className="relative h-48 rounded-xl overflow-hidden bg-bg-secondary mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-bg-card to-secondary-500/20" />
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ display: cert.image ? 'none' : 'flex' }}>
                    <Award className="w-16 h-16 text-primary-500/20" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-1">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary">{cert.title}</h3>
                      <p className="text-sm text-primary-400">{cert.organization}</p>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map(skill => (
                      <span key={skill} className="badge text-xs">{skill}</span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors"
                    >
                      View Certificate <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}