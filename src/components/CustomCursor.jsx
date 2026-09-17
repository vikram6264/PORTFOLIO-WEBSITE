import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const enterInteractive = () => setIsHovering(true);
    const leaveInteractive = () => setIsHovering(false);

    window.addEventListener('mousemove', move, { passive: true });

    const interactives = document.querySelectorAll('a, button, .card, .card-hover-lift');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', enterInteractive);
      el.addEventListener('mouseleave', leaveInteractive);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, .card, .card-hover-lift');
      els.forEach(el => {
        el.removeEventListener('mouseenter', enterInteractive);
        el.removeEventListener('mouseleave', leaveInteractive);
        el.addEventListener('mouseenter', enterInteractive);
        el.addEventListener('mouseleave', leaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', enterInteractive);
        el.removeEventListener('mouseleave', leaveInteractive);
      });
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
      animate={{
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        x: isHovering ? -20 : -10,
        y: isHovering ? -20 : -10,
        opacity: 1
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${
        isHovering ? 'border-primary-400 bg-primary-400/10' : 'border-text-secondary/50'
      }`} />
    </motion.div>
  );
}