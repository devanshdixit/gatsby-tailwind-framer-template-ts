// src/pages/index.tsx
import React from 'react';
import AnimatedBox from '../components/AnimatedBox';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to Gatsby with Tailwind and Framer Motion!</h1>
      <AnimatedBox />
    </main>
  );
};

export default HomePage;
