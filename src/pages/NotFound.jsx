import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="section min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</h1>
          <p className="text-xl text-text-secondary mb-2">Page Not Found</p>
          <p className="text-text-muted mb-8">The page you're looking for doesn't exist.</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => navigate('/')} className="btn-primary">
              <ArrowLeft className="w-4 h-4" /> Go Home
            </button>
            <a href="/" className="btn-secondary">
              <Home className="w-4 h-4" /> Homepage
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}