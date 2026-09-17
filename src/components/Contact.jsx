import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { profile } from '../data/profile';
import { SECTION_IDS } from '../utils/constants';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ];

  return (
    <section id={SECTION_IDS.contact} className="section">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's connect and build something great together.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimatedSection delay={0.1} direction="left">
            <div className="space-y-6">
              <div className="card p-6">
                <p className="text-text-secondary leading-relaxed mb-6">
                  I'm currently looking for internship and entry-level opportunities in software development, 
                  AI/ML, and backend engineering. Feel free to reach out if you'd like to collaborate or just connect!
                </p>

                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-text-primary hover:text-primary-400 transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-text-primary">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <blockquote className="text-text-secondary italic border-l-2 border-primary-500/50 pl-4">
                  "Great things never come from comfort zones."
                </blockquote>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} direction="right">
            <form onSubmit={handleSubmit} className="card p-6 space-y-5">
              <div>
                <label htmlFor="name" className="label">Name</label>
                <input
                  id="name"
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="label">Email</label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="input resize-none"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full"
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <p className="text-xs text-text-muted text-center">
                Frontend-only for now. Backend integration pending.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}