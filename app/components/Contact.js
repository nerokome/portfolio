import React from 'react'
import Heading from './Heading'

const Contact = () => {
return (
        <div id='contact' className='mb-50'>
                <section className='flex items-center justify-center'>
                        <Heading title="Contact" />
                </section>
                <div className='px-10 py-10'>
                        <div className='flex items-center space-x-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300'>
                                <a href="https://github.com/nerokome" target="_blank" rel="noopener noreferrer">
                                        <img className='w-[50px] h-[50px] rounded-full' src="/download.png" alt="Download" />
                                </a>
                                <h2 className='text-xl text-amber-50'>Nerokome</h2>
                        </div>
                        <div className='flex items-center space-x-4 mt-10 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300'>
                                <a href="https://x.com/nerokome?s=21&t=9eD6yL3-XMpKGdHtbYi4TA" target="_blank" rel="noopener noreferrer">
                                        <img className='w-[50px] h-[50px] rounded-full' src="/X.png" alt="X" />
                                </a>
                                <h2 className='text-xl text-amber-50'>Nero 彼ですか 🪖</h2>
                                
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg mt-10 bg-gray-900 hover:bg-gray-700 transition-colors duration-300'>
                        
                                <a href="https://www.linkedin.com/in/oghenero-oghenekome-997360259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                                        <img className='w-[50px] h-[50px] rounded-full' src="/linn.png" alt="LinkedIn" />
                                </a>
                                <h2 className='text-xl text-amber-50'>Oghenero Oghenekome</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg mt-10 bg-gray-900 hover:bg-gray-700 transition-colors duration-300'>
                        <a href="mailto:nerooghenekome@gmail.com">
                                        <img className='w-[50px] h-[50px] rounded-full' src="/email.png" alt="Email" />
                                </a>
                                <h2 className='text-xl text-amber-50'>nerooghenekome@gmail.com</h2>

                        </div>
                </div>
                <div className='flex items-center justify-center mt-60'>
                <h1 className='text-amber-50 text-xl font-mono'> 2025 @ Nerokome</h1>    
                </div>
        </div>
)
}

export default Contact
