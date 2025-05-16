import Head from 'next/head';

import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <radialGradient id="bg-gradient" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4facfe" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#43e97b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38f9d7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#bg-gradient)" />
          <path
            d="M0,700 Q720,900 1440,700 L1440,900 L0,900 Z"
            fill="url(#wave-gradient)"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,700 Q720,900 1440,700 L1440,900 L0,900 Z;
                M0,720 Q720,850 1440,720 L1440,900 L0,900 Z;
                M0,700 Q720,900 1440,700 L1440,900 L0,900 Z
              "
            />
          </path>
        </svg>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
