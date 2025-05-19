'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });


const Hero = () => {
  return (
    <div className="relative flex items-center justify-center text-white mb-80 overflow-hidden">
      {/* Animated Moving Shapes */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Floating Circle 1 */}
        <motion.div
          className="absolute rounded-full bg-purple-400 opacity-40"
          style={{ width: 180, height: 180, top: 40, left: 60 }}
          animate={{
            y: [0, 40, 0, -40, 0],
            x: [0, 30, 0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Floating Circle 2 */}
        <motion.div
          className="absolute rounded-full bg-blue-400 opacity-30"
          style={{ width: 120, height: 120, bottom: 80, right: 80 }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        {/* Floating Square */}
        <motion.div
          className="absolute bg-orange-300 opacity-20 rounded-lg"
          style={{ width: 90, height: 90, top: 180, right: 120 }}
          animate={{
            y: [0, 25, 0, -25, 0],
            x: [0, -15, 0, 15, 0],
            rotate: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>
      <div className='container mx-auto px-4 mb-0 flex justify-between sm:flex items-center z-10 relative'>
        <motion.div
          className='max-w-[450px] text-white flex flex-col gap-[40px] items-center lg:items-start'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className='inline-block align-middle'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                className='w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] rounded-full border-2 border-purple-300 mt-20 sm:flex justify-center items-center shadow-[0_0_20px_5px_rgba(168,85,247,0.5)] animate-glow'
                src="/Nero.jpg"
                alt="Round image"
                style={{
                  boxShadow: '0 0 20px 5px rgba(168,85,247,0.5), 0 0 40px 10px rgba(168,85,247,0.15)',
                  borderColor: '#d6bbfb', // light purple
                  animation: 'glow 2s ease-in-out infinite alternate'
                }}
              />
              <style jsx>{`
                @keyframes glow {
                  0% {
                    box-shadow: 0 0 20px 5px rgba(168,85,247,0.5), 0 0 40px 10px rgba(168,85,247,0.15);
                  }
                  100% {
                    box-shadow: 0 0 30px 10px rgba(168,85,247,0.7), 0 0 60px 15px rgba(168,85,247,0.25);
                  }
                }
              `}</style>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className='text-2xl'>I'm Nero </h1>
            <h4 className='text-2xl mt-3 text-purple-300 '>
              <Typewriter
                options={{
                  strings: [
                    'A Software Engineer',
                    'A Web Developer',
                    'A Mobile Developer'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </h4>
            <h4 className='text-2xl text-orange-300 '>
              I Develop Web And Mobile Applications
            </h4>
          </motion.div>
          <motion.div
            className='bg-orange-300 h-[2px] w-[40px]'
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
