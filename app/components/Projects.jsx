 'use client'
 import React from 'react'
import Heading from './Heading'
import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const projectData = [
  {
    title: "CHATAPP",
    description: "Firebase authentication for signup, Login and logout with email, cloud firestore for storing and organizing document-based structures and enabling real-time interactions.",
    image: "/home.jpg",
    projectUrl: "https://nerochat-ovvk.vercel.app/",
    codeUrl: "https://github.com/nerokome/nerochat.git"
  },
  {
    title: "EXPENSE TRACKER",
    description: "A tracker to input daily expenses, calculate and store them in a Firebase database.",
    image: "/expense.jpg",
    projectUrl: "https://expense-sooty-nine.vercel.app/",
    codeUrl: "https://github.com/nerokome/Expense.git"
  },
  {
    title: "CARTIER WATCHES",
    description: "E-commerce app with provider state management, allowing adding/removing items from the cart.",
    image: "/shop.jpg",
    projectUrl: "https://nerogit.vercel.app/",
    codeUrl: "https://github.com/nerokome/nerogit.git"
  },
  {
    title: "MODERN HOME UI",
    description: "A smart home app to regulate the state of devices with intuitive UI.",
    image: "/modern.jpg",
    projectUrl: "https://nerohome.vercel.app/",
    codeUrl: "https://github.com/nerokome/modern.git"
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const Projects = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div id='projects'>
      <section className='flex items-center justify-center py-10 sm:py-5'>
        <Heading title="Projects" />
      </section>
      <div ref={ref}>
        {projectData.map((project, idx) => (
          <motion.div
            key={project.title}
            className="mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <h4 className='text-lg sm:text-sm lg:text-xl text-white px-4 sm:px-2 py-2 text-center sm:text-left'>
              <span className='text-sky-300'>{project.title}</span>: {project.description}
            </h4>
            <div className='flex flex-col sm:flex-row items-center justify-center sm:h-auto w-full sm:w-screen'>
              <div className='mb-20'>
                <motion.div
                  className='shadow-lg flex flex-col sm:flex-row gap-4 px-4 sm:px-10 py-10 mb-0 items-center'
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img className='w-[250px] sm:w-[200px] lg:w-[300px] h-[300px] sm:h-[250px] lg:h-[400px] rounded-2xl' src={project.image} alt="" />
                </motion.div>
                <div className='flex flex-col sm:flex-row items-center justify-center'>
                  <a
                    href={project.projectUrl}
                    className="flex items-center border bg-slate-800 text-white
                      px-3 py-2 mr-0 sm:mr-2.5 mb-2 sm:mb-0 rounded-lg hover:bg-pink-300 
                      transition-colors duration-200 font-medium text-center "
                  >
                    <h1 className='text-center'>View project</h1>
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center border bg-purple-300 text-white
                      px-3 py-2 rounded-lg hover:bg-slate-800 
                      transition-colors duration-200 font-medium text-center "
                  >
                    <h1 className='text-center'>View code</h1>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
