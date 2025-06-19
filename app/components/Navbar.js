'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!navOpen);

  // Typewriter effect for name
  const nameText = "Nero Oghenekome";
  const [displayedName, setDisplayedName] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(nameText.slice(0, i + 1));
      i++;
      if (i === nameText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Navbar background change on scroll
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className={`left-0 top-0 w-full z-10 ease-in-out duration-300 ${navOpen ? 'h-screen overflow-hidden' : ''}`}></div>

      <div className={`w-full mx-auto flex justify-between items-center px-6 py-4 gap-4 ease-in-out duration-300
        ${navBg ? 'bg-slate-900 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
        fixed left-1/2 -translate-x-1/2 top-0 w-full`}>
        
        <Link href='/'>
          <h1 className='text-2xl text-gray-400 sm:text-4xl whitespace-nowrap'>
            <span className='font-bold text-3xl'>{displayedName}</span>
            <span className="animate-pulse text-purple-400">|</span>
          </h1>
        </Link>

        <ul className='hidden sm:flex items-center gap-2'>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((text, i) => (
            <li key={i}>
              <Link href={`/${text === 'Home' ? '' : '#' + text.toLowerCase()}`}>
                <span className='font-mono text-amber-50 text-xl px-3 py-2 hover:text-purple-400 cursor-pointer transition-colors'>
                  {text}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/1CIFVhet9BXzypocQ4JsYJuw_AWC-MhED/view?usp=drive_link"
          className="hidden sm:flex items-center border bg-green-300 text-white px-4 py-2 rounded-lg hover:bg-blue-300 transition-colors duration-200 font-medium"
          target="_blank" rel="noopener noreferrer"
        >
          <span className='mr-2'>Download CV</span>
          <FaDownload size={18} />
        </a>

        <div
          className={`block sm:hidden z-10 transition-transform duration-300 ${navOpen ? 'rotate-90 scale-110' : ''}`}
          onClick={toggleNav}
          aria-label="Open navigation menu"
          tabIndex={0}
          role="button"
        >
          <CiMenuBurger size={24} color='white' />
        </div>

        {/* Global scroll behavior */}
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>

        {/* Mobile nav */}
        <div
          className={`fixed inset-0 flex flex-col justify-center items-center w-full h-screen bg-black/95 text-center sm:hidden z-20 transition-all duration-500 ${
            navOpen
              ? 'opacity-100 pointer-events-auto scale-100'
              : 'opacity-0 pointer-events-none scale-95'
          }`}
          style={{ backdropFilter: navOpen ? 'blur(2px)' : 'none' }}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            onClick={toggleNav}
            aria-label="Close navigation menu"
          >
            &times;
          </button>

          <ul
            className={`space-y-6 transform transition-all duration-500 ${navOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
            onClick={e => e.stopPropagation()}
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact', 'CV'].map((text, i) => (
              <li key={i}>
                {text === 'CV' ? (
                  <a
                    href='https://drive.google.com/file/d/1CIFVhet9BXzypocQ4JsYJuw_AWC-MhED/view?usp=drive_link'
                    target="_blank" rel="noopener noreferrer"
                    onClick={toggleNav}
                  >
                    <span className='font-mono text-amber-50 text-3xl px-6 py-2 hover:text-purple-400 transition-colors duration-200 active:scale-95'>
                      {text}
                    </span>
                  </a>
                ) : (
                  <Link href={`/${text === 'Home' ? '' : '#' + text.toLowerCase()}`} onClick={toggleNav}>
                    <span className='font-mono text-amber-50 text-3xl px-6 py-2 hover:text-purple-400 transition-colors duration-200 active:scale-95'>
                      {text}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
