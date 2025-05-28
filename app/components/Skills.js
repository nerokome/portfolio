'use client';
import React from 'react'
import Heading from './Heading'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
        useEffect(() => {
                AOS.init({ duration: 800 });
        }, []);

        const skills = [
                { img: "/HTML.png", label: "HTML", animate: "" },
                { img: "/CSS.png", label: "CSS", animate: "" },
                { img: "/react.png", label: "React", animate: "animate-spin" },
                { img: "/Nextjs.png", label: "Next JS", animate: "" },
                { img: "/Firebase.png", label: "Firebase", animate: "" },
                { img: "/JS.png", label: "Javascript", animate: "" },
                { img: "/Tail.png", label: "Tailwind CSS", animate: "" },
                { img: "/flutter.png", label: "Dart", animate: "" },
                { img: "/download.png", label: "Github", animate: "" },
                { img: "/figma.png", label: "Figma", animate: "" },
        ];

        return (
                <div id='skills' className='mb-50 sm:mb-0'>
                        <section className='flex items-center justify-center'>
                                <Heading title="Technical Skills" />
                        </section>
                        <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 px-10 gap-6  justify-center'>
                                {skills.map((skill, idx) => (
                                        <div
                                                key={skill.label}
                                                className='flex items-center space-x-4 rounded-lg hover:bg-gray-900 transition-colors duration-300'
                                                data-aos="fade-up"
                                                data-aos-delay={idx * 100}
                                        >
                                                <img
                                                        className={`w-[40px] h-[40px] rounded-full ${skill.animate}`}
                                                        src={skill.img}
                                                        alt={skill.label}
                                                />
                                                <h2 className='text-xl text-amber-50'>{skill.label}</h2>
                                        </div>
                                ))}
                        </div>
                </div>
        );
}

export default Skills
