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
    {
      title: "MINI REAL ESTATE SELECTOR",
      description: `The Mini Real Estate Floor Selector is a modern, interactive web prototype
         built using React.js and Tailwind CSS, designed to simulate a high-rise real estate apartment exploration experience. The application enables users to visually navigate through towers, select specific floors, and examine available apartment layouts in a clean and responsive user interface.

The user journey begins with a choice between three towers—Tower A, B, and C. Once a tower is selected, the user is presented with 15 selectable floors, arranged from top to bottom. Upon selecting a floor, the application displays four distinct apartment layouts, each featuring a realistic thumbnail image (fetched dynamically from Unsplash) and essential metadata such as area size, unit type (e.g., 2BHK), and room count.

A key interaction highlight is the smooth hover and tap animation: when a user hovers over or taps an apartment card, the thumbnail subtly scales up and the background floor section darkens slightly, enhancing focus and user engagement. These transitions are optimized for both desktop and mobile experiences.

Clicking on any apartment brings up a detailed view, showcasing a larger version of the layout image alongside full metadata. The system uses dynamic mock data generation, ensuring each of the 15 floors displays a unique set of apartment layouts.`,
      image: "/apart.png",
      projectUrl: "https://mini-state.vercel.app/",
      codeUrl: "https://github.com/nerokome/ministate.git",
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
            className="bg-gray-400 rounded-xl shadow-lg overflow-hidden border border-transparent 
             shadow-gray-900/50 p-4 flex flex-col items-center"
          >
            <img
              className="w-full h-[250px] object-cover rounded-lg mb-4"
              src={project.image}
              alt={project.title}
            />
            <h4 className="text-lg text-white text-center mb-2">
              <span className="text-sky-800 font-semibold">{project.title}</span>
            </h4>
            <p className="text-sm text-gray-900 text-center mb-4">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={project.projectUrl}
                className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-400 transition-colors duration-200 font-medium"
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
