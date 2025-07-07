'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ClipReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
animate={isInView ? { opacity: 1, scale: 1 } : {}}
transition={{ duration: 1, ease: 'easeOut', delay }}

    >
      {children}
    </motion.div>
  );
}
