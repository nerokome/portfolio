'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });


const Hero = () => {
  return (
    <div className='flex items-center justify-center text-white mb-80'>
      <div className='container mx-auto px-4 mb-0 flex justify-between sm:flex items-center'>
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
            <img
              className='w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] rounded-full border-5 border-slate-500 mt-20 sm:flex justify-center items-center'
              src="/Nero.jpg"
              alt="Round image"
            />
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
