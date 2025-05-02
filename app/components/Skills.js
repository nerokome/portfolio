import React from 'react'
import Heading from './Heading'

const Skills = () => {
return (
    <div id='skills' className='mb-50 sm:mb-0'>
        <section className='flex items-center justify-center'>
            <Heading title="Technical Skills" />
        </section>
        <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 px-10 gap-6  justify-center'>
        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/HTML.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>HTML</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/CSS.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>CSS</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full animate-spin' src="/react.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>React</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/Nextjs.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>Next JS</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/Firebase.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>Firebase</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/JS.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>Javascript</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/Tail.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>Tailwind CSS</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/flutter.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>Dart</h2>
                        </div>
                        <div className='flex items-center space-x-4 rounded-lg  hover:bg-gray-900 transition-colors duration-300'>
                                
                                        <img className='w-[40px] h-[40px] rounded-full' src="/download.png" alt="Download" />
                                
                                <h2 className='text-xl text-amber-50'>Github</h2>
                        </div>
        </div>
    </div>
)
}

export default Skills
