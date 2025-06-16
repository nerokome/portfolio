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
    },
    {
      title: "EXPENSE TRACKER",
      description:
        "A tracker to input daily expenses, calculate and store them in a Firebase database.",
      image: "/expense.jpg",
      projectUrl: "https://expense-sooty-nine.vercel.app/",
      codeUrl: "https://github.com/nerokome/Expense.git",
    },
    {
      title: "CARTIER WATCHES",
      description:
        "E-commerce app with provider state management, allowing adding/removing items from the cart.",
      image: "/shop.jpg",
      projectUrl: "https://nerogit.vercel.app/",
      codeUrl: "https://github.com/nerokome/nerogit.git",
    },
    {
      title: "MODERN HOME UI",
      description:
        "A smart home app to regulate the state of devices with intuitive UI.",
      image: "/modern.jpg",
      projectUrl: "https://nerohome.vercel.app/",
      codeUrl: "https://github.com/nerokome/modern.git",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:px-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-slate-900 rounded-xl shadow-lg overflow-hidden p-4 flex flex-col items-center"
          >
            <img
              className="w-full h-[250px] object-cover rounded-lg mb-4"
              src={project.image}
              alt={project.title}
            />
            <h4 className="text-lg text-white text-center mb-2">
              <span className="text-sky-300 font-semibold">{project.title}</span>
            </h4>
            <p className="text-sm text-gray-300 text-center mb-4">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={project.projectUrl}
                className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-pink-300 transition-colors duration-200 font-medium"
              >
                View project
              </a>
              <a
                href={project.codeUrl}
                className="bg-purple-300 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
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
