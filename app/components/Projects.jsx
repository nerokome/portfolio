'use client'
import React from 'react'
import Heading from './Heading'
import { motion } from 'framer-motion'

const Projects = () => {
  // Animation: fade in on scroll using Framer Motion

  return (
    <motion.div
      id='projects'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <section className='flex items-center justify-center py-10 sm:py-5'>
        <Heading title="Projects" />
      </section>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
        <div>
          <h4 className='text-lg sm:text-sm lg:text-xl text-white px-4 sm:px-2 py-2 text-center sm:text-left'>
            <span className='text-sky-300'>CHATAPP</span>: Firebase authentication for signup,
            Login and logout with email, cloud firestore for storing and
            organizing document-based structures and enabling real-time interactions.
          </h4>
          <div className='flex flex-col sm:flex-row items-center justify-center sm:h-auto w-full sm:w-screen'>
            <div className='mb-20'>
              <div className='shadow-lg flex flex-col sm:flex-row gap-4 px-4 sm:px-10 py-10 mb-0 animate-pulse items-center'>
                <img className='w-[250px] sm:w-[200px] lg:w-[300px] h-[300px] sm:h-[250px] lg:h-[400px] rounded-2xl' src="/home.jpg" alt="" />
              </div>
              <div className='flex flex-col sm:flex-row items-center justify-center'>
                <a
                  href="https://nerochat-ovvk.vercel.app/"
                  className="flex items-center border bg-slate-800 text-white
                    px-3 py-2 mr-0 sm:mr-2.5 mb-2 sm:mb-0 rounded-lg hover:bg-pink-300 
                    transition-colors duration-200 font-medium text-center "
                >
                  <h1 className='text-center'>View project</h1>
                </a>
                <a
                  href="https://github.com/nerokome/nerochat.git"
                  className="flex items-center border bg-purple-300 text-white
                    px-3 py-2 rounded-lg hover:bg-slate-800 
                    transition-colors duration-200 font-medium text-center "
                >
                  <h1 className='text-center'>View code</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-lg sm:text-sm lg:text-xl text-white px-4 sm:px-2 py-2 text-center sm:text-left'>
          <span className='text-sky-300'>EXPENSE TRACKER</span>: A tracker to input daily expenses, 
          calculate and store them in a Firebase database.
        </h4>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:h-auto w-full sm:w-screen'>
          <div className='mb-20'>
            <div className='shadow-lg flex flex-col sm:flex-row gap-4 px-4 sm:px-10 py-10 mb-0 animate-pulse items-center'>
              <img className='w-[250px] sm:w-[200px] lg:w-[300px] h-[300px] sm:h-[250px] lg:h-[400px] rounded-2xl' src="/expense.jpg" alt="" />
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center'>
              <a
                href="https://expense-sooty-nine.vercel.app/"
                className="flex items-center border bg-slate-800 text-white
                  px-3 py-2 mr-0 sm:mr-2.5 mb-2 sm:mb-0 rounded-lg hover:bg-pink-300 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View project</h1>
              </a>
              <a
                href="https://github.com/nerokome/Expense.git"
                className="flex items-center border bg-purple-300 text-white
                  px-3 py-2 rounded-lg hover:bg-slate-800 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View code</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-lg sm:text-sm lg:text-xl text-white px-4 sm:px-2 py-2 text-center sm:text-left'>
          <span className='text-sky-300'>CARTIER WATCHES</span>: E-commerce app with provider state management, 
          allowing adding/removing items from the cart.
        </h4>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:h-auto w-full sm:w-screen'>
          <div className='mb-20'>
            <div className='shadow-lg flex flex-col sm:flex-row gap-4 px-4 sm:px-10 py-10 mb-0 animate-pulse items-center'>
              <img className='w-[250px] sm:w-[200px] lg:w-[300px] h-[300px] sm:h-[250px] lg:h-[400px] rounded-2xl' src="/shop.jpg" alt="" />
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center'>
              <a
                href="https://nerogit.vercel.app/"
                className="flex items-center border bg-slate-800 text-white
                  px-3 py-2 mr-0 sm:mr-2.5 mb-2 sm:mb-0 rounded-lg hover:bg-pink-300 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View project</h1>
              </a>
              <a
                href="https://github.com/nerokome/nerogit.git"
                className="flex items-center border bg-purple-300 text-white
                  px-3 py-2 rounded-lg hover:bg-slate-800 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View code</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className='text-lg sm:text-sm lg:text-xl text-white px-4 sm:px-2 py-2 text-center sm:text-left'>
          <span className='text-sky-300'>MODERN HOME UI</span><span>: A smart home app to regulate</span> 
          the state of devices with intuitive UI.
        </h4>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:h-auto w-full sm:w-screen'>
          <div className='mb-20'>
            <div className='shadow-lg flex flex-col sm:flex-row gap-4 px-4 sm:px-10 py-10 mb-0 animate-pulse items-center'>
              <img className='w-[250px] sm:w-[200px] lg:w-[300px] h-[300px] sm:h-[250px] lg:h-[400px] rounded-2xl' src="/modern.jpg" alt="" />
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center'>
              <a
                href="https://nerohome.vercel.app/"
                className="flex items-center border bg-slate-800 text-white
                  px-3 py-2 mr-0 sm:mr-2.5 mb-2 sm:mb-0 rounded-lg hover:bg-pink-300 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View project</h1>
              </a>
              <a
                href="https://github.com/nerokome/modern.git"
                className="flex items-center border bg-purple-300 text-white
                  px-3 py-2 rounded-lg hover:bg-slate-800 
                  transition-colors duration-200 font-medium text-center "
              >
                <h1 className='text-center'>View code</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
