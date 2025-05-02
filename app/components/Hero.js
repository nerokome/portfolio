'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });


const Hero = () => {
  return (
    <div className='flex items-center justify-center text-white mb-80'>
        <div className='container mx-auto px-4 mb-0 flex justify-between 
        sm:flex items-center'>
            <div className='max-w-[450px] text-white flex flex-col gap-[40px] items-center lg:items-start'>
                <div className='inline-block align-middle'>
                    <img 
                        className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full border-5 border-purple-500 mt-20 sm:flex justify-center items-center'  
                        src="/vaga.png" 
                        alt="Round image"
                    />
                </div>
                <div className=''>
                    <h1 className='text-5xl'>I'm Nero </h1>
                    <h4 className='text-4xl mt-3 text-purple-300 '>
                      <Typewriter
                        options={{
                          strings: [
                            'A Software Engineer',
                             'A Web Developer',
                              'A Mobile Developer'
                            ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 50,
                          delay: 75,
                        }}
                      />
                    </h4>
                    <h4 className='text-2xl text-orange-300 '>
                      I Develop Web And Mobile Applications
                    </h4>
                </div>
                <div className='bg-orange-300 h-[2px] w-[40px]'></div>
            </div>
        </div>
    </div>
  )
}

export default Hero
