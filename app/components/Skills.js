import React from 'react'
import Heading from './Heading'
import { FaFlutter } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiFirebaseLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
return (
    <div id='skills' className='mb-50 sm:mb-0'>
        <section className='flex items-center justify-center'>
            <Heading title="Skills" />
        </section>
        <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 px-10 gap-6 animate-pulse'>
            <div className='shadow-lg flex flex-col gap-4 px-10 py-8 animate-pulse'>
                <FaFlutter className='text-blue-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-col gap-4 px-10 py-8'>
                <FaHtml5 className='text-red-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-col gap-4 px-10 py-8 animate-pulse'>
                <FaCss3Alt className='text-blue-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-col gap-4 px-10 py-8'>
                <RiNextjsFill className='text-gray-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-row gap-4 px-10 py-8 animate-pulse'>
                <FaReact className='text-blue-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-row gap-4 px-10 py-8'>
                <IoLogoJavascript className='text-yellow-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-col gap-4 px-10 py-8 animate-pulse'>
                <RiTailwindCssFill className='text-blue-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-col gap-4 px-10 py-8'>
                <RiFirebaseLine className='text-red-500' style={{ fontSize: '3rem' }} />
            </div>
            <div className='shadow-lg flex flex-col gap-4 px-10 py-8 animate-pulse'>
                <FaGithub className='text-white' style={{ fontSize: '3rem' }} />
            </div>
        </div>
    </div>
)
}

export default Skills
