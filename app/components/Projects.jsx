'use client'
import React from 'react'
import Heading from './Heading'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "CHATAPP",
      description:
        "Firebase authentication for signup, Login and logout with email, cloud firestore for storing and organizing document-based structures and enabling real-time interactions.",
      image: "/home.jpg",
      projectUrl: "https://nerochat-ovvk.vercel.app/",
      codeUrl: "https://github.com/nerokome/nerochat.git",
      stack: "Dart Flutter|| Firebase Cloud|| Firestore",
    },
    {
      title: "EXPENSE TRACKER",
      description:
        "A tracker to input daily expenses, calculate and store them in a Firebase database.",
      image: "/expense.jpg",
      projectUrl: "https://expense-sooty-nine.vercel.app/",
      codeUrl: "https://github.com/nerokome/Expense.git",
      stack: "Next js|| Tailwind|| CSS Firebase",
    },
    {
      title: "CARTIER WATCHES",
      description:
        "E-commerce app with provider state management, allowing adding/removing items from the cart.",
      image: "/shop.jpg",
      projectUrl: "https://nerogit.vercel.app/",
      codeUrl: "https://github.com/nerokome/nerogit.git",
      stack: "Dart|| Flutter|| provider ",
    },
    {
      title: "MODERN HOME UI",
      description:
        "A smart home app to regulate the state of devices with intuitive UI.",
      image: "/modern.jpg",
      projectUrl: "https://nerohome.vercel.app/",
      codeUrl: "https://github.com/nerokome/modern.git",
      stack: "Dart|| Flutter ",
    },
    {
      title: "MINI REAL ESTATE SELECTOR",
      description: `The Mini Real Estate Floor Selector is a modern, interactive web prototype
         built to design and simulate a high-rise real estate apartment exploration experience.
          The application enables users to visually navigate through towers, select specific floors,
          and examine available apartment layouts in a clean and responsive user interface.

         The user journey begins with a choice between three towers—Tower A, B, and c`,
      image: "/apart.png",
      projectUrl: "https://mini-state.vercel.app/",
      codeUrl: "https://github.com/nerokome/ministate.git",
      stack: "React.js|| Tailwind CSS || Framer Motion",
    },
     {
      title: "MUSIC CRYPTO BLOCKCHAIN",
      description: `vibrant fusion of blockchain innovation and musical creativity. Designed to empower artists, 
      listeners, and developers, it’s a decentralized platform where music meets Web3. Users can explore NFT music drops, access open-source tools,
       and connect with a global community of creators.
       With a playful, futuristic interface and dynamic features, the app makes crypto feel fun and music feel empow`,
      image: "/crypto.jpg",
      projectUrl: "https://music-two-drab.vercel.app/",
      codeUrl: "https://github.com/nerokome/music",
      stack: "React.js|| Tailwind CSS || Framer Motion",
    },
  ];


  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <section className="flex items-center justify-center py-10 sm:py-5">
        <Heading title="Projects" />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-transparent 
             shadow-gray-900/50 p-4 flex flex-col items-center"
          >
            <img
              className="w-full h-[250px] object-cover rounded-lg mb-4"
              src={project.image}
              alt={project.title}
            />
            <h4 className="text-lg text-white text-center mb-2">
              <span className="text-sky-500 font-semibold">{project.title}</span>
            </h4>
            <p className="text-sm text-gray-400 text-center mb-4">
              {project.description}
            </p>
             <p className="text-lg font-mono font-bold text-sky-500 text-center mb-4">
              {project.stack}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={project.projectUrl}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-400 transition-colors duration-200 font-medium"
              >
                View project
              </a>
              <a
                href={project.codeUrl}
                className="bg-purple-300 text-white px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-medium"
              >
                View code
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
