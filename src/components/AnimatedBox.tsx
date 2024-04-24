// src/components/AnimatedBox.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBox: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 max-w-sm mx-auto bg-blue-500 text-white rounded-lg shadow-lg"
    >
      This is an animated box!
    </motion.div>
  );
};

export default AnimatedBox;
