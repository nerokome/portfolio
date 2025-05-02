import React from 'react'
import Heading from './Heading'

const About = () => {
  return (
    <div id='about' className='mb-12'>
      <section className='flex items-center justify-center'>
        <Heading title="About Me" />
        <div className=''></div>
      </section>
      <div className='px-10 mb-50'>
        <h4 className='text-sm text-white sm:text-base'>
          I'm Nero Oghenekome, I am a dedicated software developer with years of experience in designing and building innovative web and mobile applications. Specializing in web and mobile app development, 
          I am proficient in a wide range of technologies, including JavaScript, React, and Flutter, enabling the creation of responsive and scalable solutions tailored to client needs.
          Having worked on projects ranging from e-commerce platforms to productivity apps, a strong advocate for clean code and agile methodologies, I thrive in collaborative environments.
          Beyond coding, I am passionate about staying at the forefront of tech trends, frequently exploring advancements in artificial intelligence and cloud computing. In their free time, I enjoy contributing to open-source projects, mentoring aspiring developers, and sharing insights on tech blogs. 
          With a commitment to continuous learning and innovation, I am always ready to tackle new challenges in the ever-evolving world of software development.
        </h4>
      </div>
    </div>
  )
}

export default About
