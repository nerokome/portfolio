'use client'
import React from 'react'
import Heading from './Heading'
import { useEffect, useRef } from 'react'

const Contact = () => {
const contactSections = [
        {
                href: "https://github.com/nerokome",
                img: "/download.png",
                alt: "Download",
                label: "Nerokome"
        },
        {
                href: "https://x.com/nerokome?s=21&t=9eD6yL3-XMpKGdHtbYi4TA",
                img: "/X.png",
                alt: "X",
                label: "Nero 彼ですか 🪖"
        },
        {
                href: "https://www.linkedin.com/in/oghenero-oghenekome-997360259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                img: "/linn.png",
                alt: "LinkedIn",
                label: "Oghenero Oghenekome"
        },
        {
                href: "mailto:nerooghenekome@gmail.com",
                img: "/email.png",
                alt: "Email",
                label: "nerooghenekome@gmail"
        }
];

// Add this style to space them evenly
const contactContainerClass = 'flex flex-col gap-10 px-10 py-10 mb-0';

return (
        <div id='contact' className='mb-50'>
                <section className='flex items-center justify-center'>
                        <Heading title="Contact" />
                </section>
                <div className={`${contactContainerClass}`}>
                        {contactSections.map((section, idx) => {
                                const ref = useRef(null);

                                useEffect(() => {
                                        const node = ref.current;
                                        if (!node) return;
                                        const handleScroll = () => {
                                                const rect = node.getBoundingClientRect();
                                                if (rect.top < window.innerHeight - 100) {
                                                        node.classList.add('opacity-100', 'translate-y-0');
                                                } else {
                                                        node.classList.remove('opacity-100', 'translate-y-0');
                                                }
                                        };
                                        window.addEventListener('scroll', handleScroll);
                                        handleScroll();
                                        return () => window.removeEventListener('scroll', handleScroll);
                                }, []);

                                return (
                                        <div
                                                key={section.label}
                                                ref={ref}
                                                className="flex items-center space-x-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition-all duration-700 opacity-0 translate-y-10"
                                                style={{ transitionProperty: 'opacity, transform' }}
                                        >
                                                <a href={section.href} target="_blank" rel="noopener noreferrer">
                                                        <img className='w-[50px] h-[50px] rounded-full' src={section.img} alt={section.alt} />
                                                </a>
                                                <h2 className='text-xl text-amber-50 font-mono'>{section.label}</h2>
                                        </div>
                                );
                        })}
                </div>
                <div className='flex items-end justify-center-safe mt-60 mb-10'>
                        <h1 className='text-amber-50 text-xl font-mono'> 2025 @ Nerokome</h1>
                </div>
        </div>
)
}

export default Contact
